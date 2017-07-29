import {
    TVerweisEmbedded, KBS_ABWEICHUNG_T, TVerweisPassend, TKbsAbweichung_Keine, TBlockInhaltZugnummerOderKlasse,
    TBlockEintrag, TAnkunftEintrag, TAnschlussWeiterAbZeile, TAnschlussWeiterInZeile, TBlockinhaltBase, TAnschlussZubringerAbZeile, TDickerStrichEintrag, TAnschlussZubringerInZeile,
    TBlockInhaltRawOk, TBlockInhaltRawUnbekannt,
    // TGueltigkeit, GUELTIG_IMMER, 
    TError, TEXTORT_T,
    TPFEIL_START, TPFEIL_ZIEL, TKEINPFEIL, EScope, BlockRaw_ok, TPfeilZiel,
    TPfeilStart, TKbsAbweichung_Aus, TKbsAbweichung_Nach,

    BlockRawUnbekannt, TVerweisTyp, TKbsAbweichung, TPfeilInfo, TTextOrt, EBahnverwaltung,

    VERWEIS_T,
    //BLOCK_T,
    ZEILE_T,
    //FAHRPREIS_T,
    //ZEIT_24, ZEIT_ROH, TZeit24,
    //ZUGLAUF_BERECHNET, ZUGLAUF_UNBEKANNT, 
    //GesternHeuteMorgen, 
    TZeiteintrag,
    EAnAb, EQuelle, SingleDirectionScheduleTyped,
    //ETimeValid, 
    ZeitZeileZusatzInfo, TNormalzeile, /*TLeerEintrag,*/ /*TKeinHalt,*/ TZugNrZeile, TKlassenNrZeile, TBlockinhaltBaseV2




} from "./SaxParsedTypes"

import * as SaxInput from "./SaxInputTypes";

