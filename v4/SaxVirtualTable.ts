
   import * as ParsedTypes from "./SaxParsedTypes";
import { ZI_Renderer } from "./SaxParser";
import { TZugNrZeile, ZEILE_T, TKlassenNrZeile, TKlassenNrEintrag } from "./SaxParsedTypes";

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
     * @param tInput 
     */
    export function virtualizeZugNrZugKlasse(tInput: ParsedTypes.SingleDirectionScheduleTyped_plusVirtual):ParsedTypes.SingleDirectionScheduleTyped_plusVirtual {
        console.log("--- VIRTUALIZE ZugNr, ZugKlasse -------");
        var tResult:ParsedTypes.SingleDirectionScheduleTyped_plusVirtual = JSON.parse(JSON.stringify(tInput));
        
        var iz = 0;
        while (iz < tResult.Zeilen.length){
            console.log("while ",iz);
            var xzeile = tResult.Zeilen[iz];
            switch(xzeile.kind){
                case ParsedTypes.ZEILE_T.NORMAL:
                var zeile:ParsedTypes.TNormalzeile & {Virtual:boolean}  = xzeile;
                zeile.Zeiteintraege.forEach((ze, zidx)=>{
                    switch (ze.kind){
                        case BLOCK_T.ZEITEINTRAG:
                            if (ze.Referenzkey){
                                console.log("Zeit Refkey ", ze.Referenzkey);

                                let tRef = tResult.ZusatzBloecke.filter((b)=>{return ((b.Verweistyp.kind == VERWEIS_T.FERN) && (b.Verweistyp.ReferenzKey === ze.Referenzkey));});
                                if (tRef.length > 0){
                                    let tr:TBlockinhaltBaseV2 & {Virtualized?:boolean} = tRef[0];
                                    //console.log(tRef[0]);
                                    //if (tr.TextOrt.kind == TEXTORT_T. .NICHTANGEGEBEN){

                                    if (!ZI_Renderer.isEmptyBIBGlobal(tr)){

                                        let s:Block2Entry = tr.Inhalt.BLOCK.Standard as Block2Entry;
                                        if (s.scope.kind == "Zug"){
                                            console.log(s.scope, s.ZugNr, s.Klasse);

                                            let tStandardZugVirtuelleZeile: TZugNrZeile & {Virtual: boolean} = {
                                                kind: ZEILE_T.ZUGNR,
                                                ZugNummern: new Array<ParsedTypes.TNormalZeileEintragBase>(),
                                                ZeitZeileZusatzInfo: undefined,
                                                Virtual: true
                                            }
                                            
                                            //TODO
                                            let tStandardKlasseVirtuelleZeile: TKlassenNrZeile & {Virtual: boolean} = {
                                                kind: ZEILE_T.KLASSEN,
                                                KlassenNummern: new Array<ParsedTypes.TKlassenNrEintrag>(),
                                                ZeitZeileZusatzInfo: undefined,
                                                Virtual: true,
                                                BlockEintrag: undefined   // falls in Kopfspalte ???
                                            }

                                            let tNeedVirtualZugZeile = false;
                                            let tNeedVirtualKlassenZeile = false;

                                            for (let i = 0; i < zeile.Zeiteintraege.length  ;i++){
                                                if ((i < zidx) || (i > zidx)){
                                                    tStandardZugVirtuelleZeile.ZugNummern.push( {BerechneterZugLauf:{  kind: ZUGLAUF_UNBEKANNT}, MitStrich:false, kind: BLOCK_T.LEER } );
                                                    tStandardKlasseVirtuelleZeile.KlassenNummern.push( {BerechneterZugLauf:{  kind: ZUGLAUF_UNBEKANNT}, MitStrich:false, kind: BLOCK_T.LEER } );
                                                }
                                                
                                                if (i == zidx){
                                                    
                                                    if (s.ZugNr){
                                                    let tEntr: TZugNrEintrag = {
                                                        kind: BLOCK_T.ZUG_NR_WERT,
                                                        zugnr: "" + s.ZugNr,  
                                                        BerechneterZugLauf:  {  kind: ZUGLAUF_UNBEKANNT}
                                                    }; 
                                                        tStandardZugVirtuelleZeile.ZugNummern.push( tEntr );
                                                        tNeedVirtualZugZeile = true;

                                                      //blockinhalt als virtuell kennzeichnen  
                                                      tr.Virtualized = true;
                                                    }else{
                                                         tStandardZugVirtuelleZeile.ZugNummern.push( {BerechneterZugLauf:{  kind: ZUGLAUF_UNBEKANNT}, MitStrich:false, kind: BLOCK_T.LEER } );

                                                    }
                                                   
                                                         
                                                    if (s.Klasse){
                                                    let tEntr: TKlassenNrEintrag = {
                                                        kind: BLOCK_T.KLASSEN_WERT,
                                                        klassen: s.Klasse,
                                                        //kind: BLOCK_T.ZUG_NR_WERT,
                                                        //zugnr: "" + s.ZugNr,  
                                                        BerechneterZugLauf:  {  kind: ZUGLAUF_UNBEKANNT}
                                                    }; 
                                                        tStandardKlasseVirtuelleZeile.KlassenNummern.push( tEntr );
                                                        tNeedVirtualKlassenZeile = true;
                                                        //blockinhalt als virtuell kennzeichnen  
                                                        tr.Virtualized = true;
                                                    }else{
                                                         tStandardKlasseVirtuelleZeile.KlassenNummern.push( {BerechneterZugLauf:{  kind: ZUGLAUF_UNBEKANNT}, MitStrich:false, kind: BLOCK_T.LEER } );

                                                        }
                                                        
                                                    //if s. nur die beiden   s.Virtualized = true    


                                                   
                                                }
                                                

                                            }


                                            if (tNeedVirtualZugZeile){
                                                 console.log("VI:",tNeedVirtualZugZeile , tStandardZugVirtuelleZeile);
                                                 tResult.Zeilen.splice(iz,0,tStandardZugVirtuelleZeile);
                                                 iz++;
                                            }

                                            if (tNeedVirtualKlassenZeile){
                                                 console.log("VI:",tNeedVirtualKlassenZeile ,tStandardKlasseVirtuelleZeile);
                                                 tResult.Zeilen.splice(iz,0,tStandardKlasseVirtuelleZeile);
                                                 iz++;
                                            }
                                           
                                            

                                            /**
                                             * {kind: "ZUGNR", ZugNummern: Array(21), Virtual: false}
                                             * 
                                             * {kind: "ZUG_NR_WERT", zugnr: "1933", BerechneterZugLauf: {…}}


                                             */


                                        }
                                    }
                                    //}
                                }


                            }
                        break;
                    }
                });
                break;
                case ParsedTypes.ZEILE_T.ZUGNR:
                    console.log(xzeile);
                break;
            }
        
        
            iz++;
        }

        return tResult;
    }
    
