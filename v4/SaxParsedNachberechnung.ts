    
import {
    /*TVerweisEmbedded, VERWEIS_T  , */
    KBS_ABWEICHUNG_T, 
    /*TVerweisPassend,*/ TKbsAbweichung_Keine, TBlockInhaltZugnummerOderKlasse,
    /*TBlockEintrag, TAnkunftEintrag,*/ TAnschlussWeiterAbZeile, TAnschlussWeiterInZeile, /*TBlockinhaltBase,*/ TAnschlussZubringerAbZeile, /*TDickerStrichEintrag,*/ TAnschlussZubringerInZeile,
    TBlockInhaltRawOk, TBlockInhaltRawUnbekannt, TError, 
    
    TPFEIL_START, TPFEIL_ZIEL, TKEINPFEIL,  
    /*EScope, */
    BlockRaw_ok, TPfeilZiel,
    TPfeilStart, TKbsAbweichung_Aus, TKbsAbweichung_Nach, 
    BlockRawUnbekannt, 
    /*TVerweisTyp,*/ TKbsAbweichung, TPfeilInfo, 
    /*TTextOrt,*/ EBahnverwaltung,
    /*BLOCK_T, ZEILE_T, 
    ZUGLAUF_BERECHNET, ZUGLAUF_UNBEKANNT, */
    EAnAb, EQuelle, SingleDirectionScheduleTyped, 
    
    ZeitZeileZusatzInfo, TNormalzeile, /*TLeerEintrag, TKeinHalt,*/ TZugNrZeile, TKlassenNrZeile,
    TNormalZeileEintrag,
    ZEILE_T
     

     

} from "./SaxParsedTypes"
import { assertNever /* , TZeit24,  ZEIT_24, */ } from "./SaxBaseTypes";


