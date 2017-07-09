
// enthaelt die mit * oder so angeflanschten Zusatzinformationen


module SaxSchedulesZusatzBase
{

    export enum EScope {
        //KeineAngabe = 0,
        DefaultZug = 1,   // nur die aktuelle Zugnummer vgl strecke 99
        RestSpalte = 2    // auch darunter stehende Zuege vgl strecke 99
    }
      

     /*Inhalt eines Erlaeuterungstextes, entweder mit opticalMarker, oder senkrecht in ein en zuglauf geschrieben */
    export interface TBlockinhaltBase {
        Verweistyp: TVerweisTyp;
        ZugNrOderKlasse: TBlockInhaltZugnummerOderKlasse;
        Gueltig: TGueltigkeit,
        KbsAbweichung: TKbsAbweichung,  //nach / von
        Fahrtage: TFahrtage,
        TextOrt: TTextOrt,
        PfeilInfo: TPfeilInfo,
        //Scope: EScope, now in Verweistyp where it belongs
        Unbekannt: TBlockInhaltRawUnbekannt | TBlockInhaltRawOk;
        Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung;

    }
       

    //// Typen fuer Verweis
    type TVerweisTyp = TVerweisPassend | TVerweisFern | TVerweisEmbedded | TVerweisGlobalDefault;    // | Pfeilstart ? PFEILZIEL ? 
    export const VERWEIS_PASSEND : "VERWEIS_PASSEND" = "VERWEIS_PASSEND";
    export const VERWEIS_FERN    : "VERWEIS_FERN"    = "VERWEIS_FERN";
    export const VERWEIS_EMBEDDED: "VERWEIS_EMBEDDED"= "VERWEIS_EMBEDDED";
    export const VERWEIS_GLOBAL_DEFAULT : "VERWEIS_GLOBAL_DEFAULT" = "VERWEIS_GLOBAL_DEFAULT";
    
    // in richtiger Spalte, aber mit buchstabe referenziert
    interface TVerweisPassend{
        kind: typeof VERWEIS_PASSEND,
        ReferenzKey: string,
        Scope: EScope
    }
    interface TVerweisFern{
        kind: typeof VERWEIS_FERN,
        ReferenzKey: string,            // nur Verweistyp == Fern :  a..r, t..z
        OpticalMarker: string
    }
    interface TVerweisEmbedded{ //direkt 1*1 eingebettet
        kind: typeof VERWEIS_EMBEDDED
    }
    // z.b. alle zuege 2u3 klasse,  textort gibt die renderposition an
    interface TVerweisGlobalDefault{
        kind : typeof VERWEIS_GLOBAL_DEFAULT
    }


    // ZugNrOderKlasse
    export interface TBlockInhaltZugnummerOderKlasse {
        Zugnr: string | null;
        Klassen: EKlassen;
    }
    //// Typen fuer Klassen
    export enum EKlassen {
        NichtAngegeben,
        Klassen1bis3,
        Klassen2bis3,
        Klassen2bis4,
        Klassen3bis4
    }


    // GUELTIGKEIT
    type TGueltigkeit = TGueltigImmer | TGueltigNie | TGueltigAb;
    export const GUELTIG_IMMER : "GUELTIG_IMMER" = "GUELTIG_IMMER"; 
    const GUELTIG_NIE : "GUELTIG_NIE" = "GUELTIG_NIE"; 
    const GUELTIG_AB  : "GUELTIG_AB"  = "GUELTIG_AB"; 
    interface TGueltigImmer {kind: typeof GUELTIG_IMMER};
    interface TGueltigNie   {kind: typeof GUELTIG_NIE};
    interface TGueltigAb    {kind: typeof GUELTIG_AB , bhf: string};
    //todo wochentagsabhaengige gueltigkeit etc


     //// Typen fuer KbsAbweichung
    type TKbsAbweichung = TKbsAbweichung_Keine | TKbsAbweichung_Aus | TKbsAbweichung_Nach;
        
