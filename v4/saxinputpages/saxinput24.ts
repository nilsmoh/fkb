// FKB_1900_So  Seite 24


// experimenteller richtungsfahrplan



// schwach getypt

import {SingleDirectionScheduleInput,  /*sa, sb,sc,sd,se,sf,sg,sh,si,sk,sl,  */
     fern, fatdot,  /*wa,*/ pfeilstart, pfeilziel, global, Sachs, 
    /*k2b4,k1b3,k2b3,k3b4, _klassen, */ 
    passend, sonn_und_festtags, nur_werktags, headerlinks,  /*LE,*/
     WaltersdfHst, MittwMrkb, a510, s810, Z1967, Z1971, Z2045, Z2065, n822, m747, d1153, b355, s321, s550, s748, c510, s800
     /*,s113 ,s710, s845 , s1058*/ /*,wx,sj,sp,sm*/ , /*ZW, SC,AN, CT, AU, LU, CN, JO, KA,*/ /* x135, x150, a644,a659,a818,a754,b233,c937, */  
     Z1960,/*dick,*/ Z1991, Z1998, /*m149,*/ cross,chooseown,nach9spalten
     ,nach10spalten4spalten, headerrechts, nach4spalten,nach6spalten, a858,  nach5spalten2spalten,nach4spalten2spalten, Z1506a, s, ZD65, a, 
    } from "./../SaxInputTypes";

import { /*VERWEIS_T, TEXTORT_T*/ } from "./SaxParsedTypes";    

//export class InputData {
//        public static einzelplaene: SingleDirectionScheduleInput[] = [
 

