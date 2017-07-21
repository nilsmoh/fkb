System.register("SaxInputTypes", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var defaultzug, restspalte, ab, an, zn, kl, _anschluss_aus, _anschluss_aus_ziel, _anschluss_nach_start, _anschluss_nach_in, _klassen, _zugnr, WaltersdfHst, MittwMrkb, SENKRECHT_PREFIX, WAAGERECHT_PREFIX, ORTPREFIX, MARKERPREFIX, fatdot, cross, chooseown, BAHNVERWALTUNGPREFIX, Sachs, nix, _, gnix, kHlt, ank, Ank, wa, sa, sb, sc, sd, se, sf, sg, sh, si, sk, sl, sj, sm, sp, wx, LE, CH, ZW, SC, JO, KA, AU, AN, LU, CT, CN, k2b4, k2b3, k3b4, k1b3, fern, passend, global, pfeilziel, pfeilstart, sonn_und_festtags, nur_werktags, dick, headerlinks, headerrechts, nach9spalten, nach4spalten2spalten, nach10spalten4spalten, nach4spalten, nach6spalten, nach5spalten2spalten, Z1971, Z2045, Z1967, Z2065, Z1991, Z1998, m747, b355, a510, n822, c510, d1153, s550, s748, s800, s321, s810, a858, s113, s710, s845, s1058, c937, b233, a754, m149, x135, x150, a644, a659, a818, Z1960;
    return {
        setters: [],
        execute: function () {
            exports_1("defaultzug", defaultzug = "defaultzug");
            exports_1("restspalte", restspalte = "restspalte");
            exports_1("ab", ab = "_Ab");
            exports_1("an", an = "_An");
            exports_1("zn", zn = "_xZugnr");
            exports_1("kl", kl = "_xKlassen");
            exports_1("_anschluss_aus", _anschluss_aus = "_Anschluss_aus");
            exports_1("_anschluss_aus_ziel", _anschluss_aus_ziel = "_Anschluss_aus_ankunft");
            exports_1("_anschluss_nach_start", _anschluss_nach_start = "_Anschluss_nach_abfahrt");
            exports_1("_anschluss_nach_in", _anschluss_nach_in = "_Anschluss_nach_in");
            exports_1("_klassen", _klassen = "_Klassen_");
            exports_1("_zugnr", _zugnr = "_xZugnr");
            exports_1("WaltersdfHst", WaltersdfHst = "Waltersdorf Haltest.");
            exports_1("MittwMrkb", MittwMrkb = "Mittweida-Markrsb.");
            exports_1("SENKRECHT_PREFIX", SENKRECHT_PREFIX = "_senkrecht_");
            exports_1("WAAGERECHT_PREFIX", WAAGERECHT_PREFIX = "_waagerecht_");
            ORTPREFIX = "_Ort_";
            exports_1("MARKERPREFIX", MARKERPREFIX = "_markerAussehen_");
            exports_1("fatdot", fatdot = MARKERPREFIX + "fatdot");
            exports_1("cross", cross = MARKERPREFIX + "christlichesKreuz");
            exports_1("chooseown", chooseown = MARKERPREFIX + "selbstEinenFreienAussuchen");
            BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
            exports_1("Sachs", Sachs = BAHNVERWALTUNGPREFIX + "Sachs");
            exports_1("nix", nix = "_Nix");
            exports_1("_", _ = "_Nix");
            exports_1("gnix", gnix = "_Nixleer");
            exports_1("kHlt", kHlt = "_Kein_Halt");
            exports_1("ank", ank = "_XZug_endet");
            exports_1("Ank", Ank = "_XZug_endet");
            exports_1("wa", wa = WAAGERECHT_PREFIX + "a");
            exports_1("sa", sa = SENKRECHT_PREFIX + "a");
            exports_1("sb", sb = SENKRECHT_PREFIX + "b");
            exports_1("sc", sc = SENKRECHT_PREFIX + "c");
            exports_1("sd", sd = SENKRECHT_PREFIX + "d");
            exports_1("se", se = SENKRECHT_PREFIX + "e");
            exports_1("sf", sf = SENKRECHT_PREFIX + "f");
            exports_1("sg", sg = SENKRECHT_PREFIX + "g");
            exports_1("sh", sh = SENKRECHT_PREFIX + "h");
            exports_1("si", si = SENKRECHT_PREFIX + "i");
            exports_1("sk", sk = SENKRECHT_PREFIX + "k");
            exports_1("sl", sl = SENKRECHT_PREFIX + "l");
            exports_1("sj", sj = SENKRECHT_PREFIX + "j");
            exports_1("sm", sm = SENKRECHT_PREFIX + "m");
            exports_1("sp", sp = SENKRECHT_PREFIX + "p");
            exports_1("wx", wx = WAAGERECHT_PREFIX + "x");
            exports_1("LE", LE = ORTPREFIX + "Leipzig");
            exports_1("CH", CH = ORTPREFIX + "Chemnitz");
            exports_1("ZW", ZW = ORTPREFIX + "Zwickau");
            exports_1("SC", SC = ORTPREFIX + "Schwarzenberg");
            exports_1("JO", JO = ORTPREFIX + "Johangeorgenstadt");
            exports_1("KA", KA = ORTPREFIX + "Karlsbad BEB");
            exports_1("AU", AU = ORTPREFIX + "Aue");
            exports_1("AN", AN = ORTPREFIX + "Annaberg");
            exports_1("LU", LU = ORTPREFIX + "Lugau");
            exports_1("CT", CT = ORTPREFIX + "Chemnitz ü.Thalheim");
            exports_1("CN", CN = ORTPREFIX + "Chemnitz ü.Neu.");
            exports_1("k2b4", k2b4 = "_Klassen_2_bis_4");
            exports_1("k2b3", k2b3 = "_Klassen_2_bis_3");
            exports_1("k3b4", k3b4 = "_Klassen_3_bis_4");
            exports_1("k1b3", k1b3 = "_Klassen_1_bis_3");
            exports_1("fern", fern = "_VERWEISTYP_fern");
            exports_1("passend", passend = "_VERWEISTYP_passend");
            exports_1("global", global = "_VERWEISTYP_GLOBAL");
            exports_1("pfeilziel", pfeilziel = "_VERWEISTYP_pfeilziel");
            exports_1("pfeilstart", pfeilstart = "_VERWEISTYP_pfeilstart");
            exports_1("sonn_und_festtags", sonn_und_festtags = "_TAGTYP_sonn_und_festtags");
            exports_1("nur_werktags", nur_werktags = "_TAGTYP_nur_werktags");
            exports_1("dick", dick = "_CELL_dickerstrich");
            exports_1("headerlinks", headerlinks = "_headerleft");
            exports_1("headerrechts", headerrechts = "_headerright");
            exports_1("nach9spalten", nach9spalten = "_nach9spalten");
            exports_1("nach4spalten2spalten", nach4spalten2spalten = "nach4spalten2spalten");
            exports_1("nach10spalten4spalten", nach10spalten4spalten = 'nach10spalten4spalten');
            exports_1("nach4spalten", nach4spalten = 'nach4spalten');
            exports_1("nach6spalten", nach6spalten = 'nach6spalten');
            exports_1("nach5spalten2spalten", nach5spalten2spalten = 'nach5spalten2spalten');
            exports_1("Z1971", Z1971 = "_Z1971");
            exports_1("Z2045", Z2045 = "_Z2045");
            exports_1("Z1967", Z1967 = "_Z1967");
            exports_1("Z2065", Z2065 = "_Z2065");
            exports_1("Z1991", Z1991 = "_Z1991");
            exports_1("Z1998", Z1998 = "_Z1998");
            exports_1("m747", m747 = "_m747");
            exports_1("b355", b355 = "_b355");
            exports_1("a510", a510 = "_a510");
            exports_1("n822", n822 = "_n822");
            exports_1("c510", c510 = "_c510");
            exports_1("d1153", d1153 = "_d1153");
            exports_1("s550", s550 = "_s550");
            exports_1("s748", s748 = "_s748");
            exports_1("s800", s800 = "_s800");
            exports_1("s321", s321 = "_s321");
            exports_1("s810", s810 = "_s810");
            exports_1("a858", a858 = "_a858");
            exports_1("s113", s113 = "_s113");
            exports_1("s710", s710 = "_s710");
            exports_1("s845", s845 = "_s845");
            exports_1("s1058", s1058 = "_s1058");
            exports_1("c937", c937 = "_c937");
            exports_1("b233", b233 = "_b233");
            exports_1("a754", a754 = "_a754");
            exports_1("m149", m149 = "_m149");
            exports_1("x135", x135 = "_x135");
            exports_1("x150", x150 = "_x150");
            exports_1("a644", a644 = "_a644");
            exports_1("a659", a659 = "_a659");
            exports_1("a818", a818 = "_a818");
            exports_1("Z1960", Z1960 = "_Z1960");
        }
    };
});
System.register("SaxBaseTypes", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function assertNever(x) {
        throw new Error("Unexpected object: " + x);
    }
    exports_2("assertNever", assertNever);
    var EKlassen;
    return {
        setters: [],
        execute: function () {
            (function (EKlassen) {
                EKlassen[EKlassen["NichtAngegeben"] = 0] = "NichtAngegeben";
                EKlassen[EKlassen["Klassen1bis3"] = 1] = "Klassen1bis3";
                EKlassen[EKlassen["Klassen2bis3"] = 2] = "Klassen2bis3";
                EKlassen[EKlassen["Klassen2bis4"] = 3] = "Klassen2bis4";
                EKlassen[EKlassen["Klassen3bis4"] = 4] = "Klassen3bis4";
            })(EKlassen || (EKlassen = {}));
            exports_2("EKlassen", EKlassen);
        }
    };
});
System.register("SaxParsedTypes", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var EBahnverwaltung, EScope, VERWEIS_T, GUELTIG_IMMER, GUELTIG_NIE, GUELTIG_AB, KBS_ABWEICHUNG_KEINE, KBS_ABWEICHUNG_AUS, KBS_ABWEICHUNG_NACH, FAEHRT_IMMER, FAEHRT_WERKTAGS, FAEHRT_SONNUNDFESTTAGS, TEXTORT_T, TKEINPFEIL, TPFEIL_START, TPFEIL_ZIEL, BlockRaw_ok, BlockRawUnbekannt, EQuelle, ZEILE_T, BLOCK_T, GesternHeuteMorgen, ETimeValid, ZEIT_ROH, ZEIT_24, EAnAb, ZUGLAUF_UNBEKANNT, ZUGLAUF_BERECHNET, FAHRPREIS_T;
    return {
        setters: [],
        execute: function () {
            (function (EBahnverwaltung) {
                EBahnverwaltung[EBahnverwaltung["NichtAngegeben"] = 0] = "NichtAngegeben";
                EBahnverwaltung[EBahnverwaltung["KSaechsStsEB"] = 1] = "KSaechsStsEB";
            })(EBahnverwaltung || (EBahnverwaltung = {}));
            exports_3("EBahnverwaltung", EBahnverwaltung);
            (function (EScope) {
                EScope[EScope["DefaultZug"] = 1] = "DefaultZug";
                EScope[EScope["RestSpalte"] = 2] = "RestSpalte";
            })(EScope || (EScope = {}));
            exports_3("EScope", EScope);
            (function (VERWEIS_T) {
                VERWEIS_T["PASSEND"] = "VERWEIS_PASSEND";
                VERWEIS_T["FERN"] = "VERWEIS_FERN";
                VERWEIS_T["EMBEDDED"] = "VERWEIS_EMBEDDED";
                VERWEIS_T["GLOBAL_DEFAULT"] = "VERWEIS_GLOBAL_DEFAULT";
            })(VERWEIS_T || (VERWEIS_T = {}));
            exports_3("VERWEIS_T", VERWEIS_T);
            exports_3("GUELTIG_IMMER", GUELTIG_IMMER = "GUELTIG_IMMER");
            exports_3("GUELTIG_NIE", GUELTIG_NIE = "GUELTIG_NIE");
            exports_3("GUELTIG_AB", GUELTIG_AB = "GUELTIG_AB");
            ;
            ;
            ;
            exports_3("KBS_ABWEICHUNG_KEINE", KBS_ABWEICHUNG_KEINE = "KBS_ABWEICHUNG_KEINE");
            exports_3("KBS_ABWEICHUNG_AUS", KBS_ABWEICHUNG_AUS = "KBS_ABWEICHUNG_AUS");
            exports_3("KBS_ABWEICHUNG_NACH", KBS_ABWEICHUNG_NACH = "KBS_ABWEICHUNG_NACH");
            ;
            ;
            ;
            exports_3("FAEHRT_IMMER", FAEHRT_IMMER = "FAEHRT_IMMER");
            exports_3("FAEHRT_WERKTAGS", FAEHRT_WERKTAGS = "FAEHRT_WERKTAGS");
            exports_3("FAEHRT_SONNUNDFESTTAGS", FAEHRT_SONNUNDFESTTAGS = "FAEHRT_SONNUNDFESTTAGS");
            ;
            ;
            ;
            (function (TEXTORT_T) {
                TEXTORT_T["NICHTANGEGEBEN"] = "TEXTORT_NICHTANGEGEBEN";
                TEXTORT_T["LINKSVONHEADER"] = "TEXTORT_LINKSVONHEADER";
                TEXTORT_T["RECHTSVONHEADER"] = "TEXTORT_RECHTSVONHEADER";
                TEXTORT_T["UNTERHEADER"] = "TEXTORT_UNTERHEADER";
                TEXTORT_T["GANZESPALTE"] = "TEXTORT_GANZESPALTE";
            })(TEXTORT_T || (TEXTORT_T = {}));
            exports_3("TEXTORT_T", TEXTORT_T);
            ;
            ;
            ;
            ;
            ;
            exports_3("TKEINPFEIL", TKEINPFEIL = "TKEINPFEIL");
            exports_3("TPFEIL_START", TPFEIL_START = "TPFEIL_START");
            exports_3("TPFEIL_ZIEL", TPFEIL_ZIEL = "TPFEIL_ZIEL");
            ;
            ;
            ;
            exports_3("BlockRaw_ok", BlockRaw_ok = "BLOCKRAWOK");
            exports_3("BlockRawUnbekannt", BlockRawUnbekannt = "BLOCKRAWUNBEKANNT");
            (function (EQuelle) {
                EQuelle[EQuelle["FritzscheSommer1900"] = 0] = "FritzscheSommer1900";
            })(EQuelle || (EQuelle = {}));
            exports_3("EQuelle", EQuelle);
            (function (ZEILE_T) {
                ZEILE_T["ZUGNR"] = "ZUGNR";
                ZEILE_T["KLASSEN"] = "KLASSEN";
                ZEILE_T["ANSCHLUSS_ZUBRINGER_AB"] = "ANSCHLUSS_ZUBRINGER_AB";
                ZEILE_T["ANSCHLUSS_ZUBRINGER_IN"] = "ANSCHLUSS_ZUBRINGER_IN";
                ZEILE_T["NORMAL"] = "NORMAL";
                ZEILE_T["ANSCHLUSS_WEITER_AB"] = "ANSCHLUSS_WEITER_AB";
                ZEILE_T["ANSCHLUSS_WEITER_IN"] = "ANSCHLUSS_WEITER_IN";
            })(ZEILE_T || (ZEILE_T = {}));
            exports_3("ZEILE_T", ZEILE_T);
            (function (BLOCK_T) {
                BLOCK_T["ZUG_NR_WERT"] = "ZUG_NR_WERT";
                BLOCK_T["LEER"] = "LEER";
                BLOCK_T["BLOCK"] = "BLOCKEINTRAG";
                BLOCK_T["ERROR"] = "BLOCKERROR";
                BLOCK_T["KEINHALT"] = "BLOCKKEINHALT";
                BLOCK_T["DICKERSTRICH"] = "BLOCK_DICKERSTRICH";
                BLOCK_T["ZEITEINTRAG"] = "BLOCK_ZEITEINTRAG";
                BLOCK_T["ANKUNFT"] = "BLOCK_ANKUNFT";
            })(BLOCK_T || (BLOCK_T = {}));
            exports_3("BLOCK_T", BLOCK_T);
            (function (GesternHeuteMorgen) {
                GesternHeuteMorgen[GesternHeuteMorgen["Unbekannt"] = 0] = "Unbekannt";
                GesternHeuteMorgen[GesternHeuteMorgen["Gestern"] = 1] = "Gestern";
                GesternHeuteMorgen[GesternHeuteMorgen["Heute"] = 2] = "Heute";
                GesternHeuteMorgen[GesternHeuteMorgen["Morgen"] = 3] = "Morgen";
            })(GesternHeuteMorgen || (GesternHeuteMorgen = {}));
            exports_3("GesternHeuteMorgen", GesternHeuteMorgen);
            (function (ETimeValid) {
                ETimeValid[ETimeValid["Nein"] = 1] = "Nein";
                ETimeValid[ETimeValid["Vorgabe24"] = 2] = "Vorgabe24";
                ETimeValid[ETimeValid["Berechnet24"] = 3] = "Berechnet24";
            })(ETimeValid || (ETimeValid = {}));
            exports_3("ETimeValid", ETimeValid);
            exports_3("ZEIT_ROH", ZEIT_ROH = "ZEIT_ROH");
            exports_3("ZEIT_24", ZEIT_24 = "ZEIT_24");
            (function (EAnAb) {
                EAnAb[EAnAb["An"] = 0] = "An";
                EAnAb[EAnAb["FirstAb"] = 1] = "FirstAb";
                EAnAb[EAnAb["FollowAb"] = 2] = "FollowAb";
            })(EAnAb || (EAnAb = {}));
            exports_3("EAnAb", EAnAb);
            exports_3("ZUGLAUF_UNBEKANNT", ZUGLAUF_UNBEKANNT = "ZUGLAUF_UNBEKANNT");
            exports_3("ZUGLAUF_BERECHNET", ZUGLAUF_BERECHNET = "ZUGLAUF_BERECHNET");
            (function (FAHRPREIS_T) {
                FAHRPREIS_T["KEINE_ANGABE"] = "FAHRPREIS_KEINE_ANGABE";
                FAHRPREIS_T["EINFACH"] = "FAHRPREIS_EINFACH";
                FAHRPREIS_T["EINFACH_UND_RUECK"] = "FAHRPREIS_EINFACH_UND_RUECK";
                FAHRPREIS_T["AB"] = "FAHRPREIS_AB";
            })(FAHRPREIS_T || (FAHRPREIS_T = {}));
            exports_3("FAHRPREIS_T", FAHRPREIS_T);
        }
    };
});
System.register("SaxParser", ["SaxParsedTypes", "SaxInputTypes", "SaxBaseTypes"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var SaxParsedTypes_1, SaxInput, SaxBaseTypes_1, Importer, ZI_Creator, ZI_Importer, ZI_Renderer;
    return {
        setters: [
            function (SaxParsedTypes_1_1) {
                SaxParsedTypes_1 = SaxParsedTypes_1_1;
            },
            function (SaxInput_1) {
                SaxInput = SaxInput_1;
            },
            function (SaxBaseTypes_1_1) {
                SaxBaseTypes_1 = SaxBaseTypes_1_1;
            }
        ],
        execute: function () {
            Importer = (function () {
                function Importer() {
                }
                Importer.berechneZeiten = function (s) {
                    console.log("berechneZeiten()");
                    var tLen = 0;
                    s.Zeilen.forEach(function (z) {
                        switch (z.kind) {
                            case SaxParsedTypes_1.ZEILE_T.NORMAL:
                                tLen = z.Zeiteintraege.length;
                                break;
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxParsedTypes_1.ZEILE_T.KLASSEN:
                            case SaxParsedTypes_1.ZEILE_T.ZUGNR:
                                break;
                            default:
                                return SaxBaseTypes_1.assertNever(z);
                        }
                    });
                    var fill24 = function (pEintrag, offsetH, ghm) {
                        var EintragRohZeit = 0;
                        switch (pEintrag.Zeit.kind) {
                            case SaxParsedTypes_1.ZEIT_ROH:
                                EintragRohZeit = pEintrag.Zeit.RohZeit;
                                break;
                            case SaxParsedTypes_1.ZEIT_24:
                                console.error("fill24 mit ZEIT24 (trotzdem aus src)");
                                EintragRohZeit = pEintrag.Zeit.src;
                        }
                        var tRohStunde12 = Math.floor(EintragRohZeit / 100);
                        var tRohMinute12 = (EintragRohZeit - (tRohStunde12 * 100));
                        if (tRohStunde12 == 12) {
                            tRohStunde12 = 0;
                        }
                        var tZeit24 = {
                            kind: SaxParsedTypes_1.ZEIT_24,
                            Minute24: tRohMinute12,
                            Stunde24: tRohStunde12 + offsetH,
                            WelcherTag: ghm,
                            Valid: SaxParsedTypes_1.ETimeValid.Berechnet24,
                            src: EintragRohZeit
                        };
                        pEintrag.Zeit = tZeit24;
                    };
                    console.log("fuelle Normalzeile + Anschluss_NACH   Zeiteintraege, Annahme: beginn heute vormittag");
                    for (var sp = 0; sp < tLen; sp++) {
                        s.Zeilen.forEach(function (z) {
                            switch (z.kind) {
                                case SaxParsedTypes_1.ZEILE_T.NORMAL:
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                    var tEintrag = z.Zeiteintraege[sp];
                                    switch (tEintrag.kind) {
                                        case SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG:
                                            var tFestgelegt = false;
                                            for (var i = sp - 1; i >= 0; i--) {
                                                var tVorgaenger = z.Zeiteintraege[i];
                                                switch (tVorgaenger.kind) {
                                                    case SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG:
                                                        if ((tVorgaenger.Zeit.kind == SaxParsedTypes_1.ZEIT_ROH) || (tVorgaenger.Zeit.Valid == SaxParsedTypes_1.ETimeValid.Nein)) {
                                                            console.error(" LINKS SOLLTE VALIDE SEIN !!!!");
                                                        }
                                                        else if ((tVorgaenger.Zeit.Valid == SaxParsedTypes_1.ETimeValid.Berechnet24) || (tVorgaenger.Zeit.Valid == SaxParsedTypes_1.ETimeValid.Vorgabe24)) {
                                                            fill24(tEintrag, 0, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                                            if (tEintrag.Zeit.kind == SaxParsedTypes_1.ZEIT_ROH) {
                                                                console.error("fill24 liefert ZEIT_ROH ???");
                                                            }
                                                            else {
                                                                if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                                }
                                                                else {
                                                                    fill24(tEintrag, 12, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                                                }
                                                                if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                                }
                                                                else {
                                                                    fill24(tEintrag, 24, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                                                }
                                                                i = -1;
                                                                tFestgelegt = true;
                                                            }
                                                        }
                                                        break;
                                                    case SaxParsedTypes_1.BLOCK_T.LEER:
                                                    case SaxParsedTypes_1.BLOCK_T.KEINHALT:
                                                    case SaxParsedTypes_1.BLOCK_T.DICKERSTRICH:
                                                    case SaxParsedTypes_1.BLOCK_T.KEINHALT:
                                                    case SaxParsedTypes_1.BLOCK_T.ERROR:
                                                    case SaxParsedTypes_1.BLOCK_T.ANKUNFT:
                                                    case SaxParsedTypes_1.BLOCK_T.BLOCK:
                                                        break;
                                                    default:
                                                        return SaxBaseTypes_1.assertNever(tVorgaenger);
                                                }
                                            }
                                            if (tFestgelegt) {
                                            }
                                            else {
                                                fill24(tEintrag, 0, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                            }
                                            break;
                                        case SaxParsedTypes_1.BLOCK_T.LEER:
                                        case SaxParsedTypes_1.BLOCK_T.KEINHALT:
                                        case SaxParsedTypes_1.BLOCK_T.DICKERSTRICH:
                                        case SaxParsedTypes_1.BLOCK_T.KEINHALT:
                                        case SaxParsedTypes_1.BLOCK_T.ERROR:
                                        case SaxParsedTypes_1.BLOCK_T.ANKUNFT:
                                        case SaxParsedTypes_1.BLOCK_T.BLOCK:
                                            break;
                                        default:
                                            return SaxBaseTypes_1.assertNever(tEintrag);
                                    }
                                    break;
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_1.ZEILE_T.ZUGNR:
                                case SaxParsedTypes_1.ZEILE_T.KLASSEN:
                                    break;
                                default:
                                    return SaxBaseTypes_1.assertNever(z);
                            }
                        });
                    }
                    console.log("fuelle Anschluss_Aus, d.h. Kopfbereich durch einzelne Spaltenweise suchen");
                    for (var sp = 0; sp < tLen; sp++) {
                        s.Zeilen.forEach(function (z, zidx, arr) {
                            switch (z.kind) {
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                    var tAnschlusszeit = z.Zeiteintraege[sp];
                                    if (tAnschlusszeit.kind == SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG) {
                                        for (var di = zidx + 1; di < s.Zeilen.length; di++) {
                                            var zzz_zeileDrunter = s.Zeilen[di];
                                            if (zzz_zeileDrunter.kind == SaxParsedTypes_1.ZEILE_T.NORMAL) {
                                                var eee_drunterEintrag = zzz_zeileDrunter.Zeiteintraege[sp];
                                                if (eee_drunterEintrag.kind == SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG) {
                                                    if (eee_drunterEintrag.Zeit.kind == SaxParsedTypes_1.ZEIT_ROH) {
                                                        console.error("NORMALZEILE SOLLTE SEIT OBEN KORREKT GEFUELLT SEIN?!");
                                                    }
                                                    else {
                                                        var tAnschlusszeit_roh = 0;
                                                        if (tAnschlusszeit.Zeit.kind == SaxParsedTypes_1.ZEIT_ROH) {
                                                            tAnschlusszeit_roh = tAnschlusszeit.Zeit.RohZeit;
                                                            console.error("ANSCHLUSS EINTRAG KORREKT BERECHNET , war ROH ", tAnschlusszeit.Zeit.RohZeit);
                                                        }
                                                        else {
                                                            tAnschlusszeit_roh = tAnschlusszeit.Zeit.src;
                                                            console.error("ANSCHLUSS EINTRAG ZU FRUEH BERECHNET ?! ", tAnschlusszeit.Zeit.src);
                                                        }
                                                        if (tAnschlusszeit_roh > eee_drunterEintrag.Zeit.src) {
                                                            if (eee_drunterEintrag.Zeit.Stunde24 > 12) {
                                                                fill24(tAnschlusszeit, 0, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                                            }
                                                            else {
                                                                fill24(tAnschlusszeit, 12, SaxParsedTypes_1.GesternHeuteMorgen.Gestern);
                                                                console.log("kori2x ", eee_drunterEintrag.Zeit.src);
                                                            }
                                                        }
                                                        else {
                                                            fill24(tAnschlusszeit, 0, SaxParsedTypes_1.GesternHeuteMorgen.Heute);
                                                        }
                                                    }
                                                }
                                                di = s.Zeilen.length + 99;
                                            }
                                        }
                                    }
                            }
                        });
                    }
                    console.log("korrigere Anschluss_Aus Zeiten fuer Mittags-Ueberlaeufe");
                    s.Zeilen.forEach(function (z, zidx, arr) {
                        var tFirst = true;
                        var tLast = null;
                        switch (z.kind) {
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                z.Zeiteintraege.forEach(function (e) {
                                    if (e.kind == SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG) {
                                        if (e.Zeit.kind == SaxParsedTypes_1.ZEIT_ROH) {
                                            console.error("HIER SOLLTE ALLES ZEIT24 sein !!!");
                                        }
                                        else {
                                            if (tFirst) {
                                                tLast = e.Zeit;
                                                tFirst = false;
                                            }
                                            else {
                                                if (((tLast.Stunde24 * 100 + tLast.Minute24) > (e.Zeit.Stunde24 * 100 + e.Zeit.Minute24)) && tLast.WelcherTag == SaxParsedTypes_1.GesternHeuteMorgen.Heute) {
                                                    console.log("kori3 ", e.Zeit.src);
                                                    e.Zeit.Stunde24 += 12;
                                                }
                                                tLast = e.Zeit;
                                            }
                                        }
                                    }
                                });
                        }
                    });
                    console.log("korriere tage heute / morgen  fuer eintraege unten rechts");
                    s.Zeilen.forEach(function (z, zidx, arr) {
                        switch (z.kind) {
                            case SaxParsedTypes_1.ZEILE_T.NORMAL:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                z.Zeiteintraege.forEach(function (e) {
                                    if (e.kind == SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG) {
                                        if (e.Zeit.kind == SaxParsedTypes_1.ZEIT_24) {
                                            if (e.Zeit.Stunde24 >= 24 && e.Zeit.WelcherTag == SaxParsedTypes_1.GesternHeuteMorgen.Heute) {
                                                e.Zeit.Stunde24 -= 24;
                                                e.Zeit.WelcherTag = SaxParsedTypes_1.GesternHeuteMorgen.Morgen;
                                            }
                                        }
                                        else {
                                            console.error("ROHZEIT sollte hier laengst ersetzt sein !!!");
                                        }
                                    }
                                });
                        }
                    });
                    return s;
                };
                Importer.createTBlockEintrag_single = function (BlockInhalt) {
                    var tResultEntryB = {
                        kind: SaxParsedTypes_1.BLOCK_T.BLOCK,
                        Senkrecht: false,
                        Valid: true,
                        Start: true,
                        Breite: 1,
                        Hoehe: 1,
                        Passend: true,
                        Referenzkey: undefined,
                        Blockinhalt: BlockInhalt,
                        BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                    };
                    return tResultEntryB;
                };
                Importer.parseZeitZeileZusatzInfo = function (rawEntry) {
                    var tZeitZeilenZusatzInfo = {
                        AnschlussNummern: [],
                        Ortsname: "",
                        Fahrpreise: { kind: SaxParsedTypes_1.FAHRPREIS_T.KEINE_ANGABE },
                        Valid: false,
                        Raw: JSON.stringify(rawEntry)
                    };
                    var tWillBeValid = true;
                    if (rawEntry.fk) {
                        if (rawEntry.fk.length == 2) {
                            var tFahrpreisInfo2 = {
                                kind: SaxParsedTypes_1.FAHRPREIS_T.EINFACH,
                                Einfach2: rawEntry.fk[0],
                                Einfach3: rawEntry.fk[1]
                            };
                            tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo2;
                        }
                        else if (rawEntry.fk.length == 4) {
                            var tFahrpreisInfo4 = {
                                kind: SaxParsedTypes_1.FAHRPREIS_T.EINFACH_UND_RUECK,
                                Einfach2: rawEntry.fk[0],
                                Einfach3: rawEntry.fk[1],
                                Rueck2: rawEntry.fk[2],
                                Rueck3: rawEntry.fk[3]
                            };
                            tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo4;
                        }
                        else {
                            tWillBeValid = false;
                            console.warn("fk invalid, weder laenge 2 noch laenge 4");
                        }
                    }
                    if (rawEntry.fkab) {
                        var tFahrpreisAb = {
                            kind: SaxParsedTypes_1.FAHRPREIS_T.AB,
                            AbfahrtsOrt: rawEntry.fkab
                        };
                        tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisAb;
                    }
                    if (rawEntry.FROM) {
                        console.warn("from not implemented");
                        tWillBeValid = false;
                    }
                    if (rawEntry.nr) {
                        tZeitZeilenZusatzInfo.AnschlussNummern.push(rawEntry.nr.toString());
                    }
                    if (rawEntry.nrn) {
                        tZeitZeilenZusatzInfo.AnschlussNummern = rawEntry.nrn.map(function (x) { return x.toString(); });
                    }
                    if (rawEntry.ort) {
                        tZeitZeilenZusatzInfo.Ortsname = rawEntry.ort;
                    }
                    if (rawEntry.via) {
                        console.warn("via not implemented");
                        tWillBeValid = false;
                    }
                    tZeitZeilenZusatzInfo.Valid = tWillBeValid;
                    return tZeitZeilenZusatzInfo;
                };
                Importer.parse = function (input) {
                    var tResult = {
                        Quelle: SaxParsedTypes_1.EQuelle.FritzscheSommer1900,
                        Kommentar: (input.comment) ? input.comment : "",
                        Ueberschrift: input.caption,
                        Route1900: input.route1900.toString(),
                        Klassen: ZI_Creator.parseKlassenString(input.klassen),
                        Seite: input.seite,
                        Zeilen: [],
                        ZusatzBloecke: []
                    };
                    if (input.zeilen != null) {
                        var tNextAbIsFirst = true;
                        for (var i = 0; i < input.zeilen.length; i++) {
                            var zeile = input.zeilen[i];
                            if ((zeile != null) && (zeile.length >= 2)) {
                                if ((("number" == typeof zeile[0]) ||
                                    (("string" == typeof zeile[0]) && (zeile[0].indexOf("_") != 0))) ||
                                    (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_aus) == 0)) ||
                                    (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_aus_ziel) == 0)) ||
                                    (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_nach_start) == 0)) ||
                                    (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_nach_in) == 0))) {
                                    var tAnAbString = (("number" == typeof zeile[0]) ? zeile[2] : zeile[1]);
                                    var tAnAb = SaxParsedTypes_1.EAnAb.FirstAb;
                                    if (tAnAbString == SaxInput.ab) {
                                        if (tNextAbIsFirst) {
                                            tAnAb = SaxParsedTypes_1.EAnAb.FirstAb;
                                            tNextAbIsFirst = false;
                                        }
                                        else {
                                            tAnAb = SaxParsedTypes_1.EAnAb.FollowAb;
                                            tNextAbIsFirst = false;
                                        }
                                    }
                                    if (tAnAbString == SaxInput.an) {
                                        tAnAb = SaxParsedTypes_1.EAnAb.An;
                                        tNextAbIsFirst = true;
                                    }
                                    var tResultZeileN = {
                                        kind: SaxParsedTypes_1.ZEILE_T.NORMAL,
                                        Km: ("number" == typeof zeile[0] ? zeile[0] : -1),
                                        BhfTag: ("number" == typeof zeile[0] ? zeile[1] : zeile[0]),
                                        AnschlussNummern: [],
                                        Zeiteintraege: [],
                                        ZeitZeileZusatzInfo: undefined,
                                        AnAb: tAnAb
                                    };
                                    var tResultZeile = tResultZeileN;
                                    console.log("parse Zeile ", zeile[0]);
                                    if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_nach_in) == 0)) {
                                        var tResultZeileX = {
                                            kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN,
                                            BhfTag: "",
                                            AnschlussNummern: [],
                                            Zeiteintraege: [],
                                            ZeitZeileZusatzInfo: undefined
                                        };
                                        tResultZeile = tResultZeileX;
                                    }
                                    if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_nach_start) == 0)) {
                                        var tResultZeileXD = {
                                            kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB,
                                            BhfTag: "",
                                            AnschlussNummern: [],
                                            Zeiteintraege: [],
                                            ZeitZeileZusatzInfo: undefined
                                        };
                                        tResultZeile = tResultZeileXD;
                                    }
                                    if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_aus) == 0)) {
                                        var tResultZeileY = {
                                            kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB,
                                            BhfTag: "",
                                            AnschlussNummern: [],
                                            Zeiteintraege: [],
                                            ZeitZeileZusatzInfo: undefined
                                        };
                                        tResultZeile = tResultZeileY;
                                    }
                                    if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxInput._anschluss_aus_ziel) == 0)) {
                                        var tResultZeileZ = {
                                            kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN,
                                            BhfTag: "",
                                            AnschlussNummern: [],
                                            Zeiteintraege: [],
                                            ZeitZeileZusatzInfo: undefined
                                        };
                                        tResultZeile = tResultZeileZ;
                                    }
                                    var tStart = 3;
                                    if ("string" == typeof zeile[0]) {
                                        tStart = 2;
                                    }
                                    for (var cnt = tStart; cnt < zeile.length; cnt++) {
                                        var rawEntry = zeile[cnt];
                                        if (("number" == typeof rawEntry) || ("string" == typeof rawEntry)) {
                                            var entry = -1;
                                            var tIsTime = false;
                                            if (("string" == typeof rawEntry)) {
                                                if (rawEntry.indexOf("_") == 0) {
                                                    tIsTime == false;
                                                    if (rawEntry == SaxInput.nix) {
                                                        var tResultEntryL = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.LEER,
                                                            MitStrich: true,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryL);
                                                    }
                                                    else if (rawEntry == SaxInput.gnix) {
                                                        var tResultEntryL = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.LEER,
                                                            MitStrich: false,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryL);
                                                    }
                                                    else if (rawEntry.indexOf(SaxInput.ank) == 0) {
                                                        var tResultEntryAnk = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.ANKUNFT,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryAnk);
                                                    }
                                                    else if (rawEntry == SaxInput.kHlt) {
                                                        var tResultEntryK = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.KEINHALT,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryK);
                                                    }
                                                    else if (rawEntry == SaxInput.dick) {
                                                        var tResultEntryD = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.DICKERSTRICH,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryD);
                                                    }
                                                    else if ((rawEntry.indexOf(SaxInput.SENKRECHT_PREFIX) == 0) || (rawEntry.indexOf(SaxInput.WAAGERECHT_PREFIX) == 0)) {
                                                        var senkleng = SaxInput.SENKRECHT_PREFIX.length;
                                                        var waagleng = SaxInput.WAAGERECHT_PREFIX.length;
                                                        var tResultEntryB = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.BLOCK,
                                                            Senkrecht: (rawEntry.indexOf(SaxInput.SENKRECHT_PREFIX) == 0),
                                                            Valid: false,
                                                            Start: false,
                                                            Breite: 1,
                                                            Hoehe: 1,
                                                            Passend: true,
                                                            Referenzkey: (rawEntry.indexOf(SaxInput.SENKRECHT_PREFIX) == 0) ? rawEntry.substr(senkleng) : rawEntry.substr(waagleng),
                                                            Blockinhalt: undefined,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tResultEntryB);
                                                    }
                                                    else if (rawEntry.indexOf("_Z") == 0) {
                                                        var tZugNr = rawEntry.substr(2);
                                                        var tBlock = {
                                                            Zugnr: tZugNr,
                                                            Klassen: SaxBaseTypes_1.EKlassen.NichtAngegeben
                                                        };
                                                        var tBlockKpl = {
                                                            Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                            ZugNrOderKlasse: tBlock,
                                                            Gueltig: { kind: SaxParsedTypes_1.GUELTIG_IMMER },
                                                            KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                            Fahrtage: { kind: SaxParsedTypes_1.FAEHRT_IMMER },
                                                            TextOrt: { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN },
                                                            PfeilInfo: { kind: SaxParsedTypes_1.TKEINPFEIL },
                                                            Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                            Bahnverwaltung: SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben
                                                        };
                                                        var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);
                                                        tResultZeile.Zeiteintraege.push(tResultEntryB);
                                                    }
                                                    else if ((rawEntry.indexOf(SaxInput.k1b3) == 0)
                                                        || (rawEntry.indexOf(SaxInput.k2b3) == 0)
                                                        || (rawEntry.indexOf(SaxInput.k2b4) == 0)
                                                        || (rawEntry.indexOf(SaxInput.k3b4) == 0)) {
                                                        var tBlock = ZI_Creator.createTBlockInhaltZugnummerOderKlasse(null, rawEntry);
                                                        var tBlockKpl = {
                                                            Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                            ZugNrOderKlasse: tBlock,
                                                            Gueltig: { kind: SaxParsedTypes_1.GUELTIG_IMMER },
                                                            KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                            Fahrtage: { kind: SaxParsedTypes_1.FAEHRT_IMMER },
                                                            TextOrt: { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN },
                                                            PfeilInfo: { kind: SaxParsedTypes_1.TKEINPFEIL },
                                                            Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                            Bahnverwaltung: SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben
                                                        };
                                                        var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);
                                                        tResultZeile.Zeiteintraege.push(tResultEntryB);
                                                    }
                                                    else if ((rawEntry.indexOf("_") == 0) && (rawEntry.substr(1, 1) == rawEntry.substr(1, 1).toLowerCase())) {
                                                        var tBuchstabe = rawEntry.substr(1, 1);
                                                        var entry = parseFloat(rawEntry.substr(2));
                                                        console.warn("TAGESBEREICH NICHT BERECHNET");
                                                        var tZeiteintrag = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG,
                                                            Schnellzug: tBuchstabe == "s",
                                                            Referenzkey: (tBuchstabe != "s") ? tBuchstabe : null,
                                                            BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT },
                                                            Zeit: { kind: SaxParsedTypes_1.ZEIT_ROH, RohZeit: entry }
                                                        };
                                                        tResultZeile.Zeiteintraege.push(tZeiteintrag);
                                                    }
                                                    else {
                                                        var tResultEntryE = {
                                                            kind: SaxParsedTypes_1.BLOCK_T.ERROR,
                                                            Grund: "unknown string " + rawEntry
                                                        };
                                                        console.log("ELSE unknown string ", JSON.stringify(rawEntry));
                                                        tResultZeile.Zeiteintraege.push(tResultEntryE);
                                                    }
                                                }
                                                else {
                                                    entry = parseInt(rawEntry);
                                                    tIsTime = true;
                                                }
                                            }
                                            else {
                                                entry = rawEntry;
                                                tIsTime = true;
                                            }
                                            if (tIsTime) {
                                                var tZeiteintrag = {
                                                    kind: SaxParsedTypes_1.BLOCK_T.ZEITEINTRAG,
                                                    Schnellzug: false,
                                                    Referenzkey: null,
                                                    BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT },
                                                    Zeit: { kind: SaxParsedTypes_1.ZEIT_ROH, RohZeit: entry }
                                                };
                                                tResultZeile.Zeiteintraege.push(tZeiteintrag);
                                            }
                                        }
                                        else {
                                            console.log("Zusatzinfo, nicht Zeiteintrag");
                                            var z = Importer.parseZeitZeileZusatzInfo(rawEntry);
                                            if (!z.Valid) {
                                                var tResultEntryE = {
                                                    kind: SaxParsedTypes_1.BLOCK_T.ERROR,
                                                    Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(rawEntry)
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryE);
                                            }
                                            tResultZeile.ZeitZeileZusatzInfo = z;
                                        }
                                    }
                                    tResult.Zeilen.push(tResultZeile);
                                }
                                if (("string" == typeof zeile[0]) && ((zeile[0].indexOf(SaxInput._zugnr) == 0)
                                    || (zeile[0].indexOf(SaxInput._klassen) == 0)
                                    || (zeile[1].indexOf(SaxInput.kl) == 0))) {
                                    var tResultZeileNrn = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ZUGNR,
                                        ZugNummern: [],
                                        ZeitZeileZusatzInfo: undefined
                                    };
                                    if ((zeile[0].indexOf(SaxInput._klassen) == 0) || zeile[1].indexOf(SaxInput.kl) == 0) {
                                        var x = {
                                            kind: SaxParsedTypes_1.ZEILE_T.KLASSEN,
                                            KlassenNummern: [],
                                            ZeitZeileZusatzInfo: undefined,
                                            BlockEintrag: undefined
                                        };
                                        tResultZeileNrn = x;
                                        console.log("KLASSENZEILE ", i);
                                        console.log("BLOCKK");
                                        if (("string" == typeof zeile[0])
                                            && (zeile[1].indexOf(SaxInput.kl) == 0)
                                            && (zeile[0].indexOf(SaxInput.WAAGERECHT_PREFIX) == 0)) {
                                            var tKey = zeile[0].substr(SaxInput.WAAGERECHT_PREFIX.length);
                                            console.log("BLOCKK2");
                                            x.BlockEintrag = {
                                                kind: SaxParsedTypes_1.BLOCK_T.BLOCK,
                                                Start: true,
                                                Senkrecht: false,
                                                Breite: 1,
                                                Hoehe: 1,
                                                Passend: true,
                                                Referenzkey: tKey,
                                                Blockinhalt: undefined,
                                                Valid: true,
                                                BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                            };
                                        }
                                    }
                                    for (var zi = 2; zi < zeile.length; zi++) {
                                        if ("number" == typeof zeile[zi]) {
                                            var tBlockK = {
                                                Zugnr: zeile[zi].toString(),
                                                Klassen: SaxBaseTypes_1.EKlassen.NichtAngegeben
                                            };
                                            var tBlockKpl = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                ZugNrOderKlasse: tBlockK,
                                                Gueltig: { kind: SaxParsedTypes_1.GUELTIG_IMMER },
                                                KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                Fahrtage: { kind: SaxParsedTypes_1.FAEHRT_IMMER },
                                                TextOrt: { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN },
                                                PfeilInfo: { kind: SaxParsedTypes_1.TKEINPFEIL },
                                                Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                Bahnverwaltung: SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben
                                            };
                                            var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tWert);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tWert);
                                                    break;
                                            }
                                        }
                                        else if (SaxInput.gnix === zeile[zi]) {
                                            var tLeer = {
                                                kind: SaxParsedTypes_1.BLOCK_T.LEER,
                                                MitStrich: false,
                                                BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                            };
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tLeer);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tLeer);
                                                    break;
                                            }
                                        }
                                        else if (SaxInput._ === zeile[zi]) {
                                            var tLeer = {
                                                kind: SaxParsedTypes_1.BLOCK_T.LEER,
                                                MitStrich: true,
                                                BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                            };
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tLeer);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tLeer);
                                                    break;
                                            }
                                        }
                                        else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && ((zeile[zi].indexOf(SaxInput.k1b3) == 0)
                                            || (zeile[zi].indexOf(SaxInput.k2b3) == 0)
                                            || (zeile[zi].indexOf(SaxInput.k2b4) == 0)
                                            || (zeile[zi].indexOf(SaxInput.k3b4) == 0))) {
                                            var tKlassenstring = zeile[zi];
                                            var tBlockK = ZI_Creator.createTBlockInhaltZugnummerOderKlasse(null, tKlassenstring);
                                            var tBlockKpl = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                ZugNrOderKlasse: tBlockK,
                                                Gueltig: { kind: SaxParsedTypes_1.GUELTIG_IMMER },
                                                KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                Fahrtage: { kind: SaxParsedTypes_1.FAEHRT_IMMER },
                                                TextOrt: { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN },
                                                PfeilInfo: { kind: SaxParsedTypes_1.TKEINPFEIL },
                                                Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                Bahnverwaltung: SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben
                                            };
                                            var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tWert);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tWert);
                                                    break;
                                            }
                                        }
                                        else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && ((zeile[zi].indexOf(SaxInput.SENKRECHT_PREFIX) == 0)
                                            || (zeile[zi].indexOf(SaxInput.WAAGERECHT_PREFIX) == 0))) {
                                            var senkleng = SaxInput.SENKRECHT_PREFIX.length;
                                            var waagleng = SaxInput.WAAGERECHT_PREFIX.length;
                                            var tResultEntryB = {
                                                kind: SaxParsedTypes_1.BLOCK_T.BLOCK,
                                                Senkrecht: (zeile[zi].indexOf(SaxInput.SENKRECHT_PREFIX) == 0),
                                                Valid: false,
                                                Start: false,
                                                Breite: 1,
                                                Hoehe: 1,
                                                Passend: true,
                                                Referenzkey: (zeile[zi].indexOf(SaxInput.SENKRECHT_PREFIX) == 0) ? zeile[zi].substr(senkleng) : zeile[zi].substr(waagleng),
                                                Blockinhalt: undefined,
                                                BerechneterZugLauf: { kind: SaxParsedTypes_1.ZUGLAUF_UNBEKANNT }
                                            };
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tResultEntryB);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tResultEntryB);
                                                    break;
                                            }
                                        }
                                        else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (("string" == typeof zeile[0]) && ((zeile[0].indexOf(SaxInput._zugnr) == 0)))) {
                                            var tBlockK = {
                                                Zugnr: zeile[zi].toString(),
                                                Klassen: SaxBaseTypes_1.EKlassen.NichtAngegeben
                                            };
                                            var tBlockKpl = {
                                                Verweistyp: ZI_Creator.createTVerweisEmbedded(),
                                                ZugNrOderKlasse: tBlockK,
                                                Gueltig: { kind: SaxParsedTypes_1.GUELTIG_IMMER },
                                                KbsAbweichung: ZI_Creator.createKbsAbweichungKeine(),
                                                Fahrtage: { kind: SaxParsedTypes_1.FAEHRT_IMMER },
                                                TextOrt: { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN },
                                                PfeilInfo: { kind: SaxParsedTypes_1.TKEINPFEIL },
                                                Unbekannt: ZI_Creator.createBlockInhaltRawOk(),
                                                Bahnverwaltung: SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben
                                            };
                                            var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                            switch (tResultZeileNrn.kind) {
                                                case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                    tResultZeileNrn.ZugNummern.push(tWert);
                                                    break;
                                                case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                    tResultZeileNrn.KlassenNummern.push(tWert);
                                                    break;
                                            }
                                        }
                                        else {
                                            var z = Importer.parseZeitZeileZusatzInfo(zeile[zi]);
                                            tResultZeileNrn.ZeitZeileZusatzInfo = z;
                                            console.log(z);
                                            if (!z.Valid) {
                                                var tResultEntryE = {
                                                    kind: SaxParsedTypes_1.BLOCK_T.ERROR,
                                                    Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(zeile[zi])
                                                };
                                                switch (tResultZeileNrn.kind) {
                                                    case (SaxParsedTypes_1.ZEILE_T.ZUGNR):
                                                        tResultZeileNrn.ZugNummern.push(tResultEntryE);
                                                        break;
                                                    case (SaxParsedTypes_1.ZEILE_T.KLASSEN):
                                                        tResultZeileNrn.KlassenNummern.push(tResultEntryE);
                                                        break;
                                                }
                                            }
                                        }
                                    }
                                    tResult.Zeilen.push(tResultZeileNrn);
                                }
                            }
                            console.log(zeile);
                        }
                    }
                    if (input.ZellenVerweise != null) {
                        input.ZellenVerweise.forEach(function (zi) {
                            var tParsed = ZI_Importer.parseIZellenEigenschaft(zi);
                            tResult.ZusatzBloecke.push(tParsed);
                        });
                    }
                    return tResult;
                };
                return Importer;
            }());
            exports_4("Importer", Importer);
            ZI_Creator = (function () {
                function ZI_Creator() {
                }
                ZI_Creator.createTVerweisEmbedded = function () {
                    return {
                        kind: SaxParsedTypes_1.VERWEIS_T.EMBEDDED
                    };
                };
                ZI_Creator.createTVerweisPassend = function (key, scope) {
                    return {
                        kind: SaxParsedTypes_1.VERWEIS_T.PASSEND,
                        ReferenzKey: key,
                        Scope: scope
                    };
                };
                ZI_Creator.createKbsAbweichungKeine = function () {
                    return {
                        kind: SaxParsedTypes_1.KBS_ABWEICHUNG_KEINE
                    };
                };
                ZI_Creator.parseKlassenString = function (Klassenstring) {
                    var tKlassen = SaxBaseTypes_1.EKlassen.NichtAngegeben;
                    if (Klassenstring != undefined) {
                        switch (Klassenstring) {
                            case SaxInput.k1b3:
                                tKlassen = SaxBaseTypes_1.EKlassen.Klassen1bis3;
                                break;
                            case SaxInput.k2b3:
                                tKlassen = SaxBaseTypes_1.EKlassen.Klassen2bis3;
                                break;
                            case SaxInput.k2b4:
                                tKlassen = SaxBaseTypes_1.EKlassen.Klassen2bis4;
                                break;
                            case SaxInput.k3b4:
                                tKlassen = SaxBaseTypes_1.EKlassen.Klassen3bis4;
                                break;
                            case null:
                                tKlassen = SaxBaseTypes_1.EKlassen.NichtAngegeben;
                                break;
                            default: console.warn("UnbekannterKlassenstring: " + Klassenstring);
                        }
                    }
                    return tKlassen;
                };
                ZI_Creator.createTBlockInhaltZugnummerOderKlasse = function (Zugnummer, Klassenstring) {
                    var tBlock = {
                        Zugnr: Zugnummer,
                        Klassen: ZI_Creator.parseKlassenString(Klassenstring)
                    };
                    return tBlock;
                };
                ZI_Creator.createBlockInhaltRawOk = function () {
                    var tOk = { kind: SaxParsedTypes_1.BlockRaw_ok };
                    return tOk;
                };
                return ZI_Creator;
            }());
            exports_4("ZI_Creator", ZI_Creator);
            ZI_Importer = (function () {
                function ZI_Importer() {
                }
                ZI_Importer.parseIZellenEigenschaft = function (inp) {
                    var ok_inp_ab = false;
                    var ok_inp_cellkey = false;
                    var ok_inp_destcellkey = false;
                    var ok_inp_key = false;
                    var ok_inp_klassen = false;
                    var ok_inp_marker = false;
                    var ok_inp_nach = false;
                    var ok_inp_sonnundfeiertagzeit = false;
                    var ok_inp_srccellkey = false;
                    var ok_inp_tage = false;
                    var ok_inp_typ = false;
                    var ok_inp_verweisort = false;
                    var ok_inp_von = false;
                    var ok_inp_zugnr = false;
                    var ok_inp_scope = false;
                    var ok_inp_bahn = false;
                    var tGueltig = { kind: SaxParsedTypes_1.GUELTIG_IMMER };
                    if (inp.ab) {
                        tGueltig = {
                            kind: SaxParsedTypes_1.GUELTIG_AB,
                            bhf: inp.ab
                        };
                        ok_inp_ab = true;
                    }
                    else {
                        ok_inp_ab = true;
                    }
                    var tCellKey = "";
                    if (inp.cellkey) {
                        tCellKey = inp.cellkey.substr(0, 1);
                        ok_inp_cellkey = true;
                    }
                    else {
                        ok_inp_cellkey = true;
                    }
                    var tReferenzkey = "";
                    if (inp.key) {
                        tReferenzkey = inp.key;
                        ok_inp_key = true;
                    }
                    else {
                        ok_inp_key = true;
                    }
                    var tMarker = "";
                    if (inp.marker) {
                        tMarker = inp.marker;
                        ok_inp_marker = true;
                    }
                    else {
                        ok_inp_marker = true;
                    }
                    var tFahrtage = {
                        kind: SaxParsedTypes_1.FAEHRT_IMMER
                    };
                    if (inp.tage) {
                        switch (inp.tage) {
                            case SaxInput.sonn_und_festtags:
                                tFahrtage = {
                                    kind: SaxParsedTypes_1.FAEHRT_SONNUNDFESTTAGS
                                };
                                break;
                            case SaxInput.nur_werktags:
                                tFahrtage = {
                                    kind: SaxParsedTypes_1.FAEHRT_WERKTAGS
                                };
                                break;
                            default: console.warn("unbekannte Fahrtage: ", inp.tage);
                        }
                        ok_inp_tage = true;
                    }
                    else {
                        ok_inp_tage = true;
                    }
                    var tPfeilInfo = { kind: SaxParsedTypes_1.TKEINPFEIL };
                    var tTyp = ZI_Creator.createTVerweisEmbedded();
                    if (inp.typ) {
                        switch (inp.typ) {
                            case SaxInput.passend:
                                var tScopePassend = SaxParsedTypes_1.EScope.DefaultZug;
                                if (inp.scope) {
                                    if (inp.scope == SaxInput.restspalte) {
                                        tScopePassend = SaxParsedTypes_1.EScope.RestSpalte;
                                        ok_inp_scope = true;
                                    }
                                    if (inp.scope == SaxInput.defaultzug) {
                                        tScopePassend = SaxParsedTypes_1.EScope.DefaultZug;
                                        ok_inp_scope = true;
                                    }
                                }
                                else {
                                    ok_inp_scope = true;
                                }
                                tTyp = ZI_Creator.createTVerweisPassend(tReferenzkey, tScopePassend);
                                ok_inp_typ = true;
                                ok_inp_key = true;
                                ok_inp_marker = true;
                                break;
                            case SaxInput.fern:
                                tTyp = {
                                    kind: SaxParsedTypes_1.VERWEIS_T.FERN,
                                    ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                    OpticalMarker: tMarker
                                };
                                ok_inp_typ = true;
                                break;
                            case SaxInput.pfeilstart:
                                if (inp.destcellkey) {
                                    var tPfeilStart = {
                                        kind: SaxParsedTypes_1.TPFEIL_START, ReferenzKey: inp.destcellkey.substr(0, 1)
                                    };
                                    tPfeilInfo = tPfeilStart;
                                    ok_inp_destcellkey = true;
                                    tTyp = {
                                        kind: SaxParsedTypes_1.VERWEIS_T.FERN,
                                        ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                        OpticalMarker: ""
                                    };
                                    ok_inp_typ = true;
                                }
                                else {
                                    console.warn("ERROR: pfeilstart ohne destcellkey !!!");
                                }
                                break;
                            case SaxInput.pfeilziel:
                                if (inp.srccellkey) {
                                    var tPfeilZiel = {
                                        kind: SaxParsedTypes_1.TPFEIL_ZIEL, ReferenzKey: inp.srccellkey.substr(0, 1)
                                    };
                                    tPfeilInfo = tPfeilZiel;
                                    ok_inp_srccellkey = true;
                                    tTyp = {
                                        kind: SaxParsedTypes_1.VERWEIS_T.FERN,
                                        ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                        OpticalMarker: ""
                                    };
                                    ok_inp_typ = true;
                                }
                                else {
                                    console.warn("ERROR: pfeilziel ohne srccellkey !!!");
                                }
                                break;
                            case SaxInput.global:
                                tTyp = {
                                    kind: SaxParsedTypes_1.VERWEIS_T.GLOBAL_DEFAULT
                                };
                                ok_inp_typ = true;
                                break;
                            default:
                                console.warn("typ must be there, unknown: " + inp.typ);
                        }
                    }
                    else {
                        console.warn("typ must be there !!!");
                    }
                    var tBlockZugKlasse = {
                        Zugnr: (inp.zugnr != undefined) ? inp.zugnr.toString() : null,
                        Klassen: ZI_Creator.parseKlassenString(inp.klassen)
                    };
                    ok_inp_klassen = true;
                    ok_inp_zugnr = true;
                    if (inp.sonnundfeiertagzeit) {
                        console.error("SaxSchedulesZusatzBase.ts :  sonnundfeiertagszeit parser not implemented");
                    }
                    else {
                        ok_inp_sonnundfeiertagzeit = true;
                    }
                    var tTextOrt = { kind: SaxParsedTypes_1.TEXTORT_T.NICHTANGEGEBEN };
                    if (inp.verweisort) {
                        switch (inp.verweisort) {
                            case SaxInput.headerlinks:
                                tTextOrt = { kind: SaxParsedTypes_1.TEXTORT_T.LINKSVONHEADER };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.headerrechts:
                                tTextOrt = { kind: SaxParsedTypes_1.TEXTORT_T.RECHTSVONHEADER };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach9spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 9,
                                    Spaltenbreite: 1
                                };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach4spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 4,
                                    Spaltenbreite: 1
                                };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach4spalten2spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 4,
                                    Spaltenbreite: 2
                                };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach5spalten2spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 5,
                                    Spaltenbreite: 2
                                };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach6spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 6,
                                    Spaltenbreite: 1
                                };
                                ok_inp_verweisort = true;
                                break;
                            case SaxInput.nach10spalten4spalten:
                                tTextOrt = {
                                    kind: SaxParsedTypes_1.TEXTORT_T.GANZESPALTE,
                                    UebersprungeneSpalten: 10,
                                    Spaltenbreite: 4
                                };
                                ok_inp_verweisort = true;
                                break;
                            default:
                                console.warn("verweisort unbekannt: ", inp.verweisort);
                        }
                    }
                    else {
                        ok_inp_verweisort = true;
                    }
                    var tKbsAbweichung = ZI_Creator.createKbsAbweichungKeine();
                    if (inp.von) {
                        var tKbsAbweichungA = {
                            kind: SaxParsedTypes_1.KBS_ABWEICHUNG_AUS,
                            bhf: inp.von,
                            KBS: "",
                            SchonKomplettiert: false
                        };
                        tKbsAbweichung = tKbsAbweichungA;
                        ok_inp_von = true;
                    }
                    else {
                        ok_inp_von = true;
                    }
                    if (inp.nach) {
                        var tKbsAbweichungN = {
                            kind: SaxParsedTypes_1.KBS_ABWEICHUNG_NACH,
                            bhf: inp.nach,
                            KBS: "",
                            SchonKomplettiert: false
                        };
                        tKbsAbweichung = tKbsAbweichungN;
                        ok_inp_nach = true;
                    }
                    else {
                        ok_inp_nach = true;
                    }
                    var tBahn = SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben;
                    if (inp.bahn) {
                        if (inp.bahn == SaxInput.Sachs) {
                            tBahn = SaxParsedTypes_1.EBahnverwaltung.KSaechsStsEB;
                            ok_inp_bahn = true;
                        }
                        else {
                        }
                    }
                    else {
                        ok_inp_bahn = true;
                    }
                    var tBRT = {
                        kind: SaxParsedTypes_1.BlockRaw_ok
                    };
                    if (!(ok_inp_ab && ok_inp_cellkey && ok_inp_destcellkey && ok_inp_key && ok_inp_klassen && ok_inp_marker && ok_inp_nach
                        && ok_inp_sonnundfeiertagzeit && ok_inp_srccellkey && ok_inp_tage && ok_inp_typ && ok_inp_verweisort && ok_inp_von && ok_inp_zugnr
                        && ok_inp_scope && ok_inp_bahn)) {
                        tBRT = {
                            kind: SaxParsedTypes_1.BlockRawUnbekannt,
                            Eingabedaten: inp
                        };
                    }
                    var tBlockKpl = {
                        Verweistyp: tTyp,
                        ZugNrOderKlasse: tBlockZugKlasse,
                        Gueltig: tGueltig,
                        KbsAbweichung: tKbsAbweichung,
                        Fahrtage: tFahrtage,
                        TextOrt: tTextOrt,
                        PfeilInfo: tPfeilInfo,
                        Unbekannt: tBRT,
                        Bahnverwaltung: tBahn
                    };
                    console.log(JSON.stringify(inp));
                    console.log("wird zu:");
                    console.log(JSON.stringify(tBlockKpl));
                    return tBlockKpl;
                };
                ZI_Importer.assertNever = function (x) {
                    throw new Error("Unexpected object: " + x);
                };
                return ZI_Importer;
            }());
            exports_4("ZI_Importer", ZI_Importer);
            ZI_Renderer = (function () {
                function ZI_Renderer() {
                }
                ZI_Renderer.isEmptyBIBGlobal = function (b) {
                    console.warn("isEmptyBibGlobal not complete");
                    return ((b.Bahnverwaltung == SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben)
                        && (b.KbsAbweichung.kind == SaxParsedTypes_1.KBS_ABWEICHUNG_KEINE)
                        && (b.ZugNrOderKlasse.Klassen == SaxBaseTypes_1.EKlassen.NichtAngegeben)
                        && (b.ZugNrOderKlasse.Zugnr == null));
                };
                ZI_Renderer.renderOpticalMarker = function (s) {
                    var tResult = s;
                    if (s === SaxInput.fatdot) {
                        tResult = "\u25cf";
                    }
                    if (s === SaxInput.cross) {
                        tResult = "\u2020";
                    }
                    return tResult;
                };
                ZI_Renderer.TBlockInhaltNachRenderKomplex = function (t, alleZuege) {
                    var tResult = "";
                    if (t == undefined) {
                        return "block Inhalt Base undefined";
                    }
                    if (alleZuege) {
                        tResult += "Alle Zuege ";
                    }
                    var tEmbedded = (t.Verweistyp.kind === SaxParsedTypes_1.VERWEIS_T.EMBEDDED);
                    if (t.Verweistyp.kind == SaxParsedTypes_1.VERWEIS_T.FERN) {
                        tResult += ZI_Renderer.renderOpticalMarker(t.Verweistyp.OpticalMarker);
                    }
                    if ((t.ZugNrOderKlasse.Zugnr != null) && (t.ZugNrOderKlasse.Zugnr.length > 0)) {
                        tResult = tResult + (tEmbedded ? "" : "Zug ") + t.ZugNrOderKlasse.Zugnr + " ";
                    }
                    switch (t.ZugNrOderKlasse.Klassen) {
                        case (SaxBaseTypes_1.EKlassen.Klassen1bis3):
                            tResult = tResult + "I-III ";
                            tResult += (alleZuege) ? "Klasse" : "";
                            break;
                        case (SaxBaseTypes_1.EKlassen.Klassen2bis3):
                            tResult = tResult + "II-III ";
                            tResult += (alleZuege) ? "Klasse" : "";
                            break;
                        case (SaxBaseTypes_1.EKlassen.Klassen2bis4):
                            tResult = tResult + "II-IV ";
                            tResult += (alleZuege) ? "Klasse" : "";
                            break;
                        case (SaxBaseTypes_1.EKlassen.Klassen3bis4):
                            tResult = tResult + "III-IV ";
                            tResult += (alleZuege) ? "Klasse" : "";
                            break;
                        case (SaxBaseTypes_1.EKlassen.NichtAngegeben):
                            break;
                        default:
                            return ZI_Importer.assertNever(t.ZugNrOderKlasse.Klassen);
                    }
                    switch (t.Fahrtage.kind) {
                        case (SaxParsedTypes_1.FAEHRT_IMMER):
                            break;
                        case (SaxParsedTypes_1.FAEHRT_WERKTAGS):
                            tResult += "Nur Werktags";
                            break;
                        case (SaxParsedTypes_1.FAEHRT_SONNUNDFESTTAGS):
                            tResult += "Sonn- und Festtags";
                            break;
                        default:
                            return ZI_Importer.assertNever(t.Fahrtage);
                    }
                    switch (t.KbsAbweichung.kind) {
                        case SaxParsedTypes_1.KBS_ABWEICHUNG_KEINE:
                            break;
                        case SaxParsedTypes_1.KBS_ABWEICHUNG_AUS:
                            tResult += "von " + t.KbsAbweichung.bhf;
                            break;
                        case SaxParsedTypes_1.KBS_ABWEICHUNG_NACH:
                            tResult += "nach " + t.KbsAbweichung.bhf;
                            break;
                        default:
                            return ZI_Importer.assertNever(t.KbsAbweichung);
                    }
                    switch (t.Bahnverwaltung) {
                        case SaxParsedTypes_1.EBahnverwaltung.NichtAngegeben:
                            break;
                        case SaxParsedTypes_1.EBahnverwaltung.KSaechsStsEB:
                            tResult += "Sächs. Staatsb.";
                            break;
                        default:
                            console.warn("unbekannte Bahnverwaltung in zusatzinfobase: wie soll man das rendern ?!");
                    }
                    return tResult;
                };
                return ZI_Renderer;
            }());
            exports_4("ZI_Renderer", ZI_Renderer);
        }
    };
});
System.register("SaxValidator", ["SaxParsedTypes", "SaxInputTypes", "SaxBaseTypes"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var SaxParsedTypes_2, SaxInputTypes_1, SaxBaseTypes_2, Validator;
    return {
        setters: [
            function (SaxParsedTypes_2_1) {
                SaxParsedTypes_2 = SaxParsedTypes_2_1;
            },
            function (SaxInputTypes_1_1) {
                SaxInputTypes_1 = SaxInputTypes_1_1;
            },
            function (SaxBaseTypes_2_1) {
                SaxBaseTypes_2 = SaxBaseTypes_2_1;
            }
        ],
        execute: function () {
            Validator = (function () {
                function Validator() {
                }
                Validator.validate_mergeBlocks = function (s) {
                    var tUnprocessedBlocks = [];
                    var tProcessedBlocks = [];
                    var tAlreadyProcessedKeys = [];
                    s.Zeilen.forEach(function (z, zeileidx) {
                        switch (z.kind) {
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_2.ZEILE_T.NORMAL:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxParsedTypes_2.ZEILE_T.ZUGNR:
                            case SaxParsedTypes_2.ZEILE_T.KLASSEN:
                                var tEintraege = [];
                                if (z.kind == SaxParsedTypes_2.ZEILE_T.ZUGNR) {
                                    tEintraege = z.ZugNummern;
                                }
                                if (z.kind == SaxParsedTypes_2.ZEILE_T.KLASSEN) {
                                    tEintraege = z.KlassenNummern;
                                }
                                if ((z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_AB)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_IN)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.NORMAL)) {
                                    tEintraege = z.Zeiteintraege;
                                }
                                tEintraege.forEach(function (zi, spalteidx) {
                                    switch (zi.kind) {
                                        case SaxParsedTypes_2.BLOCK_T.BLOCK:
                                            tUnprocessedBlocks.push({ eintrag: zi, zeile: zeileidx, spalte: spalteidx, alreadyDone: false });
                                            console.log("push ", spalteidx, zeileidx);
                                            break;
                                        case SaxParsedTypes_2.BLOCK_T.ANKUNFT:
                                        case SaxParsedTypes_2.BLOCK_T.ZEITEINTRAG:
                                        case SaxParsedTypes_2.BLOCK_T.LEER:
                                        case SaxParsedTypes_2.BLOCK_T.KEINHALT:
                                        case SaxParsedTypes_2.BLOCK_T.DICKERSTRICH:
                                        case SaxParsedTypes_2.BLOCK_T.ERROR:
                                            break;
                                        default:
                                            return SaxBaseTypes_2.assertNever(zi);
                                    }
                                });
                                break;
                            default:
                                return SaxBaseTypes_2.assertNever(z);
                        }
                    });
                    var FindEntry = function (arr, suchspalte, suchzeile) {
                        var tResult = null;
                        for (var i = 0; i < arr.length; i++) {
                            if ((arr[i] != null) && (arr[i].spalte == suchspalte) && (arr[i].zeile == suchzeile)) {
                                tResult = arr[i];
                                break;
                            }
                        }
                        return tResult;
                    };
                    tUnprocessedBlocks.forEach(function (startblock) {
                        if (startblock.alreadyDone)
                            return;
                        console.log("process");
                        if (startblock.eintrag.Referenzkey == undefined) {
                            console.log("block without refkey");
                        }
                        else if (tAlreadyProcessedKeys.indexOf(startblock.eintrag.Referenzkey) < 0) {
                            startblock.eintrag.Start = true;
                            startblock.alreadyDone = true;
                            tAlreadyProcessedKeys.push(startblock.eintrag.Referenzkey);
                            console.log("Finding blocksize for ", startblock.eintrag.Referenzkey);
                            var tSuchZeile = startblock.zeile;
                            var tSuchZeileWeiter = true;
                            var tSuchSpalte = startblock.spalte;
                            var tSuchSpalteWeiter = true;
                            var tSuchSpalteMax = startblock.spalte;
                            while (tSuchSpalteWeiter) {
                                tSuchSpalte++;
                                var tAnguck = FindEntry(tUnprocessedBlocks, tSuchSpalte, tSuchZeile);
                                if ((tAnguck != null) && (tAnguck.alreadyDone == false) && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                    startblock.eintrag.Breite++;
                                    tAnguck.alreadyDone = true;
                                    tAnguck.eintrag.Valid = true;
                                    tAnguck.eintrag.Start = false;
                                    tProcessedBlocks.push(tAnguck);
                                }
                                else {
                                    tSuchSpalteWeiter = false;
                                }
                            }
                            console.log("ermittelte Breite: ", startblock.eintrag.Breite);
                            tSuchSpalte = startblock.spalte;
                            while (tSuchZeileWeiter) {
                                tSuchZeile++;
                                var tAnguck = FindEntry(tUnprocessedBlocks, tSuchSpalte, tSuchZeile);
                                console.log(tSuchSpalte, tSuchZeile, tAnguck);
                                if ((tAnguck != null) && (tAnguck.alreadyDone == false) && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                    startblock.eintrag.Hoehe++;
                                    tAnguck.alreadyDone = true;
                                    tAnguck.eintrag.Valid = true;
                                    tAnguck.eintrag.Start = false;
                                    tProcessedBlocks.push(tAnguck);
                                }
                                else {
                                    tSuchZeileWeiter = false;
                                }
                            }
                            console.log("ermittelte Hoehe ", startblock.eintrag.Hoehe);
                            console.log("rechteck pruefen");
                            for (var z = startblock.zeile; z < startblock.zeile + startblock.eintrag.Hoehe; z++) {
                                for (var sp = startblock.spalte; sp < startblock.spalte + startblock.eintrag.Breite; sp++) {
                                    var tAnguck_1 = FindEntry(tUnprocessedBlocks, sp, z);
                                    console.log(sp, z, tAnguck_1);
                                    if ((tAnguck_1 != null) && (true) && (tAnguck_1.eintrag.Referenzkey === startblock.eintrag.Referenzkey) && (tAnguck_1.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                        tAnguck_1.alreadyDone = true;
                                        tAnguck_1.eintrag.Valid = true;
                                        tProcessedBlocks.push(tAnguck_1);
                                        console.log("OK: ", sp, z);
                                    }
                                    else {
                                        console.error("Block validation failed: wrong entry (not wa / sa) in rectangluar area at Zeile ", z, " Spalte ", sp);
                                    }
                                }
                            }
                            tProcessedBlocks.push(startblock);
                        }
                        else {
                            console.warn("Validation error: found entry for already known refkey " + startblock.eintrag.Referenzkey + "!!!");
                        }
                    });
                    return s;
                };
                Validator.validate_addZusatzinfobase = function (s) {
                    var nextFreeMarkerIdx = 0;
                    var freemarker = ["\u26B4", "\u26B5", "\u26B6"];
                    s.ZusatzBloecke.forEach(function (z, idx, arr) {
                        if (z.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.FERN) {
                            if (z.Verweistyp.OpticalMarker == SaxInputTypes_1.chooseown) {
                                z.Verweistyp.OpticalMarker = freemarker[nextFreeMarkerIdx];
                                nextFreeMarkerIdx++;
                            }
                        }
                    });
                    s.Zeilen.forEach(function (z) {
                        switch (z.kind) {
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_2.ZEILE_T.NORMAL:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxParsedTypes_2.ZEILE_T.ZUGNR:
                            case SaxParsedTypes_2.ZEILE_T.KLASSEN:
                                var tEintraege = [];
                                if (z.kind == SaxParsedTypes_2.ZEILE_T.ZUGNR) {
                                    tEintraege = z.ZugNummern;
                                }
                                if (z.kind == SaxParsedTypes_2.ZEILE_T.KLASSEN) {
                                    tEintraege = z.KlassenNummern;
                                    if (z.BlockEintrag) {
                                        var tFound = null;
                                        for (var i = 0; i < s.ZusatzBloecke.length; i++) {
                                            var tBlockZusatz = s.ZusatzBloecke[i];
                                            if (tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.EMBEDDED) {
                                            }
                                            if (tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.FERN || tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.PASSEND) {
                                                if (tBlockZusatz.Verweistyp.ReferenzKey === z.BlockEintrag.Referenzkey) {
                                                    if (tFound == null) {
                                                        tFound = tBlockZusatz;
                                                    }
                                                    else {
                                                        console.warn("zusatzbloecke enthaelt refkey mehrmals x: ", z.BlockEintrag.Referenzkey);
                                                    }
                                                }
                                            }
                                        }
                                        if (tFound) {
                                            z.BlockEintrag.Blockinhalt = tFound;
                                        }
                                        else {
                                            console.warn("x Zusatzinfobase fehlt fuer refkey ", z.BlockEintrag.Referenzkey);
                                        }
                                    }
                                }
                                if ((z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_AB)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_IN)
                                    || (z.kind == SaxParsedTypes_2.ZEILE_T.NORMAL)) {
                                    tEintraege = z.Zeiteintraege;
                                }
                                tEintraege.forEach(function (zi, spalteidx) {
                                    switch (zi.kind) {
                                        case SaxParsedTypes_2.BLOCK_T.BLOCK:
                                            if (zi.Start && zi.Referenzkey) {
                                                var tFound = null;
                                                for (var i = 0; i < s.ZusatzBloecke.length; i++) {
                                                    var tBlockZusatz = s.ZusatzBloecke[i];
                                                    if (tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.EMBEDDED) {
                                                    }
                                                    if (tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.FERN || tBlockZusatz.Verweistyp.kind == SaxParsedTypes_2.VERWEIS_T.PASSEND) {
                                                        if (tBlockZusatz.Verweistyp.ReferenzKey === zi.Referenzkey) {
                                                            if (tFound == null) {
                                                                tFound = tBlockZusatz;
                                                            }
                                                            else {
                                                                console.warn("zusatzbloecke enthaelt refkey mehrmals: ", zi.Referenzkey);
                                                            }
                                                        }
                                                    }
                                                }
                                                if (tFound) {
                                                    zi.Blockinhalt = tFound;
                                                }
                                                else {
                                                    console.warn("x Zusatzinfobase fehlt fuer refkey ", zi.Referenzkey);
                                                }
                                            }
                                            break;
                                        case SaxParsedTypes_2.BLOCK_T.LEER:
                                        case SaxParsedTypes_2.BLOCK_T.DICKERSTRICH:
                                        case SaxParsedTypes_2.BLOCK_T.ERROR:
                                        case SaxParsedTypes_2.BLOCK_T.ANKUNFT:
                                        case SaxParsedTypes_2.BLOCK_T.ZEITEINTRAG:
                                        case SaxParsedTypes_2.BLOCK_T.KEINHALT:
                                            break;
                                        default:
                                            return SaxBaseTypes_2.assertNever(zi);
                                    }
                                });
                                break;
                            default:
                                return SaxBaseTypes_2.assertNever(z);
                        }
                    });
                };
                Validator.validate_move_Anschluss_ZusatzInfo = function (s) {
                    s.Zeilen.forEach(function (z) {
                        switch (z.kind) {
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_2.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                if (z.ZeitZeileZusatzInfo) {
                                    if (z.ZeitZeileZusatzInfo.Ortsname.length > 0) {
                                        z.BhfTag = z.ZeitZeileZusatzInfo.Ortsname;
                                        z.ZeitZeileZusatzInfo.Ortsname = "__MOVED__";
                                    }
                                    else {
                                        console.warn("ANSCHLUSS MUSS ORT HABEN !!!", z);
                                    }
                                }
                            case SaxParsedTypes_2.ZEILE_T.NORMAL:
                                if (z.ZeitZeileZusatzInfo) {
                                    if (z.ZeitZeileZusatzInfo.AnschlussNummern.length > 0) {
                                        z.AnschlussNummern = z.ZeitZeileZusatzInfo.AnschlussNummern;
                                        z.ZeitZeileZusatzInfo.AnschlussNummern = ["_MOVED_"];
                                    }
                                }
                                break;
                            case SaxParsedTypes_2.ZEILE_T.ZUGNR:
                            case SaxParsedTypes_2.ZEILE_T.KLASSEN:
                                break;
                            default:
                                return SaxBaseTypes_2.assertNever(z);
                        }
                    });
                };
                return Validator;
            }());
            exports_5("Validator", Validator);
        }
    };
});
System.register("SaxRenderer", ["SaxParsedTypes", "SaxParser", "SaxBaseTypes"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var SaxSchedulesTyped, SaxParser_1, SaxBaseTypes_3, Renderer;
    return {
        setters: [
            function (SaxSchedulesTyped_1) {
                SaxSchedulesTyped = SaxSchedulesTyped_1;
            },
            function (SaxParser_1_1) {
                SaxParser_1 = SaxParser_1_1;
            },
            function (SaxBaseTypes_3_1) {
                SaxBaseTypes_3 = SaxBaseTypes_3_1;
            }
        ],
        execute: function () {
            Renderer = (function () {
                function Renderer() {
                }
                Renderer.renderTable = function (parentToAppendTo, input) {
                    console.log("render table");
                    var tDiv = document.createElement("div");
                    tDiv.setAttribute("class", "GanzeSeite");
                    var tHeadDiv = document.createElement("div");
                    tHeadDiv.setAttribute("class", "HeadDiv");
                    var tHead1Div = document.createElement("div");
                    tHead1Div.setAttribute("class", "Head1Div");
                    tHeadDiv.appendChild(tHead1Div);
                    var tHeadLeftDiv = document.createElement("div");
                    tHeadLeftDiv.setAttribute("class", "HeadLeftDiv");
                    tHeadLeftDiv.setAttribute("id", "L" + Date.now());
                    tHead1Div.appendChild(tHeadLeftDiv);
                    var tHeadNrDiv = document.createElement("div");
                    tHeadNrDiv.setAttribute("class", "HeadNrDiv");
                    tHeadNrDiv.innerHTML = input.Route1900 + ".";
                    tHead1Div.appendChild(tHeadNrDiv);
                    var tHeadTitleDiv = document.createElement("div");
                    tHeadTitleDiv.setAttribute("class", "HeadTitleDiv");
                    tHeadTitleDiv.innerHTML = input.Ueberschrift + ".";
                    tHead1Div.appendChild(tHeadTitleDiv);
                    var tHeadRightDiv = document.createElement("div");
                    tHeadRightDiv.setAttribute("class", "HeadRightDiv");
                    tHeadRightDiv.setAttribute("id", "R" + Date.now());
                    tHead1Div.appendChild(tHeadRightDiv);
                    var tHead2Div = document.createElement("div");
                    tHead2Div.setAttribute("class", "Head2Div");
                    tHeadDiv.appendChild(tHead2Div);
                    var tHeadRow2Div = document.createElement("div");
                    tHeadRow2Div.setAttribute("class", "HeadRow2Div");
                    tHead2Div.appendChild(tHeadRow2Div);
                    tDiv.appendChild(tHeadDiv);
                    var tTableParentDiv = document.createElement("div");
                    tTableParentDiv.setAttribute("class", "TableParentDiv");
                    tDiv.appendChild(tTableParentDiv);
                    var tVorbildDiv = document.createElement("div");
                    tVorbildDiv.setAttribute("class", "VorbildDiv");
                    tVorbildDiv.setAttribute("id", "vorbild");
                    tTableParentDiv.appendChild(tVorbildDiv);
                    var tTable = document.createElement("table");
                    tTable.setAttribute("class", "Fahrplantabelle");
                    var tTbody = document.createElement("tbody");
                    var tErsteBelegteFahrpreisZeile = -1;
                    var tFahrpreisSpalten = -1;
                    input.Zeilen.forEach(function (z, zidx) {
                        switch (z.kind) {
                            case SaxSchedulesTyped.ZEILE_T.ZUGNR:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxSchedulesTyped.ZEILE_T.NORMAL:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxSchedulesTyped.ZEILE_T.KLASSEN:
                                if (z.ZeitZeileZusatzInfo) {
                                    switch (z.ZeitZeileZusatzInfo.Fahrpreise.kind) {
                                        case SaxSchedulesTyped.FAHRPREIS_T.KEINE_ANGABE:
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.EINFACH_UND_RUECK:
                                            tFahrpreisSpalten = 4;
                                            if (tErsteBelegteFahrpreisZeile < 0) {
                                                tErsteBelegteFahrpreisZeile = zidx;
                                            }
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.AB:
                                            if (tErsteBelegteFahrpreisZeile < 0) {
                                                tErsteBelegteFahrpreisZeile = zidx;
                                            }
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.EINFACH:
                                            tFahrpreisSpalten = 2;
                                            if (tErsteBelegteFahrpreisZeile < 0) {
                                                tErsteBelegteFahrpreisZeile = zidx;
                                            }
                                            break;
                                    }
                                }
                                break;
                        }
                    });
                    var berechneStartEndString = function (ze) {
                        var tResult = "";
                        if ((ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isEnd)) {
                            tResult = " isEnd ";
                        }
                        if ((ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isStart)) {
                            tResult = " isStart ";
                        }
                        return tResult;
                    };
                    var tSpaltenGesamtZahl = 1;
                    var tZeile0 = input.Zeilen[0];
                    if (tZeile0.kind == SaxSchedulesTyped.ZEILE_T.ZUGNR) {
                        tSpaltenGesamtZahl += tZeile0.ZugNummern.length;
                    }
                    else if (tZeile0.kind == SaxSchedulesTyped.ZEILE_T.KLASSEN) {
                        tSpaltenGesamtZahl += tZeile0.KlassenNummern.length;
                    }
                    else {
                        tSpaltenGesamtZahl += tZeile0.Zeiteintraege.length;
                    }
                    input.ZusatzBloecke.forEach(function (zb) {
                        if (zb.Verweistyp.kind == SaxSchedulesTyped.VERWEIS_T.GLOBAL_DEFAULT) {
                            if (zb.TextOrt.kind == SaxSchedulesTyped.TEXTORT_T.GANZESPALTE) {
                                tSpaltenGesamtZahl += zb.TextOrt.Spaltenbreite;
                            }
                        }
                    });
                    tSpaltenGesamtZahl += (tFahrpreisSpalten >= 0) ? tFahrpreisSpalten : 0;
                    console.log("tSpaltenGesamtZahl ", tSpaltenGesamtZahl);
                    var tTypDerLetztenZeile = "";
                    var tErzeugeTrennzeile = function (classe, spalten) {
                        var trenn = document.createElement("tr");
                        trenn.setAttribute("class", classe);
                        for (var i = 0; i < spalten; i++) {
                            var td = document.createElement("td");
                            trenn.appendChild(td);
                            var tDivOut = document.createElement("div");
                            var tDivLine = document.createElement("div");
                            td.appendChild(tDivOut);
                            tDivOut.appendChild(tDivLine);
                        }
                        return trenn;
                    };
                    tTbody.appendChild(tErzeugeTrennzeile("TRENN durchgehend", tSpaltenGesamtZahl));
                    var tSpalteNach = {};
                    input.ZusatzBloecke.forEach(function (zb) {
                        if (zb.Verweistyp.kind == SaxSchedulesTyped.VERWEIS_T.GLOBAL_DEFAULT) {
                            if (zb.TextOrt.kind == SaxSchedulesTyped.TEXTORT_T.GANZESPALTE) {
                                tSpalteNach[zb.TextOrt.UebersprungeneSpalten] = { breite: zb.TextOrt.Spaltenbreite, bl: zb };
                            }
                        }
                    });
                    console.log("tSpalteNach ", tSpalteNach);
                    var tErsteGlobalZeile = true;
                    input.Zeilen.forEach(function (z, zindex) {
                        var tr = document.createElement("tr");
                        switch (z.kind) {
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxSchedulesTyped.ZEILE_T.NORMAL:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxSchedulesTyped.ZEILE_T.ZUGNR:
                            case SaxSchedulesTyped.ZEILE_T.KLASSEN:
                                if ((tTypDerLetztenZeile != z.kind)
                                    && (tTypDerLetztenZeile != SaxSchedulesTyped.ZEILE_T.ZUGNR)
                                    && (tTypDerLetztenZeile != "")) {
                                    var trenncl = "";
                                    if (tTypDerLetztenZeile == SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB) {
                                        trenncl = "TRENN_nachAnschlussAus";
                                    }
                                    else {
                                        trenncl = "TRENN";
                                    }
                                    tTbody.appendChild(tErzeugeTrennzeile(trenncl, tSpaltenGesamtZahl));
                                }
                                tTypDerLetztenZeile = z.kind;
                                tr.setAttribute("class", "ZZZ_" + z.kind);
                                var tdkx = document.createElement("td");
                                tdkx.setAttribute("class", "notImplemented");
                                var tdk = document.createElement("div");
                                tdkx.appendChild(tdk);
                                var tEintraege = [];
                                switch (z.kind) {
                                    case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                    case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                    case SaxSchedulesTyped.ZEILE_T.NORMAL:
                                    case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                    case SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                        var tKm = document.createElement("div");
                                        tKm.setAttribute("class", "KM");
                                        var tBhfSpanClass = "";
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.NORMAL) {
                                            if ((z.Km != undefined) && (z.Km >= 0)) {
                                                tKm.innerHTML += z.Km + " ";
                                                tdk.setAttribute("class", "ErsteSpalteNormal ClassKMVOLL");
                                            }
                                            else {
                                                tdk.setAttribute("class", "ErsteSpalteNormal ClassKMLEER");
                                            }
                                            tdk.appendChild(tKm);
                                            if (z.AnAb == SaxSchedulesTyped.EAnAb.FirstAb) {
                                                tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAb");
                                                tdk.innerHTML += '<div class = "BhfAusClass">aus </div>';
                                                tBhfSpanClass = "ClassAbBhfFirst";
                                            }
                                            if (z.AnAb == SaxSchedulesTyped.EAnAb.FollowAb) {
                                                tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAb");
                                                tBhfSpanClass = "ClassAbBhf";
                                            }
                                            if (z.AnAb == SaxSchedulesTyped.EAnAb.An) {
                                                tdk.setAttribute("class", tdk.getAttribute("class") + " ClassAn");
                                                tdk.innerHTML += '<div class = "BhfInClass">in </div>';
                                                tBhfSpanClass = "ClassInBhf";
                                            }
                                            tdk.innerHTML += "<div class=\"" + tBhfSpanClass + "\">" + z.BhfTag + "</div>";
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "ZubringerAbAus" + "\">" + "aus" + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "ZubringerAbBhf" + "\">" + z.BhfTag + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS zubringer ab");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "ZubringerInI" + "\">" + "i." + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "ZubringerInBhf" + "\">" + z.BhfTag + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS zubringer in");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_AB) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "WeiterAbAus" + "\">" + "a." + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "WeiterAbBhf" + "\">" + z.BhfTag + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS weiter ab");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_IN) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "WeiterIn" + "\">" + "in" + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "WeiterInBhfBhf" + "\">" + z.BhfTag + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS weiter in");
                                        }
                                        if (z.AnschlussNummern.length > 0) {
                                            var tLinien = document.createElement("div");
                                            tLinien.setAttribute("class", "Linien");
                                            tLinien.innerHTML = " " + z.AnschlussNummern.toString();
                                            tdk.appendChild(tLinien);
                                        }
                                        tEintraege = z.Zeiteintraege;
                                        break;
                                    case (SaxSchedulesTyped.ZEILE_T.ZUGNR):
                                        tEintraege = z.ZugNummern;
                                        var tText = document.createElement("div");
                                        tText.setAttribute("class", "ZugNrText");
                                        tText.innerHTML = "Zugs-Nr.";
                                        tdk.appendChild(tText);
                                        break;
                                    case (SaxSchedulesTyped.ZEILE_T.KLASSEN):
                                        tEintraege = z.KlassenNummern;
                                        tdk.innerHTML = "";
                                        if (z.BlockEintrag != null) {
                                            tdk.innerHTML += SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(z.BlockEintrag.Blockinhalt, false);
                                        }
                                        break;
                                }
                                tr.appendChild(tdkx);
                                var tCalcRgba = function (zeb) {
                                    if (zeb.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET) {
                                        var num4 = parseInt(zeb.ZugNr);
                                        var r = Math.floor(num4 / 100);
                                        var g = Math.floor((num4 - r * 100) / 10);
                                        var b = Math.floor(num4 - (r * 100) - (g * 10));
                                        return "rgb(" + 10 * r + "," + 25 * g + "," + 25 * b + ")";
                                    }
                                    else {
                                        return "white";
                                    }
                                };
                                var tRealeSpaltenBisher = 0;
                                tEintraege.forEach(function (ze, zeIndex) {
                                    Renderer.globalespalten(tr, tRealeSpaltenBisher, tErsteGlobalZeile, tSpalteNach);
                                    var tAppendTD = true;
                                    var tdd = document.createElement("td");
                                    var td = document.createElement("div");
                                    tdd.appendChild(td);
                                    switch (ze.kind) {
                                        case SaxSchedulesTyped.BLOCK_T.LEER:
                                            td.innerHTML = ((ze.MitStrich == true) ? "-" : "");
                                            td.title = " Z" + (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.KEINHALT:
                                            td.innerHTML = " | ";
                                            td.title = " Z" + (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.BLOCK:
                                            var tDebugString = "";
                                            td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            if (ze.Valid == false) {
                                                if (ze.Senkrecht) {
                                                    td.setAttribute("class", "blockSenkrecht invalid");
                                                    td.innerHTML = (ze.Referenzkey) ? ze.Referenzkey : "";
                                                }
                                                else {
                                                    td.setAttribute("class", "blockWaagerecht invalid");
                                                    td.innerHTML = (ze.Referenzkey) ? ze.Referenzkey : "";
                                                }
                                            }
                                            else {
                                                if (ze.Senkrecht) {
                                                    td.setAttribute("class", "blockSenkrecht valid");
                                                    var tSenkrechtDiv = document.createElement("div");
                                                    tSenkrechtDiv.innerHTML = (ze.Start ? SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false) : "") + tDebugString;
                                                    tSenkrechtDiv.setAttribute("class", "senkrecht " + "senkOrgBreit-" + ze.Breite + " " + "senkOrgHoch-" + ze.Hoehe);
                                                    td.appendChild(tSenkrechtDiv);
                                                }
                                                else {
                                                    td.setAttribute("class", "blockWaagerecht valid");
                                                    td.innerHTML = (ze.Start ? SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false) : "") + tDebugString;
                                                }
                                            }
                                            console.warn(" !!!! need algo for horizontal multiline zusatzinfo");
                                            if (ze.Start == false) {
                                            }
                                            else {
                                            }
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.ERROR:
                                            console.warn("NormalZeile Erroreintrag not yet implemented");
                                            td.setAttribute("class", "notImplemented");
                                            td.innerHTML = JSON.stringify(ze);
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.ZEITEINTRAG:
                                            if (ze.Zeit.kind == SaxSchedulesTyped.ZEIT_24) {
                                                td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                                td.setAttribute("class", ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Gestern ? "Gestern" :
                                                    ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Heute ? "Heute" :
                                                        ze.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Morgen ? "Morgen" : "UnbekannterTag");
                                                var tSpanRefKey = document.createElement("span");
                                                tSpanRefKey.setAttribute("class", "ZeitRefKey");
                                                tSpanRefKey.innerHTML = ((ze.Referenzkey) ? ze.Referenzkey : "");
                                                var tSpanOpticalMarker = document.createElement("span");
                                                tSpanOpticalMarker.setAttribute("class", "ZeitOptiMarker");
                                                var tOptical = "";
                                                for (var i_1 = 0; i_1 < input.ZusatzBloecke.length; i_1++) {
                                                    var tVerweis = input.ZusatzBloecke[i_1].Verweistyp;
                                                    if (tVerweis.kind == SaxSchedulesTyped.VERWEIS_T.FERN) {
                                                        if (tVerweis.ReferenzKey === ze.Referenzkey) {
                                                            tOptical = tVerweis.OpticalMarker;
                                                        }
                                                    }
                                                }
                                                tSpanOpticalMarker.innerHTML = (tOptical != null) ? SaxParser_1.ZI_Renderer.renderOpticalMarker(tOptical) : "";
                                                var tStunde = ze.Zeit.Stunde24;
                                                var tMinuten = ze.Zeit.Minute24;
                                                var tUnterstrichen = false;
                                                var tSpanStunde = document.createElement("span");
                                                tSpanStunde.setAttribute("class", "ZeitStunde" + (ze.Schnellzug ? " Schnellzug" : "")
                                                    + ((ze.Zeit.Valid === SaxSchedulesTyped.ETimeValid.Nein) ? " TimeInvalid" : ""));
                                                tSpanStunde.innerHTML = ((tStunde < 10) ? "&nbsp;" : "") + tStunde.toString();
                                                var tSpanMinuten = document.createElement("span");
                                                tSpanMinuten.setAttribute("class", "ZeitMinuten" + (ze.Schnellzug ? " Schnellzug" : "") + (tUnterstrichen ? " nachtsUnterstrichen" : ""));
                                                tSpanMinuten.innerHTML = (tMinuten < 10) ? "0" + tMinuten.toString() : tMinuten.toString();
                                                td.appendChild(tSpanRefKey);
                                                td.appendChild(tSpanOpticalMarker);
                                                td.appendChild(tSpanStunde);
                                                td.appendChild(tSpanMinuten);
                                                td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                                td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            }
                                            else {
                                                console.error("Rohzeit sollte beim rendern lange geschichte sein ?!");
                                            }
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.DICKERSTRICH:
                                            td.innerHTML = "DICK";
                                            td.setAttribute("class", "DickStrich");
                                            td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case SaxSchedulesTyped.BLOCK_T.ANKUNFT:
                                            td.innerHTML = "Ank.";
                                            td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        default: return SaxBaseTypes_3.assertNever(ze);
                                    }
                                    if (tAppendTD) {
                                        tr.appendChild(tdd);
                                        tRealeSpaltenBisher++;
                                    }
                                });
                                Renderer.globalespalten(tr, tRealeSpaltenBisher, tErsteGlobalZeile, tSpalteNach);
                                if (z.ZeitZeileZusatzInfo) {
                                    var f = z.ZeitZeileZusatzInfo.Fahrpreise;
                                    switch (f.kind) {
                                        case SaxSchedulesTyped.FAHRPREIS_T.KEINE_ANGABE:
                                            if ((tErsteBelegteFahrpreisZeile > -1) && (zindex > tErsteBelegteFahrpreisZeile)) {
                                                for (var i = 0; i < (tFahrpreisSpalten == 2 ? 1 : 2); i++) {
                                                    var tde = document.createElement("td");
                                                    tde.innerHTML = "" + ".";
                                                    tr.appendChild(tde);
                                                    var tde = document.createElement("td");
                                                    tde.innerHTML = "" + ".";
                                                    tr.appendChild(tde);
                                                }
                                            }
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.AB:
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "ab " + f.AbfahrtsOrt;
                                            tde.setAttribute("colspan", "" + tFahrpreisSpalten);
                                            tr.appendChild(tde);
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.EINFACH:
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Einfach2;
                                            tr.appendChild(tde);
                                            tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Einfach3;
                                            tr.appendChild(tde);
                                            break;
                                        case SaxSchedulesTyped.FAHRPREIS_T.EINFACH_UND_RUECK:
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Einfach2;
                                            tr.appendChild(tde);
                                            tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Einfach3;
                                            tr.appendChild(tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Rueck2;
                                            tr.appendChild(tde);
                                            tde = document.createElement("td");
                                            tde.innerHTML = "" + f.Rueck3;
                                            tr.appendChild(tde);
                                            break;
                                        default:
                                    }
                                }
                                else {
                                    if ((tErsteBelegteFahrpreisZeile > -1) && (zindex > tErsteBelegteFahrpreisZeile)) {
                                        for (var i = 0; i < (tFahrpreisSpalten == 2 ? 1 : 2); i++) {
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild(tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + ".";
                                            tr.appendChild(tde);
                                        }
                                    }
                                }
                                if (tErsteBelegteFahrpreisZeile > -1) {
                                    if (zindex == (tErsteBelegteFahrpreisZeile - 2)) {
                                        if (tFahrpreisSpalten == 2) {
                                            var tde = document.createElement("td");
                                            tde.setAttribute("colspan", "" + 2);
                                            tde.innerHTML = "" + "Einf.";
                                            tr.appendChild(tde);
                                        }
                                        if (tFahrpreisSpalten == 4) {
                                            var tde = document.createElement("td");
                                            tde.setAttribute("colspan", "" + 2);
                                            tde.innerHTML = "" + "Einf.";
                                            tr.appendChild(tde);
                                            var tde = document.createElement("td");
                                            tde.setAttribute("colspan", "" + 2);
                                            tde.innerHTML = "" + "Rueckf.";
                                            tr.appendChild(tde);
                                        }
                                    }
                                    else if (zindex == (tErsteBelegteFahrpreisZeile - 1)) {
                                        for (var i = 0; i < (tFahrpreisSpalten == 2 ? 1 : 2); i++) {
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "II";
                                            tr.appendChild(tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "III";
                                            tr.appendChild(tde);
                                        }
                                    }
                                    else if (zindex < (tErsteBelegteFahrpreisZeile - 2)) {
                                        for (var i = 0; i < (tFahrpreisSpalten == 2 ? 1 : 2); i++) {
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "-";
                                            tr.appendChild(tde);
                                            var tde = document.createElement("td");
                                            tde.innerHTML = "" + "-";
                                            tr.appendChild(tde);
                                        }
                                    }
                                }
                                break;
                            default: return SaxBaseTypes_3.assertNever(z);
                        }
                        tTbody.appendChild(tr);
                        tErsteGlobalZeile = false;
                    });
                    tTbody.appendChild(tErzeugeTrennzeile("TRENN durchgehend", tSpaltenGesamtZahl));
                    tTable.appendChild(tTbody);
                    tTableParentDiv.appendChild(tTable);
                    parentToAppendTo.appendChild(tDiv);
                    input.ZusatzBloecke.forEach(function (zb) {
                        switch (zb.Verweistyp.kind) {
                            case SaxSchedulesTyped.VERWEIS_T.GLOBAL_DEFAULT:
                                switch (zb.TextOrt.kind) {
                                    case SaxSchedulesTyped.TEXTORT_T.LINKSVONHEADER:
                                        console.log("x tHeadLeftDiv ", tHeadLeftDiv);
                                        var e = document.getElementById(tHeadLeftDiv.getAttribute("id"));
                                        if ((e) && (e)) {
                                            e.innerHTML += SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                        }
                                        break;
                                    case SaxSchedulesTyped.TEXTORT_T.RECHTSVONHEADER:
                                        console.log("x tHeadRightDiv ", tHeadRightDiv);
                                        var e = document.getElementById(tHeadRightDiv.getAttribute("id"));
                                        if ((e) && (e)) {
                                            e.innerHTML += SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                        }
                                        break;
                                }
                        }
                        tDiv.innerHTML += JSON.stringify(zb.Verweistyp) + " TextOrt: " + JSON.stringify(zb.TextOrt) + "..." + SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(zb, false) + "<br>";
                    });
                };
                Renderer.globalespalten = function (tr, RealeSpaltenBisherRef, tErsteGlobalzeile, tSpalteNach) {
                    var tTestg = true;
                    while (tTestg) {
                        if (tSpalteNach[RealeSpaltenBisherRef] != undefined) {
                            var tZahlXX = tSpalteNach[RealeSpaltenBisherRef].breite;
                            var tEmpty = SaxParser_1.ZI_Renderer.isEmptyBIBGlobal(tSpalteNach[RealeSpaltenBisherRef].bl);
                            for (var iiii = 0; iiii < tZahlXX; iiii++) {
                                console.log("read+++");
                                var tdkx = document.createElement("td");
                                tdkx.setAttribute("class", tEmpty ? "TEMPTY " : "bla " + tErsteGlobalzeile + iiii + "of" + tZahlXX);
                                var tdk = document.createElement("div");
                                var tdk2 = document.createElement("div");
                                if ((!tEmpty) && (iiii == 0) && (tErsteGlobalzeile)) {
                                    console.log("notempty");
                                    tdk2.innerHTML = SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(tSpalteNach[RealeSpaltenBisherRef].bl, true);
                                }
                                tdkx.appendChild(tdk);
                                tdk.appendChild(tdk2);
                                tr.appendChild(tdkx);
                                RealeSpaltenBisherRef++;
                            }
                        }
                        else {
                            tTestg = false;
                        }
                    }
                };
                return Renderer;
            }());
            exports_6("Renderer", Renderer);
        }
    };
});
System.register("SaxInput", ["SaxInputTypes"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var SaxInputTypes_2, InputData;
    return {
        setters: [
            function (SaxInputTypes_2_1) {
                SaxInputTypes_2 = SaxInputTypes_2_1;
            }
        ],
        execute: function () {
            InputData = (function () {
                function InputData() {
                }
                InputData.einzelplaene = [
                    {
                        route1900: 99,
                        seite: 102,
                        caption: "Annaberg -- Aue -- Werdau",
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.CH, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 639, SaxInputTypes_2._, 902, SaxInputTypes_2._, SaxInputTypes_2._, 1212, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 242, 505, SaxInputTypes_2._, 715, { ort: "Chemnitz", nr: 85 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, SaxInputTypes_2.gnix, 1951, SaxInputTypes_2.gnix, 1861, SaxInputTypes_2.gnix, SaxInputTypes_2.gnix, 1931, 1867, 1933, SaxInputTypes_2.gnix, 1995, SaxInputTypes_2.gnix, SaxInputTypes_2.gnix, 1935, 1869, 1937, SaxInputTypes_2._, 1997, 1939, 1871, 1999],
                            [SaxInputTypes_2._klassen, SaxInputTypes_2.kl, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b3, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b3, SaxInputTypes_2.k2b4],
                            ["Annaberg", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 605, SaxInputTypes_2._, 918, SaxInputTypes_2._, 1126, SaxInputTypes_2._, SaxInputTypes_2._, 226, SaxInputTypes_2._, SaxInputTypes_2.sg, SaxInputTypes_2._, 607, 736, SaxInputTypes_2._, 944],
                            [2.7, "Buchholz", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 613, SaxInputTypes_2._, 930, SaxInputTypes_2._, 1136, SaxInputTypes_2._, SaxInputTypes_2._, 237, SaxInputTypes_2._, SaxInputTypes_2.sg, SaxInputTypes_2._, 619, 749, SaxInputTypes_2._, 954, { nr: 85 }],
                            [8.6, SaxInputTypes_2.WaltersdfHst, SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 630, SaxInputTypes_2._, 947, SaxInputTypes_2._, 1153, SaxInputTypes_2._, SaxInputTypes_2._, 256, SaxInputTypes_2._, SaxInputTypes_2.sg, SaxInputTypes_2._, 636, 808, SaxInputTypes_2._, 1011],
                            ["Schlettau", SaxInputTypes_2.an, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 635, SaxInputTypes_2._, 952, SaxInputTypes_2._, 1158, SaxInputTypes_2._, SaxInputTypes_2._, 301, SaxInputTypes_2._, SaxInputTypes_2.sg, SaxInputTypes_2._, 641, 813, SaxInputTypes_2._, 1016, { nr: "99b" }],
                            [9.9, "Schlettau", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 525, SaxInputTypes_2._, SaxInputTypes_2._, 640, 853, 957, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 306, 320, 610, SaxInputTypes_2.Z1971, SaxInputTypes_2._, 818, 830, SaxInputTypes_2._],
                            [18.3, "Scheibenberg", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 540, SaxInputTypes_2._, SaxInputTypes_2._, 651, 903, 1008, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 317, 341, 621, SaxInputTypes_2.k2b3, SaxInputTypes_2._, 830, 840, SaxInputTypes_2._],
                            [20.8, SaxInputTypes_2.MittwMrkb, SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 710, SaxInputTypes_2.ank, 1027, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 336, SaxInputTypes_2.sf, 639, SaxInputTypes_2.sh, SaxInputTypes_2._, 848, SaxInputTypes_2.ank, SaxInputTypes_2._],
                            [22.2, "Raschau", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 716, SaxInputTypes_2._, 1033, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 342, SaxInputTypes_2.sf, 645, SaxInputTypes_2.sh, SaxInputTypes_2._, 854, SaxInputTypes_2.sk, SaxInputTypes_2._],
                            [24.1, "Grünstädtel", SaxInputTypes_2.an, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 723, SaxInputTypes_2._, 1040, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 349, SaxInputTypes_2.sf, 651, SaxInputTypes_2.sh, SaxInputTypes_2._, 901, SaxInputTypes_2.sk, SaxInputTypes_2._],
                            ["Grünstädtel", SaxInputTypes_2.ab, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 724, SaxInputTypes_2._, 1042, SaxInputTypes_2._, SaxInputTypes_2.Z2045, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 354, SaxInputTypes_2.sf, 652, SaxInputTypes_2.sh, SaxInputTypes_2.Z1967, 903, SaxInputTypes_2.sk, SaxInputTypes_2.Z2065, { nr: "99c" }],
                            [28.8, "Schwarzenberg Bf.", SaxInputTypes_2.an, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 732, SaxInputTypes_2._, 1050, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 402, SaxInputTypes_2.sf, 659, SaxInputTypes_2.sh, SaxInputTypes_2.k2b4, 911, SaxInputTypes_2.sk, SaxInputTypes_2.k2b4, { nr: "100a" }],
                            ["Schwarzenberg Bf.", SaxInputTypes_2.ab, SaxInputTypes_2._, 435, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 739, SaxInputTypes_2._, 1056, SaxInputTypes_2._, 1256, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 416, SaxInputTypes_2.sf, SaxInputTypes_2._, 649, 704, 916, SaxInputTypes_2.sk, 1125],
                            [29.3, "Neuwelt", SaxInputTypes_2.ab, SaxInputTypes_2._, 442, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 746, SaxInputTypes_2._, 1103, SaxInputTypes_2._, SaxInputTypes_2.kHlt, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 423, SaxInputTypes_2.sf, SaxInputTypes_2._, 656, 711, 923, SaxInputTypes_2.sk, 1132],
                            [31.2, "Lauter", SaxInputTypes_2.ab, SaxInputTypes_2._, 548, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 752, SaxInputTypes_2._, 1110, SaxInputTypes_2._, 106, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 429, SaxInputTypes_2.sf, SaxInputTypes_2._, 702, 717, 930, SaxInputTypes_2.sk, 1138],
                            [37.3, "Aue", SaxInputTypes_2.an, SaxInputTypes_2._, 500, SaxInputTypes_2._, SaxInputTypes_2.se, SaxInputTypes_2._, SaxInputTypes_2._, 804, SaxInputTypes_2._, 1122, SaxInputTypes_2._, 117, SaxInputTypes_2.sb, SaxInputTypes_2.sc, 441, SaxInputTypes_2.sf, SaxInputTypes_2._, 713, 728, 942, SaxInputTypes_2.sk, 1150],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, SaxInputTypes_2._, 1951, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1953, SaxInputTypes_2._, 1959, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1865, SaxInputTypes_2._, SaxInputTypes_2._, 1971, 1967, 1969, SaxInputTypes_2.sk, SaxInputTypes_2._],
                            [SaxInputTypes_2._klassen, SaxInputTypes_2.kl, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.k2b3, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.sk, SaxInputTypes_2._],
                            ["Aue", SaxInputTypes_2.ab, SaxInputTypes_2._, 507, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 817, SaxInputTypes_2._, 1141, SaxInputTypes_2._, 118, SaxInputTypes_2._, SaxInputTypes_2._, 505, SaxInputTypes_2._, SaxInputTypes_2._, 715, 732, 1004, SaxInputTypes_2.sk, SaxInputTypes_2._],
                            [41.6, "Niederschlema", SaxInputTypes_2.an, SaxInputTypes_2._, 516, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 826, SaxInputTypes_2._, 1150, SaxInputTypes_2._, 126, SaxInputTypes_2._, SaxInputTypes_2._, 514, SaxInputTypes_2._, SaxInputTypes_2._, 723, 741, 1013, SaxInputTypes_2._, SaxInputTypes_2._],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1978, SaxInputTypes_2._, 2043, 205, 2051, 2053, SaxInputTypes_2._, 2055, SaxInputTypes_2._, 2057, SaxInputTypes_2._, 2059, 2061, SaxInputTypes_2._, 1975, 2047, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._],
                            [SaxInputTypes_2._klassen, SaxInputTypes_2.kl, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2.k1b3, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k3b4, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._],
                            ["Niederschlema", SaxInputTypes_2.ab, SaxInputTypes_2.sl, 518, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 830, SaxInputTypes_2.sd, 1155, SaxInputTypes_2._, 128, SaxInputTypes_2._, SaxInputTypes_2._, 517, SaxInputTypes_2.si, SaxInputTypes_2._, 724, 742, 1019, SaxInputTypes_2._, SaxInputTypes_2._],
                            [47.4, "Stein-Hartenstein", SaxInputTypes_2.ab, SaxInputTypes_2.sl, 528, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 840, SaxInputTypes_2.sd, 1206, SaxInputTypes_2._, 139, SaxInputTypes_2._, SaxInputTypes_2._, 527, SaxInputTypes_2.si, SaxInputTypes_2._, 734, 755, 1029, SaxInputTypes_2._, SaxInputTypes_2._],
                            ["Fährbrücke", SaxInputTypes_2.ab, SaxInputTypes_2.sl, 538, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 849, SaxInputTypes_2.sd, 1216, SaxInputTypes_2._, 148, SaxInputTypes_2._, SaxInputTypes_2._, 537, SaxInputTypes_2.si, SaxInputTypes_2._, 743, 804, 1038, SaxInputTypes_2._, SaxInputTypes_2._],
                            [55.7, "Wiesenburg", SaxInputTypes_2.ab, SaxInputTypes_2.sl, 548, SaxInputTypes_2._, SaxInputTypes_2._, 717, SaxInputTypes_2._, 900, SaxInputTypes_2.sd, 1228, SaxInputTypes_2._, 157, 319, SaxInputTypes_2._, 547, SaxInputTypes_2.si, 635, 752, 813, 1048, SaxInputTypes_2._, SaxInputTypes_2._],
                            ["Silberstrasse", SaxInputTypes_2.ab, SaxInputTypes_2.sl, SaxInputTypes_2.kHlt, SaxInputTypes_2._, SaxInputTypes_2._, 723, SaxInputTypes_2._, SaxInputTypes_2.kHlt, SaxInputTypes_2.sd, SaxInputTypes_2.kHlt, SaxInputTypes_2._, 203, 325, SaxInputTypes_2._, SaxInputTypes_2.kHlt, SaxInputTypes_2.si, 641, SaxInputTypes_2.kHlt, SaxInputTypes_2.kHlt, SaxInputTypes_2.kHlt, SaxInputTypes_2._, SaxInputTypes_2._],
                            [61.8, "Wilkau Bf.", SaxInputTypes_2.ab, 445, 600, 631, SaxInputTypes_2._, 731, 818, 912, 1042, 1242, 124, 212, 334, 443, 600, SaxInputTypes_2.si, 650, 804, 826, 1102, SaxInputTypes_2._, SaxInputTypes_2._, { nr: 96 }],
                            ["Cainsdorf", SaxInputTypes_2.ab, 452, 606, 637, SaxInputTypes_2._, 736, 824, 917, 1048, 1247, 130, 217, 339, 448, 605, SaxInputTypes_2.si, 655, 809, 831, 1108, SaxInputTypes_2._, SaxInputTypes_2._],
                            ["Schedewitz", SaxInputTypes_2.ab, 459, 612, 642, SaxInputTypes_2._, 741, 829, 922, 1053, 1252, 135, 222, 344, 453, 610, SaxInputTypes_2.si, 700, 814, 836, 1114, SaxInputTypes_2._, SaxInputTypes_2._],
                            [67.2, "Zwickau", SaxInputTypes_2.an, 505, 618, 649, SaxInputTypes_2._, SaxInputTypes_2.m747, 835, 928, 1059, 1258, 141, 228, 350, 459, 616, SaxInputTypes_2.si, 706, 820, 842, 1120, SaxInputTypes_2._, SaxInputTypes_2._, { nr: 54 }],
                            ["Zwickau", SaxInputTypes_2.ab, SaxInputTypes_2.a510, 632, 656, SaxInputTypes_2.n822, SaxInputTypes_2._, SaxInputTypes_2._, 948, SaxInputTypes_2.d1153, 115, SaxInputTypes_2._, 235, SaxInputTypes_2.b355, SaxInputTypes_2.c510, 620, 628, 710, 825, 908, 1150, SaxInputTypes_2._, SaxInputTypes_2._, { nrn: [54, 68] }],
                            ["Lichtentanne", SaxInputTypes_2.ab, 520, SaxInputTypes_2.kHlt, 707, SaxInputTypes_2.kHlt, SaxInputTypes_2.wa, SaxInputTypes_2.wa, 958, 1204, 125, SaxInputTypes_2._, 245, 406, 521, SaxInputTypes_2.kHlt, 640, 720, 836, 918, 1200, SaxInputTypes_2._, SaxInputTypes_2._],
                            [76.8, "Werdau", SaxInputTypes_2.an, 530, 647, 716, 835, SaxInputTypes_2.wa, SaxInputTypes_2.wa, 1008, 1212, 135, SaxInputTypes_2._, 254, 416, 529, 635, 655, 730, 845, 925, 1208, SaxInputTypes_2._, SaxInputTypes_2._, { nr: 59 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.LE, 749, SaxInputTypes_2.s810, 925, 1019, SaxInputTypes_2._, SaxInputTypes_2._, 1232, SaxInputTypes_2._, 341, SaxInputTypes_2._, SaxInputTypes_2.s550, 652, SaxInputTypes_2.s748, SaxInputTypes_2.s800, SaxInputTypes_2._, 957, SaxInputTypes_2._, 1205, SaxInputTypes_2.s321, SaxInputTypes_2._, SaxInputTypes_2._, { ort: "Leipzig", nr: 56 }]
                        ],
                        ZellenVerweise: [
                            {
                                cellkey: "a510",
                                zugnr: 2041,
                                klassen: SaxInputTypes_2.k2b4,
                                typ: SaxInputTypes_2.fern,
                                marker: "*"
                            }, {
                                cellkey: "b355",
                                zugnr: 1961,
                                typ: SaxInputTypes_2.fern,
                                marker: SaxInputTypes_2.fatdot
                            }, {
                                cellkey: "c510",
                                zugnr: 1963,
                                typ: SaxInputTypes_2.fern,
                                marker: "?"
                            },
                            {
                                cellkey: "d1153",
                                zugnr: 1957,
                                typ: SaxInputTypes_2.fern,
                                marker: "!"
                            },
                            {
                                key: "e", nach: "Stollberg", typ: SaxInputTypes_2.passend
                            }, {
                                key: "f", nach: "Stollberg", typ: SaxInputTypes_2.passend,
                            }, {
                                key: "g",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                key: "h",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                key: "i",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.nur_werktags
                            },
                            {
                                key: "k",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                key: "l",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.nur_werktags
                            },
                            {
                                cellkey: "m747",
                                typ: SaxInputTypes_2.pfeilstart,
                                destcellkey: "n822"
                            },
                            {
                                cellkey: "n822",
                                typ: SaxInputTypes_2.pfeilziel,
                                srccellkey: "m747"
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            }
                        ]
                    },
                    {
                        todo: "fehlende sa-sl texte/bedeutungen",
                        route1900: 99,
                        seite: 103,
                        caption: "Werdau--Aue--Annaberg",
                        "zeilen": [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.LE, 1140, SaxInputTypes_2.s113, SaxInputTypes_2._, SaxInputTypes_2._, 500, SaxInputTypes_2.s710, SaxInputTypes_2._, SaxInputTypes_2.s845, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.s1058, SaxInputTypes_2._, 108, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 350, SaxInputTypes_2._, SaxInputTypes_2.s748, 720, SaxInputTypes_2._, { ort: "Leipzig", nr: 56 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1952, 2042, 2052, 1954, 1956, 1958, 2056, 2044, 2058, SaxInputTypes_2._, 1962, "1962a", 1964, 1966, 2062, 2046, 1968, 1976, 2048, 1972, 1970],
                            [SaxInputTypes_2.wx, SaxInputTypes_2.kl, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b3, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2._, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k3b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4],
                            ["Werdau", SaxInputTypes_2.ab, SaxInputTypes_2.x135, 545, SaxInputTypes_2._, SaxInputTypes_2.sp, 726, 834, SaxInputTypes_2._, 1005, SaxInputTypes_2._, SaxInputTypes_2._, 1222, 126, 311, 426, SaxInputTypes_2._, 504, 622, 736, 912, 940, 1029],
                            ["Lichtentanne", SaxInputTypes_2.ab, SaxInputTypes_2.kHlt, 556, SaxInputTypes_2._, SaxInputTypes_2.sp, 739, SaxInputTypes_2.kHlt, SaxInputTypes_2._, 1017, SaxInputTypes_2._, SaxInputTypes_2._, 1233, 135, 320, SaxInputTypes_2.kHlt, SaxInputTypes_2._, 515, 635, 748, 923, 951, 1039],
                            [9.6, "Zwickau", SaxInputTypes_2.an, SaxInputTypes_2.x150, 605, SaxInputTypes_2._, SaxInputTypes_2.sp, 749, 848, SaxInputTypes_2._, 1026, SaxInputTypes_2._, SaxInputTypes_2._, 1243, 142, 327, 444, SaxInputTypes_2._, 524, 645, 757, 932, 1000, 1048, { nr: 54 }],
                            ["Zwickau", SaxInputTypes_2.ab, 515, 608, 635, 644, SaxInputTypes_2.a754, 858, 1018, 1114, 1220, SaxInputTypes_2._, 123, SaxInputTypes_2.b233, 335, SaxInputTypes_2._, 422, 558, 701, 759, SaxInputTypes_2.c937, 1053, SaxInputTypes_2.sc, { nrn: [54, 68] }],
                            ["Schedewitz", SaxInputTypes_2.ab, 522, 615, 642, 653, 801, 905, 1025, 1121, 1227, SaxInputTypes_2._, 131, 240, 342, SaxInputTypes_2._, 429, 605, 709, 807, 944, 1059, SaxInputTypes_2.sc],
                            ["Cainsdorf", SaxInputTypes_2.ab, 528, 620, 647, 659, 806, 911, 1030, 1126, 1232, SaxInputTypes_2._, 137, 245, 348, SaxInputTypes_2._, 434, 610, 716, 814, 949, 1104, SaxInputTypes_2.sc],
                            [15.2, "Wilkau", SaxInputTypes_2.ab, 535, 625, 652, 706, 811, 919, 1035, 1131, 1237, SaxInputTypes_2._, 145, 250, 355, SaxInputTypes_2._, 438, 615, 723, 819, 955, 1111, SaxInputTypes_2.sc, { nr: 96 }],
                            ["Silberstrasse", SaxInputTypes_2.ab, SaxInputTypes_2.kHlt, SaxInputTypes_2.Ank, 701, SaxInputTypes_2.kHlt, SaxInputTypes_2.Ank, SaxInputTypes_2.kHlt, SaxInputTypes_2.Ank, 1140, SaxInputTypes_2.Ank, SaxInputTypes_2._, SaxInputTypes_2.kHlt, 259, SaxInputTypes_2.kHlt, SaxInputTypes_2._, SaxInputTypes_2.Ank, 623, SaxInputTypes_2.kHlt, SaxInputTypes_2.Ank, 1004, SaxInputTypes_2.kHlt, SaxInputTypes_2.sc],
                            [21.1, "Wiesenburg", SaxInputTypes_2.ab, 550, SaxInputTypes_2._, 706, 719, SaxInputTypes_2.sa, 932, SaxInputTypes_2._, 1146, SaxInputTypes_2._, SaxInputTypes_2._, 159, 304, 408, SaxInputTypes_2._, SaxInputTypes_2._, 628, 735, SaxInputTypes_2.sf, 1010, 1122, SaxInputTypes_2.sc],
                            ["Fährbrücke", SaxInputTypes_2.ab, 600, SaxInputTypes_2._, SaxInputTypes_2.Ank, 729, SaxInputTypes_2.sa, 942, SaxInputTypes_2._, 1155, SaxInputTypes_2._, SaxInputTypes_2._, 210, SaxInputTypes_2.ank, 418, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.Ank, 744, SaxInputTypes_2.sf, 1019, 1132, SaxInputTypes_2.sc],
                            [29.4, "Stein-Hartenstein", SaxInputTypes_2.ab, 610, SaxInputTypes_2._, SaxInputTypes_2._, 739, SaxInputTypes_2.sa, 953, SaxInputTypes_2.Z1960, 1204, SaxInputTypes_2._, SaxInputTypes_2._, 221, SaxInputTypes_2.sb, 428, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 754, SaxInputTypes_2.sf, 1028, 1141, SaxInputTypes_2.sc],
                            [35.2, "Niederschlema", SaxInputTypes_2.an, 621, SaxInputTypes_2._, SaxInputTypes_2._, 749, SaxInputTypes_2.sa, 1004, SaxInputTypes_2.k2b4, 1214, SaxInputTypes_2._, SaxInputTypes_2._, 232, SaxInputTypes_2.sb, 439, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 804, SaxInputTypes_2.sf, 1038, 1151, SaxInputTypes_2._],
                            ["Niederschlema", SaxInputTypes_2.ab, 625, SaxInputTypes_2._, SaxInputTypes_2._, 754, SaxInputTypes_2.sa, 1008, 1110, 1216, SaxInputTypes_2._, SaxInputTypes_2._, 236, SaxInputTypes_2.sb, 443, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 808, SaxInputTypes_2.sf, 1039, 1155, SaxInputTypes_2._, { nr: "99a" }],
                            [39.5, "Aue", SaxInputTypes_2.an, 635, SaxInputTypes_2._, SaxInputTypes_2._, 805, SaxInputTypes_2.sa, 1017, 1118, 1224, SaxInputTypes_2._, SaxInputTypes_2._, 246, SaxInputTypes_2.sb, 453, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 818, SaxInputTypes_2.sf, 1047, 1203, SaxInputTypes_2._, { nr: 94 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1932, SaxInputTypes_2.gnix, 1862, SaxInputTypes_2.gnix, SaxInputTypes_2.sa, 1934, SaxInputTypes_2.gnix, 2044, 1936, 1868, 1938, SaxInputTypes_2.sb, 1964, 5658, 1870, SaxInputTypes_2.gnix, 1940, SaxInputTypes_2.gnix, 2064, 1972, 1872],
                            [SaxInputTypes_2._klassen, SaxInputTypes_2.kl, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.sa, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b3, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.sb, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b3, SaxInputTypes_2.k2b3, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.gnix, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4, SaxInputTypes_2.k2b4],
                            ["Aue", SaxInputTypes_2.ab, 642, SaxInputTypes_2._, SaxInputTypes_2._, 816, SaxInputTypes_2.sa, 1025, SaxInputTypes_2._, 1225, SaxInputTypes_2.sh, SaxInputTypes_2.sj, 302, SaxInputTypes_2.sb, 501, SaxInputTypes_2._, SaxInputTypes_2.sk, SaxInputTypes_2._, 833, SaxInputTypes_2._, 1050, 1208, SaxInputTypes_2.sl, { nr: 94 }],
                            [45.6, "Lauter", SaxInputTypes_2.ab, 655, SaxInputTypes_2._, SaxInputTypes_2._, 829, SaxInputTypes_2.sa, 1037, SaxInputTypes_2._, 1237, SaxInputTypes_2.sh, SaxInputTypes_2.sj, 315, SaxInputTypes_2.sb, 514, SaxInputTypes_2._, SaxInputTypes_2.sk, SaxInputTypes_2._, 846, SaxInputTypes_2._, 1103, 1222, SaxInputTypes_2.sl],
                            [47.5, "Neuwelt", SaxInputTypes_2.ab, 701, SaxInputTypes_2._, SaxInputTypes_2._, 835, SaxInputTypes_2.sa, 1044, SaxInputTypes_2._, SaxInputTypes_2.kHlt, SaxInputTypes_2.sh, SaxInputTypes_2.sj, 322, SaxInputTypes_2.sb, 520, SaxInputTypes_2._, SaxInputTypes_2.sk, SaxInputTypes_2._, 853, SaxInputTypes_2._, 1109, 1228, SaxInputTypes_2.sl],
                            [50.0, "Schwarzenberg", SaxInputTypes_2.an, 708, SaxInputTypes_2._, SaxInputTypes_2._, 842, SaxInputTypes_2.sa, 1052, SaxInputTypes_2._, 1246, SaxInputTypes_2.sh, SaxInputTypes_2.sj, 330, SaxInputTypes_2.sb, 527, SaxInputTypes_2._, SaxInputTypes_2.sk, SaxInputTypes_2._, 901, SaxInputTypes_2._, 1117, 1235, SaxInputTypes_2.sl],
                            ["Schwarzenberg", SaxInputTypes_2.ab, 714, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sa, 1058, SaxInputTypes_2._, SaxInputTypes_2._, 1251, SaxInputTypes_2.sj, 336, SaxInputTypes_2.sb, SaxInputTypes_2._, 532, SaxInputTypes_2.sk, SaxInputTypes_2._, 911, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sl, { nr: "110a" }],
                            [52.7, "Gruenstaedtel", SaxInputTypes_2.an, 722, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sa, 1106, SaxInputTypes_2._, SaxInputTypes_2._, 1258, SaxInputTypes_2.sj, 344, SaxInputTypes_2.sb, SaxInputTypes_2._, 540, SaxInputTypes_2.sk, SaxInputTypes_2._, 919, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sl],
                            ["Gruenstaedtel", SaxInputTypes_2.ab, 723, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1107, SaxInputTypes_2._, SaxInputTypes_2._, 1259, SaxInputTypes_2.sj, 349, SaxInputTypes_2.sb, SaxInputTypes_2._, 541, SaxInputTypes_2.sk, SaxInputTypes_2._, 921, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sl, { nr: "99c" }],
                            [54.6, "Raschau", SaxInputTypes_2.ab, 731, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1115, SaxInputTypes_2._, SaxInputTypes_2._, 105, SaxInputTypes_2.sj, 358, SaxInputTypes_2.sb, SaxInputTypes_2._, 549, SaxInputTypes_2.sk, SaxInputTypes_2._, 929, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sl],
                            [56.0, "Mittweida", SaxInputTypes_2.ab, 737, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.dick, 1121, SaxInputTypes_2._, SaxInputTypes_2._, 111, SaxInputTypes_2.gnix, 406, SaxInputTypes_2.sb, SaxInputTypes_2._, 557, SaxInputTypes_2.sk, SaxInputTypes_2.dick, 937, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sl],
                            [63.5, "Scheibenberg", SaxInputTypes_2.ab, 800, SaxInputTypes_2._, 830, SaxInputTypes_2._, SaxInputTypes_2.Z1991, 1145, SaxInputTypes_2._, SaxInputTypes_2._, 128, 132, 431, SaxInputTypes_2._, SaxInputTypes_2._, 630, 750, SaxInputTypes_2.Z1998, 1002, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1055, { nr: 100 }],
                            [68.9, "Schlettau", SaxInputTypes_2.an, 810, SaxInputTypes_2._, 840, SaxInputTypes_2._, SaxInputTypes_2.k2b4, 1155, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.Ank, 142, 442, SaxInputTypes_2._, SaxInputTypes_2._, 642, 800, SaxInputTypes_2.k2b4, 1012, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1105],
                            ["Schlettau", SaxInputTypes_2.ab, 818, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 955, 1200, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sm, SaxInputTypes_2.m149, 447, SaxInputTypes_2._, SaxInputTypes_2._, 654, SaxInputTypes_2._, 815, 1017, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, { nr: "99b" }],
                            [68.2, "Waltersdorf Hst", SaxInputTypes_2.ab, 824, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1001, 1206, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sm, 155, 453, SaxInputTypes_2._, SaxInputTypes_2._, 700, SaxInputTypes_2._, 821, 1023, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._],
                            [74.1, "Buchholz", SaxInputTypes_2.ab, 843, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1020, 1225, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sm, 214, 516, SaxInputTypes_2._, SaxInputTypes_2._, 724, SaxInputTypes_2._, 840, 1044, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, { nr: 85 }],
                            [76.8, "Annaberg", SaxInputTypes_2.an, 850, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 1027, 1232, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2.sm, 222, 524, SaxInputTypes_2._, SaxInputTypes_2._, 736, SaxInputTypes_2._, 847, 1052, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.CH, 1133, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 205, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, 513, 829, SaxInputTypes_2._, SaxInputTypes_2._, 1202, SaxInputTypes_2._, 1202, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, SaxInputTypes_2._, { ort: "Chemnitz", nr: 85 }]
                        ],
                        ZellenVerweise: [
                            {
                                key: "x",
                                zugnr: 218,
                                klassen: SaxInputTypes_2.k1b3,
                                typ: SaxInputTypes_2.fern,
                                marker: "*"
                            },
                            {
                                key: "p",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                cellkey: "c937",
                                ab: "Zwickau",
                                zugnr: 2064,
                                klassen: SaxInputTypes_2.k2b4,
                                typ: SaxInputTypes_2.fern,
                                marker: SaxInputTypes_2.cross
                            },
                            {
                                cellkey: "a754",
                                ab: "Zwickau",
                                zugnr: 2054,
                                klassen: SaxInputTypes_2.k2b4,
                                typ: SaxInputTypes_2.fern,
                                marker: "!"
                            },
                            {
                                key: "f",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.nur_werktags
                            },
                            {
                                cellkey: "b233",
                                ab: "Zwickau",
                                zugnr: 2060,
                                klassen: SaxInputTypes_2.k2b4,
                                typ: SaxInputTypes_2.fern,
                                marker: SaxInputTypes_2.fatdot
                            },
                            {
                                key: "h",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                key: "j", von: "Stollberg", typ: SaxInputTypes_2.passend,
                            },
                            {
                                key: "k",
                                typ: SaxInputTypes_2.passend,
                                tage: SaxInputTypes_2.sonn_und_festtags
                            },
                            {
                                key: "l", von: "Stollberg", typ: SaxInputTypes_2.passend,
                            },
                            {
                                cellkey: "m149",
                                zugnr: 1996,
                                typ: SaxInputTypes_2.fern,
                                marker: SaxInputTypes_2.chooseown
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            }
                        ]
                    },
                    {
                        route1900: "99a",
                        seite: 104,
                        caption: "Schneeberg-Neustädtel--Niederschlema",
                        zeilen: [
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017],
                            ["Schneeberg-Neust.", SaxInputTypes_2.ab, 449, 753, 914, 1040, 100, 409, 710, 934, 1119],
                            [3.1, "Oberschlema", SaxInputTypes_2.ab, 504, 810, 932, 1057, 115, 426, 725, 949, 1134, { fk: [20, 15, 25, 20] }],
                            [5.2, "Niederschlema", SaxInputTypes_2.an, 513, 819, 941, 1106, 124, 435, 734, 958, 1143, { nr: 99, fk: [35, 25, 45, 30] }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.ZW, 618, 928, SaxInputTypes_2.nix, 1258, 228, 616, 842, 1120, SaxInputTypes_2.nix, { ort: "Zwickau", fk: [190, 130, 250, 170] }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.SC, 708, SaxInputTypes_2.nix, 1052, 1246, 330, 527, 901, 1117, 1235, { ort: "Schwarzenberg", fk: [120, 80, 160, 110] }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.nach9spalten
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach10spalten4spalten
                            }
                        ]
                    },
                    {
                        route1900: "99a",
                        seite: 104,
                        klassen: SaxInputTypes_2.k2b4,
                        caption: "Niederschlema -- Schneeberg-Neustädtel",
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.ZW, 515, SaxInputTypes_2.a644, 858, 1114, 123, 335, 701, 937, 1053, { ort: "Zwickau" }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.SC, 435, 739, SaxInputTypes_2.nix, 1056, 1256, 416, 704, 916, SaxInputTypes_2.nix, { ort: "Schwarzenberg" }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, { fkab: SaxInputTypes_2.SC }],
                            ["Niederschlema", SaxInputTypes_2.ab, 628, 834, 1010, 1219, 242, 519, 819, 1044, 1157, { fk: [90, 60, 120, 80] }],
                            ["Oberschlema", SaxInputTypes_2.ab, 639, 845, 1021, 1229, 253, 530, 829, 1054, 1207, { fk: [105, 70, 140, 95] }],
                            ["Schneeberg-Neust.", SaxInputTypes_2.an, 653, 859, 1035, 1243, 307, 544, 843, 1108, 1221, { fk: [120, 80, 160, 110] }]
                        ],
                        ZellenVerweise: [
                            {
                                key: "a",
                                tage: SaxInputTypes_2.sonn_und_festtags,
                                typ: SaxInputTypes_2.fern,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.nach9spalten
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach10spalten4spalten
                            }
                        ]
                    },
                    {
                        "route1900": "99b",
                        caption: "Obercrottendorf--Schlettau",
                        seite: 104,
                        zeilen: [
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1982, 1984, 1986, 1988],
                            ["Obercrottendorf", SaxInputTypes_2.ab, 725, 908, 106, 731],
                            [1.3, "Mittelcrottendorf", SaxInputTypes_2.ab, 734, 917, 114, 738, { fk: [15, 10] }],
                            [3.9, "Waltersdorf Haltept.", SaxInputTypes_2.ab, 746, 929, 126, 750, { fk: [25, 20] }],
                            [5.2, "Waltersdorf Haltest.", SaxInputTypes_2.ab, 754, 937, 133, 758, { fk: [35, 25] }],
                            [6.5, "Schlettau", SaxInputTypes_2.an, 800, 943, 139, 804, { fk: [40, 30] }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.AN, 850, 1027, 222, 847, { ort: "Annaberg", nr: 99, fk: [85, 60] }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten
                            }
                        ]
                    },
                    {
                        route1900: "99b",
                        caption: "Schlettau -- Obercrottendorf",
                        seite: 104,
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.AN, 605, SaxInputTypes_2.nix, 1126, 607, { ort: "Annaberg", nr: 99 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1981, 1983, 1985, 1987],
                            ["Schlettau", SaxInputTypes_2.ab, 638, 826, 1206, 649, { fkab: "Schlettau" }],
                            [1.3, "Waltersdorf Haltest.", SaxInputTypes_2.ab, 646, 833, 1214, 656, { fk: [15, 10] }],
                            [2.6, "Waltersdorf Haltept.", SaxInputTypes_2.ab, 653, 840, 1221, 703, { fk: [20, 15] }],
                            [5.2, "Mittelcrottendorf", SaxInputTypes_2.ab, 708, 853, 1234, 715, { fk: [35, 25] }],
                            [6.5, "Obercrottendorf", SaxInputTypes_2.an, 714, 859, 1240, 721, { fk: [40, 30] }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten
                            }
                        ]
                    },
                    {
                        route1900: "99c",
                        caption: "Oberrittersgrün -- Grünstädtel",
                        seite: 104,
                        zeilen: [
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 3101, 3103, 3105, 3107, 3109, SaxInputTypes_2.sa],
                            ["Oberrittersgrün", SaxInputTypes_2.ab, 623, 954, 249, 455, 811, SaxInputTypes_2.sa],
                            [2.2, "Unterrittersgrün", SaxInputTypes_2.ab, 632, 1003, 258, 504, 820, SaxInputTypes_2.sa],
                            [3.0, "Oberglobenstein", SaxInputTypes_2.ab, 637, 1008, 303, 509, 825, SaxInputTypes_2.sa],
                            [4.0, "Niederglobenstein", SaxInputTypes_2.ab, 643, 1014, 309, 514, 831, SaxInputTypes_2.sa],
                            [5.8, "Siegelhof", SaxInputTypes_2.ab, 652, 1023, 318, 523, 840, SaxInputTypes_2.sa],
                            [7.0, "Pöhla", SaxInputTypes_2.ab, 701, 1031, 326, 530, 847, SaxInputTypes_2.sa],
                            [9.4, "Grünstädtel", SaxInputTypes_2.an, 708, 1038, 333, 537, 854, SaxInputTypes_2.sa],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.SC, 732, 1050, 402, SaxInputTypes_2.a659, 911, SaxInputTypes_2.sa, { ort: "Schwarzenberg", nr: 99 }]
                        ], ZellenVerweise: [
                            {
                                key: "a",
                                typ: SaxInputTypes_2.fern,
                                tage: SaxInputTypes_2.sonn_und_festtags,
                                marker: "*"
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b3,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach6spalten
                            }
                        ]
                    },
                    {
                        route1900: "99c",
                        seite: 104,
                        caption: "Grünstädtel-- Oberrittersgrün",
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.SC, 714, 1058, 336, 532, 911, { ort: "Schwarzenberg", nr: 99 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 3102, 3104, 3106, 3108, 3110],
                            ["Grünstädtel", SaxInputTypes_2.ab, 735, 1110, 355, 605, 922, { fkab: "Grünstädtel" }],
                            [2.4, "Pöhla", SaxInputTypes_2.ab, 747, 1121, 405, 617, 932, { fk: [15, 10] }],
                            [3.6, "Siegelhof", SaxInputTypes_2.ab, 756, 1128, 412, 626, 939, { fk: [25, 15] }],
                            [5.4, "Niederglobenstein", SaxInputTypes_2.ab, 805, 1137, 421, 635, 948, { fk: [35, 25] }],
                            [6.4, "Oberglobenstein", SaxInputTypes_2.ab, 811, 1143, 427, 641, 954, { fk: [45, 30] }],
                            [7.2, "Unterrittersgrün", SaxInputTypes_2.ab, 816, 1148, 432, 646, 959, { fk: [45, 30] }],
                            [9.4, "Oberrittersgrün", SaxInputTypes_2.ab, 824, 1156, 440, 654, 1007, { fk: [60, 40] }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b3,
                                verweisort: SaxInputTypes_2.headerrechts
                            }
                        ]
                    },
                    {
                        route1900: "100",
                        caption: "(Annaberg)--Scheibenberg - Zwoenitz - Stollberg hin",
                        seite: 105,
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.AN, SaxInputTypes_2.nix, SaxInputTypes_2.nix, 918, 226, 736, SaxInputTypes_2.sa, { ort: "Annaberg", nr: 99 }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.SC, 525, SaxInputTypes_2.nix, 957, 320, SaxInputTypes_2.a818, SaxInputTypes_2.sa, { ort: "Schlettau", nr: 99 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1861, 1865, 1867, 1869, 1871, SaxInputTypes_2.sa],
                            ["Scheibenberg", SaxInputTypes_2.ab, 540, SaxInputTypes_2.nix, 1018, 341, 845, SaxInputTypes_2.sa, { fkab: "Scheibenberg" }],
                            ["Hermannsdorf", SaxInputTypes_2.ab, 553, SaxInputTypes_2.nix, 1032, 356, 859, SaxInputTypes_2.sa, { fk: [30, 20, 40, 30] }],
                            ["Elterlein", SaxInputTypes_2.ab, 607, SaxInputTypes_2.nix, 1046, 412, 913, SaxInputTypes_2.sa, { fk: [50, 35, 65, 45] }],
                            ["Grünhain", SaxInputTypes_2.ab, 627, SaxInputTypes_2.nix, 1105, 433, 931, SaxInputTypes_2.sa, { fk: [85, 55, 110, 75] }],
                            ["Beierfeld", SaxInputTypes_2.ab, 635, SaxInputTypes_2.nix, 1113, 443, 939, SaxInputTypes_2.sa, { fk: [95, 65, 125, 85] }],
                            ["Bernsbach", SaxInputTypes_2.ab, 648, SaxInputTypes_2.nix, 1127, 502, 952, SaxInputTypes_2.sa, { fk: [110, 75, 150, 100] }],
                            ["Zwönitz", SaxInputTypes_2.an, 709, SaxInputTypes_2.nix, 1148, 523, 1013, SaxInputTypes_2.sa, { fk: [170, 110, 220, 150] }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.CT, 1015, SaxInputTypes_2.nix, 118, 702, 1140, SaxInputTypes_2.sa, { ort: "Chemnitz via Thalheim", nr: 94, fk: [380, 260, 510, 340] }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.AU, 511, 821, 1126, 500, 953, SaxInputTypes_2.sa, { ort: "Aue", nr: 94 }],
                            ["Zwönitz", SaxInputTypes_2.ab, 728, 1000, 1208, 540, 1032, SaxInputTypes_2.sa],
                            ["Affalter", SaxInputTypes_2.ab, 744, 1013, 1224, 552, 1044, SaxInputTypes_2.sa],
                            ["Oberdorf-Beutha", SaxInputTypes_2.ab, 800, 1027, 1241, 605, 1058, SaxInputTypes_2.sa],
                            ["Stollberg", SaxInputTypes_2.an, 815, 1042, 1256, 620, 1113, SaxInputTypes_2.sa, { fk: [260, 180, 350, 230] }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.LU, 852, 1216, 258, SaxInputTypes_2.nix, SaxInputTypes_2.nix, SaxInputTypes_2.sa, { ort: "Lugau", nr: 83 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.CN, 1029, SaxInputTypes_2.nix, 223, 816, SaxInputTypes_2.nix, SaxInputTypes_2.sa, { ort: "Chemnitz ü. Neu.", nr: 95 }]
                        ], ZellenVerweise: [
                            {
                                key: "a",
                                typ: "Zeitaenderung",
                                sonnundfeiertagzeit: 830,
                                marker: "*"
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.headerrechts
                            }
                        ]
                    },
                    {
                        route1900: 100,
                        caption: "Stollberg -- Zwoenitz -- Scheibenberg -- (Anaberg) Rueck",
                        seite: 105,
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.CH, SaxInputTypes_2.nix, 533, 908, 105, 648, { ort: "Chemnitz", via: "neuk", nr: 95 }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.LU, 422, 702, SaxInputTypes_2.nix, 148, 426, { ort: "Lugau", nr: 83 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 1862, 1866, 1868, 1870, 1872],
                            ["Stollberg", SaxInputTypes_2.ab, 455, 900, 1100, 325, 830],
                            [6.5, "Oberdorf-Beutha", SaxInputTypes_2.ab, 514, 916, 1116, 344, 845],
                            [11.7, "Affalter", SaxInputTypes_2.ab, 531, 929, 1130, 401, 857],
                            [16.6, "Zwönitz", SaxInputTypes_2.an, 543, 941, 1142, 413, 909],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.AU, 635, 1020, 201, 453, 940, { ort: "Aue", nr: 94 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.CH, 444, SaxInputTypes_2.nix, 928, 303, 750, { ort: "Chemnitz", via: "Thalheim", nr: 94 }],
                            ["Zwönitz", SaxInputTypes_2.ab, 620, SaxInputTypes_2.nix, 1205, 440, 925],
                            [24.5, "Bernsbach", SaxInputTypes_2.ab, 645, SaxInputTypes_2.nix, 1227, 505, 949],
                            [27.4, "Beierfeld", SaxInputTypes_2.ab, 656, SaxInputTypes_2.nix, 1237, 516, 1000],
                            [29.3, "Grünhain", SaxInputTypes_2.ab, 706, SaxInputTypes_2.nix, 1247, 527, 1009],
                            [34.6, "Elterlein", SaxInputTypes_2.ab, 725, SaxInputTypes_2.nix, 103, 547, 1027],
                            [38.0, "Hermannsdorf", SaxInputTypes_2.ab, 736, SaxInputTypes_2.nix, 114, 558, 1038],
                            [42.7, "Scheibenberg", SaxInputTypes_2.an, 749, SaxInputTypes_2.nix, 127, 611, 1051],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.SC, 810, SaxInputTypes_2.nix, 142, 642, 1105, { ort: "Schlettau", nr: 99 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.AN, 850, SaxInputTypes_2.nix, 222, 736, SaxInputTypes_2.nix, { ort: "Annaberg", nr: 99 }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b4,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach5spalten2spalten
                            }
                        ]
                    },
                    {
                        route1900: "100a",
                        seite: 105,
                        caption: "Schwarzenberg -- Johanngeorgenstadt hin",
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.ZW, 515, SaxInputTypes_2.a858, 335, 701, { ort: "Zwickau", nr: 99, lfd: 1 }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.AU, 642, 1025, 501, 833, { ort: "Aue", nr: 99, lfd: 1 }],
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.AN, 605, 918, 226, 736, { ort: "Annaberg", nr: 99, lfd: 1 }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 3112, 3114, 3116, 3118],
                            ["Schwarzenberg", SaxInputTypes_2.ab, 740, 1115, 545, 923],
                            [1.5, "Schwarzenberg Hltp", SaxInputTypes_2.ab, 748, 1123, 554, 931, { fk: [30, 20] }],
                            [3.1, "Erla", SaxInputTypes_2.ab, 755, 1130, 601, 938, { fk: [30, 20] }],
                            [6.7, "Antonsthal", SaxInputTypes_2.ab, 807, 1142, 613, 949, { fk: [50, 30] }],
                            [11.3, "Breitenhof", SaxInputTypes_2.ab, 818, 1153, 624, 1000, { fk: [70, 50] }],
                            [13.2, "Erlabrunn", SaxInputTypes_2.ab, 827, 1202, 633, 1009, { fk: [90, 60] }],
                            [17.3, "Johanngeorgenstadt", SaxInputTypes_2.an, 838, 1213, 645, 1020, { fk: [110, 80] }],
                            [SaxInputTypes_2._anschluss_nach_start, SaxInputTypes_2.JO, 920, 1235, 733, SaxInputTypes_2._, { ort: "Johanngeorgenstadt", NACH: "Karlsbad B.E.B.", lfd: 2 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.KA, 1124, 247, 945, SaxInputTypes_2._, { fk: [430, 230], ort: "Karlsbad B.E.B.", lfd: 2 }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b3,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten2spalten
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten2spalten
                            }
                        ]
                    },
                    {
                        route1900: "100a",
                        seite: 105,
                        todo: "fahrpreise,direkterwagenwerdaukarlsbad rueckrichtung",
                        caption: "Schwarzenberg - johangeorgenstadt zurueck",
                        zeilen: [
                            [SaxInputTypes_2._anschluss_aus, SaxInputTypes_2.KA, SaxInputTypes_2.nix, 700, 1228, 506, { ort: "Karlsbad", nr: "108d" }],
                            [SaxInputTypes_2._anschluss_aus_ziel, SaxInputTypes_2.JO, SaxInputTypes_2.nix, 919, 245, 722, { ort: "Johangeorgenstadt", FROM: SaxInputTypes_2.KA }],
                            [SaxInputTypes_2._zugnr, SaxInputTypes_2.zn, 3111, 3113, 3115, 3117],
                            ["Johanngeorgenstadt", SaxInputTypes_2.an, 608, 946, 315, 759],
                            ["Erlabrunn", SaxInputTypes_2.ab, 619, 957, 326, 810],
                            ["Breitenhof", SaxInputTypes_2.ab, 628, 1006, 335, 819],
                            ["Antonsthal", SaxInputTypes_2.ab, 638, 1016, 345, 829],
                            ["Erla", SaxInputTypes_2.ab, 649, 1027, 356, 840],
                            ["Schwarzenberg Hltp.", SaxInputTypes_2.ab, 655, 1033, 402, 846],
                            ["Schwarzenberg Bf.", SaxInputTypes_2.ab, 703, 1041, 410, 854],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.AU, 804, 1122, 441, 942, { ort: "Aue", nr: 99 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.ZW, 928, 1258, 616, 1120, { ort: "Zwickau", nr: 99 }],
                            [SaxInputTypes_2._anschluss_nach_in, SaxInputTypes_2.AN, 850, 1232, 736, 1052, { ort: "Annaberg", nr: 99 }]
                        ],
                        ZellenVerweise: [
                            {
                                typ: SaxInputTypes_2.global,
                                bahn: SaxInputTypes_2.Sachs,
                                verweisort: SaxInputTypes_2.headerlinks
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                klassen: SaxInputTypes_2.k2b3,
                                verweisort: SaxInputTypes_2.headerrechts
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten2spalten
                            },
                            {
                                typ: SaxInputTypes_2.global,
                                verweisort: SaxInputTypes_2.nach4spalten2spalten
                            }
                        ]
                    }
                ];
                return InputData;
            }());
            exports_7("InputData", InputData);
        }
    };
});
System.register("SaxParsedNachberechnung", ["SaxParsedTypes", "SaxBaseTypes"], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var SaxParsedTypes_3, SaxBaseTypes_4, Nachberechnung, LAUFEINTRAG_NORMAL, LAUFEINTRAG_KEINHALT, LAUFEINTRAG_AN, LAUFEINTRAG_GELOESCHT, LAUFEINTRAG_KOMMEAUSKBS, LAUFEINTRAG_VERLASSENACHKBS, ZugExtraktor;
    return {
        setters: [
            function (SaxParsedTypes_3_1) {
                SaxParsedTypes_3 = SaxParsedTypes_3_1;
            },
            function (SaxBaseTypes_4_1) {
                SaxBaseTypes_4 = SaxBaseTypes_4_1;
            }
        ],
        execute: function () {
            Nachberechnung = (function () {
                function Nachberechnung() {
                }
                Nachberechnung.berechneZugLaeufe = function (s) {
                    var tLen = 0;
                    s.Zeilen.forEach(function (z) {
                        switch (z.kind) {
                            case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                tLen = z.Zeiteintraege.length;
                                break;
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                            case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                                break;
                            default:
                                return SaxBaseTypes_4.assertNever(z);
                        }
                    });
                    for (var sp = 0; sp < tLen; sp++) {
                        var tZugNr = "";
                        var tZugNrRefKey = null;
                        var tZugNrAlt = "";
                        var tZugZweiterStern = false;
                        s.Zeilen.forEach(function (z) {
                            switch (z.kind) {
                                case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                                    var tZNEintrag = z.ZugNummern[sp];
                                    switch (tZNEintrag.kind) {
                                        case SaxParsedTypes_3.BLOCK_T.BLOCK:
                                            if (tZNEintrag.Blockinhalt) {
                                                tZugNr = tZNEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr;
                                                tZNEintrag.BerechneterZugLauf = {
                                                    kind: SaxParsedTypes_3.ZUGLAUF_BERECHNET,
                                                    isStart: false,
                                                    isEnd: false,
                                                    isDeleted: false,
                                                    everyDay: true,
                                                    ZugNr: tZugNr
                                                };
                                            }
                                            else {
                                                tZNEintrag.BerechneterZugLauf = {
                                                    kind: SaxParsedTypes_3.ZUGLAUF_BERECHNET,
                                                    isStart: false,
                                                    isEnd: false,
                                                    isDeleted: false,
                                                    everyDay: true,
                                                    ZugNr: tZugNr
                                                };
                                            }
                                            break;
                                        case SaxParsedTypes_3.BLOCK_T.LEER:
                                        case SaxParsedTypes_3.BLOCK_T.DICKERSTRICH:
                                            tZNEintrag.BerechneterZugLauf = {
                                                kind: SaxParsedTypes_3.ZUGLAUF_BERECHNET,
                                                isStart: false,
                                                isEnd: false,
                                                isDeleted: false,
                                                everyDay: true,
                                                ZugNr: tZugNr
                                            };
                                    }
                                    break;
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                                case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                    var tEintrag = { kind: SaxParsedTypes_3.BLOCK_T.ERROR, Grund: "temp" };
                                    if (z.kind == SaxParsedTypes_3.ZEILE_T.KLASSEN) {
                                        tEintrag = z.KlassenNummern[sp];
                                    }
                                    else {
                                        tEintrag = z.Zeiteintraege[sp];
                                    }
                                    switch (tEintrag.kind) {
                                        case SaxParsedTypes_3.BLOCK_T.ZEITEINTRAG:
                                            if (tEintrag.Referenzkey) {
                                                var tZeitEintrag = tEintrag;
                                                s.ZusatzBloecke.forEach(function (fe) {
                                                    switch (fe.Verweistyp.kind) {
                                                        case SaxParsedTypes_3.VERWEIS_T.FERN:
                                                            if (fe.Verweistyp.ReferenzKey === tZeitEintrag.Referenzkey) {
                                                                if (tZugNrRefKey != null) {
                                                                    tZugZweiterStern = true;
                                                                }
                                                                else {
                                                                    if (fe.ZugNrOderKlasse.Zugnr) {
                                                                        tZugNrAlt = tZugNr;
                                                                        tZugNr = fe.ZugNrOderKlasse.Zugnr;
                                                                        tZugNrRefKey = tZeitEintrag.Referenzkey;
                                                                    }
                                                                }
                                                            }
                                                    }
                                                });
                                            }
                                        case SaxParsedTypes_3.BLOCK_T.LEER:
                                        case SaxParsedTypes_3.BLOCK_T.KEINHALT:
                                        case SaxParsedTypes_3.BLOCK_T.DICKERSTRICH:
                                        case SaxParsedTypes_3.BLOCK_T.KEINHALT:
                                        case SaxParsedTypes_3.BLOCK_T.ANKUNFT:
                                        case SaxParsedTypes_3.BLOCK_T.BLOCK:
                                            if (tEintrag.kind === SaxParsedTypes_3.BLOCK_T.BLOCK) {
                                                if (tEintrag.Blockinhalt) {
                                                    if ((tEintrag.Blockinhalt.Verweistyp.kind === SaxParsedTypes_3.VERWEIS_T.PASSEND) ||
                                                        (tEintrag.Blockinhalt.Verweistyp.kind === SaxParsedTypes_3.VERWEIS_T.EMBEDDED)) {
                                                        if (tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr) {
                                                            tZugNr = tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr;
                                                        }
                                                    }
                                                }
                                            }
                                            tEintrag.BerechneterZugLauf = {
                                                kind: SaxParsedTypes_3.ZUGLAUF_BERECHNET,
                                                isStart: false,
                                                isEnd: false,
                                                isDeleted: false,
                                                everyDay: true,
                                                ZugNr: tZugNr
                                            };
                                            if (tZugZweiterStern) {
                                                tZugZweiterStern = false;
                                                tZugNr = tZugNrAlt;
                                                tZugNrRefKey = null;
                                            }
                                            break;
                                        case SaxParsedTypes_3.BLOCK_T.ERROR:
                                            break;
                                        default:
                                            return SaxBaseTypes_4.assertNever(tEintrag);
                                    }
                                    break;
                                default:
                                    return SaxBaseTypes_4.assertNever(z);
                            }
                        });
                    }
                    for (var sp = 0; sp < tLen; sp++) {
                        var tCurrentZugNr;
                        var tZeilenZahl = s.Zeilen.length;
                        for (var zei = tZeilenZahl - 1; zei >= 0; zei--) {
                            var tZeile = s.Zeilen[zei];
                            switch (tZeile.kind) {
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                                    var tEintrag = { kind: SaxParsedTypes_3.BLOCK_T.ERROR, Grund: "temp" };
                                    if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.KLASSEN) {
                                        tEintrag = tZeile.KlassenNummern[sp];
                                    }
                                    else {
                                        tEintrag = tZeile.Zeiteintraege[sp];
                                    }
                                    if ((tEintrag.kind != SaxParsedTypes_3.BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxParsedTypes_3.ZUGLAUF_BERECHNET)) {
                                        if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)) {
                                            var TEb = tEintrag.BerechneterZugLauf;
                                            if (tEintrag.BerechneterZugLauf.ZugNr) {
                                                tEintrag.BerechneterZugLauf.isEnd = true;
                                            }
                                            tCurrentZugNr = TEb.ZugNr;
                                        }
                                    }
                                    break;
                                case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                            }
                        }
                    }
                    for (var sp = 0; sp < tLen; sp++) {
                        var tCurrentZugNr;
                        var tZeilenZahl = s.Zeilen.length;
                        for (var zei = 0; zei < tZeilenZahl; zei++) {
                            var tZeile = s.Zeilen[zei];
                            switch (tZeile.kind) {
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                                case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                                    var tEintrag = { kind: SaxParsedTypes_3.BLOCK_T.ERROR, Grund: "temp" };
                                    if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.KLASSEN) {
                                        tEintrag = tZeile.KlassenNummern[sp];
                                    }
                                    else if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.ZUGNR) {
                                        tEintrag = tZeile.ZugNummern[sp];
                                    }
                                    else {
                                        tEintrag = tZeile.Zeiteintraege[sp];
                                    }
                                    if ((tEintrag.kind != SaxParsedTypes_3.BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxParsedTypes_3.ZUGLAUF_BERECHNET)) {
                                        if (tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr) {
                                            if (tEintrag.BerechneterZugLauf.ZugNr) {
                                                tEintrag.BerechneterZugLauf.isStart = true;
                                            }
                                            tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    for (var sp = 0; sp < tLen; sp++) {
                        var tNeedEnd = false;
                        var tZeilenZahl = s.Zeilen.length;
                        for (var zei = tZeilenZahl - 1; zei >= 0; zei--) {
                            var tZeile = s.Zeilen[zei];
                            switch (tZeile.kind) {
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                                    var tEintrag = { kind: SaxParsedTypes_3.BLOCK_T.ERROR, Grund: "temp" };
                                    if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.KLASSEN) {
                                        tEintrag = tZeile.KlassenNummern[sp];
                                    }
                                    else {
                                        tEintrag = tZeile.Zeiteintraege[sp];
                                    }
                                    if ((tEintrag.kind != SaxParsedTypes_3.BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxParsedTypes_3.ZUGLAUF_BERECHNET)) {
                                        var teb = tEintrag.BerechneterZugLauf;
                                        if (((teb.isEnd == true) || tNeedEnd) &&
                                            ((tEintrag.kind == SaxParsedTypes_3.BLOCK_T.LEER)
                                                || ((tEintrag.kind == SaxParsedTypes_3.BLOCK_T.BLOCK) && (tEintrag.Start == false)))) {
                                            teb.isEnd = false;
                                            teb.isDeleted = true;
                                            tNeedEnd = true;
                                        }
                                        else {
                                            if (tNeedEnd) {
                                                teb.isEnd = true;
                                                tNeedEnd = false;
                                            }
                                        }
                                    }
                                    else {
                                    }
                            }
                        }
                    }
                    return s;
                };
                return Nachberechnung;
            }());
            exports_8("Nachberechnung", Nachberechnung);
            exports_8("LAUFEINTRAG_NORMAL", LAUFEINTRAG_NORMAL = "LAUFEINTRAG_NORMAL");
            exports_8("LAUFEINTRAG_KEINHALT", LAUFEINTRAG_KEINHALT = "LAUFEINTRAG_KEINHALT");
            exports_8("LAUFEINTRAG_AN", LAUFEINTRAG_AN = "LAUFEINTRAG_AN");
            exports_8("LAUFEINTRAG_GELOESCHT", LAUFEINTRAG_GELOESCHT = "LAUFEINTRAG_GELOESCHT");
            exports_8("LAUFEINTRAG_KOMMEAUSKBS", LAUFEINTRAG_KOMMEAUSKBS = "LAUFEINTRAG_KOMMEAUSKBS");
            exports_8("LAUFEINTRAG_VERLASSENACHKBS", LAUFEINTRAG_VERLASSENACHKBS = "LAUFEINTRAG_VERLASSENACHKBS");
            ZugExtraktor = (function () {
                function ZugExtraktor() {
                }
                ZugExtraktor.printZuglauf = function (arr) {
                    arr.forEach(function (a) {
                        var ae = a;
                        switch (ae.kind) {
                            case LAUFEINTRAG_KEINHALT:
                                console.log(ae.BhfTag + " kein Halt");
                                break;
                            case LAUFEINTRAG_NORMAL:
                                console.log(ae.BhfTag + " " + (ae.AnZeit ? "an " + ae.AnZeit.src : "") + (ae.AbZeit ? "ab " + ae.AbZeit.src : ""));
                                break;
                            case LAUFEINTRAG_KOMMEAUSKBS:
                                console.log(" komme aus kbs");
                                break;
                            case LAUFEINTRAG_VERLASSENACHKBS:
                                console.log(" verlasse nach kbs");
                                break;
                            default:
                                return SaxBaseTypes_4.assertNever(ae);
                        }
                    });
                };
                ZugExtraktor.fixZugLauf = function (z) {
                    var tResultReversed = [];
                    for (var i = z.length - 1; i >= 0; i--) {
                        var en = z[i];
                        switch (en.kind) {
                            case LAUFEINTRAG_NORMAL:
                            case LAUFEINTRAG_KEINHALT:
                            case LAUFEINTRAG_KOMMEAUSKBS:
                            case LAUFEINTRAG_VERLASSENACHKBS:
                                tResultReversed.push(en);
                                break;
                            case LAUFEINTRAG_GELOESCHT:
                                break;
                            case LAUFEINTRAG_AN:
                                var tVor = z[i - 1];
                                switch (tVor.kind) {
                                    case LAUFEINTRAG_NORMAL:
                                        tVor.AnZeit = tVor.AbZeit;
                                        tVor.AbZeit = null;
                                        break;
                                    default:
                                }
                                break;
                        }
                    }
                    var tRes = tResultReversed.reverse();
                    console.log("fixfolge:", z, tRes);
                    return tRes;
                };
                ZugExtraktor.findeZuglaeufe = function (s) {
                    var tResult = [];
                    var tZugNr = null;
                    var tLen = 0;
                    s.Zeilen.forEach(function (z) {
                        switch (z.kind) {
                            case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                tLen = z.Zeiteintraege.length;
                                break;
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                            case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                            case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                            case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                                break;
                            default:
                                return SaxBaseTypes_4.assertNever(z);
                        }
                    });
                    var tCurrentZugNr;
                    var tCurrentFolge = [];
                    var tCurrentFahrtage = {
                        kind: SaxParsedTypes_3.FAEHRT_IMMER
                    };
                    for (var sp = 0; sp < tLen; sp++) {
                        var tZeilenZahl = s.Zeilen.length;
                        for (var zei = 0; zei < tZeilenZahl; zei++) {
                            var tZeile = s.Zeilen[zei];
                            switch (tZeile.kind) {
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                case SaxParsedTypes_3.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                case SaxParsedTypes_3.ZEILE_T.KLASSEN:
                                case SaxParsedTypes_3.ZEILE_T.ZUGNR:
                                    var tEintrag = { kind: SaxParsedTypes_3.BLOCK_T.ERROR, Grund: "temp" };
                                    if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.KLASSEN) {
                                        tEintrag = tZeile.KlassenNummern[sp];
                                    }
                                    else if (tZeile.kind == SaxParsedTypes_3.ZEILE_T.ZUGNR) {
                                        tEintrag = tZeile.ZugNummern[sp];
                                    }
                                    else {
                                        tEintrag = tZeile.Zeiteintraege[sp];
                                    }
                                    var tJetztSpeichern = false;
                                    if (tCurrentZugNr) {
                                        if ((tEintrag.kind != SaxParsedTypes_3.BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxParsedTypes_3.ZUGLAUF_BERECHNET)) {
                                            if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)) {
                                                tJetztSpeichern = true;
                                            }
                                        }
                                        else {
                                            tJetztSpeichern = true;
                                        }
                                    }
                                    if (tJetztSpeichern && tCurrentZugNr) {
                                        var tL = [];
                                        var tTagAbh = [{
                                                Gueltig: tCurrentFahrtage,
                                                Ablauf: tL
                                            }];
                                        var tCurrentLauf = {
                                            Nummer: tCurrentZugNr,
                                            TagAbhaengig: tTagAbh
                                        };
                                        var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                                        console.log("save New ", tCurrentLauf.Nummer, "len raw:", tCurrentFolge.length, " len (fixed) : ", tCurrentFolgeCompl.length);
                                        tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                                        tResult.push(tCurrentLauf);
                                        tCurrentFolge = [];
                                        tCurrentZugNr = undefined;
                                        tCurrentFahrtage = { kind: SaxParsedTypes_3.FAEHRT_IMMER };
                                    }
                                    if ((tEintrag.kind != SaxParsedTypes_3.BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxParsedTypes_3.ZUGLAUF_BERECHNET)) {
                                        if ((tCurrentZugNr == undefined)) {
                                            if ((tEintrag.BerechneterZugLauf.ZugNr != null) && (tEintrag.BerechneterZugLauf.ZugNr.length > 0)) {
                                                tCurrentFolge = [];
                                                tCurrentFahrtage = { kind: SaxParsedTypes_3.FAEHRT_IMMER };
                                                tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                                console.log("start new ", tCurrentZugNr);
                                            }
                                        }
                                        switch (tEintrag.kind) {
                                            case SaxParsedTypes_3.BLOCK_T.ZEITEINTRAG:
                                                switch (tZeile.kind) {
                                                    case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                                        var tEnt = {
                                                            kind: LAUFEINTRAG_NORMAL,
                                                            BhfTag: tZeile.BhfTag,
                                                            AnZeit: null,
                                                            AbZeit: null
                                                        };
                                                        if (tEintrag.Zeit.kind == SaxParsedTypes_3.ZEIT_24) {
                                                            if ((tZeile.AnAb == SaxParsedTypes_3.EAnAb.FirstAb) || (tZeile.AnAb == SaxParsedTypes_3.EAnAb.FollowAb)) {
                                                                tEnt.AbZeit = tEintrag.Zeit;
                                                            }
                                                            if ((tZeile.AnAb == SaxParsedTypes_3.EAnAb.An)) {
                                                                tEnt.AnZeit = tEintrag.Zeit;
                                                            }
                                                        }
                                                        else {
                                                            console.error("Rohzeit sollte hier nicht mehr vorkommen !!!");
                                                        }
                                                        tCurrentFolge.push(tEnt);
                                                        break;
                                                }
                                                break;
                                            case SaxParsedTypes_3.BLOCK_T.LEER:
                                                break;
                                            case SaxParsedTypes_3.BLOCK_T.KEINHALT:
                                                switch (tZeile.kind) {
                                                    case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                                        var tEntK = {
                                                            kind: LAUFEINTRAG_KEINHALT,
                                                            BhfTag: tZeile.BhfTag
                                                        };
                                                        tCurrentFolge.push(tEntK);
                                                        break;
                                                }
                                                break;
                                            case SaxParsedTypes_3.BLOCK_T.ANKUNFT:
                                                console.warn("Todo handle ankunft, soll vorherigen eintrag auf an wechseln");
                                                if (tCurrentFolge) {
                                                    var tEntAn = {
                                                        kind: LAUFEINTRAG_AN
                                                    };
                                                    tCurrentFolge.push(tEntAn);
                                                }
                                                break;
                                            case SaxParsedTypes_3.BLOCK_T.BLOCK:
                                                console.warn("todo auszulesender blockinhalt: ", tEintrag.Blockinhalt);
                                                if (tEintrag.Passend) {
                                                    if (tEintrag.Blockinhalt) {
                                                        switch (tEintrag.Blockinhalt.KbsAbweichung.kind) {
                                                            case SaxParsedTypes_3.KBS_ABWEICHUNG_AUS:
                                                                var tEntKo = {
                                                                    kind: LAUFEINTRAG_KOMMEAUSKBS
                                                                };
                                                                tCurrentFolge.push(tEntKo);
                                                                break;
                                                            case SaxParsedTypes_3.KBS_ABWEICHUNG_NACH:
                                                                var tEntN = {
                                                                    kind: LAUFEINTRAG_VERLASSENACHKBS
                                                                };
                                                                tCurrentFolge.push(tEntN);
                                                                break;
                                                            case SaxParsedTypes_3.KBS_ABWEICHUNG_KEINE:
                                                                break;
                                                            default:
                                                                return SaxBaseTypes_4.assertNever(tEintrag.Blockinhalt.KbsAbweichung);
                                                        }
                                                        switch (tEintrag.Blockinhalt.Fahrtage.kind) {
                                                            case SaxParsedTypes_3.FAEHRT_WERKTAGS:
                                                                tCurrentFahrtage = { kind: SaxParsedTypes_3.FAEHRT_WERKTAGS };
                                                                break;
                                                            case SaxParsedTypes_3.FAEHRT_SONNUNDFESTTAGS:
                                                                tCurrentFahrtage = { kind: SaxParsedTypes_3.FAEHRT_SONNUNDFESTTAGS };
                                                                break;
                                                        }
                                                    }
                                                }
                                                break;
                                            case SaxParsedTypes_3.BLOCK_T.DICKERSTRICH:
                                                break;
                                            default:
                                                return SaxBaseTypes_4.assertNever(tEintrag);
                                        }
                                    }
                                    else {
                                        console.log("save block error or zuglauf unbekannt:   save should save zuglauf unbekannt?  zei: ", zei, " sp: ", sp, JSON.stringify(tEintrag));
                                    }
                                    break;
                            }
                        }
                    }
                    if (tCurrentZugNr != undefined) {
                        var tL = [];
                        var tTagAbh2 = [{
                                Gueltig: tCurrentFahrtage,
                                Ablauf: tL
                            }];
                        var tCurrentLauf = {
                            Nummer: tCurrentZugNr,
                            TagAbhaengig: tTagAbh2
                        };
                        var tCurrentFolgeCompl = ZugExtraktor.fixZugLauf(tCurrentFolge);
                        console.log("save New ", tCurrentLauf.Nummer, " len (fixed) : ", tCurrentFolgeCompl.length);
                        tCurrentLauf.TagAbhaengig[0].Ablauf = tCurrentFolgeCompl;
                        tResult.push(tCurrentLauf);
                    }
                    return tResult;
                };
                return ZugExtraktor;
            }());
            exports_8("ZugExtraktor", ZugExtraktor);
        }
    };
});
System.register("SaxApp", ["SaxParser", "SaxValidator", "SaxRenderer", "SaxInput", "SaxParsedNachberechnung"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var Parser, SaxValidator, SaxRender, SaxSchedules, SaxNachberechnung, Sched;
    return {
        setters: [
            function (Parser_1) {
                Parser = Parser_1;
            },
            function (SaxValidator_1) {
                SaxValidator = SaxValidator_1;
            },
            function (SaxRender_1) {
                SaxRender = SaxRender_1;
            },
            function (SaxSchedules_1) {
                SaxSchedules = SaxSchedules_1;
                exports_9({
                    "InputData": SaxSchedules_1["InputData"]
                });
            },
            function (SaxNachberechnung_1) {
                SaxNachberechnung = SaxNachberechnung_1;
            }
        ],
        execute: function () {
            Sched = (function () {
                function Sched() {
                }
                Sched.do = function (input) {
                    console.log("test");
                    var tResult = Parser.Importer.parse(input);
                    SaxValidator.Validator.validate_mergeBlocks(tResult);
                    SaxValidator.Validator.validate_addZusatzinfobase(tResult);
                    Parser.Importer.berechneZeiten(tResult);
                    SaxNachberechnung.Nachberechnung.berechneZugLaeufe(tResult);
                    SaxValidator.Validator.validate_move_Anschluss_ZusatzInfo(tResult);
                    var tZugl = SaxNachberechnung.ZugExtraktor.findeZuglaeufe(tResult);
                    tZugl.forEach(function (zl) {
                        console.log("--- Lauf: " + zl.Nummer + zl.TagAbhaengig[0].Gueltig.kind);
                        SaxNachberechnung.ZugExtraktor.printZuglauf(zl.TagAbhaengig[0].Ablauf);
                    });
                    var t = document.getElementById("testdiv");
                    if (t != null) {
                        SaxRender.Renderer.renderTable(t, tResult);
                    }
                    return tResult;
                };
                Sched.doAllLogged = function () {
                    var tResults = [];
                    SaxSchedules.InputData.einzelplaene.forEach(function (input, idx) {
                        console.log("-----------------input------ " + idx + " " + input.route1900 + " " + input.seite + " ------------------------------");
                        tResults.push({ "input": idx, val: input });
                        var tResult = Parser.Importer.parse(input);
                        tResults.push({ "parsed": idx, val: tResult });
                        SaxValidator.Validator.validate_mergeBlocks(tResult);
                        tResults.push({ "merged": idx, val: tResult });
                        SaxValidator.Validator.validate_addZusatzinfobase(tResult);
                        tResults.push({ "zusatzed": idx, val: tResult });
                        Parser.Importer.berechneZeiten(tResult);
                        tResults.push({ "zeiten": idx, val: tResult });
                        SaxNachberechnung.Nachberechnung.berechneZugLaeufe(tResult);
                        tResults.push({ "zuglauf": idx, val: tResult });
                        SaxValidator.Validator.validate_move_Anschluss_ZusatzInfo(tResult);
                        tResults.push({ "moved": idx, val: tResult });
                        try {
                            var tZugl = SaxNachberechnung.ZugExtraktor.findeZuglaeufe(tResult);
                            tResults.push({ "zuglauf": idx, val: tZugl });
                        }
                        catch (e) {
                            console.warn("--exception ", e);
                        }
                    });
                    return tResults;
                };
                return Sched;
            }());
            exports_9("Sched", Sched);
        }
    };
});
//# sourceMappingURL=Sched.js.map