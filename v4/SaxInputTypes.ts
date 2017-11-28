/**
 * Typen um Fahrplaene einzugeben
 */


import { /*TBlockinhaltBaseV2 */  } from "./SaxParsedTypes";

export type EinzelEintragInputBaseKinded = 
                            TZeilentypEintrag 
                            | TKMEintrag
                            | StationTicketInfoEntryKpxTagged
                            | TTrennerEintrag
                            | THEADERANSCHLUSSNUMMERN
                            | THeaderViaEintrag
                            | TLaufendeNrHeaderEintrag
                            | TReferenzHeaderEintrag
                            | EinzelEintragFertigKinded   // alle die spaeter noch erlaubt sind, wenn kopfzeilen durch sind
                            ;

export type EinzelEintragFertigKinded =   TKeinHalt 
                            | TLeerEintrag 
                            | TAnkunftEintrag 
                            | TDickerStrichEintrag   
                            | TBlockEintrag 
                            | TKlassenEintrag 
                            | TZugNrEintrag
                            | TZeiteintrag                          

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
    ort?: StationTicketInfoEntryKpxTagged;   //--> vorn
    nr?: string | number;                    //--> vorn
    nrn?: Array<(string | number)>;          //--> vorn  
    fk?: Array<number>;                      
    fkab?: string;
    //FROM?: string;  ersetzt durch lfd
    //NACH?: string; ersetzt durch lfd
    via?:  StationTicketInfoEntryKpxTagged;                           //--> vorn
    lfd?: number;                           //--> vorn    angenommener oder realer zusammenhang zwischen ANSCHLUSS Zeilen -> muss validiert werden, ersetyt from u nach
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

export var Z1506a  : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1506a" , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}};
export var ZD65  : TZugNrEintrag = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "D65" , BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT}};

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

export var s = function(num:number, ref?:string): TZeiteintrag{
    return  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey: ref ? ref : null,Schnellzug: true,Zeit:{kind:ZEIT_ROH,RohZeit: num },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; 

}

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

export var rohref = (a:string, n:number) => { 
    var tRes:TZeiteintrag =  {  kind: BLOCK_T.ZEITEINTRAG,Referenzkey:a ,Schnellzug:false,
                    Zeit:{kind:ZEIT_ROH,RohZeit: n },BerechneterZugLauf: {kind: ZUGLAUF_UNBEKANNT}}; 
    return tRes;
}

export var aa = (n:number) => {return rohref("aa", n)};
export var ab = (n:number) => {return rohref("ab", n)};
export var ac= (n:number) => {return rohref("ac", n)};
export var ad = (n:number) => {return rohref("ad", n)};
export var ae = (n:number) => {return rohref("ae", n)};
export var af = (n:number) => {return rohref("af", n)};
export var ag = (n:number) => {return rohref("ag", n)};
export var ah = (n:number) => {return rohref("ah", n)};
export var ai = (n:number) => {return rohref("ai", n)};
export var aj = (n:number) => {return rohref("aj", n)};
export var ak = (n:number) => {return rohref("ak", n)};
export var al = (n:number) => {return rohref("al", n)};
export var am = (n:number) => {return rohref("am", n)};
//an schon vergeben
export var ao = (n:number) => {return rohref("ao", n)};
export var ap = (n:number) => {return rohref("ap", n)};







export var b = (n:number) => {return rohref("b", n)};
export var ba = (n:number) => {return rohref("ba", n)};
export var bb = (n:number) => {return rohref("bb", n)};
export var bc = (n:number) => {return rohref("bc", n)};
export var bd= (n:number) => {return rohref("bd", n)};
export var be= (n:number) => {return rohref("be", n)};
export var bf= (n:number) => {return rohref("bf", n)};
export var bg= (n:number) => {return rohref("bg", n)};
export var bh = (n:number) => {return rohref("bh", n)};
export var bi = (n:number) => {return rohref("bi", n)};
export var bj = (n:number) => {return rohref("bj", n)};
export var bk = (n:number) => {return rohref("bk", n)};
export var bl = (n:number) => {return rohref("bl", n)};
export var bm = (n:number) => {return rohref("bm", n)};
export var bn = (n:number) => {return rohref("bn", n)};
export var bo = (n:number) => {return rohref("bo", n)};
export var bp = (n:number) => {return rohref("bp", n)};
export var bq = (n:number) => {return rohref("bq", n)};
export var br = (n:number) => {return rohref("br", n)};
export var bs = (n:number) => {return rohref("bs", n)};
export var bt = (n:number) => {return rohref("bt", n)};
export var bu = (n:number) => {return rohref("bu", n)};
export var bv = (n:number) => {return rohref("bv", n)};

