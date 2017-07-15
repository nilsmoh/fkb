///<reference path="SaxTypes.ts" />

module SaxSchedulesTyped {


    export class Validator {

        /**
       * innefficient but understandable
       * each block refkey processed independantly
      // implement V2 validation step
      //merge wa / sa blocks into first with start = true and width / height correctly set
      // also check and alert if non rectangular or non contiguos block is the (e.g. duplicate referenzkey for different blocks)
      */


        // implement V2 validation step
        //merge wa / sa blocks into first with start = true and width / height correctly set
        // also check and alert if non rectangular or non contiguos block is the (e.g. duplicate referenzkey for different blocks)
        public static validate_mergeBlocks(s: SingleDirectionScheduleTyped): SingleDirectionScheduleTyped {

            //var tGeseheneSW:any = {};
            //var tLetzteWaag: any = null;

            var tUnprocessedBlocks: Array<{ eintrag: TBlockEintrag, zeile: number, spalte: number, alreadyDone: boolean }> = [];
            var tProcessedBlocks: Array<{ eintrag: TBlockEintrag, zeile: number, spalte: number }> = [];
            var tAlreadyProcessedKeys: Array<string> = [];

            //liste alle wa/sa der ganzen tabelle in unprocessedBlocks auf
            s.Zeilen.forEach((z, zeileidx) => {
                switch (z.kind) {
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_ZUGNR:
                    case ZEILE_KLASSEN:
                        var tEintraege: Array<TZugNrEintrag | TKlassenNrEintrag | TNormalZeileEintrag> = [];
                        if (z.kind == ZEILE_ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == ZEILE_KLASSEN) {
                            tEintraege = z.KlassenNummern;
                            //console.error("todo block eintragen");
                        }
                        if ((z.kind == ZEILE_ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == ZEILE_ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == ZEILE_ANSCHLUSS_WEITER_AB)
                            || (z.kind == ZEILE_ANSCHLUSS_WEITER_IN)
                            || (z.kind == ZEILE_NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach((zi, spalteidx) => {
                            switch (zi.kind) {
                                case BLOCK_BLOCK:

                                    tUnprocessedBlocks.push({ eintrag: zi, zeile: zeileidx, spalte: spalteidx, alreadyDone: false });
                                    console.log("push ", spalteidx, zeileidx);
                                    break;
                                case BLOCK_ANKUNFT:
                                case BLOCK_ZEITEINTRAG:
                                case BLOCK_LEER:
                                case BLOCK_KEINHALT:
                                case BLOCK_DICKERSTRICH:
                                case BLOCK_ERROR:
                                    // alle die kein block sind
                                    /*
                                    if (tLetzteWaag != null){
                                        if (tLetzteWaag.horizontalFertig == false){
                                            tLetzteWaag.horzontalFertig = true;
                                            tLetzteWaag = null;
                                        }else{
                                        
                                        }
                                    
                                    }
                                    */
                                    break;
                                default:
                                    return Importer.assertNever(zi);


                            }
                        });
                        break;
                    default:
                        return Importer.assertNever(z);
                }

            });

            // now all blocks are in unprocessedblocks

            const FindEntry = function (arr: Array<{ eintrag: TBlockEintrag, zeile: number, spalte: number, alreadyDone: boolean }>, suchspalte: number, suchzeile: number): { eintrag: TBlockEintrag, zeile: number, spalte: number, alreadyDone: boolean } | null {
                var tResult: { eintrag: TBlockEintrag, zeile: number, spalte: number, alreadyDone: boolean } | null = null;
                for (let i = 0; i < arr.length; i++) {
                    if ((arr[i] != null) /* && (arr[i].alreadyDone == false) */ && (arr[i].spalte == suchspalte) && (arr[i].zeile == suchzeile)) {
                        tResult = arr[i];
                        break;
                    }

                }
                return tResult;
            };

            tUnprocessedBlocks.forEach((startblock) => {
                if (startblock.alreadyDone) return;
                // now we have a fresh block
                console.log("process");
                if (startblock.eintrag.Referenzkey == undefined) {
                    // todo embedded block ???
                    console.log("block without refkey");
                }
                else if (tAlreadyProcessedKeys.indexOf(startblock.eintrag.Referenzkey) < 0) {
                    startblock.eintrag.Start = true;
                    startblock.alreadyDone = true;
                    tAlreadyProcessedKeys.push(startblock.eintrag.Referenzkey);

                    console.log("Finding blocksize for ", startblock.eintrag.Referenzkey);

                    // alle anschliessenden bloecke finden und fertigmachen
                    var tSuchZeile = startblock.zeile;
                    var tSuchZeileWeiter = true;
                    var tSuchSpalte = startblock.spalte;
                    var tSuchSpalteWeiter = true;
                    var tSuchSpalteMax = startblock.spalte;

                    // suche nach rechts bis zum ende
                    while (tSuchSpalteWeiter) {
                        tSuchSpalte++;
                        var tAnguck = FindEntry(tUnprocessedBlocks, tSuchSpalte, tSuchZeile);
                        if ((tAnguck != null) && (tAnguck.alreadyDone == false) && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                            startblock.eintrag.Breite++;
                            tAnguck.alreadyDone = true;
                            tAnguck.eintrag.Valid = true;
                            tAnguck.eintrag.Start = false;
                            tProcessedBlocks.push(tAnguck);

                        } else {
                            // suche nach rechts abbrechen weil nichts passendes
                            tSuchSpalteWeiter = false;
                        }
                    }

                    console.log("ermittelte Breite: ", startblock.eintrag.Breite);


                    // Breite jetzt bekannt und fest, erste zeile als processed bekannt
                    // Hoehe wird jetzt gesucht
                    tSuchSpalte = startblock.spalte;

                    while (tSuchZeileWeiter) {
                        tSuchZeile++;
                        var tAnguck = FindEntry(tUnprocessedBlocks, tSuchSpalte, tSuchZeile);
                        console.log(tSuchSpalte, tSuchZeile, tAnguck);
                        if ((tAnguck != null) && (tAnguck.alreadyDone == false) && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                            startblock.eintrag.Hoehe++;
                            tAnguck.alreadyDone = true;
                            tAnguck.eintrag.Valid = true;
                            tAnguck.eintrag.Start = false;
                            tProcessedBlocks.push(tAnguck);

                        } else {
                            // suche nach rechts abbrechen weil nichts passendes
                            tSuchZeileWeiter = false;
                        }
                    }

                    console.log("ermittelte Hoehe ", startblock.eintrag.Hoehe);

                    // hoehe und breite jetzt fix
                    console.log("rechteck pruefen");
                    for (let z = startblock.zeile; z < startblock.zeile + startblock.eintrag.Hoehe; z++) {
                        for (let sp = startblock.spalte; sp < startblock.spalte + startblock.eintrag.Breite; sp++) {
                            let tAnguck = FindEntry(tUnprocessedBlocks, sp, z);
                            console.log(sp, z, tAnguck);
                            if ((tAnguck != null) && (true) && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                tAnguck.alreadyDone = true;
                                tAnguck.eintrag.Valid = true;
                                //tAnguck.eintrag.Start = false;  // NB start is visited again here !!!
                                tProcessedBlocks.push(tAnguck);
                                console.log("OK: ", sp, z);
                            } else {
                                console.error("Block validation failed: wrong entry (not wa / sa) in rectangluar area at Zeile ", z, " Spalte ", sp);
                            }
                        }
                    }
                    // rechteck jetzt ok, ausserhalb ueberzaehlige werden spaeter gefunden

                    tProcessedBlocks.push(startblock);
                } else {
                    console.warn("Validation error: found entry for already known refkey " + startblock.eintrag.Referenzkey + "!!!");
                }

            });

            return s;

        }

        public static validate_addZusatzinfobase(s: SingleDirectionScheduleTyped) {
            let nextFreeMarkerIdx = 0;
            //https://en.wikipedia.org/wiki/Miscellaneous_Symbols
            let freemarker = ["\u26B4", "\u26B5", "\u26B6"]; //dwarf planet symbols

            //replace chooseown optical markers
            s.ZusatzBloecke.forEach((z, idx, arr) => {
                if (z.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN) {
                    if (z.Verweistyp.OpticalMarker == SaxSchedules.chooseown) {
                        z.Verweistyp.OpticalMarker = freemarker[nextFreeMarkerIdx];
                        nextFreeMarkerIdx++;
                    }
                }

            });

            //add directly into each respective block
            s.Zeilen.forEach((z) => {
                switch (z.kind) {
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    //case ZEILE_ANSCHLUSS_AUS:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_ZUGNR:
                    case ZEILE_KLASSEN:
                        var tEintraege: Array<TZugNrEintrag | TKlassenNrEintrag | TNormalZeileEintrag> = [];
                        if (z.kind == ZEILE_ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == ZEILE_KLASSEN) {
                            tEintraege = z.KlassenNummern;

                            if (z.BlockEintrag) {
                                let tFound: SaxSchedulesZusatzBase.TBlockinhaltBase | null = null;
                                for (let i = 0; i < s.ZusatzBloecke.length; i++) {
                                    let tBlockZusatz = s.ZusatzBloecke[i];
                                    if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_EMBEDDED) {
                                        // embedded has no RefKey !!!
                                    }
                                    if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN || tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_PASSEND) {
                                        if (tBlockZusatz.Verweistyp.ReferenzKey === z.BlockEintrag.Referenzkey) {
                                            if (tFound == null) {
                                                tFound = tBlockZusatz;
                                            } else {
                                                console.warn("zusatzbloecke enthaelt refkey mehrmals x: ", z.BlockEintrag.Referenzkey);
                                            }
                                        }

                                    }
                                }
                                if (tFound) {
                                    z.BlockEintrag.Blockinhalt = tFound; //  zi.Blockinhalt = tFound;
                                } else {
                                    console.warn("x Zusatzinfobase fehlt fuer refkey ", z.BlockEintrag.Referenzkey);
                                }

                            }



                        }
                        //if ((z.kind == ZEILE_ANSCHLUSS_AUS) ||(z.kind == ZEILE_ANSCHLUSS_NACH_IN)|| (z.kind == ZEILE_NORMAL)) {
                        //    tEintraege = z.Zeiteintraege;
                        //}
                        if ((z.kind == ZEILE_ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == ZEILE_ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == ZEILE_ANSCHLUSS_WEITER_AB)
                            || (z.kind == ZEILE_ANSCHLUSS_WEITER_IN)
                            || (z.kind == ZEILE_NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach((zi, spalteidx) => {
                            switch (zi.kind) {
                                case BLOCK_BLOCK:
                                    if (zi.Start && zi.Referenzkey) {
                                        let tFound: SaxSchedulesZusatzBase.TBlockinhaltBase | null = null;
                                        for (let i = 0; i < s.ZusatzBloecke.length; i++) {
                                            let tBlockZusatz = s.ZusatzBloecke[i];
                                            if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_EMBEDDED) {
                                                // embedded has no RefKey !!!
                                            }
                                            if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN || tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_PASSEND) {
                                                if (tBlockZusatz.Verweistyp.ReferenzKey === zi.Referenzkey) {
                                                    if (tFound == null) {
                                                        tFound = tBlockZusatz;
                                                    } else {
                                                        console.warn("zusatzbloecke enthaelt refkey mehrmals: ", zi.Referenzkey);
                                                    }
                                                }

                                            }
                                        }
                                        if (tFound) {
                                            zi.Blockinhalt = tFound;
                                        } else {
                                            console.warn("x Zusatzinfobase fehlt fuer refkey ", zi.Referenzkey);
                                        }
                                    }
                                    break;
                                case BLOCK_LEER:
                                case BLOCK_DICKERSTRICH:
                                case BLOCK_ERROR:
                                case BLOCK_ANKUNFT:
                                case BLOCK_ZEITEINTRAG:
                                case BLOCK_KEINHALT:
                                    // ???? TODO
                                    break;
                                default:
                                    return Importer.assertNever(zi);
                            }
                        });
                        break;
                    default:
                        return Importer.assertNever(z);
                }
            });

        }


