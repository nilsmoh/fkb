
   import * as ParsedTypes from "./SaxParsedTypes";
import { ZI_Renderer } from "./SaxParser";
import { TZugNrZeile, ZEILE_T, TKlassenNrZeile, TKlassenNrEintrag } from "./SaxParsedTypes";
import { assertNever } from "./SaxBaseTypes";

   //creates completely new (by JSON)
   export function makeTableVirtual(tInput:ParsedTypes.SingleDirectionScheduleTyped):ParsedTypes.SingleDirectionScheduleTyped_plusVirtual 
   {

        let virtualize = function(z:ParsedTypes.TZeile):ParsedTypes.TZeile_plusVirtual{
              (z as ParsedTypes.TZeile_plusVirtual).Virtual = false;
              return z as ParsedTypes.TZeile_plusVirtual;
        };

        let tResult: ParsedTypes.SingleDirectionScheduleTyped_plusVirtual ={
            Quelle: JSON.parse(JSON.stringify(tInput.Quelle)),
            Kommentar: JSON.parse(JSON.stringify(tInput.Kommentar)),
            Seite: JSON.parse(JSON.stringify(tInput.Seite)), // seite in FKB wie gedruckt
            Ueberschrift: JSON.parse(JSON.stringify(tInput.Ueberschrift)),
            Route1900: JSON.parse(JSON.stringify(tInput.Route1900)),
            Klassen: JSON.parse(JSON.stringify(tInput.Klassen)),
            Zeilen: JSON.parse(JSON.stringify(tInput.Zeilen)).map(virtualize),
            ZusatzBloecke: JSON.parse(JSON.stringify(tInput.ZusatzBloecke))
        };

       return tResult;
    }

    /**
     * Konvertiere zugnr und klassennummern und fuege sie als virtuelle zeilen hinzu
     * Modifies in place !!!
     * 
     * @param tInput 
     */
    
    export function virtualizeZugNrZugKlasse(tInput: ParsedTypes.SingleDirectionScheduleTyped_plusVirtual): ParsedTypes.SingleDirectionScheduleTyped_plusVirtual{
        console.log("--- VIRTUALIZE ZugNr, ZugKlasse -------");
        var tResult:ParsedTypes.SingleDirectionScheduleTyped_plusVirtual = JSON.parse(JSON.stringify( tInput)); 
        
        var iz = 0;
        while (iz < tResult.Zeilen.length){
            console.log("while ",iz);
            var xzeile = tResult.Zeilen[iz];
            switch(xzeile.kind){
                case ParsedTypes.ZEILE_T.NORMAL:
                var zeile:ParsedTypes.TNormalzeile & {Virtual:boolean}  = xzeile;

                let tNeedVirtualZugZeile = false;
                let tNeedVirtualKlassenZeile = false;
                let tStandardZugVirtuelleZeile: TZugNrZeile & {Virtual: boolean} = {
                                                kind: ZEILE_T.ZUGNR,
                                                ZugNummern: new Array<ParsedTypes.TNormalZeileEintragBase>(),
                                                ZeitZeileZusatzInfo: undefined,
                                                Virtual: true
                                            }
                                            
                                            
                let tStandardKlasseVirtuelleZeile: TKlassenNrZeile & {Virtual: boolean} = {
                                                kind: ZEILE_T.KLASSEN,
                                                KlassenNummern: new Array<ParsedTypes.TKlassenNrEintrag>(),
                                                ZeitZeileZusatzInfo: undefined,
                                                Virtual: true,
                                                //BlockEintrag: undefined   // falls in Kopfspalte ??? jetzt ersetzt durch    HeaderTextRef
                                                HeaderTextRef: undefined
                                            }


                zeile.Zeiteintraege.forEach((ze, zidx) => {

                    var tVirtZugPossibleEntry :ParsedTypes.TNormalZeileEintragBase = ({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });
                    var tVirtKlasPosibility  :ParsedTypes.TNormalZeileEintragBase = ({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });

                    switch (ze.kind) {
                        case BLOCK_T.ZEITEINTRAG:
                            if (ze.Referenzkey) {
                                console.log("Zeit Refkey ", ze.Referenzkey);

                                let tRef = tResult.ZusatzBloecke.filter((b) => { return ((b.Verweistyp.kind == VERWEIS_T.FERN) && (b.Verweistyp.ReferenzKey === ze.Referenzkey)); });
                                if (tRef.length > 0) {
                                    let tr: TBlockinhaltBaseV2 & { Virtualized?: boolean } = tRef[0];
                                    //console.log(tRef[0]);
                                    //if (tr.TextOrt.kind == TEXTORT_T. .NICHTANGEGEBEN){

                                    if (!ZI_Renderer.isEmptyBIBGlobal(tr)) {

                                        let ss: Block2Entry = tr.Inhalt.BLOCK.Standard as Block2Entry;
                                        if (ss.scope.kind == "Zug") {
                                            let s = ss as Block2EntryZug;
                                            console.log(s.scope, s.ZugNr, s.Klasse);

                                            //let tNeedVirtualZugZeile = false;
                                            //let tNeedVirtualKlassenZeile = false;
                                         
                                            if (s.ZugNr) {
                                                let tEntr: TZugNrEintrag = {
                                                    kind: BLOCK_T.ZUG_NR_WERT,
                                                    zugnr: "" + s.ZugNr,
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };
                                                //tStandardZugVirtuelleZeile.ZugNummern.push(tEntr);
                                                tVirtZugPossibleEntry = tEntr;
                                                tNeedVirtualZugZeile = true;

                                                //blockinhalt als virtuell kennzeichnen  
                                                tr.Virtualized = true;
                                            }
                                            //else {
                                            //    tStandardZugVirtuelleZeile.ZugNummern.push({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });
                                            //
                                            //                                            }


                                            if (s.Klasse) {
                                                let tEntr: TKlassenNrEintrag = {
                                                    kind: BLOCK_T.KLASSEN_WERT,
                                                    klassen: s.Klasse,
                                                    //kind: BLOCK_T.ZUG_NR_WERT,
                                                    //zugnr: "" + s.ZugNr,  
                                                    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                };
                                                //tStandardKlasseVirtuelleZeile.KlassenNummern.push(tEntr);
                                                tVirtKlasPosibility = tEntr;
                                                tNeedVirtualKlassenZeile = true;
                                                //blockinhalt als virtuell kennzeichnen  
                                                tr.Virtualized = true;
                                            }
                                            //else {
                                            //    tStandardKlasseVirtuelleZeile.KlassenNummern.push({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });

                                            //}

                                            //if s. nur die beiden   s.Virtualized = true    



                                            //}


                                            //}

                                          

                                        }
                                    }
                                    //}
                                }


                            }
                            break;
                    }

                    tStandardZugVirtuelleZeile.ZugNummern.push( tVirtZugPossibleEntry);
                    tStandardKlasseVirtuelleZeile.KlassenNummern.push( tVirtKlasPosibility );
                                               

                });

                if (tNeedVirtualZugZeile){
                                                 console.log("VI:",tNeedVirtualZugZeile , tStandardZugVirtuelleZeile);
                                                 tResult.Zeilen.splice(iz,0,tStandardZugVirtuelleZeile);  //changing our resultcopy in place
                                                 iz++;
                                            }

                if (tNeedVirtualKlassenZeile){
                                                 console.log("VI:",tNeedVirtualKlassenZeile ,tStandardKlasseVirtuelleZeile);
                                                 tResult.Zeilen.splice(iz,0,tStandardKlasseVirtuelleZeile);  //changing our resultcopy in place
                                                 iz++;
                                            }

                break;
                case ParsedTypes.ZEILE_T.ZUGNR:
                    console.log(xzeile);
                    break;
            }

            


            iz++;
        }

        return tResult;
    }
    

    export function virtualizePfeil(tInput: ParsedTypes.SingleDirectionScheduleTyped_plusVirtual): ParsedTypes.SingleDirectionScheduleTyped_plusVirtual{
        console.log("--- TODO VIRTUALIZE Pfeil -------");
        var tResult:ParsedTypes.SingleDirectionScheduleTyped_plusVirtual = JSON.parse(JSON.stringify( tInput)); 
        return tResult;

    }
    

    export function berechneZeiten2(tInput: ParsedTypes.SingleDirectionScheduleTyped_plusVirtual): ParsedTypes.SingleDirectionScheduleTyped_plusVirtual{
        console.log("--- VIRTUALIZE ZugNr, ZugKlasse -------");
        var tResult:ParsedTypes.SingleDirectionScheduleTyped_plusVirtual = JSON.parse(JSON.stringify( tInput)); 

        tResult.Zeilen.forEach((zei)=>{
           
            switch(zei.kind){
                case ParsedTypes.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                case ParsedTypes.ZEILE_T.NORMAL:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_WEITER_AB:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_WEITER_IN:
                    let tNachmittag = false;
                    let tLast = -1;
                    zei.Zeiteintraege.forEach((i)=>{
                        switch (i.kind){
                            case BLOCK_T.ZUG_NR_WERT:
                            case BLOCK_T.LEER:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.DICKERSTRICH:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.ERROR:
                            case BLOCK_T.ANKUNFT:
                            case BLOCK_T.BLOCK:
                            case BLOCK_T.KLASSEN_WERT:
                                     
                                break;
                            case BLOCK_T.ZEITEINTRAG:
                                switch (i.Zeit.kind){
                                    case "ZEIT_ROH":
                                        //i.Zeit.RohZeit
                                        if (tLast == -1){   //erster fall
                                                                                    
                                        }else{
                                            //normalfall
                                            if (i.Zeit.RohZeit < tLast){
                                                tNachmittag = true;
                                            }

                                        }
                                        tLast = i.Zeit.RohZeit;
                                        i.Zeit = makeZ(i.Zeit.RohZeit,GesternHeuteMorgen.Heute, tNachmittag,ETimeValid.Berechnet24);
                                        break;
                                    case "ZEIT_24":
                                        if (i.Zeit.WelcherTag == GesternHeuteMorgen.Heute){
                                            tLast = (((i.Zeit.Stunde24 > 12) ? (i.Zeit.Stunde24 - 12) : i.Zeit.Stunde24) * 100)  +   i.Zeit.Minute24;
                                            tNachmittag = i.Zeit.Stunde24 > 12;
                                        }
                                        break;
                                    default:
                                        assertNever(i.Zeit)
                                }
                                break;    
                            default:
                                assertNever(i)
                        }
                    });


                break;
                    case ParsedTypes.ZEILE_T.ZUGNR:
                    case ParsedTypes.ZEILE_T.KLASSEN:
                    break;
                default:
                    assertNever(zei)
            }
        });

        return tResult;
    }
        
 