import { /*EKlassen,*/ assertNever, TEchteZeit, TZeitRoh, GesternHeuteMorgen, ZEIT_ROH,
    //GUELTIG_AB, GUELTIG_IMMER, GUELTIG_NIE,     FAEHRT_IMMER, FAEHRT_SONNUNDFESTTAGS, FAEHRT_WERKTAGS, 
    FAHRPREIS_T, TFahrpreisEinfach, TFahrpreisAb,
    TFahrpreisEinfachUndRueck, ETimeValid, ZEIT_24, TZeit24,
} from "./SaxBaseTypes";

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

    public static parseZeitZeileZusatzInfo(rawEntry: SaxInput.IZeilenZusatzInfo): ZeitZeileZusatzInfo {
        var tZeitZeilenZusatzInfo: ZeitZeileZusatzInfo = {
            AnschlussNummern: [],
            Ortsname: "",
            Fahrpreise: { kind: FAHRPREIS_T.KEINE_ANGABE },
            Valid: false,
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

        if (rawEntry.FROM) {
            console.warn("from not implemented");
            tWillBeValid = false;
        }

        if (rawEntry.nr) { tZeitZeilenZusatzInfo.AnschlussNummern.push(rawEntry.nr.toString()) }

        if (rawEntry.nrn) { tZeitZeilenZusatzInfo.AnschlussNummern = rawEntry.nrn.map((x) => { return x.toString(); }); }

        if (rawEntry.ort) {
            tZeitZeilenZusatzInfo.Ortsname = rawEntry.ort;
            //tWillBeValid = false; 
        }

        if (rawEntry.via) {
            console.warn("via not implemented");
            tWillBeValid = false;
        }



        tZeitZeilenZusatzInfo.Valid = tWillBeValid;
        return tZeitZeilenZusatzInfo

    }

    public static parse(input: SaxInput.SingleDirectionScheduleInput): SingleDirectionScheduleTyped {
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



        //ergaenze Zeilen
        if (input.zeilen != null) {

            var tNextAbIsFirst = true;   // erste ab speziell speichern, damit "aus " in die tabelle gerendert werden kann

            for (var i = 0; i < input.zeilen.length; i++) {
                var zeile: Array<(string | number | SaxInput.IZeilenZusatzInfo | TKeinHalt | TLeerEintrag)> = input.zeilen[i];
                if ((zeile != null) && (zeile.length >= 2)) {
                    //ab, an, oder eine form von anschlusszeile (anschluss_aus, _anschluss_aus_ziel, _anschluss_nach_start,  _anschluss_nach_in )
                    if ((("number" == typeof zeile[0]) ||  //KM Angabe
                        (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf("_") != 0))) ||     //Bahnhofsname
                        (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_aus) == 0)) ||
                        (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_aus_ziel) == 0)) ||
                        (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_start) == 0)) ||
                        (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_in) == 0))) {

                        var tAnAbString: string = <string>(("number" == typeof zeile[0]) ? zeile[2] : zeile[1]);
                        var tAnAb = EAnAb.FirstAb;

                        if (tAnAbString == ab) {
                            if (tNextAbIsFirst) {
                                tAnAb = EAnAb.FirstAb;
                                tNextAbIsFirst = false;
                            } else {
                                tAnAb = EAnAb.FollowAb;
                                tNextAbIsFirst = false;
                            }
                        }

                        if (tAnAbString == an) {
                            tAnAb = EAnAb.An;
                            tNextAbIsFirst = true;
                        }


                        var tResultZeileN: TNormalzeile = {
                            kind: ZEILE_T.NORMAL, // EZeilentyp.Normalzeile,
                            Km: <number>("number" == typeof zeile[0] ? zeile[0] : -1),
                            BhfTag: <string>("number" == typeof zeile[0] ? zeile[1] : zeile[0]),
                            AnschlussNummern: [], // TODO
                            Zeiteintraege: [],  //TODO
                            ZeitZeileZusatzInfo: undefined,
                            AnAb: tAnAb // TODO wenigstens error bei anderen eintraegen
                        };

                        var tResultZeile: (TAnschlussZubringerAbZeile | TAnschlussZubringerInZeile | TNormalzeile | TAnschlussWeiterAbZeile | TAnschlussWeiterInZeile) = tResultZeileN;

                        console.log("parse Zeile ", <string>zeile[0]);

                        // overwrite tResultZeile in Spezialfall
                        if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_in) == 0)) {
                            var tResultZeileX: TAnschlussWeiterInZeile = {
                                kind: ZEILE_T.ANSCHLUSS_WEITER_IN, // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                                BhfTag: "",             // TODO aus Zusatzinfo lesen
                                AnschlussNummern: [],
                                Zeiteintraege: [],
                                ZeitZeileZusatzInfo: undefined
                            }
                            tResultZeile = tResultZeileX;
                        }

                        if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_nach_start) == 0)) {
                            var tResultZeileXD: TAnschlussWeiterAbZeile = {
                                kind: ZEILE_T.ANSCHLUSS_WEITER_AB,  // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                                BhfTag: "",             // TODO aus Zusatzinfo lesen
                                AnschlussNummern: [],
                                Zeiteintraege: [],
                                ZeitZeileZusatzInfo: undefined
                            }
                            tResultZeile = tResultZeileXD;
                        }

                        if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_aus) == 0)) {
                            var tResultZeileY: TAnschlussZubringerAbZeile = {
                                kind: ZEILE_T.ANSCHLUSS_ZUBRINGER_AB, //
                                BhfTag: "",             // TODO aus Zusatzinfo lesen
                                AnschlussNummern: [],
                                Zeiteintraege: [],
                                ZeitZeileZusatzInfo: undefined
                            }
                            tResultZeile = tResultZeileY;
                        }

                        if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(_anschluss_aus_ziel) == 0)) {
                            var tResultZeileZ: TAnschlussZubringerInZeile = {
                                kind: ZEILE_T.ANSCHLUSS_ZUBRINGER_IN, //
                                BhfTag: "",             // TODO aus Zusatzinfo lesen
                                AnschlussNummern: [],
                                Zeiteintraege: [],
                                ZeitZeileZusatzInfo: undefined
                            }
                            tResultZeile = tResultZeileZ;
                        }

                        //ResultZeile jetzt prinzipiell korrekter typ


                        // Anschlussnummern finden
                        // Todo

                        // Zeiteintraege finden

                        //var tLetzterTagesbereich = ETagesbereich.Vormittag;
                        //var tLetzteZeit = -1;

                        var tStart = 3;
                        if ("string" == typeof zeile[0]) {
                            tStart = 2;
                        }

                        for (var cnt = tStart; cnt < zeile.length; cnt++) {
                            var rawEntry = zeile[cnt];
                            //var tResultEntry: (TZeiteintrag | TLeerEintrag | TBlockEintrag | TKeinHalt | TError) = <TLeerEintrag>{
                            //    MitStrich: false
                            //};

                            if (("number" == typeof rawEntry) || ("string" == typeof rawEntry)) {
                                var entry: number = -1;
                                var tIsTime = false;
                                if (("string" == typeof rawEntry)) {
                                    if (rawEntry.indexOf("_") == 0) {
                                        // irgendwas spezielles
                                        tIsTime == false;
                                        /*
                                        if (rawEntry == nix) {
                                            var tResultEntryL: TLeerEintrag = {
                                                kind: BLOCK_T.LEER,
                                                MitStrich: true,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryL);
                                        }
                                        else 
                                        */
                                        if (rawEntry == gnix) {
                                            var tResultEntryL: TLeerEintrag = {
                                                kind: BLOCK_T.LEER,
                                                MitStrich: false,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryL);
                                        }


                                        // hier ANK, waagerechte linie, 
                                        else if (rawEntry.indexOf(ank) == 0) {

                                            var tResultEntryAnk: TAnkunftEintrag = {
                                                kind: BLOCK_T.ANKUNFT,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryAnk);

                                        }




                                        /*
                                        else if (rawEntry == kHlt) {
                                            var tResultEntryK: TKeinHalt = {
                                                kind: BLOCK_T.KEINHALT,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryK);
                                        }
                                        */
                                        
                                        else if (rawEntry == SaxInput.dick) {
                                            var tResultEntryD: TDickerStrichEintrag = {
                                                kind: BLOCK_T.DICKERSTRICH,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryD);
                                        }
                                        else if ((rawEntry.indexOf(SENKRECHT_PREFIX) == 0) || (rawEntry.indexOf(WAAGERECHT_PREFIX) == 0)) {

                                            var senkleng = SENKRECHT_PREFIX.length;
                                            var waagleng = WAAGERECHT_PREFIX.length;

                                            var tResultEntryB: TBlockEintrag = {
                                                kind: BLOCK_T.BLOCK,
                                                Senkrecht: (rawEntry.indexOf(SENKRECHT_PREFIX) == 0),
                                                Valid: false, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
                                                Start: false,
                                                Breite: 1,
                                                Hoehe: 1,
                                                Passend: true, // Gegenteil waere fern
                                                Referenzkey: (rawEntry.indexOf(SENKRECHT_PREFIX) == 0) ? rawEntry.substr(senkleng) : rawEntry.substr(waagleng),  // while invalid markers are letters
                                                Blockinhalt: undefined,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

                                            tResultZeile.Zeiteintraege.push(tResultEntryB);
                                        }
                                        else if (rawEntry.indexOf("_Z") == 0) { // Zugnummer Z1234

                                            var tZugNr = rawEntry.substr(2);

                                            //var tBlock: TBlockInhaltZugnummerOderKlasse = {
                                            //    Zugnr: tZugNr,
                                            //    Klassen: EKlassen.NichtAngegeben
                                            //};

                                            //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };
                                            /*
                                            var tBlockKpl: TBlockinhaltBase = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                ZugNrOderKlasse: tBlock,                             // <--- relevant part
                                                Gueltig: { kind: GUELTIG_T.IMMER },
                                                KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                Fahrtage: { kind: FAEHRT_T.IMMER },
                                                TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },
                                                PfeilInfo: { kind: TKEINPFEIL },
                                                //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                                Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                            }
                                            */

                                            var tBlockKpl: TBlockinhaltBaseV2 = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                Inhalt: { q: '', BLOCK: { Standard: { scope: { kind: 'Zug' }, ZugNr: tZugNr } } },

                                                TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },

                                            }

                                            var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);

                                            tResultZeile.Zeiteintraege.push(tResultEntryB);
                                        }
                                        else if ((Object.keys(EKlassen).map(k => EKlassen[k as any]).indexOf(rawEntry) > -1)) {
                                            // for keys see   https://github.com/Microsoft/TypeScript/issues/17198
                                            console.warn("todo trace to check 2: ", rawEntry);

                                            var tBlockKpl: TBlockinhaltBaseV2 = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                Inhalt: { q: '', BLOCK: { Standard: { scope: { kind: 'Zug' }, Klasse: rawEntry } } },

                                                TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },

                                            }


                                            var tResultEntryB: TBlockEintrag = Importer.createTBlockEintrag_single(tBlockKpl);

                                            tResultZeile.Zeiteintraege.push(tResultEntryB);


                                        }
                                        /*
                                        else if ((rawEntry.indexOf(k1b3) == 0)
                                            || (rawEntry.indexOf(k2b3) == 0)
                                            || (rawEntry.indexOf(k2b4) == 0)
                                            || (rawEntry.indexOf(k3b4) == 0)) {

                                           console.warn("TODO kompletiere klassen");

                                            let kl = Kl1bis3;

                                            if (rawEntry.indexOf(k2b3) == 0) {kl = Kl2bis3}
                                            if (rawEntry.indexOf(k2b4) == 0) {kl = Kl2bis4}
                                            if (rawEntry.indexOf(k3b4) == 0) {kl = Kl3bis4}


                                             var tBlockKpl: TBlockinhaltBaseV2 = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                Inhalt:{q:'', BLOCK:{Standard:{scope:{kind:'Zug'}, Klasse:kl}}},
                                                                                       
                                                TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },
                                               
                                            }


                                            var tResultEntryB: TBlockEintrag = Importer.createTBlockEintrag_single(tBlockKpl);

                                            tResultZeile.Zeiteintraege.push(tResultEntryB);
                                        }*/

                                        else if ((rawEntry.indexOf("_") == 0) && (rawEntry.substr(1, 1) == rawEntry.substr(1, 1).toLowerCase())) {

                                            var tBuchstabe = rawEntry.substr(1, 1);
                                            var entry = parseFloat(rawEntry.substr(2));

                                            //var tNeuerTagesBereich = Importer.berechneTagesbereich(entry, tLetzteZeit, tLetzterTagesbereich);  
                                            console.warn("TAGESBEREICH NICHT BERECHNET");
                                            var tZeiteintrag: TZeiteintrag = {
                                                kind: BLOCK_T.ZEITEINTRAG,
                                                //RohZeit: entry,
                                                Schnellzug: tBuchstabe == "s",
                                                //Tagesbereich: ETagesbereich.Unbekannt, // tNeuerTagesBereich,
                                                Referenzkey: (tBuchstabe != "s") ? tBuchstabe : null,
                                                //Valid: ETimeValid.Nein,
                                                //Stunde24: 0,
                                                //Minute24: 0,
                                                //WelcherTag: SaxSchedulesTyped.GesternHeuteMorgen.Unbekannt,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT },
                                                Zeit: { kind: ZEIT_ROH, RohZeit: entry }


                                            };
                                            //tLetzteZeit = entry;
                                            //tLetzterTagesbereich = tNeuerTagesBereich;
                                            tResultZeile.Zeiteintraege.push(tZeiteintrag);


                                        }

                                        else {
                                            var tResultEntryE: TError = {
                                                kind: BLOCK_T.ERROR,
                                                Grund: "unknown string " + rawEntry
                                            };
                                            console.log("ELSE unknown string ", JSON.stringify(rawEntry));
                                            tResultZeile.Zeiteintraege.push(tResultEntryE);
                                        }

                                    } else {
                                        // doesnt start with 
                                        entry = parseInt(rawEntry); //.substr(1));  
                                        tIsTime = true;
                                    }
                                } else {
                                    // rawentry is number
                                    entry = rawEntry;
                                    tIsTime = true;
                                }

                                if (tIsTime) {
                                    //var tNeuerTagesBereich = Importer.berechneTagesbereich(entry, tLetzteZeit, tLetzterTagesbereich);
                                    var tZeiteintrag: TZeiteintrag = {
                                        kind: BLOCK_T.ZEITEINTRAG,
                                        //RohZeit: entry,
                                        Schnellzug: false,
                                        //Tagesbereich: ETagesbereich.Unbekannt, // tNeuerTagesBereich,
                                        Referenzkey: null,
                                        //Valid: ETimeValid.Nein,
                                        //Stunde24: 0,
                                        //Minute24: 0,
                                        //WelcherTag: SaxSchedulesTyped.GesternHeuteMorgen.Unbekannt,
                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT },
                                        Zeit: { kind: ZEIT_ROH, RohZeit: entry }

                                    };
                                    //tLetzteZeit = entry;
                                    //tLetzterTagesbereich = tNeuerTagesBereich;

                                    tResultZeile.Zeiteintraege.push(tZeiteintrag);
                                }
                            }
                            else if (!SaxInput.isIZeilenZusatzInfo(rawEntry)) {
                                
                                var rawentryX = rawEntry;
                                switch (rawentryX.kind) {
                                    case  BLOCK_T.KEINHALT:
                                        tResultZeile.Zeiteintraege.push(rawentryX);

                                        break;
                                    case  BLOCK_T.LEER:
                                       //var tResultEntryK: TKeinHalt = {
                                       //         kind: BLOCK_T.KEINHALT,
                                       //         BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                       //};
                                       // tResultZeile.Zeiteintraege.push(tResultEntryK);
                                        tResultZeile.Zeiteintraege.push(rawentryX);

                                        break;
                                    
                                    default:
                                        assertNever(rawentryX); 
                                        //console.error("unknown type not handled: ", rawentryX);
                                        break;
                                    
                                }

                                console.warn();

                                //embedded preparsed zellen handling
                            }
                            else {
                                console.log("Zusatzinfo, nicht Zeiteintrag");
                                var z = Importer.parseZeitZeileZusatzInfo(rawEntry);


                                if (!z.Valid) {
                                    var tResultEntryE: TError = {
                                        kind: BLOCK_T.ERROR,
                                        Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(rawEntry)
                                    };
                                    tResultZeile.Zeiteintraege.push(tResultEntryE);
                                }

                                //if (tResultZeile.kind === ZEILE_NORMAL){
                                tResultZeile.ZeitZeileZusatzInfo = z;


                                //}
                            }

                        }
                        tResult.Zeilen.push(tResultZeile);
                    }

                    //zugnr zeile  oder klassenzeile
                    if (("string" == typeof zeile[0]) && (((<string>zeile[0]).indexOf(_zugnr) == 0)
                        || ((<string>zeile[0]).indexOf(_klassen) == 0)
                        || ((<string>zeile[1]).indexOf(kl) == 0))) {
                        var tResultZeileNrn: TZugNrZeile | TKlassenNrZeile = {
                            kind: ZEILE_T.ZUGNR, // EZeilentyp.Zugnummer,
                            ZugNummern: [],
                            ZeitZeileZusatzInfo: undefined
                        };

                        if (((<string>zeile[0]).indexOf(_klassen) == 0) || (<string>zeile[1]).indexOf(kl) == 0) {
                            var x: TKlassenNrZeile = {
                                kind: ZEILE_T.KLASSEN,
                                KlassenNummern: [],
                                ZeitZeileZusatzInfo: undefined,    //letzter eintrag
                                BlockEintrag: undefined
                            };
                            tResultZeileNrn = x;
                            console.log("KLASSENZEILE ", i);

                            console.log("BLOCKK");
                            if (("string" == typeof zeile[0])
                                && ((<string>zeile[1]).indexOf(kl) == 0)
                                && ((<string>zeile[0]).indexOf(WAAGERECHT_PREFIX) == 0)) {
                                var tKey = (<string>zeile[0]).substr(WAAGERECHT_PREFIX.length);
                                console.log("BLOCKK2");
                                x.BlockEintrag = {
                                    kind: BLOCK_T.BLOCK,
                                    Start: true,
                                    Senkrecht: false,
                                    Breite: 1,
                                    Hoehe: 1,
                                    Passend: true,
                                    Referenzkey: tKey,
                                    Blockinhalt: undefined,
                                    Valid: true,
                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                };
                            }


                        }


                        for (var zi = 2; zi < zeile.length; zi++) {
                            const zeile_zi = zeile[zi];  // to help with typing
                            if ("number" == typeof zeile_zi) {

                                /*
                                var tBlockK: TBlockInhaltZugnummerOderKlasse = {
                                    Zugnr: zeile[zi].toString(),
                                    Klassen: EKlassen.NichtAngegeben
                                };

                                //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                var tBlockKpl: TBlockinhaltBase = {
                                    Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                    ZugNrOderKlasse: tBlockK,
                                    Gueltig: { kind: GUELTIG_T.IMMER },
                                    KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                    Fahrtage: { kind: FAEHRT_T.IMMER },
                                    TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },
                                    PfeilInfo: { kind: TKEINPFEIL },
                                    //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                    Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                    Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                }
                                */

                                var tBlockKpl: TBlockinhaltBaseV2 = {
                                    Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                    Inhalt: { q: '', BLOCK: { Standard: { scope: { kind: 'Zug' }, ZugNr: zeile[zi].toString() } } },

                                    TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },

                                }


                                var tWert = Importer.createTBlockEintrag_single(tBlockKpl);

                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tWert);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tWert);
                                        break;
                                }

                            }
                            else if (gnix === zeile_zi) {
                                var tLeer: TLeerEintrag = {
                                    kind: BLOCK_T.LEER,
                                    MitStrich: false,
                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                };
                                //tResultZeileNrn.ZugNummern.push(tLeer);

                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tLeer);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tLeer);
                                        break;
                                }


                            }
                            else if (_ === zeile_zi) {
                                var tLeer: TLeerEintrag = {
                                    kind: BLOCK_T.LEER,
                                    MitStrich: true,
                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                };

                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tLeer);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tLeer);
                                        break;
                                }
                                //tResultZeileNrn.ZugNummern.push(tLeer);

                            }
                            else if (("string" == typeof zeile_zi) && (zeile_zi != null) && (Object.keys(EKlassen).map(k => EKlassen[k as any]).indexOf(zeile_zi) > -1)) {
                                // for keys see   https://github.com/Microsoft/TypeScript/issues/17198
                                console.warn("todo trace to check: ", zeile_zi);

                                var tBlockKpl: TBlockinhaltBaseV2 = {
                                    Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                    Inhalt: { q: '', BLOCK: { Standard: { scope: { kind: 'Zug' }, Klasse: zeile_zi } } },
                                    TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },
                                }

                                var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tWert);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tWert);
                                        break;
                                }
                            }



                            else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (
                                ((<string>zeile[zi]).indexOf(SENKRECHT_PREFIX) == 0)
                                || ((<string>zeile[zi]).indexOf(WAAGERECHT_PREFIX) == 0)

                            )) {
                                //todo sa / wa or block support                         


                                var senkleng = SENKRECHT_PREFIX.length;
                                var waagleng = WAAGERECHT_PREFIX.length;

                                var tResultEntryB: TBlockEintrag = {
                                    kind: BLOCK_T.BLOCK,
                                    Senkrecht: ((<string>zeile[zi]).indexOf(SENKRECHT_PREFIX) == 0),
                                    Valid: false, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
                                    Start: false,
                                    Breite: 1,
                                    Hoehe: 1,
                                    Passend: true, // Gegenteil waere fern
                                    Referenzkey: ((<string>zeile[zi]).indexOf(SENKRECHT_PREFIX) == 0) ? (<string>zeile[zi]).substr(senkleng) : (<string>zeile[zi]).substr(waagleng),  // while invalid markers are letters
                                    Blockinhalt: undefined,
                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                };

                                //      tResultZeile.Zeiteintraege.push(tResultEntryB);

                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tResultEntryB);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tResultEntryB);
                                        break;
                                }
                            }
                            else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (("string" == typeof zeile[0]) && (((<string>zeile[0]).indexOf(_zugnr) == 0)))) {
                                //zugnr z.b. 1234a

                                /*
                                var tBlockK: TBlockInhaltZugnummerOderKlasse = {
                                    Zugnr: zeile[zi].toString(),
                                    Klassen: EKlassen.NichtAngegeben
                                };

                                //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                var tBlockKpl: TBlockinhaltBase = {
                                    Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                    ZugNrOderKlasse: tBlockK,
                                    //SpezialInfo: createTSpezialNix(),
                                    Gueltig: { kind: GUELTIG_T.IMMER },
                                    KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                    Fahrtage: { kind: FAEHRT_T.IMMER },
                                    TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },
                                    PfeilInfo: { kind: TKEINPFEIL },
                                    //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                    Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                    Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                }
                                */
                                var tBlockKpl: TBlockinhaltBaseV2 = {
                                    Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                    Inhalt: { q: '', BLOCK: { Standard: { scope: { kind: 'Zug' }, ZugNr: zeile[zi].toString() } } },

                                    TextOrt: { kind: TEXTORT_T.NICHTANGEGEBEN },

                                }

                                var tWert = Importer.createTBlockEintrag_single(tBlockKpl);

                                switch (tResultZeileNrn.kind) {
                                    case (ZEILE_T.ZUGNR):
                                        tResultZeileNrn.ZugNummern.push(tWert);
                                        break;
                                    case (ZEILE_T.KLASSEN):
                                        tResultZeileNrn.KlassenNummern.push(tWert);
                                        break;
                                }

                            }
                            else if ("string" == typeof zeile_zi){
                                console.error("unknown string error in  klassen or zugnummerzeile: ", zeile_zi);
                            }
                            else if (!SaxInput.isIZeilenZusatzInfo(zeile_zi)) {

                                console.error("unknown error in  klassen or zugnummerzeile: ", zeile_zi.kind);
                            }
                            else 
                                
                                
                                
                                {

                            
                                //var tError: TError = {
                                //    kind: BLOCK_ERROR,
                                //    Grund: "notImplemented "+JSON.stringify(zeile[zi])
                                //};


                                var z = Importer.parseZeitZeileZusatzInfo(zeile_zi);
                                tResultZeileNrn.ZeitZeileZusatzInfo = z;

                                console.log(z);

                                if (!z.Valid) {
                                    var tResultEntryE: TError = {
                                        kind: BLOCK_T.ERROR,
                                        Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(zeile[zi])
                                    };
                                    //tResultZeileNrn.Zeiteintraege.push(tResultEntryE);    

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_T.ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tResultEntryE);
                                            break;
                                        case (ZEILE_T.KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tResultEntryE);
                                            break;
                                    }
                                }

                                //if (tResultZeile.kind === ZEILE_NORMAL){



                                //tResultZeileNrn.ZugNummern.push(tError);
                            }


                        }

                        tResult.Zeilen.push(tResultZeileNrn);
                    }


                }
                console.log(zeile);

                // erstes ist string
                // a) reservierter string
                // a1) zugnr
                // a2) klasse
                // a3 irgendwas anderes

                // b) Station ohne kilometer

            }

        }

        if (input.ZellenVerweise != null) {
            input.ZellenVerweise.forEach((zi) => {
                //var tParsed = ZI_Importer.parseIZellenEigenschaft(zi);
                //tResult.ZusatzBloecke.push(tParsed);
                tResult.ZusatzBloecke.push(zi);
            });
        }

        return tResult;

    }
}

















// well next 3 classes implement only a parser for zusatzinfo !!!
// ZI_ ===  Zusatzinfobase bezogen

export class ZI_Creator {
    public static createTVerweisEmbedded(): TVerweisEmbedded {
        return {
            kind: VERWEIS_T.EMBEDDED
        }
    }

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

    public static assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }

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
        return "todo render v2";
    }
}

