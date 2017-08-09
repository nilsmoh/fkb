// experimenteller richtungsfahrplan
// schwach getypt

import {SingleDirectionScheduleInput,  /*sa, sb,sc,sd,se,sf,sg,sh,si,sk,sl,  */
     fern, fatdot,  /*wa,*/ pfeilstart, pfeilziel, global, Sachs, 
    /*k2b4,k1b3,k2b3,k3b4, _klassen, */ 
    passend, sonn_und_festtags, nur_werktags, headerlinks,  /*LE,*/
     WaltersdfHst, MittwMrkb, a510, s810, Z1967, Z1971, Z2045, Z2065, n822, m747, d1153, b355, s321, s550, s748, c510, s800
     ,s113 ,s710, s845 , s1058 /*,wx,sj,sp,sm*/ , ZW, SC,AN, CT, AU, LU, CN, JO, KA, x135, x150, a644,a659,a818,a754,b233,c937,
     Z1960,/*dick,*/ Z1991, Z1998, m149, cross,chooseown,nach9spalten
     ,nach10spalten4spalten, headerrechts, nach4spalten,nach6spalten,a858,nach5spalten2spalten,nach4spalten2spalten, 
    } from "./SaxInputTypes";

import { /*VERWEIS_T, TEXTORT_T*/ } from "./SaxParsedTypes";    