    export const KBS_ABWEICHUNG_KEINE : "KBS_ABWEICHUNG_KEINE" = "KBS_ABWEICHUNG_KEINE"; 
    export const KBS_ABWEICHUNG_AUS   : "KBS_ABWEICHUNG_AUS"   = "KBS_ABWEICHUNG_AUS"; 
    export const KBS_ABWEICHUNG_NACH  : "KBS_ABWEICHUNG_NACH"  = "KBS_ABWEICHUNG_NACH"; 

    interface TKbsAbweichung_Keine  {kind: typeof KBS_ABWEICHUNG_KEINE};
    interface TKbsAbweichung_Aus  {kind: typeof KBS_ABWEICHUNG_AUS;
                                    bhf:string;
                                    KBS: string;
                                    SchonKomplettiert: boolean; };               //Validierungsschritt soll das spaeter korrekt eintragen
    interface TKbsAbweichung_Nach  {kind: typeof KBS_ABWEICHUNG_NACH;
                                    bhf:string;
                                    KBS: string;
                                    SchonKomplettiert: boolean; };


    //// Fahrtage
    export type TFahrtage = TFaehrtImmer | TFaehrtWerktags | TFaehrtSonnUndFesttags;
    export const FAEHRT_IMMER  : "FAEHRT_IMMER"  = "FAEHRT_IMMER"; 
    export const FAEHRT_WERKTAGS  : "FAEHRT_WERKTAGS"  = "FAEHRT_WERKTAGS";
    export const FAEHRT_SONNUNDFESTTAGS  : "FAEHRT_SONNUNDFESTTAGS"  = "FAEHRT_SONNUNDFESTTAGS";
    interface TFaehrtImmer {kind: typeof FAEHRT_IMMER};
    interface TFaehrtWerktags {kind: typeof FAEHRT_WERKTAGS};
    interface TFaehrtSonnUndFesttags {kind: typeof FAEHRT_SONNUNDFESTTAGS};


    //// TEXTORT //Text wird in z.b. links neben header geschrieben
    type TTextOrt = TTextOrtNichtAngegeben | TTextOrtLinksVonHeader | TTextOrtRechtsVonHeader |  TTextOrtUnterHeader | TTextOrtGanzeSpalte;
    export const TEXTORT_NICHTANGEGEBEN: "TEXTORT_NICHTANGEGEBEN"="TEXTORT_NICHTANGEGEBEN";
    export const TEXTORT_LINKSVONHEADER: "TEXTORT_LINKSVONHEADER" = "TEXTORT_LINKSVONHEADER";
    export const TEXTORT_RECHTSVONHEADER: "TEXTORT_RECHTSVONHEADER" = "TEXTORT_RECHTSVONHEADER";
    export const TEXTORT_UNTERHEADER: "TEXTORT_UNTERHEADER" = "TEXTORT_UNTERHEADER";
    export const TEXTORT_GANZESPALTE: "TEXTORT_GANZESPALTE" = "TEXTORT_GANZESPALTE";
    interface TTextOrtNichtAngegeben {kind: typeof TEXTORT_NICHTANGEGEBEN};
    interface TTextOrtLinksVonHeader {kind: typeof TEXTORT_LINKSVONHEADER};
    interface TTextOrtRechtsVonHeader{kind: typeof TEXTORT_RECHTSVONHEADER};
    interface TTextOrtUnterHeader{kind: typeof TEXTORT_UNTERHEADER};
    interface TTextOrtGanzeSpalte{kind: typeof TEXTORT_GANZESPALTE, UebersprungeneSpalten: number, Spaltenbreite: number};


    //PFEILINFO
    type TPfeilInfo = TKeinPfeil | TPfeilStart | TPfeilZiel;
    export const TKEINPFEIL: "TKEINPFEIL"="TKEINPFEIL";
    const TPFEIL_START: "TPFEIL_START"="TPFEIL_START";
    const TPFEIL_ZIEL: "TPFEIL_ZIEL"="TPFEIL_ZIEL";
    interface TKeinPfeil {kind: typeof TKEINPFEIL};
    interface TPfeilStart {kind: typeof TPFEIL_START;  ReferenzKey: string; };
    interface TPfeilZiel  {kind: typeof TPFEIL_ZIEL;   ReferenzKey: string; };
    

