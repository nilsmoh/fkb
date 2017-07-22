import { TFahrtage, assertNever, FAEHRT_T, ZEIT_24, TZeit24 } from "./SaxBaseTypes";
import { ZEILE_T, BLOCK_T, TNormalZeileEintrag, ZUGLAUF_BERECHNET, EAnAb, KBS_ABWEICHUNG_T, SingleDirectionScheduleTyped } from "./SaxParsedTypes";

    export const LAUFEINTRAG_NORMAL: "LAUFEINTRAG_NORMAL" = "LAUFEINTRAG_NORMAL";
    export const LAUFEINTRAG_KEINHALT: "LAUFEINTRAG_KEINHALT" = "LAUFEINTRAG_KEINHALT";

    export const LAUFEINTRAG_AN: "LAUFEINTRAG_AN" = "LAUFEINTRAG_AN";
    export const LAUFEINTRAG_GELOESCHT: "LAUFEINTRAG_GELOESCHT" = "LAUFEINTRAG_GELOESCHT";

    export type LaufEintragIncomplete = LaufEintragNormal | LaufEintragAn | LaufEintragGeloescht | LaufEintragKeinHalt | LaufEintragKommeAusKbs | LaufEintragVerlasseNachKbs;

    export interface LaufEintragNormal {
        kind: typeof LAUFEINTRAG_NORMAL,
        BhfTag: string,
        AnZeit: TZeit24 | null,
        AbZeit: TZeit24 | null
    }

    export interface LaufEintragKeinHalt {
        kind: typeof LAUFEINTRAG_KEINHALT,
        BhfTag: string
    }

    export interface LaufEintragAn {
        kind: typeof LAUFEINTRAG_AN
    }

    export interface LaufEintragGeloescht {
        kind: typeof LAUFEINTRAG_GELOESCHT
    }

    //ankommen / verlassen der kbs

    export const LAUFEINTRAG_KOMMEAUSKBS: "LAUFEINTRAG_KOMMEAUSKBS" = "LAUFEINTRAG_KOMMEAUSKBS";
    export const LAUFEINTRAG_VERLASSENACHKBS: "LAUFEINTRAG_VERLASSENACHKBS" = "LAUFEINTRAG_VERLASSENACHKBS";

    export interface LaufEintragKommeAusKbs {
        kind: typeof LAUFEINTRAG_KOMMEAUSKBS;
    }

    export interface LaufEintragVerlasseNachKbs {
        kind: typeof LAUFEINTRAG_VERLASSENACHKBS;
    }

    export interface Lauf {
        Nummer: string;
        TagAbhaengig: Array<{
            Gueltig: TFahrtage;
            Ablauf: Array<LaufEintragNormal | LaufEintragKeinHalt | LaufEintragKommeAusKbs | LaufEintragVerlasseNachKbs>
        }>
    }

    export class ZugExtraktor {

        public static printZuglauf(arr: Array<LaufEintragNormal | LaufEintragKeinHalt | LaufEintragKommeAusKbs | LaufEintragVerlasseNachKbs>) {
            arr.forEach((a) => {
                var ae = a;
                switch (ae.kind) {
                    case LAUFEINTRAG_KEINHALT:
                        console.log(ae.BhfTag + " kein Halt");
                        break;
                    case LAUFEINTRAG_NORMAL:
                        console.log(ae.BhfTag + " " + (ae.AnZeit ? "an " + ae.AnZeit.src : "") + (ae.AbZeit ? "ab " + ae.AbZeit.src : ""));
                        break;
                    case LAUFEINTRAG_KOMMEAUSKBS:
                        console.log(" komme aus kbs");
                        break;
                    case LAUFEINTRAG_VERLASSENACHKBS:
                        console.log(" verlasse nach kbs");
                        break;
                    default:
                        return assertNever(ae);
                }
            });
        }

        public static fixZugLauf(z: Array<LaufEintragIncomplete>): Array<LaufEintragNormal | LaufEintragKeinHalt | LaufEintragKommeAusKbs | LaufEintragVerlasseNachKbs> {

            //TODO ank in vorherige einbauen, geloeschte entfernen 
            //var tAnk = false;
            var tResultReversed: Array<LaufEintragNormal | LaufEintragKeinHalt | LaufEintragKommeAusKbs | LaufEintragVerlasseNachKbs> = [];
            for (let i = z.length - 1; i >= 0; i--) {
                var en = z[i];
                switch (en.kind) {
                    case LAUFEINTRAG_NORMAL:
                    case LAUFEINTRAG_KEINHALT:
                    case LAUFEINTRAG_KOMMEAUSKBS:
                    case LAUFEINTRAG_VERLASSENACHKBS:

                        tResultReversed.push(en);
                        break;
                    case LAUFEINTRAG_GELOESCHT:
                        //nicht rauskopieren
                        break;
                    case LAUFEINTRAG_AN:
                        var tVor = z[i - 1];
                        switch (tVor.kind) {
                            case LAUFEINTRAG_NORMAL:
                                tVor.AnZeit = tVor.AbZeit;
                                tVor.AbZeit = null;
                                break;
                            default:
                            //ignore
                        }
                        // nicht rauskopieren
                        break;

                }

            }
            var tRes = tResultReversed.reverse();
            console.log("fixfolge:", z, tRes)
            return tRes;
        }

        //lese Zuglaeufe aus Tabelle aus
        public static findeZuglaeufe(s: SingleDirectionScheduleTyped): Array<Lauf> {
            var tResult: Array<Lauf> = [];

            var tZugNr: string | null = null;

            // 0) bestimme Spaltenzahl
            var tLen = 0;
            s.Zeilen.forEach((z) => {
                switch (z.kind) {
                    case ZEILE_T.NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_T.ANSCHLUSS_WEITER_AB:
                    case ZEILE_T.ANSCHLUSS_WEITER_IN:
                    case ZEILE_T.KLASSEN:
                    case ZEILE_T.ZUGNR:
                        // ignored for counting columns
                        break;
                    default:
                        return assertNever(z);
                }
            });

            var tCurrentZugNr: string | undefined;
            var tCurrentFolge: Array<LaufEintragIncomplete> = [];
            var tCurrentFahrtage: TFahrtage = {
                kind: FAEHRT_T.IMMER
            };
            // gehe von oben nach unten
            for (var sp = 0; sp < tLen; sp++) {

                //var tCurrentLauf: Lauf | null = null;

                var tZeilenZahl = s.Zeilen.length;
                for (var zei = 0; zei < tZeilenZahl; zei++) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        //case ZEILE_NORMAL:
                        //case ZEILE_ANSCHLUSS_AUS:
                        //case ZEILE_ANSCHLUSS_NACH_IN:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                        case ZEILE_T.NORMAL:
                        case ZEILE_T.ANSCHLUSS_WEITER_AB:
                        case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        case ZEILE_T.KLASSEN:
                        case ZEILE_T.ZUGNR:
                            var tEintrag: TNormalZeileEintrag = { kind: BLOCK_T.ERROR, Grund: "temp" };
                            if (tZeile.kind == ZEILE_T.KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            } else
                                if (tZeile.kind == ZEILE_T.ZUGNR) {
                                    tEintrag = tZeile.ZugNummern[sp];
                                }
                                else {
                                    tEintrag = tZeile.Zeiteintraege[sp];
                                }

                            //todo speicherlogik von fuellogik entkoppeln, speichern kann auch bei zeit unbekannt notwendig sein

                            //bestimme ob gespeichert werden muss, d.h. zuglauf zuende
                            var tJetztSpeichern = false;

                            if (tCurrentZugNr) {
                                // d.h es gibt was zu speichern
                                if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                    if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)) {
                                        tJetztSpeichern = true;
                                    }
                                } else {
                                    tJetztSpeichern = true;
                                }
                            }

                            if (tJetztSpeichern && tCurrentZugNr) {
                                var tL: Array<any> = [];
                                var tTagAbh = [{                                                   // Eintrag 0 TODO auslesen
                                    Gueltig: tCurrentFahrtage, // {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER  },
                                    Ablauf: tL
                                }];

                                //var tOldZugnr = tCurrentZugNr;

                                var tCurrentLauf: Lauf = {
                                    Nummer: tCurrentZugNr,
                                    TagAbhaengig: tTagAbh
                                };



                                var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                                console.log("save New ", tCurrentLauf.Nummer, "len raw:", tCurrentFolge.length, " len (fixed) : ", tCurrentFolgeCompl.length);
                                tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                                tResult.push(tCurrentLauf);
                                //console.log("tResult: ",JSON.stringify(tResult));
                                tCurrentFolge = [];

                                // reset and wait for new
                                tCurrentZugNr = undefined;
                                tCurrentFahrtage = { kind: FAEHRT_T.IMMER };
                            }


                            if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                if ((tCurrentZugNr == undefined)) {

                                    if ((tEintrag.BerechneterZugLauf.ZugNr != null) && (tEintrag.BerechneterZugLauf.ZugNr.length > 0)) {
                                        tCurrentFolge = [];
                                        tCurrentFahrtage = { kind: FAEHRT_T.IMMER };
                                        tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                        console.log("start new ", tCurrentZugNr);
                                    }
                                }



                                /*
                                 if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)){
                                 //
                                     console.log("ungleich",tCurrentZugNr, tEintrag.BerechneterZugLauf.ZugNr );
    
                                     
                                     var tTagAbh = [{                                                   // Eintrag 0 TODO auslesen
                                        Gueltig: {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER  },
                                        Ablauf: []
                                     }];
                                     
                                     //var tOldZugnr = tCurrentZugNr;
                                     if (tCurrentZugNr){
                                     tCurrentLauf = {
                                         Nummer: tCurrentZugNr,
                                         TagAbhaengig: tTagAbh
                                     };
                                     }else{
                                        tCurrentLauf = null;
                                     }
                                     
                                     tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                     
                                     if ((tCurrentLauf) && (tCurrentLauf.Nummer.length > 0)){
                                         console.log("save ", tCurrentLauf.Nummer, " len (raw) : ", tCurrentFolge.length   );
    
                                         var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                                         tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                                         tResult.push(tCurrentLauf);
                                         console.log("tResult: ",JSON.stringify(tResult));
                                         tCurrentFolge = [];
                                     }else{
                                        //empty number zuglauf not pushed into result
                                         //tCurrentFolge = [];
                                     }
    
                                 }else
                                 {
                                     //console.log("save ",tCurrentFolge);
                                 //fortsetzung bestehender eintrag braucht nichts spezielles
                                 }
                                */

                                switch (tEintrag.kind) {
                                    case BLOCK_T.ZEITEINTRAG:
                                        switch (tZeile.kind) {
                                            case ZEILE_T.NORMAL:
                                                var tEnt: LaufEintragNormal = {
                                                    kind: LAUFEINTRAG_NORMAL,
                                                    BhfTag: tZeile.BhfTag,
                                                    AnZeit: null,
                                                    AbZeit: null
                                                };
                                                if (tEintrag.Zeit.kind == ZEIT_24) {
                                                    if ((tZeile.AnAb == EAnAb.FirstAb) || (tZeile.AnAb == EAnAb.FollowAb)) {
                                                        tEnt.AbZeit = tEintrag.Zeit;
                                                    }
                                                    if ((tZeile.AnAb == EAnAb.An)) {
                                                        tEnt.AnZeit = tEintrag.Zeit;
                                                    }
                                                } else {
                                                    console.error("Rohzeit sollte hier nicht mehr vorkommen !!!");
                                                }
                                                // TODO Laufeintrag eintragen
                                                //if (tCurrentFolge){
                                                tCurrentFolge.push(tEnt);
                                                //console.log(tCurrentFolge);
                                                //}

                                                break;
                                        }
                                        //todo
                                        break;
                                    case BLOCK_T.LEER:
                                        break;
                                    case BLOCK_T.KEINHALT:
                                        switch (tZeile.kind) {
                                            case ZEILE_T.NORMAL:
                                                var tEntK: LaufEintragKeinHalt = {
                                                    kind: LAUFEINTRAG_KEINHALT,
                                                    BhfTag: tZeile.BhfTag
                                                };
                                                tCurrentFolge.push(tEntK);
                                                break;
                                        }


                                        break;
                                    case BLOCK_T.ANKUNFT: // darueberliegendes war eigentlich eine ankunft, vgl posteintrag in rkb 1914 nr 90 1240 zug endet in wilkau, nicht in silberstrasse
                                        console.warn("Todo handle ankunft, soll vorherigen eintrag auf an wechseln");
                                        if (tCurrentFolge) {  //???
                                            var tEntAn: LaufEintragAn = {
                                                kind: LAUFEINTRAG_AN

                                            };
                                            tCurrentFolge.push(tEntAn);
                                        }
                                        break;
                                    case BLOCK_T.BLOCK:
                                        console.warn("todo auszulesender blockinhalt: ", tEintrag.Blockinhalt);
                                        if (tEintrag.Passend) {
                                            if (tEintrag.Blockinhalt) {
                                                //aus / nach andere kursbuchstrecke
                                                switch (tEintrag.Blockinhalt.KbsAbweichung.kind) {
                                                    case KBS_ABWEICHUNG_T.AUS:
                                                        var tEntKo: LaufEintragKommeAusKbs = {
                                                            kind: LAUFEINTRAG_KOMMEAUSKBS
                                                        };
                                                        tCurrentFolge.push(tEntKo);
                                                        break;
                                                    case KBS_ABWEICHUNG_T.NACH:
                                                        var tEntN: LaufEintragVerlasseNachKbs = {
                                                            kind: LAUFEINTRAG_VERLASSENACHKBS
                                                        };
                                                        tCurrentFolge.push(tEntN);
                                                        break;
                                                    case KBS_ABWEICHUNG_T.KEINE:
                                                        break;
                                                    default:
                                                        return assertNever(tEintrag.Blockinhalt.KbsAbweichung);
                                                }
                                                // gueltigkeit
                                                switch (tEintrag.Blockinhalt.Fahrtage.kind) {
                                                    case FAEHRT_T.WERKTAGS:
                                                        tCurrentFahrtage = { kind: FAEHRT_T.WERKTAGS };
                                                        break;
                                                    case FAEHRT_T.SONNUNDFESTTAGS:
                                                        tCurrentFahrtage = { kind: FAEHRT_T.SONNUNDFESTTAGS };
                                                        break;
                                                }
                                            }



                                        }


                                        break;
                                    case BLOCK_T.DICKERSTRICH:
                                        break;
                                    default:
                                        return assertNever(tEintrag);

                                }


                            }
                            else {
                                console.log("save block error or zuglauf unbekannt:   save should save zuglauf unbekannt?  zei: ", zei, " sp: ", sp, JSON.stringify(tEintrag));
                            }



                            /*
                                        if ((tEintrag.kind != BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)){
                                            if (tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr){
                                                //if ((tCurrentZugNr != undefined)&&(tCurrentZugNr.length > 0)) {
                                                     if (tEintrag.BerechneterZugLauf.ZugNr){
                                                            tEintrag.BerechneterZugLauf.isStart = true; 
                                                     }
                                                //}
                                               
                                                tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                            }
                                        }
                           */
                            break;
                        //case ZEILE_ZUGNR:
                        //        //tZeile.ZugNummern
                        //        //TODO

                    }
                }

            }



            if (tCurrentZugNr != undefined) {
                // todo save last entry of last column
                // code copied from above for now
                var tL: Array<any> = [];

                var tTagAbh2 = [{                                                   // Eintrag 0 TODO auslesen
                    Gueltig: tCurrentFahrtage, // {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER  },
                    Ablauf: tL
                }];

                //var tOldZugnr = tCurrentZugNr;

                var tCurrentLauf: Lauf = {
                    Nummer: tCurrentZugNr,
                    TagAbhaengig: tTagAbh2
                };



                var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                console.log("save New ", tCurrentLauf.Nummer, " len (fixed) : ", tCurrentFolgeCompl.length);
                tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                tResult.push(tCurrentLauf);

            }

            //



            return tResult;
        }
    }