export class InputData {
        public static einzelplaene: SingleDirectionScheduleInput[] = [
 /*
/////  Seite 102
*/ 
{
                route1900: 99,
                seite: 102,
                caption: "Annaberg -- Aue -- Werdau",
                zeilen: [
                   
                     [_anschluss_aus,     CH,    _,    _,    _,   _,    _,    _,    _,    _, 639,    _, 902,    _,    _, 1212,    _,    _,    _, 242, 505,    _, 715, {ort:"Chemnitz",nr:85}],
                     [_zugnr        ,     zn, gnix, 1951, gnix, 1861, gnix, gnix, 1931, 1867, 1933, gnix, 1995, gnix, gnix, 1935, 1869, 1937,    _, 1997, 1939, 1871, 1999],
                     [_klassen,           kl, gnix, k2b4, gnix, k2b4, gnix, gnix, k2b4, k2b4, k2b4, gnix, k2b4, gnix, gnix, k2b4, k2b4, k2b3,    _, k2b4, k2b4, k2b3, k2b4],
                     [Annaberg    ,       ab,    _,    _,    _,    _,    _,    _,  605,    _, 918,    _, 1126,    _,    _, 226,    _, sg,    _, 607, 736,    _, 944],
                     [2.7, Buchholz,      ab,    _,    _,    _,    _,    _,    _,  613,    _, 930,    _, 1136,    _,    _, 237,    _, sg,    _, 619, 749,    _, 954, { nr: 85 }],
                     [8.6, WaltersdfHst,  ab,    _,    _,    _,    _,    _,    _,  630,    _, 947,    _, 1153,    _,    _, 256,    _, sg,    _, 636, 808,    _, 1011],
                     [Schlettau,          an,    _,    _,    _,    _,    _,    _,  635,    _, 952,    _, 1158,    _,    _, 301,    _, sg,    _, 641, 813,    _, 1016, { nr: "99b" }],
                     [9.9, Schlettau,     ab,    _,    _,    _,  525,    _,    _,  640, 853, 957,     _,    _,    _,    _, 306, 320, 610, Z1971,    _, 818, 830, _],
                     [18.3, Scheibenberg, ab,    _,    _,    _,  540,    _,    _,  651, 903, 1008,     _,    _,    _,    _, 317, 341, 621, k2b3,    _, 830, 840, _],
                     [20.8, MittwMrkb,    ab,    _,    _,    _,   se,    _,    _,  710, ank, 1027,     _,    _,    _,    _, 336, sf, 639, sh,    _, 848, ank, _],
                     [22.2, Raschau,      ab,    _,    _,    _,   se,    _,    _,  716,    _, 1033,    _,    _,    _,    _, 342, sf, 645, sh,    _, 854, sk, _],
                     [24.1, Grünstädtel,  an,    _,    _,    _,   se,    _,    _,  723,    _, 1040,    _,    _,    _,    _, 349, sf, 651, sh,    _, 901, sk, _],
                     [Grünstädtel       , ab,    _,    _,    _,   se,    _,    _,  724,   _, 1042,    _,Z2045, sb, sc, 354, sf, 652, sh, Z1967, 903, sk, Z2065, { nr: "99c" }],
                  [28.8, Schwarzenberg_Bf,an,    _,    _,    _,   se,    _,    _,  732,    _, 1050,    _, k2b4, sb, sc, 402, sf, 659, sh, k2b4, 911, sk, k2b4, { nr: "100a" }], //fritsche andere schreibung im plan:  "Schwarzenberg"
                     [Schwarzenberg_Bf,   ab,    _,  435,    _,   se,    _,    _,  739,    _, 1056,    _, 1256, sb, sc, 416, sf,    _, 649, 704, 916, sk, 1125],  //fritsche andere schreibung im plan:  "Schwarzenberg"
                     [29.3, Neuwelt,      ab,    _,  442,    _,   se,    _,    _,  746,    _, 1103,    _, kHlt, sb, sc, 423, sf,    _, 656, 711, 923, sk, 1132],
                     [31.2, Lauter,       ab,    _,  548,    _,   se,    _,    _,  752,    _, 1110,    _, 106, sb, sc, 429, sf,    _, 702, 717, 930, sk, 1138],
                     [37.3, Aue,          an,    _,  500,    _,   se,    _,    _,  804,    _, 1122,    _, 117, sb, sc, 441, sf,    _, 713, 728, 942, sk, 1150],
                     [_zugnr,             zn,    _, 1951,    _,    _,    _,    _, 1953,    _, 1959,    _,    _,    _,    _, 1865,    _,    _, 1971, 1967, 1969, sk, _],
                     [_klassen,           kl,    _, k2b4,    _,    _,    _,    _, k2b4,    _, k2b4,    _,    _,    _,    _, k2b4,    _,    _, k2b3, k2b4, k2b4, sk, _],
                     [Aue,                ab,    _,  507,    _,    _,    _,    _,  817,    _, 1141,    _, 118,    _,    _,   505,    _,    _,  715,  732, 1004, sk, _],
                     [41.6, Niederschlema ,an,    _,  516,    _,    _,    _,    _, 826,    _, 1150,    _, 126,    _,    _, 514,    _,    _, 723, 741, 1013,    _, _],
                     [_zugnr,               zn, 1978,    _, 2043,  205, 2051, 2053,   _, 2055,    _, 2057,    _, 2059, 2061,    _, 1975, 2047,    _,    _,    _,    _, _],
                     [_klassen,             kl, k2b4,    _, k2b4, k1b3, k2b4, k2b4,   _, k2b4,    _, k2b4,    _, k2b4, k2b4,    _, k3b4, k2b4,    _,    _,    _,    _, _],
                     [Niederschlema,      ab,   sl,  518,    _,    _,    _,    _, 830, sd, 1155,    _, 128,    _,    _, 517, si,    _, 724, 742, 1019,    _, _],
                     [47.4, Stein_Hartenstein ,ab,sl, 528,    _,    _,    _,    _, 840, sd, 1206,    _, 139,    _,    _, 527, si,    _, 734, 755, 1029,    _, _],
                     [Fährbrücke,             ab,sl, 538,    _,    _,    _,    _, 849, sd, 1216,    _, 148,    _,    _, 537, si,    _, 743, 804, 1038,    _, _],
                     [55.7, Wiesenburg,       ab,sl, 548,    _,    _,  717,    _, 900, sd, 1228,    _, 157,  319,    _, 547, si, 635, 752, 813, 1048,    _, _],
                     [Silberstrasse,      ab, sl, kHlt,    _,    _, 723,    _, kHlt, sd, kHlt,    _, 203, 325,    _, kHlt, si, 641, kHlt, kHlt, kHlt,    _, _],
                     [61.8, Wilkau_Bf,   ab, 445, 600, 631,    _, 731, 818, 912, 1042, 1242, 124, 212, 334, 443, 600, si, 650, 804, 826, 1102,    _,    _, { nr: 96 }],
                     [Cainsdorf,           ab, 452, 606, 637,    _, 736, 824, 917, 1048, 1247, 130, 217, 339, 448, 605, si, 655, 809, 831, 1108,    _, _],
                     [Schedewitz,          ab, 459, 612, 642,    _, 741, 829, 922, 1053, 1252, 135, 222, 344, 453, 610, si, 700, 814, 836, 1114,    _, _],
                     [67.2, Zwickau,       an, 505, 618, 649,    _, m747, 835, 928, 1059, 1258, 141, 228, 350, 459, 616, si, 706, 820, 842, 1120,    _,    _, { nr: 54 }],
                     [Zwickau,             ab, a510, 632, 656, n822,    _,    _, 948, d1153, 115,    _, 235, b355, c510, 620, 628, 710, 825, 908, 1150,    _,    _, { nrn: [54, 68] }],
                     [Lichtentanne,        ab, 520, kHlt, 707, kHlt, wa, wa, 958, 1204, 125,    _, 245, 406, 521, kHlt, 640, 720, 836, 918, 1200,    _, _],
                     [76.8,Werdau,         an, 530,  647, 716, 835, wa, wa, 1008, 1212, 135,    _, 254, 416, 529, 635, 655, 730, 845, 925, 1208,    _,    _, { nr: 59 }],
                     [_anschluss_nach_in, LE, 749, s810, 925, 1019,    _,    _, 1232,    _, 341,    _, s550, 652, s748, s800,    _, 957,    _, 1205, s321,    _, _,{ort:"Leipzig", nr:56}]
                
                 ],
                ZellenVerweise: [

                    //fern == steht irgendwo wo es nicht dazugehoert
                    //{
                    //    cellkey: "a510",
                    //    zugnr: 2041,
                    //    klassen: k2b4,
                    //    typ: fern,
                    //    marker: "*" // wa
                    //},
                    {
					    "Verweistyp" : {
						    "kind" : VERWEIS_T.FERN,
						    "ReferenzKey" : "a",
						    "OpticalMarker" : "*"
                        }, 
                        "TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                        Inhalt:
                            {
                                q: " *Zug2041 II-IV",
                                BLOCK: { Standard: { scope: Zug, ZugNr: 2041, Klasse: Kl2bis4 } }
                        }
                    }
                    // , {
                    //     cellkey: "b355",
                    //     zugnr: 1961,
                    //     typ: fern,
                    //     marker: fatdot// sb
                    ,{
                    	"Verweistyp" : {
						    "kind" : VERWEIS_T.FERN,
						    "ReferenzKey" : "b",
						    "OpticalMarker" : "_markerAussehen_fatdot"
					    },
						"TextOrt" : {		"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                        Inhalt:{
                            q: "(rund) Zug 1961",
                            BLOCK: { Standard: { scope: Zug, ZugNr: 1961 } }
                        }

                    }





                    // }, {
                    //     cellkey: "c510",  //sc
                    //     zugnr: 1963,
                    //     typ: fern,
                    //     marker: "?"
                    // },
                    ,{
	                "Verweistyp" : {
						"kind" : VERWEIS_T.FERN,
						"ReferenzKey" : "c",
						"OpticalMarker" : "?"
					},
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:{
                        q: "? Zug 1963",
                        BLOCK: { Standard: { scope: Zug, ZugNr: 1963 } }
                    }}



                    // {
                    //     cellkey: "d1153",  //sd
                    //     zugnr: 1957,
                    //     typ: fern,
                    //     marker: "!"
                    // },

                ,{
                    "Verweistyp" : {
						"kind" : VERWEIS_T.FERN,
						"ReferenzKey" : "d",
						"OpticalMarker" : "!"
					},
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN		},
                    Inhalt:{
                        q: "! Zug 1957",
                        BLOCK: { Standard: { scope: Zug, ZugNr: 1957 } }
                    }}

                    // {
                    //     // passend == steht direkt in der zugspalte
                    //     // e: type: passend, wert: nach Stollberg
                    //     key: "e", nach: "Stollberg", typ: passend
                    // }, 
                    ,{
                    "Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "e",
						"Scope" : 1
					},
					
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:
                     {
                         q: "nach Stollberg", //verlasse KBS
                        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: "Stollberg" } }
                    }}
                    
                    //{
                    //     key: "f", nach: "Stollberg", typ: passend,
                    ,{
                    "Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "f",
						"Scope" : 1
					},
					
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:
                     {
                         q: "nach Stollberg", //verlasse KBS
                        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: "Stollberg" } }
                    }}

                    // }, {
                    //     key: "g",
                    //     typ: passend,
                    //     tage: sonn_und_festtags
                    // },

                    ,{
					"Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "g",
						"Scope" : 1
					},
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN			},
                    Inhalt: {
                        q: "Sonn und Festtags", //passend
                        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                    }}


                    // {
                    //     key: "h",
                    //     typ: passend,
                    //     tage: sonn_und_festtags
                    // },
                      ,{
					"Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "h",
						"Scope" : 1
					},
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN			},
                    Inhalt: {
                        q: "Sonn und Festtags", //passend
                        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                    }}
                    // {
                    //     key: "i",
                    //     typ: passend,
                    //     tage: nur_werktags
                    // },
                    ,{
					"Verweistyp" : {
                        "kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "i",
						"Scope" : 1
					},
					"TextOrt" : {		"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:{
                        q: "Nur Werktags.", //passend
                        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
                    }}
                    // {
                    //     key: "k",
                    //     typ: passend,
                    //     tage: sonn_und_festtags
                    // },
                      ,{
					"Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "k",
						"Scope" : 1
					},
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN			},
                    Inhalt: {
                        q: "Sonn und Festtags", //passend
                        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
                    }}

                    // {
                    //     key: "l",
                    //     typ: passend,
                    //     tage: nur_werktags

                    ,{
					"Verweistyp" : {
						"kind" : VERWEIS_T.PASSEND,
						"ReferenzKey" : "l",
						"Scope" : 1
					},
					
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                     Inhalt:{
                        q: "Nur Werktags.", //passend
                        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
                    }}
                    // },
                    // // pfeil zwischen 2 kästchen
                    // {
                    //     cellkey: "m747", //anschluss wegen neuer zugnummer nicht durchgehend?
                    //     typ: pfeilstart,
                    //     destcellkey: "n822"
                    // },

                    , {
					"Verweistyp" : {
						"kind" : VERWEIS_T.FERN,
						"ReferenzKey" : "m",
						"OpticalMarker" : ""
					},
					
					"TextOrt" : {		"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:{
                        q: "Pfeil", //Anschluss wird erreicht
                        BLOCK: { Standard: { scope: Zelle, PfeilStart: true } }
                    }}
                    // {
                    //     cellkey: "n822",
                    //     typ: pfeilziel,
                    //     srccellkey: "m747"

                , {
					"Verweistyp" : {
						"kind" : VERWEIS_T.FERN,
						"ReferenzKey" : "n",
						"OpticalMarker" : ""
					},
					
					"TextOrt" : {	"kind" : TEXTORT_T.NICHTANGEGEBEN	},
                    Inhalt:{
                        q: "Pfeil", //Anschluss wird erreicht
                        BLOCK: { Standard: { scope: Zelle, PfeilZiel: true } }
                 }}

                    // },
                    // {
                    //     typ: global,
                    //     bahn: Sachs,
                    //     verweisort: headerlinks
                    // }
                    , {
					"Verweistyp" : {	"kind" : VERWEIS_T.GLOBAL_DEFAULT	},
					"TextOrt" : {		"kind" : TEXTORT_T.LINKSVONHEADER	},
                    Inhalt:{
                        q: "Saechs Staatsb", //global   
                        BLOCK: { Standard: { scope: Global, Verwaltung: "saechs" } }
                    }}
                ]

            }