    //// Typen fuer Raw
    const BlockRaw_ok: "BLOCKRAWOK" = "BLOCKRAWOK";
    const BlockRawUnbekannt: "BLOCKRAWUNBEKANNT" = "BLOCKRAWUNBEKANNT";
      
    interface TBlockInhaltRawOk {
        kind: typeof BlockRaw_ok;
    }

    interface TBlockInhaltRawUnbekannt {
        kind: typeof BlockRawUnbekannt;
        Eingabedaten: SaxSchedules.IZellenEigenschaft;
    }


   
    //// Verarbeitung



    export class Creator{
        public static createTVerweisEmbedded():TVerweisEmbedded{
            return {
                kind: VERWEIS_EMBEDDED
            }
        }

        public static createTVerweisPassend(key: string, scope: EScope):TVerweisPassend{
            return {
                kind: VERWEIS_PASSEND,
                ReferenzKey: key,
                Scope: scope
            }
        }

        public static createKbsAbweichungKeine():TKbsAbweichung_Keine{
            return {
                kind: KBS_ABWEICHUNG_KEINE
            }
        }

        public static parseKlassenString(Klassenstring: string | null | undefined):EKlassen
        {
            var tKlassen = EKlassen.NichtAngegeben;
            if (Klassenstring != undefined){
            switch (Klassenstring) {
                case SaxSchedules.k1b3: tKlassen = EKlassen.Klassen1bis3;
                    break;
                case SaxSchedules.k2b3: tKlassen = EKlassen.Klassen2bis3;
                    break;
                case SaxSchedules.k2b4: tKlassen = EKlassen.Klassen2bis4;
                    break;
                case SaxSchedules.k3b4: tKlassen = EKlassen.Klassen3bis4;
                    break;
                case null: tKlassen = EKlassen.NichtAngegeben;
                    break;
                default: console.warn("UnbekannterKlassenstring: "+Klassenstring);
                //default: return Importer.assertNever(Klassenstring); 
            }
            }
            return tKlassen;
        }

        public static createTBlockInhaltZugnummerOderKlasse(Zugnummer: string | null, Klassenstring: string | null): TBlockInhaltZugnummerOderKlasse {
            var tBlock: TBlockInhaltZugnummerOderKlasse = {
                Zugnr: Zugnummer,
                Klassen: Creator.parseKlassenString(Klassenstring)
            };
            return tBlock;
        }

       

        

        public static createBlockInhaltRawOk() {
            var tOk: TBlockInhaltRawOk = { kind: BlockRaw_ok };
            return tOk;
        }
    }

