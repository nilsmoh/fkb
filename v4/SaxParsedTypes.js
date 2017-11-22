"use strict";
exports.__esModule = true;
var EBahnverwaltung;
(function (EBahnverwaltung) {
    EBahnverwaltung[EBahnverwaltung["NichtAngegeben"] = 0] = "NichtAngegeben";
    EBahnverwaltung[EBahnverwaltung["KSaechsStsEB"] = 1] = "KSaechsStsEB";
})(EBahnverwaltung = exports.EBahnverwaltung || (exports.EBahnverwaltung = {}));
// Header
var EQuelle;
(function (EQuelle) {
    EQuelle[EQuelle["FritzscheSommer1900"] = 0] = "FritzscheSommer1900";
})(EQuelle = exports.EQuelle || (exports.EQuelle = {}));
// ZEILENTYPEN
// isue tracker 11784 beschreibt algebraische Datentypen
// BEISPIELE 100a Seite 105
var ZEILE_T;
(function (ZEILE_T) {
    ZEILE_T["ZUGNR"] = "ZUGNR";
    ZEILE_T["KLASSEN"] = "KLASSEN";
    ZEILE_T["ANSCHLUSS_ZUBRINGER_AB"] = "ANSCHLUSS_ZUBRINGER_AB";
    ZEILE_T["ANSCHLUSS_ZUBRINGER_IN"] = "ANSCHLUSS_ZUBRINGER_IN";
    ZEILE_T["NORMAL"] = "NORMAL";
    // ab  Erlabrunn
    // .. Erlabrunn
    // .. in Johanngeorgensatdt
    ZEILE_T["ANSCHLUSS_WEITER_AB"] = "ANSCHLUSS_WEITER_AB";
    ZEILE_T["ANSCHLUSS_WEITER_IN"] = "ANSCHLUSS_WEITER_IN"; // in Karlsbad B.E.B.  
})(ZEILE_T = exports.ZEILE_T || (exports.ZEILE_T = {}));
var EAnAb;
(function (EAnAb) {
    EAnAb[EAnAb["An"] = 0] = "An";
    EAnAb[EAnAb["FirstAb"] = 1] = "FirstAb";
    EAnAb[EAnAb["FollowAb"] = 2] = "FollowAb";
})(EAnAb = exports.EAnAb || (exports.EAnAb = {}));
var KBS_ABWEICHUNG_T;
(function (KBS_ABWEICHUNG_T) {
    KBS_ABWEICHUNG_T["KEINE"] = "KBS_ABWEICHUNG_KEINE";
    KBS_ABWEICHUNG_T["AUS"] = "KBS_ABWEICHUNG_AUS";
    KBS_ABWEICHUNG_T["NACH"] = "KBS_ABWEICHUNG_NACH";
})(KBS_ABWEICHUNG_T = exports.KBS_ABWEICHUNG_T || (exports.KBS_ABWEICHUNG_T = {}));
;
; //Validierungsschritt soll das spaeter korrekt eintragen
;
exports.TKEINPFEIL = "TKEINPFEIL";
exports.TPFEIL_START = "TPFEIL_START";
exports.TPFEIL_ZIEL = "TPFEIL_ZIEL";
;
;
;
//// Typen fuer Raw
exports.BlockRaw_ok = "BLOCKRAWOK";
exports.BlockRawUnbekannt = "BLOCKRAWUNBEKANNT";
//endregion
