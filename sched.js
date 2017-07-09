var SaxSchedules;
(function (SaxSchedules) {
    SaxSchedules.defaultzug = "defaultzug";
    SaxSchedules.restspalte = "restspalte";
    SaxSchedules.ab = "_Ab";
    SaxSchedules.an = "_An";
    SaxSchedules.zn = "_xZugnr";
    SaxSchedules.kl = "_xKlassen";
    SaxSchedules._anschluss_aus = "_Anschluss_aus";
    SaxSchedules._anschluss_aus_ziel = "_Anschluss_aus_ankunft";
    SaxSchedules._anschluss_nach_start = "_Anschluss_nach_abfahrt";
    SaxSchedules._anschluss_nach_in = "_Anschluss_nach_in";
    SaxSchedules._klassen = "_Klassen_";
    SaxSchedules._zugnr = "_xZugnr";
    var WaltersdfHst = "Waltersdorf Haltest.";
    var MittwMrkb = "Mittweida-Markrsb.";
    SaxSchedules.SENKRECHT_PREFIX = "_senkrecht_";
    SaxSchedules.WAAGERECHT_PREFIX = "_waagerecht_";
    var ORTPREFIX = "_Ort_";
    SaxSchedules.MARKERPREFIX = "_markerAussehen_";
    SaxSchedules.fatdot = SaxSchedules.MARKERPREFIX + "fatdot";
    SaxSchedules.cross = SaxSchedules.MARKERPREFIX + "christlichesKreuz";
    SaxSchedules.chooseown = SaxSchedules.MARKERPREFIX + "selbstEinenFreienAussuchen";
    var BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
    SaxSchedules.Sachs = BAHNVERWALTUNGPREFIX + "Sachs";
    SaxSchedules.nix = "_Nix";
    SaxSchedules._ = "_Nix";
    SaxSchedules.gnix = "_Nixleer";
    SaxSchedules.kHlt = "_Kein_Halt";
    SaxSchedules.ank = "_XZug_endet";
    SaxSchedules.Ank = "_XZug_endet";
    var wa = SaxSchedules.WAAGERECHT_PREFIX + "a";
    var sa = SaxSchedules.SENKRECHT_PREFIX + "a";
    var sb = SaxSchedules.SENKRECHT_PREFIX + "b";
    var sc = SaxSchedules.SENKRECHT_PREFIX + "c";
    var sd = SaxSchedules.SENKRECHT_PREFIX + "d";
    var se = SaxSchedules.SENKRECHT_PREFIX + "e";
    var sf = SaxSchedules.SENKRECHT_PREFIX + "f";
    var sg = SaxSchedules.SENKRECHT_PREFIX + "g";
    var sh = SaxSchedules.SENKRECHT_PREFIX + "h";
    var si = SaxSchedules.SENKRECHT_PREFIX + "i";
    var sk = SaxSchedules.SENKRECHT_PREFIX + "k";
    var sl = SaxSchedules.SENKRECHT_PREFIX + "l";
    var sj = SaxSchedules.SENKRECHT_PREFIX + "j";
    var sm = SaxSchedules.SENKRECHT_PREFIX + "m";
    var sp = SaxSchedules.SENKRECHT_PREFIX + "p";
    var wx = SaxSchedules.WAAGERECHT_PREFIX + "x";
    var LE = ORTPREFIX + "Leipzig";
    var CH = ORTPREFIX + "Chemnitz";
    var ZW = ORTPREFIX + "Zwickau";
    var SC = ORTPREFIX + "Schwarzenberg";
    var JO = ORTPREFIX + "Johangeorgenstadt";
    var KA = ORTPREFIX + "Karlsbad BEB";
    var AU = ORTPREFIX + "Aue";
    var AN = ORTPREFIX + "Annaberg";
    var LU = ORTPREFIX + "Lugau";
    var CT = ORTPREFIX + "Chemnitz ü.Thalheim";
    var CN = ORTPREFIX + "Chemnitz ü.Neu.";
    SaxSchedules.k2b4 = "_Klassen_2_bis_4";
    SaxSchedules.k2b3 = "_Klassen_2_bis_3";
    SaxSchedules.k3b4 = "_Klassen_3_bis_4";
    SaxSchedules.k1b3 = "_Klassen_1_bis_3";
    SaxSchedules.fern = "_VERWEISTYP_fern";
    SaxSchedules.passend = "_VERWEISTYP_passend";
    SaxSchedules.global = "_VERWEISTYP_GLOBAL";
    SaxSchedules.pfeilziel = "_VERWEISTYP_pfeilziel";
    SaxSchedules.pfeilstart = "_VERWEISTYP_pfeilstart";
    SaxSchedules.sonn_und_festtags = "_TAGTYP_sonn_und_festtags";
    SaxSchedules.nur_werktags = "_TAGTYP_nur_werktags";
    SaxSchedules.dick = "_CELL_dickerstrich";
    SaxSchedules.headerlinks = "_headerleft";
    SaxSchedules.headerrechts = "_headerright";
    SaxSchedules.nach9spalten = "_nach9spalten";
    SaxSchedules.nach4spalten2spalten = "nach4spalten2spalten";
    SaxSchedules.nach10spalten4spalten = 'nach10spalten4spalten';
    SaxSchedules.nach4spalten = 'nach4spalten';
    SaxSchedules.nach6spalten = 'nach6spalten';
    SaxSchedules.nach5spalten2spalten = 'nach5spalten2spalten';
    var Z1971 = "_Z1971";
    var Z2045 = "_Z2045";
    var Z1967 = "_Z1967";
    var Z2065 = "_Z2065";
    var Z1991 = "_Z1991";
    var Z1998 = "_Z1998";
    var m747 = "_m747";
    var b355 = "_b355";
    var a510 = "_a510";
    var n822 = "_n822";
    var c510 = "_c510";
    var d1153 = "_d1153";
    var s550 = "_s550";
    var s748 = "_s748";
    var s800 = "_s800";
    var s321 = "_s321";
    var s810 = "_s810";
    var a858 = "_a858";
    var s113 = "_s113";
    var s710 = "_s710";
    var s845 = "_s845";
    var s1058 = "_s1058";
    var c937 = "_c937";
    var b233 = "_b233";
    var a754 = "_a754";
    var m149 = "_m149";
    var x135 = "_x135";
    var x150 = "_x150";
    var a644 = "_a644";
    var a659 = "_a659";
    var a818 = "_a818";
    var Z1960 = "_Z1960";
    var InputData = (function () {
        function InputData() {
        }
        InputData.einzelplaene = [
            {
                route1900: 99,
                seite: 102,
                caption: "Annaberg -- Aue -- Werdau",
                zeilen: [
                    [SaxSchedules._anschluss_aus, CH, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 639, SaxSchedules._, 902, SaxSchedules._, SaxSchedules._, 1212, SaxSchedules._, SaxSchedules._, SaxSchedules._, 242, 505, SaxSchedules._, 715, { ort: "Chemnitz", nr: 85 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, SaxSchedules.gnix, 1951, SaxSchedules.gnix, 1861, SaxSchedules.gnix, SaxSchedules.gnix, 1931, 1867, 1933, SaxSchedules.gnix, 1995, SaxSchedules.gnix, SaxSchedules.gnix, 1935, 1869, 1937, SaxSchedules._, 1997, 1939, 1871, 1999],
                    [SaxSchedules._klassen, SaxSchedules.kl, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b3, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b3, SaxSchedules.k2b4],
                    ["Annaberg", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 605, SaxSchedules._, 918, SaxSchedules._, 1126, SaxSchedules._, SaxSchedules._, 226, SaxSchedules._, sg, SaxSchedules._, 607, 736, SaxSchedules._, 944],
                    [2.7, "Buchholz", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 613, SaxSchedules._, 930, SaxSchedules._, 1136, SaxSchedules._, SaxSchedules._, 237, SaxSchedules._, sg, SaxSchedules._, 619, 749, SaxSchedules._, 954, { nr: 85 }],
                    [8.6, WaltersdfHst, SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 630, SaxSchedules._, 947, SaxSchedules._, 1153, SaxSchedules._, SaxSchedules._, 256, SaxSchedules._, sg, SaxSchedules._, 636, 808, SaxSchedules._, 1011],
                    ["Schlettau", SaxSchedules.an, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 635, SaxSchedules._, 952, SaxSchedules._, 1158, SaxSchedules._, SaxSchedules._, 301, SaxSchedules._, sg, SaxSchedules._, 641, 813, SaxSchedules._, 1016, { nr: "99b" }],
                    [9.9, "Schlettau", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, 525, SaxSchedules._, SaxSchedules._, 640, 853, 957, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 306, 320, 610, Z1971, SaxSchedules._, 818, 830, SaxSchedules._],
                    [18.3, "Scheibenberg", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, 540, SaxSchedules._, SaxSchedules._, 651, 903, 1008, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 317, 341, 621, SaxSchedules.k2b3, SaxSchedules._, 830, 840, SaxSchedules._],
                    [20.8, MittwMrkb, SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 710, SaxSchedules.ank, 1027, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 336, sf, 639, sh, SaxSchedules._, 848, SaxSchedules.ank, SaxSchedules._],
                    [22.2, "Raschau", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 716, SaxSchedules._, 1033, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 342, sf, 645, sh, SaxSchedules._, 854, sk, SaxSchedules._],
                    [24.1, "Grünstädtel", SaxSchedules.an, SaxSchedules._, SaxSchedules._, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 723, SaxSchedules._, 1040, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 349, sf, 651, sh, SaxSchedules._, 901, sk, SaxSchedules._],
                    ["Grünstädtel", SaxSchedules.ab, SaxSchedules._, SaxSchedules._, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 724, SaxSchedules._, 1042, SaxSchedules._, Z2045, sb, sc, 354, sf, 652, sh, Z1967, 903, sk, Z2065, { nr: "99c" }],
                    [28.8, "Schwarzenberg Bf.", SaxSchedules.an, SaxSchedules._, SaxSchedules._, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 732, SaxSchedules._, 1050, SaxSchedules._, SaxSchedules.k2b4, sb, sc, 402, sf, 659, sh, SaxSchedules.k2b4, 911, sk, SaxSchedules.k2b4, { nr: "100a" }],
                    ["Schwarzenberg Bf.", SaxSchedules.ab, SaxSchedules._, 435, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 739, SaxSchedules._, 1056, SaxSchedules._, 1256, sb, sc, 416, sf, SaxSchedules._, 649, 704, 916, sk, 1125],
                    [29.3, "Neuwelt", SaxSchedules.ab, SaxSchedules._, 442, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 746, SaxSchedules._, 1103, SaxSchedules._, SaxSchedules.kHlt, sb, sc, 423, sf, SaxSchedules._, 656, 711, 923, sk, 1132],
                    [31.2, "Lauter", SaxSchedules.ab, SaxSchedules._, 548, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 752, SaxSchedules._, 1110, SaxSchedules._, 106, sb, sc, 429, sf, SaxSchedules._, 702, 717, 930, sk, 1138],
                    [37.3, "Aue", SaxSchedules.an, SaxSchedules._, 500, SaxSchedules._, se, SaxSchedules._, SaxSchedules._, 804, SaxSchedules._, 1122, SaxSchedules._, 117, sb, sc, 441, sf, SaxSchedules._, 713, 728, 942, sk, 1150],
                    [SaxSchedules._zugnr, SaxSchedules.zn, SaxSchedules._, 1951, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1953, SaxSchedules._, 1959, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1865, SaxSchedules._, SaxSchedules._, 1971, 1967, 1969, sk, SaxSchedules._],
                    [SaxSchedules._klassen, SaxSchedules.kl, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules._, SaxSchedules.k2b3, SaxSchedules.k2b4, SaxSchedules.k2b4, sk, SaxSchedules._],
                    ["Aue", SaxSchedules.ab, SaxSchedules._, 507, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 817, SaxSchedules._, 1141, SaxSchedules._, 118, SaxSchedules._, SaxSchedules._, 505, SaxSchedules._, SaxSchedules._, 715, 732, 1004, sk, SaxSchedules._],
                    [41.6, "Niederschlema", SaxSchedules.an, SaxSchedules._, 516, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 826, SaxSchedules._, 1150, SaxSchedules._, 126, SaxSchedules._, SaxSchedules._, 514, SaxSchedules._, SaxSchedules._, 723, 741, 1013, SaxSchedules._, SaxSchedules._],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1978, SaxSchedules._, 2043, 205, 2051, 2053, SaxSchedules._, 2055, SaxSchedules._, 2057, SaxSchedules._, 2059, 2061, SaxSchedules._, 1975, 2047, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._],
                    [SaxSchedules._klassen, SaxSchedules.kl, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules.k1b3, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k3b4, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._],
                    ["Niederschlema", SaxSchedules.ab, sl, 518, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 830, sd, 1155, SaxSchedules._, 128, SaxSchedules._, SaxSchedules._, 517, si, SaxSchedules._, 724, 742, 1019, SaxSchedules._, SaxSchedules._],
                    [47.4, "Stein-Hartenstein", SaxSchedules.ab, sl, 528, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 840, sd, 1206, SaxSchedules._, 139, SaxSchedules._, SaxSchedules._, 527, si, SaxSchedules._, 734, 755, 1029, SaxSchedules._, SaxSchedules._],
                    ["Fährbrücke", SaxSchedules.ab, sl, 538, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 849, sd, 1216, SaxSchedules._, 148, SaxSchedules._, SaxSchedules._, 537, si, SaxSchedules._, 743, 804, 1038, SaxSchedules._, SaxSchedules._],
                    [55.7, "Wiesenburg", SaxSchedules.ab, sl, 548, SaxSchedules._, SaxSchedules._, 717, SaxSchedules._, 900, sd, 1228, SaxSchedules._, 157, 319, SaxSchedules._, 547, si, 635, 752, 813, 1048, SaxSchedules._, SaxSchedules._],
                    ["Silberstrasse", SaxSchedules.ab, sl, SaxSchedules.kHlt, SaxSchedules._, SaxSchedules._, 723, SaxSchedules._, SaxSchedules.kHlt, sd, SaxSchedules.kHlt, SaxSchedules._, 203, 325, SaxSchedules._, SaxSchedules.kHlt, si, 641, SaxSchedules.kHlt, SaxSchedules.kHlt, SaxSchedules.kHlt, SaxSchedules._, SaxSchedules._],
                    [61.8, "Wilkau Bf.", SaxSchedules.ab, 445, 600, 631, SaxSchedules._, 731, 818, 912, 1042, 1242, 124, 212, 334, 443, 600, si, 650, 804, 826, 1102, SaxSchedules._, SaxSchedules._, { nr: 96 }],
                    ["Cainsdorf", SaxSchedules.ab, 452, 606, 637, SaxSchedules._, 736, 824, 917, 1048, 1247, 130, 217, 339, 448, 605, si, 655, 809, 831, 1108, SaxSchedules._, SaxSchedules._],
                    ["Schedewitz", SaxSchedules.ab, 459, 612, 642, SaxSchedules._, 741, 829, 922, 1053, 1252, 135, 222, 344, 453, 610, si, 700, 814, 836, 1114, SaxSchedules._, SaxSchedules._],
                    [67.2, "Zwickau", SaxSchedules.an, 505, 618, 649, SaxSchedules._, m747, 835, 928, 1059, 1258, 141, 228, 350, 459, 616, si, 706, 820, 842, 1120, SaxSchedules._, SaxSchedules._, { nr: 54 }],
                    ["Zwickau", SaxSchedules.ab, a510, 632, 656, n822, SaxSchedules._, SaxSchedules._, 948, d1153, 115, SaxSchedules._, 235, b355, c510, 620, 628, 710, 825, 908, 1150, SaxSchedules._, SaxSchedules._, { nrn: [54, 68] }],
                    ["Lichtentanne", SaxSchedules.ab, 520, SaxSchedules.kHlt, 707, SaxSchedules.kHlt, wa, wa, 958, 1204, 125, SaxSchedules._, 245, 406, 521, SaxSchedules.kHlt, 640, 720, 836, 918, 1200, SaxSchedules._, SaxSchedules._],
                    [76.8, "Werdau", SaxSchedules.an, 530, 647, 716, 835, wa, wa, 1008, 1212, 135, SaxSchedules._, 254, 416, 529, 635, 655, 730, 845, 925, 1208, SaxSchedules._, SaxSchedules._, { nr: 59 }],
                    [SaxSchedules._anschluss_nach_in, LE, 749, s810, 925, 1019, SaxSchedules._, SaxSchedules._, 1232, SaxSchedules._, 341, SaxSchedules._, s550, 652, s748, s800, SaxSchedules._, 957, SaxSchedules._, 1205, s321, SaxSchedules._, SaxSchedules._, { ort: "Leipzig", nr: 56 }]
                ],
                ZellenVerweise: [
                    {
                        cellkey: "a510",
                        zugnr: 2041,
                        klassen: SaxSchedules.k2b4,
                        typ: SaxSchedules.fern,
                        marker: "*"
                    }, {
                        cellkey: "b355",
                        zugnr: 1961,
                        typ: SaxSchedules.fern,
                        marker: SaxSchedules.fatdot
                    }, {
                        cellkey: "c510",
                        zugnr: 1963,
                        typ: SaxSchedules.fern,
                        marker: "?"
                    },
                    {
                        cellkey: "d1153",
                        zugnr: 1957,
                        typ: SaxSchedules.fern,
                        marker: "!"
                    },
                    {
                        key: "e", nach: "Stollberg", typ: SaxSchedules.passend
                    }, {
                        key: "f", nach: "Stollberg", typ: SaxSchedules.passend
                    }, {
                        key: "g",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        key: "h",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        key: "i",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.nur_werktags
                    },
                    {
                        key: "k",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        key: "l",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.nur_werktags
                    },
                    {
                        cellkey: "m747",
                        typ: SaxSchedules.pfeilstart,
                        destcellkey: "n822"
                    },
                    {
                        cellkey: "n822",
                        typ: SaxSchedules.pfeilziel,
                        srccellkey: "m747"
                    },
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    }
                ]
            },
            {
                todo: "fehlende sa-sl texte/bedeutungen",
                route1900: 99,
                seite: 103,
                caption: "Werdau--Aue--Annaberg",
                "zeilen": [
                    [SaxSchedules._anschluss_aus, LE, 1140, s113, SaxSchedules._, SaxSchedules._, 500, s710, SaxSchedules._, s845, SaxSchedules._, SaxSchedules._, s1058, SaxSchedules._, 108, SaxSchedules._, SaxSchedules._, SaxSchedules._, 350, SaxSchedules._, s748, 720, SaxSchedules._, { ort: "Leipzig", nr: 56 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1952, 2042, 2052, 1954, 1956, 1958, 2056, 2044, 2058, SaxSchedules._, 1962, "1962a", 1964, 1966, 2062, 2046, 1968, 1976, 2048, 1972, 1970],
                    [wx, SaxSchedules.kl, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b3, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules._, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k3b4, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4],
                    ["Werdau", SaxSchedules.ab, x135, 545, SaxSchedules._, sp, 726, 834, SaxSchedules._, 1005, SaxSchedules._, SaxSchedules._, 1222, 126, 311, 426, SaxSchedules._, 504, 622, 736, 912, 940, 1029],
                    ["Lichtentanne", SaxSchedules.ab, SaxSchedules.kHlt, 556, SaxSchedules._, sp, 739, SaxSchedules.kHlt, SaxSchedules._, 1017, SaxSchedules._, SaxSchedules._, 1233, 135, 320, SaxSchedules.kHlt, SaxSchedules._, 515, 635, 748, 923, 951, 1039],
                    [9.6, "Zwickau", SaxSchedules.an, x150, 605, SaxSchedules._, sp, 749, 848, SaxSchedules._, 1026, SaxSchedules._, SaxSchedules._, 1243, 142, 327, 444, SaxSchedules._, 524, 645, 757, 932, 1000, 1048, { nr: 54 }],
                    ["Zwickau", SaxSchedules.ab, 515, 608, 635, 644, a754, 858, 1018, 1114, 1220, SaxSchedules._, 123, b233, 335, SaxSchedules._, 422, 558, 701, 759, c937, 1053, sc, { nrn: [54, 68] }],
                    ["Schedewitz", SaxSchedules.ab, 522, 615, 642, 653, 801, 905, 1025, 1121, 1227, SaxSchedules._, 131, 240, 342, SaxSchedules._, 429, 605, 709, 807, 944, 1059, sc],
                    ["Cainsdorf", SaxSchedules.ab, 528, 620, 647, 659, 806, 911, 1030, 1126, 1232, SaxSchedules._, 137, 245, 348, SaxSchedules._, 434, 610, 716, 814, 949, 1104, sc],
                    [15.2, "Wilkau", SaxSchedules.ab, 535, 625, 652, 706, 811, 919, 1035, 1131, 1237, SaxSchedules._, 145, 250, 355, SaxSchedules._, 438, 615, 723, 819, 955, 1111, sc, { nr: 96 }],
                    ["Silberstrasse", SaxSchedules.ab, SaxSchedules.kHlt, SaxSchedules.Ank, 701, SaxSchedules.kHlt, SaxSchedules.Ank, SaxSchedules.kHlt, SaxSchedules.Ank, 1140, SaxSchedules.Ank, SaxSchedules._, SaxSchedules.kHlt, 259, SaxSchedules.kHlt, SaxSchedules._, SaxSchedules.Ank, 623, SaxSchedules.kHlt, SaxSchedules.Ank, 1004, SaxSchedules.kHlt, sc],
                    [21.1, "Wiesenburg", SaxSchedules.ab, 550, SaxSchedules._, 706, 719, sa, 932, SaxSchedules._, 1146, SaxSchedules._, SaxSchedules._, 159, 304, 408, SaxSchedules._, SaxSchedules._, 628, 735, sf, 1010, 1122, sc],
                    ["Fährbrücke", SaxSchedules.ab, 600, SaxSchedules._, SaxSchedules.Ank, 729, sa, 942, SaxSchedules._, 1155, SaxSchedules._, SaxSchedules._, 210, SaxSchedules.ank, 418, SaxSchedules._, SaxSchedules._, SaxSchedules.Ank, 744, sf, 1019, 1132, sc],
                    [29.4, "Stein-Hartenstein", SaxSchedules.ab, 610, SaxSchedules._, SaxSchedules._, 739, sa, 953, Z1960, 1204, SaxSchedules._, SaxSchedules._, 221, sb, 428, SaxSchedules._, SaxSchedules._, SaxSchedules._, 754, sf, 1028, 1141, sc],
                    [35.2, "Niederschlema", SaxSchedules.an, 621, SaxSchedules._, SaxSchedules._, 749, sa, 1004, SaxSchedules.k2b4, 1214, SaxSchedules._, SaxSchedules._, 232, sb, 439, SaxSchedules._, SaxSchedules._, SaxSchedules._, 804, sf, 1038, 1151, SaxSchedules._],
                    ["Niederschlema", SaxSchedules.ab, 625, SaxSchedules._, SaxSchedules._, 754, sa, 1008, 1110, 1216, SaxSchedules._, SaxSchedules._, 236, sb, 443, SaxSchedules._, SaxSchedules._, SaxSchedules._, 808, sf, 1039, 1155, SaxSchedules._, { nr: "99a" }],
                    [39.5, "Aue", SaxSchedules.an, 635, SaxSchedules._, SaxSchedules._, 805, sa, 1017, 1118, 1224, SaxSchedules._, SaxSchedules._, 246, sb, 453, SaxSchedules._, SaxSchedules._, SaxSchedules._, 818, sf, 1047, 1203, SaxSchedules._, { nr: 94 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1932, SaxSchedules.gnix, 1862, SaxSchedules.gnix, sa, 1934, SaxSchedules.gnix, 2044, 1936, 1868, 1938, sb, 1964, 5658, 1870, SaxSchedules.gnix, 1940, SaxSchedules.gnix, 2064, 1972, 1872],
                    [SaxSchedules._klassen, SaxSchedules.kl, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.gnix, sa, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.k2b3, SaxSchedules.k2b4, SaxSchedules.k2b4, sb, SaxSchedules.k2b4, SaxSchedules.k2b3, SaxSchedules.k2b3, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.gnix, SaxSchedules.k2b4, SaxSchedules.k2b4, SaxSchedules.k2b4],
                    ["Aue", SaxSchedules.ab, 642, SaxSchedules._, SaxSchedules._, 816, sa, 1025, SaxSchedules._, 1225, sh, sj, 302, sb, 501, SaxSchedules._, sk, SaxSchedules._, 833, SaxSchedules._, 1050, 1208, sl, { nr: 94 }],
                    [45.6, "Lauter", SaxSchedules.ab, 655, SaxSchedules._, SaxSchedules._, 829, sa, 1037, SaxSchedules._, 1237, sh, sj, 315, sb, 514, SaxSchedules._, sk, SaxSchedules._, 846, SaxSchedules._, 1103, 1222, sl],
                    [47.5, "Neuwelt", SaxSchedules.ab, 701, SaxSchedules._, SaxSchedules._, 835, sa, 1044, SaxSchedules._, SaxSchedules.kHlt, sh, sj, 322, sb, 520, SaxSchedules._, sk, SaxSchedules._, 853, SaxSchedules._, 1109, 1228, sl],
                    [50.0, "Schwarzenberg", SaxSchedules.an, 708, SaxSchedules._, SaxSchedules._, 842, sa, 1052, SaxSchedules._, 1246, sh, sj, 330, sb, 527, SaxSchedules._, sk, SaxSchedules._, 901, SaxSchedules._, 1117, 1235, sl],
                    ["Schwarzenberg", SaxSchedules.ab, 714, SaxSchedules._, SaxSchedules._, SaxSchedules._, sa, 1058, SaxSchedules._, SaxSchedules._, 1251, sj, 336, sb, SaxSchedules._, 532, sk, SaxSchedules._, 911, SaxSchedules._, SaxSchedules._, SaxSchedules._, sl, { nr: "110a" }],
                    [52.7, "Gruenstaedtel", SaxSchedules.an, 722, SaxSchedules._, SaxSchedules._, SaxSchedules._, sa, 1106, SaxSchedules._, SaxSchedules._, 1258, sj, 344, sb, SaxSchedules._, 540, sk, SaxSchedules._, 919, SaxSchedules._, SaxSchedules._, SaxSchedules._, sl],
                    ["Gruenstaedtel", SaxSchedules.ab, 723, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1107, SaxSchedules._, SaxSchedules._, 1259, sj, 349, sb, SaxSchedules._, 541, sk, SaxSchedules._, 921, SaxSchedules._, SaxSchedules._, SaxSchedules._, sl, { nr: "99c" }],
                    [54.6, "Raschau", SaxSchedules.ab, 731, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1115, SaxSchedules._, SaxSchedules._, 105, sj, 358, sb, SaxSchedules._, 549, sk, SaxSchedules._, 929, SaxSchedules._, SaxSchedules._, SaxSchedules._, sl],
                    [56.0, "Mittweida", SaxSchedules.ab, 737, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules.dick, 1121, SaxSchedules._, SaxSchedules._, 111, SaxSchedules.gnix, 406, sb, SaxSchedules._, 557, sk, SaxSchedules.dick, 937, SaxSchedules._, SaxSchedules._, SaxSchedules._, sl],
                    [63.5, "Scheibenberg", SaxSchedules.ab, 800, SaxSchedules._, 830, SaxSchedules._, Z1991, 1145, SaxSchedules._, SaxSchedules._, 128, 132, 431, SaxSchedules._, SaxSchedules._, 630, 750, Z1998, 1002, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1055, { nr: 100 }],
                    [68.9, "Schlettau", SaxSchedules.an, 810, SaxSchedules._, 840, SaxSchedules._, SaxSchedules.k2b4, 1155, SaxSchedules._, SaxSchedules._, SaxSchedules.Ank, 142, 442, SaxSchedules._, SaxSchedules._, 642, 800, SaxSchedules.k2b4, 1012, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1105],
                    ["Schlettau", SaxSchedules.ab, 818, SaxSchedules._, SaxSchedules._, SaxSchedules._, 955, 1200, SaxSchedules._, SaxSchedules._, sm, m149, 447, SaxSchedules._, SaxSchedules._, 654, SaxSchedules._, 815, 1017, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, { nr: "99b" }],
                    [68.2, "Waltersdorf Hst", SaxSchedules.ab, 824, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1001, 1206, SaxSchedules._, SaxSchedules._, sm, 155, 453, SaxSchedules._, SaxSchedules._, 700, SaxSchedules._, 821, 1023, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._],
                    [74.1, "Buchholz", SaxSchedules.ab, 843, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1020, 1225, SaxSchedules._, SaxSchedules._, sm, 214, 516, SaxSchedules._, SaxSchedules._, 724, SaxSchedules._, 840, 1044, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, { nr: 85 }],
                    [76.8, "Annaberg", SaxSchedules.an, 850, SaxSchedules._, SaxSchedules._, SaxSchedules._, 1027, 1232, SaxSchedules._, SaxSchedules._, sm, 222, 524, SaxSchedules._, SaxSchedules._, 736, SaxSchedules._, 847, 1052, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._],
                    [SaxSchedules._anschluss_nach_in, CH, 1133, SaxSchedules._, SaxSchedules._, SaxSchedules._, 205, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, 513, 829, SaxSchedules._, SaxSchedules._, 1202, SaxSchedules._, 1202, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, SaxSchedules._, { ort: "Chemnitz", nr: 85 }]
                ],
                ZellenVerweise: [
                    {
                        key: "x",
                        zugnr: 218,
                        klassen: SaxSchedules.k1b3,
                        typ: SaxSchedules.fern,
                        marker: "*"
                    },
                    {
                        key: "p",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        cellkey: "c937",
                        ab: "Zwickau",
                        zugnr: 2064,
                        klassen: SaxSchedules.k2b4,
                        typ: SaxSchedules.fern,
                        marker: SaxSchedules.cross
                    },
                    {
                        cellkey: "a754",
                        ab: "Zwickau",
                        zugnr: 2054,
                        klassen: SaxSchedules.k2b4,
                        typ: SaxSchedules.fern,
                        marker: "!"
                    },
                    {
                        key: "f",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.nur_werktags
                    },
                    {
                        cellkey: "b233",
                        ab: "Zwickau",
                        zugnr: 2060,
                        klassen: SaxSchedules.k2b4,
                        typ: SaxSchedules.fern,
                        marker: SaxSchedules.fatdot
                    },
                    {
                        key: "h",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        key: "j", von: "Stollberg", typ: SaxSchedules.passend
                    },
                    {
                        key: "k",
                        typ: SaxSchedules.passend,
                        tage: SaxSchedules.sonn_und_festtags
                    },
                    {
                        key: "l", von: "Stollberg", typ: SaxSchedules.passend
                    },
                    {
                        cellkey: "m149",
                        zugnr: 1996,
                        typ: SaxSchedules.fern,
                        marker: SaxSchedules.chooseown
                    },
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    }
                ]
            },
            {
                route1900: "99a",
                seite: 104,
                caption: "Schneeberg-Neustädtel--Niederschlema",
                zeilen: [
                    [SaxSchedules._zugnr, SaxSchedules.zn, 2001, 2003, 2005, 2007, 2009, 2011, 2013, 2015, 2017],
                    ["Schneeberg-Neust.", SaxSchedules.ab, 449, 753, 914, 1040, 100, 409, 710, 934, 1119],
                    [3.1, "Oberschlema", SaxSchedules.ab, 504, 810, 932, 1057, 115, 426, 725, 949, 1134, { fk: [20, 15, 25, 20] }],
                    [5.2, "Niederschlema", SaxSchedules.an, 513, 819, 941, 1106, 124, 435, 734, 958, 1143, { nr: 99, fk: [35, 25, 45, 30] }],
                    [SaxSchedules._anschluss_nach_in, ZW, 618, 928, SaxSchedules.nix, 1258, 228, 616, 842, 1120, SaxSchedules.nix, { ort: "Zwickau", fk: [190, 130, 250, 170] }],
                    [SaxSchedules._anschluss_nach_in, SC, 708, SaxSchedules.nix, 1052, 1246, 330, 527, 901, 1117, 1235, { ort: "Schwarzenberg", fk: [120, 80, 160, 110] }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.nach9spalten
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach10spalten4spalten
                    }
                ]
            },
            {
                route1900: "99a",
                seite: 104,
                klassen: SaxSchedules.k2b4,
                caption: "Niederschlema -- Schneeberg-Neustädtel",
                zeilen: [
                    [SaxSchedules._anschluss_aus, ZW, 515, a644, 858, 1114, 123, 335, 701, 937, 1053, { ort: "Zwickau" }],
                    [SaxSchedules._anschluss_aus, SC, 435, 739, SaxSchedules.nix, 1056, 1256, 416, 704, 916, SaxSchedules.nix, { ort: "Schwarzenberg" }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, { fkab: SC }],
                    ["Niederschlema", SaxSchedules.ab, 628, 834, 1010, 1219, 242, 519, 819, 1044, 1157, { fk: [90, 60, 120, 80] }],
                    ["Oberschlema", SaxSchedules.ab, 639, 845, 1021, 1229, 253, 530, 829, 1054, 1207, { fk: [105, 70, 140, 95] }],
                    ["Schneeberg-Neust.", SaxSchedules.an, 653, 859, 1035, 1243, 307, 544, 843, 1108, 1221, { fk: [120, 80, 160, 110] }]
                ],
                ZellenVerweise: [
                    {
                        key: "a",
                        tage: SaxSchedules.sonn_und_festtags,
                        typ: SaxSchedules.fern,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.nach9spalten
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach10spalten4spalten
                    }
                ]
            },
            {
                "route1900": "99b",
                caption: "Obercrottendorf--Schlettau",
                seite: 104,
                zeilen: [
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1982, 1984, 1986, 1988],
                    ["Obercrottendorf", SaxSchedules.ab, 725, 908, 106, 731],
                    [1.3, "Mittelcrottendorf", SaxSchedules.ab, 734, 917, 114, 738, { fk: [15, 10] }],
                    [3.9, "Waltersdorf Haltept.", SaxSchedules.ab, 746, 929, 126, 750, { fk: [25, 20] }],
                    [5.2, "Waltersdorf Haltest.", SaxSchedules.ab, 754, 937, 133, 758, { fk: [35, 25] }],
                    [6.5, "Schlettau", SaxSchedules.an, 800, 943, 139, 804, { fk: [40, 30] }],
                    [SaxSchedules._anschluss_nach_in, AN, 850, 1027, 222, 847, { ort: "Annaberg", nr: 99, fk: [85, 60] }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten
                    }
                ]
            },
            {
                route1900: "99b",
                caption: "Schlettau -- Obercrottendorf",
                seite: 104,
                zeilen: [
                    [SaxSchedules._anschluss_aus, AN, 605, SaxSchedules.nix, 1126, 607, { ort: "Annaberg", nr: 99 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1981, 1983, 1985, 1987],
                    ["Schlettau", SaxSchedules.ab, 638, 826, 1206, 649, { fkab: "Schlettau" }],
                    [1.3, "Waltersdorf Haltest.", SaxSchedules.ab, 646, 833, 1214, 656, { fk: [15, 10] }],
                    [2.6, "Waltersdorf Haltept.", SaxSchedules.ab, 653, 840, 1221, 703, { fk: [20, 15] }],
                    [5.2, "Mittelcrottendorf", SaxSchedules.ab, 708, 853, 1234, 715, { fk: [35, 25] }],
                    [6.5, "Obercrottendorf", SaxSchedules.an, 714, 859, 1240, 721, { fk: [40, 30] }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten
                    }
                ]
            },
            {
                route1900: "99c",
                caption: "Oberrittersgrün -- Grünstädtel",
                seite: 104,
                zeilen: [
                    [SaxSchedules._zugnr, SaxSchedules.zn, 3101, 3103, 3105, 3107, 3109, sa],
                    ["Oberrittersgrün", SaxSchedules.ab, 623, 954, 249, 455, 811, sa],
                    [2.2, "Unterrittersgrün", SaxSchedules.ab, 632, 1003, 258, 504, 820, sa],
                    [3.0, "Oberglobenstein", SaxSchedules.ab, 637, 1008, 303, 509, 825, sa],
                    [4.0, "Niederglobenstein", SaxSchedules.ab, 643, 1014, 309, 514, 831, sa],
                    [5.8, "Siegelhof", SaxSchedules.ab, 652, 1023, 318, 523, 840, sa],
                    [7.0, "Pöhla", SaxSchedules.ab, 701, 1031, 326, 530, 847, sa],
                    [9.4, "Grünstädtel", SaxSchedules.an, 708, 1038, 333, 537, 854, sa],
                    [SaxSchedules._anschluss_nach_in, SC, 732, 1050, 402, a659, 911, sa, { ort: "Schwarzenberg", nr: 99 }]
                ], ZellenVerweise: [
                    {
                        key: "a",
                        typ: SaxSchedules.fern,
                        tage: SaxSchedules.sonn_und_festtags,
                        marker: "*"
                    },
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b3,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach6spalten
                    }
                ]
            },
            {
                route1900: "99c",
                seite: 104,
                caption: "Grünstädtel-- Oberrittersgrün",
                zeilen: [
                    [SaxSchedules._anschluss_aus, SC, 714, 1058, 336, 532, 911, { ort: "Schwarzenberg", nr: 99 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 3102, 3104, 3106, 3108, 3110],
                    ["Grünstädtel", SaxSchedules.ab, 735, 1110, 355, 605, 922, { fkab: "Grünstädtel" }],
                    [2.4, "Pöhla", SaxSchedules.ab, 747, 1121, 405, 617, 932, { fk: [15, 10] }],
                    [3.6, "Siegelhof", SaxSchedules.ab, 756, 1128, 412, 626, 939, { fk: [25, 15] }],
                    [5.4, "Niederglobenstein", SaxSchedules.ab, 805, 1137, 421, 635, 948, { fk: [35, 25] }],
                    [6.4, "Oberglobenstein", SaxSchedules.ab, 811, 1143, 427, 641, 954, { fk: [45, 30] }],
                    [7.2, "Unterrittersgrün", SaxSchedules.ab, 816, 1148, 432, 646, 959, { fk: [45, 30] }],
                    [9.4, "Oberrittersgrün", SaxSchedules.ab, 824, 1156, 440, 654, 1007, { fk: [60, 40] }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b3,
                        verweisort: SaxSchedules.headerrechts
                    }
                ]
            },
            {
                route1900: "100",
                caption: "(Annaberg)--Scheibenberg - Zwoenitz - Stollberg hin",
                seite: 105,
                zeilen: [
                    [SaxSchedules._anschluss_aus, AN, SaxSchedules.nix, SaxSchedules.nix, 918, 226, 736, sa, { ort: "Annaberg", nr: 99 }],
                    [SaxSchedules._anschluss_aus, SC, 525, SaxSchedules.nix, 957, 320, a818, sa, { ort: "Schlettau", nr: 99 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1861, 1865, 1867, 1869, 1871, sa],
                    ["Scheibenberg", SaxSchedules.ab, 540, SaxSchedules.nix, 1018, 341, 845, sa, { fkab: "Scheibenberg" }],
                    ["Hermannsdorf", SaxSchedules.ab, 553, SaxSchedules.nix, 1032, 356, 859, sa, { fk: [30, 20, 40, 30] }],
                    ["Elterlein", SaxSchedules.ab, 607, SaxSchedules.nix, 1046, 412, 913, sa, { fk: [50, 35, 65, 45] }],
                    ["Grünhain", SaxSchedules.ab, 627, SaxSchedules.nix, 1105, 433, 931, sa, { fk: [85, 55, 110, 75] }],
                    ["Beierfeld", SaxSchedules.ab, 635, SaxSchedules.nix, 1113, 443, 939, sa, { fk: [95, 65, 125, 85] }],
                    ["Bernsbach", SaxSchedules.ab, 648, SaxSchedules.nix, 1127, 502, 952, sa, { fk: [110, 75, 150, 100] }],
                    ["Zwönitz", SaxSchedules.an, 709, SaxSchedules.nix, 1148, 523, 1013, sa, { fk: [170, 110, 220, 150] }],
                    [SaxSchedules._anschluss_nach_in, CT, 1015, SaxSchedules.nix, 118, 702, 1140, sa, { ort: "Chemnitz via Thalheim", nr: 94, fk: [380, 260, 510, 340] }],
                    [SaxSchedules._anschluss_aus, AU, 511, 821, 1126, 500, 953, sa, { ort: "Aue", nr: 94 }],
                    ["Zwönitz", SaxSchedules.ab, 728, 1000, 1208, 540, 1032, sa],
                    ["Affalter", SaxSchedules.ab, 744, 1013, 1224, 552, 1044, sa],
                    ["Oberdorf-Beutha", SaxSchedules.ab, 800, 1027, 1241, 605, 1058, sa],
                    ["Stollberg", SaxSchedules.an, 815, 1042, 1256, 620, 1113, sa, { fk: [260, 180, 350, 230] }],
                    [SaxSchedules._anschluss_nach_in, LU, 852, 1216, 258, SaxSchedules.nix, SaxSchedules.nix, sa, { ort: "Lugau", nr: 83 }],
                    [SaxSchedules._anschluss_nach_in, CN, 1029, SaxSchedules.nix, 223, 816, SaxSchedules.nix, sa, { ort: "Chemnitz ü. Neu.", nr: 95 }]
                ], ZellenVerweise: [
                    {
                        key: "a",
                        typ: "Zeitaenderung",
                        sonnundfeiertagzeit: 830,
                        marker: "*"
                    },
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.headerrechts
                    }
                ]
            },
            {
                route1900: 100,
                caption: "Stollberg -- Zwoenitz -- Scheibenberg -- (Anaberg) Rueck",
                seite: 105,
                zeilen: [
                    [SaxSchedules._anschluss_aus, CH, SaxSchedules.nix, 533, 908, 105, 648, { ort: "Chemnitz", via: "neuk", nr: 95 }],
                    [SaxSchedules._anschluss_aus, LU, 422, 702, SaxSchedules.nix, 148, 426, { ort: "Lugau", nr: 83 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 1862, 1866, 1868, 1870, 1872],
                    ["Stollberg", SaxSchedules.ab, 455, 900, 1100, 325, 830],
                    [6.5, "Oberdorf-Beutha", SaxSchedules.ab, 514, 916, 1116, 344, 845],
                    [11.7, "Affalter", SaxSchedules.ab, 531, 929, 1130, 401, 857],
                    [16.6, "Zwönitz", SaxSchedules.an, 543, 941, 1142, 413, 909],
                    [SaxSchedules._anschluss_nach_in, AU, 635, 1020, 201, 453, 940, { ort: "Aue", nr: 94 }],
                    [SaxSchedules._anschluss_nach_in, CH, 444, SaxSchedules.nix, 928, 303, 750, { ort: "Chemnitz", via: "Thalheim", nr: 94 }],
                    ["Zwönitz", SaxSchedules.ab, 620, SaxSchedules.nix, 1205, 440, 925],
                    [24.5, "Bernsbach", SaxSchedules.ab, 645, SaxSchedules.nix, 1227, 505, 949],
                    [27.4, "Beierfeld", SaxSchedules.ab, 656, SaxSchedules.nix, 1237, 516, 1000],
                    [29.3, "Grünhain", SaxSchedules.ab, 706, SaxSchedules.nix, 1247, 527, 1009],
                    [34.6, "Elterlein", SaxSchedules.ab, 725, SaxSchedules.nix, 103, 547, 1027],
                    [38.0, "Hermannsdorf", SaxSchedules.ab, 736, SaxSchedules.nix, 114, 558, 1038],
                    [42.7, "Scheibenberg", SaxSchedules.an, 749, SaxSchedules.nix, 127, 611, 1051],
                    [SaxSchedules._anschluss_nach_in, SC, 810, SaxSchedules.nix, 142, 642, 1105, { ort: "Schlettau", nr: 99 }],
                    [SaxSchedules._anschluss_nach_in, AN, 850, SaxSchedules.nix, 222, 736, SaxSchedules.nix, { ort: "Annaberg", nr: 99 }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b4,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach5spalten2spalten
                    }
                ]
            },
            {
                route1900: "100a",
                seite: 105,
                caption: "Schwarzenberg -- Johanngeorgenstadt hin",
                zeilen: [
                    [SaxSchedules._anschluss_aus, ZW, 515, a858, 335, 701, { ort: "Zwickau", nr: 99, lfd: 1 }],
                    [SaxSchedules._anschluss_aus, AU, 642, 1025, 501, 833, { ort: "Aue", nr: 99, lfd: 1 }],
                    [SaxSchedules._anschluss_aus, AN, 605, 918, 226, 736, { ort: "Annaberg", nr: 99, lfd: 1 }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 3112, 3114, 3116, 3118],
                    ["Schwarzenberg", SaxSchedules.ab, 740, 1115, 545, 923],
                    [1.5, "Schwarzenberg Hltp", SaxSchedules.ab, 748, 1123, 554, 931, { fk: [30, 20] }],
                    [3.1, "Erla", SaxSchedules.ab, 755, 1130, 601, 938, { fk: [30, 20] }],
                    [6.7, "Antonsthal", SaxSchedules.ab, 807, 1142, 613, 949, { fk: [50, 30] }],
                    [11.3, "Breitenhof", SaxSchedules.ab, 818, 1153, 624, 1000, { fk: [70, 50] }],
                    [13.2, "Erlabrunn", SaxSchedules.ab, 827, 1202, 633, 1009, { fk: [90, 60] }],
                    [17.3, "Johanngeorgenstadt", SaxSchedules.an, 838, 1213, 645, 1020, { fk: [110, 80] }],
                    [SaxSchedules._anschluss_nach_start, JO, 920, 1235, 733, SaxSchedules._, { ort: "Johanngeorgenstadt", NACH: "Karlsbad B.E.B.", lfd: 2 }],
                    [SaxSchedules._anschluss_nach_in, KA, 1124, 247, 945, SaxSchedules._, { fk: [430, 230], ort: "Karlsbad B.E.B.", lfd: 2 }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b3,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten2spalten
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten2spalten
                    }
                ]
            },
            {
                route1900: "100a",
                seite: 105,
                todo: "fahrpreise,direkterwagenwerdaukarlsbad rueckrichtung",
                caption: "Schwarzenberg - johangeorgenstadt zurueck",
                zeilen: [
                    [SaxSchedules._anschluss_aus, KA, SaxSchedules.nix, 700, 1228, 506, { ort: "Karlsbad", nr: "108d" }],
                    [SaxSchedules._anschluss_aus_ziel, JO, SaxSchedules.nix, 919, 245, 722, { ort: "Johangeorgenstadt", FROM: KA }],
                    [SaxSchedules._zugnr, SaxSchedules.zn, 3111, 3113, 3115, 3117],
                    ["Johanngeorgenstadt", SaxSchedules.an, 608, 946, 315, 759],
                    ["Erlabrunn", SaxSchedules.ab, 619, 957, 326, 810],
                    ["Breitenhof", SaxSchedules.ab, 628, 1006, 335, 819],
                    ["Antonsthal", SaxSchedules.ab, 638, 1016, 345, 829],
                    ["Erla", SaxSchedules.ab, 649, 1027, 356, 840],
                    ["Schwarzenberg Hltp.", SaxSchedules.ab, 655, 1033, 402, 846],
                    ["Schwarzenberg Bf.", SaxSchedules.ab, 703, 1041, 410, 854],
                    [SaxSchedules._anschluss_nach_in, AU, 804, 1122, 441, 942, { ort: "Aue", nr: 99 }],
                    [SaxSchedules._anschluss_nach_in, ZW, 928, 1258, 616, 1120, { ort: "Zwickau", nr: 99 }],
                    [SaxSchedules._anschluss_nach_in, AN, 850, 1232, 736, 1052, { ort: "Annaberg", nr: 99 }]
                ],
                ZellenVerweise: [
                    {
                        typ: SaxSchedules.global,
                        bahn: SaxSchedules.Sachs,
                        verweisort: SaxSchedules.headerlinks
                    },
                    {
                        typ: SaxSchedules.global,
                        klassen: SaxSchedules.k2b3,
                        verweisort: SaxSchedules.headerrechts
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten2spalten
                    },
                    {
                        typ: SaxSchedules.global,
                        verweisort: SaxSchedules.nach4spalten2spalten
                    }
                ]
            }
        ];
        return InputData;
    }());
    SaxSchedules.InputData = InputData;
})(SaxSchedules || (SaxSchedules = {}));
var SaxSchedulesZusatzBase;
(function (SaxSchedulesZusatzBase) {
    var EScope;
    (function (EScope) {
        EScope[EScope["DefaultZug"] = 1] = "DefaultZug";
        EScope[EScope["RestSpalte"] = 2] = "RestSpalte";
    })(EScope = SaxSchedulesZusatzBase.EScope || (SaxSchedulesZusatzBase.EScope = {}));
    SaxSchedulesZusatzBase.VERWEIS_PASSEND = "VERWEIS_PASSEND";
    SaxSchedulesZusatzBase.VERWEIS_FERN = "VERWEIS_FERN";
    SaxSchedulesZusatzBase.VERWEIS_EMBEDDED = "VERWEIS_EMBEDDED";
    SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT = "VERWEIS_GLOBAL_DEFAULT";
    var EKlassen;
    (function (EKlassen) {
        EKlassen[EKlassen["NichtAngegeben"] = 0] = "NichtAngegeben";
        EKlassen[EKlassen["Klassen1bis3"] = 1] = "Klassen1bis3";
        EKlassen[EKlassen["Klassen2bis3"] = 2] = "Klassen2bis3";
        EKlassen[EKlassen["Klassen2bis4"] = 3] = "Klassen2bis4";
        EKlassen[EKlassen["Klassen3bis4"] = 4] = "Klassen3bis4";
    })(EKlassen = SaxSchedulesZusatzBase.EKlassen || (SaxSchedulesZusatzBase.EKlassen = {}));
    SaxSchedulesZusatzBase.GUELTIG_IMMER = "GUELTIG_IMMER";
    var GUELTIG_NIE = "GUELTIG_NIE";
    var GUELTIG_AB = "GUELTIG_AB";
    ;
    ;
    ;
    SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE = "KBS_ABWEICHUNG_KEINE";
    SaxSchedulesZusatzBase.KBS_ABWEICHUNG_AUS = "KBS_ABWEICHUNG_AUS";
    SaxSchedulesZusatzBase.KBS_ABWEICHUNG_NACH = "KBS_ABWEICHUNG_NACH";
    ;
    ;
    ;
    SaxSchedulesZusatzBase.FAEHRT_IMMER = "FAEHRT_IMMER";
    SaxSchedulesZusatzBase.FAEHRT_WERKTAGS = "FAEHRT_WERKTAGS";
    SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS = "FAEHRT_SONNUNDFESTTAGS";
    ;
    ;
    ;
    SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN = "TEXTORT_NICHTANGEGEBEN";
    SaxSchedulesZusatzBase.TEXTORT_LINKSVONHEADER = "TEXTORT_LINKSVONHEADER";
    SaxSchedulesZusatzBase.TEXTORT_RECHTSVONHEADER = "TEXTORT_RECHTSVONHEADER";
    SaxSchedulesZusatzBase.TEXTORT_UNTERHEADER = "TEXTORT_UNTERHEADER";
    SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE = "TEXTORT_GANZESPALTE";
    ;
    ;
    ;
    ;
    ;
    SaxSchedulesZusatzBase.TKEINPFEIL = "TKEINPFEIL";
    var TPFEIL_START = "TPFEIL_START";
    var TPFEIL_ZIEL = "TPFEIL_ZIEL";
    ;
    ;
    ;
    var BlockRaw_ok = "BLOCKRAWOK";
    var BlockRawUnbekannt = "BLOCKRAWUNBEKANNT";
    var Creator = (function () {
        function Creator() {
        }
        Creator.createTVerweisEmbedded = function () {
            return {
                kind: SaxSchedulesZusatzBase.VERWEIS_EMBEDDED
            };
        };
        Creator.createTVerweisPassend = function (key, scope) {
            return {
                kind: SaxSchedulesZusatzBase.VERWEIS_PASSEND,
                ReferenzKey: key,
                Scope: scope
            };
        };
        Creator.createKbsAbweichungKeine = function () {
            return {
                kind: SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE
            };
        };
        Creator.parseKlassenString = function (Klassenstring) {
            var tKlassen = EKlassen.NichtAngegeben;
            if (Klassenstring != undefined) {
                switch (Klassenstring) {
                    case SaxSchedules.k1b3:
                        tKlassen = EKlassen.Klassen1bis3;
                        break;
                    case SaxSchedules.k2b3:
                        tKlassen = EKlassen.Klassen2bis3;
                        break;
                    case SaxSchedules.k2b4:
                        tKlassen = EKlassen.Klassen2bis4;
                        break;
                    case SaxSchedules.k3b4:
                        tKlassen = EKlassen.Klassen3bis4;
                        break;
                    case null:
                        tKlassen = EKlassen.NichtAngegeben;
                        break;
                    default: console.warn("UnbekannterKlassenstring: " + Klassenstring);
                }
            }
            return tKlassen;
        };
        Creator.createTBlockInhaltZugnummerOderKlasse = function (Zugnummer, Klassenstring) {
            var tBlock = {
                Zugnr: Zugnummer,
                Klassen: Creator.parseKlassenString(Klassenstring)
            };
            return tBlock;
        };
        Creator.createBlockInhaltRawOk = function () {
            var tOk = { kind: BlockRaw_ok };
            return tOk;
        };
        return Creator;
    }());
    SaxSchedulesZusatzBase.Creator = Creator;
    var Importer = (function () {
        function Importer() {
        }
        Importer.parseIZellenEigenschaft = function (inp) {
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
            var tGueltig = { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER };
            if (inp.ab) {
                tGueltig = {
                    kind: GUELTIG_AB,
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
                kind: SaxSchedulesZusatzBase.FAEHRT_IMMER
            };
            if (inp.tage) {
                switch (inp.tage) {
                    case SaxSchedules.sonn_und_festtags:
                        tFahrtage = {
                            kind: SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS
                        };
                        break;
                    case SaxSchedules.nur_werktags:
                        tFahrtage = {
                            kind: SaxSchedulesZusatzBase.FAEHRT_WERKTAGS
                        };
                        break;
                    default: console.warn("unbekannte Fahrtage: ", inp.tage);
                }
                ok_inp_tage = true;
            }
            else {
                ok_inp_tage = true;
            }
            var tPfeilInfo = { kind: SaxSchedulesZusatzBase.TKEINPFEIL };
            var tTyp = Creator.createTVerweisEmbedded();
            if (inp.typ) {
                switch (inp.typ) {
                    case SaxSchedules.passend:
                        var tScopePassend = EScope.DefaultZug;
                        if (inp.scope) {
                            if (inp.scope == SaxSchedules.restspalte) {
                                tScopePassend = EScope.RestSpalte;
                                ok_inp_scope = true;
                            }
                            if (inp.scope == SaxSchedules.defaultzug) {
                                tScopePassend = EScope.DefaultZug;
                                ok_inp_scope = true;
                            }
                        }
                        else {
                            ok_inp_scope = true;
                        }
                        tTyp = Creator.createTVerweisPassend(tReferenzkey, tScopePassend);
                        ok_inp_typ = true;
                        ok_inp_key = true;
                        ok_inp_marker = true;
                        break;
                    case SaxSchedules.fern:
                        tTyp = {
                            kind: SaxSchedulesZusatzBase.VERWEIS_FERN,
                            ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                            OpticalMarker: tMarker
                        };
                        ok_inp_typ = true;
                        break;
                    case SaxSchedules.pfeilstart:
                        if (inp.destcellkey) {
                            var tPfeilStart = { kind: TPFEIL_START, ReferenzKey: inp.destcellkey.substr(0, 1)
                            };
                            tPfeilInfo = tPfeilStart;
                            ok_inp_destcellkey = true;
                            tTyp = {
                                kind: SaxSchedulesZusatzBase.VERWEIS_FERN,
                                ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                OpticalMarker: ""
                            };
                            ok_inp_typ = true;
                        }
                        else {
                            console.warn("ERROR: pfeilstart ohne destcellkey !!!");
                        }
                        break;
                    case SaxSchedules.pfeilziel:
                        if (inp.srccellkey) {
                            var tPfeilZiel = { kind: TPFEIL_ZIEL, ReferenzKey: inp.srccellkey.substr(0, 1)
                            };
                            tPfeilInfo = tPfeilZiel;
                            ok_inp_srccellkey = true;
                            tTyp = {
                                kind: SaxSchedulesZusatzBase.VERWEIS_FERN,
                                ReferenzKey: (tReferenzkey.length > 0) ? tReferenzkey : tCellKey,
                                OpticalMarker: ""
                            };
                            ok_inp_typ = true;
                        }
                        else {
                            console.warn("ERROR: pfeilziel ohne srccellkey !!!");
                        }
                        break;
                    case SaxSchedules.global:
                        tTyp = {
                            kind: SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT
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
                Klassen: Creator.parseKlassenString(inp.klassen)
            };
            ok_inp_klassen = true;
            ok_inp_zugnr = true;
            if (inp.sonnundfeiertagzeit) {
                console.error("SaxSchedulesZusatzBase.ts :  sonnundfeiertagszeit parser not implemented");
            }
            else {
                ok_inp_sonnundfeiertagzeit = true;
            }
            var tTextOrt = { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN };
            if (inp.verweisort) {
                switch (inp.verweisort) {
                    case SaxSchedules.headerlinks:
                        tTextOrt = { kind: SaxSchedulesZusatzBase.TEXTORT_LINKSVONHEADER };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.headerrechts:
                        tTextOrt = { kind: SaxSchedulesZusatzBase.TEXTORT_RECHTSVONHEADER };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach9spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten: 9,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach4spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten: 4,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach4spalten2spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten: 4,
                            Spaltenbreite: 2
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach5spalten2spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten: 5,
                            Spaltenbreite: 2
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach6spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
                            UebersprungeneSpalten: 6,
                            Spaltenbreite: 1
                        };
                        ok_inp_verweisort = true;
                        break;
                    case SaxSchedules.nach10spalten4spalten:
                        tTextOrt = {
                            kind: SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE,
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
            var tKbsAbweichung = Creator.createKbsAbweichungKeine();
            if (inp.von) {
                var tKbsAbweichungA = {
                    kind: SaxSchedulesZusatzBase.KBS_ABWEICHUNG_AUS,
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
                    kind: SaxSchedulesZusatzBase.KBS_ABWEICHUNG_NACH,
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
            var tBahn = SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben;
            if (inp.bahn) {
                if (inp.bahn == SaxSchedules.Sachs) {
                    tBahn = SaxSchedulesTyped.EBahnverwaltung.KSaechsStsEB;
                    ok_inp_bahn = true;
                }
                else {
                }
            }
            else {
                ok_inp_bahn = true;
            }
            var tBRT = {
                kind: BlockRaw_ok
            };
            if (!(ok_inp_ab && ok_inp_cellkey && ok_inp_destcellkey && ok_inp_key && ok_inp_klassen && ok_inp_marker && ok_inp_nach
                && ok_inp_sonnundfeiertagzeit && ok_inp_srccellkey && ok_inp_tage && ok_inp_typ && ok_inp_verweisort && ok_inp_von && ok_inp_zugnr
                && ok_inp_scope && ok_inp_bahn)) {
                tBRT = {
                    kind: BlockRawUnbekannt,
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
            return tBlockKpl;
        };
        return Importer;
    }());
    SaxSchedulesZusatzBase.Importer = Importer;
    var Renderer = (function () {
        function Renderer() {
        }
        Renderer.isEmptyBIBGlobal = function (b) {
            console.warn("isEmptyBibGlobal not complete");
            return ((b.Bahnverwaltung == SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben)
                && (b.KbsAbweichung.kind == SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE)
                && (b.ZugNrOderKlasse.Klassen == EKlassen.NichtAngegeben)
                && (b.ZugNrOderKlasse.Zugnr == null));
        };
        Renderer.renderOpticalMarker = function (s) {
            var tResult = s;
            if (s === SaxSchedules.fatdot) {
                tResult = "\u25cf";
            }
            if (s === SaxSchedules.cross) {
                tResult = "\u2020";
            }
            return tResult;
        };
        Renderer.TBlockInhaltNachRenderKomplex = function (t, alleZuege) {
            var tResult = "";
            if (t == undefined) {
                return "block Inhalt Base undefined";
            }
            if (alleZuege) {
                tResult += "Alle Zuege ";
            }
            var tEmbedded = (t.Verweistyp.kind === SaxSchedulesZusatzBase.VERWEIS_EMBEDDED);
            if (t.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN) {
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
            switch (t.Fahrtage.kind) {
                case (SaxSchedulesZusatzBase.FAEHRT_IMMER):
                    break;
                case (SaxSchedulesZusatzBase.FAEHRT_WERKTAGS):
                    tResult += "Nur Werktags";
                    break;
                case (SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS):
                    tResult += "Sonn- und Festtags";
                    break;
                default:
                    return SaxSchedulesTyped.Importer.assertNever(t.Fahrtage);
            }
            switch (t.KbsAbweichung.kind) {
                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE:
                    break;
                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_AUS:
                    tResult += "von " + t.KbsAbweichung.bhf;
                    break;
                case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_NACH:
                    tResult += "nach " + t.KbsAbweichung.bhf;
                    break;
                default:
                    return SaxSchedulesTyped.Importer.assertNever(t.KbsAbweichung);
            }
            switch (t.Bahnverwaltung) {
                case SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben:
                    break;
                case SaxSchedulesTyped.EBahnverwaltung.KSaechsStsEB:
                    tResult += "Sächs. Staatsb.";
                    break;
                default:
                    console.warn("unbekannte Bahnverwaltung in zusatzinfobase: wie soll man das rendern ?!");
            }
            return tResult;
        };
        return Renderer;
    }());
    SaxSchedulesZusatzBase.Renderer = Renderer;
})(SaxSchedulesZusatzBase || (SaxSchedulesZusatzBase = {}));
var SaxSchedulesTyped;
(function (SaxSchedulesTyped) {
    var EQuelle;
    (function (EQuelle) {
        EQuelle[EQuelle["FritzscheSommer1900"] = 0] = "FritzscheSommer1900";
    })(EQuelle = SaxSchedulesTyped.EQuelle || (SaxSchedulesTyped.EQuelle = {}));
    var EBahnverwaltung;
    (function (EBahnverwaltung) {
        EBahnverwaltung[EBahnverwaltung["NichtAngegeben"] = 0] = "NichtAngegeben";
        EBahnverwaltung[EBahnverwaltung["KSaechsStsEB"] = 1] = "KSaechsStsEB";
    })(EBahnverwaltung = SaxSchedulesTyped.EBahnverwaltung || (SaxSchedulesTyped.EBahnverwaltung = {}));
    SaxSchedulesTyped.ZEILE_ZUGNR = "ZUGNR";
    SaxSchedulesTyped.ZEILE_KLASSEN = "KLASSEN";
    SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB = "ANSCHLUSS_ZUBRINGER_AB";
    SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN = "ANSCHLUSS_ZUBRINGER_IN";
    SaxSchedulesTyped.ZEILE_NORMAL = "NORMAL";
    SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB = "ANSCHLUSS_WEITER_AB";
    SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN = "ANSCHLUSS_WEITER_IN";
    SaxSchedulesTyped.BLOCK_ZUG_NR_WERT = "ZUG_NR_WERT";
    SaxSchedulesTyped.BLOCK_LEER = "LEER";
    SaxSchedulesTyped.BLOCK_BLOCK = "BLOCKEINTRAG";
    SaxSchedulesTyped.BLOCK_ERROR = "BLOCKERROR";
    SaxSchedulesTyped.BLOCK_KEINHALT = "BLOCKKEINHALT";
    SaxSchedulesTyped.BLOCK_DICKERSTRICH = "BLOCK_DICKERSTRICH";
    SaxSchedulesTyped.BLOCK_ZEITEINTRAG = "BLOCK_ZEITEINTRAG";
    SaxSchedulesTyped.BLOCK_ANKUNFT = "BLOCK_ANKUNFT";
    var GesternHeuteMorgen;
    (function (GesternHeuteMorgen) {
        GesternHeuteMorgen[GesternHeuteMorgen["Unbekannt"] = 0] = "Unbekannt";
        GesternHeuteMorgen[GesternHeuteMorgen["Gestern"] = 1] = "Gestern";
        GesternHeuteMorgen[GesternHeuteMorgen["Heute"] = 2] = "Heute";
        GesternHeuteMorgen[GesternHeuteMorgen["Morgen"] = 3] = "Morgen";
    })(GesternHeuteMorgen = SaxSchedulesTyped.GesternHeuteMorgen || (SaxSchedulesTyped.GesternHeuteMorgen = {}));
    var ETimeValid;
    (function (ETimeValid) {
        ETimeValid[ETimeValid["Nein"] = 1] = "Nein";
        ETimeValid[ETimeValid["Vorgabe24"] = 2] = "Vorgabe24";
        ETimeValid[ETimeValid["Berechnet24"] = 3] = "Berechnet24";
    })(ETimeValid = SaxSchedulesTyped.ETimeValid || (SaxSchedulesTyped.ETimeValid = {}));
    SaxSchedulesTyped.ZEIT_ROH = "ZEIT_ROH";
    SaxSchedulesTyped.ZEIT_24 = "ZEIT_24";
    var EAnAb;
    (function (EAnAb) {
        EAnAb[EAnAb["An"] = 0] = "An";
        EAnAb[EAnAb["FirstAb"] = 1] = "FirstAb";
        EAnAb[EAnAb["FollowAb"] = 2] = "FollowAb";
    })(EAnAb = SaxSchedulesTyped.EAnAb || (SaxSchedulesTyped.EAnAb = {}));
    SaxSchedulesTyped.ZUGLAUF_UNBEKANNT = "ZUGLAUF_UNBEKANNT";
    SaxSchedulesTyped.ZUGLAUF_BERECHNET = "ZUGLAUF_BERECHNET";
    SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE = "FAHRPREIS_KEINE_ANGABE";
    SaxSchedulesTyped.FAHRPREIS_EINFACH = "FAHRPREIS_EINFACH";
    SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK = "FAHRPREIS_EINFACH_UND_RUECK";
    SaxSchedulesTyped.FAHRPREIS_AB = "FAHRPREIS_AB";
})(SaxSchedulesTyped || (SaxSchedulesTyped = {}));
var SaxSchedulesTyped;
(function (SaxSchedulesTyped) {
    var Validator = (function () {
        function Validator() {
        }
        Validator.validate_mergeBlocks = function (s) {
            var tUnprocessedBlocks = [];
            var tProcessedBlocks = [];
            var tAlreadyProcessedKeys = [];
            s.Zeilen.forEach(function (z, zeileidx) {
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                        var tEintraege = [];
                        if (z.kind == SaxSchedulesTyped.ZEILE_ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                            tEintraege = z.KlassenNummern;
                        }
                        if ((z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN)
                            || (z.kind == SaxSchedulesTyped.ZEILE_NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach(function (zi, spalteidx) {
                            switch (zi.kind) {
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    tUnprocessedBlocks.push({ eintrag: zi, zeile: zeileidx, spalte: spalteidx, alreadyDone: false });
                                    console.log("push ", spalteidx, zeileidx);
                                    break;
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                case SaxSchedulesTyped.BLOCK_LEER:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                    break;
                                default:
                                    return Importer.assertNever(zi);
                            }
                        });
                        break;
                    default:
                        return Importer.assertNever(z);
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
                if (z.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN) {
                    if (z.Verweistyp.OpticalMarker == SaxSchedules.chooseown) {
                        z.Verweistyp.OpticalMarker = freemarker[nextFreeMarkerIdx];
                        nextFreeMarkerIdx++;
                    }
                }
            });
            s.Zeilen.forEach(function (z) {
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                        var tEintraege = [];
                        if (z.kind == SaxSchedulesTyped.ZEILE_ZUGNR) {
                            tEintraege = z.ZugNummern;
                        }
                        if (z.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                            tEintraege = z.KlassenNummern;
                            if (z.BlockEintrag) {
                                var tFound = null;
                                for (var i = 0; i < s.ZusatzBloecke.length; i++) {
                                    var tBlockZusatz = s.ZusatzBloecke[i];
                                    if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_EMBEDDED) {
                                    }
                                    if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN || tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_PASSEND) {
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
                        if ((z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB)
                            || (z.kind == SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN)
                            || (z.kind == SaxSchedulesTyped.ZEILE_NORMAL)) {
                            tEintraege = z.Zeiteintraege;
                        }
                        tEintraege.forEach(function (zi, spalteidx) {
                            switch (zi.kind) {
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    if (zi.Start && zi.Referenzkey) {
                                        var tFound = null;
                                        for (var i = 0; i < s.ZusatzBloecke.length; i++) {
                                            var tBlockZusatz = s.ZusatzBloecke[i];
                                            if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_EMBEDDED) {
                                            }
                                            if (tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_FERN || tBlockZusatz.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_PASSEND) {
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
                                case SaxSchedulesTyped.BLOCK_LEER:
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                    break;
                                default:
                                    return Importer.assertNever(zi);
                            }
                        });
                        break;
                    default:
                        return Importer.assertNever(z);
                }
            });
        };
        Validator.validate_move_Anschluss_ZusatzInfo = function (s) {
            s.Zeilen.forEach(function (z) {
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.Ortsname.length > 0) {
                                z.BhfTag = z.ZeitZeileZusatzInfo.Ortsname;
                                z.ZeitZeileZusatzInfo.Ortsname = "__MOVED__";
                            }
                            else {
                                console.warn("ANSCHLUSS MUSS ORT HABEN !!!", z);
                            }
                        }
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                        if (z.ZeitZeileZusatzInfo) {
                            if (z.ZeitZeileZusatzInfo.AnschlussNummern.length > 0) {
                                z.AnschlussNummern = z.ZeitZeileZusatzInfo.AnschlussNummern;
                                z.ZeitZeileZusatzInfo.AnschlussNummern = ["_MOVED_"];
                            }
                        }
                        break;
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                        break;
                    default:
                        return Importer.assertNever(z);
                }
            });
        };
        return Validator;
    }());
    SaxSchedulesTyped.Validator = Validator;
    var Importer = (function () {
        function Importer() {
        }
        Importer.berechneZeiten = function (s) {
            console.log("berechneZeiten()");
            var tLen = 0;
            s.Zeilen.forEach(function (z) {
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                        break;
                    default:
                        return Importer.assertNever(z);
                }
            });
            var fill24 = function (pEintrag, offsetH, ghm) {
                var EintragRohZeit = 0;
                switch (pEintrag.Zeit.kind) {
                    case SaxSchedulesTyped.ZEIT_ROH:
                        EintragRohZeit = pEintrag.Zeit.RohZeit;
                        break;
                    case SaxSchedulesTyped.ZEIT_24:
                        console.error("fill24 mit ZEIT24 (trotzdem aus src)");
                        EintragRohZeit = pEintrag.Zeit.src;
                }
                var tRohStunde12 = Math.floor(EintragRohZeit / 100);
                var tRohMinute12 = (EintragRohZeit - (tRohStunde12 * 100));
                if (tRohStunde12 == 12) {
                    tRohStunde12 = 0;
                }
                var tZeit24 = {
                    kind: SaxSchedulesTyped.ZEIT_24,
                    Minute24: tRohMinute12,
                    Stunde24: tRohStunde12 + offsetH,
                    WelcherTag: ghm,
                    Valid: SaxSchedulesTyped.ETimeValid.Berechnet24,
                    src: EintragRohZeit
                };
                pEintrag.Zeit = tZeit24;
            };
            console.log("fuelle Normalzeile + Anschluss_NACH   Zeiteintraege, Annahme: beginn heute vormittag");
            for (var sp = 0; sp < tLen; sp++) {
                s.Zeilen.forEach(function (z) {
                    switch (z.kind) {
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                            var tEintrag = z.Zeiteintraege[sp];
                            switch (tEintrag.kind) {
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                    var tFestgelegt = false;
                                    for (var i = sp - 1; i >= 0; i--) {
                                        var tVorgaenger = z.Zeiteintraege[i];
                                        switch (tVorgaenger.kind) {
                                            case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                                if ((tVorgaenger.Zeit.kind == SaxSchedulesTyped.ZEIT_ROH) || (tVorgaenger.Zeit.Valid == SaxSchedulesTyped.ETimeValid.Nein)) {
                                                    console.error(" LINKS SOLLTE VALIDE SEIN !!!!");
                                                }
                                                else if ((tVorgaenger.Zeit.Valid == SaxSchedulesTyped.ETimeValid.Berechnet24) || (tVorgaenger.Zeit.Valid == SaxSchedulesTyped.ETimeValid.Vorgabe24)) {
                                                    fill24(tEintrag, 0, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
                                                    if (tEintrag.Zeit.kind == SaxSchedulesTyped.ZEIT_ROH) {
                                                        console.error("fill24 liefert ZEIT_ROH ???");
                                                    }
                                                    else {
                                                        if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                        }
                                                        else {
                                                            fill24(tEintrag, 12, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
                                                        }
                                                        if ((tVorgaenger.Zeit.Stunde24 < tEintrag.Zeit.Stunde24) || (tVorgaenger.Zeit.Stunde24 == tEintrag.Zeit.Stunde24 && tVorgaenger.Zeit.Minute24 <= tEintrag.Zeit.Minute24)) {
                                                        }
                                                        else {
                                                            fill24(tEintrag, 24, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
                                                        }
                                                        i = -1;
                                                        tFestgelegt = true;
                                                    }
                                                }
                                                break;
                                            case SaxSchedulesTyped.BLOCK_LEER:
                                            case SaxSchedulesTyped.BLOCK_KEINHALT:
                                            case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                            case SaxSchedulesTyped.BLOCK_KEINHALT:
                                            case SaxSchedulesTyped.BLOCK_ERROR:
                                            case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                            case SaxSchedulesTyped.BLOCK_BLOCK:
                                                break;
                                            default:
                                                return Importer.assertNever(tVorgaenger);
                                        }
                                    }
                                    if (tFestgelegt) {
                                    }
                                    else {
                                        fill24(tEintrag, 0, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
                                    }
                                    break;
                                case SaxSchedulesTyped.BLOCK_LEER:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    break;
                                default:
                                    return Importer.assertNever(tEintrag);
                            }
                            break;
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_ZUGNR:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                            break;
                        default:
                            return Importer.assertNever(z);
                    }
                });
            }
            console.log("fuelle Anschluss_Aus, d.h. Kopfbereich durch einzelne Spaltenweise suchen");
            for (var sp = 0; sp < tLen; sp++) {
                s.Zeilen.forEach(function (z, zidx, arr) {
                    switch (z.kind) {
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                            var tAnschlusszeit = z.Zeiteintraege[sp];
                            if (tAnschlusszeit.kind == SaxSchedulesTyped.BLOCK_ZEITEINTRAG) {
                                for (var di = zidx + 1; di < s.Zeilen.length; di++) {
                                    var zzz_zeileDrunter = s.Zeilen[di];
                                    if (zzz_zeileDrunter.kind == SaxSchedulesTyped.ZEILE_NORMAL) {
                                        var eee_drunterEintrag = zzz_zeileDrunter.Zeiteintraege[sp];
                                        if (eee_drunterEintrag.kind == SaxSchedulesTyped.BLOCK_ZEITEINTRAG) {
                                            if (eee_drunterEintrag.Zeit.kind == SaxSchedulesTyped.ZEIT_ROH) {
                                                console.error("NORMALZEILE SOLLTE SEIT OBEN KORREKT GEFUELLT SEIN?!");
                                            }
                                            else {
                                                var tAnschlusszeit_roh = 0;
                                                if (tAnschlusszeit.Zeit.kind == SaxSchedulesTyped.ZEIT_ROH) {
                                                    tAnschlusszeit_roh = tAnschlusszeit.Zeit.RohZeit;
                                                    console.error("ANSCHLUSS EINTRAG KORREKT BERECHNET , war ROH ", tAnschlusszeit.Zeit.RohZeit);
                                                }
                                                else {
                                                    tAnschlusszeit_roh = tAnschlusszeit.Zeit.src;
                                                    console.error("ANSCHLUSS EINTRAG ZU FRUEH BERECHNET ?! ", tAnschlusszeit.Zeit.src);
                                                }
                                                if (tAnschlusszeit_roh > eee_drunterEintrag.Zeit.src) {
                                                    if (eee_drunterEintrag.Zeit.Stunde24 > 12) {
                                                        fill24(tAnschlusszeit, 0, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
                                                    }
                                                    else {
                                                        fill24(tAnschlusszeit, 12, SaxSchedulesTyped.GesternHeuteMorgen.Gestern);
                                                        console.log("kori2x ", eee_drunterEintrag.Zeit.src);
                                                    }
                                                }
                                                else {
                                                    fill24(tAnschlusszeit, 0, SaxSchedulesTyped.GesternHeuteMorgen.Heute);
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
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        z.Zeiteintraege.forEach(function (e) {
                            if (e.kind == SaxSchedulesTyped.BLOCK_ZEITEINTRAG) {
                                if (e.Zeit.kind == SaxSchedulesTyped.ZEIT_ROH) {
                                    console.error("HIER SOLLTE ALLES ZEIT24 sein !!!");
                                }
                                else {
                                    if (tFirst) {
                                        tLast = e.Zeit;
                                        tFirst = false;
                                    }
                                    else {
                                        if (((tLast.Stunde24 * 100 + tLast.Minute24) > (e.Zeit.Stunde24 * 100 + e.Zeit.Minute24)) && tLast.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Heute) {
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
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        z.Zeiteintraege.forEach(function (e) {
                            if (e.kind == SaxSchedulesTyped.BLOCK_ZEITEINTRAG) {
                                if (e.Zeit.kind == SaxSchedulesTyped.ZEIT_24) {
                                    if (e.Zeit.Stunde24 >= 24 && e.Zeit.WelcherTag == SaxSchedulesTyped.GesternHeuteMorgen.Heute) {
                                        e.Zeit.Stunde24 -= 24;
                                        e.Zeit.WelcherTag = SaxSchedulesTyped.GesternHeuteMorgen.Morgen;
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
                kind: SaxSchedulesTyped.BLOCK_BLOCK,
                Senkrecht: false,
                Valid: true,
                Start: true,
                Breite: 1,
                Hoehe: 1,
                Passend: true,
                Referenzkey: undefined,
                Blockinhalt: BlockInhalt,
                BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
            };
            return tResultEntryB;
        };
        Importer.parseZeitZeileZusatzInfo = function (rawEntry) {
            var tZeitZeilenZusatzInfo = {
                AnschlussNummern: [],
                Ortsname: "",
                Fahrpreise: { kind: SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE },
                Valid: false,
                Raw: JSON.stringify(rawEntry)
            };
            var tWillBeValid = true;
            if (rawEntry.fk) {
                if (rawEntry.fk.length == 2) {
                    var tFahrpreisInfo2 = {
                        kind: SaxSchedulesTyped.FAHRPREIS_EINFACH,
                        Einfach2: rawEntry.fk[0],
                        Einfach3: rawEntry.fk[1]
                    };
                    tZeitZeilenZusatzInfo.Fahrpreise = tFahrpreisInfo2;
                }
                else if (rawEntry.fk.length == 4) {
                    var tFahrpreisInfo4 = {
                        kind: SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK,
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
                    kind: SaxSchedulesTyped.FAHRPREIS_AB,
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
                Quelle: SaxSchedulesTyped.EQuelle.FritzscheSommer1900,
                Kommentar: (input.comment) ? input.comment : "",
                Ueberschrift: input.caption,
                Route1900: input.route1900.toString(),
                Klassen: SaxSchedulesZusatzBase.Creator.parseKlassenString(input.klassen),
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
                            (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_aus) == 0)) ||
                            (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_aus_ziel) == 0)) ||
                            (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_nach_start) == 0)) ||
                            (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_nach_in) == 0))) {
                            var tAnAbString = (("number" == typeof zeile[0]) ? zeile[2] : zeile[1]);
                            var tAnAb = SaxSchedulesTyped.EAnAb.FirstAb;
                            if (tAnAbString == SaxSchedules.ab) {
                                if (tNextAbIsFirst) {
                                    tAnAb = SaxSchedulesTyped.EAnAb.FirstAb;
                                    tNextAbIsFirst = false;
                                }
                                else {
                                    tAnAb = SaxSchedulesTyped.EAnAb.FollowAb;
                                    tNextAbIsFirst = false;
                                }
                            }
                            if (tAnAbString == SaxSchedules.an) {
                                tAnAb = SaxSchedulesTyped.EAnAb.An;
                                tNextAbIsFirst = true;
                            }
                            var tResultZeileN = {
                                kind: SaxSchedulesTyped.ZEILE_NORMAL,
                                Km: ("number" == typeof zeile[0] ? zeile[0] : -1),
                                BhfTag: ("number" == typeof zeile[0] ? zeile[1] : zeile[0]),
                                AnschlussNummern: [],
                                Zeiteintraege: [],
                                ZeitZeileZusatzInfo: undefined,
                                AnAb: tAnAb
                            };
                            var tResultZeile = tResultZeileN;
                            console.log("parse Zeile ", zeile[0]);
                            if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_nach_in) == 0)) {
                                var tResultZeileX = {
                                    kind: SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN,
                                    BhfTag: "",
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                };
                                tResultZeile = tResultZeileX;
                            }
                            if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_nach_start) == 0)) {
                                var tResultZeileXD = {
                                    kind: SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB,
                                    BhfTag: "",
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                };
                                tResultZeile = tResultZeileXD;
                            }
                            if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_aus) == 0)) {
                                var tResultZeileY = {
                                    kind: SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB,
                                    BhfTag: "",
                                    AnschlussNummern: [],
                                    Zeiteintraege: [],
                                    ZeitZeileZusatzInfo: undefined
                                };
                                tResultZeile = tResultZeileY;
                            }
                            if (("string" == typeof zeile[0]) && (zeile[0].indexOf(SaxSchedules._anschluss_aus_ziel) == 0)) {
                                var tResultZeileZ = {
                                    kind: SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN,
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
                                            if (rawEntry == SaxSchedules.nix) {
                                                var tResultEntryL = {
                                                    kind: SaxSchedulesTyped.BLOCK_LEER,
                                                    MitStrich: true,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryL);
                                            }
                                            else if (rawEntry == SaxSchedules.gnix) {
                                                var tResultEntryL = {
                                                    kind: SaxSchedulesTyped.BLOCK_LEER,
                                                    MitStrich: false,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryL);
                                            }
                                            else if (rawEntry.indexOf(SaxSchedules.ank) == 0) {
                                                var tResultEntryAnk = {
                                                    kind: SaxSchedulesTyped.BLOCK_ANKUNFT,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryAnk);
                                            }
                                            else if (rawEntry == SaxSchedules.kHlt) {
                                                var tResultEntryK = {
                                                    kind: SaxSchedulesTyped.BLOCK_KEINHALT,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryK);
                                            }
                                            else if (rawEntry == SaxSchedules.dick) {
                                                var tResultEntryD = {
                                                    kind: SaxSchedulesTyped.BLOCK_DICKERSTRICH,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryD);
                                            }
                                            else if ((rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) || (rawEntry.indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0)) {
                                                var senkleng = SaxSchedules.SENKRECHT_PREFIX.length;
                                                var waagleng = SaxSchedules.WAAGERECHT_PREFIX.length;
                                                var tResultEntryB = {
                                                    kind: SaxSchedulesTyped.BLOCK_BLOCK,
                                                    Senkrecht: (rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0),
                                                    Valid: false,
                                                    Start: false,
                                                    Breite: 1,
                                                    Hoehe: 1,
                                                    Passend: true,
                                                    Referenzkey: (rawEntry.indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) ? rawEntry.substr(senkleng) : rawEntry.substr(waagleng),
                                                    Blockinhalt: undefined,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                                };
                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }
                                            else if (rawEntry.indexOf("_Z") == 0) {
                                                var tZugNr = rawEntry.substr(2);
                                                var tBlock = {
                                                    Zugnr: tZugNr,
                                                    Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                                };
                                                var tBlockKpl = {
                                                    Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                                    ZugNrOderKlasse: tBlock,
                                                    Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                                    KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                                    Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                                    TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                                    PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                                    Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                                    Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben
                                                };
                                                var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);
                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }
                                            else if ((rawEntry.indexOf(SaxSchedules.k1b3) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k2b3) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k2b4) == 0)
                                                || (rawEntry.indexOf(SaxSchedules.k3b4) == 0)) {
                                                var tBlock = SaxSchedulesZusatzBase.Creator.createTBlockInhaltZugnummerOderKlasse(null, rawEntry);
                                                var tBlockKpl = {
                                                    Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                                    ZugNrOderKlasse: tBlock,
                                                    Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                                    KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                                    Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                                    TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                                    PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                                    Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                                    Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben
                                                };
                                                var tResultEntryB = Importer.createTBlockEintrag_single(tBlockKpl);
                                                tResultZeile.Zeiteintraege.push(tResultEntryB);
                                            }
                                            else if ((rawEntry.indexOf("_") == 0) && (rawEntry.substr(1, 1) == rawEntry.substr(1, 1).toLowerCase())) {
                                                var tBuchstabe = rawEntry.substr(1, 1);
                                                var entry = parseFloat(rawEntry.substr(2));
                                                console.warn("TAGESBEREICH NICHT BERECHNET");
                                                var tZeiteintrag = {
                                                    kind: SaxSchedulesTyped.BLOCK_ZEITEINTRAG,
                                                    Schnellzug: tBuchstabe == "s",
                                                    Referenzkey: (tBuchstabe != "s") ? tBuchstabe : null,
                                                    BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT },
                                                    Zeit: { kind: SaxSchedulesTyped.ZEIT_ROH, RohZeit: entry }
                                                };
                                                tResultZeile.Zeiteintraege.push(tZeiteintrag);
                                            }
                                            else {
                                                var tResultEntryE = {
                                                    kind: SaxSchedulesTyped.BLOCK_ERROR,
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
                                            kind: SaxSchedulesTyped.BLOCK_ZEITEINTRAG,
                                            Schnellzug: false,
                                            Referenzkey: null,
                                            BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT },
                                            Zeit: { kind: SaxSchedulesTyped.ZEIT_ROH, RohZeit: entry }
                                        };
                                        tResultZeile.Zeiteintraege.push(tZeiteintrag);
                                    }
                                }
                                else {
                                    console.log("Zusatzinfo, nicht Zeiteintrag");
                                    var z = Importer.parseZeitZeileZusatzInfo(rawEntry);
                                    if (!z.Valid) {
                                        var tResultEntryE = {
                                            kind: SaxSchedulesTyped.BLOCK_ERROR,
                                            Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(rawEntry)
                                        };
                                        tResultZeile.Zeiteintraege.push(tResultEntryE);
                                    }
                                    tResultZeile.ZeitZeileZusatzInfo = z;
                                }
                            }
                            tResult.Zeilen.push(tResultZeile);
                        }
                        if (("string" == typeof zeile[0]) && ((zeile[0].indexOf(SaxSchedules._zugnr) == 0)
                            || (zeile[0].indexOf(SaxSchedules._klassen) == 0)
                            || (zeile[1].indexOf(SaxSchedules.kl) == 0))) {
                            var tResultZeileNrn = {
                                kind: SaxSchedulesTyped.ZEILE_ZUGNR,
                                ZugNummern: [],
                                ZeitZeileZusatzInfo: undefined
                            };
                            if ((zeile[0].indexOf(SaxSchedules._klassen) == 0) || zeile[1].indexOf(SaxSchedules.kl) == 0) {
                                var x = {
                                    kind: SaxSchedulesTyped.ZEILE_KLASSEN,
                                    KlassenNummern: [],
                                    ZeitZeileZusatzInfo: undefined,
                                    BlockEintrag: undefined
                                };
                                tResultZeileNrn = x;
                                console.log("KLASSENZEILE ", i);
                                console.log("BLOCKK");
                                if (("string" == typeof zeile[0])
                                    && (zeile[1].indexOf(SaxSchedules.kl) == 0)
                                    && (zeile[0].indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0)) {
                                    var tKey = zeile[0].substr(SaxSchedules.WAAGERECHT_PREFIX.length);
                                    console.log("BLOCKK2");
                                    x.BlockEintrag = {
                                        kind: SaxSchedulesTyped.BLOCK_BLOCK,
                                        Start: true,
                                        Senkrecht: false,
                                        Breite: 1,
                                        Hoehe: 1,
                                        Passend: true,
                                        Referenzkey: tKey,
                                        Blockinhalt: undefined,
                                        Valid: true,
                                        BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                    };
                                }
                            }
                            for (var zi = 2; zi < zeile.length; zi++) {
                                if ("number" == typeof zeile[zi]) {
                                    var tBlockK = {
                                        Zugnr: zeile[zi].toString(),
                                        Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                    };
                                    var tBlockKpl = {
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        ZugNrOderKlasse: tBlockK,
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben
                                    };
                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tWert);
                                            break;
                                    }
                                }
                                else if (SaxSchedules.gnix === zeile[zi]) {
                                    var tLeer = {
                                        kind: SaxSchedulesTyped.BLOCK_LEER,
                                        MitStrich: false,
                                        BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                    };
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tLeer);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tLeer);
                                            break;
                                    }
                                }
                                else if (SaxSchedules._ === zeile[zi]) {
                                    var tLeer = {
                                        kind: SaxSchedulesTyped.BLOCK_LEER,
                                        MitStrich: true,
                                        BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                    };
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tLeer);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tLeer);
                                            break;
                                    }
                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && ((zeile[zi].indexOf(SaxSchedules.k1b3) == 0)
                                    || (zeile[zi].indexOf(SaxSchedules.k2b3) == 0)
                                    || (zeile[zi].indexOf(SaxSchedules.k2b4) == 0)
                                    || (zeile[zi].indexOf(SaxSchedules.k3b4) == 0))) {
                                    var tKlassenstring = zeile[zi];
                                    var tBlockK = SaxSchedulesZusatzBase.Creator.createTBlockInhaltZugnummerOderKlasse(null, tKlassenstring);
                                    var tBlockKpl = {
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        ZugNrOderKlasse: tBlockK,
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben
                                    };
                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tWert);
                                            break;
                                    }
                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && ((zeile[zi].indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0)
                                    || (zeile[zi].indexOf(SaxSchedules.WAAGERECHT_PREFIX) == 0))) {
                                    var senkleng = SaxSchedules.SENKRECHT_PREFIX.length;
                                    var waagleng = SaxSchedules.WAAGERECHT_PREFIX.length;
                                    var tResultEntryB = {
                                        kind: SaxSchedulesTyped.BLOCK_BLOCK,
                                        Senkrecht: (zeile[zi].indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0),
                                        Valid: false,
                                        Start: false,
                                        Breite: 1,
                                        Hoehe: 1,
                                        Passend: true,
                                        Referenzkey: (zeile[zi].indexOf(SaxSchedules.SENKRECHT_PREFIX) == 0) ? zeile[zi].substr(senkleng) : zeile[zi].substr(waagleng),
                                        Blockinhalt: undefined,
                                        BerechneterZugLauf: { kind: SaxSchedulesTyped.ZUGLAUF_UNBEKANNT }
                                    };
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tResultEntryB);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                            tResultZeileNrn.KlassenNummern.push(tResultEntryB);
                                            break;
                                    }
                                }
                                else if (("string" == typeof zeile[zi]) && (zeile[zi] != null) && (("string" == typeof zeile[0]) && ((zeile[0].indexOf(SaxSchedules._zugnr) == 0)))) {
                                    var tBlockK = {
                                        Zugnr: zeile[zi].toString(),
                                        Klassen: SaxSchedulesZusatzBase.EKlassen.NichtAngegeben
                                    };
                                    var tBlockKpl = {
                                        Verweistyp: SaxSchedulesZusatzBase.Creator.createTVerweisEmbedded(),
                                        ZugNrOderKlasse: tBlockK,
                                        Gueltig: { kind: SaxSchedulesZusatzBase.GUELTIG_IMMER },
                                        KbsAbweichung: SaxSchedulesZusatzBase.Creator.createKbsAbweichungKeine(),
                                        Fahrtage: { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER },
                                        TextOrt: { kind: SaxSchedulesZusatzBase.TEXTORT_NICHTANGEGEBEN },
                                        PfeilInfo: { kind: SaxSchedulesZusatzBase.TKEINPFEIL },
                                        Unbekannt: SaxSchedulesZusatzBase.Creator.createBlockInhaltRawOk(),
                                        Bahnverwaltung: SaxSchedulesTyped.EBahnverwaltung.NichtAngegeben
                                    };
                                    var tWert = Importer.createTBlockEintrag_single(tBlockKpl);
                                    switch (tResultZeileNrn.kind) {
                                        case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                            tResultZeileNrn.ZugNummern.push(tWert);
                                            break;
                                        case (SaxSchedulesTyped.ZEILE_KLASSEN):
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
                                            kind: SaxSchedulesTyped.BLOCK_ERROR,
                                            Grund: "ZeitZeile ZeitZeilenZusatzInfo not fully implemented for " + JSON.stringify(zeile[zi])
                                        };
                                        switch (tResultZeileNrn.kind) {
                                            case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                                tResultZeileNrn.ZugNummern.push(tResultEntryE);
                                                break;
                                            case (SaxSchedulesTyped.ZEILE_KLASSEN):
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
                    var tParsed = SaxSchedulesZusatzBase.Importer.parseIZellenEigenschaft(zi);
                    tResult.ZusatzBloecke.push(tParsed);
                });
            }
            return tResult;
        };
        Importer.assertNever = function (x) {
            throw new Error("Unexpected object: " + x);
        };
        return Importer;
    }());
    SaxSchedulesTyped.Importer = Importer;
})(SaxSchedulesTyped || (SaxSchedulesTyped = {}));
var SaxSchedulesTyped;
(function (SaxSchedulesTyped) {
    var Nachberechnung = (function () {
        function Nachberechnung() {
        }
        Nachberechnung.berechneZugLaeufe = function (s) {
            var tLen = 0;
            s.Zeilen.forEach(function (z) {
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                        break;
                    default:
                        return SaxSchedulesTyped.Importer.assertNever(z);
                }
            });
            for (var sp = 0; sp < tLen; sp++) {
                var tZugNr = "";
                var tZugNrRefKey = null;
                var tZugNrAlt = "";
                var tZugZweiterStern = false;
                s.Zeilen.forEach(function (z) {
                    switch (z.kind) {
                        case SaxSchedulesTyped.ZEILE_ZUGNR:
                            var tZNEintrag = z.ZugNummern[sp];
                            switch (tZNEintrag.kind) {
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    if (tZNEintrag.Blockinhalt) {
                                        tZugNr = tZNEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr;
                                        tZNEintrag.BerechneterZugLauf = {
                                            kind: SaxSchedulesTyped.ZUGLAUF_BERECHNET,
                                            isStart: false,
                                            isEnd: false,
                                            isDeleted: false,
                                            everyDay: true,
                                            ZugNr: tZugNr
                                        };
                                    }
                                    else {
                                        tZNEintrag.BerechneterZugLauf = {
                                            kind: SaxSchedulesTyped.ZUGLAUF_BERECHNET,
                                            isStart: false,
                                            isEnd: false,
                                            isDeleted: false,
                                            everyDay: true,
                                            ZugNr: tZugNr
                                        };
                                    }
                                    break;
                                case SaxSchedulesTyped.BLOCK_LEER:
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                    tZNEintrag.BerechneterZugLauf = {
                                        kind: SaxSchedulesTyped.ZUGLAUF_BERECHNET,
                                        isStart: false,
                                        isEnd: false,
                                        isDeleted: false,
                                        everyDay: true,
                                        ZugNr: tZugNr
                                    };
                            }
                            break;
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                            var tEintrag = { kind: SaxSchedulesTyped.BLOCK_ERROR, Grund: "temp" };
                            if (z.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                                tEintrag = z.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = z.Zeiteintraege[sp];
                            }
                            switch (tEintrag.kind) {
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                    if (tEintrag.Referenzkey) {
                                        var tZeitEintrag = tEintrag;
                                        s.ZusatzBloecke.forEach(function (fe) {
                                            switch (fe.Verweistyp.kind) {
                                                case SaxSchedulesZusatzBase.VERWEIS_FERN:
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
                                case SaxSchedulesTyped.BLOCK_LEER:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                case SaxSchedulesTyped.BLOCK_BLOCK:
                                    if (tEintrag.kind === SaxSchedulesTyped.BLOCK_BLOCK) {
                                        if (tEintrag.Blockinhalt) {
                                            if ((tEintrag.Blockinhalt.Verweistyp.kind === SaxSchedulesZusatzBase.VERWEIS_PASSEND) ||
                                                (tEintrag.Blockinhalt.Verweistyp.kind === SaxSchedulesZusatzBase.VERWEIS_EMBEDDED)) {
                                                if (tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr) {
                                                    tZugNr = tEintrag.Blockinhalt.ZugNrOderKlasse.Zugnr;
                                                }
                                            }
                                        }
                                    }
                                    tEintrag.BerechneterZugLauf = {
                                        kind: SaxSchedulesTyped.ZUGLAUF_BERECHNET,
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
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                    break;
                                default:
                                    return SaxSchedulesTyped.Importer.assertNever(tEintrag);
                            }
                            break;
                        default:
                            return SaxSchedulesTyped.Importer.assertNever(z);
                    }
                });
            }
            for (var sp = 0; sp < tLen; sp++) {
                var tCurrentZugNr;
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = tZeilenZahl - 1; zei >= 0; zei--) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                            var tEintrag = { kind: SaxSchedulesTyped.BLOCK_ERROR, Grund: "temp" };
                            if (tZeile.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            if ((tEintrag.kind != SaxSchedulesTyped.BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET)) {
                                if ((tCurrentZugNr != tEintrag.BerechneterZugLauf.ZugNr)) {
                                    var TEb = tEintrag.BerechneterZugLauf;
                                    if (tEintrag.BerechneterZugLauf.ZugNr) {
                                        tEintrag.BerechneterZugLauf.isEnd = true;
                                    }
                                    tCurrentZugNr = TEb.ZugNr;
                                }
                            }
                            break;
                        case SaxSchedulesTyped.ZEILE_ZUGNR:
                    }
                }
            }
            for (var sp = 0; sp < tLen; sp++) {
                var tCurrentZugNr;
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = 0; zei < tZeilenZahl; zei++) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                        case SaxSchedulesTyped.ZEILE_ZUGNR:
                            var tEintrag = { kind: SaxSchedulesTyped.BLOCK_ERROR, Grund: "temp" };
                            if (tZeile.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else if (tZeile.kind == SaxSchedulesTyped.ZEILE_ZUGNR) {
                                tEintrag = tZeile.ZugNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            if ((tEintrag.kind != SaxSchedulesTyped.BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET)) {
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
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                            var tEintrag = { kind: SaxSchedulesTyped.BLOCK_ERROR, Grund: "temp" };
                            if (tZeile.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            if ((tEintrag.kind != SaxSchedulesTyped.BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET)) {
                                var teb = tEintrag.BerechneterZugLauf;
                                if (((teb.isEnd == true) || tNeedEnd) &&
                                    ((tEintrag.kind == SaxSchedulesTyped.BLOCK_LEER)
                                        || ((tEintrag.kind == SaxSchedulesTyped.BLOCK_BLOCK) && (tEintrag.Start == false)))) {
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
    SaxSchedulesTyped.Nachberechnung = Nachberechnung;
})(SaxSchedulesTyped || (SaxSchedulesTyped = {}));
(function (SaxSchedulesTyped) {
    SaxSchedulesTyped.LAUFEINTRAG_NORMAL = "LAUFEINTRAG_NORMAL";
    SaxSchedulesTyped.LAUFEINTRAG_KEINHALT = "LAUFEINTRAG_KEINHALT";
    SaxSchedulesTyped.LAUFEINTRAG_AN = "LAUFEINTRAG_AN";
    SaxSchedulesTyped.LAUFEINTRAG_GELOESCHT = "LAUFEINTRAG_GELOESCHT";
    SaxSchedulesTyped.LAUFEINTRAG_KOMMEAUSKBS = "LAUFEINTRAG_KOMMEAUSKBS";
    SaxSchedulesTyped.LAUFEINTRAG_VERLASSENACHKBS = "LAUFEINTRAG_VERLASSENACHKBS";
    var ZugExtraktor = (function () {
        function ZugExtraktor() {
        }
        ZugExtraktor.printZuglauf = function (arr) {
            arr.forEach(function (a) {
                var ae = a;
                switch (ae.kind) {
                    case SaxSchedulesTyped.LAUFEINTRAG_KEINHALT:
                        console.log(ae.BhfTag + " kein Halt");
                        break;
                    case SaxSchedulesTyped.LAUFEINTRAG_NORMAL:
                        console.log(ae.BhfTag + " " + (ae.AnZeit ? "an " + ae.AnZeit.src : "") + (ae.AbZeit ? "ab " + ae.AbZeit.src : ""));
                        break;
                    case SaxSchedulesTyped.LAUFEINTRAG_KOMMEAUSKBS:
                        console.log(" komme aus kbs");
                        break;
                    case SaxSchedulesTyped.LAUFEINTRAG_VERLASSENACHKBS:
                        console.log(" verlasse nach kbs");
                        break;
                    default:
                        return SaxSchedulesTyped.Importer.assertNever(ae);
                }
            });
        };
        ZugExtraktor.fixZugLauf = function (z) {
            var tResultReversed = [];
            for (var i = z.length - 1; i >= 0; i--) {
                var en = z[i];
                switch (en.kind) {
                    case SaxSchedulesTyped.LAUFEINTRAG_NORMAL:
                    case SaxSchedulesTyped.LAUFEINTRAG_KEINHALT:
                    case SaxSchedulesTyped.LAUFEINTRAG_KOMMEAUSKBS:
                    case SaxSchedulesTyped.LAUFEINTRAG_VERLASSENACHKBS:
                        tResultReversed.push(en);
                        break;
                    case SaxSchedulesTyped.LAUFEINTRAG_GELOESCHT:
                        break;
                    case SaxSchedulesTyped.LAUFEINTRAG_AN:
                        var tVor = z[i - 1];
                        switch (tVor.kind) {
                            case SaxSchedulesTyped.LAUFEINTRAG_NORMAL:
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
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                        tLen = z.Zeiteintraege.length;
                        break;
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                        break;
                    default:
                        return SaxSchedulesTyped.Importer.assertNever(z);
                }
            });
            var tCurrentZugNr;
            var tCurrentFolge = [];
            var tCurrentFahrtage = {
                kind: SaxSchedulesZusatzBase.FAEHRT_IMMER
            };
            for (var sp = 0; sp < tLen; sp++) {
                var tZeilenZahl = s.Zeilen.length;
                for (var zei = 0; zei < tZeilenZahl; zei++) {
                    var tZeile = s.Zeilen[zei];
                    switch (tZeile.kind) {
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                        case SaxSchedulesTyped.ZEILE_NORMAL:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                        case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                        case SaxSchedulesTyped.ZEILE_KLASSEN:
                        case SaxSchedulesTyped.ZEILE_ZUGNR:
                            var tEintrag = { kind: SaxSchedulesTyped.BLOCK_ERROR, Grund: "temp" };
                            if (tZeile.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                                tEintrag = tZeile.KlassenNummern[sp];
                            }
                            else if (tZeile.kind == SaxSchedulesTyped.ZEILE_ZUGNR) {
                                tEintrag = tZeile.ZugNummern[sp];
                            }
                            else {
                                tEintrag = tZeile.Zeiteintraege[sp];
                            }
                            var tJetztSpeichern = false;
                            if (tCurrentZugNr) {
                                if ((tEintrag.kind != SaxSchedulesTyped.BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET)) {
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
                                tCurrentFahrtage = { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER };
                            }
                            if ((tEintrag.kind != SaxSchedulesTyped.BLOCK_ERROR) && (tEintrag.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET)) {
                                if ((tCurrentZugNr == undefined)) {
                                    if (tEintrag.BerechneterZugLauf.ZugNr.length > 0) {
                                        tCurrentFolge = [];
                                        tCurrentFahrtage = { kind: SaxSchedulesZusatzBase.FAEHRT_IMMER };
                                        tCurrentZugNr = tEintrag.BerechneterZugLauf.ZugNr;
                                        console.log("start new ", tCurrentZugNr);
                                    }
                                }
                                switch (tEintrag.kind) {
                                    case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
                                        switch (tZeile.kind) {
                                            case SaxSchedulesTyped.ZEILE_NORMAL:
                                                var tEnt = {
                                                    kind: SaxSchedulesTyped.LAUFEINTRAG_NORMAL,
                                                    BhfTag: tZeile.BhfTag,
                                                    AnZeit: null,
                                                    AbZeit: null
                                                };
                                                if (tEintrag.Zeit.kind == SaxSchedulesTyped.ZEIT_24) {
                                                    if ((tZeile.AnAb == SaxSchedulesTyped.EAnAb.FirstAb) || (tZeile.AnAb == SaxSchedulesTyped.EAnAb.FollowAb)) {
                                                        tEnt.AbZeit = tEintrag.Zeit;
                                                    }
                                                    if ((tZeile.AnAb == SaxSchedulesTyped.EAnAb.An)) {
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
                                    case SaxSchedulesTyped.BLOCK_LEER:
                                        break;
                                    case SaxSchedulesTyped.BLOCK_KEINHALT:
                                        switch (tZeile.kind) {
                                            case SaxSchedulesTyped.ZEILE_NORMAL:
                                                var tEntK = {
                                                    kind: SaxSchedulesTyped.LAUFEINTRAG_KEINHALT,
                                                    BhfTag: tZeile.BhfTag
                                                };
                                                tCurrentFolge.push(tEntK);
                                                break;
                                        }
                                        break;
                                    case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                        console.warn("Todo handle ankunft, soll vorherigen eintrag auf an wechseln");
                                        if (tCurrentFolge) {
                                            var tEntAn = {
                                                kind: SaxSchedulesTyped.LAUFEINTRAG_AN
                                            };
                                            tCurrentFolge.push(tEntAn);
                                        }
                                        break;
                                    case SaxSchedulesTyped.BLOCK_BLOCK:
                                        console.warn("todo auszulesender blockinhalt: ", tEintrag.Blockinhalt);
                                        if (tEintrag.Passend) {
                                            if (tEintrag.Blockinhalt) {
                                                switch (tEintrag.Blockinhalt.KbsAbweichung.kind) {
                                                    case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_AUS:
                                                        var tEntKo = {
                                                            kind: SaxSchedulesTyped.LAUFEINTRAG_KOMMEAUSKBS
                                                        };
                                                        tCurrentFolge.push(tEntKo);
                                                        break;
                                                    case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_NACH:
                                                        var tEntN = {
                                                            kind: SaxSchedulesTyped.LAUFEINTRAG_VERLASSENACHKBS
                                                        };
                                                        tCurrentFolge.push(tEntN);
                                                        break;
                                                    case SaxSchedulesZusatzBase.KBS_ABWEICHUNG_KEINE:
                                                        break;
                                                    default:
                                                        return SaxSchedulesTyped.Importer.assertNever(tEintrag.Blockinhalt.KbsAbweichung);
                                                }
                                                switch (tEintrag.Blockinhalt.Fahrtage.kind) {
                                                    case SaxSchedulesZusatzBase.FAEHRT_WERKTAGS:
                                                        tCurrentFahrtage = { kind: SaxSchedulesZusatzBase.FAEHRT_WERKTAGS };
                                                        break;
                                                    case SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS:
                                                        tCurrentFahrtage = { kind: SaxSchedulesZusatzBase.FAEHRT_SONNUNDFESTTAGS };
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                    case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                        break;
                                    default:
                                        return SaxSchedulesTyped.Importer.assertNever(tEintrag);
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
    SaxSchedulesTyped.ZugExtraktor = ZugExtraktor;
})(SaxSchedulesTyped || (SaxSchedulesTyped = {}));
var SaxRender;
(function (SaxRender) {
    var Renderer = (function () {
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
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                        if (z.ZeitZeileZusatzInfo) {
                            switch (z.ZeitZeileZusatzInfo.Fahrpreise.kind) {
                                case SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE:
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK:
                                    tFahrpreisSpalten = 4;
                                    if (tErsteBelegteFahrpreisZeile < 0) {
                                        tErsteBelegteFahrpreisZeile = zidx;
                                    }
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_AB:
                                    if (tErsteBelegteFahrpreisZeile < 0) {
                                        tErsteBelegteFahrpreisZeile = zidx;
                                    }
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH:
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
            if (tZeile0.kind == SaxSchedulesTyped.ZEILE_ZUGNR) {
                tSpaltenGesamtZahl += tZeile0.ZugNummern.length;
            }
            else if (tZeile0.kind == SaxSchedulesTyped.ZEILE_KLASSEN) {
                tSpaltenGesamtZahl += tZeile0.KlassenNummern.length;
            }
            else {
                tSpaltenGesamtZahl += tZeile0.Zeiteintraege.length;
            }
            input.ZusatzBloecke.forEach(function (zb) {
                if (zb.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT) {
                    if (zb.TextOrt.kind == SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE) {
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
                if (zb.Verweistyp.kind == SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT) {
                    if (zb.TextOrt.kind == SaxSchedulesZusatzBase.TEXTORT_GANZESPALTE) {
                        tSpalteNach[zb.TextOrt.UebersprungeneSpalten] = { breite: zb.TextOrt.Spaltenbreite, bl: zb };
                    }
                }
            });
            console.log("tSpalteNach ", tSpalteNach);
            var tErsteGlobalZeile = true;
            input.Zeilen.forEach(function (z, zindex) {
                var tr = document.createElement("tr");
                switch (z.kind) {
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                    case SaxSchedulesTyped.ZEILE_NORMAL:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                    case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                    case SaxSchedulesTyped.ZEILE_ZUGNR:
                    case SaxSchedulesTyped.ZEILE_KLASSEN:
                        if ((tTypDerLetztenZeile != z.kind)
                            && (tTypDerLetztenZeile != SaxSchedulesTyped.ZEILE_ZUGNR)
                            && (tTypDerLetztenZeile != "")) {
                            var trenncl = "";
                            if (tTypDerLetztenZeile == SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB) {
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
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN:
                            case SaxSchedulesTyped.ZEILE_NORMAL:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB:
                            case SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN:
                                var tKm = document.createElement("div");
                                tKm.setAttribute("class", "KM");
                                var tBhfSpanClass = "";
                                if (z.kind === SaxSchedulesTyped.ZEILE_NORMAL) {
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
                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_AB) {
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    tdk.innerHTML += "<div class=\"" + "ZubringerAbAus" + "\">" + "aus" + "</div>";
                                    tdk.innerHTML += "<div class=\"" + "ZubringerAbBhf" + "\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS zubringer ab");
                                }
                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_ZUBRINGER_IN) {
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    tdk.innerHTML += "<div class=\"" + "ZubringerInI" + "\">" + "i." + "</div>";
                                    tdk.innerHTML += "<div class=\"" + "ZubringerInBhf" + "\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS zubringer in");
                                }
                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_AB) {
                                    tdk.setAttribute("class", "notImplemented ErsteSpalteAnschluss");
                                    tdk.innerHTML += "<div class=\"" + "WeiterAbAus" + "\">" + "a." + "</div>";
                                    tdk.innerHTML += "<div class=\"" + "WeiterAbBhf" + "\">" + z.BhfTag + "</div>";
                                    tdk.setAttribute("title", "ANSCHLUSS weiter ab");
                                }
                                if (z.kind === SaxSchedulesTyped.ZEILE_ANSCHLUSS_WEITER_IN) {
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
                            case (SaxSchedulesTyped.ZEILE_ZUGNR):
                                tEintraege = z.ZugNummern;
                                var tText = document.createElement("div");
                                tText.setAttribute("class", "ZugNrText");
                                tText.innerHTML = "Zugs-Nr.";
                                tdk.appendChild(tText);
                                break;
                            case (SaxSchedulesTyped.ZEILE_KLASSEN):
                                tEintraege = z.KlassenNummern;
                                tdk.innerHTML = "";
                                if (z.BlockEintrag != null) {
                                    tdk.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(z.BlockEintrag.Blockinhalt, false);
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
                            SaxRender.Renderer.globalespalten(tr, tRealeSpaltenBisher, tErsteGlobalZeile, tSpalteNach);
                            var tAppendTD = true;
                            var tdd = document.createElement("td");
                            var td = document.createElement("div");
                            tdd.appendChild(td);
                            switch (ze.kind) {
                                case SaxSchedulesTyped.BLOCK_LEER:
                                    td.innerHTML = ((ze.MitStrich == true) ? "-" : "");
                                    td.title = " Z" + (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_KEINHALT:
                                    td.innerHTML = " | ";
                                    td.title = " Z" + (ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-");
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_BLOCK:
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
                                            tSenkrechtDiv.innerHTML = (ze.Start ? SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false) : "") + tDebugString;
                                            tSenkrechtDiv.setAttribute("class", "senkrecht " + "senkOrgBreit-" + ze.Breite + " " + "senkOrgHoch-" + ze.Hoehe);
                                            td.appendChild(tSenkrechtDiv);
                                        }
                                        else {
                                            td.setAttribute("class", "blockWaagerecht valid");
                                            td.innerHTML = (ze.Start ? SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(ze.Blockinhalt, false) : "") + tDebugString;
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
                                case SaxSchedulesTyped.BLOCK_ERROR:
                                    console.warn("NormalZeile Erroreintrag not yet implemented");
                                    td.setAttribute("class", "notImplemented");
                                    td.innerHTML = JSON.stringify(ze);
                                    break;
                                case SaxSchedulesTyped.BLOCK_ZEITEINTRAG:
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
                                            if (tVerweis.kind == SaxSchedulesZusatzBase.VERWEIS_FERN) {
                                                if (tVerweis.ReferenzKey === ze.Referenzkey) {
                                                    tOptical = tVerweis.OpticalMarker;
                                                }
                                            }
                                        }
                                        tSpanOpticalMarker.innerHTML = (tOptical != null) ? SaxSchedulesZusatzBase.Renderer.renderOpticalMarker(tOptical) : "";
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
                                case SaxSchedulesTyped.BLOCK_DICKERSTRICH:
                                    td.innerHTML = "DICK";
                                    td.setAttribute("class", "DickStrich");
                                    td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                case SaxSchedulesTyped.BLOCK_ANKUNFT:
                                    td.innerHTML = "Ank.";
                                    td.title = ze.BerechneterZugLauf.kind == SaxSchedulesTyped.ZUGLAUF_BERECHNET ? ze.BerechneterZugLauf.ZugNr : "-";
                                    td.style.backgroundColor = tCalcRgba(ze.BerechneterZugLauf);
                                    td.setAttribute("class", td.getAttribute("class") + berechneStartEndString(ze));
                                    break;
                                default: return SaxSchedulesTyped.Importer.assertNever(ze);
                            }
                            if (tAppendTD) {
                                tr.appendChild(tdd);
                                tRealeSpaltenBisher++;
                            }
                        });
                        SaxRender.Renderer.globalespalten(tr, tRealeSpaltenBisher, tErsteGlobalZeile, tSpalteNach);
                        if (z.ZeitZeileZusatzInfo) {
                            var f = z.ZeitZeileZusatzInfo.Fahrpreise;
                            switch (f.kind) {
                                case SaxSchedulesTyped.FAHRPREIS_KEINE_ANGABE:
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
                                case SaxSchedulesTyped.FAHRPREIS_AB:
                                    var tde = document.createElement("td");
                                    tde.innerHTML = "ab " + f.AbfahrtsOrt;
                                    tde.setAttribute("colspan", "" + tFahrpreisSpalten);
                                    tr.appendChild(tde);
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH:
                                    var tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach2;
                                    tr.appendChild(tde);
                                    tde = document.createElement("td");
                                    tde.innerHTML = "" + f.Einfach3;
                                    tr.appendChild(tde);
                                    break;
                                case SaxSchedulesTyped.FAHRPREIS_EINFACH_UND_RUECK:
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
                    default: return SaxSchedulesTyped.Importer.assertNever(z);
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
                    case SaxSchedulesZusatzBase.VERWEIS_GLOBAL_DEFAULT:
                        switch (zb.TextOrt.kind) {
                            case SaxSchedulesZusatzBase.TEXTORT_LINKSVONHEADER:
                                console.log("x tHeadLeftDiv ", tHeadLeftDiv);
                                var e = document.getElementById(tHeadLeftDiv.getAttribute("id"));
                                if ((e) && (e)) {
                                    e.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                }
                                break;
                            case SaxSchedulesZusatzBase.TEXTORT_RECHTSVONHEADER:
                                console.log("x tHeadRightDiv ", tHeadRightDiv);
                                var e = document.getElementById(tHeadRightDiv.getAttribute("id"));
                                if ((e) && (e)) {
                                    e.innerHTML += SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false);
                                }
                                break;
                        }
                }
                tDiv.innerHTML += JSON.stringify(zb.Verweistyp) + " TextOrt: " + JSON.stringify(zb.TextOrt) + "..." + SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(zb, false) + "<br>";
            });
        };
        Renderer.globalespalten = function (tr, RealeSpaltenBisherRef, tErsteGlobalzeile, tSpalteNach) {
            var tTestg = true;
            while (tTestg) {
                if (tSpalteNach[RealeSpaltenBisherRef] != undefined) {
                    var tZahlXX = tSpalteNach[RealeSpaltenBisherRef].breite;
                    var tEmpty = SaxSchedulesZusatzBase.Renderer.isEmptyBIBGlobal(tSpalteNach[RealeSpaltenBisherRef].bl);
                    for (var iiii = 0; iiii < tZahlXX; iiii++) {
                        console.log("read+++");
                        var tdkx = document.createElement("td");
                        tdkx.setAttribute("class", tEmpty ? "TEMPTY " : "bla " + tErsteGlobalzeile + iiii + "of" + tZahlXX);
                        var tdk = document.createElement("div");
                        var tdk2 = document.createElement("div");
                        if ((!tEmpty) && (iiii == 0) && (tErsteGlobalzeile)) {
                            console.log("notempty");
                            tdk2.innerHTML = SaxSchedulesZusatzBase.Renderer.TBlockInhaltNachRenderKomplex(tSpalteNach[RealeSpaltenBisherRef].bl, true);
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
    SaxRender.Renderer = Renderer;
})(SaxRender || (SaxRender = {}));
var SaxApp;
(function (SaxApp) {
    var Sched = (function () {
        function Sched() {
        }
        Sched["do"] = function (input) {
            var tResult = SaxSchedulesTyped.Importer.parse(input);
            SaxSchedulesTyped.Validator.validate_mergeBlocks(tResult);
            SaxSchedulesTyped.Validator.validate_addZusatzinfobase(tResult);
            SaxSchedulesTyped.Importer.berechneZeiten(tResult);
            SaxSchedulesTyped.Nachberechnung.berechneZugLaeufe(tResult);
            SaxSchedulesTyped.Validator.validate_move_Anschluss_ZusatzInfo(tResult);
            var tZugl = SaxSchedulesTyped.ZugExtraktor.findeZuglaeufe(tResult);
            tZugl.forEach(function (zl) {
                console.log("--- Lauf: " + zl.Nummer + zl.TagAbhaengig[0].Gueltig.kind);
                SaxSchedulesTyped.ZugExtraktor.printZuglauf(zl.TagAbhaengig[0].Ablauf);
            });
            var t = document.getElementById("testdiv");
            if (t != null) {
                SaxRender.Renderer.renderTable(t, tResult);
            }
            return tResult;
        };
        return Sched;
    }());
    SaxApp.Sched = Sched;
})(SaxApp || (SaxApp = {}));
//# sourceMappingURL=sched.js.map