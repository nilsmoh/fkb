/**
 * Typen um Fahrplaene einzugeben
 */


import { /*TBlockinhaltBaseV2 */  } from "./SaxParsedTypes";

export type EinzelEintragInputBaseKinded = TZeilentypEintrag | TKeinHalt 
                            | TLeerEintrag | TAnkunftEintrag | TDickerStrichEintrag | TBlockEintrag 
                            | TKlassenEintrag 
                            | TZugNrEintrag
                            | TZeiteintrag 
                            | TKMEintrag
                            | StationTicketInfoEntryKpxTagged
                            | TTrennerEintrag
                            | THEADERANSCHLUSSNUMMERN
                            ;

export type EinzelEintragInput = EinzelEintragInputBaseKinded 
                            | number  
                            | IZeilenZusatzInfo  // this silently adds string ???? but not in tsc 2.4.2 or was it a sideffect of fkb1900_hinweise3.ts being buggy ???
                        
export type EinzelZeile = Array<EinzelEintragInput>;

export type EinzelEintragInputZZ = EinzelEintragInputBaseKinded 
                            | number  
                            | IZeilenZusatzInfoKinded

export type EinzelZeileZZK = Array<EinzelEintragInputZZ>;  
                            

export type EinzelZeileNumless = Array< EinzelEintragInputBaseKinded                             
                                        | IZeilenZusatzInfoKinded >;                             

export interface SingleDirectionScheduleInput {
    route1900: string | number;
    comment?: string;
    todo?: string;
    seite: number; // seite in FKB wie gedruckt
    klassen?: string;
    caption: string;
    zeilen: Array<EinzelZeile>;
    ZellenVerweise?: Array< TBlockinhaltBaseV2  /*IZellenEigenschaft*/ >;
}

export interface SingleDirectionScheduleInputKindedZZZ {
    route1900: string | number;
    comment?: string;
    todo?: string;
    seite: number; // seite in FKB wie gedruckt
    klassen?: string;
    caption: string;
    zeilen: Array<EinzelZeileZZK>;
    ZellenVerweise?: Array< TBlockinhaltBaseV2  /*IZellenEigenschaft*/ >;
}


export interface SingleDirectionScheduleInputNumless {
    route1900: string | number;
    comment?: string;
    todo?: string;
    seite: number; // seite in FKB wie gedruckt
    klassen?: string;
    caption: string;
    zeilen: Array<EinzelZeileNumless>;
    ZellenVerweise?: Array< TBlockinhaltBaseV2  /*IZellenEigenschaft*/ >;
}



//rechts hinter zeile
export interface IZeilenZusatzInfo {
    ort?: StationTicketInfoEntryKpxTagged;
    nr?: string | number;
    nrn?: Array<(string | number)>;
    fk?: Array<number>;
    fkab?: string;
    //FROM?: string;  ersetzt durch lfd
    //NACH?: string; ersetzt durch lfd
    via?: string;
    lfd?: number; //angenommener oder realer zusammenhang zwischen ANSCHLUSS Zeilen -> muss validiert werden, ersetyt from u nach
}

export interface IZeilenZusatzInfoKinded extends IZeilenZusatzInfo{
    kind: typeof BLOCK_T.ZEILENZUSATZINFO
}

//typeguard

export function isIZeilenZusatzInfo(test: any): test is IZeilenZusatzInfo {
    return (("number" != typeof test)  && (test != null) && (test.kind == undefined));
}



// zusatzinformation untern
/*
export interface IZellenEigenschaft {
    cellkey?: string;                         //z.B. a812 bei verweis aus einer zelle heraus
    typ: string;                                //fern = verlinkt mit * oder ! oder so;     passend = direkt in korrekter spalte, pfeilstart, pfeilziel, Zeitaenderung
    marker?: string;                             // z.B. "*"
    key?: string;                                // z.B. "e"
    verweisort?: string; // wo wird a hingeschrieben wenn weder sa noch wa existiert
    scope?: string;  //DEfaultZug oder RestSpalte falls auch darunterstehende Zuege betrofen sind, vgl S100 ganz vorne
    
    zugnr?: string | number;
    klassen?: string;
    nach?: string;                               // z.B. "Stollberg" d.h. verlaesst die Kursbuchstrecke
    tage?: string;             //tage "nur werktags" oder "sonn-und feiertags"
    destcellkey?: string;   // nur typ pfeilstart oder pfeilziel
    srccellkey?: string;    // nur typ pfeilstart oder pfeilziel
    ab?: string; // fuer zugnummernwechsel mit startstation
    von?: string; // zug der auf kursbuchstrecke einbiegt
    sonnundfeiertagzeit?: string | number; //abweichende zeit sonnundfeiertags
    bahn?: string;
}
*/