    export class Importer{
       // will be a very complex parser for all the weird additional stuff
        public static parseIZellenEigenschaft(inp : SaxSchedules.IZellenEigenschaft): TBlockinhaltBase
        { 
            //true heisst nicht vorhanden oder korrekt geparst und eingetragen
            var ok_inp_ab : boolean = false;         // alle info gilt erst ab der angegebenen station
            var ok_inp_cellkey :  boolean = false;   
            var ok_inp_destcellkey  :  boolean = false; 
            var ok_inp_key  :  boolean = false; 
            var ok_inp_klassen  :  boolean = false; 
            var ok_inp_marker  :  boolean = false; 
            var ok_inp_nach :  boolean = false; 
            var ok_inp_sonnundfeiertagzeit :  boolean = false; 
            var ok_inp_srccellkey :  boolean = false; 
            var ok_inp_tage :  boolean = false; 
            var ok_inp_typ :  boolean = false; 
            var ok_inp_verweisort :  boolean = false; 
            var ok_inp_von :  boolean = false; 
            var ok_inp_zugnr :  boolean = false; 
            var ok_inp_scope : boolean = false;
            var ok_inp_bahn : boolean = false;

            // default values, might be overwritten in next step

            // ab
            var tGueltig:TGueltigkeit =  {kind:GUELTIG_IMMER};
            if (inp.ab)
            {
                tGueltig = {
                    kind: GUELTIG_AB,
                    bhf: inp.ab     
                };
                ok_inp_ab = true;
            }else
            {
                ok_inp_ab = true;
            }





            // cellkey
            var tCellKey: string = "";
            if (inp.cellkey){
                tCellKey = inp.cellkey.substr(0,1);
                ok_inp_cellkey = true;
            }else{
                ok_inp_cellkey = true;
            }





          

            
            // key  a..r, t..z
            var tReferenzkey = "";
            if (inp.key){
                tReferenzkey = inp.key;
                ok_inp_key = true;
            }
            else{
                ok_inp_key = true;
            }

           
            
            // marker !, ?, *, ....
            var tMarker: string = "";
             if (inp.marker){
                tMarker = inp.marker;
                ok_inp_marker = true;
            }else{
                ok_inp_marker = true;
            } 
              
            // fahrtage
            var tFahrtage: TFahrtage = {
                kind: FAEHRT_IMMER
            };

            if (inp.tage){
                switch(inp.tage)
                {
                case SaxSchedules.sonn_und_festtags:
                        tFahrtage = {
                            kind: FAEHRT_SONNUNDFESTTAGS
                            };
                        break;   
                

                case SaxSchedules.nur_werktags:
                        tFahrtage = {
                            kind: FAEHRT_WERKTAGS
                        };
                    break;
                 default: console.warn("unbekannte Fahrtage: ", inp.tage);
               }
                
                ok_inp_tage = true;
            }else{
                ok_inp_tage = true;
            } 

            var tPfeilInfo: TPfeilInfo = {kind: TKEINPFEIL};

            // typ
            var tTyp:TVerweisTyp = Creator.createTVerweisEmbedded(); // Verweistyp.Passend;
            if (inp.typ){
               switch(inp.typ){ 
                   case SaxSchedules.passend:

                     // todo keine angabe handling
                    var tScopePassend: EScope = EScope.DefaultZug;
                    if (inp.scope){
                        if (inp.scope == SaxSchedules.restspalte){
                            tScopePassend = EScope.RestSpalte;
                            ok_inp_scope = true;
                        }
                        if (inp.scope == SaxSchedules.defaultzug){
                            tScopePassend = EScope.DefaultZug;
                            ok_inp_scope = true;
                        }
                    }else{
                        ok_inp_scope = true;
                    }


                     tTyp = Creator.createTVerweisPassend(tReferenzkey, tScopePassend);
                     ok_inp_typ = true;
                     ok_inp_key = true;
                     ok_inp_marker = true;
                     break;
                   case SaxSchedules.fern:
                     tTyp = {
                        kind: VERWEIS_FERN,
                        ReferenzKey : (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                        OpticalMarker: tMarker
                     };
                    ok_inp_typ = true;
                    break;
                   case SaxSchedules.pfeilstart:
                        
                       if (inp.destcellkey){
                           var tPfeilStart:TPfeilStart = {kind: TPFEIL_START , ReferenzKey: inp.destcellkey.substr(0,1)
                           };
                           tPfeilInfo = tPfeilStart;
                           ok_inp_destcellkey = true;
                           tTyp = {
                                kind: VERWEIS_FERN,
                                ReferenzKey : (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                OpticalMarker: ""
                           };
                           ok_inp_typ = true;
                       
                       }else{
                            console.warn("ERROR: pfeilstart ohne destcellkey !!!");
                       }
                                                   
                       break;
                   case SaxSchedules.pfeilziel:
                       if (inp.srccellkey){
                           var tPfeilZiel:TPfeilZiel = {kind: TPFEIL_ZIEL , ReferenzKey: inp.srccellkey.substr(0,1)
                           };
                           tPfeilInfo = tPfeilZiel;
                           ok_inp_srccellkey = true;
                           tTyp = {
                                kind: VERWEIS_FERN,
                                ReferenzKey : (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                OpticalMarker: ""
                           };
                           ok_inp_typ = true;
                       
                       }else{
                            console.warn("ERROR: pfeilziel ohne srccellkey !!!");
                       }
                                                 
                       break;
                    case SaxSchedules.global:
                       tTyp ={
                           kind: VERWEIS_GLOBAL_DEFAULT
                       };
                       ok_inp_typ = true;
                       break;
                   default:
                   console.warn("typ must be there, unknown: " + inp.typ  );
                }
            }else{
                //ok_inp_tage = true;
                console.warn("typ must be there !!!");
            } 



            // klassen
            // zugnr
            var tBlockZugKlasse: TBlockInhaltZugnummerOderKlasse = {
                 Zugnr: (inp.zugnr != undefined) ? inp.zugnr.toString() : null,
                 Klassen: Creator.parseKlassenString(inp.klassen)
            };
            ok_inp_klassen = true;
            ok_inp_zugnr = true;

            
                   

            // sonnundfeiertagszeit
              if (inp.sonnundfeiertagzeit){
                  console.error("SaxSchedulesZusatzBase.ts :  sonnundfeiertagszeit parser not implemented");
                // TODO
            }else{
                ok_inp_sonnundfeiertagzeit = true;
            } 


            // wo steht der text falls nicht in tabelle
            var tTextOrt: TTextOrt = {kind: TEXTORT_NICHTANGEGEBEN};
            if (inp.verweisort){
                switch(inp.verweisort)
                {
                    case SaxSchedules.headerlinks: 
                        tTextOrt = {kind: TEXTORT_LINKSVONHEADER};
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.headerrechts: 
                        tTextOrt = {kind: TEXTORT_RECHTSVONHEADER};
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach9spalten:
                        tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 9,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach4spalten:
                         tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 4,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach4spalten2spalten:
                         tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 4,
                            Spaltenbreite: 2
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach5spalten2spalten:
                         tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 5,
                            Spaltenbreite: 2
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach6spalten:
                         tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 6,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach10spalten4spalten:
                         tTextOrt = {
                            kind: TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten : 10,
                            Spaltenbreite: 4
                        };
                        ok_inp_verweisort = true;
                        break;


                    default:
                        console.warn("verweisort unbekannt: ", inp.verweisort);
                
                }
            }else{
                ok_inp_verweisort = true;
            } 

            /// naechste 2 KbsAbweichung "nach Stollberg" oder "von Stollberg"

            // von Stollberg
            var tKbsAbweichung: TKbsAbweichung = Creator.createKbsAbweichungKeine();

            if (inp.von){   //"von Stollberg"
                // TODO
                var tKbsAbweichungA:TKbsAbweichung_Aus = { 
                    kind:KBS_ABWEICHUNG_AUS,
                    bhf: inp.von,
                    KBS: "",           //N.B. this shall be filled in a filling step
                    SchonKomplettiert: false
                };
                tKbsAbweichung = tKbsAbweichungA;
                ok_inp_von = true;
            }else{
                ok_inp_von = true;
            } 

             // nach Stollberg
            if (inp.nach){
                var tKbsAbweichungN:TKbsAbweichung_Nach = { 
                    kind:KBS_ABWEICHUNG_NACH,
                    bhf: inp.nach,
                    KBS: "",           //N.B. this shall be filled in a filling step
                    SchonKomplettiert: false
                };
                tKbsAbweichung = tKbsAbweichungN;
                ok_inp_nach = true;
            }else{
                ok_inp_nach = true;
            } 
           
            //bahnverwaltung
            var tBahn:SaxSchedulesTyped.EBahnverwaltung = SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben; 
            if (inp.bahn){
                if (inp.bahn == SaxSchedules.Sachs){
                    tBahn = SaxSchedulesTyped.EBahnverwaltung.KSaechsStsEB;
                    ok_inp_bahn = true;
                }else{
                 // unknown bahn
                
                }
                 // tHeadLeftDiv.innerHTML = (input.Bahnverwaltung === EBahnverwaltung.KSaechsStsEB) ? "Sächs. Staatsb." : "";
            }else{
                ok_inp_bahn = true;
            }
           

            //raw
            var tBRT : TBlockInhaltRawOk | TBlockInhaltRawUnbekannt= {
                kind: BlockRaw_ok
            };

            if(!(ok_inp_ab && ok_inp_cellkey && ok_inp_destcellkey && ok_inp_key  && ok_inp_klassen  && ok_inp_marker  && ok_inp_nach 
                && ok_inp_sonnundfeiertagzeit && ok_inp_srccellkey && ok_inp_tage && ok_inp_typ && ok_inp_verweisort && ok_inp_von && ok_inp_zugnr 
                && ok_inp_scope && ok_inp_bahn))
            {
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
                Gueltig:  tGueltig,
                KbsAbweichung: tKbsAbweichung,
                Fahrtage: tFahrtage,
                TextOrt: tTextOrt,
                PfeilInfo: tPfeilInfo,
                //Scope: tScope,
                Unbekannt: tBRT,
                Bahnverwaltung: tBahn
             };

              return tBlockKpl;                                            
        }
    }

    export class Renderer{

        public static isEmptyBIBGlobal(b: TBlockinhaltBase):boolean{
            console.warn("isEmptyBibGlobal not complete");

            return ((b.Bahnverwaltung == SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben)
                //&& (b.Fahrtage == SaxSchedulesZusatzBase.TFahrtage.
                && (b.KbsAbweichung.kind == KBS_ABWEICHUNG_KEINE)
                && (b.ZugNrOderKlasse.Klassen == EKlassen.NichtAngegeben) 
                &&(b.ZugNrOderKlasse.Zugnr == null)
                
                )
        }

        public static renderOpticalMarker(s:string): string{
            var tResult = s;
            if (s === SaxSchedules.fatdot){
                tResult = "\u25cf";  //Black -circle
            }
            if (s === SaxSchedules.cross){
                tResult = "\u2020";  // Dagger //Kirchenkreuz
            }
            return tResult;
        }

        public static TBlockInhaltNachRenderKomplex(t: SaxSchedulesZusatzBase.TBlockinhaltBase | undefined, alleZuege: boolean): string {

            var tResult = "";

            if (t == undefined) {return "block Inhalt Base undefined";}
                        
            if (alleZuege){
                tResult += "Alle Zuege ";
            }


            var tEmbedded:boolean = (t.Verweistyp.kind === VERWEIS_EMBEDDED) ;

            if (t.Verweistyp.kind== VERWEIS_FERN){
                tResult += Renderer.renderOpticalMarker(t.Verweistyp.OpticalMarker);
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
                   return SaxSchedulesTyped.Importer.assertNever(t.ZugNrOderKlasse.Klassen);
            }

            switch(t.Fahrtage.kind){
                case(FAEHRT_IMMER):
                    // print nothing
                    break;
                case(FAEHRT_WERKTAGS):
                    tResult += "Nur Werktags";
                    break
                case(FAEHRT_SONNUNDFESTTAGS):
                    tResult += "Sonn- und Festtags";
                    break;
                default:
                    return SaxSchedulesTyped.Importer.assertNever(t.Fahrtage);
            }
           
           
            switch (t.KbsAbweichung.kind)
            {
                case KBS_ABWEICHUNG_KEINE:
                    // nothing to do
                    break;
                case KBS_ABWEICHUNG_AUS:
                    tResult+= "von " + t.KbsAbweichung.bhf;  //von Stollberg
                    break;
                case KBS_ABWEICHUNG_NACH:
                     tResult+= "nach " + t.KbsAbweichung.bhf;  //nach Stollberg
                    break;
                default:
                    return SaxSchedulesTyped.Importer.assertNever(t.KbsAbweichung);
            
            
            }

            switch (t.Bahnverwaltung){
                case SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben:
                    break;
                case SaxSchedulesTyped.EBahnverwaltung.KSaechsStsEB:
                    tResult += "Sächs. Staatsb.";
                    break;
                default:
                    console.warn("unbekannte Bahnverwaltung in zusatzinfobase: wie soll man das rendern ?!");
            }
              
            return tResult;
        }
    }
}