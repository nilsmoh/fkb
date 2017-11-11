import {
    KBS_ABWEICHUNG_T, TKbsAbweichung_Keine, TBlockInhaltZugnummerOderKlasse,
    TAnschlussWeiterAbZeile, TAnschlussWeiterInZeile, /*TBlockinhaltBase,*/ TAnschlussZubringerAbZeile, TAnschlussZubringerInZeile,
    TBlockInhaltRawOk, TBlockInhaltRawUnbekannt,
    TError, TPFEIL_START, TPFEIL_ZIEL, TKEINPFEIL, /*EScope,*/ BlockRaw_ok, TPfeilZiel,
    TPfeilStart, TKbsAbweichung_Aus, TKbsAbweichung_Nach,

    BlockRawUnbekannt,
    TKbsAbweichung, TPfeilInfo,
    EBahnverwaltung,

    ZEILE_T,

    //TZeiteintrag,
    EAnAb, EQuelle, SingleDirectionScheduleTyped,
    //ETimeValid, 
    ZeitZeileZusatzInfo, TNormalzeile, TZugNrZeile, TKlassenNrZeile, TKlassenNrEintrag, TNormalZeileEintrag, TZugNummernEintrag, TZeile




} from "./SaxParsedTypes"

import * as SaxInput from "./SaxInputTypes";

import { /*EKlassen,*/ assertNever, /*TEchteZeit, TZeitRoh, GesternHeuteMorgen, ZEIT_ROH,*/
    //GUELTIG_AB, GUELTIG_IMMER, GUELTIG_NIE,     FAEHRT_IMMER, FAEHRT_SONNUNDFESTTAGS, FAEHRT_WERKTAGS, 
    FAHRPREIS_T, TFahrpreisEinfach, TFahrpreisAb,
    TFahrpreisEinfachUndRueck, /* ETimeValid, ZEIT_24, TZeit24,*/
} from "./SaxBaseTypes";
import { EinzelEintragInputBaseKinded, EinzelZeileZZK, EinzelZeileNumless, IZeilenZusatzInfoKinded } from "./SaxInputTypes";

/**
 * code coverting
 * SaxInput to SaxParsed
 */



/**
  * SaxSchedulesTyped.Importer.do(SaxSchedules.InputData.einzelplaene[2])
  */


export class Importer {


    //korrigiere RohZeiten in GesternHeuteMorgen 24h Format - rendern kann spaetter wieder im unterstrichen Format erfolgen bei bedarf

