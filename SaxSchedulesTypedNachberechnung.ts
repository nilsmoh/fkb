
module SaxSchedulesTyped{

    // functions filling SingleDirectionScheduleTyped value
    export class Nachberechnung{ 
       
        public static berechneZugLaeufe(s: SingleDirectionScheduleTyped) : SingleDirectionScheduleTyped
        {
              // 0) bestimme Spaltenzahl
            var tLen = 0; 
            s.Zeilen.forEach((z)=>{
                switch (z.kind){
                    case ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
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

            //spaltenweise Zuglauf suchen
            //TODO
        
         for (var sp = 0;sp < tLen ; sp++){  
             var tZugNr = ""; 
             // folgende 3 variablen fuer ueberschreiben der zugnummer mit * beginn ....  * ende   vgl. seite 103
             var tZugNrRefKey: string | null = null;
             var tZugNrAlt = "";
             var tZugZweiterStern = false;

         //console.log("--- ",sp);
         s.Zeilen.forEach((z)=>{
         switch (z.kind){ 
            case ZEILE_ZUGNR:
                 var tZNEintrag = z.ZugNummern[sp];
                 switch(tZNEintrag.kind){
                    case BLOCK_BLOCK:
                         if (tZNEintrag.Blockinhalt){
                            tZugNr = tZNEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr!;   //force not undefined ??   TODO error handling
                            // Neuer Zugnummereintrag bekommt seine eigene Zugnummer auch als berechneter wert
                            tZNEintrag.BerechneterZugLauf = {
                                kind: ZUGLAUF_BERECHNET,
                                isStart: false,
                                isEnd: false,
                                isDeleted: false,
                                everyDay: true, //todo fill
                                ZugNr: tZugNr
                            };

                         }else{
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
                    case BLOCK_LEER:
                    case BLOCK_DICKERSTRICH:
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
            //case ZEILE_ANSCHLUSS_AUS:
            //case ZEILE_ANSCHLUSS_NACH_IN:
            case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
            case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
            case ZEILE_ANSCHLUSS_WEITER_AB:
            case ZEILE_ANSCHLUSS_WEITER_IN:
            case ZEILE_KLASSEN:
            case ZEILE_NORMAL: 
                 var tEintrag : TNormalZeileEintrag = {kind: BLOCK_ERROR, Grund: "temp"};
                 if (z.kind == ZEILE_KLASSEN)   {
                     tEintrag = z.KlassenNummern[sp];
                 }
                 else{
                     tEintrag = z.Zeiteintraege[sp];
                 }
                
                 //zugriff nur auf einen eintrag
                 
                 //falls der aktuelle eintrag einen fernverweis (z.b. * oder ? oder !) hat, wird dessen zugnummer ab jetzt verwendet     
                 switch(tEintrag.kind){
                    case BLOCK_ZEITEINTRAG:
                         if (tEintrag.Referenzkey){
                            var tZeitEintrag = tEintrag;
                            s.ZusatzBloecke.forEach((fe)=>{
                                switch (fe.Verweistyp.kind){
                                    case SaxSchedulesZusatzBase.VERWEIS_FERN:
                                        if(fe.Verweistyp.ReferenzKey === tZeitEintrag.Referenzkey){
                                            if (tZugNrRefKey != null){
                                                //2 tes auftreten des key -> zugnr beenden
                                                tZugZweiterStern = true;


                                            } else {
                                            if (fe.ZugNrOderKlasse.Zugnr){
                                                //1 tes auftreten
                                                tZugNrAlt = tZugNr;
                                                tZugNr = fe.ZugNrOderKlasse.Zugnr;
                                                tZugNrRefKey = tZeitEintrag.Referenzkey;
                                            }
                                            }
                                        }
                                            
                                        
                                }
                            });
                         }
                    case BLOCK_LEER:
                    case BLOCK_KEINHALT:
                    case BLOCK_DICKERSTRICH:
                    case BLOCK_KEINHALT:
                    case BLOCK_ANKUNFT:
                    case BLOCK_BLOCK:

                         if (tEintrag.kind === BLOCK_BLOCK){
                           
                             if (tEintrag.Blockinhalt){ 
                                if((tEintrag.Blockinhalt.Verweistyp.kind === SaxSchedulesZusatzBase.VERWEIS_PASSEND) || 
                                   (tEintrag.Blockinhalt.Verweistyp.kind === SaxSchedulesZusatzBase.VERWEIS_EMBEDDED))   {
                                    if (tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr){
                                        tZugNr = tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr;
                                    }
                                }
                            }
                         }
                         

                         tEintrag.BerechneterZugLauf = {
                             kind: ZUGLAUF_BERECHNET,
                             isStart: false,
                             isEnd: false,
                             isDeleted: false,
                             everyDay: true, //todo fill
                             ZugNr: tZugNr
                         };

                         if (tZugZweiterStern){
                            tZugZweiterStern = false;
                            tZugNr = tZugNrAlt;
                            tZugNrRefKey = null;
                         }

                         break;
                     // TODO * external blocks and intern blocks
                     
                     case BLOCK_ERROR: 
                    
                         //nothing to fill for these entries            
                         break;          
                     default: 
                         return Importer.assertNever(tEintrag);

                 }
                 break; 
           
                //z.KlassenNummern[sp].
                 
                 //break;
            default: 
                return Importer.assertNever(z);
            }
       }); 
       }

        //start und end jedes einzelnen Zuglauf passend eintragen  
        //pro spalte von unten nach oben

        //gehe von unten nach oben und markiere enden
        
        for (var sp = 0; sp < tLen; sp++){
            var tCurrentZugNr :string | undefined;
            //var tLoesche = true;
            var tZeilenZahl = s.Zeilen.length;
            for (var zei = tZeilenZahl -1; zei >= 0; zei--){
                var tZeile = s.Zeilen[zei];
                switch (tZeile.kind){
                    //case ZEILE_NORMAL:
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_KLASSEN: 
                    //case ZEILE_ZUGNR:
                        var tEintrag : TNormalZeileEintrag = {kind: BLOCK_ERROR, Grund: "temp"};
                        if (tZeile.kind == ZEILE_KLASSEN)   {
                            tEintrag = tZeile.KlassenNummern[sp];
                        }
                        else{
                            tEintrag = tZeile.Zeiteintraege[sp];
                        }
                        if ((tEintrag.kind != BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)){
                            if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr) /* || (tLoesche) */  ){
                                //if ((tCurrentZugNr != undefined)&&(tCurrentZugNr.length > 0)) {
                                     var TEb = tEintrag.BerechneterZugLauf;
                                     if (tEintrag.BerechneterZugLauf.ZugNr){
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
                    case ZEILE_ZUGNR:
                            //tZeile.ZugNummern
                            //TODO
                
                }
            }
           
        }

        // gehe von oben nach unten
        for (var sp = 0; sp < tLen; sp++){
            var tCurrentZugNr :string | undefined;
            var tZeilenZahl = s.Zeilen.length;
            for (var zei = 0; zei < tZeilenZahl;  zei++){
                var tZeile = s.Zeilen[zei];
                switch (tZeile.kind){
                    //case ZEILE_NORMAL:
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_KLASSEN: 
                    case ZEILE_ZUGNR:
                        var tEintrag : TNormalZeileEintrag = {kind: BLOCK_ERROR, Grund: "temp"};
                        if (tZeile.kind == ZEILE_KLASSEN)   {
                            tEintrag = tZeile.KlassenNummern[sp];
                        }else 
                        if(tZeile.kind == ZEILE_ZUGNR)
                        {
                            tEintrag = tZeile.ZugNummern[sp];
                        }
                        else{
                            tEintrag = tZeile.Zeiteintraege[sp];
                        }
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
                        break;   
                    //case ZEILE_ZUGNR:
                    //        //tZeile.ZugNummern
                    //        //TODO
                
                }
            }
           
        }

      

         // gehe von unten nach oben und bewege enden nach oben
         for (var sp = 0; sp < tLen; sp++){
            //var tCurrentZugNr :string | undefined;
            //var tLoesche = true;
            var tNeedEnd = false;
            var tZeilenZahl = s.Zeilen.length;
            for (var zei = tZeilenZahl -1; zei >= 0; zei--){
                var tZeile = s.Zeilen[zei];
                switch (tZeile.kind){
                    //case ZEILE_NORMAL:
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_KLASSEN: 
                    //case ZEILE_ZUGNR:
                        var tEintrag : TNormalZeileEintrag = {kind: BLOCK_ERROR, Grund: "temp"};
                        if (tZeile.kind == ZEILE_KLASSEN)   {
                            tEintrag = tZeile.KlassenNummern[sp];
                        }
                        else{
                            tEintrag = tZeile.Zeiteintraege[sp];
                        }
                        if ((tEintrag.kind != BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET))
                        {
                            var teb = tEintrag.BerechneterZugLauf;
                          
                                if (((teb.isEnd == true) || tNeedEnd ) && 
                                     (  (tEintrag.kind == BLOCK_LEER) 
                                        || ((tEintrag.kind == BLOCK_BLOCK) && (tEintrag.Start == false))))  // trag end in obersten sa / wa block ein, d.h der welche start ist und ggf die anderen im tabellenrenderer ueberlappt
                                {
                                    teb.isEnd = false;
                                    teb.isDeleted = true;
                                    tNeedEnd = true;
                                }else
                                {   if (tNeedEnd){
                                        teb.isEnd = true;
                                        tNeedEnd = false;
                                    }
                                }
                            
                        }else{
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

    }
}



// beschreibt einen konkreten Zuglauf an einem Konkreten Tag
// inkl Zeitabweichung, Klassenabweichung etc
module SaxSchedulesTyped{
    
    export const LAUFEINTRAG_NORMAL: "LAUFEINTRAG_NORMAL" = "LAUFEINTRAG_NORMAL";
    export const LAUFEINTRAG_KEINHALT: "LAUFEINTRAG_KEINHALT" = "LAUFEINTRAG_KEINHALT";

    export const LAUFEINTRAG_AN: "LAUFEINTRAG_AN" = "LAUFEINTRAG_AN";
    export const LAUFEINTRAG_GELOESCHT: "LAUFEINTRAG_GELOESCHT" = "LAUFEINTRAG_GELOESCHT";

    export type LaufEintragIncomplete = LaufEintragNormal | LaufEintragAn | LaufEintragGeloescht | LaufEintragKeinHalt |LaufEintragKommeAusKbs|LaufEintragVerlasseNachKbs;
    
    export interface LaufEintragNormal{
        kind: typeof LAUFEINTRAG_NORMAL,
        BhfTag: string, 
        AnZeit: SaxSchedulesTyped.TZeit24 | null, 
        AbZeit: SaxSchedulesTyped.TZeit24 | null
    }

    export interface LaufEintragKeinHalt{
        kind: typeof LAUFEINTRAG_KEINHALT,
        BhfTag: string
       }

    export interface LaufEintragAn{
        kind: typeof LAUFEINTRAG_AN
       }

    export interface LaufEintragGeloescht{
        kind: typeof LAUFEINTRAG_GELOESCHT
       }

    //ankommen / verlassen der kbs
    
    export const LAUFEINTRAG_KOMMEAUSKBS: "LAUFEINTRAG_KOMMEAUSKBS" = "LAUFEINTRAG_KOMMEAUSKBS";
    export const LAUFEINTRAG_VERLASSENACHKBS: "LAUFEINTRAG_VERLASSENACHKBS" = "LAUFEINTRAG_VERLASSENACHKBS";
    
    export interface LaufEintragKommeAusKbs  {
        kind: typeof LAUFEINTRAG_KOMMEAUSKBS;
    }
    
    export interface LaufEintragVerlasseNachKbs {
        kind: typeof LAUFEINTRAG_VERLASSENACHKBS;
    }

    export interface Lauf{
        Nummer: string;
        TagAbhaengig: Array<{
            Gueltig: SaxSchedulesZusatzBase.TFahrtage;
            Ablauf: Array<LaufEintragNormal | LaufEintragKeinHalt |LaufEintragKommeAusKbs|LaufEintragVerlasseNachKbs>
        }>
    }

    export class ZugExtraktor{

        public static printZuglauf(arr: Array<LaufEintragNormal | LaufEintragKeinHalt|LaufEintragKommeAusKbs|LaufEintragVerlasseNachKbs>){
            arr.forEach((a)=>{
                var ae = a;
                switch (ae.kind){
                    case LAUFEINTRAG_KEINHALT:
                        console.log(ae.BhfTag + " kein Halt");
                        break;
                    case LAUFEINTRAG_NORMAL:
                        console.log(ae.BhfTag +" "+ (ae.AnZeit ? "an " + ae.AnZeit.src :"" ) + (ae.AbZeit ? "ab " + ae.AbZeit.src :"" ) );
                        break;
                    case LAUFEINTRAG_KOMMEAUSKBS:
                        console.log(" komme aus kbs");
                        break;
                    case LAUFEINTRAG_VERLASSENACHKBS:
                        console.log(" verlasse nach kbs");
                        break;
                    default: 
                        return Importer.assertNever(ae);
                }
            });
        }

        public static fixZugLauf(z: Array<LaufEintragIncomplete>):  Array<LaufEintragNormal | LaufEintragKeinHalt|LaufEintragKommeAusKbs|LaufEintragVerlasseNachKbs>{
        
            //TODO ank in vorherige einbauen, geloeschte entfernen 
            //var tAnk = false;
            var tResultReversed:Array<LaufEintragNormal | LaufEintragKeinHalt|LaufEintragKommeAusKbs|LaufEintragVerlasseNachKbs>= [];
            for (let i = z.length - 1; i >= 0; i--){
                var en = z[i];
                switch(en.kind){
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
                        var tVor = z[i-1];
                        switch(tVor.kind){
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
            console.log("fixfolge:",z,tRes)
            return tRes;
        }

        //lese Zuglaeufe aus Tabelle aus
        public static findeZuglaeufe(s:SaxSchedulesTyped.SingleDirectionScheduleTyped): Array<Lauf>{
            var tResult:Array<Lauf> = [];

            var tZugNr : string | null = null;

              // 0) bestimme Spaltenzahl
            var tLen = 0; 
            s.Zeilen.forEach((z)=>{
                switch (z.kind){
                    case ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
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

        var tCurrentZugNr :string | undefined;
        var tCurrentFolge: Array<LaufEintragIncomplete> = [];
        var tCurrentFahrtage: SaxSchedulesZusatzBase.TFahrtage = {
            kind: SaxSchedulesZusatzBase.FAEHRT_IMMER
        };
                // gehe von oben nach unten
        for (var sp = 0; sp < tLen; sp++){
            
            //var tCurrentLauf: Lauf | null = null;
            
            var tZeilenZahl = s.Zeilen.length;
            for (var zei = 0; zei < tZeilenZahl;  zei++){
                var tZeile = s.Zeilen[zei];
                switch (tZeile.kind){
                    //case ZEILE_NORMAL:
                    //case ZEILE_ANSCHLUSS_AUS:
                    //case ZEILE_ANSCHLUSS_NACH_IN:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case ZEILE_NORMAL:
                    case ZEILE_ANSCHLUSS_WEITER_AB:
                    case ZEILE_ANSCHLUSS_WEITER_IN:
                    case ZEILE_KLASSEN: 
                    case ZEILE_ZUGNR:
                        var tEintrag : TNormalZeileEintrag = {kind: BLOCK_ERROR, Grund: "temp"};
                        if (tZeile.kind == ZEILE_KLASSEN)   {
                            tEintrag = tZeile.KlassenNummern[sp];
                        }else 
                        if(tZeile.kind == ZEILE_ZUGNR)
                        {
                            tEintrag = tZeile.ZugNummern[sp];
                        }
                        else{
                            tEintrag = tZeile.Zeiteintraege[sp];
                        }

                        //todo speicherlogik von fuellogik entkoppeln, speichern kann auch bei zeit unbekannt notwendig sein

                        //bestimme ob gespeichert werden muss, d.h. zuglauf zuende
                        var tJetztSpeichern = false;

                        if (tCurrentZugNr){
                            // d.h es gibt was zu speichern
                            if ((tEintrag.kind != BLOCK_ERROR)  && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)){
                                 if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)){
                                    tJetztSpeichern = true;
                                 }
                            }else{
                                tJetztSpeichern = true;
                            }
                        }

                        if (tJetztSpeichern && tCurrentZugNr){
                            var tL: Array<any> = [];
                            var tTagAbh = [{                                                   // Eintrag 0 TODO auslesen
                                    Gueltig: tCurrentFahrtage, // {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER  },
                                    Ablauf: tL
                                 }];
                                 
                                 //var tOldZugnr = tCurrentZugNr;
                             
                              var tCurrentLauf : Lauf = {
                                     Nummer: tCurrentZugNr,
                                     TagAbhaengig: tTagAbh
                                 };
                               
                              

                              var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                             console.log("save New ", tCurrentLauf.Nummer, "len raw:",tCurrentFolge.length, " len (fixed) : ", tCurrentFolgeCompl.length   );
                              tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                              tResult.push(tCurrentLauf);
                              //console.log("tResult: ",JSON.stringify(tResult));
                              tCurrentFolge = [];

                              // reset and wait for new
                              tCurrentZugNr = undefined;
                              tCurrentFahrtage = {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER };
                        }


                        if ((tEintrag.kind != BLOCK_ERROR)  && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET))
                        {
                            if ((tCurrentZugNr == undefined)) {
                            
                                if ((tEintrag.BerechneterZugLauf.ZugNr != null) && (tEintrag.BerechneterZugLauf.ZugNr.length > 0))
                                {
                                    tCurrentFolge = [];
                                    tCurrentFahrtage = {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER };
                                    tCurrentZugNr =  tEintrag.BerechneterZugLauf.ZugNr;
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

                             switch (tEintrag.kind){
                                case BLOCK_ZEITEINTRAG: 
                                     switch (tZeile.kind){
                                        case ZEILE_NORMAL: 
                                             var tEnt : LaufEintragNormal = {
                                                 kind: LAUFEINTRAG_NORMAL,
                                                 BhfTag: tZeile.BhfTag,
                                                 AnZeit: null,
                                                 AbZeit:null
                                             };
                                             if (tEintrag.Zeit.kind == ZEIT_24){
                                             if ((tZeile.AnAb == EAnAb.FirstAb) || (tZeile.AnAb == EAnAb.FollowAb)){
                                                tEnt.AbZeit = tEintrag.Zeit;
                                             } 
                                             if ((tZeile.AnAb == EAnAb.An)){
                                                tEnt.AnZeit = tEintrag.Zeit;
                                             } 
                                            }else{
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
                                case BLOCK_LEER:
                                     break;
                                case BLOCK_KEINHALT:
                                      switch (tZeile.kind){
                                        case ZEILE_NORMAL: 
                                             var tEntK : LaufEintragKeinHalt ={
                                                kind: LAUFEINTRAG_KEINHALT,
                                                BhfTag: tZeile.BhfTag
                                             }; 
                                             tCurrentFolge.push(tEntK);
                                             break;
                                     }
                               
                                    
                                     break;
                                case BLOCK_ANKUNFT: // darueberliegendes war eigentlich eine ankunft, vgl posteintrag in rkb 1914 nr 90 1240 zug endet in wilkau, nicht in silberstrasse
                                     console.warn("Todo handle ankunft, soll vorherigen eintrag auf an wechseln");
                                     if(tCurrentFolge){  //???
                                        var tEntAn:LaufEintragAn = {
                                            kind:LAUFEINTRAG_AN
                                        
                                        };
                                        tCurrentFolge.push(tEntAn);
                                     }
                                     break;
                                 case BLOCK_BLOCK:
                                     console.warn("todo auszulesender blockinhalt: ", tEintrag.Blockinhalt);
                                     if (tEintrag.Passend){
                                        if (tEintrag.Blockinhalt){
                                            //aus / nach andere kursbuchstrecke
                                            switch (tEintrag.Blockinhalt.KbsAbweichung.kind){ 
                                                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_AUS: 
                                                    var tEntKo:LaufEintragKommeAusKbs = {
                                                        kind:LAUFEINTRAG_KOMMEAUSKBS
                                                    };
                                                    tCurrentFolge.push(tEntKo);
                                                    break;
                                                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_NACH: 
                                                    var tEntN:LaufEintragVerlasseNachKbs = {
                                                        kind:LAUFEINTRAG_VERLASSENACHKBS
                                                    };
                                                    tCurrentFolge.push(tEntN);
                                                    break;
                                                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE: 
                                                    break;
                                                default: 
                                                    return Importer.assertNever(tEintrag.Blockinhalt.KbsAbweichung);
                                                }
                                               // gueltigkeit
                                               switch (tEintrag.Blockinhalt.Fahrtage.kind){
                                                    case SaxSchedulesZusatzBase.FAEHRT_WERKTAGS:
                                                       tCurrentFahrtage =  {  kind: SaxSchedulesZusatzBase.FAEHRT_WERKTAGS };
                                                        break; 
                                                    case SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS:
                                                        tCurrentFahrtage =  {  kind: SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS };
                                                        break; 
                                               }   
                                        }
                                        
                                       

                                     }


                                     break;
                                 case BLOCK_DICKERSTRICH:
                                     break;
                                default: 
                                     return Importer.assertNever(tEintrag);
                             
                             }
                        
                        
                        }
                        else{
                            console.log("save block error or zuglauf unbekannt:   save should save zuglauf unbekannt?  zei: ",zei," sp: ",sp, JSON.stringify(tEintrag));
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



        if (tCurrentZugNr != undefined){
            // todo save last entry of last column
            // code copied from above for now
            var tL:Array<any>=[]; 

            var tTagAbh2 = [{                                                   // Eintrag 0 TODO auslesen
                                    Gueltig: tCurrentFahrtage, // {  kind: SaxSchedulesZusatzBase.FAEHRT_IMMER  },
                                    Ablauf: tL
                                 }];
                                 
                                 //var tOldZugnr = tCurrentZugNr;
                             
                              var tCurrentLauf : Lauf = {
                                     Nummer: tCurrentZugNr,
                                     TagAbhaengig: tTagAbh2
                                 };
                               
                              

                              var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                              console.log("save New ", tCurrentLauf.Nummer, " len (fixed) : ", tCurrentFolgeCompl.length   );
                              tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                              tResult.push(tCurrentLauf);

        }

        //



            return tResult;
        }
    }

}