// GLOBAL TS without own export import, i.e. outside import system
// so this imports transparent 
// so hab ich mir das gewuenscht

   enum EKlassen {
        NichtAngegeben= "_Klassen_nicht_angegeben",
        
        Klassen1= "_Klassen_1",
        Klassen1bis2= "_Klassen_1_bis_2",
        Klassen1bis3 = "_Klassen_1_bis_3",
        Klassen1bis4 = "_Klassen_1_bis_4",

        Klassen2bis3 = "_Klassen_2_bis_3",
        Klassen2bis4 = "_Klassen_2_bis_4",
        
        Klassen3= "_Klassen_3",
        Klassen3bis4= "_Klassen_3_bis_4",

        KlassenNurEine= "_Klassen_nur_eine"
    }

//hinweise3 form
var Kl1 = EKlassen.Klassen1;
var Kl1bis2 = EKlassen.Klassen1bis2;
var Kl1bis3 = EKlassen.Klassen1bis3;
var Kl1bis4 = EKlassen.Klassen1bis4;

var Kl2bis3 = EKlassen.Klassen2bis3;
var Kl2bis4 = EKlassen.Klassen2bis4;

var Kl3 = EKlassen.Klassen3;
var Kl3bis4 = EKlassen.Klassen3bis4;
var KlNurEine = EKlassen.KlassenNurEine;

// alte form
var _klassen = "_Klassen_";
var k1b3 = EKlassen.Klassen1bis3; //"_Klassen_1_bis_3";
var k2b4 = EKlassen.Klassen2bis4; // "_Klassen_2_bis_4";
var k2b3 = EKlassen.Klassen2bis3; // "_Klassen_2_bis_3";
var k3b4 = EKlassen.Klassen3bis4; // "_Klassen_3_bis_4";