    public static berechneZeiten(s: SingleDirectionScheduleTyped): SingleDirectionScheduleTyped {
        console.log("berechneZeiten()");

        // 0) bestimme Spaltenzahl
        var tLen = 0;
        s.Zeilen.forEach((z) => {
            switch (z.kind) {
                case ZEILE_T.NORMAL:
                    tLen = z.Zeiteintraege.length;
                    break;
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

        //Anschlusszeit wird direkt veraendert
        let fill24 = function (pEintrag: TZeiteintrag, offsetH: number, ghm: GesternHeuteMorgen) {

            var EintragRohZeit = 0;
            switch (pEintrag.Zeit.kind) {
                case ZEIT_ROH:
                    EintragRohZeit = pEintrag.Zeit.RohZeit;
                    break;
                case ZEIT_24:
                    console.error("fill24 mit ZEIT24 (trotzdem aus src)");
                    EintragRohZeit = pEintrag.Zeit.src;
            }

            var tRohStunde12 = Math.floor(EintragRohZeit / 100);
            var tRohMinute12 = (EintragRohZeit - (tRohStunde12 * 100));

            if (tRohStunde12 == 12) {
                tRohStunde12 = 0;
            }

            var tZeit24: TZeit24 = {
                kind: ZEIT_24,
                Minute24: tRohMinute12,
                Stunde24: tRohStunde12 + offsetH,
                WelcherTag: ghm,
                Valid: ETimeValid.Berechnet24,
                src: EintragRohZeit
            };
            //Eintrag.Stunde24 = tRohStunde12 + offsetH;
            //Eintrag.Minute24 = tRohMinute12;
            //Eintrag.WelcherTag = ghm;
            //Eintrag.Valid = ETimeValid.Berechnet24;
            pEintrag.Zeit = tZeit24;
        };

        // 1) echte Zeiteintraege in normalzeilen , die hoffentlich oben links alle HEUTE MORGEN beginnen
        console.log("fuelle Normalzeile + Anschluss_NACH   Zeiteintraege, Annahme: beginn heute vormittag")
        for (var sp = 0; sp < tLen; sp++) {
            //console.log("--- ",sp);
            s.Zeilen.forEach((z) => {
                switch (z.kind) {
                    case ZEILE_T.NORMAL:
                    case ZEILE_T.ANSCHLUSS_WEITER_AB:
                    case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        var tEintrag = z.Zeiteintraege[sp];
                        //zugriff nur auf einen eintrag
                        switch (tEintrag.kind) {
                            case BLOCK_T.ZEITEINTRAG:
                                // vorgaenger nach links suchen  
                                var tFestgelegt = false;   //suche nach links hat was ergeben 

                                for (var i = sp - 1; i >= 0; i--) {

                                    var tVorgaenger = z.Zeiteintraege[i];

                                    switch (tVorgaenger.kind) {
                                        case BLOCK_T.ZEITEINTRAG:
                                            if ((tVorgaenger.Zeit.kind == ZEIT_ROH) || (tVorgaenger.Zeit.Valid == ETimeValid.Nein)) {
                                                console.error(" LINKS SOLLTE VALIDE SEIN !!!!");
                                            }
                                            else
                                                if ((tVorgaenger.Zeit.Valid == ETimeValid.Berechnet24) || (tVorgaenger.Zeit.Valid == ETimeValid.Vorgabe24)) {
                                                    //was nutzbares gefunde, suche kann abgebrochen werden
                                                    // Grundeintrag 0..11 basiert eintragen
                                                    fill24(tEintrag, 0, GesternHeuteMorgen.Heute);
                                                    if (tEintrag.Zeit.kind == ZEIT_ROH) {
                                                        console.error("fill24 liefert ZEIT_ROH ???");
                                                    } else {
                                                        // falls Nachmittag 12h draufaddieren                                        
                                                        if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                            // fortgesetzter Vormittag
                                                            //console.log("a ", tEintrag.RohZeit);
                                                            //fill24(tEintrag,0,GesternHeuteMorgen.Heute);
                                                        }
                                                        else {
                                                            fill24(tEintrag, 12, GesternHeuteMorgen.Heute);
                                                        }

                                                        //falls Morgen frueh: nochmal 12 drauf (d.h. mit 24 neu fuellen) falls es nicht reicht

                                                        if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                            // fortgesetzter Vormittag
                                                            //console.log("a ", tEintrag.RohZeit);
                                                            //fill24(tEintrag,0,GesternHeuteMorgen.Heute);
                                                        }
                                                        else {
                                                            fill24(tEintrag, 24, GesternHeuteMorgen.Heute);
                                                        }
                                                        i = -1; // nicht weiter nach links suchen, da geeigneter Eintrag gerade gefunden
                                                        tFestgelegt = true;
                                                    }
                                                }
                                            break;
                                        case BLOCK_T.LEER:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.DICKERSTRICH:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.ERROR:
                                        case BLOCK_T.ANKUNFT:
                                        case BLOCK_T.BLOCK:
                                        case BLOCK_T.KLASSEN_WERT:
                                        case BLOCK_T.ZUG_NR_WERT:


                                            // diese linksliegende Felder werden uebersprungen, suche nur links liegen Zeitfelder            
                                            break;

                                        default:
                                            return assertNever(tVorgaenger);
                                    }
                                }

                                if (tFestgelegt) {
                                    //   was gefundn undefined berechnet
                                }
                                else {       // nach links kein vorgaenger zu finden, setze default 0..11 Heute
                                    //console.log("d ", tEintrag.RohZeit);
                                    fill24(tEintrag, 0, GesternHeuteMorgen.Heute);
                                }
                                break;
                            case BLOCK_T.LEER:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.DICKERSTRICH:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.ERROR:
                            case BLOCK_T.ANKUNFT:
                            case BLOCK_T.BLOCK:
                            case BLOCK_T.KLASSEN_WERT:
                            case BLOCK_T.ZUG_NR_WERT:
                                //nothing to fill for these entries            
                                break;
                            default:
                                return assertNever(tEintrag);

                        }
                        break;
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_T.ZUGNR:
                    case ZEILE_T.KLASSEN:
                        //ignored in first fill step
                        break;
                    default:
                        return assertNever(z);
                }
            });
        }



        // 2) Anschluss aus (d.h. fuelle Kopfzeile)
        // suche pro spalte nach unten den zug der erreicht werden soll (unten bereits 24h + heute)
        console.log("fuelle Anschluss_Aus, d.h. Kopfbereich durch einzelne Spaltenweise suchen")
        for (var sp = 0; sp < tLen; sp++) {
            s.Zeilen.forEach((z, zidx, arr) => {
                switch (z.kind) {
                    //case ZEILE_ANSCHLUSS_AUS:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                        //suche 24h drunter
                        var tAnschlusszeit = z.Zeiteintraege[sp];
                        if (tAnschlusszeit.kind == BLOCK_T.ZEITEINTRAG) {
                            for (var di = zidx + 1; di < s.Zeilen.length; di++) {
                                var zzz_zeileDrunter = s.Zeilen[di];
                                if (zzz_zeileDrunter.kind == ZEILE_T.NORMAL) {
                                    var eee_drunterEintrag = zzz_zeileDrunter.Zeiteintraege[sp];
                                    if (eee_drunterEintrag.kind == BLOCK_T.ZEITEINTRAG) {
                                        if (eee_drunterEintrag.Zeit.kind == ZEIT_ROH) {
                                            console.error("NORMALZEILE SOLLTE SEIT OBEN KORREKT GEFUELLT SEIN?!");
                                        }
                                        else {
                                            var tAnschlusszeit_roh = 0;
                                            if (tAnschlusszeit.Zeit.kind == ZEIT_ROH) {
                                                tAnschlusszeit_roh = tAnschlusszeit.Zeit.RohZeit;
                                                console.error("ANSCHLUSS EINTRAG KORREKT BERECHNET , war ROH ", tAnschlusszeit.Zeit.RohZeit);
                                            } else {
                                                tAnschlusszeit_roh = tAnschlusszeit.Zeit.src;
                                                console.error("ANSCHLUSS EINTRAG ZU FRUEH BERECHNET ?! ", tAnschlusszeit.Zeit.src);
                                                //oder jede zeile neu -> muss aus schleife ?!
                                            }
                                            if (tAnschlusszeit_roh > eee_drunterEintrag.Zeit.src) {  //(ankunft 11:30 weiter 1:44)
                                                // gestern oder mittagszeit 
                                                if (eee_drunterEintrag.Zeit.Stunde24 > 12) {
                                                    //mittag
                                                    fill24(tAnschlusszeit, 0, GesternHeuteMorgen.Heute);


                                                } else {
                                                    //morgens/gestern
                                                    //fill24(tanschlusszeit, nachmittag, gestern)
                                                    fill24(tAnschlusszeit, 12, GesternHeuteMorgen.Gestern);
                                                    console.log("kori2x ", eee_drunterEintrag.Zeit.src);
                                                }
                                            }
                                            else {
                                                // heute normal
                                                //fill24(tanschlusszeit, vormittag, heute)
                                                fill24(tAnschlusszeit, 0, GesternHeuteMorgen.Heute);
                                            }
                                            //}else{
                                            //
                                            //   console.error("ANSCHLUSS EINTRAG ZU FRUEH BERECHNET ?!");
                                            //}
                                        }
                                    }
                                    di = s.Zeilen.length + 99;  //erster eintrag zur berechnung verwendet, ignoriere weitere
                                }
                            }
                        }

                }
            });
        }


        //3) korrigere aufsteigende AnschlussAus fuer Mittag
        //     TODO fix mehrere zeilen oben

        console.log("korrigere Anschluss_Aus Zeiten fuer Mittags-Ueberlaeufe");
        //var tFirst = true;
        //var tLast: TZeiteintrag |null =  null;
        s.Zeilen.forEach((z, zidx, arr) => {
            var tFirst = true;
            var tLast: TZeit24 //TZeiteintrag 
                | null = null;
            switch (z.kind) {
                //case ZEILE_ANSCHLUSS_AUS:
                case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    z.Zeiteintraege.forEach((e) => {
                        if (e.kind == BLOCK_T.ZEITEINTRAG) {
                            if (e.Zeit.kind == ZEIT_ROH) {
                                console.error("HIER SOLLTE ALLES ZEIT24 sein !!!");
                            } else {
                                //console.warn("TODO fix ANSCHLUSS AUS ZEITEN");
                                if (tFirst) {
                                    tLast = e.Zeit;
                                    tFirst = false;
                                } else {
                                    if (((tLast!.Stunde24 * 100 + tLast!.Minute24) > (e.Zeit.Stunde24 * 100 + e.Zeit.Minute24)) && tLast!.WelcherTag == GesternHeuteMorgen.Heute) {
                                        console.log("kori3 ", e.Zeit.src);
                                        e.Zeit.Stunde24 += 12;

                                    }
                                    tLast = e.Zeit;
                                }
                            }
                        }
                    });
            }
        });




        //4 korriere tage heute / morgen  fuer eintraege unten rechts
        console.log("korriere tage heute / morgen  fuer eintraege unten rechts");
        s.Zeilen.forEach((z, zidx, arr) => {
            switch (z.kind) {
                case ZEILE_T.NORMAL:
                //case ZEILE_ANSCHLUSS_NACH_IN:
                case ZEILE_T.ANSCHLUSS_WEITER_AB:
                case ZEILE_T.ANSCHLUSS_WEITER_IN:
                    z.Zeiteintraege.forEach((e) => {
                        if (e.kind == BLOCK_T.ZEITEINTRAG) {
                            if (e.Zeit.kind == ZEIT_24) {
                                if (e.Zeit.Stunde24 >= 24 && e.Zeit.WelcherTag == GesternHeuteMorgen.Heute) {
                                    e.Zeit.Stunde24 -= 24;
                                    e.Zeit.WelcherTag = GesternHeuteMorgen.Morgen;
                                }
                            }
                            else {
                                console.error("ROHZEIT sollte hier laengst ersetzt sein !!!");

                            }
                        }
                    });
            }
        });
        return s;
    }

    /*
    public static createTBlockEintrag_single(BlockInhalt: TBlockinhaltBaseV2): TBlockEintrag {
        var tResultEntryB: TBlockEintrag = {
            kind: BLOCK_T.BLOCK,
            Senkrecht: false,
            Valid: true, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
            Start: true,
            Breite: 1,
            Hoehe: 1,
            Passend: true, // Gegenteil waere fern
            Referenzkey: undefined,   // a..r, t..z
            Blockinhalt: BlockInhalt,
            BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
        };
        return tResultEntryB;
    }
    */

    public static parseZeitZeileZusatzInfo(rawEntry: SaxInput.IZeilenZusatzInfo): ZeitZeileZusatzInfo {
        var tZeitZeilenZusatzInfo: ZeitZeileZusatzInfo = {
            AnschlussNummern: [],
            Via: null,
            Ortsname: null,
            Fahrpreise: { kind: FAHRPREIS_T.KEINE_ANGABE },
            Valid: false,
            Ref: null,
            Lfd: -1,
            Raw: JSON.stringify(rawEntry)
        };

        var tWillBeValid = true;
        if (rawEntry.fk) { //fahrpreis
            if (rawEntry.fk.length == 2) {
                // nur einfache Fahrt
                var tFahrpreisInfo2: TFahrpreisEinfach = {
                    kind: FAHRPREIS_T.EINFACH,
                    Einfach2: rawEntry.fk[0],
                    Einfach3: rawEntry.fk[1]
                };
                tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo2;
            } else if (rawEntry.fk.length == 4) {
                var tFahrpreisInfo4: TFahrpreisEinfachUndRueck = {
                    kind: FAHRPREIS_T.EINFACH_UND_RUECK,
                    Einfach2: rawEntry.fk[0],
                    Einfach3: rawEntry.fk[1],
                    Rueck2: rawEntry.fk[2],
                    Rueck3: rawEntry.fk[3]
                };

                tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo4;

            } else {
                tWillBeValid = false;
                console.warn("fk invalid, weder laenge 2 noch laenge 4");
            }
        }

        if (rawEntry.fkab) { // fahrpreis ab 
            var tFahrpreisAb: TFahrpreisAb = {
                kind: FAHRPREIS_T.AB,
                AbfahrtsOrt: rawEntry.fkab
            };
            tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisAb;


        }


        if (rawEntry.nr) { tZeitZeilenZusatzInfo.AnschlussNummern.push(rawEntry.nr.toString()) }

        if (rawEntry.nrn) { tZeitZeilenZusatzInfo.AnschlussNummern = rawEntry.nrn.map((x) => { return x.toString(); }); }

        if (rawEntry.ort) {
            tZeitZeilenZusatzInfo.Ortsname = rawEntry.ort;
            //tWillBeValid = false; 
        }

        if (rawEntry.via) {
            //console.warn("via not implemented");
            //tWillBeValid = false;
            tZeitZeilenZusatzInfo.Via = [rawEntry.via];
        }

        if (rawEntry.lfd){
            tZeitZeilenZusatzInfo.Lfd = rawEntry.lfd;
        }

        



        tZeitZeilenZusatzInfo.Valid = tWillBeValid;
        return tZeitZeilenZusatzInfo

    }

    /**
     * adds kind to zeitzeilenzusatzinfo, i.e. optional last entry in line
     * @param inp 
     */
    public static kindifyZZZ(inp: SaxInput.SingleDirectionScheduleInput): SaxInput.SingleDirectionScheduleInputKindedZZZ {
        var tZeilenKK: SaxInput.EinzelZeileZZK[] = [];
        inp.zeilen.forEach((z: SaxInput.EinzelZeile) => {
            var kindedZeile: SaxInput.EinzelZeileZZK = [];
            z.forEach((e) => {
                var ek: SaxInput.EinzelEintragInputZZ = 0;
                if (SaxInput.isIZeilenZusatzInfo(e)) {
                    ek = { kind: BLOCK_T.ZEILENZUSATZINFO, ...e }
                } else {
                    ek = e;
                }
                kindedZeile.push(ek);
            });
            tZeilenKK.push(kindedZeile);
        });
        var tResult: SaxInput.SingleDirectionScheduleInputKindedZZZ = {
            route1900: inp.route1900,
            comment: inp.comment,
            todo: inp.todo,
            seite: inp.seite, // seite in FKB wie gedruckt
            klassen: inp.klassen,
            caption: inp.caption,
            zeilen: tZeilenKK,
            ZellenVerweise: inp.ZellenVerweise
        };
        console.log(tResult);
        return tResult;
    }

    public static kindifynumbers(inp: SaxInput.SingleDirectionScheduleInputKindedZZZ): SaxInput.SingleDirectionScheduleInputNumless {


        console.log("Before numbers: ", JSON.stringify(inp));

        var tZeilenNum: Array<SaxInput.EinzelZeileNumless> = [];
        inp.zeilen.forEach((inpzeile) => {

            var tOutZeile: SaxInput.EinzelZeileNumless = [];
            // todo find type
            var inpzeile_0 = inpzeile[0];

            if (("number" != typeof inpzeile_0)
                && (inpzeile_0.kind == BLOCK_T.ZEILEN_TYP)
                && (inpzeile_0.zeilentyp == EZeilentyp.ZUGNRZEILE)) {
                //zugnrzeile
                inpzeile.forEach((entry) => {
                    tOutZeile.push(("number" == typeof entry) ? { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "" + entry , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT} } : entry);
                });
            } else {
                //nur zeit oder km
                inpzeile.forEach((entry, idxInZeile) => {
                    if (idxInZeile === 0) {
                        //km
                        tOutZeile.push(("number" == typeof entry) ?
                            { kind: BLOCK_T.KM_WERT, km: entry }
                            : entry);
                    } else {
                        tOutZeile.push(("number" == typeof entry) ?
                            { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: entry }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }
                            : entry);
                    }
                });



            }

            tZeilenNum.push(tOutZeile);



            // change all nums accordingly to km, rohzeit oder zugnummer

        });

