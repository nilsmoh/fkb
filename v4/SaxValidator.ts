import {/*TBlockEintrag,*/ ZEILE_T, TZugNummernEintrag, TKlassenNrEintrag, TKlassenNrZeile, /* BLOCK_T,*/
 TNormalZeileEintrag, /*VERWEIS_T,*/

SingleDirectionScheduleTyped,
/*TBlockinhaltBase,*/
//TBlockinhaltBaseV2

} from "./SaxParsedTypes";

import {chooseown} from "./SaxInputTypes";

import {assertNever} from "./SaxBaseTypes"


/**
 * transformiere getypte +  geparste tabelle in einer reihe schritte
 * */


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
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_T.NORMAL:
                    case ZEILE_T.ANSCHLUSS_WEITER_AB:
                    case ZEILE_T.ANSCHLUSS_WEITER_IN:
                    case ZEILE_T.ZUGNR:
                    case ZEILE_T.KLASSEN:
                        var tEintraege: Array<TZugNrEintrag | TKlassenNrEintrag | TNormalZeileEintrag> = [];
                        if (z.kind == ZEILE_T.ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == ZEILE_T.KLASSEN) {
                            tEintraege = z.KlassenNummern;
                            //console.error("todo block eintragen");
                        }
                        if ((z.kind == ZEILE_T.ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == ZEILE_T.ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == ZEILE_T.ANSCHLUSS_WEITER_AB)
                            || (z.kind == ZEILE_T.ANSCHLUSS_WEITER_IN)
                            || (z.kind == ZEILE_T.NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach((zi, spalteidx) => {
                            
                            switch (zi.kind) {
                                case BLOCK_T.BLOCK:
                                    let zix = JSON.parse(JSON.stringify(zi)); // divide to be able to have different start values
                                    zix["comment"] = "created in merge()";

                                    (zix as TBlockEintrag).Start = false;
                                    tEintraege[spalteidx] = zix; 

                                    //let zix:TBlockEintrag = JSON.parse(JSON.stringify(zi));
                                    tUnprocessedBlocks.push({ eintrag: zix as TBlockEintrag, zeile: zeileidx, spalte: spalteidx, alreadyDone: false });
                                    
                                    break;
                                case BLOCK_T.ANKUNFT:
                                case BLOCK_T.ZEITEINTRAG:
                                case BLOCK_T.LEER:
                                case BLOCK_T.KEINHALT:
                                case BLOCK_T.DICKERSTRICH:
                                case BLOCK_T.ZUG_NR_WERT:
                                case BLOCK_T.ERROR:
                                case BLOCK_T.KLASSEN_WERT:
                                

                                //case BLOCK_T:
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
                                    return assertNever(zi);


                            }
                        });
                        break;
                    default:
                        return assertNever(z);
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
                    startblock.eintrag.Valid = true;
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
                        if ((tAnguck != null) 
                        && (tAnguck.alreadyDone == false) 
                        && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) 
                        && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                            startblock.eintrag.Breite++;
                            tAnguck.alreadyDone = true;
                            tAnguck.eintrag.Valid = true;
                            //tAnguck.eintrag.Start = false;
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
                        if ((tAnguck != null) 
                        && (tAnguck.alreadyDone == false) 
                        && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) 
                        && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                            startblock.eintrag.Hoehe++;
                            tAnguck.alreadyDone = true;
                            tAnguck.eintrag.Valid = true;
                            //tAnguck.eintrag.Start = false;  //test
                            tProcessedBlocks.push(tAnguck);

                        } else {
                            // suche nach rechts abbrechen weil nichts passendes
                            tSuchZeileWeiter = false;
                        }
                    }

                    console.log("ermittelte Hoehe ", startblock.eintrag.Hoehe);
                    console.log(JSON.stringify(startblock.eintrag));

                    // hoehe und breite jetzt fix
                    console.log("rechteck pruefen");
                    for (let z = startblock.zeile; z < startblock.zeile + startblock.eintrag.Hoehe; z++) {
                        for (let sp = startblock.spalte; sp < startblock.spalte + startblock.eintrag.Breite; sp++) {
                            let tAnguck = FindEntry(tUnprocessedBlocks, sp, z);
                            console.log(sp, z, tAnguck);
                            if ((tAnguck != null) 
                            && (true) 
                            && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) 
                            && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
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
                    console.log(JSON.stringify(startblock.eintrag));
                    //startblock.eintrag.Start = true;
                    tProcessedBlocks.push(startblock);
                } else {
                    console.warn("Validation error: found entry for already known refkey " + startblock.eintrag.Referenzkey + "!!!");
                }

            });

            console.log(tProcessedBlocks);
            return s;

        }

        public static validate_addZusatzinfobase(s: SingleDirectionScheduleTyped) {
            let nextFreeMarkerIdx = 0;
            //https://en.wikipedia.org/wiki/Miscellaneous_Symbols
            let freemarker = ["\u26B4", "\u26B5", "\u26B6"]; //dwarf planet symbols

            //replace chooseown optical markers
            s.ZusatzBloecke.forEach((z, idx, arr) => {
                if (z.Verweistyp.kind == VERWEIS_T.FERN) {
                    if (z.Verweistyp.OpticalMarker == chooseown) {
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
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_T.NORMAL:
                    case ZEILE_T.ANSCHLUSS_WEITER_AB:
                    case ZEILE_T.ANSCHLUSS_WEITER_IN:
                    case ZEILE_T.ZUGNR:
                    case ZEILE_T.KLASSEN:
                        var tEintraege: Array<TZugNrEintrag | TKlassenNrEintrag | TNormalZeileEintrag> = [];
                        if (z.kind == ZEILE_T.ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == ZEILE_T.KLASSEN) {
                            tEintraege = z.KlassenNummern;

                            /*
                            if (z.BlockEintrag) {
                                let tFound: TBlockinhaltBaseV2 | null = null;
                                for (let i = 0; i < s.ZusatzBloecke.length; i++) {
                                    let tBlockZusatz = s.ZusatzBloecke[i];
                                    if (tBlockZusatz.Verweistyp.kind == VERWEIS_T.EMBEDDED) {
                                        // embedded has no RefKey !!!
                                    }
                                    if (tBlockZusatz.Verweistyp.kind == VERWEIS_T.FERN || tBlockZusatz.Verweistyp.kind == VERWEIS_T.PASSEND) {
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
                                    (tFound as any)["XVirtualized"] = true;
                                    console.log("added into zug oder klassenzeile", tFound);
                                } else {
                                    console.warn("x Zusatzinfobase fehlt fuer refkey ", z.BlockEintrag.Referenzkey);
                                }

                            }
                        */


                        }
                        //if ((z.kind == ZEILE_ANSCHLUSS_AUS) ||(z.kind == ZEILE_ANSCHLUSS_NACH_IN)|| (z.kind == ZEILE_NORMAL)) {
                        //    tEintraege = z.Zeiteintraege;
                        //}
                        if ((z.kind == ZEILE_T.ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == ZEILE_T.ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == ZEILE_T.ANSCHLUSS_WEITER_AB)
                            || (z.kind == ZEILE_T.ANSCHLUSS_WEITER_IN)
                            || (z.kind == ZEILE_T.NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach((zi, spalteidx) => {
                            switch (zi.kind) {
                                case BLOCK_T.BLOCK:
                                    if (zi.Start && zi.Referenzkey) {
                                        /*
                                        let tFound: TBlockinhaltBaseV2 | null = null;
                                        for (let i = 0; i < s.ZusatzBloecke.length; i++) {
                                            let tBlockZusatz = s.ZusatzBloecke[i];
                                            if (tBlockZusatz.Verweistyp.kind == VERWEIS_T.EMBEDDED) {
                                                // embedded has no RefKey !!!
                                            }
                                            if (tBlockZusatz.Verweistyp.kind == VERWEIS_T.FERN || tBlockZusatz.Verweistyp.kind == VERWEIS_T.PASSEND) {
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
                                            (tFound as any)["YVirtualized"] = true;
                                            console.log("added into normal or anschlusszeile", tFound);
                                        } else {
                                            console.warn("x Zusatzinfobase fehlt fuer refkey ", zi.Referenzkey);
                                        }
                                        */
                                    }
                                    break;
                                case BLOCK_T.LEER:
                                case BLOCK_T.DICKERSTRICH:
                                case BLOCK_T.ERROR:
                                case BLOCK_T.ANKUNFT:
                                case BLOCK_T.ZEITEINTRAG:
                                case BLOCK_T.KEINHALT:
                                case BLOCK_T.ZUG_NR_WERT:
                                case BLOCK_T.KLASSEN_WERT:
                                    // ???? TODO
                                    break;
                                default:
                                    return assertNever(zi);
                            }
                        });
                        break;
                    default:
                        return assertNever(z);
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
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_T.ANSCHLUSS_WEITER_AB:
                    case ZEILE_T.ANSCHLUSS_WEITER_IN:
/*
                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.Ortsname) {
                                z.BhfTag = z.ZeitZeileZusatzInfo.Ortsname;
                                //z.ZeitZeileZusatzInfo.Ortsname = "__MOVED__";
                            } else {
                                console.warn("ANSCHLUSS MUSS ORT HABEN !!!", z);
                            }
                        }
                    case ZEILE_T.NORMAL:
                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.AnschlussNummern.length > 0) {
                                z.AnschlussNummern = z.ZeitZeileZusatzInfo.AnschlussNummern;
                                z.ZeitZeileZusatzInfo.AnschlussNummern = ["_MOVED_"];
                            }

                        }
*/

                       

                        break;
                    case ZEILE_T.ZUGNR:
                    case ZEILE_T.KLASSEN:
                    case ZEILE_T.NORMAL:
                        // ??? todo
                        break;
                    default:
                        return assertNever(z);
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