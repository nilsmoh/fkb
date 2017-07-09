///<reference path="SaxSchedulesTyped.ts" />

// simpler HIGH Level Aufruf

module SaxApp{

    export class Sched{

        public static do(input: SaxSchedules.SingleDirectionScheduleInput): SaxSchedulesTyped.SingleDirectionScheduleTyped {

           
            var tResult = SaxSchedulesTyped.Importer.parse(input);

            //tResult ist eine stark getypte eingabetabelle


           
            
            SaxSchedulesTyped.Validator.validate_mergeBlocks(tResult); // fasst wa/sa zu rechteckigen bereichen zusammen, der oberste linke enthaelt dann breite und hoehe des rechteckigen bereichs

            SaxSchedulesTyped.Validator.validate_addZusatzinfobase(tResult);
            //SaxSchedulesTyped.Validator.validate_Zeiten24(tResult);

            SaxSchedulesTyped.Importer.berechneZeiten(tResult);
            SaxSchedulesTyped.Nachberechnung.berechneZugLaeufe(tResult);
            
            SaxSchedulesTyped.Validator.validate_move_Anschluss_ZusatzInfo(tResult);

            var tZugl = SaxSchedulesTyped.ZugExtraktor.findeZuglaeufe(tResult);
            
            // zuglaeufe ausgeben:
            tZugl.forEach((zl: SaxSchedulesTyped.Lauf)=>{
                console.log("--- Lauf: " +zl.Nummer + zl.TagAbhaengig[0].Gueltig.kind);
                SaxSchedulesTyped.ZugExtraktor.printZuglauf(zl.TagAbhaengig[0].Ablauf);
            });
            


            var t = document.getElementById("testdiv");
            if (t != null){
                //SaxSchedulesTyped.Importer.renderTable(t ,tResult);
                SaxRender.Renderer.renderTable(t,tResult);
                //console.error("renderTable commented out")
            }
            return tResult;
        }
  
    }
}