var page24:SingleDirectionScheduleInput =
id<SingleDirectionScheduleInput>( {
    route1900: 1,
    seite:24,
    caption: "Verbindungsbahn. Richtung Dresden Hbf-Dresden Neustadt",
    zeilen:[
        [_zugnr  ,          zn,  452,   121,  281,    2,    1542, 685,  424,   641,      1504,  311, Z1506a,  687, 1544, 1506,    51],
        [_klassen,          kl, k1b3,  k1b3, k1b4, k1b3,    k1b4, k1b4, k1b4, k1b4,     k1b4,   k1b4,  k1b2, k1b4, k1b4, k1b4,  k1b3],
        [Dresden_Hbf_Nordh, ab, a(1207),   alt,  256,s(348),    529,  alt,  548,  alt,      557,   610,    656,  alt,  717,  733,  s(741)],
        [Dresden_Hbf_Mitth, ab,  alt, s(1238), alt, alt,     alt,  537,  alt,  552,      alt,   alt,    alt,  700,  alt,  alt,  alt ],
    [5.5, Dresd_Wettinerstr,an, 1211,    kHlt, 300, kHlt,    533,  541,  552,  556,      601,   614,    700,  704,  721,  737,  kHlt],
    [Dresd_Wettinerstr, ab,     1212,    kHlt, 301, kHlt,    534,  542,  553,  557,      602,   615,    701,  705,  722,  738,  kHlt],
[3.7, Dresden_Neust_Leip_Bf,an, 1216,    alt , 305,s(355),   538,  alt,  557,  alt,      606,   619,    705,  alt,  726,  742,  s(748)],
[3.8, Dresden_Neust_Schl_Bf,an, alt,     1246, alt,  alt,    alt,  547,  alt,  602,      alt,   alt,    alt,  710,   alt, alt,   alt],

[_zugnr, zn,                       4, 426,1546, 689, 643,1548, 691, 428,     61,    123,      6,  430,1552, 695,1508, 645],
[_klassen,  wa,        kl,         k1b3,k1b4,k1b4,k1b4,k1b4,k1b4,k1b4,k1b4,   k1b3,   k1b3,   k1b3, k1b4,k1b4,k1b4,k1b4,k1b4],
[Dresden_Hbf_Nordh,ab ,         s(755),810, 823,alt, alt, 915,alt , 935,s(1006),    alt,s(1031), 1126,1150, alt,1216, alt],
[Dresden_Hbf_Mitth, ab,         alt   ,alt, alt,838, 851, alt,930 , alt,alt    ,s(1011),   alt ,  alt,alt ,1207, alt,1221],
[5.5, Dresd_Wettinerstr,an,     kHlt  ,814, 827,842, 855, 919,934 , 939,   kHlt,   kHlt,   kHlt, 1130,1154,1211,1220,1225],
  [Dresd_Wettinerstr, ab,       kHlt  ,815, 828,843, 856, 920,935 , 940,   kHlt,   kHlt,   kHlt, 1131,1155,1212,1221,1226],
[3.7, Dresden_Neust_Leip_Bf,an, s(802),819, 832,alt, alt, 924,alt , 944,s(1033),    alt,s(1038), 1135,1159, alt,1225, alt],  
[3.8, Dresden_Neust_Schl_Bf,an,    alt,alt, alt,848, 901,alt ,940 , alt,alt    ,s(1019),    alt,  alt, alt,1217, alt,1231],

[  _zugnr, zn,                 1554, 697,1556,1560, 699, 283,    63, 434,1510, 701, 313, 647,1564, 703,   8  ],
[  _klassen,          kl,      k1b4,k1b4,k1b4,k1b4,k1b4,k1b4,  k1b3,k1b3,k1b4,k1b4,k1b4,k1b4,k1b4,k1b4, k1b3 ],
[   Dresden_Hbf_Nordh,ab  ,    1226, alt, 117, 152, alt, 205,s(214), 224, 235, alt, 253, alt, 319, alt,s(408)],
[   Dresden_Hbf_Mitth, ab,      alt, 104, alt, alt, 157, alt,   alt, alt, alt, 247, alt, 258, alt, 347, alt  ],
[5.5,Dresd_Wettinerstr,an,     1230, 108, 121, 156, 201, 209,  kHlt, 228, 239, 251, 257, 302, 323, 351, kHlt ],
[Dresd_Wettinerstr,    ab,     1231, 109, 122, 157, 202, 210,  kHlt, 229, 240, 252, 258, 303, 324, 352, kHlt ],
[3.7,Dresden_Neust_Leip_Bf, an,1235, alt, 126, 201, alt, 215,s(221), 233, 244, alt, 302, alt, 328, alt,s(415)],
[3.8,Dresden_Neust_Schl_Bf,an,  alt, 114, alt, alt, 207, alt,   alt, alt, alt, 257, alt, 308, alt, 357, alt  ],

[  _zugnr, zn,                   125, 1508, 705,1512, 649, 440,1572,  ZD65,1574, 707,    53, 651,    12, 315, 711,1514 ],
[  _klassen,          kl,       k1b3, k1b4,k1b4,k1b4,k1b4,k1b4,k1b4,  k1b3,k1b4,k1b4,  k1b3,k1b4,  k1b3,k1b4,k1b4,k1b4 ],
[   Dresden_Hbf_Nordh,ab  ,      alt,  443, alt, 508, alt, 546, 557,s(631), 638, alt,s(706), alt,s(719), 726, alt, 753 ],
[   Dresden_Hbf_Mitth, ab,    s(423),  alt, 502, alt, 516, alt, alt,   alt, alt, 658,   alt, 712,   alt, alt, 733, alt ],
[5.5,Dresd_Wettinerstr,an,      kHlt,  447, 506, 512, 520, 550, 601,  kHlt, 642, 702,  kHlt, 716,  kHlt, 730, 737, 757 ],  
[Dresd_Wettinerstr,    ab,      kHlt,  448, 507, 513, 521, 551, 602,  kHlt, 643, 703,  kHlt, 717,  kHlt, 731, 739, 758 ],
[3.7,Dresden_Neust_Leip_Bf,an,   alt,  452, alt, 517, alt, 555, 606,s(638), 647, alt,s(713), alt,s(726), 735, alt, 802 ],
[3.8,Dresden_Neust_Schl_Bf,an,s(431),  alt, 512, alt, 526, alt, alt,   alt, alt, 708,   alt, 722, alt  , alt, 745, alt ],

[  _zugnr, zn,                 444, 1578, 1516,  713, 1580, 653, 1582, 285,     83,  448, 1584,  717, 1586,  655 ],
[  _klassen,          kl,     k1b4, k1b4, k1b4, k1b4, k1b4,k1b4, k1b3,k1b4,   k1b3, k1b3, k1b4, k1b4, k1b4, k1b4 ],
[  Dresden_Hbf_Nordh,ab ,      802,  820,  844,  alt,  908, alt, 940, 1001,    alt, 1012, 1032,  alt, 1123,  alt ],
[  Dresden_Hbf_Mitth, ab,      alt,  alt,  alt,  900,  alt, 925, alt,  alt,s(1006),  alt,  alt, 1037,  alt, 1131 ],
[5.5,Dresd_Wettinerstr,    an, 806,  824,  848,  904,  912, 929, 944, 1005,   kHlt, 1016, 1036, 1041, 1127, 1135 ],
[Dresd_Wettinerstr,        ab, 807,  825,  849,  905,  913, 930, 945, 1006,   kHlt, 1017, 1037, 1042, 1128, 1136 ],
[3.7,Dresden_Neust_Leip_Bf,an, 811,  829,  853,  alt,  917, alt, 950, 1010,    alt, 1021, 1041,  alt, 1132,  alt ],
[3.8,Dresden_Neust_Schl_Bf,an, alt,  alt,  alt,  910,  alt, 935, alt,  alt,s(1014),  alt,  alt, 1047,  alt, 1141 ]

    ],
    ZellenVerweise:[
id<TBlockinhaltBaseV2> (    {
					    "Verweistyp" : {
						    "kind" : VERWEIS_T.FERN,
						    "ReferenzKey" : "a",
						    "OpticalMarker" : ""
                        }, 
                        "TextOrt" : {	"kind" : TEXTORT_T.RECHTSNEBENZUG},
                        Inhalt:  {
            q: "nach Riesa-Leipzig",
            c: "//direkt_daneben_passend_senkrecht_weiter_nach_ohne_streckennummer",
            BLOCK: { Standard: { scope: Zug, OhneNrNach: [Riesa, Leipzig] }, Abweichend: {} }
        }
        }
)       
    ]

 });