        var tResult: SaxInput.SingleDirectionScheduleInputNumless = {
            route1900: inp.route1900,
            comment: inp.comment,
            todo: inp.todo,
            seite: inp.seite, // seite in FKB wie gedruckt
            klassen: inp.klassen,
            caption: inp.caption,
            zeilen: tZeilenNum,
            ZellenVerweise: inp.ZellenVerweise
        };

        console.log(tZeilenNum);
        return tResult;
    }

    public static erstelleZZZausHeaderArray(zeilenAnfang:EinzelZeileNumless   ):ZeitZeileZusatzInfo{
        
        var tNum:Array<string | number> = [];
        var tBhf = null;
        var tLfd = -1;
        var tRef = null;
        
        // fuelle vordere
        zeilenAnfang.forEach((ze)=>{
            switch (ze.kind){
                case BLOCK_T.ANSCHLUSS_NUMMERN:
                    tNum = ze.fkbnummern;
                    break;
                case BLOCK_T.BHFTAG:
                    tBhf = ze;
                    break;
                
                case BLOCK_T.HEADERLFD:
                    tLfd = ze.nummer;
                    break;    
                case BLOCK_T.HEADERREF:
                    tRef = ze.ref;
                    break;
                    
            }
        });
        
            
        return {
            AnschlussNummern: tNum,
            Via: null,
            Ortsname: tBhf,
            Fahrpreise:  {kind: FAHRPREIS_T.KEINE_ANGABE },
            Ref: tRef,
            Lfd: tLfd,
            Valid: true,
            Raw: ""
        };
    }

    public static parse(input: SaxInput.SingleDirectionScheduleInputNumless): SingleDirectionScheduleTyped {
        // fuelle Grunddaten
        var tResult: SingleDirectionScheduleTyped = {
            Quelle: EQuelle.FritzscheSommer1900,
            Kommentar: (input.comment) ? input.comment : "",
            Ueberschrift: input.caption,
            //Bahnverwaltung: (input.bahn == SaxSchedules.Sachs) ? EBahnverwaltung.KSaechsStsEB : EBahnverwaltung.NichtAngegeben,  //todo andere bahnen
            Route1900: input.route1900.toString(),
            Klassen: ZI_Creator.parseKlassenString(input.klassen),
            Seite: input.seite, // seite in FKB wie gedrukt
            Zeilen: [],
            ZusatzBloecke: []
        }

        //hier sind nur noch kinded inputs enthalten !!!

        console.log("input for parsing:", JSON.stringify(input.zeilen));
        //ergaenze Zeilen
        if (input.zeilen != null) {

            var tNextAbIsFirst = true;   // erste ab speziell speichern, damit "aus " in die tabelle gerendert werden kann

            for (var i = 0; i < input.zeilen.length; i++) {
                var zeile: SaxInput.EinzelZeileNumless = input.zeilen[i];
                if ((zeile != null) && (zeile.length >= 2)) {
                    //ab, an, oder eine form von anschlusszeile (anschluss_aus, _anschluss_aus_ziel, _anschluss_nach_start,  _anschluss_nach_in )
                    var zeile_0 = zeile[0];
                    var zeile_1 = zeile[1];

                    console.log("Zeile ",i);

                    // alle ausser klassenzeile, zugnrzeile

                    var tResultZeileN: TNormalzeile = {
                        kind: ZEILE_T.NORMAL, // EZeilentyp.Normalzeile,
                        Km: (zeile_0.kind == BLOCK_T.KM_WERT) ? zeile_0.km : -1,
                        BhfTag: (zeile_0.kind === BLOCK_T.BHFTAG) ? zeile_0 :
                            ((zeile_0.kind == BLOCK_T.KM_WERT) && (zeile_1.kind === BLOCK_T.BHFTAG) ? zeile_1 : null),
                        AnschlussNummern: [], // TODO
                        Zeiteintraege: [],  //TODO
                        //ZeitZeileZusatzInfo: undefined,
                        Fahrkarteninfo: null,
                        AnAb: EAnAb.FollowAb, //   tAnAb // TODO wenigstens error bei anderen eintraegen,
                        Ref: null,
                        Lfd: -1,
                        Via:  null
                    };

                    // ------ Trenner finden

                    // own version of findFirstIndex only available in ES16, not in IE
                    const tFindFirstIndex = function <T>(arr: Array<T>, matches: ((a: T) => boolean)) {
                        for (let i = 0; i < arr.length; i++) {
                            if (matches(arr[i])) {
                                return i;
                            }
                        }
                        return -1;
                    }

                    const tTrennerIndex = tFindFirstIndex(zeile, (x) => { return x.kind === BLOCK_T.TRENNER });
                    const tStartIdx = tTrennerIndex + 1;

                    // ----- ab an logik
                    var tTrenner: TTrennerEintrag = zeile[tTrennerIndex] as TTrennerEintrag;
                    var tAnAb = EAnAb.FirstAb;
                    if (tTrenner.art === ETrennerArt.Ab) {
                        if (tNextAbIsFirst) {
                            tAnAb = EAnAb.FirstAb;
                            tNextAbIsFirst = false;
                        } else {
                            tAnAb = EAnAb.FollowAb;
                            tNextAbIsFirst = false;
                        }
                    }
                    if (tTrenner.art === ETrennerArt.An) {
                        tAnAb = EAnAb.An;
                        tNextAbIsFirst = true;
                    }

                    tResultZeileN.AnAb = tAnAb;

                    var tResultZeile: TZeile = tResultZeileN;

                    // overwrite tResultZeile in Spezialfall

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_WEITER_AN)) {
                        //if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_in) == 0)) {
                        var tResultZeileX: TAnschlussWeiterInZeile = {
                            kind: ZEILE_T.ANSCHLUSS_WEITER_IN, // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                            BhfTag: null,             // TODO aus Zusatzinfo lesen
                            AnschlussNummern: [],
                            Zeiteintraege: [],
                            //ZeitZeileZusatzInfo: undefined,
                            Ref:null,
                            Lfd: -1,
                            Via: null,
                            Fahrkarteninfo: null
                        }
                        tResultZeile = tResultZeileX;
                    }

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_WEITER_AB)) {
                        //if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_start) == 0)) {
                        var tResultZeileXD: TAnschlussWeiterAbZeile = {
                            kind: ZEILE_T.ANSCHLUSS_WEITER_AB,  // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                            BhfTag: null,             // TODO aus Zusatzinfo lesen
                            AnschlussNummern: [],
                            Zeiteintraege: [],
                            //ZeitZeileZusatzInfo: undefined,
                            Ref:null,
                            Lfd: -1,
                            Via: null,
                            Fahrkarteninfo: null
                        }
                        tResultZeile = tResultZeileXD;
                    }

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_ZUBRINGER_AB)) {
                        var tResultZeileY: TAnschlussZubringerAbZeile = {
                            kind: ZEILE_T.ANSCHLUSS_ZUBRINGER_AB, //
                            BhfTag: null,             // TODO aus Zusatzinfo lesen
                            AnschlussNummern: [],
                            Zeiteintraege: [],
                            //ZeitZeileZusatzInfo: undefined
                            Ref:null,
                            Lfd: -1,
                            Via: null,
                            Fahrkarteninfo: null
                        }



                        tResultZeile = tResultZeileY;
                    }

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_ZUBRINGER_IN)) {
                        var tResultZeileZ: TAnschlussZubringerInZeile = {
                            kind: ZEILE_T.ANSCHLUSS_ZUBRINGER_IN, //
                            BhfTag: null,             // TODO aus Zusatzinfo lesen
                            AnschlussNummern: [],
                            Zeiteintraege: [],
                            //ZeitZeileZusatzInfo: undefined
                            Ref:null,
                            Lfd: -1,
                            Via: null,
                            Fahrkarteninfo: null
                        }
                        tResultZeile = tResultZeileZ;
                    }

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP && zeile_0.zeilentyp == EZeilentyp.KLASSENNRZEILE)) {

                        var tResultZeileK: TKlassenNrZeile = {
                            kind: ZEILE_T.KLASSEN,
                            KlassenNummern: [],
                            ZeitZeileZusatzInfo: undefined,    //letzter eintrag
                            BlockEintrag: undefined
                        }
                        tResultZeile = tResultZeileK;
                    }

                    if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP && zeile_0.zeilentyp == EZeilentyp.ZUGNRZEILE)) {

                        var tResultZeileKl: TZugNrZeile = {
                            kind: ZEILE_T.ZUGNR, // EZeilentyp.Zugnummer,
                            ZugNummern: [],
                            ZeitZeileZusatzInfo: undefined
                        };

                        tResultZeile = tResultZeileKl;
                    }

                    //ResultZeile jetzt prinzipiell korrekter typ

                    // fill header
                    switch (tResultZeile.kind){
                        case ZEILE_T.ANSCHLUSS_WEITER_AB:
                        case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:

                        case ZEILE_T.NORMAL:

                            //tResultZeile.Zeiteintraege[0].kind

                            const temp_ZeitZeileZusatzInfo_Vorn: ZeitZeileZusatzInfo = Importer.erstelleZZZausHeaderArray(zeile.slice(0,tTrennerIndex));

                            const tZusatzInfoIndex:number = tFindFirstIndex< EinzelEintragInputBaseKinded | IZeilenZusatzInfoKinded>(zeile, (z) => {
                                return (z.kind === BLOCK_T.ZEILENZUSATZINFO);
                            });                        
                            
                            let tZusatzInfoHinten:ZeitZeileZusatzInfo | null = null;
                            if (tZusatzInfoIndex > -1){
                                tZusatzInfoHinten = Importer.parseZeitZeileZusatzInfo(zeile[tZusatzInfoIndex] as IZeilenZusatzInfoKinded);
                            }

                            //todo merge

                            const mergeF = function (tVorn: ZeitZeileZusatzInfo, tHinten: ZeitZeileZusatzInfo | null): ZeitZeileZusatzInfo {
                                var tNum: Array<string | number> = [];
                                var tBhf = null;
                                //var tLfd = -1;
                                //var tRef = null;
                         
                                /*
                                return {
                                    AnschlussNummern: tNum,
                                    Via: null,
                                    Ortsname: tBhf,
                                    Fahrpreise: { kind: FAHRPREIS_T.KEINE_ANGABE },
                                    Ref: tRef,
                                    Lfd: tLfd,
                                    Valid: true,
                                    Raw: ""
                                };
                                */   
                                
                                /*
                                 export interface ZeitZeileZusatzInfo {
                                    AnschlussNummern: (string | number)[],
                                    Via: StationTicketInfoEntryKpxTagged[] | null,
                                    Ortsname: StationTicketInfoEntryKpxTagged | null,
                                    Fahrpreise: TFahrpreisAngabe,
                                    Ref: string | null,
                                    Lfd: number, 
                                    Valid: boolean,
                                    Raw: string
                                }
                                */

                                // AnschlussMumern
                                let tAnschlussNummern: (string | number)[] =  new Array<(string | number)>().concat(tVorn.AnschlussNummern);
                                if (tHinten){
                                    if (( tAnschlussNummern.length > 0) && (tHinten.AnschlussNummern.length > 0 )){
                                        //problem
                                        console.warn("merge found different Anschlussnummern: ", tVorn.AnschlussNummern, tHinten.AnschlussNummern );
                                        console.warn("keeping front");
                                    }else{
                                        //just add
                                        tAnschlussNummern = tAnschlussNummern.concat(tHinten.AnschlussNummern);
                                    }
                                }

                                //Via
                                let tVia = tVorn.Via || [];
                                if (tHinten && tHinten.Via){
                                    if (( tVia.length > 0) && (tHinten.Via.length > 0 )){
                                        //problem
                                        console.warn("merge found different Via: ", tVorn.Via, tHinten.Via );
                                        console.warn("keeping front");
                                    }else{
                                        //just add
                                        tVia = tVia.concat(tHinten.Via);
                                    }
                                }

                                // ortsname
                                let tOrtsname = tVorn.Ortsname;
                                if (tHinten && tHinten.Ortsname){
                                    if (tOrtsname){
                                        console.warn("merge found different ortsname: ", tVorn.Ortsname, tHinten.Ortsname);
                                        //error
                                    }else{
                                        //ok
                                        tOrtsname = tHinten.Ortsname;
                                    }
                                }

                                // fahrpreise
                                var tFahrpreisAngabe = tVorn.Fahrpreise;
                                if (tHinten && tHinten.Fahrpreise.kind != FAHRPREIS_T.KEINE_ANGABE){
                                    if (tFahrpreisAngabe.kind != FAHRPREIS_T.KEINE_ANGABE){
                                        console.warn("merge found different Fahrpreisangabe: ", tVorn.Fahrpreise, tHinten.Fahrpreise);
                                        //error
                                    }else{
                                        //ok
                                        tFahrpreisAngabe = tHinten.Fahrpreise;
                                    }
                                }

                                var tRef = tVorn.Ref;
                                if (tHinten && tHinten.Ref ){
                                    if (tRef){
                                        console.warn("merge found different ref ", tVorn.Ref, tHinten.Ref );
                                    }else{
                                        tRef = tHinten.Ref;
                                    }
                                }

                                var tLfd = tVorn.Lfd;
                                if (tHinten && tHinten.Lfd < 0){
                                    if (tLfd > -1){
                                        console.warn("merge found different lfd ", tVorn.Lfd, tHinten.Lfd );
                                    }else{
                                        tLfd = tHinten.Lfd;
                                    }
                                }



                                

                                 const tResult:ZeitZeileZusatzInfo = {
                                    AnschlussNummern: tAnschlussNummern ,
                                    Via: tVia, //(tHinten) ? (tVorn.Via || []).concat(tHinten.Via || []) : tVorn.Via,
                                    Ortsname: tOrtsname,
                                    Fahrpreise: tFahrpreisAngabe,
                                    Ref: tRef,
                                    Lfd: tLfd,
                                    
                                    Valid: true, // ???
                                    Raw: ""      // ???
                                };

                                return tResult;
                            }



                            const merged_ZeitZeileZusatzInfo = mergeF(temp_ZeitZeileZusatzInfo_Vorn , tZusatzInfoHinten);




                            tResultZeile.BhfTag = merged_ZeitZeileZusatzInfo.Ortsname;
                            tResultZeile.Via = merged_ZeitZeileZusatzInfo.Via;
                            tResultZeile.Fahrkarteninfo =   merged_ZeitZeileZusatzInfo.Fahrpreise;
                            tResultZeile.AnschlussNummern = merged_ZeitZeileZusatzInfo.AnschlussNummern;
                            tResultZeile.Ref = merged_ZeitZeileZusatzInfo.Ref;
                            tResultZeile.Lfd = merged_ZeitZeileZusatzInfo.Lfd;
                            


                         break;
                    }





                    var tResultZeile_Zeiteintraege: Array<TNormalZeileEintrag> = [];
                    var tResultZeile_Zeiteintraege_Klassen: Array<TKlassenNrEintrag> = [];               //different because of types
                    var tResultZeile_Zeiteintraege_ZugNummern: Array<TZugNummernEintrag> = [];


                    for (var cnt = tStartIdx; cnt < zeile.length; cnt++) {
                        var rawentryX = zeile[cnt];

                        switch (rawentryX.kind) {
                            case BLOCK_T.ZEITEINTRAG:
                            case BLOCK_T.ANKUNFT:  // Ank
                            
                            case BLOCK_T.KEINHALT:
                                tResultZeile_Zeiteintraege.push(rawentryX);

                                var tResultEntryError: TError = {
                                        kind: BLOCK_T.ERROR,
                                        Grund: "NOT ALLOWED IN KLASSEN OR ZUGNUMMERZEILE" + JSON.stringify(rawentryX)
                                    };
                                  

                                tResultZeile_Zeiteintraege_Klassen.push(tResultEntryError);
                                tResultZeile_Zeiteintraege_ZugNummern.push(tResultEntryError);
                                                      
                               
                                break;
                            case BLOCK_T.ZEILEN_TYP:
                                //tested before
                                break;
                            case BLOCK_T.DICKERSTRICH:
                            case BLOCK_T.BLOCK:
                            case BLOCK_T.LEER:     // "  " 
                            case BLOCK_T.KLASSEN_WERT:
                            case BLOCK_T.ZUG_NR_WERT:
                                tResultZeile_Zeiteintraege.push(rawentryX);
                                tResultZeile_Zeiteintraege_Klassen.push(rawentryX);
                                tResultZeile_Zeiteintraege_ZugNummern.push(rawentryX);
              
                                break;
                            case BLOCK_T.ZEILENZUSATZINFO:



                                //SOLL: schon oben komplett ausgelesen
                                 

                                //var z: ZeitZeileZusatzInfo = Importer.parseZeitZeileZusatzInfo(rawentryX);




                                

                                /*
                                if (!z.Valid) {
                                    var tResultEntryE: TError = {
                                        kind: BLOCK_T.ERROR,
                                        Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(rawentryX)
                                    };
                                    tResultZeile_Zeiteintraege.push(tResultEntryE);
                                }
                                //tResultZeile.ZeitZeileZusatzInfo = z;
                                */
                                
                                break;
                            case BLOCK_T.KM_WERT:
                                // schon oben bei typbestimmung komplett ausgelesen
                                break;
                            case BLOCK_T.BHFTAG:
                                // schon oben bei typbestimmung komplett ausgelesen
                                break;
                            case BLOCK_T.TRENNER:
                                break;
                            case BLOCK_T.ANSCHLUSS_NUMMERN:
                                break;
                            case BLOCK_T.HEADERLFD:
                                break;  
                            case BLOCK_T.HEADERREF:
                                break; 
                            case BLOCK_T.HEADERVIA:
                            break;     

                            default:
                                assertNever(rawentryX);
                                //console.error("unknown type not handled: ", rawentryX);
                                break;

                        }


                    }


                    // Zeileneintraege in Tresultzeile eintragen

                    if (tResultZeile.kind == ZEILE_T.KLASSEN) {
                        tResultZeile.KlassenNummern = tResultZeile_Zeiteintraege_Klassen;
                    } else if (tResultZeile.kind == ZEILE_T.ZUGNR) {
                        tResultZeile.ZugNummern = tResultZeile_Zeiteintraege_ZugNummern;
                    } else {
                        tResultZeile.Zeiteintraege = tResultZeile_Zeiteintraege;
                    }

                    console.log("PUSH ", tResultZeile);
                    tResult.Zeilen.push(tResultZeile);
                }


                
            }
            //console.log(zeile);

            // erstes ist string
            // a) reservierter string
            // a1) zugnr
            // a2) klasse
            // a3 irgendwas anderes

            // b) Station ohne kilometer

        }




        if (input.ZellenVerweise != null) {
            input.ZellenVerweise.forEach((zi) => {
                tResult.ZusatzBloecke.push(zi);
            });
        }

        return tResult;

    }
}

















