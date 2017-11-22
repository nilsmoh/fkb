"use strict";
//// Typen fuer Klassen
exports.__esModule = true;
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
exports.assertNever = assertNever;
// #region FAHRPREIS_T
// Fahrpreise hinter ZeitZeile
var FAHRPREIS_T;
(function (FAHRPREIS_T) {
    FAHRPREIS_T["KEINE_ANGABE"] = "FAHRPREIS_KEINE_ANGABE";
    FAHRPREIS_T["EINFACH"] = "FAHRPREIS_EINFACH";
    FAHRPREIS_T["EINFACH_UND_RUECK"] = "FAHRPREIS_EINFACH_UND_RUECK";
    FAHRPREIS_T["AB"] = "FAHRPREIS_AB";
})(FAHRPREIS_T = exports.FAHRPREIS_T || (exports.FAHRPREIS_T = {}));
// #endregion 
