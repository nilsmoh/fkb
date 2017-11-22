"use strict";
/**
 * Typen um Fahrplaene einzugeben
 */
exports.__esModule = true;
//typeguard
function isIZeilenZusatzInfo(test) {
    return (("number" != typeof test) && (test != null) && (test.kind == undefined));
}
exports.isIZeilenZusatzInfo = isIZeilenZusatzInfo;
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
exports.defaultzug = "defaultzug";
exports.restspalte = "restspalte";
//export var zn = "_zn";  //zugnummer for aliasing only
exports.WaltersdfHst = Waltersdorf_Haltest; // "Waltersdorf Haltest.";
exports.MittwMrkb = Mittweida_Markrsb; // "Mittweida-Markrsb.";
exports.MARKERPREFIX = "_markerAussehen_";
exports.fatdot = exports.MARKERPREFIX + "fatdot"; // dicker schwarzer runder punkt
exports.cross = exports.MARKERPREFIX + "christlichesKreuz"; // normales Kirchenkreuz
exports.chooseown = exports.MARKERPREFIX + "selbstEinenFreienAussuchen"; // im FKB durch geschweifte klammern
var BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
exports.Sachs = BAHNVERWALTUNGPREFIX + "Sachs";
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
exports.fern = "_VERWEISTYP_fern";
exports.passend = "_VERWEISTYP_passend";
exports.global = "_VERWEISTYP_GLOBAL";
exports.pfeilziel = "_VERWEISTYP_pfeilziel";
exports.pfeilstart = "_VERWEISTYP_pfeilstart";
exports.sonn_und_festtags = "_TAGTYP_sonn_und_festtags";
exports.nur_werktags = "_TAGTYP_nur_werktags";
//verweisort
exports.headerlinks = "_headerleft";
exports.headerrechts = "_headerright";
exports.nach9spalten = "_nach9spalten";
exports.nach4spalten2spalten = "nach4spalten2spalten";
exports.nach10spalten4spalten = 'nach10spalten4spalten';
exports.nach4spalten = 'nach4spalten';
exports.nach6spalten = 'nach6spalten';
exports.nach5spalten2spalten = 'nach5spalten2spalten';
exports.Z1971 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1971", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; // = "_Z1971";
exports.Z2045 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2045", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
exports.Z1967 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1967", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
exports.Z2065 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2065", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
exports.Z1991 = "_Z1991";
exports.Z1998 = "_Z1998";
exports.m747 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "m", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 747 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; // _m747 
exports.b355 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "b", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 355 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; // "_b355";
exports.a510 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "a", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 510 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_a510";
exports.n822 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "n", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 822 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_n822";
exports.c510 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "c", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 510 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_c510";
exports.d1153 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "d", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 1153 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_d1153";
exports.s550 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 550 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_s550";  //schnellzug
exports.s748 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 748 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_s748";
exports.s800 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 800 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_s800";
exports.s321 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 321 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_s321";
exports.s810 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 810 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; //= "_s810";
exports.a858 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "a", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 858 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }; /// "_a858";
exports.s113 = "_s113";
exports.s710 = "_s710";
exports.s845 = "_s845";
exports.s1058 = "_s1058";
exports.c937 = "_c937";
exports.b233 = "_b233";
exports.a754 = "_a754";
exports.m149 = "_m149";
exports.x135 = "_x135";
exports.x150 = "_x150";
exports.a644 = "_a644";
exports.a659 = "_a659";
exports.a818 = "_a818";
exports.Z1960 = "_Z1960";