        /**
         *  kopiere Bahnhofsname, der in "_anschluss_aus" belegte Zeilen aus den zusatzinfos in den header
         *  kopiere Anschlussnummern fuer normale zeilen aus den zusatzinfos in den header 
         */
        public static validate_move_Anschluss_ZusatzInfo(s: SingleDirectionScheduleTyped) {
            s.Zeilen.forEach((z) => {
                switch (z.kind) {
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    //case ZEILE_ANSCHLUSS_AUS:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:

                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.Ortsname.length > 0) {
                                z.BhfTag = z.ZeitZeileZusatzInfo.Ortsname;
                                z.ZeitZeileZusatzInfo.Ortsname = "__MOVED__";
                            } else {
                                console.warn("ANSCHLUSS MUSS ORT HABEN !!!", z);
                            }
                        }
                    case ZEILE_NORMAL:
                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.AnschlussNummern.length > 0) {
                                z.AnschlussNummern = z.ZeitZeileZusatzInfo.AnschlussNummern;
                                z.ZeitZeileZusatzInfo.AnschlussNummern = ["_MOVED_"];
                            }

                        }

                        break;
                    case ZEILE_ZUGNR:
                    case ZEILE_KLASSEN:
                        // ??? todo
                        break;
                    default:
                        return Importer.assertNever(z);
                }
            });


        }
        /*
         public static validate_Zeiten24(s:SingleDirectionScheduleTyped){
             s.Zeilen.forEach((z)=>{
                 switch (z.kind){
                     case ZEILE_ANSCHLUSS_NACH_IN:
                     case ZEILE_NORMAL:
                     case ZEILE_ANSCHLUSS_AUS:
                     case ZEILE_ZUGNR:
                     case ZEILE_KLASSEN:                        
                         var tEintraege: Array<TZugNrEintrag|TKlassenNrEintrag|TNormalZeileEintrag> = [];
                         if (z.kind == ZEILE_ZUGNR){
                             tEintraege = z.ZugNummern;
                         }
                         if (z.kind == ZEILE_KLASSEN){
                             tEintraege = z.KlassenNummern;
                         }
                         if ((z.kind == ZEILE_ANSCHLUSS_AUS) ||(z.kind == ZEILE_ANSCHLUSS_NACH_IN)|| (z.kind == ZEILE_NORMAL)) {
                             tEintraege = z.Zeiteintraege;
                         }
                         tEintraege.forEach((zi, spalteidx)=>{
                             switch(zi.kind){
                                 case BLOCK_ZEITEINTRAG : 
                                     console.log(JSON.stringify(zi));
                                     break;
                                 }
                         });
                 }
             }); 
         }
         */
    }

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
                    case ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_KLASSEN:
                    case ZEILE_ZUGNR:
                        // ignored for counting columns
                        break;
                    default:
                        return Importer.assertNever(z);
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
                        case ZEILE_NORMAL:
                        case ZEILE_ANSCHLUSS_WEITER_AB:
                        case ZEILE_ANSCHLUSS_WEITER_IN:
                            var tEintrag = z.Zeiteintraege[sp];
                            //zugriff nur auf einen eintrag
                            switch (tEintrag.kind) {
                                case BLOCK_ZEITEINTRAG:
                                    // vorgaenger nach links suchen  
                                    var tFestgelegt = false;   //suche nach links hat was ergeben 

                                    for (var i = sp - 1; i >= 0; i--) {

                                        var tVorgaenger = z.Zeiteintraege[i];

                                        switch (tVorgaenger.kind) {
                                            case BLOCK_ZEITEINTRAG:
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
                                            case BLOCK_LEER:
                                            case BLOCK_KEINHALT:
                                            case BLOCK_DICKERSTRICH:
                                            case BLOCK_KEINHALT:
                                            case BLOCK_ERROR:
                                            case BLOCK_ANKUNFT:
                                            case BLOCK_BLOCK:
                                                // diese linksliegende Felder werden uebersprungen, suche nur links liegen Zeitfelder            
                                                break;

                                            default:
                                                return Importer.assertNever(tVorgaenger);
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
                                case BLOCK_LEER:
                                case BLOCK_KEINHALT:
                                case BLOCK_DICKERSTRICH:
                                case BLOCK_KEINHALT:
                                case BLOCK_ERROR:
                                case BLOCK_ANKUNFT:
                                case BLOCK_BLOCK:
                                    //nothing to fill for these entries            
                                    break;
                                default:
                                    return Importer.assertNever(tEintrag);

                            }
                            break;
                        case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case ZEILE_ZUGNR:
                        case ZEILE_KLASSEN:
                            //ignored in first fill step
                            break;
                        default:
                            return Importer.assertNever(z);
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
                        case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                            //suche 24h drunter
                            var tAnschlusszeit = z.Zeiteintraege[sp];
                            if (tAnschlusszeit.kind == BLOCK_ZEITEINTRAG) {
                                for (var di = zidx + 1; di < s.Zeilen.length; di++) {
                                    var zzz_zeileDrunter = s.Zeilen[di];
                                    if (zzz_zeileDrunter.kind == ZEILE_NORMAL) {
                                        var eee_drunterEintrag = zzz_zeileDrunter.Zeiteintraege[sp];
                                        if (eee_drunterEintrag.kind == BLOCK_ZEITEINTRAG) {
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
                var tLast: TZeit24 /*TZeiteintrag*/ | null = null;
                switch (z.kind) {
                    //case ZEILE_ANSCHLUSS_AUS:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        z.Zeiteintraege.forEach((e) => {
                            if (e.kind == BLOCK_ZEITEINTRAG) {
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
                    case ZEILE_NORMAL:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                        z.Zeiteintraege.forEach((e) => {
                            if (e.kind == BLOCK_ZEITEINTRAG) {
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
      public static berechneTagesbereich(num: number, letzteZeit: number, letzterBereich: ETagesbereich) {
            if (letzteZeit == -1) {
                return ETagesbereich.Vormittag;   // allererster Eintrag immer Vormittag
            }
            if (letzterBereich == ETagesbereich.Nachmittag) {  //nachmittag erreicht, bleibt
                if(letzteZeit> num){
                    return ETagesbereich.Vormittag; //war nachmittag, aber jetzt nach mitternacht
                }
                    else{
                return ETagesbereich.Nachmittag;
                }
            }
            if (num < letzteZeit) {  //umschalten
                return ETagesbereich.Nachmittag;
            }
            return ETagesbereich.Vormittag; // sonst weiter vormittag
        }
        */
        public static createTBlockEintrag_single(BlockInhalt: SaxSchedulesZusatzBase.TBlockinhaltBase): TBlockEintrag {
            var tResultEntryB: TBlockEintrag = {
                kind: BLOCK_BLOCK,
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

        public static parseZeitZeileZusatzInfo(rawEntry: SaxSchedules.IZeilenZusatzInfo): ZeitZeileZusatzInfo {
            var tZeitZeilenZusatzInfo: ZeitZeileZusatzInfo = {
                AnschlussNummern: [],
                Ortsname: "",
                Fahrpreise: { kind: FAHRPREIS_KEINE_ANGABE },
                Valid: false,
                Raw: JSON.stringify(rawEntry)
            };

            var tWillBeValid = true;
            if (rawEntry.fk) {/* Fahrpreis */
                if (rawEntry.fk.length == 2) {
                    // nur einfache Fahrt
                    var tFahrpreisInfo2: SaxSchedulesTyped.TFahrpreisEinfach = {
                        kind: FAHRPREIS_EINFACH,
                        Einfach2: rawEntry.fk[0],
                        Einfach3: rawEntry.fk[1]
                    };
                    tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo2;
                } else if (rawEntry.fk.length == 4) {
                    var tFahrpreisInfo4: TFahrpreisEinfachUndRueck = {
                        kind: FAHRPREIS_EINFACH_UND_RUECK,
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

            if (rawEntry.fkab) { /* fahrpreis ab */
                var tFahrpreisAb: TFahrpreisAb = {
                    kind: FAHRPREIS_AB,
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

        public static parse(input: SaxSchedules.SingleDirectionScheduleInput): SingleDirectionScheduleTyped {
            // fuelle Grunddaten
            var tResult: SingleDirectionScheduleTyped = {
                Quelle: EQuelle.FritzscheSommer1900,
                Kommentar: (input.comment) ? input.comment : "",
                Ueberschrift: input.caption,
                //Bahnverwaltung: (input.bahn == SaxSchedules.Sachs) ? EBahnverwaltung.KSaechsStsEB : EBahnverwaltung.NichtAngegeben,  //todo andere bahnen
                Route1900: input.route1900.toString(),
                Klassen: SaxSchedulesZusatzBase.Creator.parseKlassenString(input.klassen),
                Seite: input.seite, // seite in FKB wie gedrukt
                Zeilen: [],
                ZusatzBloecke: []
            }



            //ergaenze Zeilen
            if (input.zeilen != null) {

                var tNextAbIsFirst = true;   // erste ab speziell speichern, damit "aus " in die tabelle gerendert werden kann

                for (var i = 0; i < input.zeilen.length; i++) {
                    var zeile: Array<(string | number | SaxSchedules.IZeilenZusatzInfo)> = input.zeilen[i];
                    if ((zeile != null) && (zeile.length >= 2)) {
                        //ab, an, oder eine form von anschlusszeile (anschluss_aus, _anschluss_aus_ziel, _anschluss_nach_start,  _anschluss_nach_in )
                        if ((("number" == typeof zeile[0]) ||  //KM Angabe
                            (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf("_") != 0))) ||     //Bahnhofsname
                            (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_aus) == 0)) ||
                            (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_aus_ziel) == 0)) ||
                            (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_nach_start) == 0)) ||
                            (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_nach_in) == 0))) {

                            var tAnAbString: string = <string>(("number" == typeof zeile[0]) ? zeile[2] : zeile[1]);
                            var tAnAb = EAnAb.FirstAb;

                            if (tAnAbString == SaxSchedules.ab) {
                                if (tNextAbIsFirst) {
                                    tAnAb = EAnAb.FirstAb;
                                    tNextAbIsFirst = false;
                                } else {
                                    tAnAb = EAnAb.FollowAb;
                                    tNextAbIsFirst = false;
                                }
                            }

                            if (tAnAbString == SaxSchedules.an) {
                                tAnAb = EAnAb.An;
                                tNextAbIsFirst = true;
                            }


                            var tResultZeileN: TNormalzeile = {
                                kind: ZEILE_NORMAL, // EZeilentyp.Normalzeile,
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
                            if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_nach_in) == 0)) {
                                var tResultZeileX: TAnschlussWeiterInZeile = {
                                    kind: ZEILE_ANSCHLUSS_WEITER_IN, // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                                    BhfTag: "",             // TODO aus Zusatzinfo lesen
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                }
                                tResultZeile = tResultZeileX;
                            }

                            if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_nach_start) == 0)) {
                                var tResultZeileXD: TAnschlussWeiterAbZeile = {
                                    kind: ZEILE_ANSCHLUSS_WEITER_AB,  // ZEILE_ANSCHLUSS_NACH_IN, // EZeilentyp.AnschlussNachIn,
                                    BhfTag: "",             // TODO aus Zusatzinfo lesen
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                }
                                tResultZeile = tResultZeileXD;
                            }

                            if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_aus) == 0)) {
                                var tResultZeileY: TAnschlussZubringerAbZeile = {
                                    kind: ZEILE_ANSCHLUSS_ZUBRINGER_AB, //
                                    BhfTag: "",             // TODO aus Zusatzinfo lesen
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                }
                                tResultZeile = tResultZeileY;
                            }

                            if (("string" == typeof zeile[0]) && ((<string>zeile[0]).indexOf(SaxSchedules._anschluss_aus_ziel) == 0)) {
                                var tResultZeileZ: TAnschlussZubringerInZeile = {
                                    kind: ZEILE_ANSCHLUSS_ZUBRINGER_IN, //
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

                                            if (rawEntry == SaxSchedules.nix) {
                                                var tResultEntryL: TLeerEintrag = {
                                                    kind: BLOCK_LEER,
                                                    MitStrich: true,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryL);
                                            }
                                            else if (rawEntry == SaxSchedules.gnix) {
                                                var tResultEntryL: TLeerEintrag = {
                                                    kind: BLOCK_LEER,
                                                    MitStrich: false,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryL);
                                            }


                                            // hier ANK, waagerechte linie, 
                                            else if (rawEntry.indexOf(SaxSchedules.ank) == 0) {

                                                var tResultEntryAnk: TAnkunftEintrag = {
                                                    kind: BLOCK_ANKUNFT,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryAnk);
                                                /*
                                                                        // an zelle, zeigt dass ein zug darueber endet
                                                                        var tBlockInhaltZugNrOderKlasse: TBlockInhaltZugnummerOderKlasse = {
                                                                            Zugnr: null,
                                                                            Klassen: EKlassen.NichtAngegeben
                                                                        };

                                                                        //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                                                        var tSpezialAnkunft : TSpezialAnkunft ={
                                                                            kind: SPEZIAL_ANKUNFT
                                                                        };

                                                                        var tBlockInhaltBase: TBlockinhaltBase = {
                                                                            Verweistyp: Importer.createTVerweisPassend(),
                                                                            //Referenzkey: "", //Marker: "",
                                                                            ZugNrOderKlasse: tBlockInhaltZugNrOderKlasse,
                                                                            SpezialInfo: tSpezialAnkunft,
                                                                            Gueltig:  {kind:GUELTIG_IMMER},
                                                                            //     SpezialEintrag: tSpezialEintrag ,  //ANkunft, waagerechte linie ...
                                                                            Unbekannt: Importer.createBlockInhaltRawOk()

                                                                        };

                                                                        var tResultEntryB = Importer.createTBlockEintrag_single(tBlockInhaltBase);
                                                                        //console.log("ELSE unknown string ", JSON.stringify(rawEntry));
                                                                        tResultZeile.Zeiteintraege.push(tResultEntryB);
                                                */
                                            }




                                            else if (rawEntry == SaxSchedules.kHlt) {
                                                var tResultEntryK: TKeinHalt = {
                                                    kind: BLOCK_KEINHALT,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryK);
                                            }
                                            else if (rawEntry == SaxSchedules.dick) {
                                                var tResultEntryD: TDickerStrichEintrag = {
                                                    kind: BLOCK_DICKERSTRICH,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryD);
                                            }
                                            else if ((rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) || (rawEntry.indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0)) {

                                                var senkleng = SaxSchedules.SENKRECHT_PREFIX.length;
                                                var waagleng = SaxSchedules.WAAGERECHT_PREFIX.length;

                                                var tResultEntryB: TBlockEintrag = {
                                                    kind: BLOCK_BLOCK,
                                                    Senkrecht: (rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0),
                                                    Valid: false, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
                                                    Start: false,
                                                    Breite: 1,
                                                    Hoehe: 1,
                                                    Passend: true, // Gegenteil waere fern
                                                    Referenzkey: (rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) ? rawEntry.substr(senkleng) : rawEntry.substr(waagleng),  // while invalid markers are letters
                                                    Blockinhalt: undefined,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };

                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }
                                            else if (rawEntry.indexOf("_Z") == 0) { // Zugnummer Z1234

                                                var tZugNr = rawEntry.substr(2);

                                                var tBlock: SaxSchedulesZusatzBase.TBlockInhaltZugnummerOderKlasse = {
                                                    Zugnr: tZugNr,
                                                    Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                                };

                                                //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                                var tBlockKpl: SaxSchedulesZusatzBase.TBlockinhaltBase = {
                                                    Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                                    ZugNrOderKlasse: tBlock,
                                                    Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                                    KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                                    Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                                    TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                                    PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                                    //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                                    Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                                    Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                                }

                                                var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);

                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }
                                            else if ((rawEntry.indexOf(SaxSchedules.k1b3) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k2b3) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k2b4) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k3b4) == 0)) {

                                                var tBlock: SaxSchedulesZusatzBase.TBlockInhaltZugnummerOderKlasse = SaxSchedulesZusatzBase.Creator.createTBlockInhaltZugnummerOderKlasse(null, rawEntry);

                                                //var tOk: TBlockInhaltRawOk = { kind: BlockRaw_ok };

                                                var tBlockKpl: SaxSchedulesZusatzBase.TBlockinhaltBase = {
                                                    //kind: zz,
                                                    Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                                    //Referenzkey: "", //Marker: "",
                                                    ZugNrOderKlasse: tBlock,
                                                    Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                                    //SpezialInfo: createTSpezialNix(),
                                                    KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                                    Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                                    TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                                    PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                                    //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                                    Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                                    Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                                }

                                                var tResultEntryB: TBlockEintrag = Importer.createTBlockEintrag_single(tBlockKpl);

                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }

                                            else if ((rawEntry.indexOf("_") == 0) && (rawEntry.substr(1, 1) == rawEntry.substr(1, 1).toLowerCase())) {

                                                var tBuchstabe = rawEntry.substr(1, 1);
                                                var entry = parseFloat(rawEntry.substr(2));

                                                //var tNeuerTagesBereich = Importer.berechneTagesbereich(entry, tLetzteZeit, tLetzterTagesbereich);  
                                                console.warn("TAGESBEREICH NICHT BERECHNET");
                                                var tZeiteintrag: TZeiteintrag = {
                                                    kind: BLOCK_ZEITEINTRAG,
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
                                                    kind: BLOCK_ERROR,
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
                                            kind: BLOCK_ZEITEINTRAG,
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
                                else {
                                    console.log("Zusatzinfo, nicht Zeiteintrag");
                                    var z = Importer.parseZeitZeileZusatzInfo(rawEntry);


                                    if (!z.Valid) {
                                        var tResultEntryE: TError = {
                                            kind: BLOCK_ERROR,
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
                        if (("string" == typeof zeile[0]) && (((<string>zeile[0]).indexOf(SaxSchedules._zugnr) == 0)
                            || ((<string>zeile[0]).indexOf(SaxSchedules._klassen) == 0)
                            || ((<string>zeile[1]).indexOf(SaxSchedules.kl) == 0))) {
                            var tResultZeileNrn: TZugNrZeile | TKlassenNrZeile = {
                                kind: ZEILE_ZUGNR, // EZeilentyp.Zugnummer,
                                ZugNummern: [],
                                ZeitZeileZusatzInfo: undefined
                            };

                            if (((<string>zeile[0]).indexOf(SaxSchedules._klassen) == 0) || (<string>zeile[1]).indexOf(SaxSchedules.kl) == 0) {
                                var x: TKlassenNrZeile = {
                                    kind: ZEILE_KLASSEN,
                                    KlassenNummern: [],
                                    ZeitZeileZusatzInfo: undefined,    //letzter eintrag
                                    BlockEintrag: undefined
                                };
                                tResultZeileNrn = x;
                                console.log("KLASSENZEILE ", i);

                                console.log("BLOCKK");
                                if (("string" == typeof zeile[0])
                                    && ((<string>zeile[1]).indexOf(SaxSchedules.kl) == 0)
                                    && ((<string>zeile[0]).indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0)) {
                                    var tKey = (<string>zeile[0]).substr(SaxSchedules.WAAGERECHT_PREFIX.length);
                                    console.log("BLOCKK2");
                                    x.BlockEintrag = {
                                        kind: BLOCK_BLOCK,
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
                                if ("number" == typeof zeile[zi]) {


                                    var tBlockK: SaxSchedulesZusatzBase.TBlockInhaltZugnummerOderKlasse = {
                                        Zugnr: zeile[zi].toString(),
                                        Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                    };

                                    //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                    var tBlockKpl: SaxSchedulesZusatzBase.TBlockinhaltBase = {
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        ZugNrOderKlasse: tBlockK,
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                    }

                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tWert);
                                            break;
                                    }

                                }
                                else if (SaxSchedules.gnix === zeile[zi]) {
                                    var tLeer: TLeerEintrag = {
                                        kind: BLOCK_LEER,
                                        MitStrich: false,
                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                    };
                                    //tResultZeileNrn.ZugNummern.push(tLeer);

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tLeer);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tLeer);
                                            break;
                                    }


                                }
                                else if (SaxSchedules._ === zeile[zi]) {
                                    var tLeer: TLeerEintrag = {
                                        kind: BLOCK_LEER,
                                        MitStrich: true,
                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }

                                    };

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tLeer);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tLeer);
                                            break;
                                    }
                                    //tResultZeileNrn.ZugNummern.push(tLeer);

                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (
                                    ((<string>zeile[zi]).indexOf(SaxSchedules.k1b3) == 0)
                                    || ((<string>zeile[zi]).indexOf(SaxSchedules.k2b3) == 0)
                                    || ((<string>zeile[zi]).indexOf(SaxSchedules.k2b4) == 0)
                                    || ((<string>zeile[zi]).indexOf(SaxSchedules.k3b4) == 0))) {
                                    var tKlassenstring: string = <string>zeile[zi];
                                    var tBlockK = SaxSchedulesZusatzBase.Creator.createTBlockInhaltZugnummerOderKlasse(null, tKlassenstring);
                                    //var tOk: TBlockInhaltRawOk = { kind: BlockRaw_ok  };

                                    var tBlockKpl: SaxSchedulesZusatzBase.TBlockinhaltBase = {
                                        //kind: zz,
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        //Referenzkey: "", //Marker: "",
                                        ZugNrOderKlasse: tBlockK,
                                        //SpezialInfo: createTSpezialNix(),
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                    }

                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tWert);
                                            break;
                                    }



                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (
                                    ((<string>zeile[zi]).indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0)
                                    || ((<string>zeile[zi]).indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0)

                                )) {
                                    //todo sa / wa or block support                         


                                    var senkleng = SaxSchedules.SENKRECHT_PREFIX.length;
                                    var waagleng = SaxSchedules.WAAGERECHT_PREFIX.length;

                                    var tResultEntryB: TBlockEintrag = {
                                        kind: BLOCK_BLOCK,
                                        Senkrecht: ((<string>zeile[zi]).indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0),
                                        Valid: false, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
                                        Start: false,
                                        Breite: 1,
                                        Hoehe: 1,
                                        Passend: true, // Gegenteil waere fern
                                        Referenzkey: ((<string>zeile[zi]).indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) ? (<string>zeile[zi]).substr(senkleng) : (<string>zeile[zi]).substr(waagleng),  // while invalid markers are letters
                                        Blockinhalt: undefined,
                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                    };

                                    //      tResultZeile.Zeiteintraege.push(tResultEntryB);

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tResultEntryB);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tResultEntryB);
                                            break;
                                    }
                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (("string" == typeof zeile[0]) && (((<string>zeile[0]).indexOf(SaxSchedules._zugnr) == 0)))) {
                                    //zugnr z.b. 1234a
                                    var tBlockK: SaxSchedulesZusatzBase.TBlockInhaltZugnummerOderKlasse = {
                                        Zugnr: zeile[zi].toString(),
                                        Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                    };

                                    //var tOk: TBlockInhaltRawOk = {  kind: BlockRaw_ok  };

                                    var tBlockKpl: SaxSchedulesZusatzBase.TBlockinhaltBase = {
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        ZugNrOderKlasse: tBlockK,
                                        //SpezialInfo: createTSpezialNix(),
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        //Scope: SaxSchedulesZusatzBase.EScope.KeineAngabe,
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: EBahnverwaltung.NichtAngegeben
                                    }

                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);

                                    switch (tResultZeileNrn.kind) {
                                        case (ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tWert);
                                            break;
                                    }

                                }
                                else {
                                    //var tError: TError = {
                                    //    kind: BLOCK_ERROR,
                                    //    Grund: "notImplemented "+JSON.stringify(zeile[zi])
                                    //};


                                    var z = Importer.parseZeitZeileZusatzInfo(zeile[zi]);
                                    tResultZeileNrn.ZeitZeileZusatzInfo = z;

                                    console.log(z);

                                    if (!z.Valid) {
                                        var tResultEntryE: TError = {
                                            kind: BLOCK_ERROR,
                                            Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(zeile[zi])
                                        };
                                        //tResultZeileNrn.Zeiteintraege.push(tResultEntryE);    

                                        switch (tResultZeileNrn.kind) {
                                            case (ZEILE_ZUGNR):
                                                tResultZeileNrn.ZugNummern.push(tResultEntryE);
                                                break;
                                            case (ZEILE_KLASSEN):
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
                    var tParsed = SaxSchedulesZusatzBase.Importer.parseIZellenEigenschaft(zi);
                    tResult.ZusatzBloecke.push(tParsed);
                });
            }

            return tResult;

        }

        public static assertNever(x: never): never {
            throw new Error("Unexpected object: " + x);
        }




    }
}