// well next 3 classes implement only a parser for zusatzinfo !!!
// ZI_ ===  Zusatzinfobase bezogen

export class ZI_Creator {
    /*
    public static createTVerweisEmbedded(): TVerweisEmbedded {
        return {
            kind: VERWEIS_T.EMBEDDED
        }
    }
    */

    public static createTVerweisPassend(key: string, scope: EScope): TVerweisPassend {
        return {
            kind: VERWEIS_T.PASSEND,
            ReferenzKey: key,
            Scope: scope
        }
    }

    public static createKbsAbweichungKeine(): TKbsAbweichung_Keine {
        return {
            kind: KBS_ABWEICHUNG_T.KEINE
        }
    }

    /*
    public static parseKlassenString(Klassenstring: string | null | undefined): EKlassen {
        var tKlassen = EKlassen.NichtAngegeben;
        if (Klassenstring != undefined) {
            switch (Klassenstring) {
                case k1b3: tKlassen = EKlassen.Klassen1bis3;
                    break;
                case k2b3: tKlassen = EKlassen.Klassen2bis3;
                    break;
                case k2b4: tKlassen = EKlassen.Klassen2bis4;
                    break;
                case k3b4: tKlassen = EKlassen.Klassen3bis4;
                    break;
                case null: tKlassen = EKlassen.NichtAngegeben;
                    break;
                default: console.warn("UnbekannterKlassenstring: " + Klassenstring);
                //default: return Importer.assertNever(Klassenstring); 
            }
        
        }
        return tKlassen;
    }
    */