export var c = (n:number) => {return rohref("c", n)};
export var ca = (n:number) => {return rohref("ca", n)};
export var cb = (n:number) => {return rohref("cb", n)};
export var cc = (n:number) => {return rohref("cc", n)};
export var cd= (n:number) => {return rohref("cd", n)};
export var ce= (n:number) => {return rohref("ce", n)};
export var cf= (n:number) => {return rohref("cf", n)};
export var cg= (n:number) => {return rohref("cg", n)};
export var ch = (n:number) => {return rohref("ch", n)};
export var ci = (n:number) => {return rohref("ci", n)};
export var cj = (n:number) => {return rohref("cj", n)};
export var ck = (n:number) => {return rohref("ck", n)};
export var cl = (n:number) => {return rohref("cl", n)};
export var cm = (n:number) => {return rohref("cm", n)};
export var cn = (n:number) => {return rohref("cn", n)};
export var co = (n:number) => {return rohref("co", n)};
export var cp = (n:number) => {return rohref("cp", n)};
export var cq = (n:number) => {return rohref("cq", n)};
export var cr = (n:number) => {return rohref("cr", n)};
export var cs = (n:number) => {return rohref("cs", n)};
export var ct = (n:number) => {return rohref("ct", n)};
export var cu = (n:number) => {return rohref("cu", n)};
export var cv = (n:number) => {return rohref("cv", n)};

export var d = (n:number) => {return rohref("d", n)};
export var da = (n:number) => {return rohref("da", n)};
export var db = (n:number) => {return rohref("db", n)};
export var dc = (n:number) => {return rohref("dc", n)};
export var dd= (n:number) => {return rohref("dd", n)};
export var de= (n:number) => {return rohref("de", n)};
export var df= (n:number) => {return rohref("df", n)};
export var dg= (n:number) => {return rohref("dg", n)};
export var dh = (n:number) => {return rohref("dh", n)};
export var di = (n:number) => {return rohref("di", n)};
export var dj = (n:number) => {return rohref("dj", n)};
export var dk = (n:number) => {return rohref("dk", n)};
export var dl = (n:number) => {return rohref("dl", n)};
export var dm = (n:number) => {return rohref("dm", n)};
export var dn = (n:number) => {return rohref("dn", n)};
export var xdo = (n:number) => {return rohref("do", n)}; //do ist reserviertes wort !!
export var dp = (n:number) => {return rohref("dp", n)};
export var dq = (n:number) => {return rohref("dq", n)};
export var dr = (n:number) => {return rohref("dr", n)};
export var ds = (n:number) => {return rohref("ds", n)};
export var dt = (n:number) => {return rohref("dt", n)};
export var du = (n:number) => {return rohref("du", n)};
export var dv = (n:number) => {return rohref("dv", n)};

export var e = (n:number) => {return rohref("e", n)};
export var ea = (n:number) => {return rohref("ea", n)};
export var eb = (n:number) => {return rohref("eb", n)};
export var ec = (n:number) => {return rohref("ec", n)};
export var ed= (n:number) => {return rohref("ed", n)};
export var ee= (n:number) => {return rohref("ee", n)};
export var ef= (n:number) => {return rohref("ef", n)};
export var eg= (n:number) => {return rohref("eg", n)};
export var eh = (n:number) => {return rohref("eh", n)};
export var ei = (n:number) => {return rohref("ei", n)};
export var ej = (n:number) => {return rohref("ej", n)};
export var ek = (n:number) => {return rohref("ek", n)};
export var el = (n:number) => {return rohref("el", n)};
export var em = (n:number) => {return rohref("em", n)};
export var en = (n:number) => {return rohref("en", n)};
export var eo = (n:number) => {return rohref("eo", n)}; 
export var ep = (n:number) => {return rohref("ep", n)};
export var eq = (n:number) => {return rohref("eq", n)};
export var er = (n:number) => {return rohref("er", n)};
export var es = (n:number) => {return rohref("es", n)};
export var et = (n:number) => {return rohref("et", n)};
export var eu = (n:number) => {return rohref("eu", n)};
export var ev = (n:number) => {return rohref("ev", n)};