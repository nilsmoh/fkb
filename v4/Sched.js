var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
;
var AllgemeineInfo;
(function (AllgemeineInfo) {
    AllgemeineInfo[AllgemeineInfo["aBedeutetHaltenZumAussteigen"] = 0] = "aBedeutetHaltenZumAussteigen";
    AllgemeineInfo[AllgemeineInfo["eBedeutetHaltenZumEinsteigen"] = 1] = "eBedeutetHaltenZumEinsteigen";
    AllgemeineInfo[AllgemeineInfo["sieheLokalZuege"] = 2] = "sieheLokalZuege";
    AllgemeineInfo[AllgemeineInfo["DresdnerVerbindungsbahnzuegseSieheUnter1"] = 3] = "DresdnerVerbindungsbahnzuegseSieheUnter1";
    AllgemeineInfo[AllgemeineInfo["VorortzugeDresdenTharandtSieheUnter2"] = 4] = "VorortzugeDresdenTharandtSieheUnter2";
    AllgemeineInfo[AllgemeineInfo["VorortzugesSieheNr5"] = 5] = "VorortzugesSieheNr5";
    AllgemeineInfo[AllgemeineInfo["VorortzugePirnaDresdenSieheUnter5"] = 6] = "VorortzugePirnaDresdenSieheUnter5";
    AllgemeineInfo[AllgemeineInfo["sieheLokalZuege6"] = 7] = "sieheLokalZuege6";
    AllgemeineInfo[AllgemeineInfo["DresdenerVorortzuegesieheunter6"] = 8] = "DresdenerVorortzuegesieheunter6";
    AllgemeineInfo[AllgemeineInfo["sa7"] = 9] = "sa7";
    AllgemeineInfo[AllgemeineInfo["SieheUnter7"] = 10] = "SieheUnter7";
    AllgemeineInfo[AllgemeineInfo["SieheUnter3"] = 11] = "SieheUnter3";
    AllgemeineInfo[AllgemeineInfo["SieheUnter8"] = 12] = "SieheUnter8";
    AllgemeineInfo[AllgemeineInfo["SieheUnter9"] = 13] = "SieheUnter9";
    AllgemeineInfo[AllgemeineInfo["SieheUnter58"] = 14] = "SieheUnter58";
    AllgemeineInfo[AllgemeineInfo["SieheUnter56"] = 15] = "SieheUnter56";
    AllgemeineInfo[AllgemeineInfo["SieheUnter54"] = 16] = "SieheUnter54";
    AllgemeineInfo[AllgemeineInfo["SieheUnter94"] = 17] = "SieheUnter94";
    AllgemeineInfo[AllgemeineInfo["Rundreisekarte_Dresden_Muegeln_Geising_Altenberg_und_weiter_Kipsdorf_Hainsberg_Dresden_II_Kl_3_40M_III_Kl_2_30_M"] = 18] = "Rundreisekarte_Dresden_Muegeln_Geising_Altenberg_und_weiter_Kipsdorf_Hainsberg_Dresden_II_Kl_3_40M_III_Kl_2_30_M";
    AllgemeineInfo[AllgemeineInfo["Schlafwagenkarten_Leipzig_Myslowitz_I_Kl_10_M__IIKL_8M__Leipzig_Breslau_IKl_7M__IIKl_5_50M"] = 19] = "Schlafwagenkarten_Leipzig_Myslowitz_I_Kl_10_M__IIKL_8M__Leipzig_Breslau_IKl_7M__IIKl_5_50M";
    AllgemeineInfo[AllgemeineInfo["FahrpreiseSeite222"] = 20] = "FahrpreiseSeite222";
    AllgemeineInfo[AllgemeineInfo["DirecteWagenSUnter247"] = 21] = "DirecteWagenSUnter247";
    AllgemeineInfo[AllgemeineInfo["FahrKartenNLaubanUndWeiterZumZug121ohnePreiserhoehungUeberKohlfurt"] = 22] = "FahrKartenNLaubanUndWeiterZumZug121ohnePreiserhoehungUeberKohlfurt";
    AllgemeineInfo[AllgemeineInfo["RueckfahrkartenUberHerrnhutGeltenAuchUeberWarnsdorfUndBischofswerda"] = 23] = "RueckfahrkartenUberHerrnhutGeltenAuchUeberWarnsdorfUndBischofswerda";
    AllgemeineInfo[AllgemeineInfo["RueckfahrkartenZwischenSebnitzUndDresdenAltOderNeustUeberSchandauDuerrsdorfPirnaOderDuerroehrsdorfArnsdorfII460pfIII310pf"] = 24] = "RueckfahrkartenZwischenSebnitzUndDresdenAltOderNeustUeberSchandauDuerrsdorfPirnaOderDuerroehrsdorfArnsdorfII460pfIII310pf";
    AllgemeineInfo[AllgemeineInfo["IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten"] = 25] = "IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten";
    AllgemeineInfo[AllgemeineInfo["IVKlAuchSonnUndFeiertags"] = 26] = "IVKlAuchSonnUndFeiertags";
    AllgemeineInfo[AllgemeineInfo["L_Luxuszug__nur_mit_Fahrk__I_Kl__Schnellz__u__geg__besond__Zuschlag_benutzb"] = 27] = "L_Luxuszug__nur_mit_Fahrk__I_Kl__Schnellz__u__geg__besond__Zuschlag_benutzb";
    AllgemeineInfo[AllgemeineInfo["D__Durchgangszug__bei_welchem_ausser_dem_Fahrpreis_Platzgebuehren_erhoben_werden_und_zwar_fuer_Strecken_bis_150km_1_00M_ueber_150km_2_00M"] = 28] = "D__Durchgangszug__bei_welchem_ausser_dem_Fahrpreis_Platzgebuehren_erhoben_werden_und_zwar_fuer_Strecken_bis_150km_1_00M_ueber_150km_2_00M";
    AllgemeineInfo[AllgemeineInfo["InVoitersreuthZollrevision"] = 29] = "InVoitersreuthZollrevision";
    AllgemeineInfo[AllgemeineInfo["Rueckfahrk_Leipz_Grimma_ueb_Wurzen_oder_Naunhof"] = 30] = "Rueckfahrk_Leipz_Grimma_ueb_Wurzen_oder_Naunhof";
    AllgemeineInfo[AllgemeineInfo["Umwegkarten_Wurzen_Borsdorf_Grossbothen_und_umgek_zu_Fahrk_nach_Grossboth_etc_ueb_Nerchau"] = 31] = "Umwegkarten_Wurzen_Borsdorf_Grossbothen_und_umgek_zu_Fahrk_nach_Grossboth_etc_ueb_Nerchau";
})(AllgemeineInfo || (AllgemeineInfo = {}));
var TabellenteilFortSetzung = {
    kind: "TabellenTeilFortsetzung"
};
var ZuegeInBelegtenSpalten = {
    kind: "ZuegeInBelegtenSpalten"
};
var VirtuelleFolgeZelle = { kind: "VirtuelleFolgeZelle" };
var Global = { kind: "Global" };
var Tabelle = { kind: "Tabelle" };
var Zelle = { kind: "Zelle" };
var Zug = { kind: "Zug" };
;
var ETimeValid;
(function (ETimeValid) {
    ETimeValid[ETimeValid["Nein"] = 1] = "Nein";
    ETimeValid[ETimeValid["Vorgabe24"] = 2] = "Vorgabe24";
    ETimeValid[ETimeValid["Berechnet24"] = 3] = "Berechnet24";
})(ETimeValid || (ETimeValid = {}));
var ZEIT_ROH = "ZEIT_ROH";
var ZEIT_24 = "ZEIT_24";
var GesternHeuteMorgen;
(function (GesternHeuteMorgen) {
    GesternHeuteMorgen[GesternHeuteMorgen["Unbekannt"] = 0] = "Unbekannt";
    GesternHeuteMorgen[GesternHeuteMorgen["Gestern"] = 1] = "Gestern";
    GesternHeuteMorgen[GesternHeuteMorgen["Heute"] = 2] = "Heute";
    GesternHeuteMorgen[GesternHeuteMorgen["Morgen"] = 3] = "Morgen";
})(GesternHeuteMorgen || (GesternHeuteMorgen = {}));
var makeZ = function (zeit12, ghm, nachmittag, validity) {
    var tStunde12 = Math.floor(zeit12 / 100);
    var tMinute24 = zeit12 - (Math.floor(zeit12 / 100) * 100);
    if (!nachmittag) {
        if (tStunde12 > 11) {
            tStunde12 = tStunde12 - 12;
        }
    }
    var tResult = {
        kind: ZEIT_24,
        Stunde24: (nachmittag ? 12 : 0) + tStunde12,
        Minute24: tMinute24,
        WelcherTag: ghm,
        Valid: (validity != undefined) ? validity : ETimeValid.Vorgabe24,
        src: zeit12
    };
    return tResult;
};
var ZGN = function (n) { return makeZ(n, GesternHeuteMorgen.Gestern, true); };
var ZHV = function (n) { return makeZ(n, GesternHeuteMorgen.Heute, false); };
var ZHN = function (n) { return makeZ(n, GesternHeuteMorgen.Heute, true); };
var ZMV = function (n) { return makeZ(n, GesternHeuteMorgen.Morgen, false); };
var HN1105 = ZHN(1105);
var MV = function (n) {
    var tStunde12 = Math.floor(n / 100);
    var tResult = {
        kind: BLOCK_T.ZEITEINTRAG,
        Referenzkey: null,
        Schnellzug: false,
        Zeit: { kind: ZEIT_24,
            Stunde24: tStunde12,
            Minute24: n - (Math.floor(n / 100) * 100),
            WelcherTag: GesternHeuteMorgen.Morgen,
            Valid: ETimeValid.Vorgabe24,
            src: n },
        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
    };
    return tResult;
};
var HN305 = ZHN(305);
var HN946 = ZHN(946);
var MV1226 = ZMV(1226);
var HV657 = ZHV(657);
var HN830 = ZHN(830);
var MV1203 = ZMV(3);
var check = function (x) {
    x["checked"] = true;
    return x;
};
var id = function (x) {
    return x;
};
var x24 = [
    {
        head: "24.1 (FKB1 Verbindungsbahn)",
        list: [
            {
                q: "nach Arnsdorf",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Arnsdorf] }, Abweichend: {} }
            },
            {
                q: "nach Bautzen",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Bautzen] }, Abweichend: {} }
            },
            {
                q: "nach Bischofswerda",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Bischofswerda] }, Abweichend: {} }
            },
            {
                q: "nach Coswig",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Coswig] }, Abweichend: {} }
            },
            {
                q: "nach Döbeln-Leipzig",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Döbeln, Leipzig] }, Abweichend: {} }
            },
            {
                q: "nach Elsterwerda-Berlin",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Elsterwerda, Berlin] }, Abweichend: {} }
            },
            {
                q: "nach Görlitz",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Görlitz] }, Abweichend: {} }
            },
            {
                q: "nach Meissen-Cölln",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Meissen_Cölln] }, Abweichend: {} }
            },
            {
                q: "Sonn- und Festtags nach Meissen-Cölln",
                c: "nicht tägl !",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Meissen_Cölln], Fahrtage: SonnUndFesttags }, Abweichend: {} }
            },
            {
                q: "nach Nossen",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Nossen] }, Abweichend: {} }
            },
            {
                q: "nach Radeberg",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Radeberg] }, Abweichend: {} }
            },
            {
                q: "nach Reichenberg",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Reichenberg] }, Abweichend: {} }
            },
            {
                q: "nach Riesa",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Riesa] }, Abweichend: {} }
            },
            {
                q: "nach Riesa-Leipzig",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Riesa, Leipzig] }, Abweichend: {} }
            },
            {
                q: "nach Röderau-Berlin",
                c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Röderau, Berlin] }, Abweichend: {} }
            },
            {
                q: "Sonn- und Festtags nach Döbeln",
                c: "//(faehrt planmaessig nur sonnu festtag; weiter nach Doebeln getrennt anzugeben)" +
                    "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer" +
                    "//direkt_daneben_passend_senkrecht_faehrt_nur_sonn_und_festtags",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Döbeln], Fahrtage: SonnUndFesttags }, Abweichend: {} }
            },
            {
                q: "nach Coswig",
                c: "//(sonn und festtag bis Meiss Cölln)" +
                    "//DEFAULT  :  direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer -> Coswig" +
                    "//ABWEICHEND: direkt_daneben_passend_senkrecht_ABWEICHEND_SONNUNDFESSTAG _weiter_nach_ohne_streckennummer_Meiss_Coelln" +
                    "// UNTERSCHEIDBAR GGF NUR PER FETTDRUCK",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: Coswig }, Abweichend: { scope: Zug, Fahrtage: SonnUndFesttags, OhneNrNach: Meissen_Cölln } }
            },
            {
                q: "Fortsetzung",
                c: "Tabellenteil untereinander statt logisch nebeneinander",
                BLOCK: { Standard: check({ scope: TabellenteilFortSetzung }), Abweichend: {} }
            }
        ]
    }
];
var x25 = [{
        head: "Seite25 Tabelle 1 Rueckrichtung",
        list: [{
                q: "von Arnsdorf",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Arnsdorf] }, Abweichend: {} }
            },
            {
                q: "von Berlin-Elsterwerda",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Berlin, Elsterwerda] }, Abweichend: {} }
            },
            {
                q: "von Berlin-Röderau",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Berlin, Röderau] }, Abweichend: {} }
            },
            {
                q: "von Bischofwerda",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Bischofswerda] }, Abweichend: {} }
            },
            {
                q: "von Bautzen",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Bautzen] }, Abweichend: {} }
            },
            {
                q: "von Coswig",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Coswig] }, Abweichend: {} }
            },
            {
                q: "von Görlitz",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Görlitz] }, Abweichend: {} }
            },
            {
                q: "von Leipzig-Döbeln",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Leipzig, Döbeln] }, Abweichend: {} }
            },
            {
                q: "von Leipzig-Riesa",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Leipzig, Riesa] }, Abweichend: {} }
            },
            {
                q: "von Meissen-Cölln",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Meissen_Cölln] }, Abweichend: {} }
            },
            {
                q: "von Radeberg",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Radeberg] }, Abweichend: {} }
            },
            {
                q: "von Reichenberg",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Reichenberg] }, Abweichend: {} }
            },
            {
                q: "von Riesa",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Riesa] }, Abweichend: {} }
            },
            {
                q: "Sonn- und Festtags von Döbeln //direkt daneben passend senkrecht faehrt nur sonn und festtags, doebeln getrennt anzugebn",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Döbeln], Fahrtage: SonnUndFesttags }, Abweichend: {} }
            },
            {
                q: "Sonn- und Festtags von Meissen-Cölln",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Meissen_Cölln], Fahrtage: SonnUndFesttags }, Abweichend: {} }
            }
        ]
    }];
var x26 = [
    {
        head: "26.2, 26.3",
        list: [{
                q: "*Verkehrt Werktags vor Sonn- und Festtagen bis Edle Krone (Ank. 504) und Klingenberg (Ank. 523)",
                c: "  //  (ganzer zug verkehrt weiter)",
                BLOCK: {
                    Standard: {}, Abweichend: { scope: Zug, Fahrtage: SonnUndFesttags, OhneNrNach: [{ ziel: Edle_Krone, ank: 504 }, { ziel: Klingenberg_Colmn, ank: 523 }] }
                }
            }
        ]
    }
];
var x27 = [
    {
        head: "27.2",
        list: [{
                q: "Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            },
            {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            },
            {
                q: "*Verkehrt in der auf Sonn- oder Festtag folgenden Nacht",
                c: " (ganzer zug verkehrt)",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            },
            {
                q: "von Königsbrück",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Königsbrück_B } }
            },
            {
                q: "nur werktags und zwar montags oder, wenn der fesstag dienstags von königsbrück, sonst aus moritzdorf",
                c: " (kommt aus anderer kbs)",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags, OhneNrAus: Moritzdorf }, Abweichend: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag,
                        OhneNrAus: Königsbrück_B } }
            },
            {
                q: "von Schwepnitz",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Schwepnitz } }
            },
            {
                q: "+Züge 708, 714 und 720 verkehren nur sonn und festtags",
                c: "//ohne zugnr angabe waere logisch identisch",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: [708, 714, 720] } }
            }
        ]
    }
];
var x28 = [
    {
        head: "28.x",
        list: [{
                q: "* nur sonn- und festtags",
                c: "   (anschluss einzelzeit) //standard: anschlusszeit leer Abweichend: Sonnundfesstag, Anschlusszeit wie angegeben",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
            },
            {
                q: "! sonn und festtags 11:05",
                c: "  (anschluss einzelzeit) ",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: HN1105 } } }
            },
            {
                q: "Nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }
];
var x29 = [
    {
        head: "29.5",
        list: [
            {
                q: "+nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags }, Abweichend: {} }
            },
            {
                q: "+nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags }, Abweichend: {} }
            }, {
                q: "Sonn- u. Festt.",
                c: "aus berggieshuebel",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: HN305 } }, Abweichend: {} }
            }, {
                q: "* nachts nach dem ersten mittwoch jeden monats (anschluss einzelzeit)",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: nachtsNachDemErstenMittwochJedenMonats } }
            }, {
                q: "! sonn und festtags in weesenstein",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftOrt: Weesenstein, AnkunftZeit: HN946 }, Abweichend: {} }
            }, {
                q: "!sonn und festags bis geising-a ank 6:57",
                c: " (anschluss zeile abweichend an speziellen tagen)",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftOrt: Geising_Altenb, AnkunftZeit: HV657 } }
            },
            {
                q: " }nach s u fst",
                c: "//anschlusszeit, sonst leer",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftZeit: MV1226 } }
            }, {
                q: "nur werktags",
                c: " zug verkehrt",
                BLOCK: { Standard: { Fahrtage: SonnUndFesttags, scope: Zug }, Abweichend: {} }
            }, {
                q: "anschluss aus von glashuette 600" +
                    "anschluss aus sonn und festtags von geising a abf 500",
                BLOCK: { Standard: { scope: Zelle, AbfahrtsOrt: Glashütte, AbfahrtsZeit: ZHN(600) },
                    Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AbfahrtsOrt: Geising_Altenb, AbfahrtsZeit: ZHN(500) } }
            }
        ]
    }
];
var x30 = [{
        head: "30.6 Dresden -> Meissen",
        list: [{
                q: "*Nur I.-III. Kl.",
                BLOCK: { Standard: check({ scope: { kind: "Global" } }) }
            },
            {
                q: "nach Berlin",
                BLOCK: { Standard: check({ scope: Zug, OhneNrNach: Berlin }) }
            }, {
                q: "nach Leipzig",
                BLOCK: { Standard: check({ scope: Zug, OhneNrNach: Leipzig }) }
            },
            {
                q: "nach Riesa",
                BLOCK: { Standard: check({ scope: Zug, OhneNrNach: Riesa }) }
            },
            {
                q: "!Ank Dresd-N Lpz. Bhf 221",
                BLOCK: { Standard: check({ scope: VirtuelleFolgeZelle, AnkunftOrt: Dresden_Neust_Leip_Bf, Kategorie: "Schnellzug", AnkunftZeit: ZHN(221), PfeilStart: 1 }) }
            },
            {
                q: "Pfeilziel",
                BLOCK: { Standard: check({ scope: Zelle, PfeilZiel: 1 }) }
            },
            {
                q: "+zug 1556 verkehrt von coswig bis meissen-c nur sonn und festtags",
                c: "//  letzter teil des zuglaufes nur am we",
                BLOCK: {
                    Standard: id({
                        scope: { kind: "TeilZug", TZgueltigAbBhf: Coswig, TZgueltigBisBhf: Meissen_Cölln },
                        GeltungsTag: SonnUndFesttags, RedundanteZugNr: [1556]
                    })
                }
            },
            {
                q: "++Züge 1506a, 1558, 1562 und 1582 verkehren nur Sonn- und festags",
                BLOCK: { Standard: check({ scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: ["1506a", 1558, 1562, 1582] }) }
            }]
    }];
var x31 = [{
        head: "31.6 Meissen-> Dresden",
        list: [
            {
                q: "nur montags oder wenn dieser ein festtag ist dienstags ",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
            }, {
                q: "von Berlin",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Berlin] } }
            }, {
                q: "von Riesa",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Riesa] } }
            }, {
                q: "von Leipzig",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: [Leipzig] } }
            }, {
                q: "Zuege 1505a, 1567,1571,1573a,1577 und 1585 verkehren nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: ["1505a", 1567, 1571, "1573a", 1577, 1585] } }
            }
        ]
    }];
var x32 = [{
        head: "32.7 Leipzig->Wurzen",
        list: [{
                q: "nur mittwoch und sonnabend bis liebertwolkwitz",
                c: "//nicht taeglich laut rahmen",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MittwochsUndSonnabends, OhneNrNach: Liebertwolkwitz } }
            }, {
                q: "nach Geithain",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Geithain] } }
            }, {
                q: "nach Doebeln",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Döbeln] } }
            }, {
                q: "nach Grossbothen",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Grossbothen] } }
            }, {
                q: "nach Belgershain",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Belgershain] } }
            }, {
                q: "nach Grimma",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Grimma] } }
            }, {
                q: "nach Liebertwolkwitz",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: [Liebertwolkwitz] } }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "+Nur Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }]
    },
    {
        head: "/32.7 rueckrichtung",
        list: [
            {
                q: "Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "von Otterwisch",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Otterwisch } }
            }, {
                q: "von nossen",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Nossen } }
            }, {
                q: "von Geithain",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Geithain } }
            }, {
                q: "von Doebeln",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Döbeln } }
            }, {
                q: "von Belgershain",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Belgershain } }
            }, {
                q: "von Grimma",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Grimma } }
            }, {
                q: "von Liebertwolkwitz",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Liebertwolkwitz } }
            }, {
                q: "von grossbothen",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Grossbothen } }
            },
            {
                q: "in der nacht v. mittw zum donnerst und v sonnabend zu sonntag von liebertwolkw",
                c: "//aus kbs, verkehrt nicht taeglich lt rahmen, werte sind morgen frueh MV*",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag, OhneNrAus: Liebertwolkwitz } }
            }
        ]
    }];
var x33 = [{
        head: "33",
        list: [{
                q: "nach Meuselwitz",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: Meuselwitz } }
            }, {
                q: "nach Zwenkau",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: Zwenkau } }
            }, {
                q: "nach Groitzsch",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: Groitzsch } }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            },
            {
                q: "In der auf einen Sonn- oder Festtag folgenden Nacht",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "von Zwenkau",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Zwenkau } }
            }, {
                q: "von Meuselwitz",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Meuselwitz } }
            }, {
                q: "von Groitzsch",
                BLOCK: { Standard: { scope: Zug, OhneNrAus: Groitzsch } }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x34 = [{
        head: "34",
        list: [{
                q: "+Nur am Werktage vor Sonn und Festtagen",
                BLOCK: { Standard: { scope: Zug, Fahrtage: WerktageVorSonnUndFesttagen } }
            }, {
                q: "von Limbach",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Limbach } }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "nach Limbach",
                BLOCK: { Standard: { scope: Zug, OhneNrNach: Limbach } }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "pfeilstart",
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
            }, {
                q: "pfeilziel",
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
            }, {
                q: "nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "von limbach",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Limbach } }
            }, {
                q: "pfeilstart",
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 2 } }
            }, {
                q: "pfeilende",
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 2 } }
            }, {
                q: "nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }]
    }];
var x35 = [{
        head: "35",
        list: [
            {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "Sonn und festtagszuege",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "Nur Werktags mit ausnahme der sonnabende und des 23.mai",
                BLOCK: { Standard: { scope: Zug, Fahrtage: WerktagsMitAusnahmeDerSonnabendeUndDes23Mai } }
            }, {
                q: "nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x36 = [{
        head: "36.12hin dd - berlin und 13",
        list: [{
                q: "+ab jÜTERBOG i-iv klASSE",
                c: "//gueltigabbhf vorne in zeile nur ohne bedeutung angehaengt",
                BLOCK: { Standard: {}, Abweichend: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Jueterbog }, Klasse: Kl1bis4, ZeilenLinkOhneBedeutung: true }) }
            },
            {
                q: "!nur vom 15.6. bis 15.9. ",
                c: "anschluesse gelten nur an bestimmten tagen, sonst leer ",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Vom15JuniBis15September } }
            },
            {
                q: "Schlafwagen Wien berlin",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Wien, Berlin] } }
            },
            {
                q: "speisewagen wien berlin",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Wien, Berlin] } }
            },
            {
                q: "Rückfahrkarten für alle Züge Berlin-Dresden 3 Tage, von Dresden nach Berlin 4 Tage, zur Rückfahrt auch ueber Zossen (s.u.14 ) giltig.",
                BLOCK: { Standard: check({ scope: Global, FahrkartenInfo: "todo" }) }
            }, {
                q: 'Alle Zuege I bis IV Klasse',
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl1bis4 }) }
            }
        ]
    }];
var x37 = [{
        head: "37",
        list: [{
                q: "+ v.25./VI.b.31./VIII",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: vom25JuniBis31August } }
            }, {
                q: "E Dir Berlin, von Gr Lichterfelde bis röderau e.dir. halle",
                c: "Rest saechs Staatsb folgt aus Gegenrichtung auf Seite36.12",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: [{ von: BerlinAHB, bis: GrossLichterfeldeOst, Dir: "KEDBerlin" }, { von: GrossLichterfeldeOst, bis: Röderau, Dir: "KEDHalle" }] }) }
            }, {
                q: "Schlafwagen Berlin - Wien",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Berlin, Wien] } }
            }, {
                q: "a bedeutet halten zum aussteigen",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.aBedeutetHaltenZumAussteigen }) }
            }, {
                q: "e bedeutet halten zum einsteigen",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.eBedeutetHaltenZumEinsteigen }) }
            }, {
                q: "Alle Zuege I-IV Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl1bis4 }) }
            }
        ]
    }];
var x38 = [{
        head: "38",
        list: [{
                q: "s.a. Lokalzuege",
                c: "",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Zossen, endZeileBhf: BerlinAHB }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege } }
            }, {
                q: "N.W.Bf.",
                c: " eintrag selber mit marker versehen",
                BLOCK: { Standard: { scope: Zelle, andererBhf: Wien_NWB } }
            }, {
                q: "!ab Elsterwerda E Dir halle, ab zossen eb dir berlin",
                c: "",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: [{ von: Elsterwerda, bis: Zossen, Dir: "KEDHalle" }, { von: Zossen, bis: BerlinAHB, Dir: "KEDBerlin" }] }) }
            }, {
                q: "Über dresden friedrichstadt - cossebaude",
                c: "Zug verlaesst strecke, kommt aber wieder zurueck!, d.h. | bedeutet hier nicht durchfahrt sondern durchfahrt woanders !!!",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Dresden_Hptbf, abweichend: [Dresden_Fr, Cossebaude], wiederDaBhf: Weinböhla } } }
            }, {
                q: "Speisewagen Karlsbad-Berlin",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Karlsbad, Berlin] } }
            }, {
                q: "!nur von 25 juni bis 31 aug.",
                c: "  // ja ! doppelt belegt :-/",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: vom25JuniBis31August } }
            }, {
                q: "Dahme-Uckroer Eisenbahn",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "DahmeUckroerEisenbahn" }) }
            }, {
                q: "Saemmtliche Züge halten auch in Dabendorf",
                c: " fehlt da einfach aus platzgruenden eine zeile ????",
                BLOCK: { Standard: check({ scope: Global, AlleZuegeHaltenIn: Dabendorf }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x39 = [{
        head: "39",
        list: [{
                q: "s.a.Localzuege",
                c: "sic hier Local statt Lokal !!!",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: BerlinAHB, endZeileBhf: Zossen }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege } }
            }, {
                q: "*ab Zossen KED Halle",
                c: "",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: [{ von: Zossen, bis: Elsterwerda, Dir: "KEDHalle" }] }) }
            }, {
                q: "N.W.Bf.",
                c: " eintrag selber mit marker versehen",
                BLOCK: { Standard: { scope: Zelle, andererBhf: Wien_NWB } }
            }, {
                q: "Über cossebaude  dresden friedrichstadt",
                c: "Zug verlaesst strecke, kommt aber wieder zurueck!, d.h. | bedeutet hier nicht durchfahrt sondern durchfahrt woanders !!!",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Weinböhla, abweichend: [Cossebaude, Dresden_Fr], wiederDaBhf: Dresden_Hptbf } } }
            }, {
                q: "+ über oberlausitzer bf in elsterwerda, ",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Dobrilugk_Kirchhain, abweichend: [Elsterwerda_OberlausitzeBhf], wiederDaBhf: Grossenhain } } }
            }, {
                q: "+Anschluss von magdeburg abf 705",
                c: " normalerweise wuerde ueber zugnr 62 noch eine aubringerzeile aus magdeburg stehen",
                BLOCK: { Standard: { scope: Zug, virtuellerAnschluss: { AnschlussAusZeit: ZHV(705), AnschlussAusBhf: Magdeburg } } }
            }, {
                q: "Speisewagen Berlin-Wien",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Berlin, Wien] } }
            }, {
                q: "Speisewagen Berlin-Karlsbad",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Berlin, Karlsbad] } }
            }, {
                q: "Saemmtliche Züge halten auch in Dabendorf",
                c: " fehlt da einfach aus platzgruenden eine zeile ????",
                BLOCK: { Standard: check({ scope: Global, AlleZuegeHaltenIn: Dabendorf }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x40 = [{
        head: "40 Tabelle 16 geht bis in S.41",
        list: [{
                q: "Lokalzuege siehe unter 6",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden_Hptbf, endZeileBhf: Meissen_Cölln }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege6 } }
            }, {
                q: "Pfeilstart",
                c: "Anschluss hier an zugende, aber nicht generell",
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
            }, {
                q: "Pfeilende",
                c: "Mitten rein in anderen Zuglauf !!!",
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
            }, {
                q: "Nur Sonn-und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur Freitags",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Freitags } }
            }, {
                q: "* mit umsteigen in grossbothen",
                c: "//in AnschlussNachIn Zeile",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Grossbothen } } }
            }, {
                q: "+SonnUndFesttags",
                c: "AnschlussNachInZeile",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
            }
        ]
    }];
var x41 = [{
        head: "41",
        list: [{
                q: "Saechs Staatsb",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "nur sonnabends im juni juli und august",
                c: "rechts senkrecht neben zuglauf",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnabendsInJuniJuliUndAugust } }
            }, {
                q: "sonn und festtagszuege",
                c: " : //interessant mehrere spalten",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Rundreisekarte Dresden Muegeln Geising Altenberg und weiter Kipsdorf Hainsberg Dresden II Kl 3,40M III Kl 2,30 M",
                c: "rundreisekarte info ?",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.Rundreisekarte_Dresden_Muegeln_Geising_Altenberg_und_weiter_Kipsdorf_Hainsberg_Dresden_II_Kl_3_40M_III_Kl_2_30_M }) }
            }
        ]
    }];
var x42 = [{
        head: "42",
        list: [{
                q: "Saechs Staatseisenbahn",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "s.a.7.",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Dr_Bf, endZeileBhf: Borsdorf }, AllgemeineInfo: AllgemeineInfo.sa7 } }
            }, {
                q: "nur montags oder wenn dieser ein festtag ist dienstags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
            }, {
                q: "Nur Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "*Sonn und Festtags: 918",
                c: "aus rochlitz kommender anschluss",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: ZHN(918) } } }
            }, {
                q: "nach colditz ank 1203 wird von grimma nach colditz nur am ersten mittwoch jeden monats abgelassen und verkehrt " +
                    "sonach in der nacht vom 2/3 mai, 6/7juni, 4/5 juli, 1/2 august und 5/6 september",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Colditz, AnkunftOrt: Colditz, AnkunftZeit: MV1203, Fahrtage: ersterMittwochJedenMonatsDH2mai6juni4juli1august5september } }
            }, {
                q: "{nur freitag",
                c: " //anschluss zelle",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Freitags } }
            }
        ]
    }];
var x43 = [{
        head: "43",
        list: [{
                q: "{nur freitags",
                c: " //anschluss",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Freitags } }
            }, {
                q: "Localzuege Meissen-Cölln -- Dresden siehe unter 6.",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Meissen_Cölln, endZeileBhf: Dresden_Hptbf }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege6 } }
            }, {
                q: "Alle Züge II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Sonn und festtagszuege",
                c: " : //interessant mehrere spalten",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Nur Sonnabends im juni juli und august",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnabendsInJuniJuliUndAugust } }
            }
        ]
    }];
var x44 = [{
        head: "44",
        list: [{
                q: "In der Nacht nach sonn und festtagen",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            }, {
                q: "Nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "*Sonn- und Festtags: 11:32.",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftZeit: ZHV(1132) } }
            }
        ]
    }];
var x45 = [{
        head: "45",
        list: [
            {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            },
            {
                q: "Nur in der nacht nach sonn und festtagen",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            }
        ]
    }];
var x46 = [{
        head: "46.23 //dresden-bodenbach  WIP",
        list: [{
                q: "Fahrpr auf seite 222 //global default",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.FahrpreiseSeite222 }) }
            }, {
                q: "+ Vorortzuge siehe nr 5",
                c: " vorne mit geschweifter klammer und marker, text dann ganz woanders!  ",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden_Hptbf, endZeileBhf: Pirna_Bf }, AllgemeineInfo: AllgemeineInfo.VorortzugesSieheNr5 } }
            }, {
                q: "* dresdner verbindungsbahnzuege siehe unter 1",
                c: " steht mitten drin ohne geschweifte klammer und box passt auch nicht richtig !",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DresdnerVerbindungsbahnzuegseSieheUnter1 }) }
            }, {
                q: "!Schles. Bf.",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Dresden_Neust_Schl_Bf } } }
            }, {
                q: "# zug 5 vermitt. anschluss in richt n wien",
                c: "mit naechstem ein text aber besser auf 2 aufteilen und marker trennen !!!!",
                BLOCK: { Standard: { scope: Zug, ZugVermitteltAnschluss: { ZugNr: "5", Ziele: [Wien] } } }
            }, {
                q: "X d7 nur in richtung nach teplitz-karlsbad",
                BLOCK: { Standard: { scope: Zug, ZugVermitteltAnschluss: { ZugNr: "D7", Ziele: [Teplitz, Karlsbad] } } }
            }, {
                q: "Nur Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "v Elsterw. 640",
                c: "ZEILE_ANSCHLUSS_ZUBRINGER_AB  ZEILE_ANSCHLUSS_ZUBRINGER_IN   Paar, dessen erster teil veraendert ist",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Elsterwerda, Zeit: ZHV(640) } } }
            }, {
                q: "v Elsterw.",
                c: "ZEILE_ANSCHLUSS_ZUBRINGER_AB  ZEILE_ANSCHLUSS_ZUBRINGER_IN   Paar, dessen erster teil veraendert ist;   keine zeitangabe !!!",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Elsterwerda } } }
            }, {
                q: "v Riesa.",
                c: "ZEILE_ANSCHLUSS_ZUBRINGER_AB  ZEILE_ANSCHLUSS_ZUBRINGER_IN   Paar, dessen erster teil veraendert ist;   keine zeitangabe !!!",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Riesa } } }
            }, {
                q: "speisewagen Berlin - Wien",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Berlin, Wien] } }
            }, {
                q: "speisewagen Berlin Karlsbad",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Berlin, Karlsbad] } }
            }, {
                q: "Schlafwagen nach wien",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: Wien } }
            }
        ]
    }];
var x47 = [{
        head: "47",
        list: [{
                q: "Directe Wagen s.unter 247.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Schlafwagen von wien",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: { von: Wien } } }
            }, {
                q: "Vorortzuege Pirna dresden s unter 5",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugesSieheNr5 }) }
            }, {
                q: "nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "+I-IIIKl",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Klasse: Kl1bis3 } } }
            }, {
                q: "*schles bhf",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf } } }
            }, {
                q: "Speisewagen Karlsbad berlin",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Karlsbad, Berlin] } }
            }, {
                q: "Speisewagen wien bodenbach berlin",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Wien, Bodenbach, Berlin] } }
            }, {
                q: "bis elsterwerda",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Elsterwerda } } }
            }, {
                q: "bis riesa ",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Riesa } } }
            }, {
                q: "*schles bhf",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf } } }
            }, {
                q: "bis leisnig",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Leisnig } } }
            }, {
                q: "bis nossen",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Nossen } } }
            }
        ]
    }];
var x48 = [{
        head: "48",
        list: [{
                q: "*von 15juni bis15sept:335",
                BLOCK: { Standard: {}, Abweichend: id({ scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Kategorie: "Schnellzug", Zeit: ZHN(335) } }) }
            }, {
                q: "Schlafwagen Myslowitz Leipzig",
                BLOCK: { Standard: id({ scope: Zug, Schlafwagen: [Myslowitz, Leipzig] }) }
            }, {
                q: "Buffetwagen Myslowitz Leipzig",
                BLOCK: { Standard: id({ scope: Zug, Buffetwagen: [Myslowitz, Leipzig] }) }
            }, {
                q: "Dresdner Vorortzuege siehe unter 6",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Dresd_Wettinerstr, endZeileBhf: Priestewitz }, AllgemeineInfo: AllgemeineInfo.DresdenerVorortzuegesieheunter6 }) }
            }
        ]
    }];
var x49 = [{
        head: "49",
        list: [{
                q: "s.u.7",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Wurzen, endZeileBhf: Leipzig }, AllgemeineInfo: AllgemeineInfo.SieheUnter7 } }
            }, {
                q: "* ueber Halle Bebra",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Ueber: [Halle, Bebra] } } }
            }, {
                q: "nach stuttgart-mailand",
                BLOCK: { Standard: { scope: Zug, AnschlussWeiterNach: { WeitereFernziele: [Stuttgart, Mailand] } } }
            }, {
                q: "+Bei den mit + bezeichneten zuegen findet omnibusueberfuehrung v dresdner nach den thuer Bahnhofe statt",
                BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Dr_Bf, Leipzig_Th_Bf] } }
            }, {
                q: "bis Erf. 229",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Leipzig, endZelle: Frankfurt_M }, AnschlussWeiterNach: { Bhf: Erfurt, Zeit: ZMV(229) } }) }
            },
            {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "III",
                c: " fuer zug 6523",
                BLOCK: { Standard: { scope: Zug, Klasse: Kl3 } }
            }, {
                q: "verkehrt nur sonnabends und dient nur der arbeiterbefoerderung   ",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends, NurArbeiterBefoerderung: true } }
            }, {
                q: "Sonn und Festtagszuege",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            }
        ]
    }];
var x50 = [{
        head: "50f",
        list: [{
                q: "+ vom ersten juni bis 15 september",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Vom1JuniBis15September } }
            }, {
                q: "* bei den mit * bezeichneten zuegen findet omnibusueberfuehrung vom thueringer nach dem dresdener bahnhof statt.",
                BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Th_Bf, Leipzig_Dr_Bf] } }
            }, {
                q: "Dresdener Vorortzege s unter 6",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DresdenerVorortzuegesieheunter6 }) }
            }, {
                q: "! Zug 3 wartet nicht. Durchgangs-Gepaeck vom Zuge von Magdeburg-halle wird nicht ueberfuehrt.",
                BLOCK: { Standard: { scope: Zug, ZugWartetNicht: { ZugNr: "3", GepaeckVonNichtUeberfuehrt: [Magdeburg, Halle] } } }
            }, {
                q: "(Anschluss) von Erf (3:34)",
                BLOCK: { Standard: { scope: { kind: "ZubringerZellenFolge", startZelle: Frankfurt_M, endZelle: Leipzig_Th_Bf },
                        AnschlussZubringerAb: { Bhf: Erfurt, Zeit: ZHV(334) } } }
            }, {
                q: "von Mailand Stuttgart",
                BLOCK: { Standard: { scope: { kind: "ZubringerZellenFolge", startZelle: Frankfurt_M, endZelle: Leipzig_Th_Bf },
                        AnschlussZubringerAb: { WeitereFernStartpunkte: [Mailand, Stuttgart] } } }
            }, {
                q: "Buffetwagen Leipzig-Myslowitz",
                BLOCK: { Standard: { scope: Zug, Buffetwagen: [Leipzig, Myslowitz] } }
            }, {
                q: "s.a. unter 7",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Dr_Bf, endZeileBhf: Wurzen }, AllgemeineInfo: AllgemeineInfo.SieheUnter7 } }
            }
        ]
    }];
var x51 = [{
        head: "51",
        list: [{
                q: "Schlafwagen Leipzig Myslowitz",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Leipzig, Myslowitz] } }
            }, {
                q: "Schlafwagenkarten Leipzig Myslowitz I Kl 10 M, IIKL 8 M, Leipzig Breslau IKl 7M, II Kl 5_50M",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.Schlafwagenkarten_Leipzig_Myslowitz_I_Kl_10_M__IIKL_8M__Leipzig_Breslau_IKl_7M__IIKl_5_50M }) }
            }, {
                q: "b Casl ",
                c: "Caslau a.d. Strecke Caslau Nimburg Tetschen heute Caslav  ???",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Tetschen, endZelle: Wien_NWB }, AnschlussWeiterNach: { Bhf: Časlau } }) }
            },
            {
                q: "Alle Zuege II. u. III. Kl.",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Sonn- und Festtagszuege",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Nur Montags oder, wenn dieser ein Festtag ist, Dienstags. ",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
            }, {
                q: "III",
                BLOCK: { Standard: { scope: Zug, Klasse: Kl3 } }
            }
        ]
    }];
var x52 = [{
        head: "52",
        list: [{
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn- und Festtags.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "! Nur Montags und Donnerstags, ab 1.Juni täglich.",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Geltungstag: MontagsUndDonnerstagsUndAb1JuniTaeglich }, AnschlussZubringerIn: { Geltungstag: MontagsUndDonnerstagsUndAb1JuniTaeglich } } }
            }, {
                q: "In der Nacht nach Sonn- und Festtagen.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            },
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            },
            {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }
        ]
    }];
var x53 = [{
        head: "53",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "+ Hält Werktags für IV Klasse in Prösen",
                BLOCK: { Standard: { scope: Zug, haeltWerktagsFuerIVKlInProesen: true } }
            }, {
                q: "*SonnUndFesttags: 1132",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags, Zeit: ZHV(1132) } } }
            }, {
                q: "nach Chemnitz Ank.1155",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Chemnitz, AnkunftZeit: ZHV(1155) } }
            }, {
                q: "Nur Freitags.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Freitags } }
            },
            {
                q: "+ Hält Werktags für IV Klasse in Prösen",
                BLOCK: { Standard: { scope: Zug, haeltWerktagsFuerIVKlInProesen: true } }
            }, {
                q: "Nur Freitags.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Freitags } }
            }, {
                q: "pfeilstart",
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
            }, {
                q: "pfeilziel",
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
            },
            {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }
        ]
    }];
var x54 = [{
        head: "54 FKB30 Dresden Goerlitz",
        list: [
            {
                q: "direkte wagen s.u. 247",
                BLOCK: { Standard: { scope: Zug, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } }
            }, {
                q: "s.a.unt.3",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden_Neust_Schl_Bf, endZeileBhf: Arnsdorf }, AllgemeineInfo: AllgemeineInfo.SieheUnter3 } }
            }, {
                q: "Schlafwagen Leipzig-Myslowitz",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Leipzig, Myslowitz] } }
            }, {
                q: "Buffetwagen Leipzig Myslowitz",
                BLOCK: { Standard: { scope: Zug, Buffetwagen: [Leipzig, Myslowitz] } }
            }, {
                q: "Schnellzug n. Zittau-Reichenberg über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { Kategorie: "Schnellzug", nach: [Zittau, Reichenberg], ueber: Warnsdorf } } }
            }, {
                q: "Fahrkarten nach Lauban und weiter zum Zug 121 ohne Preiserhöhung über Kohlfurt ",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.FahrKartenNLaubanUndWeiterZumZug121ohnePreiserhoehungUeberKohlfurt }) }
            }, {
                q: "bis Horka",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterAb: { bis: Horka } } }
            },
            {
                q: "*Sonn-und Festtags:831",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussWeiterNach: { Zeit: ZHN(831) } } }
            }, {
                q: "S.u.F.",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
            }
        ]
    }];
var x55 = [{
        head: "55",
        list: [
            {
                q: "+vom 15.juni bis 15.september:335 ab breslau",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Bhf: Breslau, Zeit: ZHN(335) } } }
            }, {
                q: "Nur Sonnabends",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends } }
            }, {
                q: "Buffetwagen Myslowitz-Leipzig",
                BLOCK: { Standard: { scope: Zug, Buffetwagen: [Myslowitz, Leipzig] } }
            }, {
                q: "s.a.unt.3",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Arnsdorf, endZeileBhf: Dresden_Neust_Schl_Bf }, AllgemeineInfo: AllgemeineInfo.SieheUnter3 } }
            }, {
                q: "Schlafwagen Leipzig-Myslowitz",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Leipzig, Myslowitz] } }
            }, {
                q: "*Schnellzug v Reichenberg-Zittau über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: { Kategorie: "Schnellzug", aus: [Reichenberg, Zittau], ueber: Warnsdorf } } }
            },
            {
                q: "*mit Umst. in Bautzen",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { mitUmstiegIn: Bautzen } } }
            }, {
                q: "!Sonn und Festt:705",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussZubringerAb: { Zeit: ZHN(705) } } }
            }, {
                q: "Rückfahrkarten über Hermsdorf gelten auch über Warnsdorf und Bischofswerda",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.RueckfahrkartenUberHerrnhutGeltenAuchUeberWarnsdorfUndBischofswerda }) }
            }
        ]
    }];
var x56 = [{
        head: "56",
        list: [{
                q: "*Sonn und festtags 831",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags, Zeit: ZHN(831) } } }
            }, {
                q: "über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Eibau, abweichend: [Warnsdorf], wiederDaBhf: Zittau } } }
            }, {
                q: "über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Neugersdorf, abweichend: [Warnsdorf], wiederDaBhf: Zittau } } }
            }, {
                q: "von Loebau",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Löbau } }
            }, {
                q: "+nur sonn und festtags",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags } } }
            }]
    },
    {
        head: "56.31 Zittau-Bischofswerda ",
        list: [
            {
                q: "+nur sonn und festtags",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags } } }
            }, {
                q: "über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Zittau, abweichend: [Warnsdorf], wiederDaBhf: Eibau } } }
            }, {
                q: "über Warnsdorf",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Zittau, abweichend: [Warnsdorf], wiederDaBhf: Neugersdorf } } }
            }, {
                q: "nach Loebau Ank 819",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Löbau], AnkunftsZeit: ZHV(819) } } }
            }, {
                q: "nach Loebau Ank 704",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Löbau], AnkunftsZeit: ZHN(704) } } }
            }, {
                q: "nach Loebau Ank 931",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Löbau], AnkunftsZeit: ZHN(931) } } }
            },
            {
                q: "nach Loebau Ank 1129",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Löbau], AnkunftsZeit: ZHN(1129) } } }
            }
        ]
    }];
var x57 = [{
        head: "57.32 Reichenberg Eibau und zurueck ",
        list: [{
                q: "*In Oberullersdorf halten die Zuege nur zum Einsteigen",
                BLOCK: { Standard: check({ scope: { kind: "ZeilenFolge", startZeileBhf: Oberullersdorf, endZeileBhf: Oberullersdorf }, ZuegeHaltenNurZumEinsteigen: true }) }
            }, {
                q: "Nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "#850 I-III Sonn und festtags: aus reichenberg 246 , aus Machendorf 258 in Kratzau 307",
                c: "eigener Zug der eigentlich eigene spalte haette",
                BLOCK: { Standard: check({ scope: Global, ZugOhneSpalte: { Fahrtage: SonnUndFesttagsSowie1624mai1429juni15aug828sept,
                            Klasse: Kl1bis3, ZugNr: "850", weg: [{ bhfAb: Reichenberg, zeit: ZHN(246) }, { bhfAb: Machendorf, zeit: ZHN(258) }, { bhfAn: Kratzau, zeit: ZHN(307) }] } }) }
            }, {
                q: "10:00 in Kreibitz",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Kreibitz, Zeit: ZHN(1000) } } }
            },
            {
                q: "11:31 in Ebersbach",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Ebersbach, Zeit: ZHN(1131) } } }
            }, {
                q: "*In Oberullersdorf halten die Zuege nur zum Aussteigen",
                BLOCK: { Standard: check({ scope: { kind: "ZeilenFolge", startZeileBhf: Oberullersdorf, endZeileBhf: Oberullersdorf }, ZuegeHaltenNurZumAussteigen: true }) }
            }, {
                q: "+849 I-III Sonn und festtags: aus kratzau 315, aus machendorf 325 in reichenberg 335",
                c: "regulaere Zug der eigentlich eigene spalte haette",
                BLOCK: { Standard: check({ scope: Global, ZugOhneSpalte: { Fahrtage: SonnUndFesttagsSowie1624mai1429juni15aug828sept, Klasse: Kl1bis3, ZugNr: "849",
                            weg: [{ bhfAb: Kratzau, zeit: ZHN(315) }, { bhfAb: Machendorf, zeit: ZHN(325) }, { bhfAn: Reichenberg, zeit: ZHN(335) }] } }) }
            }, {
                q: "Zuege 849, 850, 852a, 853, 856, 857, 858 verkehren nur an sonn und festtagen sowie am 16 und 24 mai 14 u 29 juni, 15 august, 8 u 28 september",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttagsSowie1624mai1429juni15aug828sept, RedundanteZugNr: [849, 850, "852a", 853, 856, 857, 858] } }
            }]
    }, {
        head: "57.32 Oberoderwitz-Loebau und zurueck",
        list: [{
                q: "*mit Umsteigen in Bautzen",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Bautzen } } }
            }
        ]
    }];
var x58 = [{
        head: "58",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Rückfahrkarten zwischen sebnitz und dresden alt oder -neust über schandau, düröhrdorf pirna oder dürrörhrsdorf-arnsdoorf II460pf III310pf",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.RueckfahrkartenZwischenSebnitzUndDresdenAltOderNeustUeberSchandauDuerrsdorfPirnaOderDuerroehrsdorfArnsdorfII460pfIII310pf }) }
            }
        ]
    }];
var x59 = [{
        head: "59",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "*mit umsteigen in bautzen",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Bautzen } } }
            },
            {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            },
            {
                q: "#Zuege2699 und 2700 verkehren nur sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: [2699, 2700] } }
            }, {
                q: "+zug 2701 verkehrt nur donnerstags oder wenn dieser ein festtag ist am mittwoch vorher",
                BLOCK: { Standard: { scope: Zug, Fahrtage: DonnerstagOderWennDieserFesttagDannMittwochVorher, RedundanteZugNr: [2701] } }
            }, {
                q: "*mit umsteigen in bautzen",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Bautzen } } }
            },
            {
                q: "Alle Zuege II - III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "SonnUndFesttags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x60 = [{
        head: "60.41",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "+Zug 807 und 808 verkehren zwischen Cunewalde und Bautzen nur Sonnabends, Sonn- und Festtags",
                c: "807 ab Cunewalde nur manchmal",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Cunewalde }, Fahrtage: SonnabendsSonnUndFesttags, RedundanteZugNr: ["807"] }) }
            },
            {
                q: "+Zug 807 und 808 verkehren zwischen Cunewalde und Bautzen nur Sonnabends, Sonn- und Festtags",
                c: "808 bis koeblitz nur manchmal",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigBisBhf: Köblitz }, Fahrtage: SonnabendsSonnUndFesttags, RedundanteZugNr: ["808"] }) }
            }, {
                q: "*Nur Montags oder wenn dieser ein festtag ist dienstag sowie sonnabends",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends } }
            }, {
                q: "Von Cunewalde",
                c: "NICHT: Obercunewalde",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Cunewalde } }
            }, {
                q: "Von Obercunewalde",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Obercunewalde } }
            }, {
                q: "Nach Obercunewalde",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Obercunewalde } }
            }
        ]
    }, {
        head: "60.42 + 60.43",
        list: [{
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "!Montags und Sonnabends 535",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: MontagsUndSonnabends, AnschlussWeiterNach: { Zeit: ZHV(535) } } }
            }, {
                q: "!Montags und Sonnabends 550",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: MontagsUndSonnabends, AnschlussWeiterNach: { Zeit: ZHV(550) } } }
            }, {
                q: "+Nur Montags oder, wenn dieser ein Festtag ist, Dienstags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
            }
        ]
    }];
var x61 = [{
        head: "61",
        list: [{
                q: "(kleines viereck) Vom 15.Juni bis 15.September: s335",
                BLOCK: { Standard: {}, Abweichend: id({ scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Kategorie: "Schnellzug", Zeit: ZHN(3353) } }) }
            },
            {
                q: "Nur Donnerstags und Sonntags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: DonnerstagUndSonntag } }
            }, {
                q: "+nur im Juli und August",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: JuliUndAugust } }
            },
            {
                q: "!Sonn und festtags ab 20.mai bis ende august",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Mai21BisEndeAugust } }
            }, {
                q: "Sonn- und Festtagszuege",
                BLOCK: { Standard: id({ scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }) }
            },
            {
                q: "Görlitz-Nikrisch-Seidenberg: K.Eisenb.Dir. Breslau, Nikrisch-Zittau: Sächs. Staatsb.",
                BLOCK: {
                    Standard: id({ scope: (check({ kind: "ZeilenFolge", startZeileBhf: Görlitz, endZeileBhf: Nikrisch })), Verwaltung: "KEDBreslau" }),
                    Abweichend: id({ scope: check({ kind: "ZeilenFolge", startZeileBhf: Nikrisch, endZeileBhf: Zittau_Bf }), Verwaltung: "Saechs" })
                }
            },
            {
                q: "* Die Sonn-und Festtagszuege 617 und 618 verkehren nur bis ende august.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttagsBisEndeAugust, RedundanteZugNr: [617, 618] } }
            }, {
                q: "o Die Züge führen die IV.Wagenklasse auch Sonn.-und Festtags",
                c: "Auch obere Tabele, obwohl schwarzer Punkt nur zu erahnen",
                BLOCK: { Standard: { scope: Tabelle, Klasse4AuchSonnUndFesttags: true } }
            }
        ]
    }, {
        head: "61.44 Zittau Seidenberg Goerlitz",
        list: [
            {
                q: "    Alle Züge ii-iv.kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "* Die Sonn-und Festtagszuege 617 und 618 verkehren nur bis ende august.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttagsBisEndeAugust, RedundanteZugNr: [617, 618] } }
            }, {
                q: "+nur im Juli und August",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: JuliUndAugust } }
            }, {
                q: "nur Donnerstags und sonntags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: DonnerstagUndSonntag } }
            }, {
                q: "o Die Züge führen die IV.Wagenklasse auch Sonn.-und Festtags",
                BLOCK: { Standard: { scope: Tabelle, Klasse4AuchSonnUndFesttags: true } }
            }, {
                q: "anschluss aus zugnr 624",
                c: "",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Seidenberg, endZelle: Nikrisch }, ZugNr: "624" }) }
            }, {
                q: "anschluss aus zugnr 628",
                c: "",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Seidenberg, endZelle: Nikrisch }, ZugNr: "628" }) }
            }
        ]
    }];
var x62 = [{
        head: "62",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II - III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "+Die Züge 2632, 2635, 2639 (dieser von Bertsdorf bis Oybin), 2640, 2641 verkehren nur an Sonn- und Festtagen ab 20.Mai bis Ende August",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags20MaiBisEndeAugust, RedundanteZugNr: [2632, 2635, 2640, 2641] } }
            }, {
                q: "++Der Zug 2639 von Bertsdorf bis Oybin verkehrt nur an Sonn- und Festtagen ab 20.Mai bis Ende August",
                c: "frei gebastelt NM weil in einem zu komplex",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Bertsdorf, TZgueltigBisBhf: Oybin }, Fahrtage: SonnUndFesttags20MaiBisEndeAugust, RedundanteZugNr: [2639] }) }
            }, {
                q: "Nur im Juli und August",
                BLOCK: { Standard: { scope: Zug, Fahrtage: JuliUndAugust } }
            }, {
                q: "Nur im Mai, Juni und September",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MaiJuniSeptember } }
            }, {
                q: "Alle Zuege II - III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Nur in der Nacht nach Sonn- und Festtagen",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
            }, {
                q: "+Sonn und Festtags: 705",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: ZHN(705) } } }
            }
        ]
    }];
var x63 = [{
        head: "63.47 1/2",
        list: [{
                q: "S.Stb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Verkehrt nur Sonnabends.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends } }
            },
            {
                q: "+Verbindungen ohne Umsteigen von Dresden-Neust.",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { ohneUmstieg: true } } }
            }]
    },
    {
        head: "63.47 2/2",
        list: [
            {
                q: "S.Stb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            },
            {
                q: "+Verbindungen ohne Umsteigen bis Dresden-Neust.",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { ohneUmstieg: true } } }
            },
            {
                q: "oZug2744 verkehrt nur Montags oder, wenn dieser ein Festtag ist Dienstag ab Königsbrück, an allen anderen Werktagen nur von Moritzdorf aus.",
                BLOCK: {
                    Standard: { scope: Zug, Fahrtage: Werktags },
                    Abweichend: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Königsbrück_B, TZgueltigBisBhf: Moritzdorf }, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag, RedundanteZugNr: [2744] })
                }
            }
        ]
    },
    {
        head: "63.46 kpl",
        list: [{
                q: "Alle Zuege II - III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Nur Sonn- und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x64 = [{
        head: "64",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "o Schl.Bhf.",
                c: "muss das nach DD Neustadt statt Hbf ??? ??? -> zug endet schon in Neustadt s.Seite 27 !!!",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf } } }
            }, {
                q: "Nur in d Nacht n. Dienstag und Sonntag.",
                c: "Interpretation des 'nach' ist aus FKB So 1899 fuer den selben Zug uebernommen   ",
                BLOCK: { Standard: { scope: Zug, Fahrtage: DienstagsUndSonntags } }
            }
        ]
    }];
var x65 = [{
        head: "65.51 + 65.52",
        list: [{
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Züge II und III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "Sonn. und Festags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur in der Nacht jedes 1 mittwoch zum donnerstag im monat",
                BLOCK: { Standard: { scope: Zug, Fahrtage: nachtsNachDemErstenMittwochJedenMonats } }
            }, {
                q: "In der nacht nach sonn und festtag",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Alle Züge II und III Kl, Züge 2821 u. 2828 auch IV Kl",
                BLOCK: {
                    Standard: check({ scope: Global, Klasse: Kl2bis3 }),
                    Abweichend: check({ scope: { kind: "ZugNr", WichtigeZugNummern: ["2821", "2828"] }, Klasse: Kl2bis4 })
                }
            }]
    },
    {
        head: "65.43",
        list: [
            {
                q: "Sächs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Züge II und III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }
        ]
    }];
var x66 = [{
        head: "66",
        list: [{
                q: "dir wagen s 247",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Vorortzuege Dresden-tharandt s unter 2.",
                c: "diesmal nicht direkt vor betreffenden bahnhoefen angeordnet",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugeDresdenTharandtSieheUnter2 }) }
            }, {
                q: "Nur am werktage vor sonn und festtag",
                BLOCK: { Standard: { scope: Zug, Fahrtage: WerktageVorSonnUndFesttagen } }
            }, {
                q: "schlafwagen dresden muenchen",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Dresden, München] } }
            }, {
                q: "*von Meerane",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Meerane } }
            }, {
                q: "+von Meerane",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Meerane } }
            }]
    }];
var x67 = [{
        head: "67",
        list: [{
                q: "üb greiz",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Plauen_i_V, abweichend: [Greiz], wiederDaBhf: Reichenbach_i_V } } }
            }, {
                q: "siehe u 58",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Eger }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 } }
            }, {
                q: "s.u.56",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Hof }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 } }
            }, {
                q: "viereck: über schnabelwald",
                BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Hof, abweichend: [Schnabelwald], wiederDaBhf: München } } }
            }, {
                q: "bis weiden",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Weiden } }
            }, {
                q: "D I.II.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Reichenbach_i_V, TZgueltigBisBhf: Hof }, Kategorie: "DZug", Klasse: Kl1bis2 }) }
            }, {
                q: "!Nord Süd Express",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Kategorie: "Nord Sued Express" } } }
            }, {
                q: "n. I Kl",
                BLOCK: { Standard: { scope: Zelle, Klasse: Kl1 } }
            }, {
                q: "*Zug2039(II-IV.Kl) von Gössnitz",
                BLOCK: { Standard: { scope: Zug, ZugNr: "2039", Klasse: Kl2bis4, erreicheKbsAus: Gössnitz } }
            }]
    },
    {
        head: "67.55",
        list: [{
                q: "+ von Chemnitz",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Chemnitz } } }
            }, {
                q: "!Ueber Reichenbach i.V. ",
                c: " //Ue originalschreibung!!!",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Ueber: [Reichenbach_i_V] } } }
            }, {
                q: "IV Klasse wird auch an Tagen geführt, die in sachsen als festtage, in reuss aber als werktage gelten.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten }) }
            }, {
                q: "nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }
        ]
    }];
var x68 = [{
        head: "68",
        list: [{
                q: "siehe u 56",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Hof, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 }) }
            }, {
                q: "siehe u 58",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Eger, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 }) }
            }, {
                q: "siehe u 9",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Wüstenbrand, endZeileBhf: Chemnitz }, AllgemeineInfo: AllgemeineInfo.SieheUnter9 }) }
            }, {
                q: "+ mit umsteigen in Reichenbach iV s640",
                c: "FKB56 zeigt den anschluss in Reichenbach mit einem Pfeil 144->155",
                BLOCK: { Standard: {}, Alternative: id({ scope: Zelle, AnschlussZubringerAb: { Bhf: München, mitUmstiegIn: Reichenbach_i_V, Kategorie: "Schnellzug", Zeit: ZGN(640) } }) }
            }, {
                q: "Directe Wagen unter 247.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Von Würzburg",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Würzburg } }
            }, {
                q: "!Nord-Süd-Express",
                BLOCK: { Standard: { scope: { kind: "TeilZug", TZgueltigAbBhf: Hof, TZgueltigBisBhf: Reichenbach_i_V }, AnschlussWeiterNach: { Kategorie: "Nord Sued Express" } } }
            }, {
                q: "D I.II. ",
                BLOCK: { Standard: { scope: { kind: "TeilZug", TZgueltigAbBhf: Hof, TZgueltigBisBhf: Reichenbach_i_V }, Kategorie: "DZug", Klasse: Kl1bis2 } }
            }, {
                q: "nach Gössnitz",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Gössnitz } }
            }, {
                q: "Nach Meerane",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Meerane } }
            }
        ]
    }];
var x69 = [{
        head: "69",
        list: [{
                q: "+Ab Glauchau Nr. 1057 //Zugnr änderung",
                BLOCK: { Standard: { scope: { kind: "TeilZug", TZgueltigAbBhf: Glauchau }, ZugNr: 1057 } }
            }, {
                q: "Schlafwagen München Dresden",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [München, Dresden] } }
            }, {
                q: "Vorortzüge Tharandt Dresden siehe u.2.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugeDresdenTharandtSieheUnter2 }) }
            }, {
                q: "b.Tetsch",
                c: " durchgehender anschlusszug ",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Tetschen } }
            }]
    }, {
        head: "69.55",
        list: [{
                q: "i. Chemnitz",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Chemnitz } } }
            }, {
                q: "IV Klasse wird auch an Tagen geführt die in sachsen als festtage, in reuss aber als werktage gelten",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten }) }
            }, {
                q: "*mit umsteigen in crimmitschau",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Crimmitschau } } }
            }, {
                q: "!ueber reichenbach i.V.",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Ueber: [Reichenbach_i_V] } } }
            }
        ]
    }];
var x70 = [{
        head: "70",
        list: [
            {
                q: "+IV Kl auch sonn und festtags",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Schönefeld, endZeileBhf: Leipzig_Bayr_Bf }, AllgemeineInfo: AllgemeineInfo.IVKlAuchSonnUndFeiertags }) }
            }, {
                q: "s.a.u.8",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Bayr_Bf, endZeileBhf: Kieritzsch }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 }) }
            }, {
                q: "L == Luxuszug, nur mit Fahrk. I.Kl. (Schnellz.) u. geg. besond.Zuschlag benutzb.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.L_Luxuszug__nur_mit_Fahrk__I_Kl__Schnellz__u__geg__besond__Zuschlag_benutzb }) }
            }, {
                q: "Speisewagen Berlin-Münch.",
                BLOCK: { Standard: id({ scope: Zug, Speisewagen: [Berlin, München] }) }
            }, {
                q: "n.Zw.",
                c: "Zugbeginn HN908 siehe FKB61 Meerane ankunft vs Abfahrt 1 minute unterschied...939 ab schoenboernchen, Ankunft S.67 um 1008 in Zwickau",
                BLOCK: { Standard: id({ scope: Zug, verlasseKbsNach: Zwickau }) }
            }, {
                q: "Nord-Süd-Expresszug (Brenner)",
                BLOCK: { Standard: id({ scope: Zug, Kategorie: "Nord Sued Express" }) }
            }, {
                q: "von Dresden",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Dresden } }
            }, {
                q: "direkter Wagen I II Kl Leipzig Muenchen",
                BLOCK: { Standard: { scope: Zug, DirekterWagen: [Leipzig, München], DirekterwagenKlasse: Kl1bis2 } }
            }, {
                q: "Schlaf und Bufettwagen Berlin Muenchen",
                BLOCK: { Standard: { scope: Zug, Speisewagen: [Berlin, München], Buffetwagen: [Berlin, München] } }
            }, {
                q: "D==Durchgangszug, bei welchem ausser dem Fahrpreis Platzgebühren erhoben werden und zwar für Strecken bis 150km 1,00M über 150km 2,00M",
                c: "//ausser original mit 2x s",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.D__Durchgangszug__bei_welchem_ausser_dem_Fahrpreis_Platzgebuehren_erhoben_werden_und_zwar_fuer_Strecken_bis_150km_1_00M_ueber_150km_2_00M }) }
            }
        ]
    }];
var x71 = [{
        head: "71",
        list: [{
                q: "   s.a.58",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Plauen_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 } }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "nach Eger(Ank329)",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Eger], Kategorie: "Schnellzug", AnkunftsZeit: ZHN(329) } } }
            }, {
                q: "I-IV Kl",
                BLOCK: { Standard: { scope: { kind: "TeilZug", TZgueltigAbBhf: Plauen_i_V, TZgueltigBisBhf: Hof }, Klasse: Kl1bis4 } }
            }, {
                q: "b.Weiden",
                c: "anschlusszug verlauf ",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Hof, endZelle: München }, mehrZeiligerAnschlusszugFaehrtNach: Weiden }) }
            }, {
                q: "(rechteck) bei den mit (rechteck) bezeichneten Zügen findet in Leipzig Omnibusüberführung vom Magdeburg. nach dem Bayr.Bhf. statt.",
                BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Magd_Bf, Leipzig_Bayr_Bf] } }
            }, {
                q: "Direkte Wagen siehe 247.",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Schlafwagen Dresden Muenchen",
                BLOCK: { Standard: { scope: Zug, Schlafwagen: [Dresden, München] } }
            }, {
                q: "nach Eger (Ank533)",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Eger], Kategorie: "Schnellzug", AnkunftsZeit: ZMV(533) } } }
            }, {
                q: "!über Schnabelwald",
                c: "detail eines Anschlusszuges mit mehreren Zeilen",
                BLOCK: { Standard: { scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Hof, endZelle: Nürnberg }, AnschlussWeiterNach: { Ueber: [Schnabelwald] } } }
            }, {
                q: "Saechs Staatsb",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "s.u.8",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Connewitz, endZeileBhf: Oetzsch }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 } }
            }, {
                q: "Sonn- und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }
        ]
    }];
var x72 = [{
        head: "72f",
        list: [{
                q: "s.auch 58",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Plauen_i_V, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 }) }
            }, {
                q: "Nur werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "*ab Rchb. Nr. 233",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Reichenbach_i_V }, ZugNr: 233 }) }
            }, {
                q: "+ab Werdau Nr. 205",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Werdau }, ZugNr: 205 }) }
            }, {
                q: "von Eger",
                BLOCK: { Standard: id({ scope: Zug, erreicheKbsAus: Eger }) }
            }, {
                q: "v.Zw.",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Chemnitz, endZelle: Gössnitz }, mehrzeiligerAnschlusszugKommtAus: Zwickau }) }
            }, {
                q: "217 I-III",
                BLOCK: { Standard: id({ scope: Zug, ZugNr: 217, Klasse: Kl1bis3 }) }
            }, {
                q: "!über Schnabelw.",
                c: "detail eines Anschlusszuges mit mehreren Zeilen;   evtl ZubringerAb und ZubringerIn in verschiedene Bloecke fassen ???",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { Ueber: [Schnabelwald] } }) }
            }, {
                q: "Schlafwagen Münch Dresden",
                BLOCK: { Standard: id({ scope: Zug, Schlafwagen: [München, Dresden] }) }
            }, {
                q: "nach Dresden Ank502",
                BLOCK: { Standard: id({ scope: Zug, verlasseKbsNach: { nach: [Dresden], Kategorie: "Schnellzug", AnkunftsZeit: ZHN(502) } }) }
            }, {
                q: "schlaf und buffetwagenmuenchen berlin",
                BLOCK: { Standard: id({ scope: Zug, Schlafwagen: [München, Berlin], Buffetwagen: [München, Berlin] }) }
            }, {
                q: "Nord-Süd-Express-Zug(Brenner)",
                BLOCK: { Standard: id({ scope: Zug, Kategorie: "Nord Sued Express" }) }
            }]
    }];
var x73 = [{
        head: "73",
        list: [
            {
                q: "s a u 8",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Kieritzsch, endZeileBhf: Leipzig_Bayr_Bf }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 }) }
            }, {
                q: "+IV.Kl. auch Sonn und Festtag",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Bayr_Bf, endZeileBhf: Leipzig_Berl_Bf }, AllgemeineInfo: AllgemeineInfo.IVKlAuchSonnUndFeiertags }) }
            },
            {
                q: "speisewagen muenchen berlin",
                BLOCK: { Standard: id({ scope: Zug, Speisewagen: [München, Berlin] }) }
            }, {
                q: "b coeth",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Leipzig_Magd_Bf, endZelle: Magdeburg }, mehrZeiligerAnschlusszugFaehrtNach: Cöthen }) }
            }, {
                q: "(Rechteck) bei den mit (rechteck) bezeichneten Zuegen findet in Leipzig omnibusueberfuehrung vom Bayr. nach dem Magdeb. Bhf. statt.",
                BLOCK: { Standard: id({ scope: Zug, OmnibusUeberfuehrung: [Leipzig_Bayr_Bf, Leipzig_Magd_Bf] }) }
            }
        ]
    },
    {
        head: "73.57",
        list: [
            {
                q: "Saechs.Staatsb.  //oben links",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            },
            {
                q: "+in der auf einen sonn oder festtag folgenden nacht",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht }) }
            }, {
                q: "s.a.u.8",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Connewitz, endZeileBhf: Oetzsch }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 }) }
            }, {
                q: "nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "247 II-IV",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Gaschwitz, TZgueltigBisBhf: Leipzig_Bayr_Bf }, ZugNr: 247, Klasse: Kl2bis4 }) }
            }
        ]
    }
];
var x74 = [{
        head: "74",
        list: [
            {
                q: "Directe Wagen s.u.247",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            },
            {
                q: "In Voitersreuth Zollrevision",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.InVoitersreuthZollrevision }) }
            }, {
                q: "su54",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Dresden_Hptbf }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 }) }
            }, {
                q: "su56",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Magdeburg }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 }) }
            }, {
                q: "+verkehrt vom 1.Mai bis 15.Sept. ausschl. der Sonn und Festtage sowie des 14.Juni",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni }) }
            }, {
                q: "! ueb Mrkt Redwitz",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: München, endZelle: Eger }, AnschlussZubringerAb: { Ueber: [Marktredwitz] } }) }
            }, {
                q: "+I.Kl. u. nur von 15.6. bis 15.9.",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Karlsbad, endZelle: Eger }, Fahrtage: Vom15JuniBis15September, Klasse: Kl1 }) }
            }, {
                q: "x ueber Franzensbad",
                c: "Zubringer, der nicht durch eger fahert",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { Ueber: [Franzensbad] } }) }
            }, {
                q: "+ I.Kl u. nur von  15.5. bis 15.9. ",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Karlsbad, endZelle: Eger }, Fahrtage: Vom15MaiBis15September, Klasse: Kl1 }) }
            }, {
                q: "nach Gera Ankunft 1010 ",
                BLOCK: { Standard: id({ scope: Zug, verlasseKbsNach: { nach: [Gera], AnkunftsZeit: ZHV(1010) } }) }
            }, {
                q: "*Zug 2085 haelt bis mit 15.Septbr. auch in Antonienhoehe an ",
                BLOCK: { Standard: {}, Abweichend: id({ scope: Zug, GeltungsTag: bis15September, haeltAuchIn: Antonienhöhe, RedundanteZugNr: ["2085"] }) }
            }, {
                q: "*I-IV Kl ",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Adorf, TZgueltigBisBhf: Reichenbach_i_V }, Klasse: Kl1bis4 }) }
            }, {
                q: "*Zuege 2105 und 2107 verkehren nur bis mit 15.September",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: bis15September, RedundanteZugNr: ["2105", "2107"] }) }
            }, {
                q: "*Zug der Bayr. Staatsbahnen.",
                BLOCK: { Standard: id({ scope: Zug, Verwaltung: "Bay" }) }
            }, {
                q: "!D. I.II.",
                BLOCK: { Standard: id({ scope: Zelle, Kategorie: "DZug", Klasse: Kl1bis2 }) }
            }, {
                q: "211 I-IV ",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Plauen_i_V, TZgueltigBisBhf: Reichenbach_i_V }, ZugNr: 211, Klasse: Kl1bis4 }) }
            }, {
                q: "Sonn und festtags vom 20 mai bis 16.sept sowie am 5 juni ",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags20MaiBis16SeptSowie5Juni }) }
            }
        ]
    }];
var x75 = [{
        head: "75",
        list: [{
                q: "Directe Wagen s.u.247",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "In Voitersreuth Zollrevision",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.InVoitersreuthZollrevision }) }
            }, {
                q: "+ueber Greiz //anschluss zubringer aus",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { Ueber: [Greiz] } }) }
            }, {
                q: "*nur I.Kl",
                BLOCK: { Standard: id({ scope: Zelle, Klasse: Kl1 }) }
            }, {
                q: "*D I II",
                BLOCK: { Standard: id({ scope: { kind: "ZubringerZellenFolge", startZelle: Dresden, endZelle: Reichenbach_i_V }, Kategorie: "DZug", Klasse: Kl1bis2 }) }
            }, {
                q: "+Zuege 2106 u. 2108 verkehren nur bis mit 15.September",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: bis15September, RedundanteZugNr: ["2106", "2108"] }) }
            }, {
                q: "(RAUTE) Zug 2082 haelt bis mit 15.Sept auch in antonienhoehe an",
                BLOCK: { Standard: {}, Abweichend: id({ scope: Zug, GeltungsTag: bis15September, haeltAuchIn: Antonienhöhe, RedundanteZugNr: ["2082"] }) }
            }, {
                q: "(kleiner endstarn) Zuege der Bayer. Staatsbahnen",
                BLOCK: { Standard: id({ scope: Zug, Verwaltung: "Bay" }) }
            }, {
                q: "von Gera abf 450",
                BLOCK: { Standard: id({ scope: Zug, erreicheKbsAus: { aus: [Gera], AbfahrtsZeit: ZHV(450) } }) }
            }, {
                q: "von Gera abf 742",
                BLOCK: { Standard: id({ scope: Zug, erreicheKbsAus: { aus: [Gera], AbfahrtsZeit: ZHV(742) } }) }
            }, {
                q: "** I.-IIIKl. //geschweifte klammer",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Adorf, TZgueltigBisBhf: Eger }, Klasse: Kl1bis3 }) }
            }, {
                q: "s.u.56",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Magdeburg, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 }) }
            }, {
                q: "s.u.54",
                BLOCK: { Standard: id({ scope: { kind: "ZeilenFolge", startZeileBhf: Dresden, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter54 }) }
            }, {
                q: "Pfeilstart",
                c: "Anschluss hier an zugende in anderen zug mittenrein",
                BLOCK: { Standard: id({ scope: Zelle, PfeilStart: 1 }) }
            }, {
                q: "Pfeilende",
                c: "Mitten rein in anderen Zuglauf !!!",
                BLOCK: { Standard: id({ scope: Zelle, PfeilZiel: 1 }) }
            }, {
                q: "(grosser endstern) ueber Franzensbad",
                c: "anderer startort des anschlusses, muss vor eger umnsteigen !!!",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Eger, endZelle: Karlsbad }, AnschlussWeiterAb: { Bhf: Franzensbad } }) }
            }, {
                q: "!ueber Marktredwitz",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Eger, endZelle: München }, AnschlussWeiterNach: { Ueber: [Marktredwitz] } }) }
            }, {
                q: "(rechteck) I.Kl u  nur von 15juni b 15 sept",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Eger, endZelle: Karlsbad }, Fahrtage: Vom15JuniBis15September, Klasse: Kl1 }) }
            }, {
                q: "+ I.Kl u nur von 16.V. b 16.IX",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Eger, endZelle: Karlsbad }, Fahrtage: vom16maibis16sept, Klasse: Kl1 }) }
            }, {
                q: "(geschweifte klammer) von 15.6 b. 15.8",
                c: "Anschluss weiter L 6:55 nach wien",
                BLOCK: { Standard: id({ scope: Zelle, GeltungsTag: vom15junibis15august }) }
            }, {
                q: "(geschweifte klammer) ueber M.Redwitz",
                BLOCK: { Standard: id({ scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Eger, endZelle: München }, AnschlussWeiterNach: { Ueber: [Marktredwitz] } }) }
            }]
    }];
var x76 = [{
        head: "76",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Sonn und festtags sowie mittwochs",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttagsSowieMittwochs }) }
            }, {
                q: "!Saechs Bhf",
                BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Gera_Reuss_S_St_B } } }
            }, {
                q: "!Gera (Reuss) Saechs. Bhf.",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Gera_Reuss_S_St_B } } }
            }, {
                q: "* in Altenburg",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Altenburg } } }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }]
    }];
var x77 = [{
        head: "77",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Dir Wag S 247",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Sonn - und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Sonn- und festtags sowie am 5.juni (Pfingstdienstag)",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttagsSowie5Juni } }
            }, {
                q: "i. Bad Elster",
                BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Bad_Elster } } }
            }]
    }];
var x78 = [{
        head: "78",
        list: [
            {
                q: "Dir. Wagen s. 247",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "Sonn- und Festtags.",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Ausserdem: Zug 2046a (II.-IV. Kl.): ab Meerane 330, in Goessnitz 341",
                BLOCK: { Standard: id({ scope: Zug, ZugOhneSpalte: { Klasse: Kl2bis4, ZugNr: "2046a", weg: [{ bhfAb: Meerane, zeit: ZHN(330) }, { bhfAn: Gössnitz, zeit: ZHN(341) }] } }) }
            }, {
                q: "Ausserdem: Zug 2045a (II.-IV. Kl.): ab Goessnitz 354, in Meerane 405",
                BLOCK: { Standard: id({ scope: Zug, ZugOhneSpalte: { Klasse: Kl2bis4, ZugNr: "2045a", weg: [{ bhfAb: Gössnitz, zeit: ZHN(354) }, { bhfAn: Meerane, zeit: ZHN(405) }] } }) }
            }
        ]
    }];
var x79 = [{
        head: "79",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "+Sonn und Festtags: 1139",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftZeit: ZHN(1139) } }
            }]
    }];
var x80 = [{
        head: "80",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege fuehren nur e i n e Wagenklasse.",
                BLOCK: { Standard: id({ scope: Tabelle, Klasse: KlNurEine }) }
            }, {
                q: "Ausserdem: an Sonn- und Festtagen: 820 von Reichenbach i.V. unt.Bhf nach Mylau Haltest",
                BLOCK: { Standard: id({ scope: Zug, ZugOhneSpalte: { Fahrtage: SonnUndFesttags, weg: [{ bhfAb: Reichenbach_i_V_u_B, zeit: ZHN(820) }, { bhfAn: Mylau_Hst }] } }) }
            }, {
                q: "Ausserdem: an Sonn- und Festtagen: 800 von  Mylau Haltest nach Reichenbach i.V. unt.Bhf ",
                BLOCK: { Standard: id({ scope: Zug, ZugOhneSpalte: { Fahrtage: SonnUndFesttags, weg: [{ bhfAb: Mylau_Hst, zeit: ZHN(800) }, { bhfAn: Reichenbach_i_V_u_B }] } }) }
            }, {
                q: "Ausserdem: an Werktagen: 715 von Mylau Bhf nach Reichenbach i.V. unt.Bhf",
                BLOCK: { Standard: id({ scope: Zug, ZugOhneSpalte: { Fahrtage: Werktags, weg: [{ bhfAb: Mylau_Bahnhof, zeit: ZHN(715) }, { bhfAn: Reichenbach_i_V_u_B }] } }) }
            }, {
                q: "In der Nacht nach Sonn- u. Festtagen",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht }) }
            }, {
                q: "Sonn- und Festtags.",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }]
    }];
var x81 = [{
        head: "81",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "*ab Falkenstein nur II. u. III. Kl.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Falkenstein }, Klasse: Kl2bis3 }) }
            }, {
                q: "+ab Falkenstein auch IV. Kl.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Falkenstein }, Klasse: Kl2bis4 }) }
            }, {
                q: "Alle Zuege II. III.Kl.",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x82 = [{
        head: "82",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "+Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "ueb Lausigk in Leipzig Ank 1024 ",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Leipzig], ueber: Lausigk, Kategorie: "Schnellzug", AnkunftsZeit: ZHV(1024) } } }
            }, {
                q: "ub Lausigk in Leipzig Ank 925",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Leipzig], ueber: Lausigk, Kategorie: "Schnellzug", AnkunftsZeit: ZHN(925) } } }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "(rund) Bei den mit(rund) bezeichneten Zuegen findet in Leipzig Omnibusueberfuehrung vom Bayer. nach dem Magdeb. Bahnhof zu den Anschlusszuegen statt",
                BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrungZuAnschlusszuegen: [Leipzig_Bayr_Bf, Leipzig_Magd_Bf] } }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "*Ab Wittgensdorf bis Chemnitz Zug 1654 I-IV Kl",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Wittgensdorf, TZgueltigBisBhf: Chemnitz }, ZugNr: "1654", Klasse: Kl1bis4 }) }
            }]
    }];
var x83 = [{
        head: "83",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "Von Leipzig (840 Abf) ueber Lausigk",
                BLOCK: { Standard: id({ scope: Zug, erreicheKbsAus: { aus: [Leipzig], AbfahrtsZeit: ZHV(840), ueber: Lausigk } }) }
            }, {
                q: "Von Leipzig (635 Abf) ueber Lausigk",
                BLOCK: { Standard: id({ scope: Zug, erreicheKbsAus: { aus: [Leipzig], AbfahrtsZeit: ZHV(635), ueber: Lausigk } }) }
            }, {
                q: "+Zug 1640 haelt auch in Oetzsch",
                BLOCK: { Standard: id({ scope: Zug, RedundanteZugNr: ["1640"], haeltAuchIn: Oetzsch }) }
            }, {
                q: "(rund) Bei den mit(rund) bezeichneten Zuegen findet in Leipzig Omnibusueberfuehrung vom Magdeb. nach dem Bayer Bahnhof zu den Anschlusszuegen statt",
                BLOCK: { Standard: id({ scope: Zug, OmnibusUeberfuehrungZuAnschlusszuegen: [Leipzig_Magd_Bf, Leipzig_Bayr_Bf] }) }
            }, {
                q: "*Zug 1730 ist von Chemnitz bis Wittgensdorf Schnellzug I.-III.Kl.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Chemnitz, TZgueltigBisBhf: Wittgensdorf },
                        ZugNr: "1730", Kategorie: "Schnellzug", Klasse: Kl1bis3 }) }
            }, {
                q: "Alle Zuege II - IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }]
    }];
var x84 = [{
        head: "84",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "*Sonn- und Festtags",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
            }]
    }];
var x85 = [{
        head: "85 (KBS75..)",
        list: [{
                q: "Nur Mittwochs und Sonnabends",
                BLOCK: { Standard: { scope: Zug, Fahrtage: MittwochsUndSonnabends } }
            }, {
                q: "In der Nacht v. Mittwoch z. Donnerstag und vom Sonnabend z. Sonntag.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag } }
            }]
    }];
var x86 = [{
        head: "86",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x87 = [{
        head: "87",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x88 = [{
        head: "88 (kbs81) Chemnitz Riesa Roederau",
        list: [
            {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }
        ]
    },
    {
        head: "88 Kriebethal Waldheim extratabelle",
        list: [
            {
                q: "Nur Sonn- und Festtags Dir Wagen 247 II-III Kl",
                c: "Waldheim Kriebethal wurde nur im sommer am WE im Personenverkehr bedient !!!"
                    + "Komplette Tabelle mitten drin -> auslagern in untertabelle!!!",
                BLOCK: { Standard: id({ scope: Tabelle, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 }) }
            }
        ]
    },
    {
        head: "88 fkb81a Strehla Oschatz",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x89 = [{
        head: "89 (KBS81 forts.)",
        list: [{
                q: "v. Noss",
                c: " eintrag in AnschlussZubringerAus Zeile ohne zeit aber mit anderem Bhf als zeile eigentlich hat",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { Bhf: Nossen } }) }
            }, {
                q: "v. Leisn.",
                c: " eintrag in AnschlussZubringerAus Zeile ohne zeit aber mit anderem Bhf als zeile eigentlich hat",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { Bhf: Leisnig } }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }]
    },
    {
        head: "89 Waldheim Kriebethal extratabelle",
        list: [
            {
                q: "Nur Sonn- und Festtags  II-III Kl",
                c: "Waldheim Kriebethal wurde nur im sommer am WE im Personenverkehr bedient !!!"
                    + "Komplette Tabelle mitten drin -> auslagern in untertabelle!!!",
                BLOCK: { Standard: id({ scope: Tabelle, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3 }) }
            }
        ]
    },
    {
        head: "89 fkb81a Oschatz Strehla",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II u III Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x90 = [{
        head: "90 (KBS82)",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Rueckfahrk. Leipz-Grimma ueb Wurzen oder Naunhof",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.Rueckfahrk_Leipz_Grimma_ueb_Wurzen_oder_Naunhof }) }
            }, {
                q: "Umwegkarten Wurzen-Borsdorf-Grossbothen und umgek. zu Fahrk. nach Grossboth. etc. ueb. Nerchau",
                BLOCK: { Standard: check({ scope: Global, AllgemeineInfo: AllgemeineInfo.Umwegkarten_Wurzen_Borsdorf_Grossbothen_und_umgek_zu_Fahrk_nach_Grossboth_etc_ueb_Nerchau }) }
            },
            {
                q: "Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }]
    }];
var x91 = [{
        head: "91",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur am 1. Mittw. jed. Mon., demnach i.d. Nacht v.2/3mai, 6/7 juni, 4/5 juli, 1/2 aug. u 5/6 Sept",
                BLOCK: { Standard: { scope: Zug, Fahrtage: ersterMittwochJedenMonatsDH2mai6juni4juli1august5september } }
            }, {
                q: "+Sonn und festtags",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Grossbothen, TZgueltigBisBhf: Rochlitz }, Fahrtage: SonnUndFesttags }) }
            }]
    }];
var x92 = [{
        head: "92 (Wechselburg-chemnitz erst 1902 eroeffnet)",
        list: []
    }];
var x93 = [{
        head: "93",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II-IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "Nur Sonn- und Festtags mit IIuIII Kl",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3 } }
            }, {
                q: "+Zug 5584 haelt Sonn u Festtags auch in Roedlitz",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, haeltAuchIn: Rödlitz } }
            }, {
                q: "II-III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x94 = [{
        head: "94 (KBS85f)",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Sonn und festtags im juni, juli und august",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttagsInJuniJuliUndAugust }) }
            }, {
                q: "+Zug 1394 faehrt im Mai und September taeglich, in der uebrigen Zeit nur werktags",
                BLOCK: { Standard: id({ scope: Zug, RedundanteZugNr: ["1394"], Fahrtage: MaiUndSeptemberTaeglichSonstWerktags }) }
            }, {
                q: "S.Stb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }, {
                q: "++nur Sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }
        ]
    }];
var x95 = [{
        head: "95 (fkb85-88)",
        list: [
            {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "(rund) von Annaberg bis Erdmansdorf nur montags, von Erdmansdorf bis chemnitz an allen werktagen",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }),
                    Abweichend: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Annaberg, TZgueltigBisBhf: Erdmannsdorf }, Fahrtage: Montags }) }
            }, {
                q: "Sonn und festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Sonn und festtags im juni, juli und august",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttagsInJuniJuliUndAugust }) }
            }, {
                q: "+ Zug 1395 verkehrt im Mai und septembertaeglich, in der uebrigen Zeit nur Werktags.",
                BLOCK: { Standard: id({ scope: Zug, RedundanteZugNr: ["1395"], Fahrtage: MaiUndSeptemberTaeglichSonstWerktags }) }
            }, {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }
        ]
    }];
var x96 = [{
        head: "96",
        list: [
            {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "**Von chemnitz bis Floeha Zug 1009 mit I-IV Kl",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Chemnitz, TZgueltigBisBhf: Flöha }, ZugNr: "1009", Klasse: Kl1bis4 }) }
            }, {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II bis IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }
        ]
    }];
var x97 = [{
        head: "97 ",
        list: [{
                q: "Saechs Staatsb",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "!Umsteigen in Floeha in Zug1018 (s.Nr.54)  //Anschluss_zubringer_aus, der aber intern ein umsteigen fordert wenn man aus dresden kommt",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussZubringerAb: { mitUmstiegIn: Flöha, mitUmstiegInZugNr: "1018" } }) }
            }, {
                q: "+Mit Umsteigen in floeha unter Benutzung der Zuege 1069/107 (s.Nr.11 u 54)",
                BLOCK: { Standard: id({ scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Flöha, mitUmstiegInZugNr: [1069, 107], mitUmstiegSieheKbs: [11, 54] } }) }
            }, {
                q: "SaechsStaatsb //global",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            }]
    }];
var x98 = [{
        head: "98 (FKB94f)",
        list: [{
                q: "Saechs staatsb",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Nur Sonn- und Festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "Nur am Werkktage vor Sonn- und Festtag.",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: WerktageVorSonnUndFesttagen }) }
            }, {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II-IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }]
    }];
var x99 = [{
        head: "99 (FKB94f rueck)",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "Sonn- und Festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }, {
                q: "Nur Werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "! ab Zwoenitz nur II.III.Kl.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Zwönitz }, Klasse: Kl2bis3 }) }
            }, {
                q: "II-IV Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }
        ]
    }];
var x100 = [{
        head: "100 (FKB96 hin)",
        list: [{
                q: "S. Stb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            }, {
                q: "Nur Werktags.",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: Werktags }) }
            }, {
                q: "Nur Sonn- und Festtags",
                BLOCK: { Standard: id({ scope: Zug, Fahrtage: SonnUndFesttags }) }
            }
        ]
    }];
var x101 = [{
        head: "101 (FKB98)",
        list: [
            {
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: id({ scope: Tabelle, Verwaltung: "Saechs" }) }
            }, {
                q: "s.a.94",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Muldenberg, endZeileBhf: Zwota }, AllgemeineInfo: AllgemeineInfo.SieheUnter94 } }
            }, {
                q: "**II.-IV.Kl.",
                BLOCK: { Standard: check({ scope: { kind: "ZeilenFolge", startZeileBhf: Zwota, endZeileBhf: Klingenthal }, Klasse: Kl2bis4 }) }
            }, {
                q: "*Werktags",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: Werktags } }
            }, {
                q: "s.a.94",
                c: "kein platz fuer regulaere klassenzeile unter zugnr, daher ganzer block zugewiesen",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Zwota, endZeileBhf: Muldenberg }, AllgemeineInfo: AllgemeineInfo.SieheUnter94 } }
            }, {
                q: "**II.-IV.Kl.",
                BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Klingenthal, endZeileBhf: Zwota }, Klasse: Kl2bis4 } }
            }
        ]
    }];
var x102 = [
    {
        head: "102 (FKB99)",
        list: [
            {
                q: "Saechs Staatsb",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "nach Stollberg",
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Stollberg } }
            }, {
                q: "(rund) Zug 1961",
                BLOCK: { Standard: { scope: Zug, ZugNr: 1961 } }
            }, {
                q: "? Zug 1963",
                BLOCK: { Standard: { scope: Zug, ZugNr: 1963 } }
            }, {
                q: "Sonn und Festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur Werktags.",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "Pfeil",
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
            }, {
                q: "Pfeil",
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
            }, {
                q: " *Zug2041 II-IV",
                BLOCK: { Standard: { scope: Zug, ZugNr: 2041, Klasse: Kl2bis4 } }
            }
        ]
    }
];
var x103 = [{
        head: "103.99",
        list: [
            {
                q: "** Zug 218 I.-III.",
                BLOCK: { Standard: { scope: Zug, ZugNr: 218, Klasse: Kl1bis3 } }
            }, {
                q: "Sonn- und festtags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur werktags",
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "+Ab Zwickau Zug 2064 II.-IV.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Zwickau }, ZugNr: 2064, Klasse: Kl2bis4 }) }
            }, {
                q: "!Ab Zwickau Zug 2054 II.-IV.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Zwickau }, ZugNr: 2054, Klasse: Kl2bis4 }) }
            }, {
                q: "(rund) Ab Zwickau Zug 2060 II.-IV.",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Zwickau }, ZugNr: 2060, Klasse: Kl2bis4 }) }
            }, {
                q: "von Stollberg",
                BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Stollberg } }
            }, {
                q: "**Zug 1996",
                BLOCK: { Standard: id({ scope: { kind: "TeilZug", TZgueltigAbBhf: Schlettau, TZgueltigBisBhf: Annaberg }, ZugNr: 1996 }) }
            }
        ]
    }];
var x104 = [{
        head: "104",
        list: [{
                q: "Saechs. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            }, {
                q: "Alle Zuege II IV Klasse",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            },
            {
                q: "*Sonn und Festtags",
                c: "//*644 Anschluss nur sonntags sozusagen",
                BLOCK: { Standard: id({ scope: Zelle, GeltungsTag: SonnUndFesttags }) }
            }
        ]
    }];
var x105 = [{
        head: "105",
        list: [
            {
                q: "S. Staatsb.",
                BLOCK: { Standard: check({ scope: Global, Verwaltung: "Saechs" }) }
            },
            {
                q: "Alle Zuege II.-IV.Kl.",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis4 }) }
            },
            {
                q: "*Sonn und festtags: 830",
                c: "//anschluss zubringer aus: geaenderte Zeit",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AbfahrtsZeit: HN830 } }
            },
            {
                q: "Alle Zuege II u III Kl",
                BLOCK: { Standard: check({ scope: Global, Klasse: Kl2bis3 }) }
            },
            {
                q: "+Direkter Wagen zwischen Werdau und Karlsbad",
                BLOCK: { Standard: { scope: Zug, DirekterWagen: [Werdau, Karlsbad] } }
            }
        ]
    }];
var xall = [];
var pagelistlist = [x24, x25, x26, x27, x28, x29,
    x30, x31, x32, x33, x34, x35, x36, x37, x38, x39,
    x40, x41, x42, x43, x44, x45, x46, x47, x48, x49,
    x50, x51, x52, x53, x54, x55, x56, x57, x58, x59,
    x60, x61, x62, x63, x64, x65, x66, x67, x68, x69,
    x70, x71, x72, x73, x74, x75, x76, x77, x78, x79,
    x80, x81, x82, x83, x84, x85, x86, x87, x88, x89,
    x90, x91, x92, x93, x94, x95, x96, x97, x98, x99,
    x100, x101, x102, x103, x104, x105
];
pagelistlist.forEach(function (xl) {
    xall = xall.concat(xl);
});
var xalt = [];
[x102, x103, x104, x105].forEach(function (xl) {
    xalt = xalt.concat(xl);
});
var statistics = function (input) {
    console.log("do statistics");
    var scopekeys = {};
    var useds = {};
    input.forEach(function (p) {
        p.list.forEach(function (ent) {
            ["Standard", "Abweichend", "Alternative"].forEach(function (saa) {
                var Block = ent.BLOCK;
                if (Block[saa]) {
                    if (Block[saa].scope !== undefined) {
                        var b = Block[saa];
                        var currentscope_1 = b.scope.kind;
                        if (scopekeys[b.scope.kind] === undefined) {
                            scopekeys[b.scope.kind] = 1;
                        }
                        else {
                            scopekeys[b.scope.kind]++;
                        }
                        if (useds[currentscope_1] === undefined) {
                            useds[currentscope_1] = {};
                        }
                        Object.keys(b).forEach(function (propkey) {
                            if (useds[currentscope_1][propkey] === undefined) {
                                useds[currentscope_1][propkey] = 1;
                            }
                            else {
                                useds[currentscope_1][propkey]++;
                            }
                        });
                    }
                }
            });
        });
    });
    console.log(scopekeys);
    console.log(useds);
};
console.log("execute statistics");
statistics(xall);
console.log("teilstatistik region schwarzenberg :");
statistics(xalt);
var BLOCK_T;
(function (BLOCK_T) {
    BLOCK_T["KM_WERT"] = "BLOCK_KMWERT";
    BLOCK_T["BHFTAG"] = "BHFTAG";
    BLOCK_T["HEADERREF"] = "BLOCK_HEADERREFERENCE";
    BLOCK_T["HEADERLFD"] = "BLOCK_HEADERLFD";
    BLOCK_T["HEADERVIA"] = "BLOCK_HEADERVIA";
    BLOCK_T["ANSCHLUSS_NUMMERN"] = "BLOCK_HEADER_ANSCHLUSS_NUMMERN";
    BLOCK_T["ZEILEN_TYP"] = "ZEILEN_TYP";
    BLOCK_T["TRENNER"] = "TRENNER";
    BLOCK_T["ZUG_NR_WERT"] = "ZUG_NR_WERT";
    BLOCK_T["KLASSEN_WERT"] = "KLASSEN_WERT";
    BLOCK_T["LEER"] = "LEER";
    BLOCK_T["BLOCK"] = "BLOCKEINTRAG";
    BLOCK_T["ERROR"] = "BLOCKERROR";
    BLOCK_T["KEINHALT"] = "BLOCKKEINHALT";
    BLOCK_T["DICKERSTRICH"] = "BLOCK_DICKERSTRICH";
    BLOCK_T["ZEITEINTRAG"] = "BLOCK_ZEITEINTRAG";
    BLOCK_T["ANKUNFT"] = "BLOCK_ANKUNFT";
    BLOCK_T["ZEILENZUSATZINFO"] = "BLOCK_ZEILENZUSATZINFO";
})(BLOCK_T || (BLOCK_T = {}));
var N_85 = { kind: BLOCK_T.ANSCHLUSS_NUMMERN, fkbnummern: [85] };
var F = function (nn) {
    var tInput = ("number" == typeof nn) ? [nn] :
        (("string" == typeof nn) ? [nn] : nn);
    var tResult = {
        kind: BLOCK_T.ANSCHLUSS_NUMMERN,
        fkbnummern: tInput
    };
    return tResult;
};
var sMV = function (n) {
    var tResult = MV(n);
    tResult.Schnellzug = true;
    return tResult;
};
var EKlassen;
(function (EKlassen) {
    EKlassen["NichtAngegeben"] = "_Klassen_nicht_angegeben";
    EKlassen["Klassen1"] = "_Klassen_1";
    EKlassen["Klassen1bis2"] = "_Klassen_1_bis_2";
    EKlassen["Klassen1bis3"] = "_Klassen_1_bis_3";
    EKlassen["Klassen1bis4"] = "_Klassen_1_bis_4";
    EKlassen["Klassen2bis3"] = "_Klassen_2_bis_3";
    EKlassen["Klassen2bis4"] = "_Klassen_2_bis_4";
    EKlassen["Klassen3"] = "_Klassen_3";
    EKlassen["Klassen3bis4"] = "_Klassen_3_bis_4";
    EKlassen["KlassenNurEine"] = "_Klassen_nur_eine";
})(EKlassen || (EKlassen = {}));
var Kl1 = EKlassen.Klassen1;
var Kl1bis2 = EKlassen.Klassen1bis2;
var Kl1bis3 = EKlassen.Klassen1bis3;
var Kl1bis4 = EKlassen.Klassen1bis4;
var Kl2bis3 = EKlassen.Klassen2bis3;
var Kl2bis4 = EKlassen.Klassen2bis4;
var Kl3 = EKlassen.Klassen3;
var Kl3bis4 = EKlassen.Klassen3bis4;
var KlNurEine = EKlassen.KlassenNurEine;
var ZUGLAUF_UNBEKANNT = "ZUGLAUF_UNBEKANNT";
var ZUGLAUF_BERECHNET = "ZUGLAUF_BERECHNET";
var k1b3 = { kind: BLOCK_T.KLASSEN_WERT, klassen: EKlassen.Klassen1bis3, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var k2b4 = { kind: BLOCK_T.KLASSEN_WERT, klassen: EKlassen.Klassen2bis4, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var k2b3 = { kind: BLOCK_T.KLASSEN_WERT, klassen: EKlassen.Klassen2bis3, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var k3b4 = { kind: BLOCK_T.KLASSEN_WERT, klassen: EKlassen.Klassen3bis4, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var L = function (n) {
    var tResult = {
        kind: BLOCK_T.HEADERLFD,
        nummer: n
    };
    return tResult;
};
var Via = function (st) {
    var tResult = {
        kind: BLOCK_T.HEADERVIA,
        ort: st
    };
    return tResult;
};
var GUELTIG_T;
(function (GUELTIG_T) {
    GUELTIG_T["IMMER"] = "GUELTIG_IMMER";
    GUELTIG_T["NIE"] = "GUELTIG_NIE";
    GUELTIG_T["AB"] = "GUELTIG_AB";
})(GUELTIG_T || (GUELTIG_T = {}));
;
;
;
var FAEHRT_T;
(function (FAEHRT_T) {
    FAEHRT_T["IMMER"] = "FAEHRT_IMMER";
    FAEHRT_T["WERKTAGS"] = "FAEHRT_WERKTAGS";
    FAEHRT_T["SONNUNDFESTTAGS"] = "FAEHRT_SONNUNDFESTTAGS";
    FAEHRT_T["Montags"] = "FAEHRT_Montags";
    FAEHRT_T["MontagsFallsMontagEinFesttagDannDienstag"] = "FAEHRT_MontagsFallsMontagEinFesttagDannDienstag";
    FAEHRT_T["MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends"] = "FAEHRT_MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends";
    FAEHRT_T["MontagsUndDonnerstagsUndAb1JuniTaeglich"] = "FAEHRT_MontagsUndDonnerstagsUndAb1JuniTaeglich";
    FAEHRT_T["MontagsUndSonnabends"] = "FAEHRT_MontagsUndSonnabends";
    FAEHRT_T["DienstagsUndSonntags"] = "FAEHRT_DienstagsUndSonntags";
    FAEHRT_T["MittwochsUndSonnabends"] = "FAEHRT_MittwochsUndSonnabends";
    FAEHRT_T["ersterMittwochJedenMonatsDH2mai6juni4juli1august5september"] = "FAEHRT_ersterMittwochJedenMonatsDH2mai6juni4juli1august5september";
    FAEHRT_T["InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag"] = "FAEHRT_InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag";
    FAEHRT_T["nachtsNachDemErstenMittwochJedenMonats"] = "FAEHRT_nachtsNachDemErstenMittwochJedenMonats";
    FAEHRT_T["DonnerstagOderWennDieserFesttagDannMittwochVorher"] = "FAEHRT_DonnerstagOderWennDieserFesttagDannMittwochVorher";
    FAEHRT_T["DonnerstagUndSonntag"] = "FAEHRT_DonnerstagUndSonntag ";
    FAEHRT_T["Freitags"] = "FAEHRT_Freitags";
    FAEHRT_T["Sonnabends"] = "FAEHRT_Sonnabends";
    FAEHRT_T["SonnabendsSonnUndFesttags"] = "FAEHRT_SonnabendsSonnUndFesttags";
    FAEHRT_T["SonnabendsInJuniJuliUndAugust"] = "FAEHRT_SonnabendsInJuniJuliUndAugust";
    FAEHRT_T["SonnUndFesttagsBisEndeAugust"] = "FAEHRT_SonnUndFesttagsBisEndeAugust";
    FAEHRT_T["SonnUndFesttags20MaiBis16SeptSowie5Juni"] = "FAEHRT_SonnUndFesttags20MaiBis16SeptSowie5Juni";
    FAEHRT_T["SonnUndFesttags20MaiBisEndeAugust"] = "FAEHRT_SonnUndFesttags20MaiBisEndeAugust";
    FAEHRT_T["SonnUndFesttagsSowieMittwochs"] = "FAEHRT_SonnUndFesttagsSowieMittwochs";
    FAEHRT_T["SonnUndFesttagsSowie5Juni"] = "FAEHRT_SonnUndFesttagsSowie5Juni";
    FAEHRT_T["SonnUndFesttagsSowie1624mai1429juni15aug828sept"] = "FAEHRT_SonnUndFesttagsSowie1624mai1429juni15aug828sept";
    FAEHRT_T["SonnUndFesttagsInJuniJuliUndAugust"] = "FAEHRT_SonnUndFesttagsInJuniJuliUndAugust";
    FAEHRT_T["InDerAufEinenSonnOderFesttagFolgendenNacht"] = "FAEHRT_InDerAufEinenSonnOderFesttagFolgendenNacht";
    FAEHRT_T["WerktageAusserSonnabends"] = "FAEHRT_WerktageAusserSonnabends";
    FAEHRT_T["WerktageVorSonnUndFesttagen"] = "FAEHRT_WerktageVorSonnUndFesttagen";
    FAEHRT_T["WerktagsMitAusnahmeDerSonnabendeUndDes23Mai"] = "FAEHRT_WerktagsMitAusnahmeDerSonnabendeUndDes23Mai";
    FAEHRT_T["MaiUndSeptemberTaeglichSonstWerktags"] = "FAEHRT_MaiUndSeptemberTaeglichSonstWerktags";
    FAEHRT_T["vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni"] = "FAEHRT_vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni";
    FAEHRT_T["Vom15MaiBis15September"] = "FAEHRT_Vom15MaiBis15September";
    FAEHRT_T["vom16maibis16sept"] = "FAEHRT_vom16maibis16sept";
    FAEHRT_T["Mai21BisEndeAugust"] = "FAEHRT_Mai21BisEndeAugust";
    FAEHRT_T["MaiJuniSeptember"] = "FAEHRT_MaiJuniSeptember";
    FAEHRT_T["Vom1JuniBis15September"] = "FAEHRT_Vom1JuniBis15September";
    FAEHRT_T["vom15junibis15august"] = "FAEHRT_vom15junibis15august";
    FAEHRT_T["Vom15JuniBis15September"] = "FAEHRT_Vom15JuniBis15September";
    FAEHRT_T["vom25JuniBis31August"] = "FAEHRT_vom25JuniBis31August";
    FAEHRT_T["JuliUndAugust"] = "FAEHRT_JuliUndAugust ";
    FAEHRT_T["bis15September"] = "FAEHRT_bis15September";
})(FAEHRT_T || (FAEHRT_T = {}));
;
;
;
{
    var Montags = FAEHRT_T.Montags;
    var MontagsFallsMontagEinFesttagDannDienstag = FAEHRT_T.MontagsFallsMontagEinFesttagDannDienstag;
    var MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends = FAEHRT_T.MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends;
    var MontagsUndDonnerstagsUndAb1JuniTaeglich = FAEHRT_T.MontagsUndDonnerstagsUndAb1JuniTaeglich;
    var MontagsUndSonnabends = FAEHRT_T.MontagsUndSonnabends;
    var DienstagsUndSonntags = FAEHRT_T.DienstagsUndSonntags;
    var MittwochsUndSonnabends = FAEHRT_T.MittwochsUndSonnabends;
    var ersterMittwochJedenMonatsDH2mai6juni4juli1august5september = FAEHRT_T.ersterMittwochJedenMonatsDH2mai6juni4juli1august5september;
    var InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag = FAEHRT_T.InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag;
    var nachtsNachDemErstenMittwochJedenMonats = FAEHRT_T.nachtsNachDemErstenMittwochJedenMonats;
    var DonnerstagOderWennDieserFesttagDannMittwochVorher = FAEHRT_T.DonnerstagOderWennDieserFesttagDannMittwochVorher;
    var DonnerstagUndSonntag = FAEHRT_T.DonnerstagUndSonntag;
    var Freitags = FAEHRT_T.Freitags;
    var Sonnabends = FAEHRT_T.Sonnabends;
    var SonnabendsSonnUndFesttags = FAEHRT_T.SonnabendsSonnUndFesttags;
    var SonnabendsInJuniJuliUndAugust = FAEHRT_T.SonnabendsInJuniJuliUndAugust;
    var SonnUndFesttags = FAEHRT_T.SONNUNDFESTTAGS;
    var SonnUndFesttagsBisEndeAugust = FAEHRT_T.SonnUndFesttagsBisEndeAugust;
    var SonnUndFesttags20MaiBis16SeptSowie5Juni = FAEHRT_T.SonnUndFesttags20MaiBis16SeptSowie5Juni;
    var SonnUndFesttags20MaiBisEndeAugust = FAEHRT_T.SonnUndFesttags20MaiBisEndeAugust;
    var SonnUndFesttagsSowieMittwochs = FAEHRT_T.SonnUndFesttagsSowieMittwochs;
    var SonnUndFesttagsSowie5Juni = FAEHRT_T.SonnUndFesttagsSowie5Juni;
    var SonnUndFesttagsSowie1624mai1429juni15aug828sept = FAEHRT_T.SonnUndFesttagsSowie1624mai1429juni15aug828sept;
    var SonnUndFesttagsInJuniJuliUndAugust = FAEHRT_T.SonnUndFesttagsInJuniJuliUndAugust;
    var InDerAufEinenSonnOderFesttagFolgendenNacht = FAEHRT_T.InDerAufEinenSonnOderFesttagFolgendenNacht;
    var Werktags = FAEHRT_T.WERKTAGS;
    var WerktageAusserSonnabends = FAEHRT_T.WerktageAusserSonnabends;
    var WerktageVorSonnUndFesttagen = FAEHRT_T.WerktageVorSonnUndFesttagen;
    var WerktagsMitAusnahmeDerSonnabendeUndDes23Mai = FAEHRT_T.WerktagsMitAusnahmeDerSonnabendeUndDes23Mai;
    var MaiUndSeptemberTaeglichSonstWerktags = FAEHRT_T.MaiUndSeptemberTaeglichSonstWerktags;
    var vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni = FAEHRT_T.vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni;
    var Vom15MaiBis15September = FAEHRT_T.Vom15MaiBis15September;
    var vom16maibis16sept = FAEHRT_T.vom16maibis16sept;
    var Mai21BisEndeAugust = FAEHRT_T.Mai21BisEndeAugust;
    var MaiJuniSeptember = FAEHRT_T.MaiJuniSeptember;
    var Vom1JuniBis15September = FAEHRT_T.Vom1JuniBis15September;
    var vom15junibis15august = FAEHRT_T.vom15junibis15august;
    var Vom15JuniBis15September = FAEHRT_T.Vom15JuniBis15September;
    var vom25JuniBis31August = FAEHRT_T.vom25JuniBis31August;
    var JuliUndAugust = FAEHRT_T.JuliUndAugust;
    var bis15September = FAEHRT_T.bis15September;
}
var TEXTORT_T;
(function (TEXTORT_T) {
    TEXTORT_T["NICHTANGEGEBEN"] = "TEXTORT_NICHTANGEGEBEN";
    TEXTORT_T["LINKSVONHEADER"] = "TEXTORT_LINKSVONHEADER";
    TEXTORT_T["RECHTSVONHEADER"] = "TEXTORT_RECHTSVONHEADER";
    TEXTORT_T["UNTERHEADER"] = "TEXTORT_UNTERHEADER";
    TEXTORT_T["GANZESPALTE"] = "TEXTORT_GANZESPALTE";
})(TEXTORT_T || (TEXTORT_T = {}));
;
;
;
;
;
var EScope;
(function (EScope) {
    EScope[EScope["DefaultZug"] = 1] = "DefaultZug";
    EScope[EScope["RestSpalte"] = 2] = "RestSpalte";
})(EScope || (EScope = {}));
var VERWEIS_T;
(function (VERWEIS_T) {
    VERWEIS_T["PASSEND"] = "VERWEIS_PASSEND";
    VERWEIS_T["FERN"] = "VERWEIS_FERN";
    VERWEIS_T["GLOBAL_DEFAULT"] = "VERWEIS_GLOBAL_DEFAULT";
})(VERWEIS_T || (VERWEIS_T = {}));
var _ = { kind: BLOCK_T.LEER, MitStrich: true, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var nix = _;
var gnix = { kind: BLOCK_T.LEER, MitStrich: false, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var kHlt = { kind: BLOCK_T.KEINHALT, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var ank = { kind: BLOCK_T.ANKUNFT, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var Ank = ank;
var dick = { kind: BLOCK_T.DICKERSTRICH, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var EZeilentyp;
(function (EZeilentyp) {
    EZeilentyp["ANSCHLUSS_ZUBRINGER_AB"] = "_Anschluss_aus";
    EZeilentyp["ANSCHLUSS_ZUBRINGER_IN"] = "_Anschluss_aus_ankunft";
    EZeilentyp["ZUGNRZEILE"] = "_xZugnr";
    EZeilentyp["KLASSENNRZEILE"] = "_Klassen_";
    EZeilentyp["ANSCHLUSS_WEITER_AB"] = "_Anschluss_nach_abfahrt";
    EZeilentyp["ANSCHLUSS_WEITER_AN"] = "_Anschluss_nach_in";
})(EZeilentyp || (EZeilentyp = {}));
var _anschluss_aus = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.ANSCHLUSS_ZUBRINGER_AB };
var _anschl_aus = _anschluss_aus;
var _anschluss_aus_ziel = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.ANSCHLUSS_ZUBRINGER_IN };
var _zub_aus = _anschluss_aus;
var _zub_in = _anschluss_aus_ziel;
var _zugnr = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.ZUGNRZEILE };
var _klassen = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.KLASSENNRZEILE };
var _anschluss_nach_start = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.ANSCHLUSS_WEITER_AB };
var _anschluss_nach_in = { kind: BLOCK_T.ZEILEN_TYP, zeilentyp: EZeilentyp.ANSCHLUSS_WEITER_AN };
var _weiter_ab = _anschluss_nach_start;
var _weiter_in = _anschluss_nach_in;
var wa = { kind: BLOCK_T.BLOCK, Senkrecht: false, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "a", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var wx = { kind: BLOCK_T.BLOCK, Senkrecht: false, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "x", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sa = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "a", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sb = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "b", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sc = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "c", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sd = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "d", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var se = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "e", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sf = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "f", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sg = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "g", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sh = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "h", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var si = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "i", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sk = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "k", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sl = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "l", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sj = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "j", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sm = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "m", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sp = { kind: BLOCK_T.BLOCK, Senkrecht: true, Valid: false, Start: false, Breite: 1, Hoehe: 1, Passend: true, Referenzkey: "p", Blockinhalt: undefined, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var Leipzig = { kind: BLOCK_T.BHFTAG, "station": "Leipzig", lines: [], upperCase: 'LEIPZIG', Einordnung: "Stadt" };
var Antonienhöhe = { kind: BLOCK_T.BHFTAG, "station": "Antonienhöhe", "lines": [], "upperCase": "ANTONIENHÖHE" };
var Bebra = { kind: BLOCK_T.BHFTAG, "station": "Bebra", "lines": [], "upperCase": "" };
var Berlin = { kind: BLOCK_T.BHFTAG, "station": "Berlin", "lines": [], "upperCase": "BERLIN", Einordnung: "Stadt" };
var BerlinAHB = { kind: BLOCK_T.BHFTAG, "station": "Berlin AHB", "lines": [], "upperCase": "BERLIN AHB" };
var Breslau = { kind: BLOCK_T.BHFTAG, "station": "Breslau", "lines": [], "upperCase": "" };
var Časlau = { kind: BLOCK_T.BHFTAG, "station": "Časlau", "lines": [], "upperCase": "" };
var Cöthen = { kind: BLOCK_T.BHFTAG, "station": "Cöthen", "lines": [], "upperCase": "" };
var Dabendorf = { kind: BLOCK_T.BHFTAG, "station": "Dabendorf", "lines": [], "upperCase": "" };
var Döbeln = { kind: BLOCK_T.BHFTAG, "station": "Döbeln", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Dobrilugk_Kirchhain = { kind: BLOCK_T.BHFTAG, "station": " Dobrilugk_Kirchhain", "lines": [], "upperCase": "Dresden", Einordnung: "Stadt" };
var Dresden = { kind: BLOCK_T.BHFTAG, "station": "Dresden", "lines": [], "upperCase": "Dresden", Einordnung: "Stadt" };
var Elsterwerda_OberlausitzeBhf = { kind: BLOCK_T.BHFTAG, "station": "Elsterwerda Oberlausitzer Bhf.", "lines": [], "upperCase": "" };
var Elsterwerda = { kind: BLOCK_T.BHFTAG, "station": "Elsterwerda", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Erfurt = { kind: BLOCK_T.BHFTAG, "station": "Erfurt", "lines": [], "upperCase": "" };
var Frankfurt_M = { kind: BLOCK_T.BHFTAG, "station": "Frankfurt_M", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Gera = { kind: BLOCK_T.BHFTAG, "station": "Gera", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Grimma = { kind: BLOCK_T.BHFTAG, "station": "Grimma", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var GrossLichterfeldeOst = { kind: BLOCK_T.BHFTAG, "station": "GrossLichterfeldeOst", "lines": [], "upperCase": "" };
var Halle = { kind: BLOCK_T.BHFTAG, "station": "Halle", "lines": [], "upperCase": "" };
var Kreibitz = { kind: BLOCK_T.BHFTAG, "station": "Kreibitz", "lines": [], "upperCase": "" };
var Leipzig_Magd_Bf = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Magd.Bf.", "lines": [], "upperCase": "" };
var Leipzig_Th_Bf = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Th.Bf.", "lines": [], "upperCase": "" };
var Magdeburg = { kind: BLOCK_T.BHFTAG, "station": "Magdeburg", "lines": [], "upperCase": "MAGDEBURG" };
var Mailand = { kind: BLOCK_T.BHFTAG, "station": "Mailand", "lines": [], "upperCase": "" };
var Marktredwitz = { kind: BLOCK_T.BHFTAG, "station": "Marktredwitz", "lines": [], "upperCase": "" };
var München = { kind: BLOCK_T.BHFTAG, "station": "München", "lines": [], "upperCase": "" };
var Mylau_Hst = { kind: BLOCK_T.BHFTAG, "station": "Mylau Hst.", "lines": [], "upperCase": "" };
var Myslowitz = { kind: BLOCK_T.BHFTAG, "station": "Myslowitz", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Nürnberg = { kind: BLOCK_T.BHFTAG, "station": "Nürnberg", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Horka = { kind: BLOCK_T.BHFTAG, "station": "Horka", "lines": [], "upperCase": "" };
var Jueterbog = { kind: BLOCK_T.BHFTAG, "station": "Jüterbog", "lines": [], "upperCase": "JÜterbog" };
var Karlsbad = { kind: BLOCK_T.BHFTAG, "station": "Karlsbad", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Karlsbad_BEB = { kind: BLOCK_T.BHFTAG, "station": "Karlsbad B.E.B.", lines: [], upperCase: 'KARLSBAD B.E.B.' };
var Schnabelwald = { kind: BLOCK_T.BHFTAG, "station": "Schnabelwald", "lines": [], "upperCase": "" };
var Seidenberg = { kind: BLOCK_T.BHFTAG, "station": "Seidenberg", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Stuttgart = { kind: BLOCK_T.BHFTAG, "station": "Stuttgart", "lines": [], "upperCase": "" };
var Teplitz = { kind: BLOCK_T.BHFTAG, "station": "Teplitz", "lines": [], "upperCase": "Dresden", Einordnung: "Stadt" };
var Wien_NWB = { kind: BLOCK_T.BHFTAG, "station": "Wien NWB", "lines": [], "upperCase": "" };
var Weiden = { kind: BLOCK_T.BHFTAG, "station": "Weiden", "lines": [], "upperCase": "" };
var Wien = { kind: BLOCK_T.BHFTAG, "station": "Wien", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Würzburg = { kind: BLOCK_T.BHFTAG, "station": "Würzburg", "lines": [], "upperCase": "" };
var Zittau = { kind: BLOCK_T.BHFTAG, "station": "Zittau", "lines": [], "upperCase": "", Einordnung: "Stadt" };
var Zossen = { kind: BLOCK_T.BHFTAG, "station": "Zossen", "lines": [], "upperCase": "Zossen" };
{
    var Adorf = { kind: BLOCK_T.BHFTAG, "station": "Adorf", "lines": ["PE", "CA"], "upperCase": "ADORF", "dd2": 1260, "dd3": 840, "c2": 780, "c3": 520, "z2": 490, "z3": 330, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 690, "c3b": 460, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 450, "z3c": 300, "viac": "Voigtsgrün", "comment": "schwer lesbar" };
    var Affalter = { kind: BLOCK_T.BHFTAG, "station": "Affalter", "lines": ["ZC"], "upperCase": "AFFALTER", "dd2": 0, "dd3": 0, "c2": 220, "c3": 150, "z2": 0, "z3": 0, "via": "Neukirchen i.E.", "dd2b": 0, "dd3b": 0, "c2b": 260, "c3b": 170, "z2b": 0, "z3b": 0, "viab": "Einsiedel" };
    var Altchemnitz = { kind: BLOCK_T.BHFTAG, "station": "Altchemnitz", "lines": ["CA", "ZC"], "upperCase": "ALTCHEMNITZ", "dd2": 500, "dd3": 340, "c2": 20, "c3": 15, "z2": 310, "z3": 210 };
    var Altenbach = { kind: BLOCK_T.BHFTAG, "station": "Altenbach", "lines": ["LD"], "upperCase": "ALTENBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altenburg = { kind: BLOCK_T.BHFTAG, "station": "Altenburg", "lines": ["LH", "ZA"], "upperCase": "ALTENBURG i.S.=A.", "dd2": 880, "dd3": 590, "c2": 410, "c3": 270, "z2": 0, "z3": 0, "via": "Gössnitz", "dd2b": 990, "dd3b": 680, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": ["Borsdorf", "Gaschwitz"], "dd2c": 0, "dd3c": 0, "c2c": 480, "c3c": 320, "z2c": 0, "z3c": 0, "viac": "Borna", "z2d": 290, "z3d": 200, "viad": "Werdau" };
    var Altenhain_b_Br = { kind: BLOCK_T.BHFTAG, "station": "Altenhain b.Br.", "lines": ["BSt"], "upperCase": "ALTENHAIN b.BRANDIS", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altmittweida = { kind: BLOCK_T.BHFTAG, "station": "Altmittweida", "lines": ["RC"], "upperCase": "ALTMITTWEIDA", "dd2": 0, "dd3": 0, "c2": 100, "c3": 65, "z2": 390, "z3": 260 };
    var Altmügeln = { kind: BLOCK_T.BHFTAG, "station": "Altmügeln", "lines": ["MN"], "upperCase": "ALTMÜGELN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altosch_Ros = { kind: BLOCK_T.BHFTAG, "station": "Altosch.-Ros.", "lines": ["OD"], "upperCase": "ALTOSCHATZ-ROSENTHAL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altwarnsdorf = { kind: BLOCK_T.BHFTAG, "station": "Altwarnsdorf", "lines": ["SE"], "upperCase": "ALTWARNSDORF i.Bö.", "dd2": 590, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Amerika = { kind: BLOCK_T.BHFTAG, "station": "Amerika", "lines": ["GW"], "upperCase": "AMERIKA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ammelshain = { kind: BLOCK_T.BHFTAG, "station": "Ammelshain", "lines": ["BSt"], "upperCase": "AMMELSHAIN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Annaberg = { kind: BLOCK_T.BHFTAG, "station": "Annaberg", "lines": ["AF", "WA"], "upperCase": "ANNABERG i.S.", "dd2": 670, "dd3": 450, "c2": 340, "c3": 230, "z2": 630, "z3": 420, "via": "Flöha", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 410, "z3b": 280, "viab": "Aue" };
    var Antonsthal = { kind: BLOCK_T.BHFTAG, "station": "Antonsthal", "lines": ["JS"], "upperCase": "ANTONSTHAL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 200 };
    var Arnsdorf = { kind: BLOCK_T.BHFTAG, "station": "Arnsdorf", "lines": ["GD", "KP"], "upperCase": "ARNSDORF i.S.", "dd2": 160, "dd3": 110, "c2": 640, "c3": 430, "z2": 930, "z3": 620 };
    var Arras = { kind: BLOCK_T.BHFTAG, "station": "Arras", "lines": ["WR"], "upperCase": "ARRAS", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Aue = { kind: BLOCK_T.BHFTAG, "station": "Aue", "lines": ["SZ", "CA"], "upperCase": "AUE i.Sachsen", "dd2": 790, "dd3": 530, "c2": 310, "c3": 210, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 480, "c3b": 320, "z2b": 180, "z3b": 120, "viab": "Zwickau" };
    var Auerbach_ob_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Auerbach ob. Bhf.", "lines": ["HOe"], "upperCase": "AUERBACH ob.Bf.", "dd2": 1080, "dd3": 720, "c2": 600, "c3": 400, "z2": 310, "z3": 210, "via": "Herlasgrün", "comment": "via by NM - funktioniert !!!" };
    var Auerbach_unt_Bf = { kind: BLOCK_T.BHFTAG, "station": "Auerbach, unt.Bf.", "lines": ["ZF"], "upperCase": "AUERBACH unt.Bf.", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2": 190, "z3": 130 };
    var Bad_Elster = { kind: BLOCK_T.BHFTAG, "station": "Bad Elster", "lines": ["PE"], "upperCase": "", "dd2": 1280, "dd3": 860, "c2": 800, "c3": 540, "z2": 510, "z3": 340, "via": "Plauen i.V.", "comment": "dd2 erfunden, fkb passt dort nicht zu dd3!", "dd2b": 0, "dd3b": 0, "c2b": 710, "c3b": 480, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 470, "z3c": 310, "viac": "Voigtsgrün" };
    var Bad_Jonsdorf = { kind: BLOCK_T.BHFTAG, "station": "Bad Jonsdorf", "lines": ["BJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Barthmühle = { kind: BLOCK_T.BHFTAG, "station": "Barthmühle", "lines": ["PWz"], "upperCase": "BARTHMÜHLE", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bauernsteig = { kind: BLOCK_T.BHFTAG, "station": "Bauernsteig", "lines": ["WM"], "upperCase": "BAUERNSTEIG", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 95, "z3": 65 };
    var Bautzen = { kind: BLOCK_T.BHFTAG, "station": "Bautzen", "lines": ["GD", "BK", "BS"], "upperCase": "BAUTZEN", "dd2": 370, "dd3": 250, "c2": 840, "c3": 560, "z2": 1140, "z3": 760 };
    var Beerwalde = { kind: BLOCK_T.BHFTAG, "station": "Beerwalde", "lines": ["MR"], "upperCase": "BEERWALDE i.S.A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Beierfeld = { kind: BLOCK_T.BHFTAG, "station": "Beierfeld", "lines": ["ZS"], "upperCase": "BEIERFELD", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Beiersdorf_Oberl = { kind: BLOCK_T.BHFTAG, "station": "Beiersdorf (Oberl.)", "lines": ["TD"], "upperCase": "BEIERSDORF, Oberlausitz", "dd2": 470, "dd3": 310, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Belgershain = { kind: BLOCK_T.BHFTAG, "station": "Belgershain", "lines": ["LG"], "upperCase": "BELGERSHAIN", "dd2": 0, "dd3": 0, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Berbersdorf = { kind: BLOCK_T.BHFTAG, "station": "Berbersdorf", "lines": ["RW"], "upperCase": "BERBERSDORF", "dd2": 0, "dd3": 0, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Berbisdorf = { kind: BLOCK_T.BHFTAG, "station": "Berbisdorf", "lines": ["RRg"], "upperCase": "BERBISDORF", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Berga_a_d_E = { kind: BLOCK_T.BHFTAG, "station": "Berga a.d.E.", "lines": ["PWz"], "upperCase": "BERGA a.d.Elster (i.S.=W.)", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 250, "z3": 170 };
    var Bergen = { kind: BLOCK_T.BHFTAG, "station": "Bergen", "lines": ["HOe"], "upperCase": "BERGEN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 260, "z3": 170 };
    var Berggiesshübel = { kind: BLOCK_T.BHFTAG, "station": "Berggiesshübel", "lines": ["PB"], "upperCase": "BERGGIESSHÜBEL", "dd2": 200, "dd3": 130, "c2": 680, "c3": 450, "z2": 0, "z3": 0 };
    var Bernsbach = { kind: BLOCK_T.BHFTAG, "station": "Bernsbach", "lines": ["ZS"], "upperCase": "BERNSBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bernsgrün = { kind: BLOCK_T.BHFTAG, "station": "Bernsgrün", "lines": ["WM"], "upperCase": "BERNSGRÜN i.R.ä.L.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 380, "z3": 250 };
    var Bernstadt_i_O_L = { kind: BLOCK_T.BHFTAG, "station": "Bernstadt i.O.L", "lines": ["HB"], "upperCase": "BERNSTADT i.O.=L.", "dd2": 650, "dd3": 440, "c2": 1130, "c3": 750, "z2": 0, "z3": 0, "via": "Löbau" };
    var Berthelsd_b_Hrrnh = { kind: BLOCK_T.BHFTAG, "station": "Berthelsd.b.Hrrnh.", "lines": ["HB"], "upperCase": "BERTHELSDORF b.Herrnhut" };
    var Berthelsdorf = { kind: BLOCK_T.BHFTAG, "station": "Berthelsdorf", "lines": ["NM", "BGh"], "upperCase": "BERTHELSDORF i.Erzgeb.", "dd2": 280, "dd3": 190, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Bertsdorf = { kind: BLOCK_T.BHFTAG, "station": "Bertsdorf", "lines": ["ZO", "BJ"], "upperCase": "BERTSDORF" };
    var Beucha_b_Br = { kind: BLOCK_T.BHFTAG, "station": "Beucha b.Br.", "lines": ["BC", "BSt"], "upperCase": "BEUCHA b.Brandis", "dd2": 710, "dd3": 480, "c2": 560, "c3": 370, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 480, "c3b": 330, "z2b": 0, "z3b": 0, "viab": "Narsdorf" };
    var Bienenmühle = { kind: BLOCK_T.BHFTAG, "station": "Bienenmühle", "lines": ["NM"], "upperCase": "BIENENMÜHLE", "dd2": 410, "dd3": 270, "c2": 400, "c3": 270, "z2": 690, "z3": 460 };
    var Birkenhain_Limb = { kind: BLOCK_T.BHFTAG, "station": "Birkenhain-Limb.", "lines": ["PNo"], "upperCase": "BIRKENHAIN-LIMBACH" };
    var Bischheim = { kind: BLOCK_T.BHFTAG, "station": "Bischheim", "lines": ["KP"], "upperCase": "BISCHHEIM", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bischofswerda = { kind: BLOCK_T.BHFTAG, "station": "Bischofswerda", "lines": ["GD", "NnB"], "upperCase": "BISCHOFSWERDA", "dd2": 250, "dd3": 170, "c2": 730, "c3": 490, "z2": 1020, "z3": 680 };
    var Blauenthal = { kind: BLOCK_T.BHFTAG, "station": "Blauenthal", "lines": ["CA"], "upperCase": "BLAUENTHAL", "dd2": 860, "dd3": 580, "c2": 390, "c3": 260, "z2": 260, "z3": 180 };
    var Blechhammer = { kind: BLOCK_T.BHFTAG, "station": "Blechhammer", "lines": ["WCd"], "upperCase": "BLECHHAMMER" };
    var Blumenau = { kind: BLOCK_T.BHFTAG, "station": "Blumenau", "lines": ["PN"], "upperCase": "BLUMENAU" };
    var Bockau = { kind: BLOCK_T.BHFTAG, "station": "Bockau", "lines": ["CA"], "upperCase": "BOCKAU", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 240, "z3": 160 };
    var Boden_b_W = { kind: BLOCK_T.BHFTAG, "station": "Boden b.W.", "lines": ["WJ"], "upperCase": "BODEN b.Wolkenstein" };
    var Bodenbach = { kind: BLOCK_T.BHFTAG, "station": "Bodenbach", "lines": ["BD"], "upperCase": "BODENBACH i.Bö.", "dd2": 380, "dd3": 250, "c2": 860, "c3": 570, "z2": 1150, "z3": 770 };
    var Borna = { kind: BLOCK_T.BHFTAG, "station": "Borna", "lines": ["KC"], "upperCase": "BORNA", "dd2": 810, "dd3": 540, "c2": 330, "c3": 220, "z2": 0, "z3": 0, "via": "Chemnitz", "comment": "z weggelassen" };
    var Bornitz = { kind: BLOCK_T.BHFTAG, "station": "Bornitz", "lines": ["LD"], "upperCase": "BORNITZ", "dd2": 380, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Borsdorf = { kind: BLOCK_T.BHFTAG, "station": "Borsdorf", "lines": ["LD", "BC"], "upperCase": "BORSDORF", "dd2": 650, "dd3": 440, "c2c": 570, "c3c": 380, "viac": "Leipzig Dr.Bf.", "z2b": 630, "z3b": 440, "viab": ["Tautenhain"], "comment": "ueber erfunden" };
    var Brambach = { kind: BLOCK_T.BHFTAG, "station": "Brambach", "lines": ["PE"], "upperCase": "BRAMBACH", "dd2": 1360, "dd3": 910, "c2": 890, "c3": 590, "z2": 590, "z3": 400, "via": "Plauen i.V." };
    var Brand = { kind: BLOCK_T.BHFTAG, "station": "Brand", "lines": ["BGh", "BL"], "upperCase": "BRAND b.Freiberg", "dd2": 300, "dd3": 200, "c2": 300, "c3": 200, "z2": 590, "z3": 390 };
    var Brandis = { kind: BLOCK_T.BHFTAG, "station": "Brandis", "lines": ["BSt"], "upperCase": "BRANDIS", "dd2": 730, "dd3": 490, "c2": 570, "c3": 380, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "comment": "NM via wie Beucha hinzugefuegt,   strecke unklar" };
    var Braunsdorf = { kind: BLOCK_T.BHFTAG, "station": "Braunsdorf", "lines": ["RW"], "upperCase": "BRAUNSDORF", "dd2": 0, "dd3": 0, "c2": 75, "c3": 50, "z2": 0, "z3": 0 };
    var Breitenborn = { kind: BLOCK_T.BHFTAG, "station": "Breitenborn", "lines": ["RP"], "upperCase": "BREITENBORN", "dd2": 0, "dd3": 0, "c2": 200, "c3": 140, "z2": 0, "z3": 0 };
    var Breitenhof = { kind: BLOCK_T.BHFTAG, "station": "Breitenhof", "lines": ["JS"], "upperCase": "BREITENHOF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 310, "z3": 210 };
    var Breitingen = { kind: BLOCK_T.BHFTAG, "station": "Breitingen", "lines": ["LH"], "upperCase": "BREITINGEN", "dd2": 0, "dd3": 0, "c2": 420, "c3": 280, "z2b": 350, "z3b": 240, "viab": "Werdau" };
    var Brunn = { kind: BLOCK_T.BHFTAG, "station": "Brunn", "lines": ["BG"], "upperCase": "BRUNN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 100, "z3": 70 };
    var Buchholz = { kind: BLOCK_T.BHFTAG, "station": "Buchholz", "lines": ["WA", "BSg"], "upperCase": "BUCHHOLZ", "dd2": 680, "dd3": 460, "c2": 360, "c3": 240, "z2": 390, "z3": 260 };
    var Buchholz_Friedew = { kind: BLOCK_T.BHFTAG, "station": "Buchholz-Friedew.", "lines": ["RRg"], "upperCase": "BUCHHOLZ-FRIEDEWALD", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Burgstädt = { kind: BLOCK_T.BHFTAG, "station": "Burgstädt", "lines": ["KC"], "upperCase": "BURGSTÄDT", "dd2": 570, "dd3": 380, "c2": 90, "c3": 60, "z2": 390, "z3": 260, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 350, "z3b": 240, "viab": "Limbach" };
    var Burkersdorf_b_Fr = { kind: BLOCK_T.BHFTAG, "station": "Burkersdorf b.Fr.", "lines": ["KF"], "upperCase": "BURKERSDORF b.Frauenstein", "dd2": 250, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Burkhardtsdorf = { kind: BLOCK_T.BHFTAG, "station": "Burkhardtsdorf", "lines": ["CA"], "upperCase": "BURKHARDTSDORF", "dd2": 600, "dd3": 400, "c2": 120, "c3": 80, "z2": 380, "z3": 250 };
    var Burkhardtsw_Maxen = { kind: BLOCK_T.BHFTAG, "station": "Burkhardtsw.-Maxen", "lines": ["MG"], "upperCase": "BURKHARDTSWALDE-MAXEN", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Buschmühle = { kind: BLOCK_T.BHFTAG, "station": "Buschmühle", "lines": ["HK"], "upperCase": "BUSCHMÜHLE", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenhecke_Johnsb = { kind: BLOCK_T.BHFTAG, "station": "Bärenhecke-Johnsb.", "lines": ["MG"], "upperCase": "BÄRENHECKE-JOHNSBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenstein = { kind: BLOCK_T.BHFTAG, "station": "Bärenstein", "lines": ["WA"], "upperCase": "BÄRENSTEIN b.Weipert", "dd2": 780, "dd3": 520, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Bärenstein_b_Glash = { kind: BLOCK_T.BHFTAG, "station": "Bärenstein b. Glash.", "lines": ["MG"], "upperCase": "BÄRENSTEIN b.Glashütte", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenwalde_i_S = { kind: BLOCK_T.BHFTAG, "station": "Bärenwalde i.S.", "lines": ["WCd"], "upperCase": "BÄRENWALDE i.S.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 90 };
    var Bärnsdorf = { kind: BLOCK_T.BHFTAG, "station": "Bärnsdorf", "lines": ["RRg"], "upperCase": "BÄRNSDORF", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhla = { kind: BLOCK_T.BHFTAG, "station": "Böhla", "lines": ["DE"], "upperCase": "BÖHLA", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhlen_Rötha = { kind: BLOCK_T.BHFTAG, "station": "Böhlen (Rötha)", "lines": ["LH"], "upperCase": "BÖHLEN (RÖTHA)", "dd2": 0, "dd3": 0, "c2": 410, "c3": 280, "z2b": 440, "z3b": 290, "viab": "Werdau" };
    var Böhlitz_Roda = { kind: BLOCK_T.BHFTAG, "station": "Böhlitz-Roda", "lines": ["MN"], "upperCase": "BÖHLITZ-RODA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhringen = { kind: BLOCK_T.BHFTAG, "station": "Böhringen", "lines": ["RW"], "upperCase": "BÖHRINGEN", "dd2": 400, "dd3": 270, "c2": 230, "c3": 150, "z2": 0, "z3": 0 };
    var Cainsdorf = { kind: BLOCK_T.BHFTAG, "station": "Cainsdorf", "lines": ["SZ"], "upperCase": "CAINSDORF", "dd2": 800, "dd3": 540, "c2": 320, "c3": 220, "z2": 25, "z3": 20 };
    var Cannewitz = { kind: BLOCK_T.BHFTAG, "station": "Cannewitz", "lines": ["MN"], "upperCase": "CANNEWITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Carlsfeld = { kind: BLOCK_T.BHFTAG, "station": "Carlsfeld", "lines": ["WCd"], "upperCase": "CARLSFELD", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 390, "z3": 260, "via": "Aue", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 200, "viab": "Kirchberg" };
    var Chemnitz = { kind: BLOCK_T.BHFTAG, "station": "Chemnitz", "lines": ["DW", "CA", "KC", "RC"], "upperCase": "CHEMNITZ", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 300, "z3": 200 };
    var Chursdorf = { kind: BLOCK_T.BHFTAG, "station": "Chursdorf", "lines": ["WM"], "upperCase": "CHURSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 150, "z3": 100 };
    var Colditz = { kind: BLOCK_T.BHFTAG, "station": "Colditz", "lines": ["GW"], "upperCase": "COLDITZ", "dd2": 0, "dd3": 0, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 620, "dd3b": 420, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Meissen-Cölln", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 400, "z3c": 270, "viac": "Lunzenau", "viac2": "Narsdorf" };
    var Cossebaude = { kind: BLOCK_T.BHFTAG, "station": "Cossebaude", "lines": ["DE"], "upperCase": "COSSEBAUDE", "dd2": 55, "dd3": 30, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Cossen = { kind: BLOCK_T.BHFTAG, "station": "Cossen", "lines": ["KC"], "upperCase": "COSSEN", "dd2": 620, "dd3": 410, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Cossmannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Cossmannsdorf", "lines": ["HK"], "upperCase": "COSSMANNSDORF", "dd2": 75, "dd3": 50, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Coswig = { kind: BLOCK_T.BHFTAG, "station": "Coswig", "lines": ["LD", "BC", "DEC"], "upperCase": "COSWIG i.Sachsen", "dd2": 105, "dd3": 70, "c2": 550, "c3": 70, "z2": 0, "z3": 0 };
    var Cotta_b_Dresden = { kind: BLOCK_T.BHFTAG, "station": "Cotta b.Dresden", "lines": ["DE"], "upperCase": "COTTA b.Dresden", "dd2": 30, "dd3": 20, "c2": 510, "c3": 340, "z2": 800, "z3": 540 };
    var Cranzahl = { kind: BLOCK_T.BHFTAG, "station": "Cranzahl", "lines": ["WA", "CW"], "upperCase": "CRANZAHL", "dd2": 720, "dd3": 480, "c2": 390, "c3": 260, "z2": 430, "z3": 290 };
    var Crimmitschau = { kind: BLOCK_T.BHFTAG, "station": "Crimmitschau", "lines": ["LH"], "upperCase": "CRIMMITSCHAU", "dd2": 830, "dd3": 560, "c2": 360, "c3": 240, "z2": 130, "z3": 90 };
    var Culitzsch = { kind: BLOCK_T.BHFTAG, "station": "Culitzsch", "lines": ["WCd"], "upperCase": "CULITZSCH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 55, "z3": 40 };
    var Culten = { kind: BLOCK_T.BHFTAG, "station": "Culten", "lines": ["LH"], "upperCase": "CULTEN", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 105, "z3": 70 };
    var Cunersdorf = { kind: BLOCK_T.BHFTAG, "station": "Cunersdorf", "lines": ["WCd"], "upperCase": "CUNERSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Cunewalde = { kind: BLOCK_T.BHFTAG, "station": "Cunewalde", "lines": ["GC"], "upperCase": "CUNEWALDE", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Bautzen", "comment": "Via frei erfunden" };
    var Cunnersdorf_b_M = { kind: BLOCK_T.BHFTAG, "station": "Cunnersdorf b. M.", "lines": ["KS"], "upperCase": "CUNNERSDORF b.Medingen", "dd2": 115, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Cunnertswalde = { kind: BLOCK_T.BHFTAG, "station": "Cunnertswalde", "lines": ["RRg"], "upperCase": "CUNNERTSWALDE", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dahlen = { kind: BLOCK_T.BHFTAG, "station": "Dahlen", "lines": ["LD"], "upperCase": "DAHLEN", "dd2": 460, "dd3": 310, "c2": 540, "c3": 360, "z2b": 820, "z3b": 560, "viab": ["Leipzig Dr.Bf."] };
    var Demitz = { kind: BLOCK_T.BHFTAG, "station": "Demitz", "lines": ["GD"], "upperCase": "DEMITZ Haltestelle", "dd2": 280, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Denkwitz = { kind: BLOCK_T.BHFTAG, "station": "Denkwitz", "lines": ["MN"], "upperCase": "DENKWITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dennheritz = { kind: BLOCK_T.BHFTAG, "station": "Dennheritz", "lines": ["SG"], "upperCase": "DENNHERITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60, "via": "Schönbörnchen", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 140, "z3b": 100, "viab": "Glauchau", "comment": "stationsverz 1899 Denheritz" };
    var Deuben = { kind: BLOCK_T.BHFTAG, "station": "Deuben", "lines": ["DW"], "upperCase": "DEUBEN", "dd2": 55, "dd3": 35, "c2": 440, "c3": 290, "z2": 720, "z3": 480 };
    var Deutschenbora = { kind: BLOCK_T.BHFTAG, "station": "Deutschenbora", "lines": ["BC"], "upperCase": "DEUTSCHENBORA", "dd2": 270, "dd3": 180, "c2": 390, "c3": 260, "z2": 680, "z3": 460 };
    var Dippelsdorf = { kind: BLOCK_T.BHFTAG, "station": "Dippelsdorf", "lines": ["RRg"], "upperCase": "DIPPELSDORF", "dd2": 95, "dd3": 65, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dippoldiswalde = { kind: BLOCK_T.BHFTAG, "station": "Dippoldiswalde", "lines": ["HK"], "upperCase": "DIPPOLDISWALDE", "dd2": 150, "dd3": 100, "c2": 510, "c3": 340, "z2": 0, "z3": 0 };
    var Dittersb_Seiffen = { kind: BLOCK_T.BHFTAG, "station": "Dittersb.-Seiffen", "lines": ["PN"], "upperCase": "DITTERSBACH-SEIFFEN", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 0, "z3": 0 };
    var Dittersbach = { kind: BLOCK_T.BHFTAG, "station": "Dittersbach", "lines": ["RW"], "upperCase": "DITTERBACH b.Frankenberg", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0 };
    var Dittersbach_b_D = { kind: BLOCK_T.BHFTAG, "station": "Dittersbach b. D.", "lines": ["KP"], "upperCase": "DITTERSBACH b.Dürrröhrsdorf", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dittersdorf = { kind: BLOCK_T.BHFTAG, "station": "Dittersdorf", "lines": ["CA"], "upperCase": "DITTERSDORF b.Chemnitz", "dd2": 560, "dd3": 380, "c2": 80, "c3": 55, "z2": 380, "z3": 250 };
    var Dittersdorf_b_Gl = { kind: BLOCK_T.BHFTAG, "station": "Dittersdorf b. Gl.", "lines": ["MG"], "upperCase": "DITTERSDORF b.Glashütte", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dobitschen = { kind: BLOCK_T.BHFTAG, "station": "Dobitschen", "lines": ["MR"], "upperCase": "DOBITSCHEN i.S.=A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dohma = { kind: BLOCK_T.BHFTAG, "station": "Dohma", "lines": ["PGc"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dohna = { kind: BLOCK_T.BHFTAG, "station": "Dohna", "lines": ["MG"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dorfchemnitz = { kind: BLOCK_T.BHFTAG, "station": "Dorfchemnitz", "lines": ["CA"], "upperCase": "DORFCHEMNITZ b.Zwönitz", "dd2": 0, "dd3": 0, "c2": 200, "c3": 130, "z2": 300, "z3": 200 };
    var Dorfchemnitz_b_S = { kind: BLOCK_T.BHFTAG, "station": "Dorfchemnitz b. S.", "lines": ["MS"], "upperCase": "DORFCHEMNITZ b.Sayda", "dd2": 380, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dornreichenbach = { kind: BLOCK_T.BHFTAG, "station": "Dornreichenbach", "lines": ["LD"], "upperCase": "DORNREICHENBACH", "dd2": 510, "dd3": 340, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dresd_Wettinerstr = { kind: BLOCK_T.BHFTAG, "station": "Dresd. Wettinerstr.", "lines": ["BD"], "upperCase": "DRESDEN Wettinerstraße", "dd2": 15, "dd3": 10, "c2": 510, "c3": 340, "z2": 800, "z3": 530, "comment": "laut stat verz GD" };
    var Dresden_Hptbf = { kind: BLOCK_T.BHFTAG, "station": "Dresden Hptbf.", "lines": ["BD", "DW", "DFA"], "upperCase": "DRESDEN Hauptbhf.", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 780, "z3": 520 };
    var Dresden_Fr = { kind: BLOCK_T.BHFTAG, "station": "Dresden-Fr.", "lines": ["DE", "DFA"], "upperCase": "DRESDEN-Friedrst.", "dd2": 15, "dd3": 10, "c2": 500, "c3": 340, "z2": 800, "z3": 530 };
    var Dresden_Neust_Leip_Bf = { kind: BLOCK_T.BHFTAG, "station": "Dresden-Neust.Leip.Bf.", "lines": ["LD", "BD"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 510, "c3": 340, "z2": 800, "z3": 530 };
    var Dresden_Neust_Schl_Bf = { kind: BLOCK_T.BHFTAG, "station": "Dresden-Neust.Schl.Bf.", "lines": ["GD", "BD"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 510, "c3": 340, "z2": 800, "z3": 530 };
    var Döbeln_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Döbeln Bhf.", "lines": ["RC", "BC"], "upperCase": "Döbeln Bahnhof", "dd2": 410, "dd3": 270, "c2": 250, "c3": 170, "z2": 540, "z3": 360 };
    var Döbeln_Haltep = { kind: BLOCK_T.BHFTAG, "station": "Döbeln Haltep.", "lines": ["BC"], "upperCase": "DÖBELN Haltepunkt", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Döhlen_b_Rochl = { kind: BLOCK_T.BHFTAG, "station": "Döhlen b.Rochl.", "lines": ["WR"], "upperCase": "DÖHLEN b.Rochlitz", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dölau_bGreiz = { kind: BLOCK_T.BHFTAG, "station": "Dölau b.Greiz", "lines": ["PWz"], "upperCase": "DÖLAU b.Greiz i.R.ä.L.", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 190, "z3": 130 };
    var Döschütz = { kind: BLOCK_T.BHFTAG, "station": "Döschütz", "lines": ["OD"], "upperCase": "DÖSCHÜTZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dürrhennersdorf = { kind: BLOCK_T.BHFTAG, "station": "Dürrhennersdorf", "lines": ["EL", "TD"], "upperCase": "DÜRRHENNERSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dürrröhrsdorf = { kind: BLOCK_T.BHFTAG, "station": "Dürrröhrsdorf", "lines": ["KP", "ND"], "upperCase": "DÜRRRÖHRSDORF", "dd2": 180, "dd3": 120, "c2": 680, "c3": 450, "z2": 0, "z3": 0, "via": "Pirna Bf.", "comment": "via falsch in FKB" };
    var Ebersbach = { kind: BLOCK_T.BHFTAG, "station": "Ebersbach", "lines": ["OW", "EL"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 960, "c3": 640, "z2": 1250, "z3": 840, "via": "Putzkau" };
    var Ebersbrunn = { kind: BLOCK_T.BHFTAG, "station": "Ebersbrunn", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 70, "z3": 45 };
    var Edle_Krone = { kind: BLOCK_T.BHFTAG, "station": "Edle Krone", "lines": ["DW"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 380, "c3": 250, "z2": 670, "z3": 450 };
    var Eger = { kind: BLOCK_T.BHFTAG, "station": "Eger", "lines": ["PE"], "upperCase": "", "dd2": 1510, "dd3": 1010, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Plauen i.V." };
    var Ehrenfriedersdorf = { kind: BLOCK_T.BHFTAG, "station": "Ehrenfriedersdorf", "lines": ["WE"], "upperCase": "", "dd2": 610, "dd3": 410, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Eibau = { kind: BLOCK_T.BHFTAG, "station": "Eibau", "lines": ["OW", "SE"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Eibenstock = { kind: BLOCK_T.BHFTAG, "station": "Eibenstock", "lines": ["CA"], "upperCase": "", "dd2": 900, "dd3": 600, "c2": 420, "c3": 280, "z2": 290, "z3": 200 };
    var Eich = { kind: BLOCK_T.BHFTAG, "station": "Eich", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Einsiedel = { kind: BLOCK_T.BHFTAG, "station": "Einsiedel", "lines": ["CA"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 65, "c3": 45, "z2": 360, "z3": 240 };
    var Ellefeld = { kind: BLOCK_T.BHFTAG, "station": "Ellefeld", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elsterberg = { kind: BLOCK_T.BHFTAG, "station": "Elsterberg", "lines": ["PWz"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 330, "z2": 210, "z3": 140, "via": "Greiz" };
    var Elsterwerda_B_D_B = { kind: BLOCK_T.BHFTAG, "station": "Elsterwerda B.-D.-B.", "lines": ["DF", "DE", "ZE"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Elsterwerda_O_B = { kind: BLOCK_T.BHFTAG, "station": "Elsterwerda O.-B.", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elstra = { kind: BLOCK_T.BHFTAG, "station": "Elstra", "lines": ["KE"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elterlein = { kind: BLOCK_T.BHFTAG, "station": "Elterlein", "lines": ["ZS"], "upperCase": "", "dd2": 810, "dd3": 540, "c2": 330, "c3": 220, "z2": 0, "z3": 0, "via": "Zwönitz", "comment": "via frei erfunden" };
    var Endschütz = { kind: BLOCK_T.BHFTAG, "station": "Endschütz", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 200, "z3": 140 };
    var Eppendorf = { kind: BLOCK_T.BHFTAG, "station": "Eppendorf", "lines": ["HE"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 170, "c3": 120, "z2": 390, "z3": 260 };
    var Erbisdorf = { kind: BLOCK_T.BHFTAG, "station": "Erbisdorf", "lines": ["BL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Erdmannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Erdmannsdorf", "lines": ["AF"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 100, "c3": 70, "z2": 390, "z3": 260 };
    var Erfenschlag = { kind: BLOCK_T.BHFTAG, "station": "Erfenschlag", "lines": ["CA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 40, "c3": 30, "z2": 0, "z3": 0 };
    var Erla = { kind: BLOCK_T.BHFTAG, "station": "Erla", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 270, "z3": 180 };
    var Erlabrunn = { kind: BLOCK_T.BHFTAG, "station": "Erlabrunn", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 330, "z3": 220 };
    var Erlau = { kind: BLOCK_T.BHFTAG, "station": "Erlau", "lines": ["RC"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 130, "c3": 90, "z2": 0, "z3": 0 };
    var Falkenau = { kind: BLOCK_T.BHFTAG, "station": "Falkenau", "lines": ["DW"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 95, "c3": 65, "z2": 390, "z3": 260 };
    var Falkenstein = { kind: BLOCK_T.BHFTAG, "station": "Falkenstein", "lines": ["ZF", "HOe", "FM"], "upperCase": "", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 220, "z3": 150 };
    var Feilitzsch = { kind: BLOCK_T.BHFTAG, "station": "Feilitzsch", "lines": ["LH"], "upperCase": "", "dd2": 1310, "dd3": 880, "c2": 830, "c3": 560, "z2": 540, "z3": 360 };
    var Flossmühle = { kind: BLOCK_T.BHFTAG, "station": "Flossmühle", "lines": ["RF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Flossplatz = { kind: BLOCK_T.BHFTAG, "station": "Flossplatz", "lines": ["AF"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Flöha = { kind: BLOCK_T.BHFTAG, "station": "Flöha", "lines": ["DW", "AF", "RF"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 75, "c3": 50, "z2": 370, "z3": 250 };
    var Frankenau = { kind: BLOCK_T.BHFTAG, "station": "Frankenau", "lines": ["MR"], "upperCase": "FRANKENAU i.S.=A." };
    var Frankenberg = { kind: BLOCK_T.BHFTAG, "station": "Frankenberg", "lines": ["RW"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 105, "c3": 70, "z2": 400, "z3": 270, "via": "Niederwiesa" };
    var Frankenstein = { kind: BLOCK_T.BHFTAG, "station": "Frankenstein", "lines": ["DW"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 180, "c3": 120, "z2": 480, "z3": 320 };
    var Franzensbad = { kind: BLOCK_T.BHFTAG, "station": "Franzensbad", "lines": ["PE"], "upperCase": "", "dd2": 1470, "dd3": 980, "c2": 990, "c3": 660, "z2": 700, "z3": 470, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 660, "z3b": 440, "viab": "Voigtsgrün" };
    var Frauendorf = { kind: BLOCK_T.BHFTAG, "station": "Frauendorf", "lines": ["KC"], "upperCase": "", "dd2": 740, "dd3": 500, "c2": 260, "c3": 180, "z2": 0, "z3": 0 };
    var Frauenhain = { kind: BLOCK_T.BHFTAG, "station": "Frauenhain", "lines": ["DE"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Frauenstein = { kind: BLOCK_T.BHFTAG, "station": "Frauenstein", "lines": ["KF"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 450, "c3": 300, "z2": 740, "z3": 500 };
    var Freiberg = { kind: BLOCK_T.BHFTAG, "station": "Freiberg", "lines": ["DW", "FH", "NM"], "upperCase": "FREIBERG i.S.", "dd2": 250, "dd3": 170, "c2": 240, "c3": 160, "z2": 540, "z3": 360 };
    var Freiberg_Schachtbhf = { kind: BLOCK_T.BHFTAG, "station": "Freiberg Schachtbhf.", "lines": ["FH"], "upperCase": "", "dd2": 260, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Friedebach = { kind: BLOCK_T.BHFTAG, "station": "Friedebach", "lines": ["MS"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Friedersdorf_b_Fr = { kind: BLOCK_T.BHFTAG, "station": "Friedersdorf b.Fr.", "lines": ["KF"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Frohburg = { kind: BLOCK_T.BHFTAG, "station": "Frohburg", "lines": ["KC"], "upperCase": "", "dd2": 770, "dd3": 510, "c2": 290, "c3": 190, "z2": 380, "z3": 260 };
    var Fährbrücke = { kind: BLOCK_T.BHFTAG, "station": "Fährbrücke", "lines": ["SZ"], "upperCase": "", "dd2": 870, "dd3": 580, "c2": 390, "c3": 260, "z2": 95, "z3": 65, "comment": "todo   via zwickau od thalheim" };
    var Gadewitz = { kind: BLOCK_T.BHFTAG, "station": "Gadewitz", "lines": ["OD", "GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gaschwitz = { kind: BLOCK_T.BHFTAG, "station": "Gaschwitz", "lines": ["LH", "GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2b": 470, "z3b": 310, "viab": "Werdau" };
    var Gauern = { kind: BLOCK_T.BHFTAG, "station": "Gauern", "lines": ["WM"], "upperCase": "GAUERN i.S.=A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 180, "z3": 120 };
    var Geising_Altenb = { kind: BLOCK_T.BHFTAG, "station": "Geising-Altenb.", "lines": ["MG"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geithain = { kind: BLOCK_T.BHFTAG, "station": "Geithain", "lines": ["KC", "LG"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 320, "z3": 220, "comment": "todo langweg fehlt" };
    var Gelenau = { kind: BLOCK_T.BHFTAG, "station": "Gelenau", "lines": ["WE"], "upperCase": "", "dd2": 560, "dd3": 380, "c2": 240, "c3": 160, "z2": 0, "z3": 0 };
    var Gelobtland = { kind: BLOCK_T.BHFTAG, "station": "Gelobtland", "lines": ["RF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Gera_R_Pr_St_B = { kind: BLOCK_T.BHFTAG, "station": "Gera (R.) Pr.St.B.", "lines": ["GGa"], "upperCase": "", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 390, "z3": 260, "via": "Gössnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 300, "z3b": 200, "viab": "Seelingstädt", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 370, "z3c": 250, "viac": "Greiz" };
    var Gera_Reuss_S_St_B = { kind: BLOCK_T.BHFTAG, "station": "Gera (Reuss) S.St.B.", "lines": ["GGa", "PWz"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 330, "z2": 390, "z3": 260, "via": "Gössnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 190, "viab": "Seelingstädt", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 360, "z3c": 240, "viac": "Greiz" };
    var Gerichshain = { kind: BLOCK_T.BHFTAG, "station": "Gerichshain", "lines": ["LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geringswalde = { kind: BLOCK_T.BHFTAG, "station": "Geringswalde", "lines": ["WR"], "upperCase": "", "dd2": 520, "dd3": 350, "c2": 250, "c3": 170, "z2b": 410, "z3b": 270, "via": "Waldheim" };
    var Gersberg = { kind: BLOCK_T.BHFTAG, "station": "Gersberg", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gersdorf = { kind: BLOCK_T.BHFTAG, "station": "Gersdorf", "lines": ["GD"], "upperCase": "GERSDORF i.Pr.", "dd2": 590, "dd3": 390, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geyer_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Geyer Bhf.", "lines": ["SGr"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 380, "c3": 250, "z2": 0, "z3": 0 };
    var Geyer_Haltepunkt = { kind: BLOCK_T.BHFTAG, "station": "Geyer Haltepunkt", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Glashütte = { kind: BLOCK_T.BHFTAG, "station": "Glashütte", "lines": ["MG"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 680, "c3": 450, "z2": 0, "z3": 0 };
    var Glauchau = { kind: BLOCK_T.BHFTAG, "station": "Glauchau", "lines": ["DW", "GW"], "upperCase": "", "dd2": 680, "dd3": 460, "c2": 200, "c3": 140, "z2": 100, "z3": 65 };
    var Glossen_b_L = { kind: BLOCK_T.BHFTAG, "station": "Glossen b.L.", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Glossen_b_O = { kind: BLOCK_T.BHFTAG, "station": "Glossen b.O.", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Golzern = { kind: BLOCK_T.BHFTAG, "station": "Golzern", "lines": ["GW"], "upperCase": "", "dd2": 650, "dd3": 440, "c2": 420, "c3": 280, "z2": 510, "z3": 340 };
    var Gr_Voigtsbg = { kind: BLOCK_T.BHFTAG, "station": "Gr.-Voigtsbg.", "lines": ["NM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "freiberg" };
    var Greiz = { kind: BLOCK_T.BHFTAG, "station": "Greiz", "lines": ["PWz", "BG"], "upperCase": "GREIZ  i.R.ä.L.", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Greiz_Aubachth = { kind: BLOCK_T.BHFTAG, "station": "Greiz-Aubachth.", "lines": ["BG"], "upperCase": "GREIZ-AUBACHTHAL i.R.ä.L.", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Griesbach = { kind: BLOCK_T.BHFTAG, "station": "Griesbach", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grimma_ob_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Grimma ob.Bhf.", "lines": ["BC"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 460, "c3": 310, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 390, "c3b": 260, "z2b": 490, "z3b": 330, "viab": "Rochlitz" };
    var Grimma_unt_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Grimma unt. Bhf.", "lines": ["GW"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 460, "c3": 310, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 390, "c3b": 260, "z2b": 490, "z3b": 330, "viab": "Rochlitz" };
    var Groitzsch = { kind: BLOCK_T.BHFTAG, "station": "Groitzsch", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 530, "c3": 350, "z2": 450, "z3": 300 };
    var Gross_Steinberg = { kind: BLOCK_T.BHFTAG, "station": "Gross-Steinberg", "lines": ["BC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossbauchlitz = { kind: BLOCK_T.BHFTAG, "station": "Grossbauchlitz", "lines": ["RC", "OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 260, "c3": 170, "z2": 540, "z3": 360 };
    var Grossbothen = { kind: BLOCK_T.BHFTAG, "station": "Grossbothen", "lines": ["BC", "GW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 420, "c3": 280, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 350, "c3b": 240, "z2b": 440, "z3b": 300, "viab": "Rochlitz" };
    var Grossbraunshain = { kind: BLOCK_T.BHFTAG, "station": "Grossbraunshain", "lines": ["MR"], "upperCase": "GROSSBRAUNSHAIN i.S.=A." };
    var Grosscotta = { kind: BLOCK_T.BHFTAG, "station": "Grosscotta", "lines": ["PGc"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossenhain = { kind: BLOCK_T.BHFTAG, "station": "Grossenhain", "lines": ["DE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar" };
    var Grossenhain_C_G = { kind: BLOCK_T.BHFTAG, "station": "Grossenhain C.-G.", "lines": ["GP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "ignoriert da via unklar" };
    var Grossenstein = { kind: BLOCK_T.BHFTAG, "station": "Grossenstein", "lines": ["MR"], "upperCase": "GROSSENSTEIN i.S.=A." };
    var Grossharthau = { kind: BLOCK_T.BHFTAG, "station": "Grossharthau", "lines": ["GD"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grosshartmannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Grosshartmannsdorf", "lines": ["BGh"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 350, "c3": 230, "z2": 640, "z3": 430 };
    var Grosspostw = { kind: BLOCK_T.BHFTAG, "station": "Grosspostw.", "lines": ["BS", "GC"], "upperCase": "", "dd2": 420, "dd3": 280, "c2": 890, "c3": 600, "z2": 0, "z3": 0, "via": "Bautzen", "comment": "todo via bautzen or putzkau" };
    var Grossröda = { kind: BLOCK_T.BHFTAG, "station": "Grossröda", "lines": ["MR"], "upperCase": "ISA" };
    var Grossröhrsdorf = { kind: BLOCK_T.BHFTAG, "station": "Grossröhrsdorf", "lines": ["KP"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 690, "c3": 460, "z2": 980, "z3": 660 };
    var Grossschirma = { kind: BLOCK_T.BHFTAG, "station": "Grossschirma", "lines": ["NM"], "upperCase": "", "dd2": 310, "dd3": 210, "c2": 310, "c3": 210, "z2": 0, "z3": 0, "via": "Freiberg" };
    var Grossschönau = { kind: BLOCK_T.BHFTAG, "station": "Grossschönau", "lines": ["SE"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 1100, "c3": 740, "z2": 1390, "z3": 930, "via": "Warnsdorf" };
    var Grosssermuth = { kind: BLOCK_T.BHFTAG, "station": "Grosssermuth", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossstöbnitz = { kind: BLOCK_T.BHFTAG, "station": "Grossstöbnitz", "lines": ["GGa"], "upperCase": "ISA" };
    var Grottau = { kind: BLOCK_T.BHFTAG, "station": "Grottau", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 675, "dd3": 450, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Oberoderwitz", "dd2b": 745, "dd3b": 500, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Warnsdorf", "comment": "unklar oder viaherrnhut" };
    var Grumbach = { kind: BLOCK_T.BHFTAG, "station": "Grumbach", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grunau = { kind: BLOCK_T.BHFTAG, "station": "Grunau", "lines": ["RW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gröditz = { kind: BLOCK_T.BHFTAG, "station": "Gröditz", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "riesa" };
    var Gröppendorf = { kind: BLOCK_T.BHFTAG, "station": "Gröppendorf", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grüna = { kind: BLOCK_T.BHFTAG, "station": "Grüna", "lines": ["DW"], "upperCase": "", "dd2": 560, "dd3": 370, "c2": 70, "c3": 50, "z2": 230, "z3": 150 };
    var Grünbach = { kind: BLOCK_T.BHFTAG, "station": "Grünbach", "lines": ["FM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "via unklar" };
    var Grünhain = { kind: BLOCK_T.BHFTAG, "station": "Grünhain", "lines": ["ZS"], "upperCase": "", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 830, "dd3b": 560, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Annaberg" };
    var Grünhainichen = { kind: BLOCK_T.BHFTAG, "station": "Grünhainichen", "lines": ["RF"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 170, "c3": 120, "z2": 470, "z3": 310 };
    var Grünstädtel = { kind: BLOCK_T.BHFTAG, "station": "Grünstädtel", "lines": ["BSg", "GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 390, "c3": 260, "z2": 270, "z3": 180 };
    var Gutenfürst = { kind: BLOCK_T.BHFTAG, "station": "Gutenfürst", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 500, "z3": 330 };
    var Görlitz = { kind: BLOCK_T.BHFTAG, "station": "Görlitz", "lines": ["GD"], "upperCase": "GÖRLITZ i.Pr.", "dd2": 640, "dd3": 430, "c2": 1120, "c3": 750, "z2": 1410, "z3": 940 };
    var Görlitz_b_O = { kind: BLOCK_T.BHFTAG, "station": "Görlitz b.O.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gössnitz = { kind: BLOCK_T.BHFTAG, "station": "Gössnitz", "lines": ["LH", "GGa", "SG"], "upperCase": "GÖSSNITZ i.S.=A.", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 150, "z3b": 100, "viab": "Schönbörnchen" };
    var Göttengrün = { kind: BLOCK_T.BHFTAG, "station": "Göttengrün", "lines": ["SH"], "upperCase": "GÖTTENGRÜN i.R.j.L.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 480, "z3": 320 };
    var Hainewalde = { kind: BLOCK_T.BHFTAG, "station": "Hainewalde", "lines": ["SE"], "upperCase": "", "dd2": 650, "dd3": 430, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Warnsdorf", "comment": "via frei erfunden" };
    var Hainichen = { kind: BLOCK_T.BHFTAG, "station": "Hainichen", "lines": ["RW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 170, "c3": 110, "z2": 450, "z3": 300, "via": "Niederwiesa", "dd2b": 460, "dd3b": 310, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Meissen-Cölln" };
    var Hainsberg = { kind: BLOCK_T.BHFTAG, "station": "Hainsberg", "lines": ["DW", "HK"], "upperCase": "", "dd2": 65, "dd3": 45, "c2": 420, "c3": 280, "z2": 710, "z3": 480 };
    var Halbendorf = { kind: BLOCK_T.BHFTAG, "station": "Halbendorf", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Halsbrücke = { kind: BLOCK_T.BHFTAG, "station": "Halsbrücke", "lines": ["FH"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 290, "c3": 200, "z2": 580, "z3": 390 };
    var Hammer_Leubsdorf = { kind: BLOCK_T.BHFTAG, "station": "Hammer-Leubsdorf", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 150, "c3": 100, "z2": 0, "z3": 0 };
    var Hammer_Unterwiesenthal = { kind: BLOCK_T.BHFTAG, "station": "Hammer-Unterwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hammerbrücke = { kind: BLOCK_T.BHFTAG, "station": "Hammerbrücke", "lines": ["CA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hartha_b_Waldh = { kind: BLOCK_T.BHFTAG, "station": "Hartha b. Waldh.", "lines": ["WR"], "upperCase": "", "dd2": 490, "dd3": 330, "c2": 210, "c3": 140, "z2": 440, "z3": 300, "via": "Waldheim" };
    var Harthau_i_E = { kind: BLOCK_T.BHFTAG, "station": "Harthau i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 55, "c3": 35, "z2": 350, "z3": 240 };
    var Hartmannmühle = { kind: BLOCK_T.BHFTAG, "station": "Hartmannmühle", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hartmannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Hartmannsdorf", "lines": ["LW"], "upperCase": "", "dd2": 560, "dd3": 380, "c2": 80, "c3": 55, "z2": 380, "z3": 250, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 300, "z3b": 200, "viab": "Limbach" };
    var Hartmannsdorf_b_S = { kind: BLOCK_T.BHFTAG, "station": "Hartmannsdorf b. S.", "lines": ["WCd"], "upperCase": " b saup", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 100, "z3": 65 };
    var Heidenau = { kind: BLOCK_T.BHFTAG, "station": "Heidenau", "lines": ["BD"], "upperCase": "", "dd2": 0, "dd3": 60, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "dd2 price unreadable" };
    var Helbigsdorf = { kind: BLOCK_T.BHFTAG, "station": "Helbigsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hennersdorf = { kind: BLOCK_T.BHFTAG, "station": "Hennersdorf", "lines": ["AF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Herlasgrün = { kind: BLOCK_T.BHFTAG, "station": "Herlasgrün", "lines": ["LH", "HOe"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 340, "z2": 210, "z3": 140 };
    var Hermannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Hermannsdorf", "lines": ["ZS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hermsdf_Rhf = { kind: BLOCK_T.BHFTAG, "station": "Hermsdf.-Rhf.", "lines": ["NM"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hermsdorf = { kind: BLOCK_T.BHFTAG, "station": "Hermsdorf", "lines": ["KS"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Herrnhut = { kind: BLOCK_T.BHFTAG, "station": "Herrnhut", "lines": ["ZL", "HB"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 1070, "c3": 710, "z2": 0, "z3": 0, "via": "Löbau" };
    var Herzogswalde = { kind: BLOCK_T.BHFTAG, "station": "Herzogswalde", "lines": ["PNo"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hetzdorf_b_Oe = { kind: BLOCK_T.BHFTAG, "station": "Hetzdorf b.Oe.", "lines": ["RF", "HE"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 110, "c3": 75, "z2": 410, "z3": 270 };
    var Hilbersdorf = { kind: BLOCK_T.BHFTAG, "station": "Hilbersdorf", "lines": ["DW"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 20, "c3": 15, "z2": 320, "z3": 210 };
    var Himmelsfürst = { kind: BLOCK_T.BHFTAG, "station": "Himmelsfürst", "lines": ["BL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hirschberg_a_d_S = { kind: BLOCK_T.BHFTAG, "station": "Hirschberg a.d.S.", "lines": ["SH"], "upperCase": "IRJL", "dd2": 1290, "dd3": 860, "c2": 810, "c3": 540, "z2": 520, "z3": 350 };
    var Hirschfelde = { kind: BLOCK_T.BHFTAG, "station": "Hirschfelde", "lines": ["ZN"], "upperCase": "", "dd2": 680, "dd3": 450, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hof = { kind: BLOCK_T.BHFTAG, "station": "Hof", "lines": ["LH"], "upperCase": "", "dd2": 1360, "dd3": 910, "c2": 880, "c3": 590, "z2": 590, "z3": 390 };
    var Hohenfichte = { kind: BLOCK_T.BHFTAG, "station": "Hohenfichte", "lines": ["RF"], "upperCase": "", "dd2": 460, "dd3": 310, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Hohenstein_E = { kind: BLOCK_T.BHFTAG, "station": "Hohenstein-E.", "lines": ["DW"], "upperCase": "", "dd2": 600, "dd3": 400, "c2": 115, "c3": 75, "z2": 180, "z3": 120 };
    var Hohnstein_b_Sch = { kind: BLOCK_T.BHFTAG, "station": "Hohnstein b.Sch.", "lines": ["KH"], "upperCase": "", "dd2": 350, "dd3": 240, "c2": 830, "c3": 550, "z2": 1120, "z3": 750 };
    var Holzhau = { kind: BLOCK_T.BHFTAG, "station": "Holzhau", "lines": ["NM"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 430, "c3": 290, "z2": 0, "z3": 0 };
    var Holzhausen = { kind: BLOCK_T.BHFTAG, "station": "Holzhausen", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Hopfgarten_i_S = { kind: BLOCK_T.BHFTAG, "station": "Hopfgarten i.S.", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 270, "c3": 190, "z2": 0, "z3": 0 };
    var Hundsgrün = { kind: BLOCK_T.BHFTAG, "station": "Hundsgrün", "lines": ["PE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Häselich = { kind: BLOCK_T.BHFTAG, "station": "Häselich", "lines": ["MG"], "upperCase": "", "dd2": 140, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Höhlteich = { kind: BLOCK_T.BHFTAG, "station": "Höhlteich", "lines": ["StE", "HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Irfersgrün = { kind: BLOCK_T.BHFTAG, "station": "Irfersgrün", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70 };
    var Jahnsdorf_i_E = { kind: BLOCK_T.BHFTAG, "station": "Jahnsdorf i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 90, "c3": 60, "z2": 320, "z3": 210 };
    var Jocketa = { kind: BLOCK_T.BHFTAG, "station": "Jocketa", "lines": ["LH"], "upperCase": "", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 250, "z3": 170 };
    var Johanngeorgenstadt = { kind: BLOCK_T.BHFTAG, "station": "Johanngeorgenstadt", "lines": ["JS"], "upperCase": "", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2b": 350, "z3b": 240, "via": "Thalheim", "comment": "Todo via" };
    var Jonsdorf = { kind: BLOCK_T.BHFTAG, "station": "Jonsdorf", "lines": ["BJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Jägersgrün = { kind: BLOCK_T.BHFTAG, "station": "Jägersgrün", "lines": ["CA"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 340, "z2": 380, "z3": 250, "via": "Aue", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 320, "z3b": 220, "viab": "Voigtsgrün" };
    var Jöhstadt_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Jöhstadt Bhf.", "lines": ["WJ"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 390, "c3": 260, "z2": 0, "z3": 0 };
    var Kamenz = { kind: BLOCK_T.BHFTAG, "station": "Kamenz", "lines": ["KP", "KE"], "upperCase": "KAMENZ i.S.", "dd2": 310, "dd3": 210, "c2": 790, "c3": 530, "z2": 1080, "z3": 720 };
    var Kemnitz, Dorf = { kind: BLOCK_T.BHFTAG, "station": "Kemnitz, Dorf", "lines": ["DE"], "upperCase": "", "dd2": 40, "dd3": 20, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kesselsdorf = { kind: BLOCK_T.BHFTAG, "station": "Kesselsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ketten = { kind: BLOCK_T.BHFTAG, "station": "Ketten", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kieritzsch = { kind: BLOCK_T.BHFTAG, "station": "Kieritzsch", "lines": ["LH", "KC"], "upperCase": "", "dd2": 860, "dd3": 570, "c2": 380, "c3": 250, "z2b": 390, "z3b": 260, "viab": "Werdau", "comment": "weg unklar" };
    var Kipsdorf = { kind: BLOCK_T.BHFTAG, "station": "Kipsdorf", "lines": ["HK"], "upperCase": "", "dd2": 230, "dd3": 150, "c2": 570, "c3": 380, "z2": 0, "z3": 0 };
    var Kirchberg_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Kirchberg Bhf.", "lines": ["WCd"], "upperCase": "", "dd2": 850, "dd3": 570, "c2": 370, "c3": 250, "z2": 75, "z3": 50 };
    var Kirchberg_Hltept = { kind: BLOCK_T.BHFTAG, "station": "Kirchberg Hltept.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 85, "z3": 55 };
    var Kirchberg_b_St = { kind: BLOCK_T.BHFTAG, "station": "Kirchberg b.St.", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Kittlitz_i_S = { kind: BLOCK_T.BHFTAG, "station": "Kittlitz i.S.", "lines": ["LWg"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kl_Waltersdf = { kind: BLOCK_T.BHFTAG, "station": "Kl. Waltersdf.", "lines": ["NM"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Klein_Schirma = { kind: BLOCK_T.BHFTAG, "station": "Klein-Schirma", "lines": ["DW"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Kleinradmeritz = { kind: BLOCK_T.BHFTAG, "station": "Kleinradmeritz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinrügeln = { kind: BLOCK_T.BHFTAG, "station": "Kleinrügeln", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinschönau = { kind: BLOCK_T.BHFTAG, "station": "Kleinschönau", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinwelka = { kind: BLOCK_T.BHFTAG, "station": "Kleinwelka", "lines": ["BK"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 880, "c3": 590, "z2": 0, "z3": 0 };
    var Klingenberg_Colmn = { kind: BLOCK_T.BHFTAG, "station": "Klingenberg-Colmn.", "lines": ["DW", "KF"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 330, "c3": 220, "z2": 620, "z3": 420 };
    var Klingenthal = { kind: BLOCK_T.BHFTAG, "station": "Klingenthal", "lines": ["ZK"], "upperCase": "", "dd2": 1140, "dd3": 760, "c2": 660, "c3": 440, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 410, "z3b": 270, "viab": "Voigtsgrün" };
    var Klosterbuch = { kind: BLOCK_T.BHFTAG, "station": "Klosterbuch", "lines": ["BC"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Döbeln Bhf." };
    var Klotzsche = { kind: BLOCK_T.BHFTAG, "station": "Klotzsche", "lines": ["GD", "KS"], "upperCase": "", "dd2": 65, "dd3": 45, "c2": 550, "c3": 370, "z2": 840, "z3": 560 };
    var Kohlmühle = { kind: BLOCK_T.BHFTAG, "station": "Kohlmühle", "lines": ["BS", "KH"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Schandau" };
    var Kostitz = { kind: BLOCK_T.BHFTAG, "station": "Kostitz", "lines": ["MR"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kratzau = { kind: BLOCK_T.BHFTAG, "station": "Kratzau", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 735, "dd3": 490, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Oberoderwitz", "dd2b": 805, "dd3b": 540, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Warnsdorf" };
    var Kratzmühle = { kind: BLOCK_T.BHFTAG, "station": "Kratzmühle", "lines": ["RW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kreischa_Slh = { kind: BLOCK_T.BHFTAG, "station": "Kreischa-Slh.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0 };
    var Kretscham_Rothensehma = { kind: BLOCK_T.BHFTAG, "station": "Kretscham-Rothensehma", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kriebethal = { kind: BLOCK_T.BHFTAG, "station": "Kriebethal", "lines": ["WK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kriebitzsch = { kind: BLOCK_T.BHFTAG, "station": "Kriebitzsch", "lines": ["ZA"], "upperCase": "???", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Krippen = { kind: BLOCK_T.BHFTAG, "station": "Krippen", "lines": ["BD"], "upperCase": "", "dd2": 260, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Krumhermsdorf = { kind: BLOCK_T.BHFTAG, "station": "Krumhermsdorf", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kubschütz = { kind: BLOCK_T.BHFTAG, "station": "Kubschütz", "lines": ["GD"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kunnersdf_a_d_Eig = { kind: BLOCK_T.BHFTAG, "station": "Kunnersdf.a.d.Eig.", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kupferh_Grünthal = { kind: BLOCK_T.BHFTAG, "station": "Kupferh. Grünthal", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Käferhain = { kind: BLOCK_T.BHFTAG, "station": "Käferhain", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kändler = { kind: BLOCK_T.BHFTAG, "station": "Kändler", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 110, "c3": 75, "z2": 0, "z3": 0, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 160, "c3b": 110, "z2b": 0, "z3b": 0, "viab": "Wüstenbrand" };
    var Köblitz = { kind: BLOCK_T.BHFTAG, "station": "Köblitz", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königsbr_Haltest = { kind: BLOCK_T.BHFTAG, "station": "Königsbr. Haltest.", "lines": ["KS"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königsbrück_B = { kind: BLOCK_T.BHFTAG, "station": "Königsbrück B.", "lines": ["KS"], "upperCase": "", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königstein = { kind: BLOCK_T.BHFTAG, "station": "Königstein", "lines": ["BD"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 690, "c3": 460, "z2": 990, "z3": 660 };
    var Königswalde = { kind: BLOCK_T.BHFTAG, "station": "Königswalde", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königswartha = { kind: BLOCK_T.BHFTAG, "station": "Königswartha", "lines": ["BK"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Köttewitz = { kind: BLOCK_T.BHFTAG, "station": "Köttewitz", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Köttwitzsch = { kind: BLOCK_T.BHFTAG, "station": "Köttwitzsch", "lines": ["RP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 230, "c3": 150, "z2": 0, "z3": 0 };
    var Kötzschenbroda = { kind: BLOCK_T.BHFTAG, "station": "Kötzschenbroda", "lines": ["LD", "DEK"], "upperCase": "", "dd2": 80, "dd3": 55, "c2": 570, "c3": 380, "z2": 860, "z3": 570 };
    var Kühberg = { kind: BLOCK_T.BHFTAG, "station": "Kühberg", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kürbitz = { kind: BLOCK_T.BHFTAG, "station": "Kürbitz", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langebrück = { kind: BLOCK_T.BHFTAG, "station": "Langebrück", "lines": ["GD"], "upperCase": "", "dd2": 95, "dd3": 65, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenau = { kind: BLOCK_T.BHFTAG, "station": "Langenau", "lines": ["BL"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 320, "c3": 220, "z2": 0, "z3": 0 };
    var Langenberg_b_R = { kind: BLOCK_T.BHFTAG, "station": "Langenberg b.R.", "lines": ["LD"], "upperCase": "", "dd2": 290, "dd3": 190, "c2": 440, "c3": 300, "z2": 0, "z3": 0 };
    var Langenbuch = { kind: BLOCK_T.BHFTAG, "station": "Langenbuch", "lines": ["SSz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenhennersdf = { kind: BLOCK_T.BHFTAG, "station": "Langenhennersdf", "lines": ["PB"], "upperCase": "", "comment": "BP in statVerz ??? ", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenleuba = { kind: BLOCK_T.BHFTAG, "station": "Langenleuba", "lines": ["RP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 220, "c3": 150, "z2": 0, "z3": 0 };
    var Langenwolmsdorf = { kind: BLOCK_T.BHFTAG, "station": "Langenwolmsdorf", "lines": ["ND"], "upperCase": "", "dd2": 250, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Lastau = { kind: BLOCK_T.BHFTAG, "station": "Lastau", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 370, "z3": 250 };
    var Lauenstein = { kind: BLOCK_T.BHFTAG, "station": "Lauenstein", "lines": ["MG"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lausa = { kind: BLOCK_T.BHFTAG, "station": "Lausa", "lines": ["KS"], "upperCase": "", "dd2": 90, "dd3": 60, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lausigk = { kind: BLOCK_T.BHFTAG, "station": "Lausigk", "lines": ["LG"], "upperCase": "", "dd2": 770, "dd3": 520, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Chemnitz", "dd2b": 0, "dd3b": 0, "c2b": 300, "c3b": 200, "z2b": 0, "z3b": 0, "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 390, "z3c": 260, "viac": "Narsdorf" };
    var Laussnitz = { kind: BLOCK_T.BHFTAG, "station": "Laussnitz", "lines": ["KS"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lauter = { kind: BLOCK_T.BHFTAG, "station": "Lauter", "lines": ["SZ"], "upperCase": "", "dd2": 830, "dd3": 550, "c2": 350, "c3": 240, "z2": 230, "z3": 150 };
    var Lauterbach_Steinbach = { kind: BLOCK_T.BHFTAG, "station": "Lauterbach-Steinbach", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 320, "c3": 220, "z2": 0, "z3": 0 };
    var Lautitz = { kind: BLOCK_T.BHFTAG, "station": "Lautitz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lehndorf = { kind: BLOCK_T.BHFTAG, "station": "Lehndorf", "lines": ["LH"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2b": 220, "z3b": 150, "viab": "Werdau" };
    var Leipzig_Bayr_Bf = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Bayr.Bf.", "lines": ["LH", "LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 630, "c3": 420, "z2b": 520, "z3b": 350, "via": "Gössnitz", "viab": "Werdau" };
    var Leipzig_Berl_Bf = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Berl.Bf.", "lines": ["LHV"], "upperCase": "", "comment": "line by NM", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Leipzig_Dr_Bf = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Dr.Bf.", "lines": ["LD"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Riesa" };
    var Leipzig_Stötteritz = { kind: BLOCK_T.BHFTAG, "station": "Leipzig Stötteritz", "lines": ["LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Leipzig_Connewitz = { kind: BLOCK_T.BHFTAG, "station": "Leipzig-Connewitz", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "laut stat verz LP, weil strecke nach plagwitz hier abzweigt" };
    var Leisnig = { kind: BLOCK_T.BHFTAG, "station": "Leisnig", "lines": ["BC"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 330, "c3": 220, "z2": 620, "z3": 410, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 540, "z3b": 360, "viab": "Lunzenau" };
    var Lengenfeld = { kind: BLOCK_T.BHFTAG, "station": "Lengenfeld", "lines": ["ZF"], "upperCase": "", "dd2": 910, "dd3": 610, "c2": 430, "c3": 290, "z2": 0, "z3": 0 };
    var Leuben = { kind: BLOCK_T.BHFTAG, "station": "Leuben", "lines": ["RN"], "upperCase": "", "dd2": 380, "dd3": 260, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Meissen-Cölln" };
    var Leubsdorf = { kind: BLOCK_T.BHFTAG, "station": "Leubsdorf", "lines": ["RF"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 150, "c3": 100, "z2": 440, "z3": 300 };
    var Leutersdorf = { kind: BLOCK_T.BHFTAG, "station": "Leutersdorf", "lines": ["SE"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 1030, "c3": 690, "z2": 1320, "z3": 880 };
    var Lichtenberg = { kind: BLOCK_T.BHFTAG, "station": "Lichtenberg", "lines": ["NM"], "upperCase": "LICHTENBERG B FREIBERG", "dd2": 310, "dd3": 210, "c2": 300, "c3": 200, "z2": 600, "z3": 400 };
    var Lichtentanne = { kind: BLOCK_T.BHFTAG, "station": "Lichtentanne", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2": 30, "z3": 20 };
    var Lichtst_Callnb = { kind: BLOCK_T.BHFTAG, "station": "Lichtst.-Callnb.", "lines": ["StE"], "upperCase": "", "dd2": 660, "dd3": 440, "c2": 180, "c3": 120, "z2": 170, "z3": 120 };
    var Liebertwolkwitz = { kind: BLOCK_T.BHFTAG, "station": "Liebertwolkwitz", "lines": ["LG"], "upperCase": "", "dd2": 800, "dd3": 530, "c2b": 420, "c3b": 280, "z2": 0, "z3": 0, "via": "Leipzig Dr.Bf.", "comment": "raetselhaft, via frei erfunden" };
    var Liebschwitz = { kind: BLOCK_T.BHFTAG, "station": "Liebschwitz", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 260, "z3": 180 };
    var Limbach = { kind: BLOCK_T.BHFTAG, "station": "Limbach", "lines": ["LW", "LWd"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 105, "c3": 70, "z2": 400, "z3": 270, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 190, "viab": "Wüstenbrand" };
    var Limmritz = { kind: BLOCK_T.BHFTAG, "station": "Limmritz", "lines": ["RC"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 230, "c3": 150, "z2": 520, "z3": 350 };
    var Lobstädt = { kind: BLOCK_T.BHFTAG, "station": "Lobstädt", "lines": ["KC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 420, "z3": 280 };
    var Lohmen = { kind: BLOCK_T.BHFTAG, "station": "Lohmen", "lines": ["KP"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 630, "c3": 420, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Lohsdorf = { kind: BLOCK_T.BHFTAG, "station": "Lohsdorf", "lines": ["KH"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Loitzsch_Hohenl = { kind: BLOCK_T.BHFTAG, "station": "Loitzsch-Hohenl.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lommatzsch = { kind: BLOCK_T.BHFTAG, "station": "Lommatzsch", "lines": ["RN"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 490, "c3": 330, "z2b": 780, "z3b": 520, "comment": "via riesa unklar" };
    var Lottengrün = { kind: BLOCK_T.BHFTAG, "station": "Lottengrün", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 190 };
    var Lucka_i_S_A = { kind: BLOCK_T.BHFTAG, "station": "Lucka i. S.-A.", "lines": ["GM"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 570, "c3": 380, "z2c": 410, "z3c": 280, "via": "Gaschwitz", "dd2b": 0, "dd3b": 0, "c2b": 530, "c3b": 350, "z2b": 0, "z3b": 0, "viab": "Meuselwitz" };
    var Lugau = { kind: BLOCK_T.BHFTAG, "station": "Lugau", "lines": ["HW"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 150, "c3": 100, "z2": 270, "z3": 180 };
    var Lunzenau = { kind: BLOCK_T.BHFTAG, "station": "Lunzenau", "lines": ["GW"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 0, "c3": 0, "z2": 270, "z3": 180, "comment": "via erfunden" };
    var Löbau = { kind: BLOCK_T.BHFTAG, "station": "Löbau", "lines": ["GD", "ZL", "LWg", "EL"], "upperCase": "ISACHSEN", "dd2": 500, "dd3": 330, "c2": 980, "c3": 650, "z2": 1260, "z3": 840 };
    var Lössau = { kind: BLOCK_T.BHFTAG, "station": "Lössau", "lines": ["SSz"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lössnitz_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Lössnitz Bhf. ", "lines": ["CA"], "upperCase": "", "dd2": 740, "dd3": 490, "c2": 260, "c3": 180, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 240, "z3b": 160, "viab": "Aue" };
    var Lössnitz_Haltest = { kind: BLOCK_T.BHFTAG, "station": "Lössnitz Haltest.", "lines": ["CA"], "upperCase": "", "dd2": 770, "dd3": 510, "c2": 290, "c3": 190, "z2": 210, "z3": 140 };
    var Lössnitzgrund = { kind: BLOCK_T.BHFTAG, "station": "Lössnitzgrund", "lines": ["RRg"], "upperCase": "", "dd2": 80, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lössnitzthal = { kind: BLOCK_T.BHFTAG, "station": "Lössnitzthal", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Lüttnitz = { kind: BLOCK_T.BHFTAG, "station": "Lüttnitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Machendorf = { kind: BLOCK_T.BHFTAG, "station": "Machendorf", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Machern = { kind: BLOCK_T.BHFTAG, "station": "Machern", "lines": ["LD"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mahlis = { kind: BLOCK_T.BHFTAG, "station": "Mahlis", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Malter = { kind: BLOCK_T.BHFTAG, "station": "Malter", "lines": ["HK"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Maltitz = { kind: BLOCK_T.BHFTAG, "station": "Maltitz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Marienberg = { kind: BLOCK_T.BHFTAG, "station": "Marienberg", "lines": ["RF"], "upperCase": "", "dd2": 650, "dd3": 430, "c2": 320, "c3": 210, "z2": 600, "z3": 400 };
    var Markersdorf = { kind: BLOCK_T.BHFTAG, "station": "Markersdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Markneukirchen = { kind: BLOCK_T.BHFTAG, "station": "Markneukirchen", "lines": ["CA"], "upperCase": "", "dd2": 1150, "dd3": 770, "c2": 670, "c3": 450, "z2": 0, "z3": 0, "via": "Thalheim", "comment": "achtungviadiverse", "dd2b": 1280, "dd3b": 860, "c2b": 810, "c3b": 540, "z2b": 510, "z3b": 340, "viab": "Plauen i.V." };
    var Meerane = { kind: BLOCK_T.BHFTAG, "station": "Meerane", "lines": ["SG"], "upperCase": "", "dd2": 740, "dd3": 500, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "goessnitz ist doch totaler quatsch fuer DD  achtungviadiverse", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 115, "z3b": 80, "viab": "Schönbörnchen", "dd2c": 0, "dd3c": 0, "c2c": 260, "c3c": 180, "z2c": 180, "z3c": 120, "viac": "Gössnitz" };
    var Mehltheuer = { kind: BLOCK_T.BHFTAG, "station": "Mehltheuer", "lines": ["LH", "WM"], "upperCase": "", "dd2": 1130, "dd3": 760, "c2": 650, "c3": 440, "z2": 360, "z3": 240 };
    var Meinersdorf = { kind: BLOCK_T.BHFTAG, "station": "Meinersdorf", "lines": ["CA"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 150, "c3": 100, "z2": 350, "z3": 240 };
    var Meiss_Triebischthal = { kind: BLOCK_T.BHFTAG, "station": "Meiss.-Triebischthal", "lines": ["BC"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 500, "c3": 300, "z2": 780, "z3": 520, "comment": "meissen allgemein todo   viadiverse trieb hbf abstand 0" };
    var Meissen_Cölln = { kind: BLOCK_T.BHFTAG, "station": "Meissen-Cölln", "lines": ["BC"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 500, "c3": 300, "z2": 780, "z3": 520, "comment": "viadiverse hbf abstand 0" };
    var Metzdorf = { kind: BLOCK_T.BHFTAG, "station": "Metzdorf", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 130, "c3": 90, "z2": 0, "z3": 0 };
    var Meuselwitz = { kind: BLOCK_T.BHFTAG, "station": "Meuselwitz", "lines": ["ZA", "GM", "MR"], "upperCase": "ISA", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2b": 370, "z3b": 250, "viab": "Werdau" };
    var Miltitz_Roitzschen = { kind: BLOCK_T.BHFTAG, "station": "Miltitz-Roitzschen", "lines": ["BC"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 440, "c3": 300, "z2": 0, "z3": 0 };
    var Mitt_Wittgsdrf = { kind: BLOCK_T.BHFTAG, "station": "Mitt.-Wittgsdrf.", "lines": ["KC"], "upperCase": "", "dd2": 530, "dd3": 360, "c2": 45, "c3": 30, "z2": 340, "z3": 230 };
    var Mitte_Langenwolmsdf = { kind: BLOCK_T.BHFTAG, "station": "Mitte Langenwolmsdf.", "lines": ["ND"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelbach = { kind: BLOCK_T.BHFTAG, "station": "Mittelbach", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 110, "c3": 75, "z2": 0, "z3": 0 };
    var Mittelcrottendorf = { kind: BLOCK_T.BHFTAG, "station": "Mittelcrottendorf", "lines": ["WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelcunew = { kind: BLOCK_T.BHFTAG, "station": "Mittelcunew.", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelherold = { kind: BLOCK_T.BHFTAG, "station": "Mittelherold", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mitteloderwitz = { kind: BLOCK_T.BHFTAG, "station": "Mitteloderwitz", "lines": ["ZL"], "upperCase": "", "dd2": 580, "dd3": 390, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittweida = { kind: BLOCK_T.BHFTAG, "station": "Mittweida", "lines": ["RC"], "upperCase": "", "dd2": 590, "dd3": 400, "c2": 110, "c3": 75, "z2": 410, "z3": 270, "via": "Chemnitz", "dd2b": 540, "dd3b": 360, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Döbeln Bhf." };
    var Mittweida_Markrsb = { kind: BLOCK_T.BHFTAG, "station": "Mittweida-Markrsb.", "lines": ["BSg"], "upperCase": "", "dd2": 800, "dd3": 530, "c2": 410, "c3": 280, "z2": 290, "z3": 190, "comment": "viadiv weg unklar" };
    var Mockr_Jessn = { kind: BLOCK_T.BHFTAG, "station": "Mockr.-Jessn.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mohlsdorf = { kind: BLOCK_T.BHFTAG, "station": "Mohlsdorf", "lines": ["BG"], "upperCase": "IRÄL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 0, "comment": "z3 nicht lesbar" };
    var Mohorn = { kind: BLOCK_T.BHFTAG, "station": "Mohorn", "lines": ["PNo"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Moldau = { kind: BLOCK_T.BHFTAG, "station": "Moldau", "lines": ["NM"], "upperCase": "IBÖ", "dd2": 480, "dd3": 320, "c2": 480, "c3": 320, "z2": 770, "z3": 520 };
    var Moritzburg_Eisenb = { kind: BLOCK_T.BHFTAG, "station": "Moritzburg-Eisenb.", "lines": ["RRg"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Moritzdorf = { kind: BLOCK_T.BHFTAG, "station": "Moritzdorf", "lines": ["KS"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mosel = { kind: BLOCK_T.BHFTAG, "station": "Mosel", "lines": ["DW", "MO"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 250, "c3": 170, "z2": 50, "z3": 35 };
    var Mulda = { kind: BLOCK_T.BHFTAG, "station": "Mulda", "lines": ["NM", "MS"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 330, "c3": 220, "z2": 620, "z3": 420 };
    var Muldenberg = { kind: BLOCK_T.BHFTAG, "station": "Muldenberg", "lines": ["CA", "FM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 550, "c3": 370, "z2": 280, "z3": 190 };
    var Muldenhütten = { kind: BLOCK_T.BHFTAG, "station": "Muldenhütten", "lines": ["DW"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Mutzschen = { kind: BLOCK_T.BHFTAG, "station": "Mutzschen", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mylau_Bahnhof = { kind: BLOCK_T.BHFTAG, "station": "Mylau, Bahnhof", "lines": ["RM"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 460, "c3": 310, "z2": 170, "z3": 120 };
    var Mylau_Haltestelle = { kind: BLOCK_T.BHFTAG, "station": "Mylau, Haltestelle", "lines": ["RM"], "upperCase": "", "dd2": 945, "dd3": 635, "c2": 465, "c3": 315, "z2": 175, "z3": 125, "comment": "todo spezial:vmtl pauschal 5pfg ab myl bhf" };
    var Müdisdorf = { kind: BLOCK_T.BHFTAG, "station": "Müdisdorf", "lines": ["BGh"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mügeln_b_O = { kind: BLOCK_T.BHFTAG, "station": "Mügeln b.O.", "lines": ["OD", "MN"], "upperCase": "", "dd2": 470, "dd3": 320, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Mügeln_b_P = { kind: BLOCK_T.BHFTAG, "station": "Mügeln b.P.", "lines": ["BD", "MG"], "upperCase": "", "dd2": 70, "dd3": 50, "c2": 560, "c3": 370, "z2": 840, "z3": 560 };
    var Mühltroff = { kind: BLOCK_T.BHFTAG, "station": "Mühltroff", "lines": ["SSz"], "upperCase": "", "dd2": 1190, "dd3": 790, "c2": 710, "c3": 470, "z2": 420, "z3": 280 };
    var Mülsen_St_Jacob = { kind: BLOCK_T.BHFTAG, "station": "Mülsen St. Jacob", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": "abstand 0 diese drei" };
    var Mülsen_St_Mich = { kind: BLOCK_T.BHFTAG, "station": "Mülsen St. Mich", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": "abstand 0 diese drei" };
    var Mülsen_St_Niclas = { kind: BLOCK_T.BHFTAG, "station": "Mülsen St. Niclas", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": " spezial fuer diese 3 ?" };
    var Narsdorf = { kind: BLOCK_T.BHFTAG, "station": "Narsdorf", "lines": ["KC", "RP"], "upperCase": "", "dd2": 670, "dd3": 450, "c2": 190, "c3": 130, "z2": 290, "z3": 190 };
    var Nassau = { kind: BLOCK_T.BHFTAG, "station": "Nassau", "lines": ["NM"], "upperCase": "", "dd2": 380, "dd3": 250, "c2": 380, "c3": 250, "z2": 0, "z3": 0 };
    var Naundorf_b_Dr = { kind: BLOCK_T.BHFTAG, "station": "Naundorf b. Dr.", "lines": ["DE", "DEC"], "upperCase": "", "dd2": 80, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naundorf_b_O = { kind: BLOCK_T.BHFTAG, "station": "Naundorf b.O", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naundorf_b_Schm = { kind: BLOCK_T.BHFTAG, "station": "Naundorf b.Schm.", "lines": ["HK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naunhof = { kind: BLOCK_T.BHFTAG, "station": "Naunhof", "lines": ["BC"], "upperCase": "", "dd2": 680, "dd3": 460, "c2": 530, "c3": 350, "z2": 0, "z3": 0 };
    var Ndr_Olbersdorf = { kind: BLOCK_T.BHFTAG, "station": "Ndr.-Olbersdorf", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nebitzschen = { kind: BLOCK_T.BHFTAG, "station": "Nebitzschen", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nennigmühle = { kind: BLOCK_T.BHFTAG, "station": "Nennigmühle", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerch_Gornewitz = { kind: BLOCK_T.BHFTAG, "station": "Nerch.-Gornewitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerchau_Haltept = { kind: BLOCK_T.BHFTAG, "station": "Nerchau Haltept.", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerchau_Trebsen = { kind: BLOCK_T.BHFTAG, "station": "Nerchau-Trebsen", "lines": ["GW", "MN"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 0, "c3": 0, "z2": 540, "z3": 360 };
    var Neschwitz = { kind: BLOCK_T.BHFTAG, "station": "Neschwitz", "lines": ["BK"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Netzschkau = { kind: BLOCK_T.BHFTAG, "station": "Netzschkau", "lines": ["LH"], "upperCase": "", "dd2": 960, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Neucunnersdorf = { kind: BLOCK_T.BHFTAG, "station": "Neucunnersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 1030, "c3": 680, "z2": 0, "z3": 0 };
    var Neudorf_i_E = { kind: BLOCK_T.BHFTAG, "station": "Neudorf i.E.", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 420, "c3": 280, "z2": 0, "z3": 0 };
    var Neugersdorf = { kind: BLOCK_T.BHFTAG, "station": "Neugersdorf", "lines": ["OW"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 990, "c3": 660, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Neuhausen_i_S = { kind: BLOCK_T.BHFTAG, "station": "Neuhausen i.S.", "lines": ["PN"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 380, "c3": 250, "z2": 660, "z3": 440 };
    var Neuheide = { kind: BLOCK_T.BHFTAG, "station": "Neuheide", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neukirchen_i_E = { kind: BLOCK_T.BHFTAG, "station": "Neukirchen i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 70, "c3": 50, "z2": 330, "z3": 220 };
    var Neumark = { kind: BLOCK_T.BHFTAG, "station": "Neumark", "lines": ["LH", "BG", "DW"], "upperCase": "", "dd2": 860, "dd3": 580, "c2": 380, "c3": 260, "z2": 90, "z3": 60, "comment": "BG = Brunn Greiz lt stat verz, lt. www auch NG, preuss: dw bis neumark?" };
    var Neumühle = { kind: BLOCK_T.BHFTAG, "station": "Neumühle", "lines": ["PWz"], "upperCase": "IRÄL", "dd3": 0, "c2": 510, "c3": 340, "z2": 210, "z3": 140 };
    var Neundorf_b_P = { kind: BLOCK_T.BHFTAG, "station": "Neundorf b. P.", "lines": ["PB"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neundorf_i_V = { kind: BLOCK_T.BHFTAG, "station": "Neundorf i.V.", "lines": ["PE"], "upperCase": "", "dd2": 1080, "dd3": 720, "c2": 600, "c3": 400, "z2": 310, "z3": 210 };
    var Neusalza_Sprmb = { kind: BLOCK_T.BHFTAG, "station": "Neusalza-Sprmb.", "lines": ["OW"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 930, "c3": 620, "z2": 0, "z3": 0 };
    var Neustadt_i_S = { kind: BLOCK_T.BHFTAG, "station": "Neustadt i.S.", "lines": ["BS", "ND"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Schandau", "dd2b": 280, "dd3b": 190, "c2b": 760, "c3b": 510, "z2b": 0, "z3b": 0, "viab": "Pirna Bf.", "dd2c": 0, "dd3c": 0, "c2c": 780, "c3c": 520, "z2c": 0, "z3c": 0, "viac": "Arnsdorf" };
    var Neusörnewitz = { kind: BLOCK_T.BHFTAG, "station": "Neusörnewitz", "lines": ["BC"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neuwelt = { kind: BLOCK_T.BHFTAG, "station": "Neuwelt", "lines": ["SZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 230, "z3": 160 };
    var Nickritz = { kind: BLOCK_T.BHFTAG, "station": "Nickritz", "lines": ["RN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nicolai_Vorst = { kind: BLOCK_T.BHFTAG, "station": "Nicolai-Vorst", "lines": ["DW"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 20, "c3": 15, "z2": 280, "z3": 190 };
    var Nied_Dittmannsd = { kind: BLOCK_T.BHFTAG, "station": "Nied.-Dittmannsd", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nieder_Mülsen = { kind: BLOCK_T.BHFTAG, "station": "Nieder-Mülsen", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 75, "z3": 50 };
    var Niederau = { kind: BLOCK_T.BHFTAG, "station": "Niederau", "lines": ["LD"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederdorf = { kind: BLOCK_T.BHFTAG, "station": "Niederdorf", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 280, "z3": 190 };
    var Niederglobenstein = { kind: BLOCK_T.BHFTAG, "station": "Niederglobenstein", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedergrund = { kind: BLOCK_T.BHFTAG, "station": "Niedergrund", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederharthau = { kind: BLOCK_T.BHFTAG, "station": "Niederharthau", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 45, "c3": 30, "z2": 0, "z3": 0 };
    var Niederhermsdorf = { kind: BLOCK_T.BHFTAG, "station": "Niederhermsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 60, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederneukirch = { kind: BLOCK_T.BHFTAG, "station": "Niederneukirch", "lines": ["BS", "NnB"], "upperCase": "", "dd2": 310, "dd3": 210, "c2": 790, "c3": 530, "z2": 0, "z3": 0 };
    var Niederreinsberg = { kind: BLOCK_T.BHFTAG, "station": "Niederreinsberg", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederrennersd = { kind: BLOCK_T.BHFTAG, "station": "Niederrennersd.", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederschlag = { kind: BLOCK_T.BHFTAG, "station": "Niederschlag", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederschlema = { kind: BLOCK_T.BHFTAG, "station": "Niederschlema", "lines": ["SZ", "SN"], "upperCase": "", "dd2": 810, "dd3": 540, "c2": 340, "c3": 230, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 930, "dd3b": 620, "c2b": 450, "c3b": 300, "z2b": 0, "z3b": 0, "viab": "Zwickau" };
    var Niederschlottwitz = { kind: BLOCK_T.BHFTAG, "station": "Niederschlottwitz", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "teil nicht lesbar" };
    var Niederschmiedeberg = { kind: BLOCK_T.BHFTAG, "station": "Niederschmiedeberg", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedersedlitz = { kind: BLOCK_T.BHFTAG, "station": "Niedersedlitz", "lines": ["BD"], "upperCase": "", "dd2": 50, "dd3": 35, "c2": 540, "c3": 360, "z2": 830, "z3": 550 };
    var Niederseiffenbach = { kind: BLOCK_T.BHFTAG, "station": "Niederseiffenbach", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederstrahwlde = { kind: BLOCK_T.BHFTAG, "station": "Niederstrahwlde", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederstriegis = { kind: BLOCK_T.BHFTAG, "station": "Niederstriegis", "lines": ["BC"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 290, "c3": 200, "z2": 0, "z3": 0 };
    var Niederwartha = { kind: BLOCK_T.BHFTAG, "station": "Niederwartha", "lines": ["DE"], "upperCase": "", "dd2": 70, "dd3": 30, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederwiesa = { kind: BLOCK_T.BHFTAG, "station": "Niederwiesa", "lines": ["DW", "RW"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 55, "c3": 35, "z2": 350, "z3": 230 };
    var Niederwürschnitz = { kind: BLOCK_T.BHFTAG, "station": "Niederwürschnitz", "lines": ["StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 190, "c3": 130, "z2": 0, "z3": 0 };
    var Niedrbobritzsch = { kind: BLOCK_T.BHFTAG, "station": "Niedrbobritzsch", "lines": ["DW"], "upperCase": "", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedrpretzschend = { kind: BLOCK_T.BHFTAG, "station": "Niedrpretzschend.", "lines": ["KF"], "upperCase": "NIEDERPRETZSCHENDORF", "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nikrisch = { kind: BLOCK_T.BHFTAG, "station": "Nikrisch", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nimbschen = { kind: BLOCK_T.BHFTAG, "station": "Nimbschen", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nossen = { kind: BLOCK_T.BHFTAG, "station": "Nossen", "lines": ["BC", "RN", "NM", "PNo"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 360, "c3": 240, "z2d": 650, "z3d": 400, "via": "Meissen-Cölln", "comment": "cc via meissen, via Doebeln dd selbe strecke meissen", "dd2b": 0, "dd3b": 0, "c2b": 330, "c3b": 220, "z2b": 0, "z3b": 0, "viab": "Hainichen", "dd2c": 0, "dd3c": 0, "c2c": 390, "c3c": 260, "z2c": 0, "z3c": 0, "viac": "Freiberg" };
    var Nossen_Haltep = { kind: BLOCK_T.BHFTAG, "station": "Nossen Haltep.", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nöbdenitz = { kind: BLOCK_T.BHFTAG, "station": "Nöbdenitz", "lines": ["GGa"], "upperCase": "ISA", "dd2": 880, "dd3": 590, "c2": 400, "c3": 270, "z2": 0, "z3": 0 };
    var Ober_Altchemnitz = { kind: BLOCK_T.BHFTAG, "station": "Ober-Altchemnitz", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 35, "c3": 25, "z2": 0, "z3": 0 };
    var Ober_Dittmannsd = { kind: BLOCK_T.BHFTAG, "station": "Ober-Dittmannsd.", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ober_Schönbach = { kind: BLOCK_T.BHFTAG, "station": "Ober-Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ober_Tannenberg = { kind: BLOCK_T.BHFTAG, "station": "Ober-Tannenberg", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberbobritzsch = { kind: BLOCK_T.BHFTAG, "station": "Oberbobritzsch", "lines": ["KF"], "upperCase": "", "dd2": 230, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercarsdorf = { kind: BLOCK_T.BHFTAG, "station": "Obercarsdorf", "lines": ["HK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "siehe ulberndorf" };
    var Obercolmnitz = { kind: BLOCK_T.BHFTAG, "station": "Obercolmnitz", "lines": ["KF"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercrinitz = { kind: BLOCK_T.BHFTAG, "station": "Obercrinitz", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 140, "z3": 100 };
    var Obercrottendorf = { kind: BLOCK_T.BHFTAG, "station": "Obercrottendorf", "lines": ["WC"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2b": 390, "z3b": 260, "via": "Annaberg" };
    var Obercunewalde = { kind: BLOCK_T.BHFTAG, "station": "Obercunewalde", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercunnersdorf = { kind: BLOCK_T.BHFTAG, "station": "Obercunnersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 560, "dd3": 370, "c2": 1040, "c3": 690, "z2": 0, "z3": 0 };
    var Oberdorf_Beutha = { kind: BLOCK_T.BHFTAG, "station": "Oberdorf-Beutha", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 180, "c3": 120, "z2": 0, "z3": 0, "via": "Neukirchen i.E.", "comment": "neukirchen korrekt? anderer weg unklar" };
    var Oberdorf_Oberoderwitz = { kind: BLOCK_T.BHFTAG, "station": "Oberdorf-Oberoderwitz", "lines": ["OW"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberehrenberg = { kind: BLOCK_T.BHFTAG, "station": "Oberehrenberg", "lines": ["KH"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberglobenstein = { kind: BLOCK_T.BHFTAG, "station": "Oberglobenstein", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergruna_Bieberstein = { kind: BLOCK_T.BHFTAG, "station": "Obergruna-Bieberstein", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergrund = { kind: BLOCK_T.BHFTAG, "station": "Obergrund", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 370, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergrüna = { kind: BLOCK_T.BHFTAG, "station": "Obergrüna", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 105, "c3": 70, "z2": 230, "z3": 150 };
    var Oberhartmannsdf = { kind: BLOCK_T.BHFTAG, "station": "Oberhartmannsdf.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 90 };
    var Oberhelmsdorf = { kind: BLOCK_T.BHFTAG, "station": "Oberhelmsdorf", "lines": ["ND"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberherold = { kind: BLOCK_T.BHFTAG, "station": "Oberherold", "lines": ["WE", "HT"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Oberholz = { kind: BLOCK_T.BHFTAG, "station": "Oberholz", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 390, "c3": 260, "z2": 0, "z3": 0 };
    var Oberlichtenau = { kind: BLOCK_T.BHFTAG, "station": "Oberlichtenau", "lines": ["RC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 55, "c3": 40, "z2": 350, "z3": 240 };
    var Obermolbitz = { kind: BLOCK_T.BHFTAG, "station": "Obermolbitz", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberneukirch = { kind: BLOCK_T.BHFTAG, "station": "Oberneukirch", "lines": ["BS"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 810, "c3": 540, "z2": 1100, "z3": 740, "via": "Putzkau" };
    var Oberoderwitz = { kind: BLOCK_T.BHFTAG, "station": "Oberoderwitz", "lines": ["ZL", "OW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 1040, "c3": 700, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Oberreichenbach = { kind: BLOCK_T.BHFTAG, "station": "Oberreichenbach", "lines": ["RM"], "upperCase": "IV", "dd2": 930, "dd3": 620, "c2": 450, "c3": 300, "z2": 160, "z3": 110 };
    var Oberreinsberg = { kind: BLOCK_T.BHFTAG, "station": "Oberreinsberg", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberrennersdorf = { kind: BLOCK_T.BHFTAG, "station": "Oberrennersdorf", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberrittersgrün = { kind: BLOCK_T.BHFTAG, "station": "Oberrittersgrün", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2": 320, "z3": 220 };
    var Oberrothenbach = { kind: BLOCK_T.BHFTAG, "station": "Oberrothenbach", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 35, "z3": 25 };
    var Oberschlema = { kind: BLOCK_T.BHFTAG, "station": "Oberschlema", "lines": ["SN"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 470, "c3": 310, "z2": 170, "z3": 120, "via": "Zwickau", "dd2b": 0, "dd3b": 0, "c2b": 350, "c3b": 240, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Oberschlottwitz = { kind: BLOCK_T.BHFTAG, "station": "Oberschlottwitz", "lines": ["MG"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberschmiedeberg = { kind: BLOCK_T.BHFTAG, "station": "Oberschmiedeberg", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberschönheide = { kind: BLOCK_T.BHFTAG, "station": "Oberschönheide", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 210, "z3": 140 };
    var Oberstützengrün = { kind: BLOCK_T.BHFTAG, "station": "Oberstützengrün", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 180, "z3": 120 };
    var Oberullersdorf = { kind: BLOCK_T.BHFTAG, "station": "Oberullersdorf", "lines": ["RZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obervogelgesang = { kind: BLOCK_T.BHFTAG, "station": "Obervogelgesang", "lines": ["BD"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberwiesenthal = { kind: BLOCK_T.BHFTAG, "station": "Oberwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 830, "dd3": 550, "c2": 500, "c3": 330, "z2": 0, "z3": 0 };
    var Obstmühle = { kind: BLOCK_T.BHFTAG, "station": "Obstmühle", "lines": ["WR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oederan = { kind: BLOCK_T.BHFTAG, "station": "Oederan", "lines": ["DW"], "upperCase": "", "dd2": 350, "dd3": 240, "c2": 140, "c3": 100, "z2": 440, "z3": 290 };
    var Oelschütz = { kind: BLOCK_T.BHFTAG, "station": "Oelschütz", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oelsnitz_i_E = { kind: BLOCK_T.BHFTAG, "station": "Oelsnitz i.E.", "lines": ["StE"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 220, "c3": 150, "z2": 210, "z3": 140, "via": "St. Egidien" };
    var Oelsnitz_i_V = { kind: BLOCK_T.BHFTAG, "station": "Oelsnitz i.V.", "lines": ["PE", "HOe"], "upperCase": "", "dd2": 1180, "dd3": 790, "c2": 710, "c3": 470, "z2": 410, "z3": 280, "via": "Plauen i.V.", "dd2b": 1140, "dd3b": 760, "c2b": 660, "c3b": 440, "z2b": 370, "z3b": 250, "viab": "Voigtsgrün" };
    var Oetzsch = { kind: BLOCK_T.BHFTAG, "station": "Oetzsch", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Olbernhau = { kind: BLOCK_T.BHFTAG, "station": "Olbernhau", "lines": ["PN"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 300, "c3": 200, "z2": 600, "z3": 400 };
    var Oppach = { kind: BLOCK_T.BHFTAG, "station": "Oppach", "lines": ["TD"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ortmannsdorf = { kind: BLOCK_T.BHFTAG, "station": "Ortmannsdorf", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2": 140, "z3": 90 };
    var Oschatz_Bf = { kind: BLOCK_T.BHFTAG, "station": "Oschatz Bf.", "lines": ["LD", "OS", "OD"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 480, "c3": 320, "z2": 0, "z3": 0, "via": "Riesa", "comment": "sehr komplex", "dd2b": 0, "dd3b": 0, "c2b": 440, "c3b": 290, "z2b": 0, "z3b": 0, "viab": "Mügeln", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 770, "z3c": 520, "viac": "Riesa", "dd2d": 0, "dd3d": 0, "c2d": 0, "c3d": 0, "z2d": 880, "z3d": 600, "viad": "Leipzig Bayr.Bf." };
    var Oschatz_Haltest = { kind: BLOCK_T.BHFTAG, "station": "Oschatz, Haltest.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ostrau = { kind: BLOCK_T.BHFTAG, "station": "Ostrau", "lines": ["RC"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 310, "c3": 210, "z2": 600, "z3": 400, "comment": "via frei erfunden" };
    var Ostritz = { kind: BLOCK_T.BHFTAG, "station": "Ostritz", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ottendorf_b_Med = { kind: BLOCK_T.BHFTAG, "station": "Ottendorf b.Med.", "lines": ["KS"], "upperCase": "", "dd2": 120, "dd3": 80, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ottendorf_b_Mitt = { kind: BLOCK_T.BHFTAG, "station": "Ottendorf b.Mitt.", "lines": ["RC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 75, "c3": 50, "z2": 0, "z3": 0 };
    var Ottendorf_b_Neu = { kind: BLOCK_T.BHFTAG, "station": "Ottendorf b.Neu.", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Otterwisch = { kind: BLOCK_T.BHFTAG, "station": "Otterwisch", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 340, "c3": 230, "z2": 0, "z3": 0 };
    var Oybin = { kind: BLOCK_T.BHFTAG, "station": "Oybin", "lines": ["ZO"], "upperCase": "", "dd2": 730, "dd3": 485, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "  anmerkung oder jonsdorf" };
    var Paunsdorf_Stünz = { kind: BLOCK_T.BHFTAG, "station": "Paunsdorf-Stünz", "lines": ["LG", "LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 460, "c3": 310, "z2": 0, "z3": 0 };
    var Pausa = { kind: BLOCK_T.BHFTAG, "station": "Pausa", "lines": ["WM"], "upperCase": "", "dd2": 1170, "dd3": 780, "c2": 690, "c3": 460, "z2": 410, "z3": 270, "via": "Mehltheuer" };
    var Penig = { kind: BLOCK_T.BHFTAG, "station": "Penig", "lines": ["GW", "RP"], "upperCase": "", "dd2": 740, "dd3": 490, "c2": 260, "c3": 180, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 790, "dd3b": 530, "c2b": 310, "c3b": 210, "z2b": 210, "z3b": 140, "viab": "Waldenburg" };
    var Pfaffenhain = { kind: BLOCK_T.BHFTAG, "station": "Pfaffenhain", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 105, "c3": 70, "z2": 0, "z3": 0 };
    var Pirk = { kind: BLOCK_T.BHFTAG, "station": "Pirk", "lines": ["PE"], "upperCase": "", "dd2": 1140, "dd3": 760, "c2": 660, "c3": 440, "z2": 380, "z3": 250, "via": "Plauen i.V." };
    var Pirna_Bf = { kind: BLOCK_T.BHFTAG, "station": "Pirna Bf.", "lines": ["BD", "KP", "PB"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 590, "c3": 380, "z2": 880, "z3": 590 };
    var Pirna_Haltep = { kind: BLOCK_T.BHFTAG, "station": "Pirna Haltep.", "lines": ["PB", "PGc"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Plauen_b_Dr = { kind: BLOCK_T.BHFTAG, "station": "Plauen b. Dr.", "lines": ["DW"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 470, "c3": 310, "z2": 750, "z3": 500 };
    var Plauen_i_V = { kind: BLOCK_T.BHFTAG, "station": "Plauen i.V.", "lines": ["LH", "PE"], "upperCase": "", "dd2": 1070, "dd3": 710, "c2": 590, "c3": 390, "z2": 300, "z3": 200, "comment": "dd2 geaendert, passt in fkb nicht zu dd3 und auch sinst nicht" };
    var Plauen_i_V_u_B = { kind: BLOCK_T.BHFTAG, "station": "Plauen i.V. u.B.", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pockau_Lengef = { kind: BLOCK_T.BHFTAG, "station": "Pockau-Lengef.", "lines": ["RF", "PN"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 240, "c3": 160, "z2": 530, "z3": 360 };
    var Pommritz = { kind: BLOCK_T.BHFTAG, "station": "Pommritz", "lines": ["GD"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 920, "c3": 610, "z2": 0, "z3": 0 };
    var Ponitz = { kind: BLOCK_T.BHFTAG, "station": "Ponitz", "lines": ["LH"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 160, "z3": 110 };
    var Porschdorf = { kind: BLOCK_T.BHFTAG, "station": "Porschdorf", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Potschappel = { kind: BLOCK_T.BHFTAG, "station": "Potschappel", "lines": ["DW", "PNo"], "upperCase": "", "dd2": 45, "dd3": 30, "c2": 440, "c3": 300, "z2": 740, "z3": 490 };
    var Prausitz = { kind: BLOCK_T.BHFTAG, "station": "Prausitz", "lines": ["RN"], "upperCase": "", "dd2": 380, "dd3": 250, "c2": 450, "c3": 300, "z2": 0, "z3": 0, "via": "Riesa" };
    var Pretzschendorf = { kind: BLOCK_T.BHFTAG, "station": "Pretzschendorf", "lines": ["KF"], "upperCase": "", "dd2": 200, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Priestewitz = { kind: BLOCK_T.BHFTAG, "station": "Priestewitz", "lines": ["LD", "GP"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 510, "c3": 340, "z2": 0, "z3": 0 };
    var Prösen_Wainsd = { kind: BLOCK_T.BHFTAG, "station": "Prösen-Wainsd.", "lines": ["DE"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pulsnitz = { kind: BLOCK_T.BHFTAG, "station": "Pulsnitz", "lines": ["KP"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 720, "c3": 480, "z2": 1010, "z3": 670 };
    var Putzkau = { kind: BLOCK_T.BHFTAG, "station": "Putzkau", "lines": ["NnB"], "upperCase": "", "dd2": 290, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pöhla = { kind: BLOCK_T.BHFTAG, "station": "Pöhla", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 410, "c3": 270, "z2": 280, "z3": 190 };
    var Pöllwitz = { kind: BLOCK_T.BHFTAG, "station": "Pöllwitz", "lines": ["WM"], "upperCase": "IRÄL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pötzscha_Wehlen = { kind: BLOCK_T.BHFTAG, "station": "Pötzscha (Wehlen)", "lines": ["BD"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Quoos = { kind: BLOCK_T.BHFTAG, "station": "Quoos", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rabenau = { kind: BLOCK_T.BHFTAG, "station": "Rabenau", "lines": ["HK"], "upperCase": "", "dd2": 95, "dd3": 65, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Rabenstein = { kind: BLOCK_T.BHFTAG, "station": "Rabenstein", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0, "via": "Wüstenbrand", "dd2b": 0, "dd3b": 0, "c2b": 150, "c3b": 100, "z2b": 0, "z3b": 0, "viab": "Wittgensdorf" };
    var Radeberg = { kind: BLOCK_T.BHFTAG, "station": "Radeberg", "lines": ["GD"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 610, "c3": 410, "z2": 900, "z3": 600 };
    var Radebeul = { kind: BLOCK_T.BHFTAG, "station": "Radebeul", "lines": ["LD", "RRg"], "upperCase": "", "dd2": 60, "dd3": 40, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Radeburg = { kind: BLOCK_T.BHFTAG, "station": "Radeburg", "lines": ["RRg"], "upperCase": "", "dd2": 170, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Radibor = { kind: BLOCK_T.BHFTAG, "station": "Radibor", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Raschau = { kind: BLOCK_T.BHFTAG, "station": "Raschau", "lines": ["BSg"], "upperCase": "", "dd2": 800, "dd3": 540, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Annaberg", "dd2b": 880, "dd3b": 590, "c2b": 410, "c3b": 270, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 270, "z3c": 180, "viac": "Aue" };
    var Rathen = { kind: BLOCK_T.BHFTAG, "station": "Rathen", "lines": ["BD"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rattwitz = { kind: BLOCK_T.BHFTAG, "station": "Rattwitz", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rauenstein = { kind: BLOCK_T.BHFTAG, "station": "Rauenstein", "lines": ["RF"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Raun = { kind: BLOCK_T.BHFTAG, "station": "Raun", "lines": ["PE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rauschenthal = { kind: BLOCK_T.BHFTAG, "station": "Rauschenthal", "lines": ["WK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rautenkranz = { kind: BLOCK_T.BHFTAG, "station": "Rautenkranz", "lines": ["CA"], "upperCase": "", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2": 360, "z3": 240, "via": "Aue" };
    var Rechenberg = { kind: BLOCK_T.BHFTAG, "station": "Rechenberg", "lines": ["NM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reckwitz = { kind: BLOCK_T.BHFTAG, "station": "Reckwitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rehmsdorf = { kind: BLOCK_T.BHFTAG, "station": "Rehmsdorf", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reibersdorf = { kind: BLOCK_T.BHFTAG, "station": "Reibersdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenau = { kind: BLOCK_T.BHFTAG, "station": "Reichenau", "lines": ["ZM"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenb_Karolinenstr = { kind: BLOCK_T.BHFTAG, "station": "Reichenb., Karolinenstr.", "lines": ["RM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenbach_i_L = { kind: BLOCK_T.BHFTAG, "station": "Reichenbach i.L.", "lines": ["GD"], "upperCase": "ILIPR", "dd2": 560, "dd3": 370, "c2": 1040, "c3": 690, "z2": 1330, "z3": 890 };
    var Reichenbach_i_V = { kind: BLOCK_T.BHFTAG, "station": "Reichenbach i.V.", "lines": ["LH", "RM"], "upperCase": "OB BHF", "dd2": 920, "dd3": 610, "c2": 440, "c3": 290, "z2": 150, "z3": 100, "comment": "NM via frei erfunden um hauptstrecke zu erzwingen, dd2 war falsch abgetippt" };
    var Reichenbach_i_V_u_B = { kind: BLOCK_T.BHFTAG, "station": "Reichenbach i.V., u.B.", "lines": ["RM"], "upperCase": "", "dd2": 935, "dd3": 625, "c2": 455, "c3": 305, "z2": 165, "z3": 115, "comment": "todo sonderregelungplusfuenfzehn" };
    var Reichenberg = { kind: BLOCK_T.BHFTAG, "station": "Reichenberg", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 800, "dd3": 540, "c2": 1280, "c3": 860, "z2": 0, "z3": 0, "via": "Putzkau", "dd2b": 870, "dd3b": 590, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Herrnhut" };
    var Reichenfels = { kind: BLOCK_T.BHFTAG, "station": "Reichenfels", "lines": ["WM"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reifland = { kind: BLOCK_T.BHFTAG, "station": "Reifland", "lines": ["RF"], "upperCase": "", "dd2": 530, "dd3": 360, "c2": 210, "c3": 140, "z2": 500, "z3": 330 };
    var Reitzenhain = { kind: BLOCK_T.BHFTAG, "station": "Reitzenhain", "lines": ["RF"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2": 710, "z3": 480 };
    var Remse = { kind: BLOCK_T.BHFTAG, "station": "Remse", "lines": ["GW"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 130, "z3": 90 };
    var Rentzschmühle = { kind: BLOCK_T.BHFTAG, "station": "Rentzschmühle", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reuth = { kind: BLOCK_T.BHFTAG, "station": "Reuth", "lines": ["LH"], "upperCase": "", "dd2": 1220, "dd3": 810, "c2": 740, "c3": 490, "z2": 450, "z3": 300 };
    var Riesa = { kind: BLOCK_T.BHFTAG, "station": "Riesa", "lines": ["LD", "RC", "RN", "RRV", "ZE"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 410, "c3": 270, "z2": 690, "z3": 460, "comment": "ZE beginnt wohl Zeithain Bogendreick an LD" };
    var Rochlitz = { kind: BLOCK_T.BHFTAG, "station": "Rochlitz", "lines": ["GW", "RP", "WR"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 240, "c3": 160, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 340, "z3b": 230, "viab": "Lunzenau", "comment": "weg B auch ueber narsdorf", "dd2c": 680, "dd3c": 460, "c2c": 0, "c3c": 0, "z2c": 0, "z3c": 0, "viac": "Grossbothen", "dd2d": 590, "dd3d": 400, "c2d": 0, "c3d": 0, "z2d": 0, "z3d": 0, "viad": "Hartha b. Waldh." };
    var Rochsburg = { kind: BLOCK_T.BHFTAG, "station": "Rochsburg", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 250, "z3": 170 };
    var Rodewisch = { kind: BLOCK_T.BHFTAG, "station": "Rodewisch", "lines": ["ZF"], "upperCase": "", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Rodewitz = { kind: BLOCK_T.BHFTAG, "station": "Rodewitz", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rohnau = { kind: BLOCK_T.BHFTAG, "station": "Rohnau", "lines": ["ZN"], "upperCase": "", "dd2": 690, "dd3": 460, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ronneburg = { kind: BLOCK_T.BHFTAG, "station": "Ronneburg", "lines": ["GGa", "MR"], "upperCase": "ISA", "dd2": 920, "dd3": 620, "c2": 450, "c3": 300, "z2": 330, "z3": 220 };
    var Rosenthal = { kind: BLOCK_T.BHFTAG, "station": "Rosenthal", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rositz = { kind: BLOCK_T.BHFTAG, "station": "Rositz", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2b": 340, "z3b": 230, "viab": "Werdau" };
    var Rosswein = { kind: BLOCK_T.BHFTAG, "station": "Rosswein", "lines": ["BC", "RW"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 320, "c3": 210, "z2": 600, "z3": 400, "via": "Nossen", "comment": "TODO via geraten!!!", "dd2b": 0, "dd3b": 0, "c2b": 280, "c3b": 190, "z2b": 0, "z3b": 0, "viab": "Hainichen" };
    var Rothenkirchen_i_V = { kind: BLOCK_T.BHFTAG, "station": "Rothenkirchen i.V.", "lines": ["WCd"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 460, "c3": 310, "z2": 170, "z3": 120, "via": "Zwickau", "dd2b": 0, "dd3b": 0, "c2b": 540, "c3b": 360, "z2b": 0, "z3b": 0, "viab": "Wilzschhaus" };
    var Rottwerndorf = { kind: BLOCK_T.BHFTAG, "station": "Rottwerndorf", "lines": ["PB"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ruppersdorf = { kind: BLOCK_T.BHFTAG, "station": "Ruppersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Russdorf = { kind: BLOCK_T.BHFTAG, "station": "Russdorf", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Röderau = { kind: BLOCK_T.BHFTAG, "station": "Röderau", "lines": ["RRV"], "upperCase": "", "comment": "linie laut buch von  preuss", "dd2": 310, "dd3": 210, "c2": 420, "c3": 280, "z2": 720, "z3": 480 };
    var Rödlitz = { kind: BLOCK_T.BHFTAG, "station": "Rödlitz", "lines": ["StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 200, "c3": 140, "z2": 190, "z3": 130 };
    var Röhrsdorf_b_Chemn = { kind: BLOCK_T.BHFTAG, "station": "Röhrsdorf b.Chemn.", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 150, "c3b": 100, "z2b": 0, "z3b": 0, "viab": "Wüstenbrand" };
    var Rüssen = { kind: BLOCK_T.BHFTAG, "station": "Rüssen", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Saupersdorf_Bhf = { kind: BLOCK_T.BHFTAG, "station": "Saupersdorf Bhf.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklarwas i und ii ist" };
    var Saupersdorf_Hltst = { kind: BLOCK_T.BHFTAG, "station": "Saupersdorf Hltst.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklarwas i und ii ist" };
    var Sayda = { kind: BLOCK_T.BHFTAG, "station": "Sayda", "lines": ["MS"], "upperCase": "", "dd2": 420, "dd3": 280, "c2": 420, "c3": 280, "z2": 0, "z3": 0 };
    var Schandau = { kind: BLOCK_T.BHFTAG, "station": "Schandau", "lines": ["BD", "BS"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 720, "c3": 480, "z2": 1010, "z3": 680 };
    var Scharfenstein = { kind: BLOCK_T.BHFTAG, "station": "Scharfenstein", "lines": ["AF"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Schedewitz = { kind: BLOCK_T.BHFTAG, "station": "Schedewitz", "lines": ["SZ"], "upperCase": "", "dd2": 790, "dd3": 530, "c2": 320, "c3": 210, "z2": 20, "z3": 15 };
    var Scheibe = { kind: BLOCK_T.BHFTAG, "station": "Scheibe", "lines": ["SE", "ZL"], "upperCase": "", "dd2": 600, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Scheibenberg = { kind: BLOCK_T.BHFTAG, "station": "Scheibenberg", "lines": ["BSg", "ZS"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2c": 330, "z3c": 220, "via": "Annaberg", "dd2b": 0, "dd3b": 0, "c2b": 380, "c3b": 260, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Schirgiswalde = { kind: BLOCK_T.BHFTAG, "station": "Schirgiswalde", "lines": ["OW"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 860, "c3": 580, "z2": 0, "z3": 0 };
    var Schlauroth = { kind: BLOCK_T.BHFTAG, "station": "Schlauroth", "lines": ["GD"], "upperCase": "IPR", "dd2": 620, "dd3": 410, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schleiz = { kind: BLOCK_T.BHFTAG, "station": "Schleiz", "lines": ["SSz"], "upperCase": "IRJL", "dd2": 1260, "dd3": 840, "c2": 780, "c3": 520, "z2": 490, "z3": 330, "comment": "schlecht lesbar" };
    var Schlettau = { kind: BLOCK_T.BHFTAG, "station": "Schlettau", "lines": ["BSg"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 400, "c3": 270, "z2c": 350, "z3c": 240, "via": "Annaberg", "dd2b": 0, "dd3b": 0, "c2b": 410, "c3b": 270, "z2b": 0, "z3b": 0, "viab": "Grünhain" };
    var Schlössel = { kind: BLOCK_T.BHFTAG, "station": "Schlössel", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmalzgrube = { kind: BLOCK_T.BHFTAG, "station": "Schmalzgrube", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmiedeberg = { kind: BLOCK_T.BHFTAG, "station": "Schmiedeberg", "lines": ["HK"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 550, "c3": 370, "z2": 0, "z3": 0 };
    var Schmorkau_b_K = { kind: BLOCK_T.BHFTAG, "station": "Schmorkau b.K.", "lines": ["KS"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmorkau_b_O = { kind: BLOCK_T.BHFTAG, "station": "Schmorkau b.O.", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmölln = { kind: BLOCK_T.BHFTAG, "station": "Schmölln", "lines": ["NnB"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmölln_S_A = { kind: BLOCK_T.BHFTAG, "station": "Schmölln S.-A.", "lines": ["GGa"], "upperCase": "", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 250, "z3": 170 };
    var Schneeberg_Neust = { kind: BLOCK_T.BHFTAG, "station": "Schneeberg-Neust.", "lines": ["SN"], "upperCase": "", "dd2": 850, "dd3": 570, "c2": 370, "c3": 250, "z2c": 190, "z3c": 130, "via": "Thalheim", "comment": "ausserdem ueber Wilkau", "dd2b": 960, "dd3b": 640, "c2b": 480, "c3b": 320, "z2b": 0, "z3b": 0, "viab": "Zwickau" };
    var Schrebitz = { kind: BLOCK_T.BHFTAG, "station": "Schrebitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schwarzenberg_Bf = { kind: BLOCK_T.BHFTAG, "station": "Schwarzenberg Bf.", "lines": ["SZ", "JS", "BSg"], "upperCase": "", "dd2": 830, "dd3": 560, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Annaberg", "dd2b": 860, "dd3b": 570, "c2b": 380, "c3b": 250, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 1020, "dd3c": 680, "c2c": 540, "c3c": 360, "z2c": 250, "z3c": 170, "viac": "Zwickau" };
    var Schwarzenberg_Hltp = { kind: BLOCK_T.BHFTAG, "station": "Schwarzenberg Hltp.", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schweikershain = { kind: BLOCK_T.BHFTAG, "station": "Schweikershain", "lines": ["RC"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 150, "c3": 100, "z2": 440, "z3": 300 };
    var Schweinitzthal = { kind: BLOCK_T.BHFTAG, "station": "Schweinitzthal", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schwepnitz = { kind: BLOCK_T.BHFTAG, "station": "Schwepnitz", "lines": ["KS"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schweta = { kind: BLOCK_T.BHFTAG, "station": "Schweta", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schöna = { kind: BLOCK_T.BHFTAG, "station": "Schöna", "lines": ["BD"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönbach = { kind: BLOCK_T.BHFTAG, "station": "Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönberg = { kind: BLOCK_T.BHFTAG, "station": "Schönberg", "lines": ["LH", "SH", "SSz"], "upperCase": "", "dd2": 1170, "dd3": 780, "c2": 690, "c3": 460, "z2": 400, "z3": 270 };
    var Schönbörnchen = { kind: BLOCK_T.BHFTAG, "station": "Schönbörnchen", "lines": ["DW", "SG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 75, "z3": 50 };
    var Schöneck = { kind: BLOCK_T.BHFTAG, "station": "Schöneck", "lines": ["CA"], "upperCase": "", "dd2": 1070, "dd3": 710, "c2": 590, "c3": 390, "z2b": 320, "z3b": 220, "via": "Thalheim", "comment": "weg oder Voigtsgruen ?!" };
    var Schönefeld = { kind: BLOCK_T.BHFTAG, "station": "Schönefeld", "lines": ["LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönfeld_Bf = { kind: BLOCK_T.BHFTAG, "station": "Schönfeld Bf.", "lines": ["AF", "SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schoenfeld unklar" };
    var Schönfeld_Haltepkt = { kind: BLOCK_T.BHFTAG, "station": "Schönfeld Haltepkt.", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schoenfeld unklar" };
    var Schönh_Hammer = { kind: BLOCK_T.BHFTAG, "station": "Schönh.Hammer", "lines": ["CA"], "upperCase": "", "dd2": 920, "dd3": 610, "c2": 440, "c3": 290, "z2": 310, "z3": 210 };
    var Schönheide = { kind: BLOCK_T.BHFTAG, "station": "Schönheide", "lines": ["WCd"], "upperCase": "", "dd2": 980, "dd3": 660, "c2": 870, "c3": 510, "z2": 210, "z3": 140, "comment": "auch oberschoeneheide" };
    var Schüllermühle = { kind: BLOCK_T.BHFTAG, "station": "Schüllermühle", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Sebnitz = { kind: BLOCK_T.BHFTAG, "station": "Sebnitz", "lines": ["BS"], "upperCase": "", "dd2": 340, "dd3": 230, "c2": 810, "c3": 540, "z2": 0, "z3": 0, "via": "Schandau" };
    var Seelingstädt = { kind: BLOCK_T.BHFTAG, "station": "Seelingstädt", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "welches ?" };
    var Seelingstädt_b_Br = { kind: BLOCK_T.BHFTAG, "station": "Seelingstädt b.Br.", "lines": ["BSt"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seerhausen = { kind: BLOCK_T.BHFTAG, "station": "Seerhausen", "lines": ["RC"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Sehma = { kind: BLOCK_T.BHFTAG, "station": "Sehma", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seidau = { kind: BLOCK_T.BHFTAG, "station": "Seidau", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seifersdorf = { kind: BLOCK_T.BHFTAG, "station": "Seifersdorf", "lines": ["HK"], "upperCase": "", "dd2": 115, "dd3": 80, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seifhennersdorf = { kind: BLOCK_T.BHFTAG, "station": "Seifhennersdorf", "lines": ["SE"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 1050, "c3": 700, "z2": 0, "z3": 0 };
    var Seitschen = { kind: BLOCK_T.BHFTAG, "station": "Seitschen", "lines": ["GD"], "upperCase": "", "dd2": 320, "dd3": 210, "c2": 800, "c3": 530, "z2": 0, "z3": 0 };
    var Siebenhöfen = { kind: BLOCK_T.BHFTAG, "station": "Siebenhöfen", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Siebenlehn = { kind: BLOCK_T.BHFTAG, "station": "Siebenlehn", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Siegelhof = { kind: BLOCK_T.BHFTAG, "station": "Siegelhof", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 190 };
    var Siegmar = { kind: BLOCK_T.BHFTAG, "station": "Siegmar", "lines": ["DW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 55, "c3": 35, "z2": 250, "z3": 170 };
    var Silberstrasse = { kind: BLOCK_T.BHFTAG, "station": "Silberstrasse", "lines": ["SZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 60, "z3": 40 };
    var Singwitz = { kind: BLOCK_T.BHFTAG, "station": "Singwitz", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Sohland = { kind: BLOCK_T.BHFTAG, "station": "Sohland", "lines": ["OW"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Sommerfeld = { kind: BLOCK_T.BHFTAG, "station": "Sommerfeld", "lines": ["LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Spechtritz = { kind: BLOCK_T.BHFTAG, "station": "Spechtritz", "lines": ["HK"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var St_Egidien = { kind: BLOCK_T.BHFTAG, "station": "St. Egidien", "lines": ["DW", "StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Stangendorf = { kind: BLOCK_T.BHFTAG, "station": "Stangendorf", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60 };
    var Starrbach = { kind: BLOCK_T.BHFTAG, "station": "Starrbach", "lines": ["RN"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Nossen" };
    var Stauchitz = { kind: BLOCK_T.BHFTAG, "station": "Stauchitz", "lines": ["RC"], "upperCase": "", "dd2": 380, "dd3": 260, "c2": 350, "c3": 230, "z2": 630, "z3": 420 };
    var Stein_Hartenstein = { kind: BLOCK_T.BHFTAG, "station": "Stein-Hartenstein", "lines": ["SZ"], "upperCase": "", "dd2": 890, "dd3": 600, "c2": 420, "c3": 280, "z2": 120, "z3": 80, "via": "Zwickau", "dd2b": 850, "dd3b": 570, "c2b": 380, "c3b": 250, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Steina = { kind: BLOCK_T.BHFTAG, "station": "Steina", "lines": ["RC"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 210, "c3": 140, "z2": 500, "z3": 340 };
    var Steinbach_b_J = { kind: BLOCK_T.BHFTAG, "station": "Steinbach b.J.", "lines": ["WJ"], "upperCase": "", "dd2": 680, "dd3": 450, "c2": 350, "c3": 230, "z2": 0, "z3": 0 };
    var Stenn = { kind: BLOCK_T.BHFTAG, "station": "Stenn", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 50, "z3": 35 };
    var Stetzsch = { kind: BLOCK_T.BHFTAG, "station": "Stetzsch", "lines": ["DE"], "upperCase": "", "dd2": 50, "dd3": 30, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Steudten = { kind: BLOCK_T.BHFTAG, "station": "Steudten", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 320, "z3": 210 };
    var Stollberg = { kind: BLOCK_T.BHFTAG, "station": "Stollberg", "lines": ["ZC", "StE"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 150, "c3": 100, "z2b": 260, "z3b": 180, "via": "Neukirchen i.E." };
    var Stolpen = { kind: BLOCK_T.BHFTAG, "station": "Stolpen", "lines": ["ND"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Streckewalde = { kind: BLOCK_T.BHFTAG, "station": "Streckewalde", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Strehla = { kind: BLOCK_T.BHFTAG, "station": "Strehla", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Syrau = { kind: BLOCK_T.BHFTAG, "station": "Syrau", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Tanna = { kind: BLOCK_T.BHFTAG, "station": "Tanna", "lines": ["SH"], "upperCase": "IRJL", "dd3": 0, "c2": 0, "c3": 0, "z2": 450, "z3": 300 };
    var Tanndorf = { kind: BLOCK_T.BHFTAG, "station": "Tanndorf", "lines": ["BC"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Tannenberg = { kind: BLOCK_T.BHFTAG, "station": "Tannenberg", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Taubenheim = { kind: BLOCK_T.BHFTAG, "station": "Taubenheim", "lines": ["OW", "TD"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 910, "c3": 610, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Tautenhain = { kind: BLOCK_T.BHFTAG, "station": "Tautenhain", "lines": ["LG"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 260, "c3": 170, "z2": 0, "z3": 0, "via": "Narsdorf" };
    var Techwitz = { kind: BLOCK_T.BHFTAG, "station": "Techwitz", "lines": ["ZA"], "upperCase": "IPR", "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Teichwolframsdorf = { kind: BLOCK_T.BHFTAG, "station": "Teichwolframsdorf", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 110, "z3": 75 };
    var Tetschen = { kind: BLOCK_T.BHFTAG, "station": "Tetschen", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 380, "dd3": 250, "c2": 860, "c3": 570, "z2": 0, "z3": 0 };
    var Teufelsmühle = { kind: BLOCK_T.BHFTAG, "station": "Teufelsmühle", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thalheim = { kind: BLOCK_T.BHFTAG, "station": "Thalheim", "lines": ["CA"], "upperCase": "", "dd2": 650, "dd3": 440, "c2": 170, "c3": 120, "z2": 330, "z3": 220 };
    var Tharandt = { kind: BLOCK_T.BHFTAG, "station": "Tharandt", "lines": ["DW"], "upperCase": "", "dd2": 85, "dd3": 60, "c2": 410, "c3": 270, "z2": 690, "z3": 460 };
    var Thonberg_Prietitz = { kind: BLOCK_T.BHFTAG, "station": "Thonberg-Prietitz", "lines": ["KE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thossfell = { kind: BLOCK_T.BHFTAG, "station": "Thossfell", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thum = { kind: BLOCK_T.BHFTAG, "station": "Thum", "lines": ["HT"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Thurm = { kind: BLOCK_T.BHFTAG, "station": "Thurm", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60 };
    var Trebanz_Treben = { kind: BLOCK_T.BHFTAG, "station": "Trebanz-Treben", "lines": ["LH"], "upperCase": "ISA", "dd3": 0, "c2": 440, "c3": 300, "z2b": 330, "z3b": 220, "viab": "Werdau" };
    var Treuen = { kind: BLOCK_T.BHFTAG, "station": "Treuen", "lines": ["HOe"], "upperCase": "", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 260, "z3": 170 };
    var Triebes = { kind: BLOCK_T.BHFTAG, "station": "Triebes", "lines": ["WM"], "upperCase": "IRJL", "dd3": 0, "c2": 0, "c3": 0, "z2": 350, "z3": 230 };
    var Tronitz = { kind: BLOCK_T.BHFTAG, "station": "Tronitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Tuttendorf = { kind: BLOCK_T.BHFTAG, "station": "Tuttendorf", "lines": ["FH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Töllschütz = { kind: BLOCK_T.BHFTAG, "station": "Töllschütz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ulberndorf = { kind: BLOCK_T.BHFTAG, "station": "Ulberndorf", "lines": ["HK"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "oder obercarsdorf" };
    var Ulbersdorf = { kind: BLOCK_T.BHFTAG, "station": "Ulbersdorf", "lines": ["BS"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 780, "c3": 520, "z2": 1070, "z3": 720, "via": "Schandau" };
    var Unter_Neudorf = { kind: BLOCK_T.BHFTAG, "station": "Unter-Neudorf", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unter_Schönbach = { kind: BLOCK_T.BHFTAG, "station": "Unter-Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterehrenberg = { kind: BLOCK_T.BHFTAG, "station": "Unterehrenberg", "lines": ["KH"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterfriedebach = { kind: BLOCK_T.BHFTAG, "station": "Unterfriedebach", "lines": ["MS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterherold = { kind: BLOCK_T.BHFTAG, "station": "Unterherold", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterkoskau = { kind: BLOCK_T.BHFTAG, "station": "Unterkoskau", "lines": ["SH"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Untermarxgrün = { kind: BLOCK_T.BHFTAG, "station": "Untermarxgrün", "lines": ["HOe"], "upperCase": "", "dd2": 1100, "dd3": 740, "c2": 620, "c3": 420, "z2": 330, "z3": 220 };
    var Unterrittersgrün = { kind: BLOCK_T.BHFTAG, "station": "Unterrittersgrün", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Unterwiesenthal = { kind: BLOCK_T.BHFTAG, "station": "Unterwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterzwota = { kind: BLOCK_T.BHFTAG, "station": "Unterzwota", "lines": ["ZK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ursprung = { kind: BLOCK_T.BHFTAG, "station": "Ursprung", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Venusberg = { kind: BLOCK_T.BHFTAG, "station": "Venusberg", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Vierenstrasse = { kind: BLOCK_T.BHFTAG, "station": "Vierenstrasse", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Voigtsdorf_i_S = { kind: BLOCK_T.BHFTAG, "station": "Voigtsdorf i. S.", "lines": ["MS"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Voigtsgrün = { kind: BLOCK_T.BHFTAG, "station": "Voigtsgrün", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 380, "c3": 260, "z2": 85, "z3": 55 };
    var Voitersreuth = { kind: BLOCK_T.BHFTAG, "station": "Voitersreuth", "lines": ["PE"], "upperCase": "IBÖ", "dd2": 1420, "dd3": 950, "c2": 950, "c3": 630, "z2": 650, "z3": 440, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 610, "z3b": 410, "viab": "Oelsnitz i.V.", "comment": " i.V. annahme NM" };
    var Wagelwitz = { kind: BLOCK_T.BHFTAG, "station": "Wagelwitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wald_Oppelsdorf = { kind: BLOCK_T.BHFTAG, "station": "Wald-Oppelsdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Waldenburg = { kind: BLOCK_T.BHFTAG, "station": "Waldenburg", "lines": ["GW"], "upperCase": "IS", "dd2": 720, "dd3": 480, "c2": 240, "c3": 160, "z2": 150, "z3": 100, "via": "Glauchau" };
    var Waldheim = { kind: BLOCK_T.BHFTAG, "station": "Waldheim", "lines": ["RC", "WK", "WR"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 190, "c3": 130, "z2": 480, "z3": 320 };
    var Waldkirchen = { kind: BLOCK_T.BHFTAG, "station": "Waldkirchen", "lines": ["AF"], "upperCase": "BZ", "dd2": 490, "dd3": 330, "c2": 160, "c3": 110, "z2": 450, "z3": 300 };
    var Waltersdorf_Haltept = { kind: BLOCK_T.BHFTAG, "station": "Waltersdorf Haltept.", "lines": ["WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar welche" };
    var Waltersdorf_Haltest = { kind: BLOCK_T.BHFTAG, "station": "Waltersdorf Haltest.", "lines": ["BSg", "WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Warnsdorf = { kind: BLOCK_T.BHFTAG, "station": "Warnsdorf", "lines": ["SE"], "upperCase": "IBÖ", "dd2": 600, "dd3": 400, "c2": 1080, "c3": 720, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Wechselburg = { kind: BLOCK_T.BHFTAG, "station": "Wechselburg", "lines": ["GW"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 0, "c3": 0, "z2": 300, "z3": 200, "comment": "unklar via diverse" };
    var Weesenstein = { kind: BLOCK_T.BHFTAG, "station": "Weesenstein", "lines": ["MG"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "oder koettewitz" };
    var Weida_Altst = { kind: BLOCK_T.BHFTAG, "station": "Weida Altst.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar welches" };
    var Weida_Bf = { kind: BLOCK_T.BHFTAG, "station": "Weida Bf.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weinböhla = { kind: BLOCK_T.BHFTAG, "station": "Weinböhla", "lines": ["DE", "DEK"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schlecht lesbar" };
    var Weintraube = { kind: BLOCK_T.BHFTAG, "station": "Weintraube", "lines": ["LD"], "upperCase": "", "dd2": 70, "dd3": 50, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weipert = { kind: BLOCK_T.BHFTAG, "station": "Weipert", "lines": ["WA"], "upperCase": "IBÖ", "dd2": 780, "dd3": 520, "c2": 450, "c3": 300, "z2": 750, "z3": 500, "via": "Flöha", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 490, "z3b": 330, "viab": "Aue" };
    var Weischlitz = { kind: BLOCK_T.BHFTAG, "station": "Weischlitz", "lines": ["PE", "PWz"], "upperCase": "", "dd2": 1130, "dd3": 750, "c2": 640, "c3": 430, "z2": 350, "z3": 240, "via": "Plauen i.V.", "comment": "schlecht lesbar" };
    var Weissbach_b_K = { kind: BLOCK_T.BHFTAG, "station": "Weissbach b.K.", "lines": ["KS"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissbach_b_Zsch = { kind: BLOCK_T.BHFTAG, "station": "Weissbach b.Zsch.", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissenberg_i_S = { kind: BLOCK_T.BHFTAG, "station": "Weissenberg i.S.", "lines": ["LWg"], "upperCase": "", "dd2": 590, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weisses_Ross = { kind: BLOCK_T.BHFTAG, "station": "Weisses Ross", "lines": ["RRg"], "upperCase": "", "dd2": 70, "dd3": 45, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissig_b_Gr = { kind: BLOCK_T.BHFTAG, "station": "Weissig b.Gr.", "lines": ["LD"], "upperCase": "", "dd2": 260, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weisskirch_b_Kr = { kind: BLOCK_T.BHFTAG, "station": "Weisskirch b.Kr.", "lines": ["RZ"], "upperCase": "WEISSKIRCHEN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weixdorf = { kind: BLOCK_T.BHFTAG, "station": "Weixdorf", "lines": ["KS"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wendischfähre = { kind: BLOCK_T.BHFTAG, "station": "Wendischfähre", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Werdau = { kind: BLOCK_T.BHFTAG, "station": "Werdau", "lines": ["LH", "DW", "WM"], "upperCase": "", "dd2": 830, "dd3": 500, "c2": 360, "c3": 240, "z2": 60, "z3": 40, "comment": "schlecht lesbar" };
    var Wermsdorf = { kind: BLOCK_T.BHFTAG, "station": "Wermsdorf", "lines": ["MN"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Westewitz_Hochw = { kind: BLOCK_T.BHFTAG, "station": "Westewitz-Hochw.", "lines": ["BC"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Wiesa = { kind: BLOCK_T.BHFTAG, "station": "Wiesa", "lines": ["KE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wiesenbad = { kind: BLOCK_T.BHFTAG, "station": "Wiesenbad", "lines": ["AF"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 290, "c3": 200, "z2": 580, "z3": 390 };
    var Wiesenburg = { kind: BLOCK_T.BHFTAG, "station": "Wiesenburg", "lines": ["SZ"], "upperCase": "", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 70, "z3": 50, "via": "Zwickau" };
    var Wilischthal = { kind: BLOCK_T.BHFTAG, "station": "Wilischthal", "lines": ["AF", "WE"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 200, "c3": 130, "z2": 490, "z3": 330 };
    var Wilkau_Bf = { kind: BLOCK_T.BHFTAG, "station": "Wilkau Bf.", "lines": ["SZ", "WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar" };
    var Wilkau_Haltept = { kind: BLOCK_T.BHFTAG, "station": "Wilkau Haltept.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wilsdruff = { kind: BLOCK_T.BHFTAG, "station": "Wilsdruff", "lines": ["PNo"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wilthen = { kind: BLOCK_T.BHFTAG, "station": "Wilthen", "lines": ["BS", "OW"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Wilzschhaus = {
        kind: BLOCK_T.BHFTAG, "station": "Wilzschhaus", "lines": ["CA", "WCd"], "upperCase": "", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 340, "z3": 230,
        "via": "Aue", "comment": "(fehlend via kirchberg) "
    };
    var Wilzschmühle = { kind: BLOCK_T.BHFTAG, "station": "Wilzschmühle", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wintersdorf = { kind: BLOCK_T.BHFTAG, "station": "Wintersdorf", "lines": ["GM"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wittgensdorf = { kind: BLOCK_T.BHFTAG, "station": "Wittgensdorf", "lines": ["KC", "LW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 65, "c3": 45, "z2": 360, "z3": 240, "via": "Chemnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 320, "z3b": 220, "viab": "Limbach" };
    var Wittigschenke = { kind: BLOCK_T.BHFTAG, "station": "Wittigschenke", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Witzschdorf = { kind: BLOCK_T.BHFTAG, "station": "Witzschdorf", "lines": ["AF"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 150, "c3": 100, "z2": 0, "z3": 0 };
    var Wolfsgrund = { kind: BLOCK_T.BHFTAG, "station": "Wolfsgrund", "lines": ["MS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wolfsgrün = { kind: BLOCK_T.BHFTAG, "station": "Wolfsgrün", "lines": ["CA"], "upperCase": "", "dd2": 870, "dd3": 580, "c2": 390, "c3": 260, "z2b": 270, "z3b": 180, "via": "Thalheim" };
    var Wolkenburg = { kind: BLOCK_T.BHFTAG, "station": "Wolkenburg", "lines": ["GW"], "upperCase": "", "dd2": 760, "dd3": 510, "c2": 280, "c3": 190, "z2": 180, "z3": 120, "comment": "via frei erfunden" };
    var Wolkenstein = { kind: BLOCK_T.BHFTAG, "station": "Wolkenstein", "lines": ["AF", "WJ"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 260, "c3": 170, "z2": 550, "z3": 370, "via": "Flöha" };
    var Wuitz_Mumsdorf = { kind: BLOCK_T.BHFTAG, "station": "Wuitz-Mumsdorf", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wulm = { kind: BLOCK_T.BHFTAG, "station": "Wulm", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 60, "z3": 40 };
    var Wurzen = { kind: BLOCK_T.BHFTAG, "station": "Wurzen", "lines": ["LD", "GW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 650, "c3": 430, "z2": 0, "z3": 0, "via": "Riesa", "dd2b": 0, "dd3b": 0, "c2b": 500, "c3b": 340, "z2b": 600, "z3b": 400, "viab": "Rochlitz", "dd2c": 0, "dd3c": 0, "c2c": 700, "c3c": 480, "z2c": 720, "z3c": 490, "viac": "Leipzig Bayr.Bf." };
    var Wülknitz = { kind: BLOCK_T.BHFTAG, "station": "Wülknitz", "lines": ["ZE"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wünschendorf = { kind: BLOCK_T.BHFTAG, "station": "Wünschendorf", "lines": ["PWz", "WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 230, "z3": 160 };
    var Wüstenbrand = { kind: BLOCK_T.BHFTAG, "station": "Wüstenbrand", "lines": ["DW", "HW", "LWd"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 90, "c3": 60, "z2": 210, "z3": 140 };
    var Wüstendittersdorf = { kind: BLOCK_T.BHFTAG, "station": "Wüstendittersdorf", "lines": ["SSz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zabeltitz = { kind: BLOCK_T.BHFTAG, "station": "Zabeltitz", "lines": ["DE"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zaschwitz = { kind: BLOCK_T.BHFTAG, "station": "Zaschwitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zauckerode = { kind: BLOCK_T.BHFTAG, "station": "Zauckerode", "lines": ["PNo"], "upperCase": "", "dd2": 55, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zausswitz = { kind: BLOCK_T.BHFTAG, "station": "Zausswitz", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zehista = { kind: BLOCK_T.BHFTAG, "station": "Zehista", "lines": ["PGc"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeisigschenke = { kind: BLOCK_T.BHFTAG, "station": "Zeisigschenke", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeithain = { kind: BLOCK_T.BHFTAG, "station": "Zeithain", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeitz = { kind: BLOCK_T.BHFTAG, "station": "Zeitz", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 560, "c3": 370, "z2b": 440, "z3b": 300, "via": "Altenburg", "viab": "Werdau" };
    var Zescha = { kind: BLOCK_T.BHFTAG, "station": "Zescha", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeulenroda = { kind: BLOCK_T.BHFTAG, "station": "Zeulenroda", "lines": ["WM"], "upperCase": "IRÄL", "dd2": 1240, "dd3": 830, "c2": 760, "c3": 510, "z2": 470, "z3": 320, "via": "Mehltheuer", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 360, "z3b": 240, "viab": "Seelingstädt" };
    var Ziegenhain = { kind: BLOCK_T.BHFTAG, "station": "Ziegenhain", "lines": ["RN"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Nossen" };
    var Zittau_Bf = { kind: BLOCK_T.BHFTAG, "station": "Zittau Bf.", "lines": ["ZL", "ZN", "ZO", "RZ"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 1110, "c3": 740, "z2": 1410, "z3": 940, "via": "Eibau", "dd2b": 700, "dd3b": 470, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Herrnhut" };
    var Zittau_Haltepkt = { kind: BLOCK_T.BHFTAG, "station": "Zittau Haltepkt.", "lines": ["ZM", "ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittau_Schiesshaus = { kind: BLOCK_T.BHFTAG, "station": "Zittau Schiesshaus", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittau_Vorstadt = { kind: BLOCK_T.BHFTAG, "station": "Zittau Vorstadt", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittel = { kind: BLOCK_T.BHFTAG, "station": "Zittel", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zoblitz = { kind: BLOCK_T.BHFTAG, "station": "Zoblitz", "lines": ["GD"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zschaitz = { kind: BLOCK_T.BHFTAG, "station": "Zschaitz", "lines": ["RC"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 290, "c3": 200, "z2": 0, "z3": 0 };
    var Zschernitzsch = { kind: BLOCK_T.BHFTAG, "station": "Zschernitzsch", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zschopau = { kind: BLOCK_T.BHFTAG, "station": "Zschopau", "lines": ["AF"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 180, "c3": 120, "z2": 470, "z3": 320 };
    var Zweinaundorf = { kind: BLOCK_T.BHFTAG, "station": "Zweinaundorf", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Zwenkau = { kind: BLOCK_T.BHFTAG, "station": "Zwenkau", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 500, "z3": 330 };
    var Zwickau = { kind: BLOCK_T.BHFTAG, "station": "Zwickau", "lines": ["DW", "SZ", "ZF"], "upperCase": "", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "comment": "schnellzug obere zeile fehlt S, preis passt" };
    var Zwickau_Hpkt = { kind: BLOCK_T.BHFTAG, "station": "Zwickau Hpkt.", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 15, "z3": 10 };
    var Zwota = { kind: BLOCK_T.BHFTAG, "station": "Zwota", "lines": ["CA", "ZK"], "upperCase": "", "dd2": 1100, "dd3": 730, "c2": 620, "c3": 410, "z2": 350, "z3": 240 };
    var Zwönitz = { kind: BLOCK_T.BHFTAG, "station": "Zwönitz", "lines": ["CA", "ZC", "ZS"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 270, "z3": 180 };
    var Zwötzen = { kind: BLOCK_T.BHFTAG, "station": "Zwötzen", "lines": ["PWz"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 270, "z3": 180 };
    var Zöblitz = { kind: BLOCK_T.BHFTAG, "station": "Zöblitz", "lines": ["RF"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 290, "c3": 190, "z2": 570, "z3": 380 };
}
var ETrennerArt;
(function (ETrennerArt) {
    ETrennerArt["Ort"] = "Ort";
    ETrennerArt["Zugnr"] = "Zugnr";
    ETrennerArt["Klassenzeile"] = "Klassenzeile";
    ETrennerArt["Ab"] = "Ab";
    ETrennerArt["An"] = "An";
    ETrennerArt["NixWeiter"] = "NixWeiter";
})(ETrennerArt || (ETrennerArt = {}));
var ORTPREFIX = "_Ort_";
var CH = { kind: BLOCK_T.TRENNER, ort: ORTPREFIX + "Chemnitz", art: ETrennerArt.Ort };
var LE = { kind: BLOCK_T.TRENNER, ort: ORTPREFIX + "Leipzig", art: ETrennerArt.Ort };
var TR = { kind: BLOCK_T.TRENNER, art: ETrennerArt.NixWeiter };
var ab = { kind: BLOCK_T.TRENNER, art: ETrennerArt.Ab };
var an = { kind: BLOCK_T.TRENNER, art: ETrennerArt.An };
var zn = { kind: BLOCK_T.TRENNER, art: ETrennerArt.Zugnr };
var kl = { kind: BLOCK_T.TRENNER, art: ETrennerArt.Klassenzeile };
System.register("SaxBaseTypes", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function assertNever(x) {
        throw new Error("Unexpected object: " + x);
    }
    exports_1("assertNever", assertNever);
    var FAHRPREIS_T;
    return {
        setters: [],
        execute: function () {
            (function (FAHRPREIS_T) {
                FAHRPREIS_T["KEINE_ANGABE"] = "FAHRPREIS_KEINE_ANGABE";
                FAHRPREIS_T["EINFACH"] = "FAHRPREIS_EINFACH";
                FAHRPREIS_T["EINFACH_UND_RUECK"] = "FAHRPREIS_EINFACH_UND_RUECK";
                FAHRPREIS_T["AB"] = "FAHRPREIS_AB";
            })(FAHRPREIS_T || (FAHRPREIS_T = {}));
            exports_1("FAHRPREIS_T", FAHRPREIS_T);
        }
    };
});
System.register("SaxParsedTypes", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var EBahnverwaltung, EQuelle, ZEILE_T, EAnAb, KBS_ABWEICHUNG_T, TKEINPFEIL, TPFEIL_START, TPFEIL_ZIEL, BlockRaw_ok, BlockRawUnbekannt;
    return {
        setters: [],
        execute: function () {
            (function (EBahnverwaltung) {
                EBahnverwaltung[EBahnverwaltung["NichtAngegeben"] = 0] = "NichtAngegeben";
                EBahnverwaltung[EBahnverwaltung["KSaechsStsEB"] = 1] = "KSaechsStsEB";
            })(EBahnverwaltung || (EBahnverwaltung = {}));
            exports_2("EBahnverwaltung", EBahnverwaltung);
            (function (EQuelle) {
                EQuelle[EQuelle["FritzscheSommer1900"] = 0] = "FritzscheSommer1900";
            })(EQuelle || (EQuelle = {}));
            exports_2("EQuelle", EQuelle);
            (function (ZEILE_T) {
                ZEILE_T["ZUGNR"] = "ZUGNR";
                ZEILE_T["KLASSEN"] = "KLASSEN";
                ZEILE_T["ANSCHLUSS_ZUBRINGER_AB"] = "ANSCHLUSS_ZUBRINGER_AB";
                ZEILE_T["ANSCHLUSS_ZUBRINGER_IN"] = "ANSCHLUSS_ZUBRINGER_IN";
                ZEILE_T["NORMAL"] = "NORMAL";
                ZEILE_T["ANSCHLUSS_WEITER_AB"] = "ANSCHLUSS_WEITER_AB";
                ZEILE_T["ANSCHLUSS_WEITER_IN"] = "ANSCHLUSS_WEITER_IN";
            })(ZEILE_T || (ZEILE_T = {}));
            exports_2("ZEILE_T", ZEILE_T);
            (function (EAnAb) {
                EAnAb[EAnAb["An"] = 0] = "An";
                EAnAb[EAnAb["FirstAb"] = 1] = "FirstAb";
                EAnAb[EAnAb["FollowAb"] = 2] = "FollowAb";
            })(EAnAb || (EAnAb = {}));
            exports_2("EAnAb", EAnAb);
            (function (KBS_ABWEICHUNG_T) {
                KBS_ABWEICHUNG_T["KEINE"] = "KBS_ABWEICHUNG_KEINE";
                KBS_ABWEICHUNG_T["AUS"] = "KBS_ABWEICHUNG_AUS";
                KBS_ABWEICHUNG_T["NACH"] = "KBS_ABWEICHUNG_NACH";
            })(KBS_ABWEICHUNG_T || (KBS_ABWEICHUNG_T = {}));
            exports_2("KBS_ABWEICHUNG_T", KBS_ABWEICHUNG_T);
            ;
            ;
            ;
            exports_2("TKEINPFEIL", TKEINPFEIL = "TKEINPFEIL");
            exports_2("TPFEIL_START", TPFEIL_START = "TPFEIL_START");
            exports_2("TPFEIL_ZIEL", TPFEIL_ZIEL = "TPFEIL_ZIEL");
            ;
            ;
            ;
            exports_2("BlockRaw_ok", BlockRaw_ok = "BLOCKRAWOK");
            exports_2("BlockRawUnbekannt", BlockRawUnbekannt = "BLOCKRAWUNBEKANNT");
        }
    };
});
System.register("SaxInputTypes", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function isIZeilenZusatzInfo(test) {
        return (("number" != typeof test) && (test != null) && (test.kind == undefined));
    }
    exports_3("isIZeilenZusatzInfo", isIZeilenZusatzInfo);
    var defaultzug, restspalte, WaltersdfHst, MittwMrkb, MARKERPREFIX, fatdot, cross, chooseown, BAHNVERWALTUNGPREFIX, Sachs, fern, passend, global, pfeilziel, pfeilstart, sonn_und_festtags, nur_werktags, headerlinks, headerrechts, nach9spalten, nach4spalten2spalten, nach10spalten4spalten, nach4spalten, nach6spalten, nach5spalten2spalten, Z1971, Z2045, Z1967, Z2065, Z1991, Z1998, m747, b355, a510, n822, c510, d1153, s550, s748, s800, s321, s810, a858, s113, s710, s845, s1058, c937, b233, a754, m149, x135, x150, a644, a659, a818, Z1960;
    return {
        setters: [],
        execute: function () {
            exports_3("defaultzug", defaultzug = "defaultzug");
            exports_3("restspalte", restspalte = "restspalte");
            exports_3("WaltersdfHst", WaltersdfHst = Waltersdorf_Haltest);
            exports_3("MittwMrkb", MittwMrkb = Mittweida_Markrsb);
            exports_3("MARKERPREFIX", MARKERPREFIX = "_markerAussehen_");
            exports_3("fatdot", fatdot = MARKERPREFIX + "fatdot");
            exports_3("cross", cross = MARKERPREFIX + "christlichesKreuz");
            exports_3("chooseown", chooseown = MARKERPREFIX + "selbstEinenFreienAussuchen");
            BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
            exports_3("Sachs", Sachs = BAHNVERWALTUNGPREFIX + "Sachs");
            exports_3("fern", fern = "_VERWEISTYP_fern");
            exports_3("passend", passend = "_VERWEISTYP_passend");
            exports_3("global", global = "_VERWEISTYP_GLOBAL");
            exports_3("pfeilziel", pfeilziel = "_VERWEISTYP_pfeilziel");
            exports_3("pfeilstart", pfeilstart = "_VERWEISTYP_pfeilstart");
            exports_3("sonn_und_festtags", sonn_und_festtags = "_TAGTYP_sonn_und_festtags");
            exports_3("nur_werktags", nur_werktags = "_TAGTYP_nur_werktags");
            exports_3("headerlinks", headerlinks = "_headerleft");
            exports_3("headerrechts", headerrechts = "_headerright");
            exports_3("nach9spalten", nach9spalten = "_nach9spalten");
            exports_3("nach4spalten2spalten", nach4spalten2spalten = "nach4spalten2spalten");
            exports_3("nach10spalten4spalten", nach10spalten4spalten = 'nach10spalten4spalten');
            exports_3("nach4spalten", nach4spalten = 'nach4spalten');
            exports_3("nach6spalten", nach6spalten = 'nach6spalten');
            exports_3("nach5spalten2spalten", nach5spalten2spalten = 'nach5spalten2spalten');
            exports_3("Z1971", Z1971 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1971", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("Z2045", Z2045 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2045", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("Z1967", Z1967 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "1967", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("Z2065", Z2065 = { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "2065", BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("Z1991", Z1991 = "_Z1991");
            exports_3("Z1998", Z1998 = "_Z1998");
            exports_3("m747", m747 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "m", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 747 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("b355", b355 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "b", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 355 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("a510", a510 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "a", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 510 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("n822", n822 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "n", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 822 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("c510", c510 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "c", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 510 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("d1153", d1153 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "d", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 1153 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s550", s550 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 550 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s748", s748 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 748 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s800", s800 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 800 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s321", s321 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 321 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s810", s810 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: true, Zeit: { kind: ZEIT_ROH, RohZeit: 810 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("a858", a858 = { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: "a", Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: 858 }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } });
            exports_3("s113", s113 = "_s113");
            exports_3("s710", s710 = "_s710");
            exports_3("s845", s845 = "_s845");
            exports_3("s1058", s1058 = "_s1058");
            exports_3("c937", c937 = "_c937");
            exports_3("b233", b233 = "_b233");
            exports_3("a754", a754 = "_a754");
            exports_3("m149", m149 = "_m149");
            exports_3("x135", x135 = "_x135");
            exports_3("x150", x150 = "_x150");
            exports_3("a644", a644 = "_a644");
            exports_3("a659", a659 = "_a659");
            exports_3("a818", a818 = "_a818");
            exports_3("Z1960", Z1960 = "_Z1960");
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
                            case ZEIT_ROH:
                                EintragRohZeit = pEintrag.Zeit.RohZeit;
                                break;
                            case ZEIT_24:
                                console.error("fill24 mit ZEIT24 (trotzdem aus src)");
                                EintragRohZeit = pEintrag.Zeit.src;
                        }
                        var tRohStunde12 = Math.floor(EintragRohZeit / 100);
                        var tRohMinute12 = (EintragRohZeit - (tRohStunde12 * 100));
                        if (tRohStunde12 == 12) {
                            tRohStunde12 = 0;
                        }
                        var tZeit24 = {
                            kind: ZEIT_24,
                            Minute24: tRohMinute12,
                            Stunde24: tRohStunde12 + offsetH,
                            WelcherTag: ghm,
                            Valid: ETimeValid.Berechnet24,
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
                                        case BLOCK_T.ZEITEINTRAG:
                                            var tFestgelegt = false;
                                            for (var i = sp - 1; i >= 0; i--) {
                                                var tVorgaenger = z.Zeiteintraege[i];
                                                switch (tVorgaenger.kind) {
                                                    case BLOCK_T.ZEITEINTRAG:
                                                        if ((tVorgaenger.Zeit.kind == ZEIT_ROH) || (tVorgaenger.Zeit.Valid == ETimeValid.Nein)) {
                                                            console.error(" LINKS SOLLTE VALIDE SEIN !!!!");
                                                        }
                                                        else if ((tVorgaenger.Zeit.Valid == ETimeValid.Berechnet24) || (tVorgaenger.Zeit.Valid == ETimeValid.Vorgabe24)) {
                                                            fill24(tEintrag, 0, GesternHeuteMorgen.Heute);
                                                            if (tEintrag.Zeit.kind == ZEIT_ROH) {
                                                                console.error("fill24 liefert ZEIT_ROH ???");
                                                            }
                                                            else {
                                                                if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                                }
                                                                else {
                                                                    fill24(tEintrag, 12, GesternHeuteMorgen.Heute);
                                                                }
                                                                if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                                }
                                                                else {
                                                                    fill24(tEintrag, 24, GesternHeuteMorgen.Heute);
                                                                }
                                                                i = -1;
                                                                tFestgelegt = true;
                                                            }
                                                        }
                                                        break;
                                                    case BLOCK_T.LEER:
                                                    case BLOCK_T.KEINHALT:
                                                    case BLOCK_T.DICKERSTRICH:
                                                    case BLOCK_T.KEINHALT:
                                                    case BLOCK_T.ERROR:
                                                    case BLOCK_T.ANKUNFT:
                                                    case BLOCK_T.BLOCK:
                                                    case BLOCK_T.KLASSEN_WERT:
                                                    case BLOCK_T.ZUG_NR_WERT:
                                                        break;
                                                    default:
                                                        return SaxBaseTypes_1.assertNever(tVorgaenger);
                                                }
                                            }
                                            if (tFestgelegt) {
                                            }
                                            else {
                                                fill24(tEintrag, 0, GesternHeuteMorgen.Heute);
                                            }
                                            break;
                                        case BLOCK_T.LEER:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.DICKERSTRICH:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.ERROR:
                                        case BLOCK_T.ANKUNFT:
                                        case BLOCK_T.BLOCK:
                                        case BLOCK_T.KLASSEN_WERT:
                                        case BLOCK_T.ZUG_NR_WERT:
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
                                    if (tAnschlusszeit.kind == BLOCK_T.ZEITEINTRAG) {
                                        for (var di = zidx + 1; di < s.Zeilen.length; di++) {
                                            var zzz_zeileDrunter = s.Zeilen[di];
                                            if (zzz_zeileDrunter.kind == SaxParsedTypes_1.ZEILE_T.NORMAL) {
                                                var eee_drunterEintrag = zzz_zeileDrunter.Zeiteintraege[sp];
                                                if (eee_drunterEintrag.kind == BLOCK_T.ZEITEINTRAG) {
                                                    if (eee_drunterEintrag.Zeit.kind == ZEIT_ROH) {
                                                        console.error("NORMALZEILE SOLLTE SEIT OBEN KORREKT GEFUELLT SEIN?!");
                                                    }
                                                    else {
                                                        var tAnschlusszeit_roh = 0;
                                                        if (tAnschlusszeit.Zeit.kind == ZEIT_ROH) {
                                                            tAnschlusszeit_roh = tAnschlusszeit.Zeit.RohZeit;
                                                            console.error("ANSCHLUSS EINTRAG KORREKT BERECHNET , war ROH ", tAnschlusszeit.Zeit.RohZeit);
                                                        }
                                                        else {
                                                            tAnschlusszeit_roh = tAnschlusszeit.Zeit.src;
                                                            console.error("ANSCHLUSS EINTRAG ZU FRUEH BERECHNET ?! ", tAnschlusszeit.Zeit.src);
                                                        }
                                                        if (tAnschlusszeit_roh > eee_drunterEintrag.Zeit.src) {
                                                            if (eee_drunterEintrag.Zeit.Stunde24 > 12) {
                                                                fill24(tAnschlusszeit, 0, GesternHeuteMorgen.Heute);
                                                            }
                                                            else {
                                                                fill24(tAnschlusszeit, 12, GesternHeuteMorgen.Gestern);
                                                                console.log("kori2x ", eee_drunterEintrag.Zeit.src);
                                                            }
                                                        }
                                                        else {
                                                            fill24(tAnschlusszeit, 0, GesternHeuteMorgen.Heute);
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
                                    if (e.kind == BLOCK_T.ZEITEINTRAG) {
                                        if (e.Zeit.kind == ZEIT_ROH) {
                                            console.error("HIER SOLLTE ALLES ZEIT24 sein !!!");
                                        }
                                        else {
                                            if (tFirst) {
                                                tLast = e.Zeit;
                                                tFirst = false;
                                            }
                                            else {
                                                if (((tLast.Stunde24 * 100 + tLast.Minute24) > (e.Zeit.Stunde24 * 100 + e.Zeit.Minute24)) && tLast.WelcherTag == GesternHeuteMorgen.Heute) {
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
                                    if (e.kind == BLOCK_T.ZEITEINTRAG) {
                                        if (e.Zeit.kind == ZEIT_24) {
                                            if (e.Zeit.Stunde24 >= 24 && e.Zeit.WelcherTag == GesternHeuteMorgen.Heute) {
                                                e.Zeit.Stunde24 -= 24;
                                                e.Zeit.WelcherTag = GesternHeuteMorgen.Morgen;
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
                Importer.parseZeitZeileZusatzInfo = function (rawEntry) {
                    var tZeitZeilenZusatzInfo = {
                        AnschlussNummern: [],
                        Via: null,
                        Ortsname: null,
                        Fahrpreise: { kind: SaxBaseTypes_1.FAHRPREIS_T.KEINE_ANGABE },
                        Valid: false,
                        Ref: null,
                        Lfd: -1,
                        Raw: JSON.stringify(rawEntry)
                    };
                    var tWillBeValid = true;
                    if (rawEntry.fk) {
                        if (rawEntry.fk.length == 2) {
                            var tFahrpreisInfo2 = {
                                kind: SaxBaseTypes_1.FAHRPREIS_T.EINFACH,
                                Einfach2: rawEntry.fk[0],
                                Einfach3: rawEntry.fk[1]
                            };
                            tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo2;
                        }
                        else if (rawEntry.fk.length == 4) {
                            var tFahrpreisInfo4 = {
                                kind: SaxBaseTypes_1.FAHRPREIS_T.EINFACH_UND_RUECK,
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
                            kind: SaxBaseTypes_1.FAHRPREIS_T.AB,
                            AbfahrtsOrt: rawEntry.fkab
                        };
                        tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisAb;
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
                        tZeitZeilenZusatzInfo.Via = [rawEntry.via];
                    }
                    if (rawEntry.lfd) {
                        tZeitZeilenZusatzInfo.Lfd = rawEntry.lfd;
                    }
                    tZeitZeilenZusatzInfo.Valid = tWillBeValid;
                    return tZeitZeilenZusatzInfo;
                };
                Importer.kindifyZZZ = function (inp) {
                    var tZeilenKK = [];
                    inp.zeilen.forEach(function (z) {
                        var kindedZeile = [];
                        z.forEach(function (e) {
                            var ek = 0;
                            if (SaxInput.isIZeilenZusatzInfo(e)) {
                                ek = __assign({ kind: BLOCK_T.ZEILENZUSATZINFO }, e);
                            }
                            else {
                                ek = e;
                            }
                            kindedZeile.push(ek);
                        });
                        tZeilenKK.push(kindedZeile);
                    });
                    var tResult = {
                        route1900: inp.route1900,
                        comment: inp.comment,
                        todo: inp.todo,
                        seite: inp.seite,
                        klassen: inp.klassen,
                        caption: inp.caption,
                        zeilen: tZeilenKK,
                        ZellenVerweise: inp.ZellenVerweise
                    };
                    console.log(tResult);
                    return tResult;
                };
                Importer.kindifynumbers = function (inp) {
                    console.log("Before numbers: ", JSON.stringify(inp));
                    var tZeilenNum = [];
                    inp.zeilen.forEach(function (inpzeile) {
                        var tOutZeile = [];
                        var inpzeile_0 = inpzeile[0];
                        if (("number" != typeof inpzeile_0)
                            && (inpzeile_0.kind == BLOCK_T.ZEILEN_TYP)
                            && (inpzeile_0.zeilentyp == EZeilentyp.ZUGNRZEILE)) {
                            inpzeile.forEach(function (entry) {
                                tOutZeile.push(("number" == typeof entry) ? { kind: BLOCK_T.ZUG_NR_WERT, zugnr: "" + entry, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } } : entry);
                            });
                        }
                        else {
                            inpzeile.forEach(function (entry, idxInZeile) {
                                if (idxInZeile === 0) {
                                    tOutZeile.push(("number" == typeof entry) ?
                                        { kind: BLOCK_T.KM_WERT, km: entry }
                                        : entry);
                                }
                                else {
                                    tOutZeile.push(("number" == typeof entry) ?
                                        { kind: BLOCK_T.ZEITEINTRAG, Referenzkey: null, Schnellzug: false, Zeit: { kind: ZEIT_ROH, RohZeit: entry }, BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } }
                                        : entry);
                                }
                            });
                        }
                        tZeilenNum.push(tOutZeile);
                    });
                    var tResult = {
                        route1900: inp.route1900,
                        comment: inp.comment,
                        todo: inp.todo,
                        seite: inp.seite,
                        klassen: inp.klassen,
                        caption: inp.caption,
                        zeilen: tZeilenNum,
                        ZellenVerweise: inp.ZellenVerweise
                    };
                    console.log(tZeilenNum);
                    return tResult;
                };
                Importer.erstelleZZZausHeaderArray = function (zeilenAnfang) {
                    var tNum = [];
                    var tBhf = null;
                    var tLfd = -1;
                    var tRef = null;
                    zeilenAnfang.forEach(function (ze) {
                        switch (ze.kind) {
                            case BLOCK_T.ANSCHLUSS_NUMMERN:
                                tNum = ze.fkbnummern;
                                break;
                            case BLOCK_T.BHFTAG:
                                tBhf = ze;
                                break;
                            case BLOCK_T.HEADERLFD:
                                tLfd = ze.nummer;
                                break;
                            case BLOCK_T.HEADERREF:
                                tRef = ze.ref;
                                break;
                        }
                    });
                    return {
                        AnschlussNummern: tNum,
                        Via: null,
                        Ortsname: tBhf,
                        Fahrpreise: { kind: SaxBaseTypes_1.FAHRPREIS_T.KEINE_ANGABE },
                        Ref: tRef,
                        Lfd: tLfd,
                        Valid: true,
                        Raw: ""
                    };
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
                    console.log("input for parsing:", JSON.stringify(input.zeilen));
                    if (input.zeilen != null) {
                        var tNextAbIsFirst = true;
                        for (var i = 0; i < input.zeilen.length; i++) {
                            var zeile = input.zeilen[i];
                            if ((zeile != null) && (zeile.length >= 2)) {
                                var zeile_0 = zeile[0];
                                var zeile_1 = zeile[1];
                                console.log("Zeile ", i);
                                var tResultZeileN = {
                                    kind: SaxParsedTypes_1.ZEILE_T.NORMAL,
                                    Km: (zeile_0.kind == BLOCK_T.KM_WERT) ? zeile_0.km : -1,
                                    BhfTag: (zeile_0.kind === BLOCK_T.BHFTAG) ? zeile_0 :
                                        ((zeile_0.kind == BLOCK_T.KM_WERT) && (zeile_1.kind === BLOCK_T.BHFTAG) ? zeile_1 : null),
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    Fahrkarteninfo: null,
                                    AnAb: SaxParsedTypes_1.EAnAb.FollowAb,
                                    Ref: null,
                                    Lfd: -1,
                                    Via: null
                                };
                                var tFindFirstIndex = function (arr, matches) {
                                    for (var i_1 = 0; i_1 < arr.length; i_1++) {
                                        if (matches(arr[i_1])) {
                                            return i_1;
                                        }
                                    }
                                    return -1;
                                };
                                var tTrennerIndex = tFindFirstIndex(zeile, function (x) { return x.kind === BLOCK_T.TRENNER; });
                                var tStartIdx = tTrennerIndex + 1;
                                var tTrenner = zeile[tTrennerIndex];
                                var tAnAb = SaxParsedTypes_1.EAnAb.FirstAb;
                                if (tTrenner.art === ETrennerArt.Ab) {
                                    if (tNextAbIsFirst) {
                                        tAnAb = SaxParsedTypes_1.EAnAb.FirstAb;
                                        tNextAbIsFirst = false;
                                    }
                                    else {
                                        tAnAb = SaxParsedTypes_1.EAnAb.FollowAb;
                                        tNextAbIsFirst = false;
                                    }
                                }
                                if (tTrenner.art === ETrennerArt.An) {
                                    tAnAb = SaxParsedTypes_1.EAnAb.An;
                                    tNextAbIsFirst = true;
                                }
                                tResultZeileN.AnAb = tAnAb;
                                var tResultZeile = tResultZeileN;
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_WEITER_AN)) {
                                    var tResultZeileX = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN,
                                        BhfTag: null,
                                        AnschlussNummern: [],
                                        Zeiteintraege: [],
                                        Ref: null,
                                        Lfd: -1,
                                        Via: null,
                                        Fahrkarteninfo: null
                                    };
                                    tResultZeile = tResultZeileX;
                                }
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_WEITER_AB)) {
                                    var tResultZeileXD = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB,
                                        BhfTag: null,
                                        AnschlussNummern: [],
                                        Zeiteintraege: [],
                                        Ref: null,
                                        Lfd: -1,
                                        Via: null,
                                        Fahrkarteninfo: null
                                    };
                                    tResultZeile = tResultZeileXD;
                                }
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_ZUBRINGER_AB)) {
                                    var tResultZeileY = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB,
                                        BhfTag: null,
                                        AnschlussNummern: [],
                                        Zeiteintraege: [],
                                        Ref: null,
                                        Lfd: -1,
                                        Via: null,
                                        Fahrkarteninfo: null
                                    };
                                    tResultZeile = tResultZeileY;
                                }
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP) && (zeile_0.zeilentyp == EZeilentyp.ANSCHLUSS_ZUBRINGER_IN)) {
                                    var tResultZeileZ = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN,
                                        BhfTag: null,
                                        AnschlussNummern: [],
                                        Zeiteintraege: [],
                                        Ref: null,
                                        Lfd: -1,
                                        Via: null,
                                        Fahrkarteninfo: null
                                    };
                                    tResultZeile = tResultZeileZ;
                                }
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP && zeile_0.zeilentyp == EZeilentyp.KLASSENNRZEILE)) {
                                    var tResultZeileK = {
                                        kind: SaxParsedTypes_1.ZEILE_T.KLASSEN,
                                        KlassenNummern: [],
                                        ZeitZeileZusatzInfo: undefined,
                                        BlockEintrag: undefined
                                    };
                                    tResultZeile = tResultZeileK;
                                }
                                if ((zeile_0.kind === BLOCK_T.ZEILEN_TYP && zeile_0.zeilentyp == EZeilentyp.ZUGNRZEILE)) {
                                    var tResultZeileKl = {
                                        kind: SaxParsedTypes_1.ZEILE_T.ZUGNR,
                                        ZugNummern: [],
                                        ZeitZeileZusatzInfo: undefined
                                    };
                                    tResultZeile = tResultZeileKl;
                                }
                                switch (tResultZeile.kind) {
                                    case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_AB:
                                    case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_WEITER_IN:
                                    case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                                    case SaxParsedTypes_1.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                                    case SaxParsedTypes_1.ZEILE_T.NORMAL:
                                        var temp_ZeitZeileZusatzInfo_Vorn = Importer.erstelleZZZausHeaderArray(zeile.slice(0, tTrennerIndex));
                                        var tZusatzInfoIndex = tFindFirstIndex(zeile, function (z) {
                                            return (z.kind === BLOCK_T.ZEILENZUSATZINFO);
                                        });
                                        var tZusatzInfoHinten = null;
                                        if (tZusatzInfoIndex > -1) {
                                            tZusatzInfoHinten = Importer.parseZeitZeileZusatzInfo(zeile[tZusatzInfoIndex]);
                                        }
                                        var mergeF = function (tVorn, tHinten) {
                                            var tNum = [];
                                            var tBhf = null;
                                            var tAnschlussNummern = new Array().concat(tVorn.AnschlussNummern);
                                            if (tHinten) {
                                                if ((tAnschlussNummern.length > 0) && (tHinten.AnschlussNummern.length > 0)) {
                                                    console.warn("merge found different Anschlussnummern: ", tVorn.AnschlussNummern, tHinten.AnschlussNummern);
                                                    console.warn("keeping front");
                                                }
                                                else {
                                                    tAnschlussNummern = tAnschlussNummern.concat(tHinten.AnschlussNummern);
                                                }
                                            }
                                            var tVia = tVorn.Via || [];
                                            if (tHinten && tHinten.Via) {
                                                if ((tVia.length > 0) && (tHinten.Via.length > 0)) {
                                                    console.warn("merge found different Via: ", tVorn.Via, tHinten.Via);
                                                    console.warn("keeping front");
                                                }
                                                else {
                                                    tVia = tVia.concat(tHinten.Via);
                                                }
                                            }
                                            var tOrtsname = tVorn.Ortsname;
                                            if (tHinten && tHinten.Ortsname) {
                                                if (tOrtsname) {
                                                    console.warn("merge found different ortsname: ", tVorn.Ortsname, tHinten.Ortsname);
                                                }
                                                else {
                                                    tOrtsname = tHinten.Ortsname;
                                                }
                                            }
                                            var tFahrpreisAngabe = tVorn.Fahrpreise;
                                            if (tHinten && tHinten.Fahrpreise.kind != SaxBaseTypes_1.FAHRPREIS_T.KEINE_ANGABE) {
                                                if (tFahrpreisAngabe.kind != SaxBaseTypes_1.FAHRPREIS_T.KEINE_ANGABE) {
                                                    console.warn("merge found different Fahrpreisangabe: ", tVorn.Fahrpreise, tHinten.Fahrpreise);
                                                }
                                                else {
                                                    tFahrpreisAngabe = tHinten.Fahrpreise;
                                                }
                                            }
                                            var tRef = tVorn.Ref;
                                            if (tHinten && tHinten.Ref) {
                                                if (tRef) {
                                                    console.warn("merge found different ref ", tVorn.Ref, tHinten.Ref);
                                                }
                                                else {
                                                    tRef = tHinten.Ref;
                                                }
                                            }
                                            var tLfd = tVorn.Lfd;
                                            if (tHinten && tHinten.Lfd < 0) {
                                                if (tLfd > -1) {
                                                    console.warn("merge found different lfd ", tVorn.Lfd, tHinten.Lfd);
                                                }
                                                else {
                                                    tLfd = tHinten.Lfd;
                                                }
                                            }
                                            var tResult = {
                                                AnschlussNummern: tAnschlussNummern,
                                                Via: tVia,
                                                Ortsname: tOrtsname,
                                                Fahrpreise: tFahrpreisAngabe,
                                                Ref: tRef,
                                                Lfd: tLfd,
                                                Valid: true,
                                                Raw: ""
                                            };
                                            return tResult;
                                        };
                                        var merged_ZeitZeileZusatzInfo = mergeF(temp_ZeitZeileZusatzInfo_Vorn, tZusatzInfoHinten);
                                        tResultZeile.BhfTag = merged_ZeitZeileZusatzInfo.Ortsname;
                                        tResultZeile.Via = merged_ZeitZeileZusatzInfo.Via;
                                        tResultZeile.Fahrkarteninfo = merged_ZeitZeileZusatzInfo.Fahrpreise;
                                        tResultZeile.AnschlussNummern = merged_ZeitZeileZusatzInfo.AnschlussNummern;
                                        tResultZeile.Ref = merged_ZeitZeileZusatzInfo.Ref;
                                        tResultZeile.Lfd = merged_ZeitZeileZusatzInfo.Lfd;
                                        break;
                                }
                                var tResultZeile_Zeiteintraege = [];
                                var tResultZeile_Zeiteintraege_Klassen = [];
                                var tResultZeile_Zeiteintraege_ZugNummern = [];
                                for (var cnt = tStartIdx; cnt < zeile.length; cnt++) {
                                    var rawentryX = zeile[cnt];
                                    switch (rawentryX.kind) {
                                        case BLOCK_T.ZEITEINTRAG:
                                        case BLOCK_T.ANKUNFT:
                                        case BLOCK_T.KEINHALT:
                                            tResultZeile_Zeiteintraege.push(rawentryX);
                                            var tResultEntryError = {
                                                kind: BLOCK_T.ERROR,
                                                Grund: "NOT ALLOWED IN KLASSEN OR ZUGNUMMERZEILE" + JSON.stringify(rawentryX)
                                            };
                                            tResultZeile_Zeiteintraege_Klassen.push(tResultEntryError);
                                            tResultZeile_Zeiteintraege_ZugNummern.push(tResultEntryError);
                                            break;
                                        case BLOCK_T.ZEILEN_TYP:
                                            break;
                                        case BLOCK_T.DICKERSTRICH:
                                        case BLOCK_T.BLOCK:
                                        case BLOCK_T.LEER:
                                        case BLOCK_T.KLASSEN_WERT:
                                        case BLOCK_T.ZUG_NR_WERT:
                                            tResultZeile_Zeiteintraege.push(rawentryX);
                                            tResultZeile_Zeiteintraege_Klassen.push(rawentryX);
                                            tResultZeile_Zeiteintraege_ZugNummern.push(rawentryX);
                                            break;
                                        case BLOCK_T.ZEILENZUSATZINFO:
                                            break;
                                        case BLOCK_T.KM_WERT:
                                            break;
                                        case BLOCK_T.BHFTAG:
                                            break;
                                        case BLOCK_T.TRENNER:
                                            break;
                                        case BLOCK_T.ANSCHLUSS_NUMMERN:
                                            break;
                                        case BLOCK_T.HEADERLFD:
                                            break;
                                        case BLOCK_T.HEADERREF:
                                            break;
                                        case BLOCK_T.HEADERVIA:
                                            break;
                                        default:
                                            SaxBaseTypes_1.assertNever(rawentryX);
                                            break;
                                    }
                                }
                                if (tResultZeile.kind == SaxParsedTypes_1.ZEILE_T.KLASSEN) {
                                    tResultZeile.KlassenNummern = tResultZeile_Zeiteintraege_Klassen;
                                }
                                else if (tResultZeile.kind == SaxParsedTypes_1.ZEILE_T.ZUGNR) {
                                    tResultZeile.ZugNummern = tResultZeile_Zeiteintraege_ZugNummern;
                                }
                                else {
                                    tResultZeile.Zeiteintraege = tResultZeile_Zeiteintraege;
                                }
                                console.log("PUSH ", tResultZeile);
                                tResult.Zeilen.push(tResultZeile);
                            }
                        }
                    }
                    if (input.ZellenVerweise != null) {
                        input.ZellenVerweise.forEach(function (zi) {
                            tResult.ZusatzBloecke.push(zi);
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
                ZI_Creator.createTVerweisPassend = function (key, scope) {
                    return {
                        kind: VERWEIS_T.PASSEND,
                        ReferenzKey: key,
                        Scope: scope
                    };
                };
                ZI_Creator.createKbsAbweichungKeine = function () {
                    return {
                        kind: SaxParsedTypes_1.KBS_ABWEICHUNG_T.KEINE
                    };
                };
                ZI_Creator.parseKlassenString = function (Klassenstring) {
                    var tKlassen = EKlassen.NichtAngegeben;
                    if (Klassenstring != undefined) {
                        if ((Object.keys(EKlassen).map(function (k) { return EKlassen[k]; }).indexOf(Klassenstring) > -1)) {
                            tKlassen = Klassenstring;
                            console.warn("trace check 3 ", Klassenstring, " -> ", tKlassen);
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
                return ZI_Importer;
            }());
            exports_4("ZI_Importer", ZI_Importer);
            ZI_Renderer = (function () {
                function ZI_Renderer() {
                }
                ZI_Renderer.isEmptyBIBGlobal = function (b) {
                    console.warn("isEmptyBibGlobal not complete");
                    return (b.Inhalt.BLOCK.Standard.scope === undefined);
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
                    var tResult = "UUUndefined";
                    if (t) {
                        tResult = ((t["Virtualized"] === true) ? "VIRTUALIZED " : "") + t.Inhalt.q;
                    }
                    return "todo render v2 " + tResult;
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
                                        case BLOCK_T.BLOCK:
                                            var zix = JSON.parse(JSON.stringify(zi));
                                            zix["comment"] = "created in merge()";
                                            zix.Start = false;
                                            tEintraege[spalteidx] = zix;
                                            tUnprocessedBlocks.push({ eintrag: zix, zeile: zeileidx, spalte: spalteidx, alreadyDone: false });
                                            break;
                                        case BLOCK_T.ANKUNFT:
                                        case BLOCK_T.ZEITEINTRAG:
                                        case BLOCK_T.LEER:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.DICKERSTRICH:
                                        case BLOCK_T.ZUG_NR_WERT:
                                        case BLOCK_T.ERROR:
                                        case BLOCK_T.KLASSEN_WERT:
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
                            startblock.eintrag.Valid = true;
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
                                if ((tAnguck != null)
                                    && (tAnguck.alreadyDone == false)
                                    && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey)
                                    && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                    startblock.eintrag.Breite++;
                                    tAnguck.alreadyDone = true;
                                    tAnguck.eintrag.Valid = true;
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
                                if ((tAnguck != null)
                                    && (tAnguck.alreadyDone == false)
                                    && (tAnguck.eintrag.Referenzkey === startblock.eintrag.Referenzkey)
                                    && (tAnguck.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                    startblock.eintrag.Hoehe++;
                                    tAnguck.alreadyDone = true;
                                    tAnguck.eintrag.Valid = true;
                                    tProcessedBlocks.push(tAnguck);
                                }
                                else {
                                    tSuchZeileWeiter = false;
                                }
                            }
                            console.log("ermittelte Hoehe ", startblock.eintrag.Hoehe);
                            console.log(JSON.stringify(startblock.eintrag));
                            console.log("rechteck pruefen");
                            for (var z = startblock.zeile; z < startblock.zeile + startblock.eintrag.Hoehe; z++) {
                                for (var sp_1 = startblock.spalte; sp_1 < startblock.spalte + startblock.eintrag.Breite; sp_1++) {
                                    var tAnguck_1 = FindEntry(tUnprocessedBlocks, sp_1, z);
                                    console.log(sp_1, z, tAnguck_1);
                                    if ((tAnguck_1 != null)
                                        && (true)
                                        && (tAnguck_1.eintrag.Referenzkey === startblock.eintrag.Referenzkey)
                                        && (tAnguck_1.eintrag.Senkrecht === startblock.eintrag.Senkrecht)) {
                                        tAnguck_1.alreadyDone = true;
                                        tAnguck_1.eintrag.Valid = true;
                                        tProcessedBlocks.push(tAnguck_1);
                                        console.log("OK: ", sp_1, z);
                                    }
                                    else {
                                        console.error("Block validation failed: wrong entry (not wa / sa) in rectangluar area at Zeile ", z, " Spalte ", sp_1);
                                    }
                                }
                            }
                            console.log(JSON.stringify(startblock.eintrag));
                            tProcessedBlocks.push(startblock);
                        }
                        else {
                            console.warn("Validation error: found entry for already known refkey " + startblock.eintrag.Referenzkey + "!!!");
                        }
                    });
                    console.log(tProcessedBlocks);
                    return s;
                };
                Validator.validate_addZusatzinfobase = function (s) {
                    var nextFreeMarkerIdx = 0;
                    var freemarker = ["\u26B4", "\u26B5", "\u26B6"];
                    s.ZusatzBloecke.forEach(function (z, idx, arr) {
                        if (z.Verweistyp.kind == VERWEIS_T.FERN) {
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
                                        case BLOCK_T.BLOCK:
                                            if (zi.Start && zi.Referenzkey) {
                                            }
                                            break;
                                        case BLOCK_T.LEER:
                                        case BLOCK_T.DICKERSTRICH:
                                        case BLOCK_T.ERROR:
                                        case BLOCK_T.ANKUNFT:
                                        case BLOCK_T.ZEITEINTRAG:
                                        case BLOCK_T.KEINHALT:
                                        case BLOCK_T.ZUG_NR_WERT:
                                        case BLOCK_T.KLASSEN_WERT:
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
                                break;
                            case SaxParsedTypes_2.ZEILE_T.ZUGNR:
                            case SaxParsedTypes_2.ZEILE_T.KLASSEN:
                            case SaxParsedTypes_2.ZEILE_T.NORMAL:
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
                    console.log(input);
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
                                break;
                        }
                    });
                    var berechneStartEndString = function (ze) {
                        var tResult = "";
                        if ((ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isEnd)) {
                            tResult = " isEnd ";
                        }
                        if ((ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET) && (ze.BerechneterZugLauf.isStart)) {
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
                        if (zb.Verweistyp.kind == VERWEIS_T.GLOBAL_DEFAULT) {
                            if (zb.TextOrt.kind == TEXTORT_T.GANZESPALTE) {
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
                        if (zb.Verweistyp.kind == VERWEIS_T.GLOBAL_DEFAULT) {
                            if (zb.TextOrt.kind == TEXTORT_T.GANZESPALTE) {
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
                                            tdk.innerHTML += "<div class=\"" + tBhfSpanClass + "\">" + (z.BhfTag ? z.BhfTag.station : "")
                                                + "</div>";
                                            console.log(z);
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "ZubringerAbAus" + "\">" + "aus" + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "ZubringerAbBhf" + "\">" + (z.BhfTag ? z.BhfTag.station : "")
                                                + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS zubringer ab");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "ZubringerInI" + "\">" + "i." + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "ZubringerInBhf" + "\">" + (z.BhfTag ? z.BhfTag.station : "")
                                                + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS zubringer in");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_AB) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "WeiterAbAus" + "\">" + "a." + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "WeiterAbBhf" + "\">" + (z.BhfTag ? z.BhfTag.station : "")
                                                + "</div>";
                                            tdk.setAttribute("title", "ANSCHLUSS weiter ab");
                                        }
                                        if (z.kind === SaxSchedulesTyped.ZEILE_T.ANSCHLUSS_WEITER_IN) {
                                            tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                            tdk.innerHTML += "<div class=\"" + "WeiterIn" + "\">" + "in" + "</div>";
                                            tdk.innerHTML += "<div class=\"" + "WeiterInBhfBhf" + "\">" + (z.BhfTag ? z.BhfTag.station : "")
                                                + "</div>";
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
                                    if (zeb.kind == ZUGLAUF_BERECHNET) {
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
                                        case BLOCK_T.LEER:
                                            console.log(ze.MitStrich);
                                            td.innerHTML = ((ze.MitStrich == true) ? "-" : "");
                                            td.title = " Z" + (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case BLOCK_T.KEINHALT:
                                            td.innerHTML = " | ";
                                            td.title = " Z" + (ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case BLOCK_T.BLOCK:
                                            var tDebugString = "";
                                            td.title = ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            var ze_Blockinhalt_1 = undefined;
                                            if (ze.Referenzkey != null) {
                                                input.ZusatzBloecke.forEach(function (angabeAusListe) {
                                                    if ((angabeAusListe.Verweistyp.kind == VERWEIS_T.FERN) || (angabeAusListe.Verweistyp.kind == VERWEIS_T.PASSEND)) {
                                                        if (angabeAusListe.Verweistyp.ReferenzKey === ze.Referenzkey) {
                                                            ze_Blockinhalt_1 = angabeAusListe;
                                                        }
                                                    }
                                                });
                                            }
                                            if (ze.Valid == false) {
                                                console.log("render block invalid ", ze);
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
                                                console.log("ZE ", ze.Start);
                                                if (ze.Senkrecht) {
                                                    td.setAttribute("class", "blockSenkrecht valid");
                                                    var tSenkrechtDiv = document.createElement("div");
                                                    tSenkrechtDiv.innerHTML = (ze.Start ? SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(ze_Blockinhalt_1, false) : "") + tDebugString;
                                                    tSenkrechtDiv.setAttribute("class", "senkrecht " + "senkOrgBreit-" + ze.Breite + " " + "senkOrgHoch-" + ze.Hoehe);
                                                    td.appendChild(tSenkrechtDiv);
                                                }
                                                else {
                                                    td.setAttribute("class", "blockWaagerecht valid");
                                                    td.innerHTML = (ze.Start ? SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(ze_Blockinhalt_1, false) : "") + tDebugString;
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
                                        case BLOCK_T.ERROR:
                                            console.warn("NormalZeile Erroreintrag not yet implemented");
                                            td.setAttribute("class", "notImplemented");
                                            td.innerHTML = JSON.stringify(ze);
                                            break;
                                        case BLOCK_T.ZEITEINTRAG:
                                            if (ze.Zeit.kind == ZEIT_24) {
                                                td.title = ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                                td.setAttribute("class", ze.Zeit.WelcherTag == GesternHeuteMorgen.Gestern ? "Gestern" :
                                                    ze.Zeit.WelcherTag == GesternHeuteMorgen.Heute ? "Heute" :
                                                        ze.Zeit.WelcherTag == GesternHeuteMorgen.Morgen ? "Morgen" : "UnbekannterTag");
                                                var tSpanRefKey = document.createElement("span");
                                                tSpanRefKey.setAttribute("class", "ZeitRefKey");
                                                tSpanRefKey.innerHTML = ((ze.Referenzkey) ? ze.Referenzkey : "");
                                                var tSpanOpticalMarker = document.createElement("span");
                                                tSpanOpticalMarker.setAttribute("class", "ZeitOptiMarker");
                                                var tOptical = "";
                                                for (var i_2 = 0; i_2 < input.ZusatzBloecke.length; i_2++) {
                                                    var tVerweis = input.ZusatzBloecke[i_2].Verweistyp;
                                                    if (tVerweis.kind == VERWEIS_T.FERN) {
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
                                                    + ((ze.Zeit.Valid === ETimeValid.Nein) ? " TimeInvalid" : ""));
                                                tSpanStunde.innerHTML = ((tStunde < 10) ? "&nbsp;" : "") + tStunde.toString() + ":";
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
                                                td.innerHTML = (ze.Referenzkey ? ze.Referenzkey + " " : "") + "rohz " + ze.Zeit.RohZeit;
                                            }
                                            break;
                                        case BLOCK_T.DICKERSTRICH:
                                            td.innerHTML = "DICK";
                                            td.setAttribute("class", "DickStrich");
                                            td.title = ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case BLOCK_T.ANKUNFT:
                                            td.innerHTML = "Ank.";
                                            td.title = ze.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                            td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                            td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                            break;
                                        case BLOCK_T.KLASSEN_WERT:
                                            var kl_1 = "kl?";
                                            switch (ze.klassen) {
                                                case EKlassen.Klassen1:
                                                    kl_1 = "I";
                                                    break;
                                                case EKlassen.Klassen1bis2:
                                                    kl_1 = "I-II";
                                                    break;
                                                case EKlassen.Klassen1bis3:
                                                    kl_1 = "I-III";
                                                    break;
                                                case EKlassen.Klassen1bis4:
                                                    kl_1 = "I-IV";
                                                    break;
                                                case EKlassen.Klassen2bis3:
                                                    kl_1 = "II-III";
                                                    break;
                                                case EKlassen.Klassen2bis4:
                                                    kl_1 = "II-IV";
                                                    break;
                                                case EKlassen.Klassen3:
                                                    kl_1 = "III";
                                                    break;
                                                case EKlassen.Klassen3bis4:
                                                    kl_1 = "III-IV";
                                                    break;
                                                case EKlassen.KlassenNurEine:
                                                    kl_1 = "eine Kl";
                                                    break;
                                                case EKlassen.NichtAngegeben:
                                                    kl_1 = "k.a.";
                                                    break;
                                            }
                                            td.innerHTML = kl_1;
                                            break;
                                        case BLOCK_T.ZUG_NR_WERT:
                                            td.innerHTML = "Z:" + ze.zugnr;
                                            break;
                                        default: return SaxBaseTypes_3.assertNever(ze);
                                    }
                                    if (tAppendTD) {
                                        tr.appendChild(tdd);
                                        tRealeSpaltenBisher++;
                                    }
                                });
                                Renderer.globalespalten(tr, tRealeSpaltenBisher, tErsteGlobalZeile, tSpalteNach);
                                {
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
                            case VERWEIS_T.GLOBAL_DEFAULT:
                                switch (zb.TextOrt.kind) {
                                    case TEXTORT_T.LINKSVONHEADER:
                                        console.log("x tHeadLeftDiv ", tHeadLeftDiv);
                                        var e = document.getElementById(tHeadLeftDiv.getAttribute("id"));
                                        if ((e) && (e)) {
                                            e.innerHTML += SaxParser_1.ZI_Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                        }
                                        break;
                                    case TEXTORT_T.RECHTSVONHEADER:
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
                            [_anschl_aus, Chemnitz, N_85, CH, _, _, _, _, _, _, _, _, 639, _, 902, _, _, 1212, _, _, _, 242, 505, _, 715],
                            [_zugnr, zn, gnix, 1951, gnix, 1861, gnix, gnix, 1931, 1867, 1933, gnix, 1995, gnix, gnix, 1935, 1869, 1937, _, 1997, 1939, 1871, 1999],
                            [_klassen, kl, gnix, k2b4, gnix, k2b4, gnix, gnix, k2b4, k2b4, k2b4, gnix, k2b4, gnix, gnix, k2b4, k2b4, k2b3, _, k2b4, k2b4, k2b3, k2b4],
                            [Annaberg, ab, _, _, _, _, _, _, 605, _, 918, _, 1126, _, _, 226, _, sg, _, 607, 736, _, 944],
                            [2.7, Buchholz, F(85), ab, _, _, _, _, _, _, 613, _, 930, _, 1136, _, _, 237, _, sg, _, 619, 749, _, 954, { nr: 85 }],
                            [8.6, SaxInputTypes_2.WaltersdfHst, ab, _, _, _, _, _, _, 630, _, 947, _, 1153, _, _, 256, _, sg, _, 636, 808, _, 1011],
                            [Schlettau, an, _, _, _, _, _, _, 635, _, 952, _, 1158, _, _, 301, _, sg, _, 641, 813, _, 1016, { nr: "99b" }],
                            [9.9, Schlettau, ab, _, _, _, 525, _, _, 640, 853, 957, _, _, _, _, 306, 320, 610, SaxInputTypes_2.Z1971, _, 818, 830, _],
                            [18.3, Scheibenberg, ab, _, _, _, 540, _, _, 651, 903, 1008, _, _, _, _, 317, 341, 621, k2b3, _, 830, 840, _],
                            [20.8, SaxInputTypes_2.MittwMrkb, ab, _, _, _, se, _, _, 710, ank, 1027, _, _, _, _, 336, sf, 639, sh, _, 848, ank, _],
                            [22.2, Raschau, ab, _, _, _, se, _, _, 716, _, 1033, _, _, _, _, 342, sf, 645, sh, _, 854, sk, _],
                            [24.1, Grünstädtel, an, _, _, _, se, _, _, 723, _, 1040, _, _, _, _, 349, sf, 651, sh, _, 901, sk, _],
                            [Grünstädtel, ab, _, _, _, se, _, _, 724, _, 1042, _, SaxInputTypes_2.Z2045, sb, sc, 354, sf, 652, sh, SaxInputTypes_2.Z1967, 903, sk, SaxInputTypes_2.Z2065, { nr: "99c" }],
                            [28.8, Schwarzenberg_Bf, an, _, _, _, se, _, _, 732, _, 1050, _, k2b4, sb, sc, 402, sf, 659, sh, k2b4, 911, sk, k2b4, { nr: "100a" }],
                            [Schwarzenberg_Bf, ab, _, 435, _, se, _, _, 739, _, 1056, _, 1256, sb, sc, 416, sf, _, 649, 704, 916, sk, 1125],
                            [29.3, Neuwelt, ab, _, 442, _, se, _, _, 746, _, 1103, _, kHlt, sb, sc, 423, sf, _, 656, 711, 923, sk, 1132],
                            [31.2, Lauter, ab, _, 548, _, se, _, _, 752, _, 1110, _, 106, sb, sc, 429, sf, _, 702, 717, 930, sk, 1138],
                            [37.3, Aue, an, _, 500, _, se, _, _, 804, _, 1122, _, 117, sb, sc, 441, sf, _, 713, 728, 942, sk, 1150],
                            [_zugnr, zn, _, 1951, _, _, _, _, 1953, _, 1959, _, _, _, _, 1865, _, _, 1971, 1967, 1969, sk, _],
                            [_klassen, kl, _, k2b4, _, _, _, _, k2b4, _, k2b4, _, _, _, _, k2b4, _, _, k2b3, k2b4, k2b4, sk, _],
                            [Aue, ab, _, 507, _, _, _, _, 817, _, 1141, _, 118, _, _, 505, _, _, 715, 732, 1004, sk, _],
                            [41.6, Niederschlema, an, _, 516, _, _, _, _, 826, _, 1150, _, 126, _, _, 514, _, _, 723, 741, 1013, _, _],
                            [_zugnr, zn, 1978, _, 2043, 205, 2051, 2053, _, 2055, _, 2057, _, 2059, 2061, _, 1975, 2047, _, _, _, _, _],
                            [_klassen, kl, k2b4, _, k2b4, k1b3, k2b4, k2b4, _, k2b4, _, k2b4, _, k2b4, k2b4, _, k3b4, k2b4, _, _, _, _, _],
                            [Niederschlema, ab, sl, 518, _, _, _, _, 830, sd, 1155, _, 128, _, _, 517, si, _, 724, 742, 1019, _, _],
                            [47.4, Stein_Hartenstein, ab, sl, 528, _, _, _, _, 840, sd, 1206, _, 139, _, _, 527, si, _, 734, 755, 1029, _, _],
                            [Fährbrücke, ab, sl, 538, _, _, _, _, 849, sd, 1216, _, 148, _, _, 537, si, _, 743, 804, 1038, _, _],
                            [55.7, Wiesenburg, ab, sl, 548, _, _, 717, _, 900, sd, 1228, _, 157, 319, _, 547, si, 635, 752, 813, 1048, _, _],
                            [Silberstrasse, ab, sl, kHlt, _, _, 723, _, kHlt, sd, kHlt, _, 203, 325, _, kHlt, si, 641, kHlt, kHlt, kHlt, _, _],
                            [61.8, Wilkau_Bf, ab, 445, 600, 631, _, 731, 818, 912, 1042, 1242, 124, 212, 334, 443, 600, si, 650, 804, 826, 1102, _, _, { nr: 96 }],
                            [Cainsdorf, ab, 452, 606, 637, _, 736, 824, 917, 1048, 1247, 130, 217, 339, 448, 605, si, 655, 809, 831, 1108, _, _],
                            [Schedewitz, ab, 459, 612, 642, _, 741, 829, 922, 1053, 1252, 135, 222, 344, 453, 610, si, 700, 814, 836, 1114, _, _],
                            [67.2, Zwickau, an, 505, 618, 649, _, SaxInputTypes_2.m747, 835, 928, 1059, 1258, 141, 228, 350, 459, 616, si, 706, 820, 842, 1120, _, _, { nr: 54 }],
                            [Zwickau, ab, SaxInputTypes_2.a510, 632, 656, SaxInputTypes_2.n822, _, _, 948, SaxInputTypes_2.d1153, 115, _, 235, SaxInputTypes_2.b355, SaxInputTypes_2.c510, 620, 628, 710, 825, 908, 1150, _, _, { nrn: [54, 68] }],
                            [Lichtentanne, ab, 520, kHlt, 707, kHlt, wa, wa, 958, 1204, 125, _, 245, 406, 521, kHlt, 640, 720, 836, 918, 1200, _, _],
                            [76.8, Werdau, an, 530, 647, 716, 835, wa, wa, 1008, 1212, 135, _, 254, 416, 529, 635, 655, 730, 845, 925, MV(1208), _, _, { nr: 59 }],
                            [_anschluss_nach_in, LE, 749, SaxInputTypes_2.s810, 925, 1019, _, _, 1232, _, 341, _, SaxInputTypes_2.s550, 652, SaxInputTypes_2.s748, SaxInputTypes_2.s800, _, 957, _, MV(1205), sMV(321), _, _, { ort: Leipzig, nr: 56 }]
                        ],
                        ZellenVerweise: [
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "a",
                                    "OpticalMarker": "*"
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: " *Zug2041 II-IV",
                                    BLOCK: { Standard: { scope: Zug, ZugNr: 2041, Klasse: Kl2bis4 } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "b",
                                    "OpticalMarker": "_markerAussehen_fatdot"
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "(rund) Zug 1961",
                                    BLOCK: { Standard: { scope: Zug, ZugNr: 1961 } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "c",
                                    "OpticalMarker": "?"
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "? Zug 1963",
                                    BLOCK: { Standard: { scope: Zug, ZugNr: 1963 } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "d",
                                    "OpticalMarker": "!"
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "! Zug 1957",
                                    BLOCK: { Standard: { scope: Zug, ZugNr: 1957 } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "e",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "nach Stollberg",
                                    BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Stollberg } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "f",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "nach Stollberg",
                                    BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Stollberg } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "g",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Sonn und Festtags",
                                    BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "h",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Sonn und Festtags",
                                    BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "i",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Nur Werktags.",
                                    BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "k",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Sonn und Festtags",
                                    BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.PASSEND,
                                    "ReferenzKey": "l",
                                    "Scope": 1
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Nur Werktags.",
                                    BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "m",
                                    "OpticalMarker": ""
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Pfeil",
                                    BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
                                }
                            },
                            {
                                "Verweistyp": {
                                    "kind": VERWEIS_T.FERN,
                                    "ReferenzKey": "n",
                                    "OpticalMarker": ""
                                },
                                "TextOrt": { "kind": TEXTORT_T.NICHTANGEGEBEN },
                                Inhalt: {
                                    q: "Pfeil",
                                    BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
                                }
                            },
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.LINKSVONHEADER },
                                Inhalt: {
                                    q: "Saechs Staatsb",
                                    BLOCK: { Standard: { scope: Global, Verwaltung: "Saechs" } }
                                }
                            }
                        ]
                    },
                    {
                        route1900: 100,
                        caption: "Stollberg -- Zwoenitz -- Scheibenberg -- (Anaberg) Rueck",
                        seite: 105,
                        zeilen: [
                            [_anschluss_aus, CH, nix, 533, 908, 105, 648, { ort: Chemnitz, via: Neukirchen_i_E, nr: 95 }],
                            [_anschluss_aus, Lugau, TR, 422, 702, nix, 148, 426, { ort: Lugau, nr: 83 }],
                            [_zugnr, zn, 1862, 1866, 1868, 1870, 1872],
                            [Stollberg, ab, 455, 900, 1100, 325, 830],
                            [6.5, Oberdorf_Beutha, ab, 514, 916, 1116, 344, 845],
                            [11.7, Affalter, ab, 531, 929, 1130, 401, 857],
                            [16.6, Zwönitz, an, 543, 941, 1142, 413, 909],
                            [_anschluss_nach_in, Aue, TR, 635, 1020, 201, 453, 940, { ort: Aue, nr: 94 }],
                            [_anschluss_nach_in, Chemnitz, Via(Thalheim), 444, nix, 928, 303, 750, { ort: Chemnitz, via: Thalheim, nr: 94 }],
                            [Zwönitz, ab, 620, nix, 1205, 440, 925],
                            [24.5, Bernsbach, ab, 645, nix, 1227, 505, 949],
                            [27.4, Beierfeld, ab, 656, nix, 1237, 516, 1000],
                            [29.3, Grünhain, ab, 706, nix, 1247, 527, 1009],
                            [34.6, Elterlein, ab, 725, nix, 103, 547, 1027],
                            [38.0, Hermannsdorf, ab, 736, nix, 114, 558, 1038],
                            [42.7, Scheibenberg, an, 749, nix, 127, 611, 1051],
                            [_anschluss_nach_in, Schlettau, TR, 810, nix, 142, 642, 1105, { ort: Schlettau, nr: 99 }],
                            [_anschluss_nach_in, Annaberg, TR, 850, nix, 222, 736, nix, { ort: Annaberg, nr: 99 }]
                        ],
                        ZellenVerweise: [
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.LINKSVONHEADER },
                                Inhalt: {
                                    q: "S. Staatsb.",
                                    BLOCK: { Standard: { scope: Global, Verwaltung: "Saechs" } }
                                }
                            },
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.RECHTSVONHEADER },
                                Inhalt: {
                                    q: "Alle Zuege II.-III.Kl.",
                                    BLOCK: { Standard: { scope: Global, Klasse: Kl2bis4 } }
                                }
                            }
                        ]
                    },
                    {
                        route1900: "100a",
                        seite: 105,
                        caption: "Schwarzenberg -- Johanngeorgenstadt hin",
                        zeilen: [
                            [_zub_aus, Zwickau, L(1), F(99), TR, 515, SaxInputTypes_2.a858, 335, 701, {}],
                            [_zub_aus, Aue, L(1), F(99), TR, 642, 1025, 501, 833, {}],
                            [_zub_aus, Annaberg, L(9), F(99), TR, 605, 918, 226, 736, {}],
                            [_zugnr, zn, 3112, 3114, 3116, 3118],
                            [Schwarzenberg_Bf, ab, 740, 1115, 545, 923],
                            [1.5, Schwarzenberg_Hltp, ab, 748, 1123, 554, 931, { fk: [30, 20] }],
                            [3.1, Erla, ab, 755, 1130, 601, 938, { fk: [30, 20] }],
                            [6.7, Antonsthal, ab, 807, 1142, 613, 949, { fk: [50, 30] }],
                            [11.3, Breitenhof, ab, 818, 1153, 624, 1000, { fk: [70, 50] }],
                            [13.2, Erlabrunn, ab, 827, 1202, 633, 1009, { fk: [90, 60] }],
                            [17.3, Johanngeorgenstadt, an, 838, 1213, 645, 1020, { fk: [110, 80] }],
                            [_anschluss_nach_start, TR, 920, 1235, 733, _, { ort: Johanngeorgenstadt, lfd: 2 }],
                            [_anschluss_nach_in, TR, 1124, 247, 945, _, { fk: [430, 230], ort: Karlsbad_BEB, lfd: 2 }]
                        ],
                        ZellenVerweise: [
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.LINKSVONHEADER },
                                Inhalt: {
                                    q: "S. Staatsb.",
                                    BLOCK: { Standard: { scope: Global, Verwaltung: "Saechs" } }
                                }
                            },
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.RECHTSVONHEADER },
                                Inhalt: {
                                    q: "Alle Zuege II.-III.Kl.",
                                    BLOCK: { Standard: { scope: Global, Klasse: Kl2bis3 } }
                                }
                            }
                        ]
                    },
                    {
                        route1900: "100a",
                        seite: 105,
                        todo: "fahrpreise,direkterwagenwerdaukarlsbad rueckrichtung",
                        caption: "Schwarzenberg - johangeorgenstadt zurueck",
                        zeilen: [
                            [_anschluss_aus, TR, nix, 700, 1228, 506, { ort: Karlsbad_BEB, nr: "108d", lfd: 1 }],
                            [_anschluss_aus_ziel, TR, nix, 919, 245, 722, { ort: Johanngeorgenstadt, lfd: 1 }],
                            [_zugnr, zn, 3111, 3113, 3115, 3117],
                            [Johanngeorgenstadt, an, 608, 946, 315, 759],
                            [Erlabrunn, ab, 619, 957, 326, 810],
                            [Breitenhof, ab, 628, 1006, 335, 819],
                            [Antonsthal, ab, 638, 1016, 345, 829],
                            [Erla, ab, 649, 1027, 356, 840],
                            [Schwarzenberg_Hltp, ab, 655, 1033, 402, 846],
                            [Schwarzenberg_Bf, ab, 703, 1041, 410, 854],
                            [_anschluss_nach_in, TR, 804, 1122, 441, 942, { ort: Aue, nr: 99 }],
                            [_anschluss_nach_in, TR, 928, 1258, 616, 1120, { ort: Zwickau, nr: 99 }],
                            [_anschluss_nach_in, TR, 850, 1232, 736, 1052, { ort: Annaberg, nr: 99 }]
                        ],
                        ZellenVerweise: [
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.LINKSVONHEADER },
                                Inhalt: {
                                    q: "S. Staatsb.",
                                    BLOCK: { Standard: { scope: Global, Verwaltung: "Saechs" } }
                                }
                            },
                            {
                                "Verweistyp": { "kind": VERWEIS_T.GLOBAL_DEFAULT },
                                "TextOrt": { "kind": TEXTORT_T.RECHTSVONHEADER },
                                Inhalt: {
                                    q: "Alle Zuege II.-III.Kl.",
                                    BLOCK: { Standard: { scope: Global, Klasse: Kl2bis3 } }
                                }
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
System.register("SaxParsedNachberechnung", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var Nachberechnung;
    return {
        setters: [],
        execute: function () {
            Nachberechnung = (function () {
                function Nachberechnung() {
                }
                return Nachberechnung;
            }());
            exports_8("Nachberechnung", Nachberechnung);
        }
    };
});
System.register("SaxZuglaufAuslesen", ["SaxBaseTypes", "SaxParsedTypes"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var SaxBaseTypes_4, SaxParsedTypes_3, LAUFEINTRAG_NORMAL, LAUFEINTRAG_KEINHALT, LAUFEINTRAG_AN, LAUFEINTRAG_GELOESCHT, LAUFEINTRAG_KOMMEAUSKBS, LAUFEINTRAG_VERLASSENACHKBS, ZugExtraktor;
    return {
        setters: [
            function (SaxBaseTypes_4_1) {
                SaxBaseTypes_4 = SaxBaseTypes_4_1;
            },
            function (SaxParsedTypes_3_1) {
                SaxParsedTypes_3 = SaxParsedTypes_3_1;
            }
        ],
        execute: function () {
            exports_9("LAUFEINTRAG_NORMAL", LAUFEINTRAG_NORMAL = "LAUFEINTRAG_NORMAL");
            exports_9("LAUFEINTRAG_KEINHALT", LAUFEINTRAG_KEINHALT = "LAUFEINTRAG_KEINHALT");
            exports_9("LAUFEINTRAG_AN", LAUFEINTRAG_AN = "LAUFEINTRAG_AN");
            exports_9("LAUFEINTRAG_GELOESCHT", LAUFEINTRAG_GELOESCHT = "LAUFEINTRAG_GELOESCHT");
            exports_9("LAUFEINTRAG_KOMMEAUSKBS", LAUFEINTRAG_KOMMEAUSKBS = "LAUFEINTRAG_KOMMEAUSKBS");
            exports_9("LAUFEINTRAG_VERLASSENACHKBS", LAUFEINTRAG_VERLASSENACHKBS = "LAUFEINTRAG_VERLASSENACHKBS");
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
                        kind: FAEHRT_T.IMMER
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
                                    var tEintrag = { kind: BLOCK_T.ERROR, Grund: "temp" };
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
                                        if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
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
                                        tCurrentFahrtage = { kind: FAEHRT_T.IMMER };
                                    }
                                    if ((tEintrag.kind != BLOCK_T.ERROR) && (tEintrag.BerechneterZugLauf.kind == ZUGLAUF_BERECHNET)) {
                                        if ((tCurrentZugNr == undefined)) {
                                            if ((tEintrag.BerechneterZugLauf.ZugNr != null) && (tEintrag.BerechneterZugLauf.ZugNr.length > 0)) {
                                                tCurrentFolge = [];
                                                tCurrentFahrtage = { kind: FAEHRT_T.IMMER };
                                                tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                                console.log("start new ", tCurrentZugNr);
                                            }
                                        }
                                        switch (tEintrag.kind) {
                                            case BLOCK_T.ZEITEINTRAG:
                                                switch (tZeile.kind) {
                                                    case SaxParsedTypes_3.ZEILE_T.NORMAL:
                                                        var tEnt = {
                                                            kind: LAUFEINTRAG_NORMAL,
                                                            BhfTag: tZeile.BhfTag,
                                                            AnZeit: null,
                                                            AbZeit: null
                                                        };
                                                        if (tEintrag.Zeit.kind == ZEIT_24) {
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
                                            case BLOCK_T.LEER:
                                                break;
                                            case BLOCK_T.KEINHALT:
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
                                            case BLOCK_T.ANKUNFT:
                                                console.warn("Todo handle ankunft, soll vorherigen eintrag auf an wechseln");
                                                if (tCurrentFolge) {
                                                    var tEntAn = {
                                                        kind: LAUFEINTRAG_AN
                                                    };
                                                    tCurrentFolge.push(tEntAn);
                                                }
                                                break;
                                            case BLOCK_T.BLOCK:
                                                console.warn("todo read from zusatzinfo");
                                                break;
                                            case BLOCK_T.DICKERSTRICH:
                                                break;
                                            case BLOCK_T.ZUG_NR_WERT:
                                                console.warn("TODO important !!!");
                                                break;
                                            case BLOCK_T.KLASSEN_WERT:
                                                console.warn("TODO important !!!");
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
            exports_9("ZugExtraktor", ZugExtraktor);
        }
    };
});
System.register("SaxVirtualTable", ["SaxParsedTypes", "SaxParser", "SaxBaseTypes"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    function makeTableVirtual(tInput) {
        var virtualize = function (z) {
            z.Virtual = false;
            return z;
        };
        var tResult = {
            Quelle: JSON.parse(JSON.stringify(tInput.Quelle)),
            Kommentar: JSON.parse(JSON.stringify(tInput.Kommentar)),
            Seite: JSON.parse(JSON.stringify(tInput.Seite)),
            Ueberschrift: JSON.parse(JSON.stringify(tInput.Ueberschrift)),
            Route1900: JSON.parse(JSON.stringify(tInput.Route1900)),
            Klassen: JSON.parse(JSON.stringify(tInput.Klassen)),
            Zeilen: JSON.parse(JSON.stringify(tInput.Zeilen)).map(virtualize),
            ZusatzBloecke: JSON.parse(JSON.stringify(tInput.ZusatzBloecke))
        };
        return tResult;
    }
    exports_10("makeTableVirtual", makeTableVirtual);
    function virtualizeZugNrZugKlasse(tInput) {
        console.log("--- VIRTUALIZE ZugNr, ZugKlasse -------");
        var tResult = JSON.parse(JSON.stringify(tInput));
        var iz = 0;
        var _loop_1 = function () {
            console.log("while ", iz);
            xzeile = tResult.Zeilen[iz];
            switch (xzeile.kind) {
                case ParsedTypes.ZEILE_T.NORMAL:
                    zeile = xzeile;
                    var tNeedVirtualZugZeile_1 = false;
                    var tNeedVirtualKlassenZeile_1 = false;
                    var tStandardZugVirtuelleZeile_1 = {
                        kind: SaxParsedTypes_4.ZEILE_T.ZUGNR,
                        ZugNummern: new Array(),
                        ZeitZeileZusatzInfo: undefined,
                        Virtual: true
                    };
                    var tStandardKlasseVirtuelleZeile_1 = {
                        kind: SaxParsedTypes_4.ZEILE_T.KLASSEN,
                        KlassenNummern: new Array(),
                        ZeitZeileZusatzInfo: undefined,
                        Virtual: true,
                        BlockEintrag: undefined
                    };
                    zeile.Zeiteintraege.forEach(function (ze, zidx) {
                        var tVirtZugPossibleEntry = ({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });
                        var tVirtKlasPosibility = ({ BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }, MitStrich: false, kind: BLOCK_T.LEER });
                        switch (ze.kind) {
                            case BLOCK_T.ZEITEINTRAG:
                                if (ze.Referenzkey) {
                                    console.log("Zeit Refkey ", ze.Referenzkey);
                                    var tRef = tResult.ZusatzBloecke.filter(function (b) { return ((b.Verweistyp.kind == VERWEIS_T.FERN) && (b.Verweistyp.ReferenzKey === ze.Referenzkey)); });
                                    if (tRef.length > 0) {
                                        var tr = tRef[0];
                                        if (!SaxParser_2.ZI_Renderer.isEmptyBIBGlobal(tr)) {
                                            var ss = tr.Inhalt.BLOCK.Standard;
                                            if (ss.scope.kind == "Zug") {
                                                var s = ss;
                                                console.log(s.scope, s.ZugNr, s.Klasse);
                                                if (s.ZugNr) {
                                                    var tEntr = {
                                                        kind: BLOCK_T.ZUG_NR_WERT,
                                                        zugnr: "" + s.ZugNr,
                                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                    };
                                                    tVirtZugPossibleEntry = tEntr;
                                                    tNeedVirtualZugZeile_1 = true;
                                                    tr.Virtualized = true;
                                                }
                                                if (s.Klasse) {
                                                    var tEntr = {
                                                        kind: BLOCK_T.KLASSEN_WERT,
                                                        klassen: s.Klasse,
                                                        BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                                    };
                                                    tVirtKlasPosibility = tEntr;
                                                    tNeedVirtualKlassenZeile_1 = true;
                                                    tr.Virtualized = true;
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                        }
                        tStandardZugVirtuelleZeile_1.ZugNummern.push(tVirtZugPossibleEntry);
                        tStandardKlasseVirtuelleZeile_1.KlassenNummern.push(tVirtKlasPosibility);
                    });
                    if (tNeedVirtualZugZeile_1) {
                        console.log("VI:", tNeedVirtualZugZeile_1, tStandardZugVirtuelleZeile_1);
                        tResult.Zeilen.splice(iz, 0, tStandardZugVirtuelleZeile_1);
                        iz++;
                    }
                    if (tNeedVirtualKlassenZeile_1) {
                        console.log("VI:", tNeedVirtualKlassenZeile_1, tStandardKlasseVirtuelleZeile_1);
                        tResult.Zeilen.splice(iz, 0, tStandardKlasseVirtuelleZeile_1);
                        iz++;
                    }
                    break;
                case ParsedTypes.ZEILE_T.ZUGNR:
                    console.log(xzeile);
                    break;
            }
            iz++;
        };
        var xzeile, zeile;
        while (iz < tResult.Zeilen.length) {
            _loop_1();
        }
        return tResult;
    }
    exports_10("virtualizeZugNrZugKlasse", virtualizeZugNrZugKlasse);
    function virtualizePfeil(tInput) {
        console.log("--- TODO VIRTUALIZE Pfeil -------");
        var tResult = JSON.parse(JSON.stringify(tInput));
        return tResult;
    }
    exports_10("virtualizePfeil", virtualizePfeil);
    function berechneZeiten2(tInput) {
        console.log("--- VIRTUALIZE ZugNr, ZugKlasse -------");
        var tResult = JSON.parse(JSON.stringify(tInput));
        tResult.Zeilen.forEach(function (zei) {
            switch (zei.kind) {
                case ParsedTypes.ZEILE_T.ANSCHLUSS_ZUBRINGER_AB:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_ZUBRINGER_IN:
                case ParsedTypes.ZEILE_T.NORMAL:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_WEITER_AB:
                case ParsedTypes.ZEILE_T.ANSCHLUSS_WEITER_IN:
                    var tNachmittag_1 = false;
                    var tLast_1 = -1;
                    zei.Zeiteintraege.forEach(function (i) {
                        switch (i.kind) {
                            case BLOCK_T.ZUG_NR_WERT:
                            case BLOCK_T.LEER:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.DICKERSTRICH:
                            case BLOCK_T.KEINHALT:
                            case BLOCK_T.ERROR:
                            case BLOCK_T.ANKUNFT:
                            case BLOCK_T.BLOCK:
                            case BLOCK_T.KLASSEN_WERT:
                                break;
                            case BLOCK_T.ZEITEINTRAG:
                                switch (i.Zeit.kind) {
                                    case "ZEIT_ROH":
                                        if (tLast_1 == -1) {
                                        }
                                        else {
                                            if (i.Zeit.RohZeit < tLast_1) {
                                                tNachmittag_1 = true;
                                            }
                                        }
                                        tLast_1 = i.Zeit.RohZeit;
                                        i.Zeit = makeZ(i.Zeit.RohZeit, GesternHeuteMorgen.Heute, tNachmittag_1, ETimeValid.Berechnet24);
                                        break;
                                    case "ZEIT_24":
                                        if (i.Zeit.WelcherTag == GesternHeuteMorgen.Heute) {
                                            tLast_1 = (((i.Zeit.Stunde24 > 12) ? (i.Zeit.Stunde24 - 12) : i.Zeit.Stunde24) * 100) + i.Zeit.Minute24;
                                            tNachmittag_1 = i.Zeit.Stunde24 > 12;
                                        }
                                        break;
                                    default:
                                        SaxBaseTypes_5.assertNever(i.Zeit);
                                }
                                break;
                            default:
                                SaxBaseTypes_5.assertNever(i);
                        }
                    });
                    break;
                case ParsedTypes.ZEILE_T.ZUGNR:
                case ParsedTypes.ZEILE_T.KLASSEN:
                    break;
                default:
                    SaxBaseTypes_5.assertNever(zei);
            }
        });
        return tResult;
    }
    exports_10("berechneZeiten2", berechneZeiten2);
    var ParsedTypes, SaxParser_2, SaxParsedTypes_4, SaxBaseTypes_5;
    return {
        setters: [
            function (ParsedTypes_1) {
                ParsedTypes = ParsedTypes_1;
                SaxParsedTypes_4 = ParsedTypes_1;
            },
            function (SaxParser_2_1) {
                SaxParser_2 = SaxParser_2_1;
            },
            function (SaxBaseTypes_5_1) {
                SaxBaseTypes_5 = SaxBaseTypes_5_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("SaxApp", ["SaxParser", "SaxValidator", "SaxRenderer", "SaxInput", "SaxZuglaufAuslesen", "SaxVirtualTable"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Parser, SaxValidator, SaxRender, SaxSchedules, SaxZuglaufAuslesen_1, SaxVirtualTable_1, Sched;
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
                exports_11({
                    "InputData": SaxSchedules_1["InputData"]
                });
            },
            function (SaxZuglaufAuslesen_1_1) {
                SaxZuglaufAuslesen_1 = SaxZuglaufAuslesen_1_1;
            },
            function (SaxVirtualTable_1_1) {
                SaxVirtualTable_1 = SaxVirtualTable_1_1;
            }
        ],
        execute: function () {
            Sched = (function () {
                function Sched() {
                }
                Sched.do = function (input) {
                    console.log("test");
                    var inp = Parser.Importer.kindifyZZZ(input);
                    var inp2 = Parser.Importer.kindifynumbers(inp);
                    var tResult = Parser.Importer.parse(inp2);
                    console.log("parse done: ", JSON.stringify(tResult));
                    SaxValidator.Validator.validate_mergeBlocks(tResult);
                    SaxValidator.Validator.validate_addZusatzinfobase(tResult);
                    var tVirtualTable = SaxVirtualTable_1.makeTableVirtual(tResult);
                    var tVirtualTablezugkla = SaxVirtualTable_1.berechneZeiten2(SaxVirtualTable_1.virtualizeZugNrZugKlasse(tVirtualTable));
                    var t = document.getElementById("testdiv");
                    if (t != null) {
                        SaxRender.Renderer.renderTable(t, tVirtualTablezugkla);
                    }
                    return tResult;
                };
                Sched.doAllLogged = function () {
                    var tResults = [];
                    SaxSchedules.InputData.einzelplaene.forEach(function (input, idx) {
                        console.log("-----------------input------ " + idx + " " + input.route1900 + " " + input.seite + " ------------------------------");
                        tResults.push({ "input": idx, val: input });
                        var inp = Parser.Importer.kindifyZZZ(input);
                        var inp2 = Parser.Importer.kindifynumbers(inp);
                        var tResult = Parser.Importer.parse(inp2);
                        tResults.push({ "parsed": idx, val: tResult });
                        SaxValidator.Validator.validate_mergeBlocks(tResult);
                        tResults.push({ "merged": idx, val: tResult });
                        SaxValidator.Validator.validate_addZusatzinfobase(tResult);
                        tResults.push({ "zusatzed": idx, val: tResult });
                        try {
                            var tZugl = SaxZuglaufAuslesen_1.ZugExtraktor.findeZuglaeufe(tResult);
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
            exports_11("Sched", Sched);
        }
    };
});
//# sourceMappingURL=Sched.js.map