    public static parseKlassenString(Klassenstring: string | null | undefined): EKlassen {
        var tKlassen = EKlassen.NichtAngegeben;
        if (Klassenstring != undefined) {

            if ((Object.keys(EKlassen).map(k => EKlassen[k as any]).indexOf(Klassenstring) > -1)) {
                tKlassen = Klassenstring as EKlassen;

                console.warn("trace check 3 ", Klassenstring, " -> ", tKlassen);
            }
        }
        return tKlassen;
    }

    public static createTBlockInhaltZugnummerOderKlasse(Zugnummer: string | null, Klassenstring: string | null): TBlockInhaltZugnummerOderKlasse {
        var tBlock: TBlockInhaltZugnummerOderKlasse = {
            Zugnr: Zugnummer,
            Klassen: ZI_Creator.parseKlassenString(Klassenstring)
        };
        return tBlock;
    }





    public static createBlockInhaltRawOk() {
        var tOk: TBlockInhaltRawOk = { kind: BlockRaw_ok };
        return tOk;
    }
}

export class ZI_Importer {
    // will be a very complex parser for all the weird additional stuff
    /*
    public static parseIZellenEigenschaft(inp: SaxInput.IZellenEigenschaft): TBlockinhaltBase {
        //true heisst nicht vorhanden oder korrekt geparst und eingetragen
        var ok_inp_ab: boolean = false;         // alle info gilt erst ab der angegebenen station
        var ok_inp_cellkey: boolean = false;
        var ok_inp_destcellkey: boolean = false;
        var ok_inp_key: boolean = false;
        var ok_inp_klassen: boolean = false;
        var ok_inp_marker: boolean = false;
        var ok_inp_nach: boolean = false;
        var ok_inp_sonnundfeiertagzeit: boolean = false;
        var ok_inp_srccellkey: boolean = false;
        var ok_inp_tage: boolean = false;
        var ok_inp_typ: boolean = false;
        var ok_inp_verweisort: boolean = false;
        var ok_inp_von: boolean = false;
        var ok_inp_zugnr: boolean = false;
        var ok_inp_scope: boolean = false;
        var ok_inp_bahn: boolean = false;

        // default values, might be overwritten in next step

        // ab
        var tGueltig: TGueltigkeit = { kind: GUELTIG_T.IMMER };
        if (inp.ab) {
            tGueltig = {
                kind: GUELTIG_T.AB,
                bhf: inp.ab
            };
            ok_inp_ab = true;
        } else {
            ok_inp_ab = true;
        }





        // cellkey
        var tCellKey: string = "";
        if (inp.cellkey) {
            tCellKey = inp.cellkey.substr(0, 1);
            ok_inp_cellkey = true;
        } else {
            ok_inp_cellkey = true;
        }








        // key  a..r, t..z
        var tReferenzkey = "";
        if (inp.key) {
            tReferenzkey = inp.key;
            ok_inp_key = true;
        }
        else {
            ok_inp_key = true;
        }



        // marker !, ?, *, ....
        var tMarker: string = "";
        if (inp.marker) {
            tMarker = inp.marker;
            ok_inp_marker = true;
        } else {
            ok_inp_marker = true;
        }

        // fahrtage
        var tFahrtage: TFahrtage = {
            kind: FAEHRT_T.IMMER
        };

        if (inp.tage) {
            switch (inp.tage) {
                case SaxInput.sonn_und_festtags:
                    tFahrtage = {
                        kind: FAEHRT_T.SONNUNDFESTTAGS
                    };
                    break;


                case SaxInput.nur_werktags:
                    tFahrtage = {
                        kind: FAEHRT_T.WERKTAGS
                    };
                    break;
                default: console.warn("unbekannte Fahrtage: ", inp.tage);
            }

            ok_inp_tage = true;
        } else {
            ok_inp_tage = true;
        }

        var tPfeilInfo: TPfeilInfo = { kind: TKEINPFEIL };

        // typ
        var tTyp: TVerweisTyp = ZI_Creator.createTVerweisEmbedded(); // Verweistyp.Passend;
        if (inp.typ) {
            switch (inp.typ) {
                case SaxInput.passend:

                    // todo keine angabe handling
                    var tScopePassend: EScope = EScope.DefaultZug;
                    if (inp.scope) {
                        if (inp.scope == SaxInput.restspalte) {
                            tScopePassend = EScope.RestSpalte;
                            ok_inp_scope = true;
                        }
                        if (inp.scope == SaxInput.defaultzug) {
                            tScopePassend = EScope.DefaultZug;
                            ok_inp_scope = true;
                        }
                    } else {
                        ok_inp_scope = true;
                    }


                    tTyp = ZI_Creator.createTVerweisPassend(tReferenzkey, tScopePassend);
                    ok_inp_typ = true;
                    ok_inp_key = true;
                    ok_inp_marker = true;
                    break;
                case SaxInput.fern:
                    tTyp = {
                        kind: VERWEIS_T.FERN,
                        ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                        OpticalMarker: tMarker
                    };
                    ok_inp_typ = true;
                    break;
                case SaxInput.pfeilstart:

                    if (inp.destcellkey) {
                        var tPfeilStart: TPfeilStart = {
                            kind: TPFEIL_START, ReferenzKey: inp.destcellkey.substr(0, 1)
                        };
                        tPfeilInfo = tPfeilStart;
                        ok_inp_destcellkey = true;
                        tTyp = {
                            kind: VERWEIS_T.FERN,
                            ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                            OpticalMarker: ""
                        };
                        ok_inp_typ = true;

                    } else {
                        console.warn("ERROR: pfeilstart ohne destcellkey !!!");
                    }

                    break;
                case SaxInput.pfeilziel:
                    if (inp.srccellkey) {
                        var tPfeilZiel: TPfeilZiel = {
                            kind: TPFEIL_ZIEL, ReferenzKey: inp.srccellkey.substr(0, 1)
                        };
                        tPfeilInfo = tPfeilZiel;
                        ok_inp_srccellkey = true;
                        tTyp = {
                            kind: VERWEIS_T.FERN,
                            ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                            OpticalMarker: ""
                        };
                        ok_inp_typ = true;

                    } else {
                        console.warn("ERROR: pfeilziel ohne srccellkey !!!");
                    }

                    break;
                case SaxInput.global:
                    tTyp = {
                        kind: VERWEIS_T.GLOBAL_DEFAULT
                    };
                    ok_inp_typ = true;
                    break;
                default:
                    console.warn("typ must be there, unknown: " + inp.typ);
            }
        } else {
            //ok_inp_tage = true;
            console.warn("typ must be there !!!");
        }



        // klassen
        // zugnr
        var tBlockZugKlasse: TBlockInhaltZugnummerOderKlasse = {
            Zugnr: (inp.zugnr != undefined) ? inp.zugnr.toString() : null,
            Klassen: ZI_Creator.parseKlassenString(inp.klassen)
        };
        ok_inp_klassen = true;
        ok_inp_zugnr = true;




        // sonnundfeiertagszeit
        if (inp.sonnundfeiertagzeit) {
            console.error("SaxSchedulesZusatzBase.ts :  sonnundfeiertagszeit parser not implemented");
            // TODO
        } else {
            ok_inp_sonnundfeiertagzeit = true;
        }


        // wo steht der text falls nicht in tabelle
        var tTextOrt: TTextOrt = { kind: TEXTORT_T.NICHTANGEGEBEN };
        if (inp.verweisort) {
            switch (inp.verweisort) {
                case SaxInput.headerlinks:
                    tTextOrt = { kind: TEXTORT_T.LINKSVONHEADER };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.headerrechts:
                    tTextOrt = { kind: TEXTORT_T.RECHTSVONHEADER };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach9spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 9,
                        Spaltenbreite: 1
                    };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach4spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 4,
                        Spaltenbreite: 1
                    };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach4spalten2spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 4,
                        Spaltenbreite: 2
                    };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach5spalten2spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 5,
                        Spaltenbreite: 2
                    };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach6spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 6,
                        Spaltenbreite: 1
                    };
                    ok_inp_verweisort = true;
                    break;
                case SaxInput.nach10spalten4spalten:
                    tTextOrt = {
                        kind: TEXTORT_T.GANZESPALTE,
                        UebersprungeneSpalten: 10,
                        Spaltenbreite: 4
                    };
                    ok_inp_verweisort = true;
                    break;


                default:
                    console.warn("verweisort unbekannt: ", inp.verweisort);

            }
        } else {
            ok_inp_verweisort = true;
        }

        /// naechste 2 KbsAbweichung "nach Stollberg" oder "von Stollberg"

        // von Stollberg
        var tKbsAbweichung: TKbsAbweichung = ZI_Creator.createKbsAbweichungKeine();

        if (inp.von) {   //"von Stollberg"
            // TODO
            var tKbsAbweichungA: TKbsAbweichung_Aus = {
                kind: KBS_ABWEICHUNG_T.AUS,
                bhf: inp.von,
                KBS: "",           //N.B. this shall be filled in a filling step
                SchonKomplettiert: false
            };
            tKbsAbweichung = tKbsAbweichungA;
            ok_inp_von = true;
        } else {
            ok_inp_von = true;
        }

        // nach Stollberg
        if (inp.nach) {
            var tKbsAbweichungN: TKbsAbweichung_Nach = {
                kind: KBS_ABWEICHUNG_T.NACH,
                bhf: inp.nach,
                KBS: "",           //N.B. this shall be filled in a filling step
                SchonKomplettiert: false
            };
            tKbsAbweichung = tKbsAbweichungN;
            ok_inp_nach = true;
        } else {
            ok_inp_nach = true;
        }

        //bahnverwaltung
        var tBahn: EBahnverwaltung = EBahnverwaltung.NichtAngegeben;
        if (inp.bahn) {
            if (inp.bahn == SaxInput.Sachs) {
                tBahn = EBahnverwaltung.KSaechsStsEB;
                ok_inp_bahn = true;
            } else {
                // unknown bahn

            }
            // tHeadLeftDiv.innerHTML = (input.Bahnverwaltung === EBahnverwaltung.KSaechsStsEB) ? "Sächs. Staatsb." : "";
        } else {
            ok_inp_bahn = true;
        }


        //raw
        var tBRT: TBlockInhaltRawOk | TBlockInhaltRawUnbekannt = {
            kind: BlockRaw_ok
        };

        if (!(ok_inp_ab && ok_inp_cellkey && ok_inp_destcellkey && ok_inp_key && ok_inp_klassen && ok_inp_marker && ok_inp_nach
            && ok_inp_sonnundfeiertagzeit && ok_inp_srccellkey && ok_inp_tage && ok_inp_typ && ok_inp_verweisort && ok_inp_von && ok_inp_zugnr
            && ok_inp_scope && ok_inp_bahn)) {
            tBRT = {
                kind: BlockRawUnbekannt,
                Eingabedaten: inp
            }
        }

        var tBlockKpl: TBlockinhaltBase = {
            //kind: zz,
            Verweistyp: tTyp,
            //Referenzkey: tReferenzkey,
            ZugNrOderKlasse: tBlockZugKlasse,
            Gueltig: tGueltig,
            KbsAbweichung: tKbsAbweichung,
            Fahrtage: tFahrtage,
            TextOrt: tTextOrt,
            PfeilInfo: tPfeilInfo,
            //Scope: tScope,
            Unbekannt: tBRT,
            Bahnverwaltung: tBahn
        };


        console.log(JSON.stringify(inp));
        console.log("wird zu:")
        console.log(JSON.stringify(tBlockKpl));

        return tBlockKpl;
    }
    */
    /*
    public static assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }
    */

}

