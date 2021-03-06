///<reference path="SaxSchedulesTyped.ts" />
///<reference path="SaxTypes.ts" />


// baut eine HTML Tabelle aus SingleDirectionScheduleTyped

module SaxRender{
    export class Renderer{
 
    
        //extrahiere einen Zugverlauf
        //public static findTrain(input: SingleDirectionScheduleTyped, startpos){
        //}


        //  var t = SaxSchedulesTyped.Importer.do(SaxSchedules.InputData.einzelplaene[2])
        //  SaxSchedulesTyped.Importer.renderTable(document.getElementById("testdiv"), t);

        //title als tooltipmoeglichkeit

        public static renderTable(parentToAppendTo: HTMLElement, input:  SaxSchedulesTyped.SingleDirectionScheduleTyped) {
            console.log("render table");
            var tDiv = document.createElement("div");
            tDiv.setAttribute("class", "GanzeSeite");

            var tHeadDiv = document.createElement("div");      //table
            tHeadDiv.setAttribute("class", "HeadDiv");

            var tHead1Div = document.createElement("div");       //row 1
            tHead1Div.setAttribute("class", "Head1Div");
            tHeadDiv.appendChild(tHead1Div);

            var tHeadLeftDiv = document.createElement("div");
            tHeadLeftDiv.setAttribute("class", "HeadLeftDiv");
            tHeadLeftDiv.setAttribute("id", "L"+Date.now());
           // tHeadLeftDiv.innerHTML = (input.Bahnverwaltung === EBahnverwaltung.KSaechsStsEB) ? "S�chs. Staatsb." : "";
            //tHeadLeftDiv.innerHTML = "zzz";
            //console.warn("todo bahnverwaltung aus zusatzinfobase");   //wird unten aus globaldefault gesetzt
            tHead1Div.appendChild(tHeadLeftDiv);
            
            var tHeadNrDiv = document.createElement("div");
            tHeadNrDiv.setAttribute("class", "HeadNrDiv");
            tHeadNrDiv.innerHTML = input.Route1900 + ".";
            tHead1Div.appendChild(tHeadNrDiv);

            var tHeadTitleDiv = document.createElement("div");
            tHeadTitleDiv.setAttribute("class", "HeadTitleDiv");
            tHeadTitleDiv.innerHTML=input.Ueberschrift + ".";
            
            tHead1Div.appendChild(tHeadTitleDiv);   
            
            //var tUeberschrift = document.createElement("h1");
            //tUeberschrift.innerHTML =  input.Route1900 +" "+ input.Ueberschrift + " ("+input.Kommentar + "" +  input.Quelle + " " + input.Seite +" )";
            //tHeadTitleDiv.appendChild(tUeberschrift);

            var tHeadRightDiv = document.createElement("div");
            tHeadRightDiv.setAttribute("class", "HeadRightDiv");
            tHeadRightDiv.setAttribute("id", "R"+Date.now());
            tHead1Div.appendChild(tHeadRightDiv);

            

            var tHead2Div = document.createElement("div");       //row 2 of header
            tHead2Div.setAttribute("class", "Head2Div");
            tHeadDiv.appendChild(tHead2Div);

             var tHeadRow2Div = document.createElement("div");
            tHeadRow2Div.setAttribute("class", "HeadRow2Div");
            //tHeadRow2Div.innerHTML = input.Route1900 + ".";
            tHead2Div.appendChild(tHeadRow2Div);

            tDiv.appendChild(tHeadDiv);
            
            //XXX todo #vorbild div

           
            var tTableParentDiv = document.createElement("div");       //row 2 of header
            tTableParentDiv.setAttribute("class", "TableParentDiv");
            tDiv.appendChild(tTableParentDiv);

            var tVorbildDiv = document.createElement("div");       //row 2 of header
            tVorbildDiv.setAttribute("class", "VorbildDiv");
            tVorbildDiv.setAttribute("id", "vorbild");
            tTableParentDiv.appendChild(tVorbildDiv);

            var tTable = document.createElement("table");
            tTable.setAttribute("class", "Fahrplantabelle");

            var tTbody = document.createElement("tbody");

            // suche fahrkartenpreisspalten  + fahrkartenzeilenindex
            var tErsteBelegteFahrpreisZeile = -1;
            var tFahrpreisSpalten = -1;
            input.Zeilen.forEach(function(z: SaxSchedulesTyped.TZeile,zidx: number){
              switch (z.kind){
                //case ZEILE_NORMAL:
                case SaxSchedulesTyped.ZEILE_ZUGNR:
                //case ZEILE_ANSCHLUSS_NACH_IN:
                //case ZEILE_ANSCHLUSS_AUS:
                case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                case SaxSchedulesTyped.ZEILE_NORMAL:
                case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:

                case SaxSchedulesTyped.ZEILE_KLASSEN:
                      if (z.ZeitZeileZusatzInfo){
                        switch(z.ZeitZeileZusatzInfo.Fahrpreise.kind){
                            case SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE:
                                break;
                            case SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK:
                                tFahrpreisSpalten = 4;
                                if (tErsteBelegteFahrpreisZeile < 0){
                                    tErsteBelegteFahrpreisZeile = zidx;
                                }
                                break;
                            case SaxSchedulesTyped.FAHRPREIS_AB:
                                if (tErsteBelegteFahrpreisZeile < 0){
                                    tErsteBelegteFahrpreisZeile = zidx;
                                }
                                break;
                            case SaxSchedulesTyped.FAHRPREIS_EINFACH:
                                tFahrpreisSpalten = 2;
                                if (tErsteBelegteFahrpreisZeile < 0){
                                    tErsteBelegteFahrpreisZeile = zidx;
                                }
                                break;
                        }
                      }
                      break;
                 
              }  
            });    

            var berechneStartEndString = function(ze: SaxSchedulesTyped.TZeiteintrag | SaxSchedulesTyped.TAnkunftEintrag | SaxSchedulesTyped.TDickerStrichEintrag | SaxSchedulesTyped.TKeinHalt | SaxSchedulesTyped.TLeerEintrag | SaxSchedulesTyped.TBlockEintrag){ 
                var tResult = "";
                if ((ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isEnd)){
                   tResult = " isEnd ";
                }
                if ((ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isStart)){
                   tResult = " isStart ";
                }
                return tResult;
            };
            
            // finde gesamtzahl der tabellenspalten

            var tSpaltenGesamtZahl = 1;
           
            // normale spalten
            let tZeile0 = input.Zeilen[0];
            if (tZeile0.kind == SaxSchedulesTyped.ZEILE_ZUGNR){
                tSpaltenGesamtZahl += tZeile0.ZugNummern.length;
            }else if(tZeile0.kind == SaxSchedulesTyped.ZEILE_KLASSEN){
                tSpaltenGesamtZahl += tZeile0.KlassenNummern.length;
            }else{
                tSpaltenGesamtZahl += tZeile0.Zeiteintraege.length;
            } 
            
            // globale spalten
            input.ZusatzBloecke.forEach((zb)=>{
                if (zb.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT){
                    if (zb.TextOrt.kind == SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE){
                        tSpaltenGesamtZahl += zb.TextOrt.Spaltenbreite;
                    }
                }
            });

            // fahrpreisspalten
            tSpaltenGesamtZahl += (tFahrpreisSpalten >= 0) ? tFahrpreisSpalten : 0;

            console.log("tSpaltenGesamtZahl ", tSpaltenGesamtZahl);

            //jetzt sind Fahrpreise erstmal gefunden
            //var tLastWasAb = false; //um vor den ersten ab eintrag "aus" zu schreiben
            var tTypDerLetztenZeile:string = "";

            //initiale trennzeile
            var tErzeugeTrennzeile = function(classe : string, spalten:number){
                            var trenn = document.createElement("tr");
                           
                           
                            trenn.setAttribute("class", classe);
                           for (var i = 0; i < spalten; i++){
                            var td = document.createElement("td")
                            trenn.appendChild(td); 
                            var tDivOut =  document.createElement("div");
                            var tDivLine =  document.createElement("div");
                            td.appendChild(tDivOut);
                            tDivOut.appendChild(tDivLine);
                            }
                return trenn;
            };

             tTbody.appendChild(tErzeugeTrennzeile("TRENN durchgehend", tSpaltenGesamtZahl));
                            


            //zusatzspalten vorbereiten
            var tSpalteNach: {[key: number]: {breite: number, bl: SaxSchedulesZusatzBase.TBlockinhaltBase} } = {};
            
            input.ZusatzBloecke.forEach((zb)=>{
                if (zb.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT){
                    if (zb.TextOrt.kind == SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE){
                        //tSpaltenGesamtZahl += zb.TextOrt.Spaltenbreite;
                        tSpalteNach[zb.TextOrt.UebersprungeneSpalten] = {breite:zb.TextOrt.Spaltenbreite , bl : zb };
                        // FallsEinTextWirklichEineKompletteSpalteEinnimmt
                    }
                }
            });

            console.log("tSpalteNach ",tSpalteNach);

            var tErsteGlobalZeile = true;
            input.Zeilen.forEach(function (z, zindex) {
                var tr = document.createElement("tr");
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:

                        if ((tTypDerLetztenZeile != z.kind) 
                            && (tTypDerLetztenZeile != SaxSchedulesTyped.ZEILE_ZUGNR)
                            && (tTypDerLetztenZeile != "")){
                            
                            var trenncl = "";
                            if (tTypDerLetztenZeile == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB){
                                trenncl="TRENN_nachAnschlussAus";
                            }else{
                                trenncl =  "TRENN";
                            }
                            
                            tTbody.appendChild(tErzeugeTrennzeile(trenncl, tSpaltenGesamtZahl));
                        }
                        tTypDerLetztenZeile = z.kind;

                        //aktuelle zeile

                        tr.setAttribute("class", "ZZZ_"+z.kind );

                        var tdkx = document.createElement("td");
                        tdkx.setAttribute("class", "notImplemented");
                        var tdk = document.createElement("div");
                        tdkx.appendChild(tdk);
                        var tEintraege: Array<SaxSchedulesTyped.TZugNrEintrag|SaxSchedulesTyped.TKlassenNrEintrag|SaxSchedulesTyped.TNormalZeileEintrag> = [];
       
                        // erste spalte:
              
                        switch (z.kind){
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                            case SaxSchedulesTyped.ZEILE_NORMAL:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                                var tKm = document.createElement("div");
                                tKm.setAttribute("class","KM");

                                var tBhfSpanClass = "";
                                if (z.kind === SaxSchedulesTyped.ZEILE_NORMAL){
                                   if ((z.Km != undefined) && (z.Km >=0)) {
                                       tKm.innerHTML += z.Km + " ";
                                       tdk.setAttribute("class","ErsteSpalteNormal ClassKMVOLL");
                                   }else{
                                       tdk.setAttribute("class","ErsteSpalteNormal ClassKMLEER");
                                   }
                                   
                                   tdk.appendChild(tKm);

                                   if (z.AnAb == SaxSchedulesTyped.EAnAb.FirstAb){
                                     tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAb");
                                     tdk.innerHTML += '<div class = "BhfAusClass">aus </div>'; //"aus " ;
                                     tBhfSpanClass = "ClassAbBhfFirst";

                                    // tLastWasAb = true;
                                   }
                                   if (z.AnAb == SaxSchedulesTyped.EAnAb.FollowAb){
                                      tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAb");
                                      tBhfSpanClass = "ClassAbBhf";
                                     //tdk.innerHTML += (( tLastWasAb == false)? "aus ":"") ;

                                    // tLastWasAb = true;
                                   }
                                    
                                    
                                    //else{
                                      // tLastWasAb = false;
                                    //}
                                   if (z.AnAb == SaxSchedulesTyped.EAnAb.An){
                                     tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAn");
                                     tdk.innerHTML +='<div class = "BhfInClass">in </div>';
                                     tBhfSpanClass = "ClassInBhf";
                                   }
                                    
                                   tdk.innerHTML += "<div class=\""+tBhfSpanClass+"\">"+ z.BhfTag + "</div>";
                                
                                }
                                
                                //tdk.innerHTML += "<div class=\""+tBhfSpanClass+"\">"+ z.BhfTag + "</div>";
                                

                                  
                   // case ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                   // case ZEILE_ANSCHLUSS_WEITER_AB:
                   


                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB){ //ZEILE_ANSCHLUSS_AUS){
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    tdk.innerHTML += "<div class=\""+  "ZubringerAbAus"  +"\">" +"aus"     + "</div>";
                                    tdk.innerHTML += "<div class=\""+  "ZubringerAbBhf"  +"\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS zubringer ab");
                                    //tLastWasAb = false;
                                    
                                }
                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN){ //ZEILE_ANSCHLUSS_AUS){
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    //tdk.innerHTML = "i. " + z.BhfTag;
                                    tdk.innerHTML += "<div class=\""+  "ZubringerInI"  +"\">" +"i."     + "</div>";
                                    tdk.innerHTML += "<div class=\""+  "ZubringerInBhf"  +"\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS zubringer in");
                                    //tLastWasAb = false;
                                    
                                }

                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB ){ //ZEILE_ANSCHLUSS_NACH_IN){
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    //tdk.innerHTML = "a. " + z.BhfTag;
                                    tdk.innerHTML += "<div class=\""+  "WeiterAbAus"  +"\">" +"a."     + "</div>";
                                    tdk.innerHTML += "<div class=\""+  "WeiterAbBhf"  +"\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS weiter ab")
                                    //tLastWasAb = false;
                                }

                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN ){ //ZEILE_ANSCHLUSS_NACH_IN){
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    //tdk.innerHTML = "in " + z.BhfTag;
                                    tdk.innerHTML += "<div class=\""+  "WeiterIn"  +"\">" +"in"     + "</div>";
                                    tdk.innerHTML += "<div class=\""+  "WeiterInBhfBhf"  +"\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS weiter in")
                                    //tLastWasAb = false;
                                }
                                                                
                                if (z.AnschlussNummern.length > 0){
                                     var tLinien = document.createElement("div");
                                     tLinien.setAttribute("class","Linien");
                                     tLinien.innerHTML = " "+ z.AnschlussNummern.toString();
                                     tdk.appendChild(tLinien);
                                }

                                tEintraege = z.Zeiteintraege;
                                break;
                            case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                tEintraege = z.ZugNummern;
                                var tText = document.createElement("div");
                                tText.setAttribute("class","ZugNrText");
                                tText.innerHTML =  "Zugs-Nr.";
                                tdk.appendChild(tText);

                                break;
                            case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                tEintraege = z.KlassenNummern;
                                tdk.innerHTML = "";

                                if (z.BlockEintrag != null){
                                    
                                    //var vt = z.BlockEintrag.Blockinhalt!.Verweistyp;
                                    //if (vt.kind == SaxSchedulesZusatzBase.VERWEIS_FERN){
                                    //   tdk.innerHTML += SaxSchedulesZusatzBase.Renderer.renderOpticalMarker( vt.OpticalMarker );
                                    //}
                                    tdk.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(z.BlockEintrag.Blockinhalt, false);
                                }
                                break;
                         }



                        tr.appendChild(tdkx);

                        //util

                        var tCalcRgba = function(zeb: SaxSchedulesTyped.TZugLaufInfo){
                            if (zeb.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) {
                            var num4 = parseInt( zeb.ZugNr);
                            var r = Math.floor(num4 / 100);
                            var g = Math.floor((num4 -r*100) / 10);
                            var b = Math.floor(num4 -(r*100) - (g*10));

                            return "rgb("+10*r+","+ 25 *g +","+ 25*b+")";
                                }else
                            {
                                return "white";
                            }
                        };

                        //weitere spalten
                        var tRealeSpaltenBisher = 0;
                        tEintraege.forEach(function (ze: SaxSchedulesTyped.TNormalZeileEintrag, zeIndex: number) {
                            
                            
                            //zusatzpalte global einfuegen falls hier  notwendig

                            SaxRender.Renderer.globalespalten(tr, tRealeSpaltenBisher /* RealeSpaltenBisherRef*/, tErsteGlobalZeile, tSpalteNach )
                            
                             //globalespaltenhier
                            

                            // jetzt regulaere spalte einfuegen
                            let tAppendTD = true;

                            var tdd = document.createElement("td");

                            var td = document.createElement("div");
                            
                            tdd.appendChild(td);
                            
                            //var ze: SaxSchedulesTyped.TNormalZeileEintrag = zex;
                            switch (ze.kind) {
                                case SaxSchedulesTyped.BLOCK_LEER:
                                    //var zel = ze;
                                    td.innerHTML = ((ze.MitStrich == true) ? "-" : "");
                                    td.title = " Z" + (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //if ((ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isEnd)){
                                    //    td.innerHTML += " isEnd ";
                                    //}
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                    td.innerHTML = " | ";
                                    //td.title = ze.BerechneterZugLauf.kind;
                                    td.title = " Z" +  (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //td.innerHTML += berechneStartEndString(ze);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    //console.warn("ZugnrZeile Blockeintrag not yet implemented");
                                    //td.setAttribute("class", "notImplemented");

                                    var tDebugString = ""; // (ze.Start) ? ("_"+ze.Referenzkey+ "_"+ze.Breite + "x" + ze.Hoehe)  : " not start";  
                                    td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";  
                                     td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //td.title = ze.BerechneterZugLauf.kind;
                                    
                                    if (ze.Valid == false) {
                                        if (ze.Senkrecht) {
                                            td.setAttribute("class", "blockSenkrecht invalid");
                                            td.innerHTML = (ze.Referenzkey) ? ze.Referenzkey : ""; //= (ze.Marker) ? ze.Marker : "";
                                        } else {
                                            td.setAttribute("class", "blockWaagerecht invalid");
                                            td.innerHTML = (ze.Referenzkey) ? ze.Referenzkey : ""; //= (ze.Marker) ? ze.Marker : "";
                                        }
                                    } else {
                                        //td.setAttribute("class", "notImplemented")


                                        if (ze.Senkrecht) {
                                            td.setAttribute("class", "blockSenkrecht valid");
                                            let tSenkrechtDiv = document.createElement("div");
                                            tSenkrechtDiv.innerHTML = (ze.Start ?  SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false) : "") + tDebugString;
                                            tSenkrechtDiv.setAttribute("class", "senkrecht "+"senkOrgBreit-"+ze.Breite+" "+"senkOrgHoch-"+ze.Hoehe);
                                              
                                            td.appendChild(tSenkrechtDiv);
                                        } else {
                                            td.setAttribute("class", "blockWaagerecht valid");
                                            td.innerHTML = (ze.Start ? SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false): "") + tDebugString;
                                        }

                                    }

                                    console.warn(" !!!! need algo for horizontal multiline zusatzinfo");

                                    if (ze.Start == false){
                                       // tAppendTD = false;
                                    } else
                                    {
                                        //tdd.setAttribute("colspan", ""+ze.Breite);
                                        //tdd.setAttribute("rowspan", ""+ze.Hoehe);
                                    }
                                       
                                     //td.innerHTML+= " Z" +  (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                     td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                     //td.innerHTML += berechneStartEndString(ze);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                    console.warn("NormalZeile Erroreintrag not yet implemented");
                                    td.setAttribute("class", "notImplemented");
                                    td.innerHTML = JSON.stringify(ze);
                                    //td.title =  " Z" +  ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                    break;
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                    if(ze.Zeit.kind == SaxSchedulesTyped.ZEIT_24){
                                    td.title= ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                    td.setAttribute("class", ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Gestern ? "Gestern" :
                                        ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Heute ? "Heute":
                                            ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Morgen ? "Morgen": "UnbekannterTag");
                                               

                                    let tSpanRefKey = document.createElement("span");
                                    tSpanRefKey.setAttribute("class", "ZeitRefKey");
                                    tSpanRefKey.innerHTML = ((ze.Referenzkey) ? ze.Referenzkey: "");

                                    let tSpanOpticalMarker = document.createElement("span");
                                    tSpanOpticalMarker.setAttribute("class","ZeitOptiMarker");
                                    let tOptical:string = "";

                                    for (let i = 0; i < input.ZusatzBloecke.length; i++){
                                           
                                            let tVerweis = input.ZusatzBloecke[i].Verweistyp;
                                            if (tVerweis.kind == SaxSchedulesZusatzBase.VERWEIS_FERN ){
                                               if(tVerweis.ReferenzKey === ze.Referenzkey){
                                                    tOptical= tVerweis.OpticalMarker;
                                              }
                                            }
                                        }
                                   tSpanOpticalMarker.innerHTML = (tOptical != null) ? SaxSchedulesZusatzBase.Renderer.renderOpticalMarker(tOptical) : "";


                                    //let tStunde = Math.floor(ze.RohZeit / 100);
                                    //let tMinuten = (ze.RohZeit - (tStunde * 100)); 
                                    //let t24Std = tStunde; //+ ( ze.Tagesbereich == ETagesbereich.Nachmittag ? 12 : 0); 
                                    
                                    var tStunde = ze.Zeit.Stunde24;
                                    var tMinuten =ze.Zeit.Minute24;
                                    
                                    
                                    
                                    let tUnterstrichen:boolean =  false; // (t24Std < 6 || t24Std >= 18);

                                    let tSpanStunde = document.createElement("span");
                                    tSpanStunde.setAttribute("class","ZeitStunde"+ (ze.Schnellzug ? " Schnellzug": "") 
                                        + ((ze.Zeit.Valid === <any>SaxSchedulesTyped.ETimeValid.Nein) ? " TimeInvalid": "") );                                // compiler bug !!!

                                    tSpanStunde.innerHTML =  ((tStunde < 10) ? "&nbsp;" : "") + tStunde.toString();
                                    
                                    let tSpanMinuten= document.createElement("span");
                                    tSpanMinuten.setAttribute("class","ZeitMinuten" + (ze.Schnellzug ? " Schnellzug": "") + (tUnterstrichen ? " nachtsUnterstrichen" :""));
                                    tSpanMinuten.innerHTML = (tMinuten < 10) ? "0" + tMinuten.toString() : tMinuten.toString();

                                   

                                    td.appendChild(tSpanRefKey);
                                    td.appendChild(tSpanOpticalMarker);
                                    td.appendChild(tSpanStunde);
                                    td.appendChild(tSpanMinuten);

                                    // Opticalmarker nicht kursiv bei schnellzug! siehe seite 36
                                     //td.innerHTML+= " Z" +  (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //td.innerHTML += berechneStartEndString(ze);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    }else{
                                        console.error("Rohzeit sollte beim rendern lange geschichte sein ?!");
                                    }
                                    break;
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                    td.innerHTML = "DICK";
                                    td.setAttribute("class", "DickStrich");
                                    //td.title = ze.BerechneterZugLauf.kind;
                                    td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                    //td.innerHTML+= " Z" +  (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                     td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //td.innerHTML += berechneStartEndString(ze);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                    td.innerHTML = "Ank.";
                                    td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                     //td.innerHTML+= " Z" +  (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                     td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    //td.innerHTML += berechneStartEndString(ze);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                default: return SaxSchedulesTyped.Importer.assertNever(ze);
                            }
                            if (tAppendTD){ 
                                tr.appendChild(tdd);
                                tRealeSpaltenBisher++;
                                
                            }
                        });

                         // falls hinten globale spalten fehlen
                         /*  var tTestg:boolean = true;
                            //for (var ll: number = 0; ll < 100; ll++)
                           while(tTestg) 
                           {
                               console.log("read", tRealeSpaltenBisher, tSpalteNach[tRealeSpaltenBisher] );
                                if (tSpalteNach[tRealeSpaltenBisher] != undefined){
                                    let tZahlXX = tSpalteNach[tRealeSpaltenBisher].breite;
                                    
                                    var tEmpty:boolean = SaxSchedulesZusatzBase.Renderer.isEmptyBIBGlobal(tSpalteNach[tRealeSpaltenBisher].bl);

                                    for (let iiii = 0; iiii < tZahlXX ; iiii++){
                                        console.log("read+++");
                                        let tdkx = document.createElement("td");
                                        tdkx.setAttribute("class", tEmpty ? "TEMPTY " : "bla " + tErsteGlobalspalte + iiii+"of"+tZahlXX);
                                        let tdk = document.createElement("div");
                                        let tdk2 = document.createElement("div");
                                        if ((!tEmpty) && (iiii == 0)){
                                            console.log("notempty");
                                            tdk2.innerHTML = SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(tSpalteNach[tRealeSpaltenBisher].bl);
                                        }
                                        tdkx.appendChild(tdk);
                                        tdk.appendChild(tdk2);
                                        tr.appendChild(tdkx);





                                        tRealeSpaltenBisher++;
                                    } 
                                 }else{
                                    tTestg = false;
                                } 
                            }
                        */
                            SaxRender.Renderer.globalespalten(tr, tRealeSpaltenBisher /* RealeSpaltenBisherRef*/, tErsteGlobalZeile, tSpalteNach );
                            
                             

                        //Fahrkartenpreise rechts in tabelle anhaengen
                        if (z.ZeitZeileZusatzInfo){
                            let f = z.ZeitZeileZusatzInfo.Fahrpreise;
                            switch (f.kind){
                                case SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE: 
                                    if ((tErsteBelegteFahrpreisZeile > -1) && (zindex > tErsteBelegteFahrpreisZeile)) {
                                       for (var i =  0;i < (tFahrpreisSpalten == 2 ? 1 : 2) ; i++){
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild (tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild (tde);
                                    }
                                    }
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_AB:
                                    var tde = document.createElement("td");
                                    tde.innerHTML = "ab " + f.AbfahrtsOrt;
                                    tde.setAttribute("colspan", ""+ tFahrpreisSpalten);
                                    tr.appendChild (tde);
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH:
                                    var tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach2;
                                    tr.appendChild (tde);
                                    tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach3;
                                    tr.appendChild (tde);
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK: 
                                    var tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach2;
                                    tr.appendChild (tde);
                                    tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach3;
                                    tr.appendChild (tde);
                                         var tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Rueck2;
                                    tr.appendChild (tde);
                                    tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Rueck3;
                                    tr.appendChild (tde);
                                    break;
                                default: 
                                    //todo assert never
                            }
                        
                        }else{
                            // zeile ohne zusatzinfo, aber mit fahrpreisen  darueber und/oder darunter
                            if ((tErsteBelegteFahrpreisZeile > -1) && (zindex > tErsteBelegteFahrpreisZeile)) {
                                       for (var i =  0;i < (tFahrpreisSpalten == 2 ? 1 : 2) ; i++){
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild (tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild (tde);
                                    }
                           }
                            
                        }
                        
                        //Fahrkartenpreisheader
                            if (tErsteBelegteFahrpreisZeile > -1){
                                if (zindex == (tErsteBelegteFahrpreisZeile-2)){
                                    if (tFahrpreisSpalten == 2){
                                        var tde = document.createElement("td");
                                        tde.setAttribute("colspan", ""+2);
                                        tde.innerHTML = "" + "Einf.";
                                        tr.appendChild (tde);
                                    }
                                    if (tFahrpreisSpalten == 4){
                                        var tde = document.createElement("td");
                                        tde.setAttribute("colspan", ""+2);
                                        tde.innerHTML = "" + "Einf.";
                                        tr.appendChild (tde);
                                        var tde = document.createElement("td");
                                        tde.setAttribute("colspan", ""+2);
                                        tde.innerHTML = "" + "Rueckf.";
                                        tr.appendChild (tde);
                                    }
                                }else
                                if (zindex == (tErsteBelegteFahrpreisZeile-1)){
                                    for (var i =  0;i < (tFahrpreisSpalten == 2 ? 1 : 2) ; i++){
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "II";
                                            tr.appendChild (tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "III";
                                            tr.appendChild (tde);
                                    }
                                    



                            }else if (zindex < (tErsteBelegteFahrpreisZeile - 2))
                                { //leerzellen damit die spaltenzahl weiter unten stimmt (siehe FKB Nr 100 hin) 
                                  
                                 for (var i =  0;i < (tFahrpreisSpalten == 2 ? 1 : 2) ; i++){
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "-";
                                            tr.appendChild (tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "-";
                                            tr.appendChild (tde);
                                    }
                                }
                                
                            }
                                            
                        
                        break;
              
                    default: return SaxSchedulesTyped.Importer.assertNever(z);
                }

                tTbody.appendChild(tr);
                tErsteGlobalZeile = false;
            });

            tTbody.appendChild(tErzeugeTrennzeile("TRENN durchgehend", tSpaltenGesamtZahl));

            tTable.appendChild(tTbody);
            tTableParentDiv.appendChild(tTable);
            parentToAppendTo.appendChild(tDiv);

            // render zusatzinfo, for now as list

            input.ZusatzBloecke.forEach((zb)=>{

                switch( zb.Verweistyp.kind){
                    case SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT:
                       switch (zb.TextOrt.kind){
                           case SaxSchedulesZusatzBase.TEXTORT_LINKSVONHEADER :
                            console.log("x tHeadLeftDiv ", tHeadLeftDiv);
                            //tHeadLeftDiv.innerHTML += 'THL'; //   todo find out why jquery doesnt work here ???
                            var e:HTMLElement = document.getElementById(tHeadLeftDiv.getAttribute("id")!)!;
                            if ((e) && (e)){
                                e.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                // (input.Bahnverwaltung === EBahnverwaltung.KSaechsStsEB) ? "S�chs. Staatsb." : "";
                            }
                          break;
                         case SaxSchedulesZusatzBase.TEXTORT_RECHTSVONHEADER:
                            console.log("x tHeadRightDiv ", tHeadRightDiv);
                            //tHeadLeftDiv.innerHTML += 'THL'; //   todo find out why jquery doesnt work here ???
                            var e:HTMLElement = document.getElementById(tHeadRightDiv.getAttribute("id")!)!;
                            if ((e) && (e)){
                                e.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                // (input.Bahnverwaltung === EBahnverwaltung.KSaechsStsEB) ? "S�chs. Staatsb." : "";
                            }
                        
                        break;
                }
                }

                //Debugausgabe
                tDiv.innerHTML += JSON.stringify(zb.Verweistyp) +" TextOrt: "+ JSON.stringify(zb.TextOrt) + "..." + SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false) + "<br>";
            });

            

        }
  
        public static globalespalten(tr: HTMLTableRowElement, RealeSpaltenBisherRef : number, tErsteGlobalzeile: boolean, 
                                    tSpalteNach:{[key:number]: {breite: number, bl: SaxSchedulesZusatzBase.TBlockinhaltBase}} ){
                       // globale spalten
                          // falls hinten globale spalten fehlen
                           var tTestg:boolean = true;
                            //for (var ll: number = 0; ll < 100; ll++)
                           while(tTestg) 
                           {
                               //console.log("read", RealeSpaltenBisherRef, tSpalteNach[RealeSpaltenBisherRef] );
                                if (tSpalteNach[RealeSpaltenBisherRef] != undefined){
                                    let tZahlXX = tSpalteNach[RealeSpaltenBisherRef].breite;
                                    
                                    var tEmpty:boolean = SaxSchedulesZusatzBase.Renderer.isEmptyBIBGlobal(tSpalteNach[RealeSpaltenBisherRef].bl);

                                    for (let iiii = 0; iiii < tZahlXX ; iiii++){
                                        console.log("read+++");
                                        let tdkx = document.createElement("td");
                                        tdkx.setAttribute("class", tEmpty ? "TEMPTY " : "bla " + tErsteGlobalzeile + iiii+"of"+tZahlXX);
                                        let tdk = document.createElement("div");
                                        let tdk2 = document.createElement("div");
                                        if ((!tEmpty) && (iiii == 0) && (tErsteGlobalzeile)){
                                            console.log("notempty");
                                            tdk2.innerHTML = SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(tSpalteNach[RealeSpaltenBisherRef].bl, true);
                                        }
                                        tdkx.appendChild(tdk);
                                        tdk.appendChild(tdk2);

                                        

                                        tr.appendChild(tdkx);
                                        RealeSpaltenBisherRef++;
                                    } 
                                 }else{
                                    tTestg = false;
                                } 
              }
        }

    }

}