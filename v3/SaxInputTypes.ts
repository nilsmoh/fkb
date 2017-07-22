/**
 * Typen um Fahrplaene einzugeben
 */


export interface SingleDirectionScheduleInput {
    route1900: string | number;
    comment?: string;
    todo?: string;
    seite: number; // seite in FKB wie gedruckt
    klassen?: string;
    caption: string;
    zeilen: Array<Array<(string | number | IZeilenZusatzInfo)>>;
    ZellenVerweise?: Array<IZellenEigenschaft>;
}

//rechts hinter zeile
export interface IZeilenZusatzInfo {
    ort?: string;
    nr?: string | number;
    nrn?: Array<(string | number)>;
    fk?: Array<number>;
    fkab?: string;
    FROM?: string;
    NACH?: string;
    via?: string;
    lfd?: number; //angenommener oder realer zusammenhang zwischen ANSCHLUSS Zeilen -> muss validiert werden
}

// zusatzinformation untern
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

//scope
export var defaultzug = "defaultzug";
export var restspalte = "restspalte";


//export var zn = "_zn";  //zugnummer for aliasing only
export var ab = "_Ab";
export var an = "_An";
export var zn = "_xZugnr";
export var kl = "_xKlassen";

export var _anschluss_aus = "_Anschluss_aus"; //  aus Zwickau  // Abfahrtszeit in Zwickau
export var _anschluss_aus_ziel = "_Anschluss_aus_ankunft"; // aus Karlsbad in Johanngeorgenstadt
export var _anschluss_nach_start = "_Anschluss_nach_abfahrt"; // nach Karlsbad ab Johanngeorgenstadt
export var _anschluss_nach_in = "_Anschluss_nach_in"; // in Zwickau // Ankunftszeit nach Nutzung eines nicht naeher spezifizierten anschlusszugs in Zwickau

export var _klassen = "_Klassen_";

export var _zugnr = "_xZugnr";

export var WaltersdfHst = "Waltersdorf Haltest.";
export var MittwMrkb = "Mittweida-Markrsb.";

export var SENKRECHT_PREFIX = "_senkrecht_";
export var WAAGERECHT_PREFIX = "_waagerecht_";
var ORTPREFIX = "_Ort_";
export var MARKERPREFIX = "_markerAussehen_";

export var fatdot = MARKERPREFIX + "fatdot";  // dicker schwarzer runder punkt
export var cross = MARKERPREFIX + "christlichesKreuz";  // normales Kirchenkreuz
export var chooseown = MARKERPREFIX + "selbstEinenFreienAussuchen"; // im FKB durch geschweifte klammern

var BAHNVERWALTUNGPREFIX = "_bahnverwaltung_";
export var Sachs = BAHNVERWALTUNGPREFIX + "Sachs";

//s1= senkrecht start 1
//se= senkrecht ende // letzter eintrag

export var nix = "_Nix"; // waagerechter strich
export var _ = "_Nix";
export var gnix = "_Nixleer"; // wirklich leer

export var kHlt = "_Kein_Halt";
export var ank = "_XZug_endet"; // an fuer zuege die nur auf teilstrecke fahren
export var Ank = "_XZug_endet"; // an fuer zuege die nur auf teilstrecke fahren

export var wa = WAAGERECHT_PREFIX + "a";

export var sa = SENKRECHT_PREFIX + "a";
export var sb = SENKRECHT_PREFIX + "b";
export var sc = SENKRECHT_PREFIX + "c";
export var sd = SENKRECHT_PREFIX + "d";
export var se = SENKRECHT_PREFIX + "e";
export var sf = SENKRECHT_PREFIX + "f";
export var sg = SENKRECHT_PREFIX + "g";
export var sh = SENKRECHT_PREFIX + "h";
export var si = SENKRECHT_PREFIX + "i";
export var sk = SENKRECHT_PREFIX + "k";
export var sl = SENKRECHT_PREFIX + "l";

export var sj = SENKRECHT_PREFIX + "j";
export var sm = SENKRECHT_PREFIX + "m";
export var sp = SENKRECHT_PREFIX + "p";


export var wx = WAAGERECHT_PREFIX + "x";

export var LE = ORTPREFIX + "Leipzig";
export var CH = ORTPREFIX + "Chemnitz";
export var ZW = ORTPREFIX + "Zwickau";
export var SC = ORTPREFIX + "Schwarzenberg";
export var JO = ORTPREFIX + "Johangeorgenstadt";
export var KA = ORTPREFIX + "Karlsbad BEB";
export var AU = ORTPREFIX + "Aue";
export var AN = ORTPREFIX + "Annaberg";
export var LU = ORTPREFIX + "Lugau";
export var CT = ORTPREFIX + "Chemnitz ü.Thalheim";
export var CN = ORTPREFIX + "Chemnitz ü.Neu.";

export var k2b4 = "_Klassen_2_bis_4";
export var k2b3 = "_Klassen_2_bis_3";
export var k3b4 = "_Klassen_3_bis_4";
export var k1b3 = "_Klassen_1_bis_3";

//var rundvoll = "_MARKER_rundvoll";

export var fern = "_VERWEISTYP_fern";
export var passend = "_VERWEISTYP_passend";
export var global = "_VERWEISTYP_GLOBAL";
export var pfeilziel = "_VERWEISTYP_pfeilziel";
export var pfeilstart = "_VERWEISTYP_pfeilstart";

export var sonn_und_festtags = "_TAGTYP_sonn_und_festtags";
export var nur_werktags = "_TAGTYP_nur_werktags";

export var dick = "_CELL_dickerstrich";

//verweisort
export var headerlinks = "_headerleft";
export var headerrechts = "_headerright";
export var nach9spalten = "_nach9spalten";
export var nach4spalten2spalten = "nach4spalten2spalten";
export var nach10spalten4spalten = 'nach10spalten4spalten';
export var nach4spalten = 'nach4spalten';
export var nach6spalten = 'nach6spalten';
export var nach5spalten2spalten = 'nach5spalten2spalten';



export var Z1971 = "_Z1971";
export var Z2045 = "_Z2045";
export var Z1967 = "_Z1967";
export var Z2065 = "_Z2065";
export var Z1991 = "_Z1991";
export var Z1998 = "_Z1998";


export var m747 = "_m747";
export var b355 = "_b355";
export var a510 = "_a510";
export var n822 = "_n822";
export var c510 = "_c510";
export var d1153 = "_d1153";
export var s550 = "_s550";  //schnellzug
export var s748 = "_s748";
export var s800 = "_s800";
export var s321 = "_s321";
export var s810 = "_s810";

export var a858 = "_a858";

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


