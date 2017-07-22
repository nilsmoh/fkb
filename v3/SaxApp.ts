// ///<reference path="SaxSchedulesTyped.ts" />

import * as InputTypes from "./SaxInputTypes";
import * as Parser from "./SaxParser";
import * as ParsedTypes from "./SaxParsedTypes";

import * as SaxValidator from "./SaxValidator";
import * as SaxRender from "./SaxRenderer";
import * as SaxSchedules from "./SaxInput";

import * as SaxNachberechnung from "./SaxParsedNachberechnung";
import { ZugExtraktor, Lauf } from "./SaxZuglaufAuslesen";

// simpler HIGH Level Aufruf

export class Sched{

        public static do(input: InputTypes.SingleDirectionScheduleInput): ParsedTypes.SingleDirectionScheduleTyped {
           
            console.log("test");
            var tResult = Parser.Importer.parse(input);

            //tResult ist eine stark getypte eingabetabelle

            
            
           
            
            SaxValidator.Validator.validate_mergeBlocks(tResult); // fasst wa/sa zu rechteckigen bereichen zusammen, der oberste linke enthaelt dann breite und hoehe des rechteckigen bereichs

            SaxValidator.Validator.validate_addZusatzinfobase(tResult);
            //SaxSchedulesTyped.Validator.validate_Zeiten24(tResult);

            Parser.Importer.berechneZeiten(tResult);

            
           SaxNachberechnung.Nachberechnung.berechneZugLaeufe(tResult);
            
             SaxValidator.Validator.validate_move_Anschluss_ZusatzInfo(tResult);

            var tZugl = ZugExtraktor.findeZuglaeufe(tResult);
            
            // zuglaeufe ausgeben:
            tZugl.forEach((zl: Lauf) => {
                console.log("--- Lauf: " +zl.Nummer + zl.TagAbhaengig[0].Gueltig.kind);
                ZugExtraktor.printZuglauf(zl.TagAbhaengig[0].Ablauf);
            });
            


            var t = document.getElementById("testdiv");
            if (t != null){
                //SaxSchedulesTyped.Importer.renderTable(t ,tResult);
                SaxRender.Renderer.renderTable(t,tResult);
                //console.error("renderTable commented out")
            }

            
            
            return tResult;            
        }

        public static doAllLogged() {
            var tResults: any[] = [];
            SaxSchedules.InputData.einzelplaene.forEach((input, idx) => {

                console.log("-----------------input------ " + idx + " " + input.route1900 + " " + input.seite + " ------------------------------");


                tResults.push({ "input": idx, val: input });
                //input: SaxSchedules.SingleDirectionScheduleInput): SaxSchedulesTyped.SingleDirectionScheduleTyped

                var tResult = Parser.Importer.parse(input);
                //console.log("--parsed:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "parsed": idx, val: tResult });
                //tResult ist eine stark getypte eingabetabelle


                SaxValidator.Validator.validate_mergeBlocks(tResult); // fasst wa/sa zu rechteckigen bereichen zusammen, der oberste linke enthaelt dann breite und hoehe des rechteckigen bereichs

                //console.log("--merged:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "merged": idx, val: tResult });

                SaxValidator.Validator.validate_addZusatzinfobase(tResult);
                //console.log("--zusatzed:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "zusatzed": idx, val: tResult });
                //SaxSchedulesTyped.Validator.validate_Zeiten24(tResult);

                Parser.Importer.berechneZeiten(tResult);
                //console.log("--zeiten:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "zeiten": idx, val: tResult });

                SaxNachberechnung.Nachberechnung.berechneZugLaeufe(tResult);
                //console.log("--zuglauf:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "zuglauf": idx, val: tResult });

                SaxValidator.Validator.validate_move_Anschluss_ZusatzInfo(tResult);
                //console.log("--movedAnschlussZusatzinfo:");
                //console.log(JSON.stringify(tResult));
                tResults.push({ "moved": idx, val: tResult });

                try {
                    var tZugl = ZugExtraktor.findeZuglaeufe(tResult);
                    //console.log("---zuglaufextrakt:");
                    //console.log(JSON.stringify(tResult));
                    tResults.push({ "zuglauf": idx, val: tZugl });
                } catch (e) {
                    console.warn("--exception ", e);
                }
                // zuglaeufe ausgeben:
                //tZugl.forEach((zl: SaxSchedulesTyped.Lauf)=>{
                //    console.log("--- Lauf: " +zl.Nummer + zl.TagAbhaengig[0].Gueltig.kind);
                //    SaxSchedulesTyped.ZugExtraktor.printZuglauf(zl.TagAbhaengig[0].Ablauf);
                //});

                /*
                
                            var t = document.getElementById("testdiv");
                            if (t != null){
                                //SaxSchedulesTyped.Importer.renderTable(t ,tResult);
                                SaxRender.Renderer.renderTable(t,tResult);
                                //console.error("renderTable commented out")
                            }
                            //return tResult;
                            */
            });
            return tResults;
        }
}

export {InputData} from  "./SaxInput"; 