//scope
export var defaultzug = "defaultzug";
export var restspalte = "restspalte";


//export var zn = "_zn";  //zugnummer for aliasing only






export var WaltersdfHst = Waltersdorf_Haltest; // "Waltersdorf Haltest.";
export var MittwMrkb = Mittweida_Markrsb;// "Mittweida-Markrsb.";


export var MARKERPREFIX = "_markerAussehen_";

export var fatdot = MARKERPREFIX + "fatdot";  // dicker schwarzer runder punkt
export var cross = MARKERPREFIX + "christlichesKreuz";  // normales Kirchenkreuz
export var chooseown = MARKERPREFIX + "selbstEinenFreienAussuchen"; // im FKB durch geschweifte klammern

var BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
export var Sachs = BAHNVERWALTUNGPREFIX + "Sachs";

//s1= senkrecht start 1
//se= senkrecht ende // letzter eintrag





//export var ZW = ORTPREFIX + "Zwickau";
//export var SC = ORTPREFIX + "Schwarzenberg";
//export var JO = ORTPREFIX + "Johangeorgenstadt";
//export var KA = ORTPREFIX + "Karlsbad BEB";
//export var AU = ORTPREFIX + "Aue";
//export var AN = ORTPREFIX + "Annaberg";
//export var LU = ORTPREFIX + "Lugau";
//export var CT = ORTPREFIX + "Chemnitz ü.Thalheim";
//export var CN = ORTPREFIX + "Chemnitz ü.Neu.";




//var rundvoll = "_MARKER_rundvoll";

export var fern = "_VERWEISTYP_fern";
export var passend = "_VERWEISTYP_passend";
export var global = "_VERWEISTYP_GLOBAL";
export var pfeilziel = "_VERWEISTYP_pfeilziel";
export var pfeilstart = "_VERWEISTYP_pfeilstart";

export var sonn_und_festtags = "_TAGTYP_sonn_und_festtags";
export var nur_werktags = "_TAGTYP_nur_werktags";



//verweisort
export var headerlinks = "_headerleft";
export var headerrechts = "_headerright";
export var nach9spalten = "_nach9spalten";
export var nach4spalten2spalten = "nach4spalten2spalten";
export var nach10spalten4spalten = 'nach10spalten4spalten';
export var nach4spalten = 'nach4spalten';
export var nach6spalten = 'nach6spalten';
export var nach5spalten2spalten = 'nach5spalten2spalten';



export var Z1971 : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1971" , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}}; // = "_Z1971";
export var Z2045 : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2045" , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}};
export var Z1967 : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1967", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}};
export var Z2065 : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2065" , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}};

export var Z1991 = "_Z1991";
export var Z1998 = "_Z1998";


export var m747 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"m",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 747 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; // _m747 



export var b355: TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"b",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 355 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; // "_b355";
export var a510: TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"a",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 510 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_a510";
export var n822: TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"n",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 822 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_n822";
export var c510: TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"c",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 510 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_c510";
export var d1153:TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"d",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit:1153 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_d1153";

export var s550 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:null,Schnellzug:true,Zeit:{kind:ZEIT_ROH,RohZeit: 550 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_s550";  //schnellzug
export var s748 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:null,Schnellzug:true,Zeit:{kind:ZEIT_ROH,RohZeit: 748 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_s748";
export var s800 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:null,Schnellzug:true,Zeit:{kind:ZEIT_ROH,RohZeit: 800 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_s800";
export var s321 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:null,Schnellzug:true,Zeit:{kind:ZEIT_ROH,RohZeit: 321 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_s321";
export var s810 : TZeiteintrag  =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:null,Schnellzug:true,Zeit:{kind:ZEIT_ROH,RohZeit: 810 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; //= "_s810";


export var a858 : TZeiteintrag = {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:"a",Schnellzug:false,Zeit:{kind:ZEIT_ROH,RohZeit: 858 },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; /// "_a858";

export var s113 = "_s113";
export var s710 = "_s710";
export var s845 = "_s845";
export var s1058 = "_s1058";

export var c937 = "_c937";
export var b233 = "_b233";
export var a754 = "_a754";

export var m149 = "_m149";

export var x135 = "_x135";
export var x150 = "_x150";
export var a644 = "_a644";
export var a659 = "_a659";
export var a818 = "_a818";


export var Z1960 = "_Z1960";