export class ZI_Renderer {

    /*
    public static isEmptyBIBGlobal(b: TBlockinhaltBase): boolean {
        console.warn("isEmptyBibGlobal not complete");

        return ((b.Bahnverwaltung == EBahnverwaltung.NichtAngegeben)
            //&& (b.Fahrtage == SaxSchedulesZusatzBase.TFahrtage.
            && (b.KbsAbweichung.kind == KBS_ABWEICHUNG_T.KEINE)
            && (b.ZugNrOderKlasse.Klassen == EKlassen.NichtAngegeben)
            && (b.ZugNrOderKlasse.Zugnr == null)

        )
    }*/

    public static isEmptyBIBGlobal(b: TBlockinhaltBaseV2): boolean {
        console.warn("isEmptyBibGlobal not complete");

        return ((b.Inhalt.BLOCK.Standard as Block2Entry).scope === undefined); //i.e. empty


    }

    public static renderOpticalMarker(s: string): string {
        var tResult = s;
        if (s === SaxInput.fatdot) {
            tResult = "\u25cf";  //Black -circle
        }
        if (s === SaxInput.cross) {
            tResult = "\u2020";  // Dagger //Kirchenkreuz
        }
        return tResult;
    }
    /*
        public static TBlockInhaltNachRenderKomplex(t: TBlockinhaltBase | undefined, alleZuege: boolean): string {
    
            var tResult = "";
    
            if (t == undefined) { return "block Inhalt Base undefined"; }
    
            if (alleZuege) {
                tResult += "Alle Zuege ";
            }
    
    
            var tEmbedded: boolean = (t.Verweistyp.kind === VERWEIS_T.EMBEDDED);
    
            if (t.Verweistyp.kind == VERWEIS_T.FERN) {
                tResult += ZI_Renderer.renderOpticalMarker(t.Verweistyp.OpticalMarker);
            }
    
            if ((t.ZugNrOderKlasse.Zugnr != null) && (t.ZugNrOderKlasse.Zugnr.length > 0)) {
                tResult = tResult + (tEmbedded ? "" : "Zug ") + t.ZugNrOderKlasse.Zugnr + " ";
            }
    
            switch (t.ZugNrOderKlasse.Klassen) {
                case (EKlassen.Klassen1bis3):
                    tResult = tResult + "I-III ";
                    tResult += (alleZuege) ? "Klasse" : "";
                    break;
                case (EKlassen.Klassen2bis3):
                    tResult = tResult + "II-III ";
                    tResult += (alleZuege) ? "Klasse" : "";
                    break;
                case (EKlassen.Klassen2bis4):
                    tResult = tResult + "II-IV ";
                    tResult += (alleZuege) ? "Klasse" : "";
                    break;
                case (EKlassen.Klassen3bis4):
                    tResult = tResult + "III-IV ";
                    tResult += (alleZuege) ? "Klasse" : "";
                    break;
                case (EKlassen.NichtAngegeben):
                    break;
                default:
                    return ZI_Importer.assertNever(t.ZugNrOderKlasse.Klassen);
            }
    
            switch (t.Fahrtage.kind) {
                case (FAEHRT_T.IMMER):
                    // print nothing
                    break;
                case (FAEHRT_T.WERKTAGS):
                    tResult += "Nur Werktags";
                    break
                case (FAEHRT_T.SONNUNDFESTTAGS):
                    tResult += "Sonn- und Festtags";
                    break;
                default:
                    return ZI_Importer.assertNever(t.Fahrtage);
            }
    
    
            switch (t.KbsAbweichung.kind) {
                case KBS_ABWEICHUNG_T.KEINE:
                    // nothing to do
                    break;
                case KBS_ABWEICHUNG_T.AUS:
                    tResult += "von " + t.KbsAbweichung.bhf;  //von Stollberg
                    break;
                case KBS_ABWEICHUNG_T.NACH:
                    tResult += "nach " + t.KbsAbweichung.bhf;  //nach Stollberg
                    break;
                default:
                    return ZI_Importer.assertNever(t.KbsAbweichung);
    
    
            }
    
            switch (t.Bahnverwaltung) {
                case EBahnverwaltung.NichtAngegeben:
                    break;
                case EBahnverwaltung.KSaechsStsEB:
                    tResult += "Sächs. Staatsb.";
                    break;
                default:
                    console.warn("unbekannte Bahnverwaltung in zusatzinfobase: wie soll man das rendern ?!");
            }
    
            return tResult;
        }
        */

    public static TBlockInhaltNachRenderKomplex(t: TBlockinhaltBaseV2 | undefined, alleZuege: boolean): string {
        /*if (t!= undefined){
            
        }
        */

        var tResult = "UUUndefined";
        if (t){
            tResult = (((<any>t)["Virtualized"]  === true) ? "VIRTUALIZED " : "") + t.Inhalt.q;
            
        }
        
        return "todo render v2 "+ tResult;
    }
}