/*
 
            ,

            // seite 103

            {
                todo: "fehlende sa-sl texte/bedeutungen",
                route1900: 99,
                seite: 103,
                caption: "Werdau--Aue--Annaberg",
                "zeilen": [
                    [_anschluss_aus, LE, 1140, s113, _, _, 500, s710, _, s845, _, _, s1058, _, 108, _, _, _, 350, _, s748, 720, _, { ort: "Leipzig", nr: 56 }],
                    [_zugnr,         zn, 1952, 2042, 2052, 1954, 1956, 1958, 2056, 2044, 2058, _, 1962, "1962a", 1964, 1966, 2062, 2046, 1968, 1976, 2048, 1972, 1970],
                    [wx,             kl, k2b4, k2b4, k2b4, k2b3, k2b4, k2b4, k2b4, k2b4, k2b4, _, k2b4, k2b4, k2b4, k2b4, k2b4, k2b4, k2b4, k3b4, k2b4, k2b4, k2b4],
                    ["Werdau",       ab, x135, 545, _, sp, 726, 834, _, 1005, _, _, 1222, 126, 311, 426, _, 504, 622, 736, 912, 940, 1029],
                    ["Lichtentanne", ab, kHlt, 556, _, sp, 739, kHlt, _, 1017, _, _, 1233, 135, 320, kHlt, _, 515, 635, 748, 923, 951, 1039],
                    [9.6, "Zwickau", an, x150, 605, _, sp, 749, 848, _, 1026, _, _, 1243, 142, 327, 444, _, 524, 645, 757, 932, 1000, 1048, { nr: 54 }],
                    ["Zwickau", ab, 515, 608, 635, 644, a754, 858, 1018, 1114, 1220, _, 123, b233, 335, _, 422, 558, 701, 759, c937, 1053, sc, { nrn: [54, 68] }],
                    ["Schedewitz", ab, 522, 615, 642, 653, 801, 905, 1025, 1121, 1227, _, 131, 240, 342, _, 429, 605, 709, 807, 944, 1059, sc],
                    ["Cainsdorf", ab, 528, 620, 647, 659, 806, 911, 1030, 1126, 1232, _, 137, 245, 348, _, 434, 610, 716, 814, 949, 1104, sc],
                    [15.2, "Wilkau", ab, 535, 625, 652, 706, 811, 919, 1035, 1131, 1237, _, 145, 250, 355, _, 438, 615, 723, 819, 955, 1111, sc, { nr: 96 }],
                    ["Silberstrasse", ab, kHlt, Ank, 701, kHlt, Ank, kHlt, Ank, 1140, Ank, _, kHlt, 259, kHlt, _, Ank, 623, kHlt, Ank, 1004, kHlt, sc],
                    [21.1, "Wiesenburg", ab, 550, _, 706, 719, sa, 932, _, 1146, _, _, 159, 304, 408, _, _, 628, 735, sf, 1010, 1122, sc],
                    ["Fährbrücke", ab, 600, _, Ank, 729, sa, 942, _, 1155, _, _, 210, ank, 418, _, _, Ank, 744, sf, 1019, 1132, sc],
                    [29.4, "Stein-Hartenstein", ab, 610, _, _, 739, sa, 953, Z1960, 1204, _, _, 221, sb, 428, _, _, _, 754, sf, 1028, 1141, sc],
                    [35.2, "Niederschlema", an, 621, _, _, 749, sa, 1004, k2b4, 1214, _, _, 232, sb, 439, _, _, _, 804, sf, 1038, 1151, _],
                    ["Niederschlema", ab, 625, _, _, 754, sa, 1008, 1110, 1216, _, _, 236, sb, 443, _, _, _, 808, sf, 1039, 1155, _, { nr: "99a" }],
                    [39.5, "Aue", an, 635, _, _, 805, sa, 1017, 1118, 1224, _, _, 246, sb, 453, _, _, _, 818, sf, 1047, 1203, _, { nr: 94 }],
                    [_zugnr, zn, 1932, gnix, 1862, gnix, sa, 1934, gnix, 2044, 1936, 1868, 1938, sb, 1964, 5658, 1870, gnix, 1940, gnix, 2064, 1972, 1872],
                    [_klassen, kl, k2b4, gnix, k2b4, gnix, sa, k2b4, gnix, k2b4, k2b3, k2b4, k2b4, sb, k2b4, k2b3, k2b3, gnix, k2b4, gnix, k2b4, k2b4, k2b4],
                    ["Aue", ab, 642, _, _, 816, sa, 1025, _, 1225, sh, sj, 302, sb, 501, _, sk, _, 833, _, 1050, 1208, sl, { nr: 94 }],
                    [45.6, "Lauter", ab, 655, _, _, 829, sa, 1037, _, 1237, sh, sj, 315, sb, 514, _, sk, _, 846, _, 1103, 1222, sl],
                    [47.5, "Neuwelt", ab, 701, _, _, 835, sa, 1044, _, kHlt, sh, sj, 322, sb, 520, _, sk, _, 853, _, 1109, 1228, sl],
                    [50.0, "Schwarzenberg", an, 708, _, _, 842, sa, 1052, _, 1246, sh, sj, 330, sb, 527, _, sk, _, 901, _, 1117, 1235, sl],
                    ["Schwarzenberg", ab, 714, _, _, _, sa, 1058, _, _, 1251, sj, 336, sb, _, 532, sk, _, 911, _, _, _, sl, { nr: "110a" }],
                    [52.7, "Gruenstaedtel", an, 722, _, _, _, sa, 1106, _, _, 1258, sj, 344, sb, _, 540, sk, _, 919, _, _, _, sl],
                    ["Gruenstaedtel", ab, 723, _, _, _, _, 1107, _, _, 1259, sj, 349, sb, _, 541, sk, _, 921, _, _, _, sl, { nr: "99c" }],
                    [54.6, "Raschau", ab, 731, _, _, _, _, 1115, _, _, 105, sj, 358, sb, _, 549, sk, _, 929, _, _, _, sl],
                    [56.0, "Mittweida", ab, 737, _, _, _, dick, 1121, _, _, 111, gnix, 406, sb, _, 557, sk, dick, 937, _, _, _, sl],
                    [63.5, "Scheibenberg", ab, 800, _, 830, _, Z1991, 1145, _, _, 128, 132, 431, _, _, 630, 750, Z1998, 1002, _, _, _, 1055, { nr: 100 }],
                    [68.9, "Schlettau", an, 810, _, 840, _, k2b4, 1155, _, _, Ank, 142, 442, _, _, 642, 800, k2b4, 1012, _, _, _, 1105],
                    ["Schlettau", ab, 818, _, _, _, 955, 1200, _, _, sm, m149, 447, _, _, 654, _, 815, 1017, _, _, _, _, { nr: "99b" }],
                    [68.2, "Waltersdorf Hst", ab, 824, _, _, _, 1001, 1206, _, _, sm, 155, 453, _, _, 700, _, 821, 1023, _, _, _, _],
                    [74.1, "Buchholz",        ab, 843, _, _, _, 1020, 1225, _, _, sm, 214, 516, _, _, 724, _, 840, 1044, _, _, _, _, { nr: 85 }],
                    [76.8, "Annaberg",        an, 850, _, _, _, 1027, 1232, _, _, sm, 222, 524, _, _, 736, _, 847, 1052, _, _, _, _],
                    [_anschluss_nach_in, CH, 1133, _, _, _, 205, _, _, _, _, 513, 829, _, _, 1202, _, 1202, _, _, _, _, _, { ort: "Chemnitz", nr: 85 }]
                ],
                ZellenVerweise: [
                    {
                        key: "x",
                        zugnr: 218,
                        klassen: k1b3,
                        typ: fern,
                        marker: "*"
                    },
                    {
                        key: "p",
                        typ: passend,
                        tage: sonn_und_festtags
                    },

                    {
                        cellkey: "c937",  //sd
                        ab: "Zwickau",
                        zugnr: 2064,
                        klassen: k2b4,
                        typ: fern,
                        marker: cross
                    },
                    //sd ab Zwickau _zugnr 2064 k2b4
                    // falsch se ab zwickau _zugnr 2054 k2b4
                    {
                        cellkey: "a754",  //se
                        ab: "Zwickau",
                        zugnr: 2054,
                        klassen: k2b4,
                        typ: fern,
                        marker: "!"
                    },
                    {
                        key: "f",  //sf
                        typ: passend,
                        tage: nur_werktags
                    },

                    {
                        cellkey: "b233",  //se
                        ab: "Zwickau",
                        zugnr: 2060,
                        klassen: k2b4,
                        typ: fern,
                        marker: fatdot
                    },

                    {
                        key: "h",  //sh
                        typ: passend,
                        tage: sonn_und_festtags
                    },

                    {
                        key: "j", von: "Stollberg", typ: passend,  //sj


                    },
                    {
                        key: "k",  //sk
                        typ: passend,
                        tage: sonn_und_festtags
                    },

                    {
                        key: "l", von: "Stollberg", typ: passend,  //sl


                    },

                    {
                        cellkey: "m149",
                        zugnr: 1996,
                        typ: fern,
                        marker: chooseown //kein marker im original, aber geschweifte klammern nicht darstellbar
                    },
                    {
                        typ: global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    }
                    
                    ]


            }
                
            ,

            /// Seite 104


            {
                route1900: "99a",
                seite: 104,

                //klassen: k2b4,
                caption: "Schneeberg-Neustädtel--Niederschlema",
                //bahn: Sachs,
                zeilen: [
                    [_zugnr, zn, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017],
                    ["Schneeberg-Neust.", ab, 449, 753, 914, 1040, 100, 409, 710, 934, 1119],
                    [3.1, "Oberschlema", ab, 504, 810, 932, 1057, 115, 426, 725, 949, 1134, { fk: [20, 15, 25, 20] }],
                    [5.2, "Niederschlema", an, 513, 819, 941, 1106, 124, 435, 734, 958, 1143, { nr: 99, fk: [35, 25, 45, 30] }],  //fk ist fahrkartenpreis
                    [_anschluss_nach_in, ZW, 618, 928, nix, 1258, 228, 616, 842, 1120, nix, { ort: "Zwickau", fk: [190, 130, 250, 170] }],
                    [_anschluss_nach_in, SC, 708, nix, 1052, 1246, 330, 527, 901, 1117, 1235, { ort: "Schwarzenberg", fk: [120, 80, 160, 110] }]
                ],
                ZellenVerweise:[
                    {
                        typ: global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: nach9spalten   //nach 9spalten
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach10spalten4spalten
                    }
                    ]
            }
            ,
            {
                route1900: "99a",
                seite: 104,

                klassen: k2b4,
                caption: "Niederschlema -- Schneeberg-Neustädtel",
                zeilen: [
                    [_anschluss_aus, ZW, 515, a644, 858, 1114, 123, 335, 701, 937, 1053, { ort: "Zwickau" }],
                    [_anschluss_aus, SC, 435, 739, nix, 1056, 1256, 416, 704, 916, nix, { ort: "Schwarzenberg" }],
                    [_zugnr, zn, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, { fkab: SC }],
                    ["Niederschlema", ab, 628, 834, 1010, 1219, 242, 519, 819, 1044, 1157, { fk: [90, 60, 120, 80] }],
                    ["Oberschlema", ab, 639, 845, 1021, 1229, 253, 530, 829, 1054, 1207, { fk: [105, 70, 140, 95] }],
                    ["Schneeberg-Neust.", an, 653, 859, 1035, 1243, 307, 544, 843, 1108, 1221, { fk: [120, 80, 160, 110] }]
                ],
                ZellenVerweise: [
                    {
                        key: "a",
                        tage: sonn_und_festtags,
                        typ: fern,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: nach9spalten   //nach 9spalten
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach10spalten4spalten
                    }
                ]

            }
            ,
            {
                "route1900": "99b",
                caption: "Obercrottendorf--Schlettau",
                seite: 104,
                //klassen: k2b4,
                zeilen: [
                    [_zugnr, zn, 1982, 1984, 1986, 1988],
                    ["Obercrottendorf", ab, 725, 908, 106, 731],
                    [1.3, "Mittelcrottendorf", ab, 734, 917, 114, 738, { fk: [15, 10] }],
                    [3.9, "Waltersdorf Haltept.", ab, 746, 929, 126, 750, { fk: [25, 20] }],
                    [5.2, "Waltersdorf Haltest.", ab, 754, 937, 133, 758, { fk: [35, 25] }],
                    [6.5, "Schlettau", an, 800, 943, 139, 804, { fk: [40, 30] }],
                    [_anschluss_nach_in, AN, 850, 1027, 222, 847, { ort: "Annaberg", nr: 99, fk: [85, 60] }]
                ],
                ZellenVerweise: [
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: headerrechts
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach4spalten
                    }
                ]
            }
            ,
            {
                route1900: "99b",
                caption: "Schlettau -- Obercrottendorf",
                seite: 104,
                //klassen: k2b4,
                zeilen: [
                    [_anschluss_aus, AN, 605, nix, 1126, 607, { ort: "Annaberg", nr: 99 }],
                    [_zugnr, zn, 1981, 1983, 1985, 1987],
                    ["Schlettau", ab, 638, 826, 1206, 649, { fkab: "Schlettau" }],
                    [1.3, "Waltersdorf Haltest.", ab, 646, 833, 1214, 656, { fk: [15, 10] }],
                    [2.6, "Waltersdorf Haltept.", ab, 653, 840, 1221, 703, { fk: [20, 15] }],
                    [5.2, "Mittelcrottendorf", ab, 708, 853, 1234, 715, { fk: [35, 25] }],
                    [6.5, "Obercrottendorf", an, 714, 859, 1240, 721, { fk: [40, 30] }]
                ],
                ZellenVerweise: [
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: headerrechts
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach4spalten
                    }
                ]
            }
            ,
            {
                route1900: "99c",
                caption: "Oberrittersgrün -- Grünstädtel",
                seite: 104,
                //klassen: k2b3,
                zeilen: [
                    [_zugnr,                  zn, 3101, 3103, 3105, 3107, 3109, sa],
                    ["Oberrittersgrün",       ab,  623,  954,  249,  455,  811, sa],
                    [2.2, "Unterrittersgrün", ab,  632, 1003,  258,  504,  820, sa],
                    [3.0, "Oberglobenstein",  ab,  637, 1008,  303,  509,  825, sa],
                    [4.0, "Niederglobenstein",ab,  643, 1014,  309,  514,  831, sa],
                    [5.8, "Siegelhof",        ab,  652, 1023,  318,  523,  840, sa],
                    [7.0, "Pöhla",            ab,  701, 1031,  326,  530,  847, sa],
                    [9.4, "Grünstädtel",      an,  708, 1038,  333,  537,  854, sa],
                    [_anschluss_nach_in,      SC,  732, 1050,  402, a659,  911, sa, { ort: "Schwarzenberg", nr: 99 }]
                ], ZellenVerweise: [
                    {
                        key: "a",  //sh
                        typ: fern,
                        tage: sonn_und_festtags,
                        marker: "*"
                    },
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b3,
                        verweisort: headerrechts
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach6spalten
                    }
                    
                    ]

            }
            ,
            {
                route1900: "99c",
                seite: 104,
                caption: "Grünstädtel-- Oberrittersgrün",
                //klassen: k2b3,
                zeilen: [
                    [_anschluss_aus, SC, 714, 1058, 336, 532, 911, { ort: "Schwarzenberg", nr: 99 }],
                    [_zugnr, zn, 3102, 3104, 3106, 3108, 3110],
                    ["Grünstädtel", ab, 735, 1110, 355, 605, 922, { fkab: "Grünstädtel" }],
                    [2.4, "Pöhla", ab, 747, 1121, 405, 617, 932, { fk: [15, 10] }],
                    [3.6, "Siegelhof", ab, 756, 1128, 412, 626, 939, { fk: [25, 15] }],
                    [5.4, "Niederglobenstein", ab, 805, 1137, 421, 635, 948, { fk: [35, 25] }],
                    [6.4, "Oberglobenstein", ab, 811, 1143, 427, 641, 954, { fk: [45, 30] }],
                    [7.2, "Unterrittersgrün", ab, 816, 1148, 432, 646, 959, { fk: [45, 30] }],
                    [9.4, "Oberrittersgrün", ab, 824, 1156, 440, 654, 1007, { fk: [60, 40] }]
                ],
                 ZellenVerweise: [
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b3,
                        verweisort: headerrechts
                    }
                    
                    ]
            }
            ,
            // SEITE 105
            {
                route1900: "100",
                caption: "(Annaberg)--Scheibenberg - Zwoenitz - Stollberg hin",

                //klassen: k2b4,
                seite: 105,
                zeilen: [
                    [_anschluss_aus, AN, nix, nix, 918, 226, 736, sa, { ort: "Annaberg", nr: 99 }],
                    [_anschluss_aus, SC, 525, nix, 957, 320, a818, sa, { ort: "Schlettau", nr: 99 }],
                    [_zugnr, zn, 1861, 1865, 1867, 1869, 1871, sa],
                    ["Scheibenberg", ab, 540, nix, 1018, 341, 845, sa, { fkab: "Scheibenberg" }],
                    ["Hermannsdorf", ab, 553, nix, 1032, 356, 859, sa, { fk: [30, 20, 40, 30] }],
                    ["Elterlein", ab, 607, nix, 1046, 412, 913, sa, { fk: [50, 35, 65, 45] }],
                    ["Grünhain", ab, 627, nix, 1105, 433, 931, sa, { fk: [85, 55, 110, 75] }],
                    ["Beierfeld", ab, 635, nix, 1113, 443, 939, sa, { fk: [95, 65, 125, 85] }],
                    ["Bernsbach", ab, 648, nix, 1127, 502, 952, sa, { fk: [110, 75, 150, 100] }],
                    ["Zwönitz", an, 709, nix, 1148, 523, 1013, sa, { fk: [170, 110, 220, 150] }],
                    [_anschluss_nach_in, CT, 1015, nix, 118, 702, 1140, sa, { ort: "Chemnitz via Thalheim", nr: 94, fk: [380, 260, 510, 340] }], //zwoenitz ab 858, 1015 is ankunftszeit in C
                    [_anschluss_aus, AU, 511, 821, 1126, 500, 953, sa, { ort: "Aue", nr: 94 }],                    //abfahrt aue 511
                    ["Zwönitz", ab, 728, 1000, 1208, 540, 1032, sa],
                    ["Affalter", ab, 744, 1013, 1224, 552, 1044, sa],
                    ["Oberdorf-Beutha", ab, 800, 1027, 1241, 605, 1058, sa],
                    ["Stollberg", an, 815, 1042, 1256, 620, 1113, sa, { fk: [260, 180, 350, 230] }],
                    [_anschluss_nach_in, LU, 852, 1216, 258, nix, nix, sa, { ort: "Lugau", nr: 83 }],
                    [_anschluss_nach_in, CN, 1029, nix, 223, 816, nix, sa, { ort: "Chemnitz ü. Neu.", nr: 95 }]

                ], ZellenVerweise: [

                    {
                        key: "a",
                        typ: "Zeitaenderung",
                        sonnundfeiertagzeit: 830,
                        marker: "*"
                    },
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: headerrechts
                    }
                    
                ]
            }
            ,
            {
                route1900: 100,
                caption: "Stollberg -- Zwoenitz -- Scheibenberg -- (Anaberg) Rueck",
                seite: 105,
                //klassen: k2b4,
                zeilen: [
                    [_anschluss_aus, CH, nix, 533, 908, 105, 648, { ort: "Chemnitz", via: "neuk", nr: 95 }],    //d.h. Chemnitz ueber Neuk.
                    [_anschluss_aus, LU, 422, 702, nix, 148, 426, { ort: "Lugau", nr: 83 }],
                    [_zugnr, zn, 1862, 1866, 1868, 1870, 1872],
                    ["Stollberg", ab, 455, 900, 1100, 325, 830],
                    [6.5, "Oberdorf-Beutha", ab, 514, 916, 1116, 344, 845],
                    [11.7, "Affalter", ab, 531, 929, 1130, 401, 857],
                    [16.6, "Zwönitz", an, 543, 941, 1142, 413, 909],
                    [_anschluss_nach_in, AU, 635, 1020, 201, 453, 940, { ort: "Aue", nr: 94 }],
                    [_anschluss_nach_in, CH, 444, nix, 928, 303, 750, { ort: "Chemnitz", via: "Thalheim", nr: 94 }],
                    ["Zwönitz", ab, 620, nix, 1205, 440, 925],
                    [24.5, "Bernsbach", ab, 645, nix, 1227, 505, 949],
                    [27.4, "Beierfeld", ab, 656, nix, 1237, 516, 1000],
                    [29.3, "Grünhain", ab, 706, nix, 1247, 527, 1009],
                    [34.6, "Elterlein", ab, 725, nix, 103, 547, 1027],
                    [38.0, "Hermannsdorf", ab, 736, nix, 114, 558, 1038],
                    [42.7, "Scheibenberg", an, 749, nix, 127, 611, 1051],
                    [_anschluss_nach_in, SC, 810, nix, 142, 642, 1105, { ort: "Schlettau", nr: 99 }],
                    [_anschluss_nach_in, AN, 850, nix, 222, 736, nix, { ort: "Annaberg", nr: 99 }]
                ],
                ZellenVerweise:[
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b4,
                        verweisort: headerrechts
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach5spalten2spalten
                    }
                    ]
            }
            ,  {
                route1900: "100a",
                seite:105,
               caption:"Schwarzenberg -- Johanngeorgenstadt hin",
               zeilen:[
                   [_anschluss_aus, ZW,515,a858,335,701,{ort:"Zwickau", nr:99, lfd:1}],                      //erstmal als annahme, soll der validierer dann als problem feststellen !!!
                   [_anschluss_aus, AU,642,1025,501,833,{ort:"Aue", nr:99, lfd:1}],                        
                   [_anschluss_aus, AN,605,918,226,736,{ort:"Annaberg",nr:99,lfd:1}],                    
                   [_zugnr,         zn,3112,3114,3116,3118],
                   ["Schwarzenberg",     ab,740,1115,545,923],
                   [1.5, "Schwarzenberg Hltp",ab,748,1123,554,931                      ,{fk:[ 30,20]}],
                   [3.1 ,"Erla"              ,ab,755,1130,601,938                      ,{fk:[ 30,20]}],
                   [6.7 ,"Antonsthal"        ,ab,807,1142,613,949                      ,{fk:[ 50,30]}],
                   [11.3,"Breitenhof"        ,ab,818,1153,624,1000                     ,{fk:[ 70,50]}],
                   [13.2,"Erlabrunn",                            ab, 827,1202, 633,1009,{fk:[ 90,60]}],
                   [17.3,"Johanngeorgenstadt",                   an, 838,1213, 645,1020,{fk:[110,80]}],
                   [_anschluss_nach_start,  JO, 920,1235, 733,   _,{ort:"Johanngeorgenstadt",NACH:"Karlsbad B.E.B.", lfd:2}],  //lfd um anschlusszeilen zusammenzufassen
                   [_anschluss_nach_in,     KA,1124, 247, 945,   _,{fk:[430,230], ort:"Karlsbad B.E.B.", lfd:2}]

                   
                   ],
                ZellenVerweise:[
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b3,
                        verweisort: headerrechts
                    },
                    {
                        typ:global,
                        verweisort: nach4spalten2spalten
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach4spalten2spalten
                    }
                    ]
            
            
            
            },
            {
                route1900: "100a",
                seite: 105,
                //klassen: k2b3,
                todo: "fahrpreise,direkterwagenwerdaukarlsbad rueckrichtung",
                caption: "Schwarzenberg - johangeorgenstadt zurueck",
                zeilen: [
                    [_anschluss_aus, KA, nix, 700, 1228, 506, { ort: "Karlsbad", nr: "108d" }],
                    [_anschluss_aus_ziel, JO, nix, 919, 245, 722, { ort: "Johangeorgenstadt", FROM: KA }],
                    [_zugnr, zn, 3111, 3113, 3115, 3117],
                    ["Johanngeorgenstadt", an, 608, 946, 315, 759],
                    ["Erlabrunn", ab, 619, 957, 326, 810],
                    ["Breitenhof", ab, 628, 1006, 335, 819],
                    ["Antonsthal", ab, 638, 1016, 345, 829],
                    ["Erla", ab, 649, 1027, 356, 840],
                    ["Schwarzenberg Hltp.", ab, 655, 1033, 402, 846],
                    ["Schwarzenberg Bf.", ab, 703, 1041, 410, 854],
                    [_anschluss_nach_in, AU, 804, 1122, 441, 942, { ort: "Aue", nr: 99 }],
                    [_anschluss_nach_in, ZW, 928, 1258, 616, 1120, { ort: "Zwickau", nr: 99 }],
                    [_anschluss_nach_in, AN, 850, 1232, 736, 1052, { ort: "Annaberg", nr: 99 }]

                ],
                ZellenVerweise:[
                    {
                        typ:global,
                        bahn: Sachs,
                        verweisort: headerlinks
                    },
                    {
                        typ:global,
                        klassen: k2b3,
                        verweisort: headerrechts
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach4spalten2spalten
                    },
                    {   //leer
                        typ:global,
                        verweisort: nach4spalten2spalten
                    }
                    ]
            }
*/
        ];
    }