// functions filling SingleDirectionScheduleTyped value
    export class Nachberechnung {
/*
        // fuelle .berechneterZuglauf  mit BerechneterZuglauf struct
        public static berechneZugLaeufe(s: SingleDirectionScheduleTyped): SingleDirectionScheduleTyped {
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

            //spaltenweise Zuglauf suchen
            //TODO

            for (var sp = 0; sp < tLen; sp++) {
                var tZugNr = "";
                // folgende 3 variablen fuer ueberschreiben der zugnummer mit * beginn ....  * ende   vgl. seite 103
                var tZugNrRefKey: string | null = null;
                var tZugNrAlt = "";
                var tZugZweiterStern = false;

                //console.log("--- ",sp);
                s.Zeilen.forEach((z) => {
                    switch (z.kind) {
                        case ZEILE_T.ZUGNR:
                            var tZNEintrag = z.ZugNummern[sp];
                            switch (tZNEintrag.kind) {
                                case BLOCK_T.BLOCK:
                                    if (tZNEintrag.Blockinhalt) {
                                        console.warn("todo: error handling");
                                        console.warn("todo fix reading zugnr from zusatzzeileninfo");
                                        tZugNr = "" + (-9999) // (tZNEintrag.Blockinhalt.Inhalt.BLOCK.Standard as Block2Entry).ZugNr; //  .ZugNrOderKlasse.Zugnr!;   //force not undefined ??   TODO error handling
                                        // Neuer Zugnummereintrag bekommt seine eigene Zugnummer auch als berechneter wert
                                        tZNEintrag.BerechneterZugLauf = {
                                            kind: ZUGLAUF_BERECHNET,
                                            isStart: false,
                                            isEnd: false,
                                            isDeleted: false,
                                            everyDay: true, //todo fill
                                            ZugNr: tZugNr
                                        };

                                    } else {
                                        // blockfreier inhalt braucht auch eine gueltige zugnummer ( -- > anaberg werdau zug 1871)
                                        tZNEintrag.BerechneterZugLauf = {
                                            kind: ZUGLAUF_BERECHNET,
                                            isStart: false,
                                            isEnd: false,
                                            isDeleted: false,
                                            everyDay: true, //todo fill
                                            ZugNr: tZugNr
                                        };
                                    }
                                    break;
                                case BLOCK_T.LEER:
                                case BLOCK_T.DICKERSTRICH:
                                    tZNEintrag.BerechneterZugLauf = {
                                        kind: ZUGLAUF_BERECHNET,
                                        isStart: false,
                                        isEnd: false,
                                        isDeleted: false,
                                        everyDay: true, //todo fill
                                        ZugNr: tZugNr
                                    };
                            }
                            break;
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                        case ZEILE_T.ANSCHLUSS_WEITER_AB:
                        case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        case ZEILE_T.KLASSEN:
                        case ZEILE_T.NORMAL:
                            var tEintrag: TNormalZeileEintrag = { kind: BLOCK_T.ERROR, Grund: "temp" };
                            if (z.kind == ZEILE_T.KLASSEN) {
                                tEintrag = z.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = z.Zeiteintraege[sp];
                            }

                            //zugriff nur auf einen eintrag

                            //falls der aktuelle eintrag einen fernverweis (z.b. * oder ? oder !) hat, wird dessen zugnummer ab jetzt verwendet     
                            switch (tEintrag.kind) {
                                case BLOCK_T.ZEITEINTRAG:
                                    if (tEintrag.Referenzkey) {
                                        var tZeitEintrag = tEintrag;
                                        s.ZusatzBloecke.forEach((fe) => {
                                            switch (fe.Verweistyp.kind) {
                                                case VERWEIS_T.FERN: // VERWEIS_FERN:
                                                    if (fe.Verweistyp.ReferenzKey === tZeitEintrag.Referenzkey) {
                                                        if (tZugNrRefKey != null) {
                                                            //2 tes auftreten des key -> zugnr beenden
                                                            tZugZweiterStern = true;


                                                        } else {
                                                            if (fe.Inhalt.BLOCK.Standard){
                                                                if ((fe.Inhalt.BLOCK.Standard as Block2Entry).scope){
                                                                    var stdbl : Block2Entry = fe.Inhalt.BLOCK.Standard as Block2Entry;
                                                                    console.warn("TODO komplexe auswertung");
                                                                    if (stdbl.scope.kind === "Zug") {
                                                                        if (stdbl.ZugNr != undefined){
                                                                            tZugNrAlt = tZugNr;
                                                                            tZugNr = ""+stdbl.ZugNr;
                                                                            tZugNrRefKey = tZeitEintrag.Referenzkey;
                                                                        }
                                                                    }
                                                                }
                                                            }


                                                            //if (fe.ZugNrOderKlasse.Zugnr) {
                                                            //    //1 tes auftreten
                                                            //    tZugNrAlt = tZugNr;
                                                            //    tZugNr = fe.ZugNrOderKlasse.Zugnr;
                                                            //    tZugNrRefKey = tZeitEintrag.Referenzkey;
                                                            //}
                                                        }
                                                    }


                                            }
                                        });
                                    }
                                case BLOCK_T.LEER:
                                case BLOCK_T.KEINHALT:
                                case BLOCK_T.DICKERSTRICH:
                                case BLOCK_T.KEINHALT:
                                case BLOCK_T.ANKUNFT:
                                case BLOCK_T.BLOCK:

                                    if (tEintrag.kind === BLOCK_T.BLOCK) {
                                        console.warn("todo read from zusatzinfo");
                                      
                                    }


                                    tEintrag.BerechneterZugLauf = {
                                        kind: ZUGLAUF_BERECHNET,
                                        isStart: false,
                                        isEnd: false,
                                        isDeleted: false,
                                        everyDay: true, //todo fill
                                        ZugNr: tZugNr
                                    };

                                    if (tZugZweiterStern) {
                                        tZugZweiterStern = false;
                                        tZugNr = tZugNrAlt;
                                        tZugNrRefKey = null;
                                    }

                                    break;
                                // TODO * external blocks and intern blocks

                                case BLOCK_T.ERROR:
                                case BLOCK_T.KLASSEN_WERT:
                                case BLOCK_T.ZUG_NR_WERT:

                                    //nothing to fill for these entries            
                                    break;
                                default:
                                    return assertNever(tEintrag);

                            }
                            break;

                        //z.KlassenNummern[sp].

                        //break;
                        default:
                            return assertNever(z);
                    }
                });
            }

            //start und end jedes einzelnen Zuglauf passend eintragen  
            //pro spalte von unten nach oben

            //gehe von unten nach oben und markiere enden

            for (var sp = 0; sp < tLen; sp++) {
                var tCurrentZugNr: string | undefined;
                //var tLoesche = true;
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = tZeilenZahl - 1; zei >= 0; zei--) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                        case ZEILE_T.NORMAL:
                        case ZEILE_T.ANSCHLUSS_WEITER_AB:
                        case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        case ZEILE_T.KLASSEN:
                            //case ZEILE_ZUGNR:
                            var tEintrag: TNormalZeileEintrag = { kind: BLOCK_T.ERROR, Grund: "temp" };
                            if (tZeile.kind == ZEILE_T.KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr) ) {
                                    //if ((tCurrentZugNr != undefined)&&(tCurrentZugNr.length > 0)) {
                                    var TEb = tEintrag.BerechneterZugLauf;
                                    if (tEintrag.BerechneterZugLauf.ZugNr) {
                                        tEintrag.BerechneterZugLauf.isEnd = true;
                                    }
                                    //if ((tEintrag.kind == BLOCK_LEER) && (TEb.ZugNr) && (tLoesche)){
                                    //       TEb.isEnd = false; 
                                    //       TEb.isDeleted = true;
                                    //       tLoesche = true;
                                    //}else{
                                    //   tLoesche = false;
                                    //}
                                    //}

                                    tCurrentZugNr = TEb.ZugNr;
                                }

                                //}else{
                                //    tLoesche = false;
                                //}
                            }
                            break;
                        case ZEILE_T.ZUGNR:
                        //tZeile.ZugNummern
                        //TODO

                    }
                }

            }

            // gehe von oben nach unten
            for (var sp = 0; sp < tLen; sp++) {
                var tCurrentZugNr: string | undefined;
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = 0; zei < tZeilenZahl; zei++) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
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
                            if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                if (tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr) {
                                    //if ((tCurrentZugNr != undefined)&&(tCurrentZugNr.length > 0)) {
                                    if (tEintrag.BerechneterZugLauf.ZugNr) {
                                        tEintrag.BerechneterZugLauf.isStart = true;
                                    }
                                    //}

                                    tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                }
                            }
                            break;
                        //case ZEILE_ZUGNR:
                        //        //tZeile.ZugNummern
                        //        //TODO

                    }
                }

            }



            // gehe von unten nach oben und bewege enden nach oben
            for (var sp = 0; sp < tLen; sp++) {
                //var tCurrentZugNr :string | undefined;
                //var tLoesche = true;
                var tNeedEnd = false;
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = tZeilenZahl - 1; zei >= 0; zei--) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                        case ZEILE_T.NORMAL:
                        case ZEILE_T.ANSCHLUSS_WEITER_AB:
                        case ZEILE_T.ANSCHLUSS_WEITER_IN:
                        case ZEILE_T.KLASSEN:
                            //case ZEILE_ZUGNR:
                            var tEintrag: TNormalZeileEintrag = { kind: BLOCK_T.ERROR, Grund: "temp" };
                            if (tZeile.kind == ZEILE_T.KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                var teb = tEintrag.BerechneterZugLauf;

                                if (((teb.isEnd == true) || tNeedEnd) &&
                                    ((tEintrag.kind == BLOCK_T.LEER)
                                        || ((tEintrag.kind == BLOCK_T.BLOCK) && (tEintrag.Start == false))))  // trag end in obersten sa / wa block ein, d.h der welche start ist und ggf die anderen im tabellenrenderer ueberlappt
                                {
                                    teb.isEnd = false;
                                    teb.isDeleted = true;
                                    tNeedEnd = true;
                                } else {
                                    if (tNeedEnd) {
                                        teb.isEnd = true;
                                        tNeedEnd = false;
                                    }
                                }

                            } else {
                                //do nothing 
                            }
                    }
                }
            }


            // todo suche jedentaggueltigkeit
            // JETZT WERDEN DIE ZUGLAUEFE EXTRAHIERT (wenn exctrahiert werden die taggueltigkeiten DARAUS gefuellt)

            // siehe zugextraktor weiter unten



            return s;
        }
*/
    }


