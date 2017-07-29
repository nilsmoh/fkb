// GLOBAL TS without own export import, i.e. outside import system
// so this imports transparent 
// so hab ich mir das gewuenscht

enum EKlassen {
    NichtAngegeben = "_Klassen_nicht_angegeben",

    Klassen1 = "_Klassen_1",
    Klassen1bis2 = "_Klassen_1_bis_2",
    Klassen1bis3 = "_Klassen_1_bis_3",
    Klassen1bis4 = "_Klassen_1_bis_4",

    Klassen2bis3 = "_Klassen_2_bis_3",
    Klassen2bis4 = "_Klassen_2_bis_4",

    Klassen3 = "_Klassen_3",
    Klassen3bis4 = "_Klassen_3_bis_4",

    KlassenNurEine = "_Klassen_nur_eine"
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

var k1b3 = EKlassen.Klassen1bis3; //"_Klassen_1_bis_3";
var k2b4 = EKlassen.Klassen2bis4; // "_Klassen_2_bis_4";
var k2b3 = EKlassen.Klassen2bis3; // "_Klassen_2_bis_3";
var k3b4 = EKlassen.Klassen3bis4; // "_Klassen_3_bis_4";


// // FAHRTAGE

//region FAHRTAGE oder GUELTIGTAGE

// GUELTIGKEIT
type TGueltigkeit = TGueltigImmer | TGueltigNie | TGueltigAb;
enum GUELTIG_T {
    IMMER = "GUELTIG_IMMER",
    NIE = "GUELTIG_NIE",
    AB = "GUELTIG_AB"
}
interface TGueltigImmer { kind: typeof GUELTIG_T.IMMER };
interface TGueltigNie { kind: typeof GUELTIG_T.NIE };
interface TGueltigAb { kind: typeof GUELTIG_T.AB, bhf: string };   // jetzt durch teilzug ersetzen
//todo wochentagsabhaengige gueltigkeit etc

//// Fahrtage
type TFahrtage = TFaehrtImmer | TFaehrtWerktags | TFaehrtSonnUndFesttags;
enum FAEHRT_T {
    IMMER = "FAEHRT_IMMER",
    WERKTAGS = "FAEHRT_WERKTAGS",
    SONNUNDFESTTAGS = "FAEHRT_SONNUNDFESTTAGS",

    Montags = "FAEHRT_Montags",
    MontagsFallsMontagEinFesttagDannDienstag = "FAEHRT_MontagsFallsMontagEinFesttagDannDienstag",
    MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends = "FAEHRT_MontagsFallsMontagEinFesttagDannDienstagSowieSonnabends",
    MontagsUndDonnerstagsUndAb1JuniTaeglich = "FAEHRT_MontagsUndDonnerstagsUndAb1JuniTaeglich",
    MontagsUndSonnabends = "FAEHRT_MontagsUndSonnabends",

    DienstagsUndSonntags = "FAEHRT_DienstagsUndSonntags",

    MittwochsUndSonnabends = "FAEHRT_MittwochsUndSonnabends",
    ersterMittwochJedenMonatsDH2mai6juni4juli1august5september = "FAEHRT_ersterMittwochJedenMonatsDH2mai6juni4juli1august5september",
    InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag = "FAEHRT_InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag",
    nachtsNachDemErstenMittwochJedenMonats = "FAEHRT_nachtsNachDemErstenMittwochJedenMonats",

    DonnerstagOderWennDieserFesttagDannMittwochVorher = "FAEHRT_DonnerstagOderWennDieserFesttagDannMittwochVorher",
    DonnerstagUndSonntag = "FAEHRT_DonnerstagUndSonntag ",

    Freitags = "FAEHRT_Freitags",

    Sonnabends = "FAEHRT_Sonnabends", //Fahrtage
    SonnabendsSonnUndFesttags = "FAEHRT_SonnabendsSonnUndFesttags", //Fahrtage
    SonnabendsInJuniJuliUndAugust = "FAEHRT_SonnabendsInJuniJuliUndAugust",

    //SonnUndFesttags = "SonnUndFesttags", //Fahrtage
    SonnUndFesttagsBisEndeAugust = "FAEHRT_SonnUndFesttagsBisEndeAugust",
    SonnUndFesttags20MaiBis16SeptSowie5Juni = "FAEHRT_SonnUndFesttags20MaiBis16SeptSowie5Juni",
    SonnUndFesttags20MaiBisEndeAugust = "FAEHRT_SonnUndFesttags20MaiBisEndeAugust",
    SonnUndFesttagsSowieMittwochs = "FAEHRT_SonnUndFesttagsSowieMittwochs",
    SonnUndFesttagsSowie5Juni = "FAEHRT_SonnUndFesttagsSowie5Juni",
    SonnUndFesttagsSowie1624mai1429juni15aug828sept = "FAEHRT_SonnUndFesttagsSowie1624mai1429juni15aug828sept",
    SonnUndFesttagsInJuniJuliUndAugust = "FAEHRT_SonnUndFesttagsInJuniJuliUndAugust",
    InDerAufEinenSonnOderFesttagFolgendenNacht = "FAEHRT_InDerAufEinenSonnOderFesttagFolgendenNacht",

    //Werktags = "Werktags",
    WerktageAusserSonnabends = "FAEHRT_WerktageAusserSonnabends", //Fahrtage
    WerktageVorSonnUndFesttagen = "FAEHRT_WerktageVorSonnUndFesttagen",
    WerktagsMitAusnahmeDerSonnabendeUndDes23Mai = "FAEHRT_WerktagsMitAusnahmeDerSonnabendeUndDes23Mai",

    MaiUndSeptemberTaeglichSonstWerktags = "FAEHRT_MaiUndSeptemberTaeglichSonstWerktags",
    vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni = "FAEHRT_vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni",
    Vom15MaiBis15September = "FAEHRT_Vom15MaiBis15September",
    vom16maibis16sept = "FAEHRT_vom16maibis16sept",
    Mai21BisEndeAugust = "FAEHRT_Mai21BisEndeAugust",
    MaiJuniSeptember = "FAEHRT_MaiJuniSeptember",
    Vom1JuniBis15September = "FAEHRT_Vom1JuniBis15September",
    vom15junibis15august = "FAEHRT_vom15junibis15august",
    Vom15JuniBis15September = "FAEHRT_Vom15JuniBis15September",
    vom25JuniBis31August = "FAEHRT_vom25JuniBis31August",
    JuliUndAugust = "FAEHRT_JuliUndAugust ",
    bis15September = "FAEHRT_bis15September"


}

interface TFaehrtImmer { kind: typeof FAEHRT_T.IMMER };
interface TFaehrtWerktags { kind: typeof FAEHRT_T.WERKTAGS };
interface TFaehrtSonnUndFesttags { kind: typeof FAEHRT_T.SONNUNDFESTTAGS };


//endregion








//neue form
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
    var Sonnabends = FAEHRT_T.Sonnabends;  //Fahrtage
    var SonnabendsSonnUndFesttags = FAEHRT_T.SonnabendsSonnUndFesttags;  //Fahrtage
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
    //Fahrtage
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
// region Ortsnamen bzw stationen


interface StationTicketInfoEntryKpxTagged {
    kind:"BHFTAG";
    station: string;
    lines: string[];
    upperCase: string;
    lowerCase?: string;
    comment?: string;
    dd2?: number;
    dd3?: number;
      c2?: number;
      c3?: number;
    z2?: number;
    z3?: number;
    via?: string;
    dd2b?: number;
    dd3b?: number;
    c2b?: number;
    c3b?: number;
    z2b?: number;
    z3b?: number;
    viab?: string | string[];
    dd2c?: number;
    dd3c?: number;
    c2c?: number;
    c3c?: number;
    z2c?: number;
    z3c?: number;
    viac?: string;
    viac2?: string; // complex prescribed way ?
    dd2d?: number;
    dd3d?: number;
    c2d?: number;
    c3d?: number;
    z2d?: number;
    z3d?: number;
    viad?: string;
}


// ZUGLAUF , bezeichnet Zugnummer, start, taeglich.. wird zwecks Tabelle rendern nachtraeglich berechnet
type TZugLaufInfo = TZugLaufUnbekannt | TZugLaufBerechnet;

interface TZugLaufUnbekannt {
        kind: typeof ZUGLAUF_UNBEKANNT;
}

interface TZugLaufBerechnet {
        kind: typeof ZUGLAUF_BERECHNET;
        isStart: boolean;
        isEnd: boolean;
        isDeleted: boolean;
        everyDay: boolean;
        ZugNr: string;
}

var ZUGLAUF_UNBEKANNT: "ZUGLAUF_UNBEKANNT" = "ZUGLAUF_UNBEKANNT";
var ZUGLAUF_BERECHNET: "ZUGLAUF_BERECHNET" = "ZUGLAUF_BERECHNET";



// EINTRAG in Zelle    
enum BLOCK_T{
        ZUG_NR_WERT = "ZUG_NR_WERT",
        LEER = "LEER",
        BLOCK = "BLOCKEINTRAG", //war BLOCKBLOCK
        ERROR = "BLOCKERROR",
        KEINHALT = "BLOCKKEINHALT",
        DICKERSTRICH = "BLOCK_DICKERSTRICH",
        ZEITEINTRAG = "BLOCK_ZEITEINTRAG",
        ANKUNFT = "BLOCK_ANKUNFT"
}

// Zug faehrt durch, senkrechter strich in FKB
interface TKeinHalt {
        kind: typeof BLOCK_T.KEINHALT;
        BerechneterZugLauf: TZugLaufInfo;
}

interface TLeerEintrag {
        kind: typeof BLOCK_T.LEER;
        MitStrich: boolean;
        BerechneterZugLauf: TZugLaufInfo;
}

interface TAnkunftEintrag { //"Ank." in tabelle
        kind: typeof BLOCK_T.ANKUNFT;
        BerechneterZugLauf: TZugLaufInfo;
}


interface TDickerStrichEintrag {  //wWaagerechter BLOCK_DICKERSTRICH  siehe seite 103   Mittweida
        kind: typeof BLOCK_T.DICKERSTRICH;
        BerechneterZugLauf: TZugLaufInfo;
}


    //// TEXTORT //Text wird in z.b. links neben header geschrieben
    type TTextOrt = TTextOrtNichtAngegeben | TTextOrtLinksVonHeader | TTextOrtRechtsVonHeader | TTextOrtUnterHeader | TTextOrtGanzeSpalte;
    
    enum TEXTORT_T {
        NICHTANGEGEBEN = "TEXTORT_NICHTANGEGEBEN",
        LINKSVONHEADER = "TEXTORT_LINKSVONHEADER",
        RECHTSVONHEADER = "TEXTORT_RECHTSVONHEADER",
        UNTERHEADER = "TEXTORT_UNTERHEADER",
        GANZESPALTE = "TEXTORT_GANZESPALTE"
    }

    interface TTextOrtNichtAngegeben { kind: typeof TEXTORT_T.NICHTANGEGEBEN };
    interface TTextOrtLinksVonHeader { kind: typeof TEXTORT_T.LINKSVONHEADER };
    interface TTextOrtRechtsVonHeader { kind: typeof TEXTORT_T.RECHTSVONHEADER };
    interface TTextOrtUnterHeader { kind: typeof TEXTORT_T.UNTERHEADER };
    interface TTextOrtGanzeSpalte { kind: typeof TEXTORT_T.GANZESPALTE, UebersprungeneSpalten: number, Spaltenbreite: number };

    //endregion

    
    enum EScope {
        //KeineAngabe = 0,
        DefaultZug = 1,   // nur die aktuelle Zugnummer vgl strecke 99
        RestSpalte = 2    // auch darunter stehende Zuege vgl strecke 99
    }

 //// Typen fuer Verweis
    type TVerweisTyp = TVerweisPassend | TVerweisFern | TVerweisEmbedded | TVerweisGlobalDefault;    // | Pfeilstart ? PFEILZIEL ? 

    enum VERWEIS_T{
        PASSEND = "VERWEIS_PASSEND",
        FERN = "VERWEIS_FERN" ,
        EMBEDDED = "VERWEIS_EMBEDDED",
        GLOBAL_DEFAULT = "VERWEIS_GLOBAL_DEFAULT"
    }


    // in richtiger Spalte, aber mit buchstabe referenziert
    interface TVerweisPassend {
        kind: typeof VERWEIS_T.PASSEND, // VERWEIS_PASSEND,
        ReferenzKey: string,
        Scope: EScope
    }
    interface TVerweisFern {
        kind: typeof VERWEIS_T.FERN, // VERWEIS_FERN,
        ReferenzKey: string,            // nur Verweistyp == Fern :  a..r, t..z
        OpticalMarker: string
    }
    interface TVerweisEmbedded { //direkt 1*1 eingebettet
        kind: typeof VERWEIS_T.EMBEDDED // VERWEIS_EMBEDDED
    }
    // z.b. alle zuege 2u3 klasse,  textort gibt die renderposition an
    interface TVerweisGlobalDefault {
        kind: typeof VERWEIS_T.GLOBAL_DEFAULT // VERWEIS_GLOBAL_DEFAULT
    }


interface TBlockinhaltBaseV2{
        Verweistyp: TVerweisTyp; 
        TextOrt: TTextOrt,

        Inhalt: entry
}

 //block der tabelle, meist groesser als 1x1
interface TBlockEintrag {
        kind: typeof BLOCK_T.BLOCK;
        Start: boolean;                   // true -> blockinhalt
        Senkrecht: boolean;
        Breite: number;
        Hoehe: number;
        Passend: boolean; // Gegenteil waere fern
        Referenzkey: string | undefined;
        Blockinhalt: TBlockinhaltBaseV2 | undefined;
        Valid: boolean; // false in first incarnation, true when width / height is known and blockinhalt is analyzed
        BerechneterZugLauf: TZugLaufInfo;
}


//MISC

var _ : TLeerEintrag =   /*var tLeer: TLeerEintrag = */ { kind: BLOCK_T.LEER,    MitStrich: true,     BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }     };
var nix : TLeerEintrag = _; // waagerechter strich
var gnix  /* =  "_Nixleer"; // wirklich leer  var tResultEntryL */ : TLeerEintrag = { kind: BLOCK_T.LEER,     MitStrich: false,   BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }        };
var kHlt: TKeinHalt = /* "_Kein_Halt";  //  var tResultEntryK: TKeinHalt = */ {    kind: BLOCK_T.KEINHALT,     BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }         };
var ank /*= "_XZug_endet"; // zuege endet vorzeitig    var tResultEntryAnk*/ : TAnkunftEintrag = { kind: BLOCK_T.ANKUNFT,    BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }       };
var Ank = ank; // an fuer zuege die nur auf teilstrecke fahren
var dick /* = "_CELL_dickerstrich";  //var tResultEntryD*/ : TDickerStrichEintrag = {       kind: BLOCK_T.DICKERSTRICH,       BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }      };

//ZEILENSORTEN
var _anschluss_aus = "_Anschluss_aus"; //  aus Zwickau  // Abfahrtszeit in Zwickau
var _anschluss_aus_ziel = "_Anschluss_aus_ankunft"; // aus Karlsbad in Johanngeorgenstadt
var _zugnr = "_xZugnr";
var _klassen = "_Klassen_";
var _anschluss_nach_start = "_Anschluss_nach_abfahrt"; // nach Karlsbad ab Johanngeorgenstadt
var _anschluss_nach_in = "_Anschluss_nach_in"; // in Zwickau // Ankunftszeit nach Nutzung eines nicht naeher spezifizierten anschlusszugs in Zwickau


//var SENKRECHT_PREFIX = "_senkrecht_";
//var WAAGERECHT_PREFIX = "_waagerecht_";

var wa:TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:false,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"a",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var wx :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:false,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"x",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };

var sa :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"a",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sb :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"b",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };

var sc :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"c",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sd :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"d",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var se :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"e",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };

var sf :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"f",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sg :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"g",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sh :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"h",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var si :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"i",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sk:TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"k",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sl :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"l",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };

var sj  :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"j",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sm :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"m",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };
var sp :TBlockEintrag={kind:BLOCK_T.BLOCK,Senkrecht:true,Valid:false,Start:false,Breite:1,Hoehe:1,Passend:true,Referenzkey:"p",Blockinhalt:undefined,BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT } };





/*

 if ((rawEntry.indexOf(SENKRECHT_PREFIX) == 0) || (rawEntry.indexOf(WAAGERECHT_PREFIX) == 0)) {

                                            var senkleng = SENKRECHT_PREFIX.length;
                                            var waagleng = WAAGERECHT_PREFIX.length;

                                            var tResultEntryB: TBlockEintrag = {
                                                kind: BLOCK_T.BLOCK,
                                                Senkrecht: (rawEntry.indexOf(SENKRECHT_PREFIX) == 0),
                                                Valid: false, // false in first incarnation, true when width / height is known and blockinhalt is analyzed
                                                Start: false,
                                                Breite: 1,
                                                Hoehe: 1,
                                                Passend: true, // Gegenteil waere fern
                                                Referenzkey: (rawEntry.indexOf(SENKRECHT_PREFIX) == 0) ? rawEntry.substr(senkleng) : rawEntry.substr(waagleng),  // while invalid markers are letters
                                                Blockinhalt: undefined,
                                                BerechneterZugLauf: { kind: ZUGLAUF_UNBEKANNT }
                                            };

*/





//TRENNER hilfe
var ORTPREFIX = "_Ort_";

//TRENNER eigentliche
var CH = ORTPREFIX + "Chemnitz";   //kind:"KOPFENDE"
var LE = ORTPREFIX + "Leipzig";
var ab = "_Ab";
var an = "_An";
var zn = "_xZugnr";
var kl = "_xKlassen";


// Stationen global nach aussen gezogen wegen var :-)
{
    var Adorf: StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Adorf", "lines": ["PE", "CA"], "upperCase": "ADORF", "dd2": 1260, "dd3": 840, "c2": 780, "c3": 520, "z2": 490, "z3": 330, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 690, "c3b": 460, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 450, "z3c": 300, "viac": "Voigtsgrün", "comment": "schwer lesbar" };
    var Affalter : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Affalter", "lines": ["ZC"], "upperCase": "AFFALTER", "dd2": 0, "dd3": 0, "c2": 220, "c3": 150, "z2": 0, "z3": 0, "via": "Neukirchen i.E.", "dd2b": 0, "dd3b": 0, "c2b": 260, "c3b": 170, "z2b": 0, "z3b": 0, "viab": "Einsiedel" };
    var Altchemnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Altchemnitz", "lines": ["CA", "ZC"], "upperCase": "ALTCHEMNITZ", "dd2": 500, "dd3": 340, "c2": 20, "c3": 15, "z2": 310, "z3": 210 };
    var Altenbach : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Altenbach", "lines": ["LD"], "upperCase": "ALTENBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altenburg : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Altenburg", "lines": ["LH", "ZA"], "upperCase": "ALTENBURG i.S.=A.", "dd2": 880, "dd3": 590, "c2": 410, "c3": 270, "z2": 0, "z3": 0, "via": "Gössnitz", "dd2b": 990, "dd3b": 680, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": ["Borsdorf", "Gaschwitz"], "dd2c": 0, "dd3c": 0, "c2c": 480, "c3c": 320, "z2c": 0, "z3c": 0, "viac": "Borna", "z2d": 290, "z3d": 200, "viad": "Werdau" };
    var Altenhain_b_Br : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Altenhain b.Br.", "lines": ["BSt"], "upperCase": "ALTENHAIN b.BRANDIS", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altmittweida : StationTicketInfoEntryKpxTagged= { kind: "BHFTAG", "station": "Altmittweida", "lines": ["RC"], "upperCase": "ALTMITTWEIDA", "dd2": 0, "dd3": 0, "c2": 100, "c3": 65, "z2": 390, "z3": 260 };
    var Altmügeln : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Altmügeln", "lines": ["MN"], "upperCase": "ALTMÜGELN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altosch_Ros : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Altosch.-Ros.", "lines": ["OD"], "upperCase": "ALTOSCHATZ-ROSENTHAL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Altwarnsdorf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Altwarnsdorf", "lines": ["SE"], "upperCase": "ALTWARNSDORF i.Bö.", "dd2": 590, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Amerika : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Amerika", "lines": ["GW"], "upperCase": "AMERIKA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ammelshain : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Ammelshain", "lines": ["BSt"], "upperCase": "AMMELSHAIN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Annaberg : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Annaberg", "lines": ["AF", "WA"], "upperCase": "ANNABERG i.S.", "dd2": 670, "dd3": 450, "c2": 340, "c3": 230, "z2": 630, "z3": 420, "via": "Flöha", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 410, "z3b": 280, "viab": "Aue" };
    var Antonsthal : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Antonsthal", "lines": ["JS"], "upperCase": "ANTONSTHAL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 200 };
    var Arnsdorf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Arnsdorf", "lines": ["GD", "KP"], "upperCase": "ARNSDORF i.S.", "dd2": 160, "dd3": 110, "c2": 640, "c3": 430, "z2": 930, "z3": 620 };
    var Arras : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Arras", "lines": ["WR"], "upperCase": "ARRAS", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Aue : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Aue", "lines": ["SZ", "CA"], "upperCase": "AUE i.Sachsen", "dd2": 790, "dd3": 530, "c2": 310, "c3": 210, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 480, "c3b": 320, "z2b": 180, "z3b": 120, "viab": "Zwickau" };
    var Auerbach_ob_Bhf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Auerbach ob. Bhf.", "lines": ["HOe"], "upperCase": "AUERBACH ob.Bf.", "dd2": 1080, "dd3": 720, "c2": 600, "c3": 400, "z2": 310, "z3": 210, "via": "Herlasgrün", "comment": "via by NM - funktioniert !!!" };
    var Auerbach_unt_Bf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Auerbach, unt.Bf.", "lines": ["ZF"], "upperCase": "AUERBACH unt.Bf.", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2": 190, "z3": 130 };
    var Bad_Elster : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Bad Elster", "lines": ["PE"], "upperCase": "", "dd2": 1280, "dd3": 860, "c2": 800, "c3": 540, "z2": 510, "z3": 340, "via": "Plauen i.V.", "comment": "dd2 erfunden, fkb passt dort nicht zu dd3!", "dd2b": 0, "dd3b": 0, "c2b": 710, "c3b": 480, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 470, "z3c": 310, "viac": "Voigtsgrün" };
    var Bad_Jonsdorf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Bad Jonsdorf", "lines": ["BJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Barthmühle : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Barthmühle", "lines": ["PWz"], "upperCase": "BARTHMÜHLE", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bauernsteig : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Bauernsteig", "lines": ["WM"], "upperCase": "BAUERNSTEIG", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 95, "z3": 65 };
    var Bautzen : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Bautzen", "lines": ["GD", "BK", "BS"], "upperCase": "BAUTZEN", "dd2": 370, "dd3": 250, "c2": 840, "c3": 560, "z2": 1140, "z3": 760 };
    var Beerwalde : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Beerwalde", "lines": ["MR"], "upperCase": "BEERWALDE i.S.A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Beierfeld : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Beierfeld", "lines": ["ZS"], "upperCase": "BEIERFELD", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Beiersdorf_Oberl : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Beiersdorf (Oberl.)", "lines": ["TD"], "upperCase": "BEIERSDORF, Oberlausitz", "dd2": 470, "dd3": 310, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Belgershain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Belgershain", "lines": ["LG"], "upperCase": "BELGERSHAIN", "dd2": 0, "dd3": 0, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Berbersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Berbersdorf", "lines": ["RW"], "upperCase": "BERBERSDORF", "dd2": 0, "dd3": 0, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Berbisdorf : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Berbisdorf", "lines": ["RRg"], "upperCase": "BERBISDORF", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Berga_a_d_E : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Berga a.d.E.", "lines": ["PWz"], "upperCase": "BERGA a.d.Elster (i.S.=W.)", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 250, "z3": 170 };
    var Bergen : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Bergen", "lines": ["HOe"], "upperCase": "BERGEN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 260, "z3": 170 };
    var Berggiesshübel : StationTicketInfoEntryKpxTagged  = { kind: "BHFTAG", "station": "Berggiesshübel", "lines": ["PB"], "upperCase": "BERGGIESSHÜBEL", "dd2": 200, "dd3": 130, "c2": 680, "c3": 450, "z2": 0, "z3": 0 };
    var Bernsbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bernsbach", "lines": ["ZS"], "upperCase": "BERNSBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bernsgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bernsgrün", "lines": ["WM"], "upperCase": "BERNSGRÜN i.R.ä.L.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 380, "z3": 250 };
    var Bernstadt_i_O_L : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bernstadt i.O.L", "lines": ["HB"], "upperCase": "BERNSTADT i.O.=L.", "dd2": 650, "dd3": 440, "c2": 1130, "c3": 750, "z2": 0, "z3": 0, "via": "Löbau" };
    var Berthelsd_b_Hrrnh : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Berthelsd.b.Hrrnh.", "lines": ["HB"], "upperCase": "BERTHELSDORF b.Herrnhut" };
    var Berthelsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Berthelsdorf", "lines": ["NM", "BGh"], "upperCase": "BERTHELSDORF i.Erzgeb.", "dd2": 280, "dd3": 190, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Bertsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bertsdorf", "lines": ["ZO", "BJ"], "upperCase": "BERTSDORF" };
    var Beucha_b_Br : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Beucha b.Br.", "lines": ["BC", "BSt"], "upperCase": "BEUCHA b.Brandis", "dd2": 710, "dd3": 480, "c2": 560, "c3": 370, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 480, "c3b": 330, "z2b": 0, "z3b": 0, "viab": "Narsdorf" };
    var Bienenmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bienenmühle", "lines": ["NM"], "upperCase": "BIENENMÜHLE", "dd2": 410, "dd3": 270, "c2": 400, "c3": 270, "z2": 690, "z3": 460 };
    var Birkenhain_Limb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Birkenhain-Limb.", "lines": ["PNo"], "upperCase": "BIRKENHAIN-LIMBACH" };
    var Bischheim : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bischheim", "lines": ["KP"], "upperCase": "BISCHHEIM", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bischofswerda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bischofswerda", "lines": ["GD", "NnB"], "upperCase": "BISCHOFSWERDA", "dd2": 250, "dd3": 170, "c2": 730, "c3": 490, "z2": 1020, "z3": 680 };
    var Blauenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Blauenthal", "lines": ["CA"], "upperCase": "BLAUENTHAL", "dd2": 860, "dd3": 580, "c2": 390, "c3": 260, "z2": 260, "z3": 180 };
    var Blechhammer : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Blechhammer", "lines": ["WCd"], "upperCase": "BLECHHAMMER" };
    var Blumenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Blumenau", "lines": ["PN"], "upperCase": "BLUMENAU" };
    var Bockau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bockau", "lines": ["CA"], "upperCase": "BOCKAU", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 240, "z3": 160 };
    var Boden_b_W : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Boden b.W.", "lines": ["WJ"], "upperCase": "BODEN b.Wolkenstein" };
    var Bodenbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bodenbach", "lines": ["BD"], "upperCase": "BODENBACH i.Bö.", "dd2": 380, "dd3": 250, "c2": 860, "c3": 570, "z2": 1150, "z3": 770 };
    var Borna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Borna", "lines": ["KC"], "upperCase": "BORNA", "dd2": 810, "dd3": 540, "c2": 330, "c3": 220, "z2": 0, "z3": 0, "via": "Chemnitz", "comment": "z weggelassen" };
    var Bornitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bornitz", "lines": ["LD"], "upperCase": "BORNITZ", "dd2": 380, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Borsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Borsdorf", "lines": ["LD", "BC"], "upperCase": "BORSDORF", "dd2": 650, "dd3": 440, "c2c": 570, "c3c": 380, "viac": "Leipzig Dr.Bf.", "z2b": 630, "z3b": 440, "viab": ["Tautenhain"], "comment": "ueber erfunden" };
    var Brambach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Brambach", "lines": ["PE"], "upperCase": "BRAMBACH", "dd2": 1360, "dd3": 910, "c2": 890, "c3": 590, "z2": 590, "z3": 400, "via": "Plauen i.V." };
    var Brand : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Brand", "lines": ["BGh", "BL"], "upperCase": "BRAND b.Freiberg", "dd2": 300, "dd3": 200, "c2": 300, "c3": 200, "z2": 590, "z3": 390 };
    var Brandis : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Brandis", "lines": ["BSt"], "upperCase": "BRANDIS", "dd2": 730, "dd3": 490, "c2": 570, "c3": 380, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "comment": "NM via wie Beucha hinzugefuegt,   strecke unklar" };
    var Braunsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Braunsdorf", "lines": ["RW"], "upperCase": "BRAUNSDORF", "dd2": 0, "dd3": 0, "c2": 75, "c3": 50, "z2": 0, "z3": 0 };
    var Breitenborn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Breitenborn", "lines": ["RP"], "upperCase": "BREITENBORN", "dd2": 0, "dd3": 0, "c2": 200, "c3": 140, "z2": 0, "z3": 0 };
    var Breitenhof : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Breitenhof", "lines": ["JS"], "upperCase": "BREITENHOF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 310, "z3": 210 };
    var Breitingen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Breitingen", "lines": ["LH"], "upperCase": "BREITINGEN", "dd2": 0, "dd3": 0, "c2": 420, "c3": 280, "z2b": 350, "z3b": 240, "viab": "Werdau" };
    var Brunn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Brunn", "lines": ["BG"], "upperCase": "BRUNN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 100, "z3": 70 };
    var Buchholz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Buchholz", "lines": ["WA", "BSg"], "upperCase": "BUCHHOLZ", "dd2": 680, "dd3": 460, "c2": 360, "c3": 240, "z2": 390, "z3": 260 };
    var Buchholz_Friedew : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Buchholz-Friedew.", "lines": ["RRg"], "upperCase": "BUCHHOLZ-FRIEDEWALD", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Burgstädt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Burgstädt", "lines": ["KC"], "upperCase": "BURGSTÄDT", "dd2": 570, "dd3": 380, "c2": 90, "c3": 60, "z2": 390, "z3": 260, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 350, "z3b": 240, "viab": "Limbach" };
    var Burkersdorf_b_Fr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Burkersdorf b.Fr.", "lines": ["KF"], "upperCase": "BURKERSDORF b.Frauenstein", "dd2": 250, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Burkhardtsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Burkhardtsdorf", "lines": ["CA"], "upperCase": "BURKHARDTSDORF", "dd2": 600, "dd3": 400, "c2": 120, "c3": 80, "z2": 380, "z3": 250 };
    var Burkhardtsw_Maxen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Burkhardtsw.-Maxen", "lines": ["MG"], "upperCase": "BURKHARDTSWALDE-MAXEN", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Buschmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Buschmühle", "lines": ["HK"], "upperCase": "BUSCHMÜHLE", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenhecke_Johnsb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bärenhecke-Johnsb.", "lines": ["MG"], "upperCase": "BÄRENHECKE-JOHNSBACH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bärenstein", "lines": ["WA"], "upperCase": "BÄRENSTEIN b.Weipert", "dd2": 780, "dd3": 520, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Bärenstein_b_Glash : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bärenstein b. Glash.", "lines": ["MG"], "upperCase": "BÄRENSTEIN b.Glashütte", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Bärenwalde_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bärenwalde i.S.", "lines": ["WCd"], "upperCase": "BÄRENWALDE i.S.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 90 };
    var Bärnsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Bärnsdorf", "lines": ["RRg"], "upperCase": "BÄRNSDORF", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhla : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Böhla", "lines": ["DE"], "upperCase": "BÖHLA", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhlen_Rötha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Böhlen (Rötha)", "lines": ["LH"], "upperCase": "BÖHLEN (RÖTHA)", "dd2": 0, "dd3": 0, "c2": 410, "c3": 280, "z2b": 440, "z3b": 290, "viab": "Werdau" };
    var Böhlitz_Roda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Böhlitz-Roda", "lines": ["MN"], "upperCase": "BÖHLITZ-RODA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Böhringen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Böhringen", "lines": ["RW"], "upperCase": "BÖHRINGEN", "dd2": 400, "dd3": 270, "c2": 230, "c3": 150, "z2": 0, "z3": 0 };
    var Cainsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cainsdorf", "lines": ["SZ"], "upperCase": "CAINSDORF", "dd2": 800, "dd3": 540, "c2": 320, "c3": 220, "z2": 25, "z3": 20 };
    var Cannewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cannewitz", "lines": ["MN"], "upperCase": "CANNEWITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Carlsfeld : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Carlsfeld", "lines": ["WCd"], "upperCase": "CARLSFELD", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 390, "z3": 260, "via": "Aue", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 200, "viab": "Kirchberg" };
    var Chemnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Chemnitz", "lines": ["DW", "CA", "KC", "RC"], "upperCase": "CHEMNITZ", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 300, "z3": 200 };
    var Chursdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Chursdorf", "lines": ["WM"], "upperCase": "CHURSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 150, "z3": 100 };
    var Colditz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Colditz", "lines": ["GW"], "upperCase": "COLDITZ", "dd2": 0, "dd3": 0, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 620, "dd3b": 420, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Meissen-Cölln", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 400, "z3c": 270, "viac": "Lunzenau", "viac2": "Narsdorf" };
    var Cossebaude : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cossebaude", "lines": ["DE"], "upperCase": "COSSEBAUDE", "dd2": 55, "dd3": 30, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Cossen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cossen", "lines": ["KC"], "upperCase": "COSSEN", "dd2": 620, "dd3": 410, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Cossmannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cossmannsdorf", "lines": ["HK"], "upperCase": "COSSMANNSDORF", "dd2": 75, "dd3": 50, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Coswig : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Coswig", "lines": ["LD", "BC", "DEC"], "upperCase": "COSWIG i.Sachsen", "dd2": 105, "dd3": 70, "c2": 550, "c3": 70, "z2": 0, "z3": 0 };
    var Cotta_b_Dresden : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cotta b.Dresden", "lines": ["DE"], "upperCase": "COTTA b.Dresden", "dd2": 30, "dd3": 20, "c2": 510, "c3": 340, "z2": 800, "z3": 540 };
    var Cranzahl : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cranzahl", "lines": ["WA", "CW"], "upperCase": "CRANZAHL", "dd2": 720, "dd3": 480, "c2": 390, "c3": 260, "z2": 430, "z3": 290 };
    var Crimmitschau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Crimmitschau", "lines": ["LH"], "upperCase": "CRIMMITSCHAU", "dd2": 830, "dd3": 560, "c2": 360, "c3": 240, "z2": 130, "z3": 90 };
    var Culitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Culitzsch", "lines": ["WCd"], "upperCase": "CULITZSCH", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 55, "z3": 40 };
    var Culten : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Culten", "lines": ["LH"], "upperCase": "CULTEN", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 105, "z3": 70 };
    var Cunersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cunersdorf", "lines": ["WCd"], "upperCase": "CUNERSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Cunewalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cunewalde", "lines": ["GC"], "upperCase": "CUNEWALDE", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Bautzen", "comment": "Via frei erfunden" };
    var Cunnersdorf_b_M : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cunnersdorf b. M.", "lines": ["KS"], "upperCase": "CUNNERSDORF b.Medingen", "dd2": 115, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Cunnertswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Cunnertswalde", "lines": ["RRg"], "upperCase": "CUNNERTSWALDE", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dahlen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dahlen", "lines": ["LD"], "upperCase": "DAHLEN", "dd2": 460, "dd3": 310, "c2": 540, "c3": 360, "z2b": 820, "z3b": 560, "viab": ["Leipzig Dr.Bf."] };
    var Demitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Demitz", "lines": ["GD"], "upperCase": "DEMITZ Haltestelle", "dd2": 280, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Denkwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Denkwitz", "lines": ["MN"], "upperCase": "DENKWITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dennheritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dennheritz", "lines": ["SG"], "upperCase": "DENNHERITZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60, "via": "Schönbörnchen", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 140, "z3b": 100, "viab": "Glauchau", "comment": "stationsverz 1899 Denheritz" };
    var Deuben : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Deuben", "lines": ["DW"], "upperCase": "DEUBEN", "dd2": 55, "dd3": 35, "c2": 440, "c3": 290, "z2": 720, "z3": 480 };
    var Deutschenbora : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Deutschenbora", "lines": ["BC"], "upperCase": "DEUTSCHENBORA", "dd2": 270, "dd3": 180, "c2": 390, "c3": 260, "z2": 680, "z3": 460 };
    var Dippelsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dippelsdorf", "lines": ["RRg"], "upperCase": "DIPPELSDORF", "dd2": 95, "dd3": 65, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dippoldiswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dippoldiswalde", "lines": ["HK"], "upperCase": "DIPPOLDISWALDE", "dd2": 150, "dd3": 100, "c2": 510, "c3": 340, "z2": 0, "z3": 0 };
    var Dittersb_Seiffen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dittersb.-Seiffen", "lines": ["PN"], "upperCase": "DITTERSBACH-SEIFFEN", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 0, "z3": 0 };
    var Dittersbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dittersbach", "lines": ["RW"], "upperCase": "DITTERBACH b.Frankenberg", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0 };
    var Dittersbach_b_D : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dittersbach b. D.", "lines": ["KP"], "upperCase": "DITTERSBACH b.Dürrröhrsdorf", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dittersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dittersdorf", "lines": ["CA"], "upperCase": "DITTERSDORF b.Chemnitz", "dd2": 560, "dd3": 380, "c2": 80, "c3": 55, "z2": 380, "z3": 250 };
    var Dittersdorf_b_Gl : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dittersdorf b. Gl.", "lines": ["MG"], "upperCase": "DITTERSDORF b.Glashütte", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dobitschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dobitschen", "lines": ["MR"], "upperCase": "DOBITSCHEN i.S.=A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dohma : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dohma", "lines": ["PGc"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dohna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dohna", "lines": ["MG"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dorfchemnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dorfchemnitz", "lines": ["CA"], "upperCase": "DORFCHEMNITZ b.Zwönitz", "dd2": 0, "dd3": 0, "c2": 200, "c3": 130, "z2": 300, "z3": 200 };
    var Dorfchemnitz_b_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dorfchemnitz b. S.", "lines": ["MS"], "upperCase": "DORFCHEMNITZ b.Sayda", "dd2": 380, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dornreichenbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dornreichenbach", "lines": ["LD"], "upperCase": "DORNREICHENBACH", "dd2": 510, "dd3": 340, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dresd_Wettinerstr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dresd. Wettinerstr.", "lines": ["BD"], "upperCase": "DRESDEN Wettinerstraße", "dd2": 15, "dd3": 10, "c2": 510, "c3": 340, "z2": 800, "z3": 530, "comment": "laut stat verz GD" };
    var Dresden_Hptbf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dresden Hptbf.", "lines": ["BD", "DW", "DFA"], "upperCase": "DRESDEN Hauptbhf.", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 780, "z3": 520 };
    var Dresden_Fr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dresden-Fr.", "lines": ["DE", "DFA"], "upperCase": "DRESDEN-Friedrst.", "dd2": 15, "dd3": 10, "c2": 500, "c3": 340, "z2": 800, "z3": 530 };
    var Dresden_Neust_Leip_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dresden-Neust.Leip.Bf.", "lines": ["LD", "BD"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 510, "c3": 340, "z2": 800, "z3": 530 };
    var Dresden_Neust_Schl_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dresden-Neust.Schl.Bf.", "lines": ["GD", "BD"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 510, "c3": 340, "z2": 800, "z3": 530 };
    var Döbeln_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Döbeln Bhf.", "lines": ["RC", "BC"], "upperCase": "Döbeln Bahnhof", "dd2": 410, "dd3": 270, "c2": 250, "c3": 170, "z2": 540, "z3": 360 };
    var Döbeln_Haltep : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Döbeln Haltep.", "lines": ["BC"], "upperCase": "DÖBELN Haltepunkt", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Döhlen_b_Rochl : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Döhlen b.Rochl.", "lines": ["WR"], "upperCase": "DÖHLEN b.Rochlitz", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dölau_bGreiz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dölau b.Greiz", "lines": ["PWz"], "upperCase": "DÖLAU b.Greiz i.R.ä.L.", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 190, "z3": 130 };
    var Döschütz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Döschütz", "lines": ["OD"], "upperCase": "DÖSCHÜTZ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dürrhennersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dürrhennersdorf", "lines": ["EL", "TD"], "upperCase": "DÜRRHENNERSDORF", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Dürrröhrsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Dürrröhrsdorf", "lines": ["KP", "ND"], "upperCase": "DÜRRRÖHRSDORF", "dd2": 180, "dd3": 120, "c2": 680, "c3": 450, "z2": 0, "z3": 0, "via": "Pirna Bf.", "comment": "via falsch in FKB" };
    var Ebersbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ebersbach", "lines": ["OW", "EL"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 960, "c3": 640, "z2": 1250, "z3": 840, "via": "Putzkau" };
    var Ebersbrunn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ebersbrunn", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 70, "z3": 45 };
    var Edle_Krone : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Edle Krone", "lines": ["DW"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 380, "c3": 250, "z2": 670, "z3": 450 };
    var Eger : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Eger", "lines": ["PE"], "upperCase": "", "dd2": 1510, "dd3": 1010, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Plauen i.V." };
    var Ehrenfriedersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ehrenfriedersdorf", "lines": ["WE"], "upperCase": "", "dd2": 610, "dd3": 410, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Eibau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Eibau", "lines": ["OW", "SE"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Eibenstock : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Eibenstock", "lines": ["CA"], "upperCase": "", "dd2": 900, "dd3": 600, "c2": 420, "c3": 280, "z2": 290, "z3": 200 };
    var Eich : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Eich", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Einsiedel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Einsiedel", "lines": ["CA"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 65, "c3": 45, "z2": 360, "z3": 240 };
    var Ellefeld : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ellefeld", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elsterberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Elsterberg", "lines": ["PWz"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 330, "z2": 210, "z3": 140, "via": "Greiz" };
    var Elsterwerda_B_D_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Elsterwerda B.-D.-B.", "lines": ["DF", "DE", "ZE"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Elsterwerda_O_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Elsterwerda O.-B.", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elstra : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Elstra", "lines": ["KE"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Elterlein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Elterlein", "lines": ["ZS"], "upperCase": "", "dd2": 810, "dd3": 540, "c2": 330, "c3": 220, "z2": 0, "z3": 0, "via": "Zwönitz", "comment": "via frei erfunden" };
    var Endschütz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Endschütz", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 200, "z3": 140 };
    var Eppendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Eppendorf", "lines": ["HE"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 170, "c3": 120, "z2": 390, "z3": 260 };
    var Erbisdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erbisdorf", "lines": ["BL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Erdmannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erdmannsdorf", "lines": ["AF"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 100, "c3": 70, "z2": 390, "z3": 260 };
    var Erfenschlag : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erfenschlag", "lines": ["CA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 40, "c3": 30, "z2": 0, "z3": 0 };
    var Erla : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erla", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 270, "z3": 180 };
    var Erlabrunn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erlabrunn", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 330, "z3": 220 };
    var Erlau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Erlau", "lines": ["RC"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 130, "c3": 90, "z2": 0, "z3": 0 };
    var Falkenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Falkenau", "lines": ["DW"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 95, "c3": 65, "z2": 390, "z3": 260 };
    var Falkenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Falkenstein", "lines": ["ZF", "HOe", "FM"], "upperCase": "", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 220, "z3": 150 };
    var Feilitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Feilitzsch", "lines": ["LH"], "upperCase": "", "dd2": 1310, "dd3": 880, "c2": 830, "c3": 560, "z2": 540, "z3": 360 };
    var Flossmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Flossmühle", "lines": ["RF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Flossplatz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Flossplatz", "lines": ["AF"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Flöha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Flöha", "lines": ["DW", "AF", "RF"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 75, "c3": 50, "z2": 370, "z3": 250 };
    var Frankenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frankenau", "lines": ["MR"], "upperCase": "FRANKENAU i.S.=A." };
    var Frankenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frankenberg", "lines": ["RW"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 105, "c3": 70, "z2": 400, "z3": 270, "via": "Niederwiesa" };
    var Frankenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frankenstein", "lines": ["DW"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 180, "c3": 120, "z2": 480, "z3": 320 };
    var Franzensbad : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Franzensbad", "lines": ["PE"], "upperCase": "", "dd2": 1470, "dd3": 980, "c2": 990, "c3": 660, "z2": 700, "z3": 470, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 660, "z3b": 440, "viab": "Voigtsgrün" };
    var Frauendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frauendorf", "lines": ["KC"], "upperCase": "", "dd2": 740, "dd3": 500, "c2": 260, "c3": 180, "z2": 0, "z3": 0 };
    var Frauenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frauenhain", "lines": ["DE"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Frauenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frauenstein", "lines": ["KF"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 450, "c3": 300, "z2": 740, "z3": 500 };
    var Freiberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Freiberg", "lines": ["DW", "FH", "NM"], "upperCase": "FREIBERG i.S.", "dd2": 250, "dd3": 170, "c2": 240, "c3": 160, "z2": 540, "z3": 360 };
    var Freiberg_Schachtbhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Freiberg Schachtbhf.", "lines": ["FH"], "upperCase": "", "dd2": 260, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Friedebach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Friedebach", "lines": ["MS"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Friedersdorf_b_Fr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Friedersdorf b.Fr.", "lines": ["KF"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Frohburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Frohburg", "lines": ["KC"], "upperCase": "", "dd2": 770, "dd3": 510, "c2": 290, "c3": 190, "z2": 380, "z3": 260 };
    var Fährbrücke : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Fährbrücke", "lines": ["SZ"], "upperCase": "", "dd2": 870, "dd3": 580, "c2": 390, "c3": 260, "z2": 95, "z3": 65, "comment": "todo   via zwickau od thalheim" };
    var Gadewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gadewitz", "lines": ["OD", "GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gaschwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gaschwitz", "lines": ["LH", "GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2b": 470, "z3b": 310, "viab": "Werdau" };
    var Gauern : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gauern", "lines": ["WM"], "upperCase": "GAUERN i.S.=A.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 180, "z3": 120 };
    var Geising_Altenb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Geising-Altenb.", "lines": ["MG"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geithain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Geithain", "lines": ["KC", "LG"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 320, "z3": 220, "comment": "todo langweg fehlt" };
    var Gelenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gelenau", "lines": ["WE"], "upperCase": "", "dd2": 560, "dd3": 380, "c2": 240, "c3": 160, "z2": 0, "z3": 0 };
    var Gelobtland : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gelobtland", "lines": ["RF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Gera_R_Pr_St_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gera (R.) Pr.St.B.", "lines": ["GGa"], "upperCase": "", "dd2": 990, "dd3": 660, "c2": 510, "c3": 340, "z2": 390, "z3": 260, "via": "Gössnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 300, "z3b": 200, "viab": "Seelingstädt", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 370, "z3c": 250, "viac": "Greiz" };
    var Gera_Reuss_S_St_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gera (Reuss) S.St.B.", "lines": ["GGa", "PWz"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 330, "z2": 390, "z3": 260, "via": "Gössnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 190, "viab": "Seelingstädt", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 360, "z3c": 240, "viac": "Greiz" };
    var Gerichshain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gerichshain", "lines": ["LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geringswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Geringswalde", "lines": ["WR"], "upperCase": "", "dd2": 520, "dd3": 350, "c2": 250, "c3": 170, "z2b": 410, "z3b": 270, "via": "Waldheim" };
    var Gersberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gersberg", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gersdorf", "lines": ["GD"], "upperCase": "GERSDORF i.Pr.", "dd2": 590, "dd3": 390, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Geyer_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Geyer Bhf.", "lines": ["SGr"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 380, "c3": 250, "z2": 0, "z3": 0 };
    var Geyer_Haltepunkt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Geyer Haltepunkt", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Glashütte : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Glashütte", "lines": ["MG"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 680, "c3": 450, "z2": 0, "z3": 0 };
    var Glauchau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Glauchau", "lines": ["DW", "GW"], "upperCase": "", "dd2": 680, "dd3": 460, "c2": 200, "c3": 140, "z2": 100, "z3": 65 };
    var Glossen_b_L : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Glossen b.L.", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Glossen_b_O : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Glossen b.O.", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Golzern : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Golzern", "lines": ["GW"], "upperCase": "", "dd2": 650, "dd3": 440, "c2": 420, "c3": 280, "z2": 510, "z3": 340 };
    var Gr_Voigtsbg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gr.-Voigtsbg.", "lines": ["NM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "freiberg" };
    var Greiz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Greiz", "lines": ["PWz", "BG"], "upperCase": "GREIZ  i.R.ä.L.", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Greiz_Aubachth : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Greiz-Aubachth.", "lines": ["BG"], "upperCase": "GREIZ-AUBACHTHAL i.R.ä.L.", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Griesbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Griesbach", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grimma_ob_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grimma ob.Bhf.", "lines": ["BC"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 460, "c3": 310, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 390, "c3b": 260, "z2b": 490, "z3b": 330, "viab": "Rochlitz" };
    var Grimma_unt_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grimma unt. Bhf.", "lines": ["GW"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 460, "c3": 310, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 390, "c3b": 260, "z2b": 490, "z3b": 330, "viab": "Rochlitz" };
    var Groitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Groitzsch", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 530, "c3": 350, "z2": 450, "z3": 300 };
    var Gross_Steinberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gross-Steinberg", "lines": ["BC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossbauchlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossbauchlitz", "lines": ["RC", "OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 260, "c3": 170, "z2": 540, "z3": 360 };
    var Grossbothen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossbothen", "lines": ["BC", "GW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 420, "c3": 280, "z2": 0, "z3": 0, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 350, "c3b": 240, "z2b": 440, "z3b": 300, "viab": "Rochlitz" };
    var Grossbraunshain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossbraunshain", "lines": ["MR"], "upperCase": "GROSSBRAUNSHAIN i.S.=A." };
    var Grosscotta : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grosscotta", "lines": ["PGc"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossenhain", "lines": ["DE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar" };
    var Grossenhain_C_G : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossenhain C.-G.", "lines": ["GP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "ignoriert da via unklar" };
    var Grossenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossenstein", "lines": ["MR"], "upperCase": "GROSSENSTEIN i.S.=A." };
    var Grossharthau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossharthau", "lines": ["GD"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grosshartmannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grosshartmannsdorf", "lines": ["BGh"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 350, "c3": 230, "z2": 640, "z3": 430 };
    var Grosspostw : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grosspostw.", "lines": ["BS", "GC"], "upperCase": "", "dd2": 420, "dd3": 280, "c2": 890, "c3": 600, "z2": 0, "z3": 0, "via": "Bautzen", "comment": "todo via bautzen or putzkau" };
    var Grossröda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossröda", "lines": ["MR"], "upperCase": "ISA" };
    var Grossröhrsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossröhrsdorf", "lines": ["KP"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 690, "c3": 460, "z2": 980, "z3": 660 };
    var Grossschirma : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossschirma", "lines": ["NM"], "upperCase": "", "dd2": 310, "dd3": 210, "c2": 310, "c3": 210, "z2": 0, "z3": 0, "via": "Freiberg" };
    var Grossschönau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossschönau", "lines": ["SE"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 1100, "c3": 740, "z2": 1390, "z3": 930, "via": "Warnsdorf" };
    var Grosssermuth : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grosssermuth", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grossstöbnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grossstöbnitz", "lines": ["GGa"], "upperCase": "ISA" };
    var Grottau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grottau", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 675, "dd3": 450, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Oberoderwitz", "dd2b": 745, "dd3b": 500, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Warnsdorf", "comment": "unklar oder viaherrnhut" };
    var Grumbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grumbach", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grunau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grunau", "lines": ["RW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gröditz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gröditz", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "riesa" };
    var Gröppendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gröppendorf", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Grüna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grüna", "lines": ["DW"], "upperCase": "", "dd2": 560, "dd3": 370, "c2": 70, "c3": 50, "z2": 230, "z3": 150 };
    var Grünbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grünbach", "lines": ["FM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "via unklar" };
    var Grünhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grünhain", "lines": ["ZS"], "upperCase": "", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 830, "dd3b": 560, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Annaberg" };
    var Grünhainichen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grünhainichen", "lines": ["RF"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 170, "c3": 120, "z2": 470, "z3": 310 };
    var Grünstädtel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Grünstädtel", "lines": ["BSg", "GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 390, "c3": 260, "z2": 270, "z3": 180 };
    var Gutenfürst : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gutenfürst", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 500, "z3": 330 };
    var Görlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Görlitz", "lines": ["GD"], "upperCase": "GÖRLITZ i.Pr.", "dd2": 640, "dd3": 430, "c2": 1120, "c3": 750, "z2": 1410, "z3": 940 };
    var Görlitz_b_O : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Görlitz b.O.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Gössnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Gössnitz", "lines": ["LH", "GGa", "SG"], "upperCase": "GÖSSNITZ i.S.=A.", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 150, "z3b": 100, "viab": "Schönbörnchen" };
    var Göttengrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Göttengrün", "lines": ["SH"], "upperCase": "GÖTTENGRÜN i.R.j.L.", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 480, "z3": 320 };
    var Hainewalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hainewalde", "lines": ["SE"], "upperCase": "", "dd2": 650, "dd3": 430, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Warnsdorf", "comment": "via frei erfunden" };
    var Hainichen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hainichen", "lines": ["RW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 170, "c3": 110, "z2": 450, "z3": 300, "via": "Niederwiesa", "dd2b": 460, "dd3b": 310, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Meissen-Cölln" };
    var Hainsberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hainsberg", "lines": ["DW", "HK"], "upperCase": "", "dd2": 65, "dd3": 45, "c2": 420, "c3": 280, "z2": 710, "z3": 480 };
    var Halbendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Halbendorf", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Halsbrücke : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Halsbrücke", "lines": ["FH"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 290, "c3": 200, "z2": 580, "z3": 390 };
    var Hammer_Leubsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hammer-Leubsdorf", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 150, "c3": 100, "z2": 0, "z3": 0 };
    var Hammer_Unterwiesenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hammer-Unterwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hammerbrücke : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hammerbrücke", "lines": ["CA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hartha_b_Waldh : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hartha b. Waldh.", "lines": ["WR"], "upperCase": "", "dd2": 490, "dd3": 330, "c2": 210, "c3": 140, "z2": 440, "z3": 300, "via": "Waldheim" };
    var Harthau_i_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Harthau i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 55, "c3": 35, "z2": 350, "z3": 240 };
    var Hartmannmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hartmannmühle", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hartmannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hartmannsdorf", "lines": ["LW"], "upperCase": "", "dd2": 560, "dd3": 380, "c2": 80, "c3": 55, "z2": 380, "z3": 250, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 300, "z3b": 200, "viab": "Limbach" };
    var Hartmannsdorf_b_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hartmannsdorf b. S.", "lines": ["WCd"], "upperCase": " b saup", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 100, "z3": 65 };
    var Heidenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Heidenau", "lines": ["BD"], "upperCase": "", "dd2": 0, "dd3": 60, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "dd2 price unreadable" };
    var Helbigsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Helbigsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hennersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hennersdorf", "lines": ["AF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Herlasgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Herlasgrün", "lines": ["LH", "HOe"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 340, "z2": 210, "z3": 140 };
    var Hermannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hermannsdorf", "lines": ["ZS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hermsdf_Rhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hermsdf.-Rhf.", "lines": ["NM"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hermsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hermsdorf", "lines": ["KS"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Herrnhut : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Herrnhut", "lines": ["ZL", "HB"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 1070, "c3": 710, "z2": 0, "z3": 0, "via": "Löbau" };
    var Herzogswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Herzogswalde", "lines": ["PNo"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hetzdorf_b_Oe : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hetzdorf b.Oe.", "lines": ["RF", "HE"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 110, "c3": 75, "z2": 410, "z3": 270 };
    var Hilbersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hilbersdorf", "lines": ["DW"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 20, "c3": 15, "z2": 320, "z3": 210 };
    var Himmelsfürst : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Himmelsfürst", "lines": ["BL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hirschberg_a_d_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hirschberg a.d.S.", "lines": ["SH"], "upperCase": "IRJL", "dd2": 1290, "dd3": 860, "c2": 810, "c3": 540, "z2": 520, "z3": 350 };
    var Hirschfelde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hirschfelde", "lines": ["ZN"], "upperCase": "", "dd2": 680, "dd3": 450, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Hof : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hof", "lines": ["LH"], "upperCase": "", "dd2": 1360, "dd3": 910, "c2": 880, "c3": 590, "z2": 590, "z3": 390 };
    var Hohenfichte : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hohenfichte", "lines": ["RF"], "upperCase": "", "dd2": 460, "dd3": 310, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Hohenstein_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hohenstein-E.", "lines": ["DW"], "upperCase": "", "dd2": 600, "dd3": 400, "c2": 115, "c3": 75, "z2": 180, "z3": 120 };
    var Hohnstein_b_Sch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hohnstein b.Sch.", "lines": ["KH"], "upperCase": "", "dd2": 350, "dd3": 240, "c2": 830, "c3": 550, "z2": 1120, "z3": 750 };
    var Holzhau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Holzhau", "lines": ["NM"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 430, "c3": 290, "z2": 0, "z3": 0 };
    var Holzhausen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Holzhausen", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Hopfgarten_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hopfgarten i.S.", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 270, "c3": 190, "z2": 0, "z3": 0 };
    var Hundsgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Hundsgrün", "lines": ["PE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Häselich : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Häselich", "lines": ["MG"], "upperCase": "", "dd2": 140, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Höhlteich : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Höhlteich", "lines": ["StE", "HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Irfersgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Irfersgrün", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70 };
    var Jahnsdorf_i_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Jahnsdorf i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 90, "c3": 60, "z2": 320, "z3": 210 };
    var Jocketa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Jocketa", "lines": ["LH"], "upperCase": "", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 250, "z3": 170 };
    var Johanngeorgenstadt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Johanngeorgenstadt", "lines": ["JS"], "upperCase": "", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2b": 350, "z3b": 240, "via": "Thalheim", "comment": "Todo via" };
    var Jonsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Jonsdorf", "lines": ["BJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Jägersgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Jägersgrün", "lines": ["CA"], "upperCase": "", "dd2": 980, "dd3": 650, "c2": 500, "c3": 340, "z2": 380, "z3": 250, "via": "Aue", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 320, "z3b": 220, "viab": "Voigtsgrün" };
    var Jöhstadt_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Jöhstadt Bhf.", "lines": ["WJ"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 390, "c3": 260, "z2": 0, "z3": 0 };
    var Kamenz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kamenz", "lines": ["KP", "KE"], "upperCase": "KAMENZ i.S.", "dd2": 310, "dd3": 210, "c2": 790, "c3": 530, "z2": 1080, "z3": 720 };
    var Kemnitz, Dorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kemnitz, Dorf", "lines": ["DE"], "upperCase": "", "dd2": 40, "dd3": 20, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kesselsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kesselsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ketten : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ketten", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kieritzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kieritzsch", "lines": ["LH", "KC"], "upperCase": "", "dd2": 860, "dd3": 570, "c2": 380, "c3": 250, "z2b": 390, "z3b": 260, "viab": "Werdau", "comment": "weg unklar" };
    var Kipsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kipsdorf", "lines": ["HK"], "upperCase": "", "dd2": 230, "dd3": 150, "c2": 570, "c3": 380, "z2": 0, "z3": 0 };
    var Kirchberg_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kirchberg Bhf.", "lines": ["WCd"], "upperCase": "", "dd2": 850, "dd3": 570, "c2": 370, "c3": 250, "z2": 75, "z3": 50 };
    var Kirchberg_Hltept : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kirchberg Hltept.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 85, "z3": 55 };
    var Kirchberg_b_St : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kirchberg b.St.", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Kittlitz_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kittlitz i.S.", "lines": ["LWg"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kl_Waltersdf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kl. Waltersdf.", "lines": ["NM"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Klein_Schirma : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Klein-Schirma", "lines": ["DW"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Kleinradmeritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kleinradmeritz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinrügeln : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kleinrügeln", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinschönau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kleinschönau", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kleinwelka : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kleinwelka", "lines": ["BK"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 880, "c3": 590, "z2": 0, "z3": 0 };
    var Klingenberg_Colmn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Klingenberg-Colmn.", "lines": ["DW", "KF"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 330, "c3": 220, "z2": 620, "z3": 420 };
    var Klingenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Klingenthal", "lines": ["ZK"], "upperCase": "", "dd2": 1140, "dd3": 760, "c2": 660, "c3": 440, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 410, "z3b": 270, "viab": "Voigtsgrün" };
    var Klosterbuch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Klosterbuch", "lines": ["BC"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "via": "Döbeln Bhf." };
    var Klotzsche : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Klotzsche", "lines": ["GD", "KS"], "upperCase": "", "dd2": 65, "dd3": 45, "c2": 550, "c3": 370, "z2": 840, "z3": 560 };
    var Kohlmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kohlmühle", "lines": ["BS", "KH"], "upperCase": "", "dd2": 280, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Schandau" };
    var Kostitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kostitz", "lines": ["MR"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kratzau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kratzau", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 735, "dd3": 490, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Oberoderwitz", "dd2b": 805, "dd3b": 540, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Warnsdorf" };
    var Kratzmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kratzmühle", "lines": ["RW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kreischa_Slh : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kreischa-Slh.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0 };
    var Kretscham_Rothensehma : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kretscham-Rothensehma", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kriebethal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kriebethal", "lines": ["WK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kriebitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kriebitzsch", "lines": ["ZA"], "upperCase": "???", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Krippen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Krippen", "lines": ["BD"], "upperCase": "", "dd2": 260, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Krumhermsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Krumhermsdorf", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kubschütz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kubschütz", "lines": ["GD"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kunnersdf_a_d_Eig : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kunnersdf.a.d.Eig.", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kupferh_Grünthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kupferh. Grünthal", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Käferhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Käferhain", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kändler : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kändler", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 110, "c3": 75, "z2": 0, "z3": 0, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 160, "c3b": 110, "z2b": 0, "z3b": 0, "viab": "Wüstenbrand" };
    var Köblitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Köblitz", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königsbr_Haltest : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Königsbr. Haltest.", "lines": ["KS"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königsbrück_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Königsbrück B.", "lines": ["KS"], "upperCase": "", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Königstein", "lines": ["BD"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 690, "c3": 460, "z2": 990, "z3": 660 };
    var Königswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Königswalde", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Königswartha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Königswartha", "lines": ["BK"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Köttewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Köttewitz", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Köttwitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Köttwitzsch", "lines": ["RP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 230, "c3": 150, "z2": 0, "z3": 0 };
    var Kötzschenbroda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kötzschenbroda", "lines": ["LD", "DEK"], "upperCase": "", "dd2": 80, "dd3": 55, "c2": 570, "c3": 380, "z2": 860, "z3": 570 };
    var Kühberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kühberg", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Kürbitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Kürbitz", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langebrück : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langebrück", "lines": ["GD"], "upperCase": "", "dd2": 95, "dd3": 65, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenau", "lines": ["BL"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 320, "c3": 220, "z2": 0, "z3": 0 };
    var Langenberg_b_R : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenberg b.R.", "lines": ["LD"], "upperCase": "", "dd2": 290, "dd3": 190, "c2": 440, "c3": 300, "z2": 0, "z3": 0 };
    var Langenbuch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenbuch", "lines": ["SSz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenhennersdf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenhennersdf", "lines": ["PB"], "upperCase": "", "comment": "BP in statVerz ??? ", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Langenleuba : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenleuba", "lines": ["RP"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 220, "c3": 150, "z2": 0, "z3": 0 };
    var Langenwolmsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Langenwolmsdorf", "lines": ["ND"], "upperCase": "", "dd2": 250, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Lastau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lastau", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 370, "z3": 250 };
    var Lauenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lauenstein", "lines": ["MG"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lausa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lausa", "lines": ["KS"], "upperCase": "", "dd2": 90, "dd3": 60, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lausigk : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lausigk", "lines": ["LG"], "upperCase": "", "dd2": 770, "dd3": 520, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Chemnitz", "dd2b": 0, "dd3b": 0, "c2b": 300, "c3b": 200, "z2b": 0, "z3b": 0, "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 390, "z3c": 260, "viac": "Narsdorf" };
    var Laussnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Laussnitz", "lines": ["KS"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lauter : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lauter", "lines": ["SZ"], "upperCase": "", "dd2": 830, "dd3": 550, "c2": 350, "c3": 240, "z2": 230, "z3": 150 };
    var Lauterbach_Steinbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lauterbach-Steinbach", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 320, "c3": 220, "z2": 0, "z3": 0 };
    var Lautitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lautitz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lehndorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lehndorf", "lines": ["LH"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2b": 220, "z3b": 150, "viab": "Werdau" };
    var Leipzig_Bayr_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leipzig Bayr.Bf.", "lines": ["LH", "LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 630, "c3": 420, "z2b": 520, "z3b": 350, "via": "Gössnitz", "viab": "Werdau" };
    var Leipzig_Berl_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leipzig Berl.Bf.", "lines": ["LHV"], "upperCase": "", "comment": "line by NM", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Leipzig_Dr_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leipzig Dr.Bf.", "lines": ["LD"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Riesa" };
    var Leipzig_Stötteritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leipzig Stötteritz", "lines": ["LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Leipzig_Connewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leipzig-Connewitz", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "laut stat verz LP, weil strecke nach plagwitz hier abzweigt" };
    var Leisnig : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leisnig", "lines": ["BC"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 330, "c3": 220, "z2": 620, "z3": 410, "via": "Döbeln Bhf.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 540, "z3b": 360, "viab": "Lunzenau" };
    var Lengenfeld : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lengenfeld", "lines": ["ZF"], "upperCase": "", "dd2": 910, "dd3": 610, "c2": 430, "c3": 290, "z2": 0, "z3": 0 };
    var Leuben : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leuben", "lines": ["RN"], "upperCase": "", "dd2": 380, "dd3": 260, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Meissen-Cölln" };
    var Leubsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leubsdorf", "lines": ["RF"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 150, "c3": 100, "z2": 440, "z3": 300 };
    var Leutersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Leutersdorf", "lines": ["SE"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 1030, "c3": 690, "z2": 1320, "z3": 880 };
    var Lichtenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lichtenberg", "lines": ["NM"], "upperCase": "LICHTENBERG B FREIBERG", "dd2": 310, "dd3": 210, "c2": 300, "c3": 200, "z2": 600, "z3": 400 };
    var Lichtentanne : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lichtentanne", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2": 30, "z3": 20 };
    var Lichtst_Callnb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lichtst.-Callnb.", "lines": ["StE"], "upperCase": "", "dd2": 660, "dd3": 440, "c2": 180, "c3": 120, "z2": 170, "z3": 120 };
    var Liebertwolkwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Liebertwolkwitz", "lines": ["LG"], "upperCase": "", "dd2": 800, "dd3": 530, "c2b": 420, "c3b": 280, "z2": 0, "z3": 0, "via": "Leipzig Dr.Bf.", "comment": "raetselhaft, via frei erfunden" };
    var Liebschwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Liebschwitz", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 260, "z3": 180 };
    var Limbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Limbach", "lines": ["LW", "LWd"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 105, "c3": 70, "z2": 400, "z3": 270, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 290, "z3b": 190, "viab": "Wüstenbrand" };
    var Limmritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Limmritz", "lines": ["RC"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 230, "c3": 150, "z2": 520, "z3": 350 };
    var Lobstädt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lobstädt", "lines": ["KC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 420, "z3": 280 };
    var Lohmen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lohmen", "lines": ["KP"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 630, "c3": 420, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Lohsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lohsdorf", "lines": ["KH"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Loitzsch_Hohenl : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Loitzsch-Hohenl.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lommatzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lommatzsch", "lines": ["RN"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 490, "c3": 330, "z2b": 780, "z3b": 520, "comment": "via riesa unklar" };
    var Lottengrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lottengrün", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 190 };
    var Lucka_i_S_A : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lucka i. S.-A.", "lines": ["GM"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 570, "c3": 380, "z2c": 410, "z3c": 280, "via": "Gaschwitz", "dd2b": 0, "dd3b": 0, "c2b": 530, "c3b": 350, "z2b": 0, "z3b": 0, "viab": "Meuselwitz" };
    var Lugau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lugau", "lines": ["HW"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 150, "c3": 100, "z2": 270, "z3": 180 };
    var Lunzenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lunzenau", "lines": ["GW"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 0, "c3": 0, "z2": 270, "z3": 180, "comment": "via erfunden" };
    var Löbau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Löbau", "lines": ["GD", "ZL", "LWg", "EL"], "upperCase": "ISACHSEN", "dd2": 500, "dd3": 330, "c2": 980, "c3": 650, "z2": 1260, "z3": 840 };
    var Lössau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lössau", "lines": ["SSz"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lössnitz_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lössnitz Bhf. ", "lines": ["CA"], "upperCase": "", "dd2": 740, "dd3": 490, "c2": 260, "c3": 180, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 240, "z3b": 160, "viab": "Aue" };
    var Lössnitz_Haltest : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lössnitz Haltest.", "lines": ["CA"], "upperCase": "", "dd2": 770, "dd3": 510, "c2": 290, "c3": 190, "z2": 210, "z3": 140 };
    var Lössnitzgrund : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lössnitzgrund", "lines": ["RRg"], "upperCase": "", "dd2": 80, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Lössnitzthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lössnitzthal", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 0, "z3": 0 };
    var Lüttnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Lüttnitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Machendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Machendorf", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Machern : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Machern", "lines": ["LD"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mahlis : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mahlis", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Malter : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Malter", "lines": ["HK"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Maltitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Maltitz", "lines": ["LWg"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Marienberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Marienberg", "lines": ["RF"], "upperCase": "", "dd2": 650, "dd3": 430, "c2": 320, "c3": 210, "z2": 600, "z3": 400 };
    var Markersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Markersdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Markneukirchen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Markneukirchen", "lines": ["CA"], "upperCase": "", "dd2": 1150, "dd3": 770, "c2": 670, "c3": 450, "z2": 0, "z3": 0, "via": "Thalheim", "comment": "achtungviadiverse", "dd2b": 1280, "dd3b": 860, "c2b": 810, "c3b": 540, "z2b": 510, "z3b": 340, "viab": "Plauen i.V." };
    var Meerane : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Meerane", "lines": ["SG"], "upperCase": "", "dd2": 740, "dd3": 500, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "goessnitz ist doch totaler quatsch fuer DD  achtungviadiverse", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 115, "z3b": 80, "viab": "Schönbörnchen", "dd2c": 0, "dd3c": 0, "c2c": 260, "c3c": 180, "z2c": 180, "z3c": 120, "viac": "Gössnitz" };
    var Mehltheuer : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mehltheuer", "lines": ["LH", "WM"], "upperCase": "", "dd2": 1130, "dd3": 760, "c2": 650, "c3": 440, "z2": 360, "z3": 240 };
    var Meinersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Meinersdorf", "lines": ["CA"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 150, "c3": 100, "z2": 350, "z3": 240 };
    var Meiss_Triebischthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Meiss.-Triebischthal", "lines": ["BC"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 500, "c3": 300, "z2": 780, "z3": 520, "comment": "meissen allgemein todo   viadiverse trieb hbf abstand 0" };
    var Meissen_Cölln : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Meissen-Cölln", "lines": ["BC"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 500, "c3": 300, "z2": 780, "z3": 520, "comment": "viadiverse hbf abstand 0" };
    var Metzdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Metzdorf", "lines": ["HE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 130, "c3": 90, "z2": 0, "z3": 0 };
    var Meuselwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Meuselwitz", "lines": ["ZA", "GM", "MR"], "upperCase": "ISA", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2b": 370, "z3b": 250, "viab": "Werdau" };
    var Miltitz_Roitzschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Miltitz-Roitzschen", "lines": ["BC"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 440, "c3": 300, "z2": 0, "z3": 0 };
    var Mitt_Wittgsdrf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mitt.-Wittgsdrf.", "lines": ["KC"], "upperCase": "", "dd2": 530, "dd3": 360, "c2": 45, "c3": 30, "z2": 340, "z3": 230 };
    var Mitte_Langenwolmsdf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mitte Langenwolmsdf.", "lines": ["ND"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittelbach", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 110, "c3": 75, "z2": 0, "z3": 0 };
    var Mittelcrottendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittelcrottendorf", "lines": ["WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelcunew : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittelcunew.", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittelherold : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittelherold", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mitteloderwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mitteloderwitz", "lines": ["ZL"], "upperCase": "", "dd2": 580, "dd3": 390, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mittweida : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittweida", "lines": ["RC"], "upperCase": "", "dd2": 590, "dd3": 400, "c2": 110, "c3": 75, "z2": 410, "z3": 270, "via": "Chemnitz", "dd2b": 540, "dd3b": 360, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Döbeln Bhf." };
    var Mittweida_Markrsb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mittweida-Markrsb.", "lines": ["BSg"], "upperCase": "", "dd2": 800, "dd3": 530, "c2": 410, "c3": 280, "z2": 290, "z3": 190, "comment": "viadiv weg unklar" };
    var Mockr_Jessn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mockr.-Jessn.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mohlsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mohlsdorf", "lines": ["BG"], "upperCase": "IRÄL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 0, "comment": "z3 nicht lesbar" };
    var Mohorn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mohorn", "lines": ["PNo"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Moldau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Moldau", "lines": ["NM"], "upperCase": "IBÖ", "dd2": 480, "dd3": 320, "c2": 480, "c3": 320, "z2": 770, "z3": 520 };
    var Moritzburg_Eisenb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Moritzburg-Eisenb.", "lines": ["RRg"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Moritzdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Moritzdorf", "lines": ["KS"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mosel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mosel", "lines": ["DW", "MO"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 250, "c3": 170, "z2": 50, "z3": 35 };
    var Mulda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mulda", "lines": ["NM", "MS"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 330, "c3": 220, "z2": 620, "z3": 420 };
    var Muldenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Muldenberg", "lines": ["CA", "FM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 550, "c3": 370, "z2": 280, "z3": 190 };
    var Muldenhütten : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Muldenhütten", "lines": ["DW"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Mutzschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mutzschen", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mylau, Bahnhof : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mylau, Bahnhof", "lines": ["RM"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 460, "c3": 310, "z2": 170, "z3": 120 };
    var Mylau, Haltestelle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mylau, Haltestelle", "lines": ["RM"], "upperCase": "", "dd2": 945, "dd3": 635, "c2": 465, "c3": 315, "z2": 175, "z3": 125, "comment": "todo spezial:vmtl pauschal 5pfg ab myl bhf" };
    var Müdisdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Müdisdorf", "lines": ["BGh"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Mügeln_b_O : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mügeln b.O.", "lines": ["OD", "MN"], "upperCase": "", "dd2": 470, "dd3": 320, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Mügeln_b_P : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mügeln b.P.", "lines": ["BD", "MG"], "upperCase": "", "dd2": 70, "dd3": 50, "c2": 560, "c3": 370, "z2": 840, "z3": 560 };
    var Mühltroff : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mühltroff", "lines": ["SSz"], "upperCase": "", "dd2": 1190, "dd3": 790, "c2": 710, "c3": 470, "z2": 420, "z3": 280 };
    var Mülsen_St_Jacob : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mülsen St. Jacob", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": "abstand 0 diese drei" };
    var Mülsen_St_Mich : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mülsen St. Mich", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": "abstand 0 diese drei" };
    var Mülsen_St_Niclas : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Mülsen St. Niclas", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 105, "z3": 70, "comment": " spezial fuer diese 3 ?" };
    var Narsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Narsdorf", "lines": ["KC", "RP"], "upperCase": "", "dd2": 670, "dd3": 450, "c2": 190, "c3": 130, "z2": 290, "z3": 190 };
    var Nassau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nassau", "lines": ["NM"], "upperCase": "", "dd2": 380, "dd3": 250, "c2": 380, "c3": 250, "z2": 0, "z3": 0 };
    var Naundorf_b_Dr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Naundorf b. Dr.", "lines": ["DE", "DEC"], "upperCase": "", "dd2": 80, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naundorf_b_O : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Naundorf b.O", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naundorf_b_Schm : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Naundorf b.Schm.", "lines": ["HK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Naunhof : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Naunhof", "lines": ["BC"], "upperCase": "", "dd2": 680, "dd3": 460, "c2": 530, "c3": 350, "z2": 0, "z3": 0 };
    var Ndr_Olbersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ndr.-Olbersdorf", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nebitzschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nebitzschen", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nennigmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nennigmühle", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerch_Gornewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nerch.-Gornewitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerchau_Haltept : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nerchau Haltept.", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nerchau_Trebsen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nerchau-Trebsen", "lines": ["GW", "MN"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 0, "c3": 0, "z2": 540, "z3": 360 };
    var Neschwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neschwitz", "lines": ["BK"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Netzschkau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Netzschkau", "lines": ["LH"], "upperCase": "", "dd2": 960, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Neucunnersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neucunnersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 1030, "c3": 680, "z2": 0, "z3": 0 };
    var Neudorf_i_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neudorf i.E.", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 420, "c3": 280, "z2": 0, "z3": 0 };
    var Neugersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neugersdorf", "lines": ["OW"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 990, "c3": 660, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Neuhausen_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neuhausen i.S.", "lines": ["PN"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 380, "c3": 250, "z2": 660, "z3": 440 };
    var Neuheide : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neuheide", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neukirchen_i_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neukirchen i.E.", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 70, "c3": 50, "z2": 330, "z3": 220 };
    var Neumark : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neumark", "lines": ["LH", "BG", "DW"], "upperCase": "", "dd2": 860, "dd3": 580, "c2": 380, "c3": 260, "z2": 90, "z3": 60, "comment": "BG = Brunn Greiz lt stat verz, lt. www auch NG, preuss: dw bis neumark?" };
    var Neumühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neumühle", "lines": ["PWz"], "upperCase": "IRÄL", "dd3": 0, "c2": 510, "c3": 340, "z2": 210, "z3": 140 };
    var Neundorf_b_P : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neundorf b. P.", "lines": ["PB"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neundorf_i_V : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neundorf i.V.", "lines": ["PE"], "upperCase": "", "dd2": 1080, "dd3": 720, "c2": 600, "c3": 400, "z2": 310, "z3": 210 };
    var Neusalza_Sprmb : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neusalza-Sprmb.", "lines": ["OW"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 930, "c3": 620, "z2": 0, "z3": 0 };
    var Neustadt_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neustadt i.S.", "lines": ["BS", "ND"], "upperCase": "", "dd2": 410, "dd3": 280, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Schandau", "dd2b": 280, "dd3b": 190, "c2b": 760, "c3b": 510, "z2b": 0, "z3b": 0, "viab": "Pirna Bf.", "dd2c": 0, "dd3c": 0, "c2c": 780, "c3c": 520, "z2c": 0, "z3c": 0, "viac": "Arnsdorf" };
    var Neusörnewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neusörnewitz", "lines": ["BC"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Neuwelt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Neuwelt", "lines": ["SZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 360, "c3": 240, "z2": 230, "z3": 160 };
    var Nickritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nickritz", "lines": ["RN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nicolai_Vorst : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nicolai-Vorst", "lines": ["DW"], "upperCase": "", "dd2": 500, "dd3": 340, "c2": 20, "c3": 15, "z2": 280, "z3": 190 };
    var Nied_Dittmannsd : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nied.-Dittmannsd", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nieder_Mülsen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nieder-Mülsen", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 75, "z3": 50 };
    var Niederau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederau", "lines": ["LD"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederdorf", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 140, "c3": 90, "z2": 280, "z3": 190 };
    var Niederglobenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederglobenstein", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedergrund : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niedergrund", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederharthau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederharthau", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 45, "c3": 30, "z2": 0, "z3": 0 };
    var Niederhermsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederhermsdorf", "lines": ["PNo"], "upperCase": "", "dd2": 60, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederneukirch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederneukirch", "lines": ["BS", "NnB"], "upperCase": "", "dd2": 310, "dd3": 210, "c2": 790, "c3": 530, "z2": 0, "z3": 0 };
    var Niederreinsberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederreinsberg", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederrennersd : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederrennersd.", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederschlag : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederschlag", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederschlema : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederschlema", "lines": ["SZ", "SN"], "upperCase": "", "dd2": 810, "dd3": 540, "c2": 340, "c3": 230, "z2": 0, "z3": 0, "via": "Thalheim", "dd2b": 930, "dd3b": 620, "c2b": 450, "c3b": 300, "z2b": 0, "z3b": 0, "viab": "Zwickau" };
    var Niederschlottwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederschlottwitz", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "teil nicht lesbar" };
    var Niederschmiedeberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederschmiedeberg", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedersedlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niedersedlitz", "lines": ["BD"], "upperCase": "", "dd2": 50, "dd3": 35, "c2": 540, "c3": 360, "z2": 830, "z3": 550 };
    var Niederseiffenbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederseiffenbach", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederstrahwlde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederstrahwlde", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederstriegis : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederstriegis", "lines": ["BC"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 290, "c3": 200, "z2": 0, "z3": 0 };
    var Niederwartha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederwartha", "lines": ["DE"], "upperCase": "", "dd2": 70, "dd3": 30, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niederwiesa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederwiesa", "lines": ["DW", "RW"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 55, "c3": 35, "z2": 350, "z3": 230 };
    var Niederwürschnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niederwürschnitz", "lines": ["StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 190, "c3": 130, "z2": 0, "z3": 0 };
    var Niedrbobritzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niedrbobritzsch", "lines": ["DW"], "upperCase": "", "dd2": 190, "dd3": 130, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Niedrpretzschend : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Niedrpretzschend.", "lines": ["KF"], "upperCase": "NIEDERPRETZSCHENDORF", "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nikrisch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nikrisch", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nimbschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nimbschen", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nossen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nossen", "lines": ["BC", "RN", "NM", "PNo"], "upperCase": "", "dd2": 290, "dd3": 200, "c2": 360, "c3": 240, "z2d": 650, "z3d": 400, "via": "Meissen-Cölln", "comment": "cc via meissen, via Doebeln dd selbe strecke meissen", "dd2b": 0, "dd3b": 0, "c2b": 330, "c3b": 220, "z2b": 0, "z3b": 0, "viab": "Hainichen", "dd2c": 0, "dd3c": 0, "c2c": 390, "c3c": 260, "z2c": 0, "z3c": 0, "viac": "Freiberg" };
    var Nossen_Haltep : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nossen Haltep.", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Nöbdenitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Nöbdenitz", "lines": ["GGa"], "upperCase": "ISA", "dd2": 880, "dd3": 590, "c2": 400, "c3": 270, "z2": 0, "z3": 0 };
    var Ober_Altchemnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ober-Altchemnitz", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 35, "c3": 25, "z2": 0, "z3": 0 };
    var Ober_Dittmannsd : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ober-Dittmannsd.", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ober_Schönbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ober-Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ober_Tannenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ober-Tannenberg", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberbobritzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberbobritzsch", "lines": ["KF"], "upperCase": "", "dd2": 230, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercarsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercarsdorf", "lines": ["HK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "siehe ulberndorf" };
    var Obercolmnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercolmnitz", "lines": ["KF"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercrinitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercrinitz", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 140, "z3": 100 };
    var Obercrottendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercrottendorf", "lines": ["WC"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2b": 390, "z3b": 260, "via": "Annaberg" };
    var Obercunewalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercunewalde", "lines": ["GC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obercunnersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obercunnersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 560, "dd3": 370, "c2": 1040, "c3": 690, "z2": 0, "z3": 0 };
    var Oberdorf_Beutha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberdorf-Beutha", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 180, "c3": 120, "z2": 0, "z3": 0, "via": "Neukirchen i.E.", "comment": "neukirchen korrekt? anderer weg unklar" };
    var Oberdorf_Oberoderwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberdorf-Oberoderwitz", "lines": ["OW"], "upperCase": "", "dd2": 550, "dd3": 370, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberehrenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberehrenberg", "lines": ["KH"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberglobenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberglobenstein", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergruna_Bieberstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obergruna-Bieberstein", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergrund : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obergrund", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 370, "dd3": 250, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obergrüna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obergrüna", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 105, "c3": 70, "z2": 230, "z3": 150 };
    var Oberhartmannsdf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberhartmannsdf.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 130, "z3": 90 };
    var Oberhelmsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberhelmsdorf", "lines": ["ND"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberherold : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberherold", "lines": ["WE", "HT"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 270, "c3": 180, "z2": 0, "z3": 0 };
    var Oberholz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberholz", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 390, "c3": 260, "z2": 0, "z3": 0 };
    var Oberlichtenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberlichtenau", "lines": ["RC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 55, "c3": 40, "z2": 350, "z3": 240 };
    var Obermolbitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obermolbitz", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberneukirch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberneukirch", "lines": ["BS"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 810, "c3": 540, "z2": 1100, "z3": 740, "via": "Putzkau" };
    var Oberoderwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberoderwitz", "lines": ["ZL", "OW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 1040, "c3": 700, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Oberreichenbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberreichenbach", "lines": ["RM"], "upperCase": "IV", "dd2": 930, "dd3": 620, "c2": 450, "c3": 300, "z2": 160, "z3": 110 };
    var Oberreinsberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberreinsberg", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberrennersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberrennersdorf", "lines": ["HB"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberrittersgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberrittersgrün", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2": 320, "z3": 220 };
    var Oberrothenbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberrothenbach", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 35, "z3": 25 };
    var Oberschlema : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberschlema", "lines": ["SN"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 470, "c3": 310, "z2": 170, "z3": 120, "via": "Zwickau", "dd2b": 0, "dd3b": 0, "c2b": 350, "c3b": 240, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Oberschlottwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberschlottwitz", "lines": ["MG"], "upperCase": "", "dd2": 170, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberschmiedeberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberschmiedeberg", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberschönheide : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberschönheide", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 210, "z3": 140 };
    var Oberstützengrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberstützengrün", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 180, "z3": 120 };
    var Oberullersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberullersdorf", "lines": ["RZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Obervogelgesang : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obervogelgesang", "lines": ["BD"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oberwiesenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oberwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 830, "dd3": 550, "c2": 500, "c3": 330, "z2": 0, "z3": 0 };
    var Obstmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Obstmühle", "lines": ["WR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oederan : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oederan", "lines": ["DW"], "upperCase": "", "dd2": 350, "dd3": 240, "c2": 140, "c3": 100, "z2": 440, "z3": 290 };
    var Oelschütz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oelschütz", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Oelsnitz_i_E : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oelsnitz i.E.", "lines": ["StE"], "upperCase": "", "dd2": 700, "dd3": 470, "c2": 220, "c3": 150, "z2": 210, "z3": 140, "via": "St. Egidien" };
    var Oelsnitz_i_V : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oelsnitz i.V.", "lines": ["PE", "HOe"], "upperCase": "", "dd2": 1180, "dd3": 790, "c2": 710, "c3": 470, "z2": 410, "z3": 280, "via": "Plauen i.V.", "dd2b": 1140, "dd3b": 760, "c2b": 660, "c3b": 440, "z2b": 370, "z3b": 250, "viab": "Voigtsgrün" };
    var Oetzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oetzsch", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Olbernhau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Olbernhau", "lines": ["PN"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 300, "c3": 200, "z2": 600, "z3": 400 };
    var Oppach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oppach", "lines": ["TD"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ortmannsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ortmannsdorf", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 330, "c3": 220, "z2": 140, "z3": 90 };
    var Oschatz_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oschatz Bf.", "lines": ["LD", "OS", "OD"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 480, "c3": 320, "z2": 0, "z3": 0, "via": "Riesa", "comment": "sehr komplex", "dd2b": 0, "dd3b": 0, "c2b": 440, "c3b": 290, "z2b": 0, "z3b": 0, "viab": "Mügeln", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 770, "z3c": 520, "viac": "Riesa", "dd2d": 0, "dd3d": 0, "c2d": 0, "c3d": 0, "z2d": 880, "z3d": 600, "viad": "Leipzig Bayr.Bf." };
    var Oschatz_Haltest : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oschatz, Haltest.", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ostrau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ostrau", "lines": ["RC"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 310, "c3": 210, "z2": 600, "z3": 400, "comment": "via frei erfunden" };
    var Ostritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ostritz", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ottendorf_b_Med : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ottendorf b.Med.", "lines": ["KS"], "upperCase": "", "dd2": 120, "dd3": 80, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ottendorf_b_Mitt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ottendorf b.Mitt.", "lines": ["RC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 75, "c3": 50, "z2": 0, "z3": 0 };
    var Ottendorf_b_Neu : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ottendorf b.Neu.", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Otterwisch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Otterwisch", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 340, "c3": 230, "z2": 0, "z3": 0 };
    var Oybin : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Oybin", "lines": ["ZO"], "upperCase": "", "dd2": 730, "dd3": 485, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "  anmerkung oder jonsdorf" };
    var Paunsdorf_Stünz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Paunsdorf-Stünz", "lines": ["LG", "LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 460, "c3": 310, "z2": 0, "z3": 0 };
    var Pausa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pausa", "lines": ["WM"], "upperCase": "", "dd2": 1170, "dd3": 780, "c2": 690, "c3": 460, "z2": 410, "z3": 270, "via": "Mehltheuer" };
    var Penig : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Penig", "lines": ["GW", "RP"], "upperCase": "", "dd2": 740, "dd3": 490, "c2": 260, "c3": 180, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 790, "dd3b": 530, "c2b": 310, "c3b": 210, "z2b": 210, "z3b": 140, "viab": "Waldenburg" };
    var Pfaffenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pfaffenhain", "lines": ["ZC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 105, "c3": 70, "z2": 0, "z3": 0 };
    var Pirk : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pirk", "lines": ["PE"], "upperCase": "", "dd2": 1140, "dd3": 760, "c2": 660, "c3": 440, "z2": 380, "z3": 250, "via": "Plauen i.V." };
    var Pirna_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pirna Bf.", "lines": ["BD", "KP", "PB"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 590, "c3": 380, "z2": 880, "z3": 590 };
    var Pirna_Haltep : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pirna Haltep.", "lines": ["PB", "PGc"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Plauen_b_Dr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Plauen b. Dr.", "lines": ["DW"], "upperCase": "", "dd2": 25, "dd3": 15, "c2": 470, "c3": 310, "z2": 750, "z3": 500 };
    var Plauen_i_V : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Plauen i.V.", "lines": ["LH", "PE"], "upperCase": "", "dd2": 1070, "dd3": 710, "c2": 590, "c3": 390, "z2": 300, "z3": 200, "comment": "dd2 geaendert, passt in fkb nicht zu dd3 und auch sinst nicht" };
    var Plauen_i_V_u_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Plauen i.V. u.B.", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pockau_Lengef : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pockau-Lengef.", "lines": ["RF", "PN"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 240, "c3": 160, "z2": 530, "z3": 360 };
    var Pommritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pommritz", "lines": ["GD"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 920, "c3": 610, "z2": 0, "z3": 0 };
    var Ponitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ponitz", "lines": ["LH"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 160, "z3": 110 };
    var Porschdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Porschdorf", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Potschappel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Potschappel", "lines": ["DW", "PNo"], "upperCase": "", "dd2": 45, "dd3": 30, "c2": 440, "c3": 300, "z2": 740, "z3": 490 };
    var Prausitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Prausitz", "lines": ["RN"], "upperCase": "", "dd2": 380, "dd3": 250, "c2": 450, "c3": 300, "z2": 0, "z3": 0, "via": "Riesa" };
    var Pretzschendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pretzschendorf", "lines": ["KF"], "upperCase": "", "dd2": 200, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Priestewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Priestewitz", "lines": ["LD", "GP"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 510, "c3": 340, "z2": 0, "z3": 0 };
    var Prösen_Wainsd : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Prösen-Wainsd.", "lines": ["DE"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pulsnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pulsnitz", "lines": ["KP"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 720, "c3": 480, "z2": 1010, "z3": 670 };
    var Putzkau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Putzkau", "lines": ["NnB"], "upperCase": "", "dd2": 290, "dd3": 190, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pöhla : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pöhla", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 410, "c3": 270, "z2": 280, "z3": 190 };
    var Pöllwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pöllwitz", "lines": ["WM"], "upperCase": "IRÄL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Pötzscha_Wehlen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Pötzscha (Wehlen)", "lines": ["BD"], "upperCase": "", "dd2": 160, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Quoos : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Quoos", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rabenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rabenau", "lines": ["HK"], "upperCase": "", "dd2": 95, "dd3": 65, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Rabenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rabenstein", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0, "via": "Wüstenbrand", "dd2b": 0, "dd3b": 0, "c2b": 150, "c3b": 100, "z2b": 0, "z3b": 0, "viab": "Wittgensdorf" };
    var Radeberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Radeberg", "lines": ["GD"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 610, "c3": 410, "z2": 900, "z3": 600 };
    var Radebeul : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Radebeul", "lines": ["LD", "RRg"], "upperCase": "", "dd2": 60, "dd3": 40, "c2": 540, "c3": 360, "z2": 0, "z3": 0 };
    var Radeburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Radeburg", "lines": ["RRg"], "upperCase": "", "dd2": 170, "dd3": 110, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Radibor : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Radibor", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Raschau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Raschau", "lines": ["BSg"], "upperCase": "", "dd2": 800, "dd3": 540, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Annaberg", "dd2b": 880, "dd3b": 590, "c2b": 410, "c3b": 270, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 0, "dd3c": 0, "c2c": 0, "c3c": 0, "z2c": 270, "z3c": 180, "viac": "Aue" };
    var Rathen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rathen", "lines": ["BD"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rattwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rattwitz", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rauenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rauenstein", "lines": ["RF"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Raun : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Raun", "lines": ["PE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rauschenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rauschenthal", "lines": ["WK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rautenkranz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rautenkranz", "lines": ["CA"], "upperCase": "", "dd2": 960, "dd3": 640, "c2": 480, "c3": 320, "z2": 360, "z3": 240, "via": "Aue" };
    var Rechenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rechenberg", "lines": ["NM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reckwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reckwitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rehmsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rehmsdorf", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reibersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reibersdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenau", "lines": ["ZM"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenb_Karolinenstr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenb., Karolinenstr.", "lines": ["RM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reichenbach_i_L : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenbach i.L.", "lines": ["GD"], "upperCase": "ILIPR", "dd2": 560, "dd3": 370, "c2": 1040, "c3": 690, "z2": 1330, "z3": 890 };
    var Reichenbach_i_V : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenbach i.V.", "lines": ["LH", "RM"], "upperCase": "OB BHF", "dd2": 920, "dd3": 610, "c2": 440, "c3": 290, "z2": 150, "z3": 100, "comment": "NM via frei erfunden um hauptstrecke zu erzwingen, dd2 war falsch abgetippt" };
    var Reichenbach_i_V_u_B : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenbach i.V., u.B.", "lines": ["RM"], "upperCase": "", "dd2": 935, "dd3": 625, "c2": 455, "c3": 305, "z2": 165, "z3": 115, "comment": "todo sonderregelungplusfuenfzehn" };
    var Reichenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenberg", "lines": ["RZ"], "upperCase": "IBÖ", "dd2": 800, "dd3": 540, "c2": 1280, "c3": 860, "z2": 0, "z3": 0, "via": "Putzkau", "dd2b": 870, "dd3b": 590, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Herrnhut" };
    var Reichenfels : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reichenfels", "lines": ["WM"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reifland : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reifland", "lines": ["RF"], "upperCase": "", "dd2": 530, "dd3": 360, "c2": 210, "c3": 140, "z2": 500, "z3": 330 };
    var Reitzenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reitzenhain", "lines": ["RF"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2": 710, "z3": 480 };
    var Remse : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Remse", "lines": ["GW"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 130, "z3": 90 };
    var Rentzschmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rentzschmühle", "lines": ["PWz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Reuth : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Reuth", "lines": ["LH"], "upperCase": "", "dd2": 1220, "dd3": 810, "c2": 740, "c3": 490, "z2": 450, "z3": 300 };
    var Riesa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Riesa", "lines": ["LD", "RC", "RN", "RRV", "ZE"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 410, "c3": 270, "z2": 690, "z3": 460, "comment": "ZE beginnt wohl Zeithain Bogendreick an LD" };
    var Rochlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rochlitz", "lines": ["GW", "RP", "WR"], "upperCase": "", "dd2": 720, "dd3": 480, "c2": 240, "c3": 160, "z2": 0, "z3": 0, "via": "Narsdorf", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 340, "z3b": 230, "viab": "Lunzenau", "comment": "weg B auch ueber narsdorf", "dd2c": 680, "dd3c": 460, "c2c": 0, "c3c": 0, "z2c": 0, "z3c": 0, "viac": "Grossbothen", "dd2d": 590, "dd3d": 400, "c2d": 0, "c3d": 0, "z2d": 0, "z3d": 0, "viad": "Hartha b. Waldh." };
    var Rochsburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rochsburg", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 250, "z3": 170 };
    var Rodewisch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rodewisch", "lines": ["ZF"], "upperCase": "", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 180, "z3": 120 };
    var Rodewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rodewitz", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rohnau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rohnau", "lines": ["ZN"], "upperCase": "", "dd2": 690, "dd3": 460, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ronneburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ronneburg", "lines": ["GGa", "MR"], "upperCase": "ISA", "dd2": 920, "dd3": 620, "c2": 450, "c3": 300, "z2": 330, "z3": 220 };
    var Rosenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rosenthal", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Rositz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rositz", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2b": 340, "z3b": 230, "viab": "Werdau" };
    var Rosswein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rosswein", "lines": ["BC", "RW"], "upperCase": "", "dd2": 350, "dd3": 230, "c2": 320, "c3": 210, "z2": 600, "z3": 400, "via": "Nossen", "comment": "TODO via geraten!!!", "dd2b": 0, "dd3b": 0, "c2b": 280, "c3b": 190, "z2b": 0, "z3b": 0, "viab": "Hainichen" };
    var Rothenkirchen_i_V : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rothenkirchen i.V.", "lines": ["WCd"], "upperCase": "", "dd2": 940, "dd3": 630, "c2": 460, "c3": 310, "z2": 170, "z3": 120, "via": "Zwickau", "dd2b": 0, "dd3b": 0, "c2b": 540, "c3b": 360, "z2b": 0, "z3b": 0, "viab": "Wilzschhaus" };
    var Rottwerndorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rottwerndorf", "lines": ["PB"], "upperCase": "", "dd2": 150, "dd3": 100, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ruppersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ruppersdorf", "lines": ["ZL"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Russdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Russdorf", "lines": ["ZN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Röderau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Röderau", "lines": ["RRV"], "upperCase": "", "comment": "linie laut buch von  preuss", "dd2": 310, "dd3": 210, "c2": 420, "c3": 280, "z2": 720, "z3": 480 };
    var Rödlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rödlitz", "lines": ["StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 200, "c3": 140, "z2": 190, "z3": 130 };
    var Röhrsdorf_b_Chemn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Röhrsdorf b.Chemn.", "lines": ["LWd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 120, "c3": 80, "z2": 0, "z3": 0, "via": "Wittgensdorf", "dd2b": 0, "dd3b": 0, "c2b": 150, "c3b": 100, "z2b": 0, "z3b": 0, "viab": "Wüstenbrand" };
    var Rüssen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Rüssen", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Saupersdorf_Bhf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Saupersdorf Bhf.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklarwas i und ii ist" };
    var Saupersdorf_Hltst : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Saupersdorf Hltst.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklarwas i und ii ist" };
    var Sayda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Sayda", "lines": ["MS"], "upperCase": "", "dd2": 420, "dd3": 280, "c2": 420, "c3": 280, "z2": 0, "z3": 0 };
    var Schandau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schandau", "lines": ["BD", "BS"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 720, "c3": 480, "z2": 1010, "z3": 680 };
    var Scharfenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Scharfenstein", "lines": ["AF"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 210, "c3": 140, "z2": 0, "z3": 0 };
    var Schedewitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schedewitz", "lines": ["SZ"], "upperCase": "", "dd2": 790, "dd3": 530, "c2": 320, "c3": 210, "z2": 20, "z3": 15 };
    var Scheibe : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Scheibe", "lines": ["SE", "ZL"], "upperCase": "", "dd2": 600, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Scheibenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Scheibenberg", "lines": ["BSg", "ZS"], "upperCase": "", "dd2": 750, "dd3": 500, "c2": 420, "c3": 280, "z2c": 330, "z3c": 220, "via": "Annaberg", "dd2b": 0, "dd3b": 0, "c2b": 380, "c3b": 260, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Schirgiswalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schirgiswalde", "lines": ["OW"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 860, "c3": 580, "z2": 0, "z3": 0 };
    var Schlauroth : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schlauroth", "lines": ["GD"], "upperCase": "IPR", "dd2": 620, "dd3": 410, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schleiz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schleiz", "lines": ["SSz"], "upperCase": "IRJL", "dd2": 1260, "dd3": 840, "c2": 780, "c3": 520, "z2": 490, "z3": 330, "comment": "schlecht lesbar" };
    var Schlettau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schlettau", "lines": ["BSg"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 400, "c3": 270, "z2c": 350, "z3c": 240, "via": "Annaberg", "dd2b": 0, "dd3b": 0, "c2b": 410, "c3b": 270, "z2b": 0, "z3b": 0, "viab": "Grünhain" };
    var Schlössel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schlössel", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmalzgrube : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmalzgrube", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmiedeberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmiedeberg", "lines": ["HK"], "upperCase": "", "dd2": 200, "dd3": 130, "c2": 550, "c3": 370, "z2": 0, "z3": 0 };
    var Schmorkau_b_K : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmorkau b.K.", "lines": ["KS"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmorkau_b_O : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmorkau b.O.", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmölln : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmölln", "lines": ["NnB"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schmölln_S_A : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schmölln S.-A.", "lines": ["GGa"], "upperCase": "", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 250, "z3": 170 };
    var Schneeberg_Neust : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schneeberg-Neust.", "lines": ["SN"], "upperCase": "", "dd2": 850, "dd3": 570, "c2": 370, "c3": 250, "z2c": 190, "z3c": 130, "via": "Thalheim", "comment": "ausserdem ueber Wilkau", "dd2b": 960, "dd3b": 640, "c2b": 480, "c3b": 320, "z2b": 0, "z3b": 0, "viab": "Zwickau" };
    var Schrebitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schrebitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schwarzenberg_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schwarzenberg Bf.", "lines": ["SZ", "JS", "BSg"], "upperCase": "", "dd2": 830, "dd3": 560, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Annaberg", "dd2b": 860, "dd3b": 570, "c2b": 380, "c3b": 250, "z2b": 0, "z3b": 0, "viab": "Thalheim", "dd2c": 1020, "dd3c": 680, "c2c": 540, "c3c": 360, "z2c": 250, "z3c": 170, "viac": "Zwickau" };
    var Schwarzenberg_Hltp : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schwarzenberg Hltp.", "lines": ["JS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schweikershain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schweikershain", "lines": ["RC"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 150, "c3": 100, "z2": 440, "z3": 300 };
    var Schweinitzthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schweinitzthal", "lines": ["PN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schwepnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schwepnitz", "lines": ["KS"], "upperCase": "", "dd2": 240, "dd3": 160, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schweta : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schweta", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schöna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schöna", "lines": ["BD"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönberg", "lines": ["LH", "SH", "SSz"], "upperCase": "", "dd2": 1170, "dd3": 780, "c2": 690, "c3": 460, "z2": 400, "z3": 270 };
    var Schönbörnchen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönbörnchen", "lines": ["DW", "SG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 75, "z3": 50 };
    var Schöneck : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schöneck", "lines": ["CA"], "upperCase": "", "dd2": 1070, "dd3": 710, "c2": 590, "c3": 390, "z2b": 320, "z3b": 220, "via": "Thalheim", "comment": "weg oder Voigtsgruen ?!" };
    var Schönefeld : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönefeld", "lines": ["LHV"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Schönfeld_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönfeld Bf.", "lines": ["AF", "SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schoenfeld unklar" };
    var Schönfeld_Haltepkt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönfeld Haltepkt.", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schoenfeld unklar" };
    var Schönh_Hammer : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönh.Hammer", "lines": ["CA"], "upperCase": "", "dd2": 920, "dd3": 610, "c2": 440, "c3": 290, "z2": 310, "z3": 210 };
    var Schönheide : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schönheide", "lines": ["WCd"], "upperCase": "", "dd2": 980, "dd3": 660, "c2": 870, "c3": 510, "z2": 210, "z3": 140, "comment": "auch oberschoeneheide" };
    var Schüllermühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Schüllermühle", "lines": ["MG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Sebnitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Sebnitz", "lines": ["BS"], "upperCase": "", "dd2": 340, "dd3": 230, "c2": 810, "c3": 540, "z2": 0, "z3": 0, "via": "Schandau" };
    var Seelingstädt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seelingstädt", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "welches ?" };
    var Seelingstädt_b_Br : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seelingstädt b.Br.", "lines": ["BSt"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seerhausen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seerhausen", "lines": ["RC"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Sehma : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Sehma", "lines": ["WA"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seidau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seidau", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seifersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seifersdorf", "lines": ["HK"], "upperCase": "", "dd2": 115, "dd3": 80, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Seifhennersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seifhennersdorf", "lines": ["SE"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 1050, "c3": 700, "z2": 0, "z3": 0 };
    var Seitschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Seitschen", "lines": ["GD"], "upperCase": "", "dd2": 320, "dd3": 210, "c2": 800, "c3": 530, "z2": 0, "z3": 0 };
    var Siebenhöfen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Siebenhöfen", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Siebenlehn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Siebenlehn", "lines": ["PNo"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Siegelhof : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Siegelhof", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 290, "z3": 190 };
    var Siegmar : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Siegmar", "lines": ["DW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 55, "c3": 35, "z2": 250, "z3": 170 };
    var Silberstrasse : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Silberstrasse", "lines": ["SZ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 60, "z3": 40 };
    var Singwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Singwitz", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Sohland : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Sohland", "lines": ["OW"], "upperCase": "", "dd2": 410, "dd3": 270, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Sommerfeld : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Sommerfeld", "lines": ["LD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Spechtritz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Spechtritz", "lines": ["HK"], "upperCase": "", "dd2": 105, "dd3": 70, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var St_Egidien : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "St. Egidien", "lines": ["DW", "StE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Stangendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stangendorf", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60 };
    var Starrbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Starrbach", "lines": ["RN"], "upperCase": "", "dd2": 330, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Nossen" };
    var Stauchitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stauchitz", "lines": ["RC"], "upperCase": "", "dd2": 380, "dd3": 260, "c2": 350, "c3": 230, "z2": 630, "z3": 420 };
    var Stein_Hartenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stein-Hartenstein", "lines": ["SZ"], "upperCase": "", "dd2": 890, "dd3": 600, "c2": 420, "c3": 280, "z2": 120, "z3": 80, "via": "Zwickau", "dd2b": 850, "dd3b": 570, "c2b": 380, "c3b": 250, "z2b": 0, "z3b": 0, "viab": "Thalheim" };
    var Steina : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Steina", "lines": ["RC"], "upperCase": "", "dd2": 450, "dd3": 300, "c2": 210, "c3": 140, "z2": 500, "z3": 340 };
    var Steinbach_b_J : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Steinbach b.J.", "lines": ["WJ"], "upperCase": "", "dd2": 680, "dd3": 450, "c2": 350, "c3": 230, "z2": 0, "z3": 0 };
    var Stenn : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stenn", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 50, "z3": 35 };
    var Stetzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stetzsch", "lines": ["DE"], "upperCase": "", "dd2": 50, "dd3": 30, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Steudten : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Steudten", "lines": ["GW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 320, "z3": 210 };
    var Stollberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stollberg", "lines": ["ZC", "StE"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 150, "c3": 100, "z2b": 260, "z3b": 180, "via": "Neukirchen i.E." };
    var Stolpen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Stolpen", "lines": ["ND"], "upperCase": "", "dd2": 220, "dd3": 150, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Pirna Bf." };
    var Streckewalde : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Streckewalde", "lines": ["WJ"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Strehla : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Strehla", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Syrau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Syrau", "lines": ["LH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Tanna : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tanna", "lines": ["SH"], "upperCase": "IRJL", "dd3": 0, "c2": 0, "c3": 0, "z2": 450, "z3": 300 };
    var Tanndorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tanndorf", "lines": ["BC"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 370, "c3": 250, "z2": 0, "z3": 0 };
    var Tannenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tannenberg", "lines": ["SGr"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Taubenheim : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Taubenheim", "lines": ["OW", "TD"], "upperCase": "", "dd2": 430, "dd3": 290, "c2": 910, "c3": 610, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Tautenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tautenhain", "lines": ["LG"], "upperCase": "", "dd2": 730, "dd3": 490, "c2": 260, "c3": 170, "z2": 0, "z3": 0, "via": "Narsdorf" };
    var Techwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Techwitz", "lines": ["ZA"], "upperCase": "IPR", "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Teichwolframsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Teichwolframsdorf", "lines": ["WM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 110, "z3": 75 };
    var Tetschen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tetschen", "lines": ["BD"], "upperCase": "IBÖ", "dd2": 380, "dd3": 250, "c2": 860, "c3": 570, "z2": 0, "z3": 0 };
    var Teufelsmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Teufelsmühle", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thalheim : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Thalheim", "lines": ["CA"], "upperCase": "", "dd2": 650, "dd3": 440, "c2": 170, "c3": 120, "z2": 330, "z3": 220 };
    var Tharandt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tharandt", "lines": ["DW"], "upperCase": "", "dd2": 85, "dd3": 60, "c2": 410, "c3": 270, "z2": 690, "z3": 460 };
    var Thonberg_Prietitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Thonberg-Prietitz", "lines": ["KE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thossfell : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Thossfell", "lines": ["HOe"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Thum : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Thum", "lines": ["HT"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Thurm : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Thurm", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 90, "z3": 60 };
    var Trebanz_Treben : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Trebanz-Treben", "lines": ["LH"], "upperCase": "ISA", "dd3": 0, "c2": 440, "c3": 300, "z2b": 330, "z3b": 220, "viab": "Werdau" };
    var Treuen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Treuen", "lines": ["HOe"], "upperCase": "", "dd2": 1020, "dd3": 680, "c2": 540, "c3": 360, "z2": 260, "z3": 170 };
    var Triebes : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Triebes", "lines": ["WM"], "upperCase": "IRJL", "dd3": 0, "c2": 0, "c3": 0, "z2": 350, "z3": 230 };
    var Tronitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tronitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Tuttendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Tuttendorf", "lines": ["FH"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Töllschütz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Töllschütz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ulberndorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ulberndorf", "lines": ["HK"], "upperCase": "", "dd2": 180, "dd3": 120, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "oder obercarsdorf" };
    var Ulbersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ulbersdorf", "lines": ["BS"], "upperCase": "", "dd2": 300, "dd3": 200, "c2": 780, "c3": 520, "z2": 1070, "z3": 720, "via": "Schandau" };
    var Unter_Neudorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unter-Neudorf", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unter_Schönbach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unter-Schönbach", "lines": ["TD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterehrenberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterehrenberg", "lines": ["KH"], "upperCase": "", "dd2": 320, "dd3": 220, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterfriedebach : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterfriedebach", "lines": ["MS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterherold : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterherold", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterkoskau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterkoskau", "lines": ["SH"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Untermarxgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Untermarxgrün", "lines": ["HOe"], "upperCase": "", "dd2": 1100, "dd3": 740, "c2": 620, "c3": 420, "z2": 330, "z3": 220 };
    var Unterrittersgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterrittersgrün", "lines": ["GR"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Unterwiesenthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterwiesenthal", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Unterzwota : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Unterzwota", "lines": ["ZK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Ursprung : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ursprung", "lines": ["HW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Venusberg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Venusberg", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Vierenstrasse : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Vierenstrasse", "lines": ["CW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Voigtsdorf_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Voigtsdorf i. S.", "lines": ["MS"], "upperCase": "", "dd2": 390, "dd3": 260, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Voigtsgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Voigtsgrün", "lines": ["ZF"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 380, "c3": 260, "z2": 85, "z3": 55 };
    var Voitersreuth : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Voitersreuth", "lines": ["PE"], "upperCase": "IBÖ", "dd2": 1420, "dd3": 950, "c2": 950, "c3": 630, "z2": 650, "z3": 440, "via": "Plauen i.V.", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 610, "z3b": 410, "viab": "Oelsnitz i.V.", "comment": " i.V. annahme NM" };
    var Wagelwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wagelwitz", "lines": ["MN"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wald_Oppelsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wald-Oppelsdorf", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Waldenburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Waldenburg", "lines": ["GW"], "upperCase": "IS", "dd2": 720, "dd3": 480, "c2": 240, "c3": 160, "z2": 150, "z3": 100, "via": "Glauchau" };
    var Waldheim : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Waldheim", "lines": ["RC", "WK", "WR"], "upperCase": "", "dd2": 470, "dd3": 310, "c2": 190, "c3": 130, "z2": 480, "z3": 320 };
    var Waldkirchen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Waldkirchen", "lines": ["AF"], "upperCase": "BZ", "dd2": 490, "dd3": 330, "c2": 160, "c3": 110, "z2": 450, "z3": 300 };
    var Waltersdorf_Haltept : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Waltersdorf Haltept.", "lines": ["WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar welche" };
    var Waltersdorf_Haltest : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Waltersdorf Haltest.", "lines": ["BSg", "WC"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Warnsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Warnsdorf", "lines": ["SE"], "upperCase": "IBÖ", "dd2": 600, "dd3": 400, "c2": 1080, "c3": 720, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Wechselburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wechselburg", "lines": ["GW"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 0, "c3": 0, "z2": 300, "z3": 200, "comment": "unklar via diverse" };
    var Weesenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weesenstein", "lines": ["MG"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "oder koettewitz" };
    var Weida_Altst : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weida Altst.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar welches" };
    var Weida_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weida Bf.", "lines": ["WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weinböhla : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weinböhla", "lines": ["DE", "DEK"], "upperCase": "", "dd2": 140, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "schlecht lesbar" };
    var Weintraube : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weintraube", "lines": ["LD"], "upperCase": "", "dd2": 70, "dd3": 50, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weipert : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weipert", "lines": ["WA"], "upperCase": "IBÖ", "dd2": 780, "dd3": 520, "c2": 450, "c3": 300, "z2": 750, "z3": 500, "via": "Flöha", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 490, "z3b": 330, "viab": "Aue" };
    var Weischlitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weischlitz", "lines": ["PE", "PWz"], "upperCase": "", "dd2": 1130, "dd3": 750, "c2": 640, "c3": 430, "z2": 350, "z3": 240, "via": "Plauen i.V.", "comment": "schlecht lesbar" };
    var Weissbach_b_K : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weissbach b.K.", "lines": ["KS"], "upperCase": "", "dd2": 210, "dd3": 140, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissbach_b_Zsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weissbach b.Zsch.", "lines": ["WE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissenberg_i_S : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weissenberg i.S.", "lines": ["LWg"], "upperCase": "", "dd2": 590, "dd3": 400, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weisses_Ross : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weisses Ross", "lines": ["RRg"], "upperCase": "", "dd2": 70, "dd3": 45, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weissig_b_Gr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weissig b.Gr.", "lines": ["LD"], "upperCase": "", "dd2": 260, "dd3": 170, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weisskirch_b_Kr : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weisskirch b.Kr.", "lines": ["RZ"], "upperCase": "WEISSKIRCHEN", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Weixdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Weixdorf", "lines": ["KS"], "upperCase": "", "dd2": 85, "dd3": 55, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wendischfähre : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wendischfähre", "lines": ["BS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Werdau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Werdau", "lines": ["LH", "DW", "WM"], "upperCase": "", "dd2": 830, "dd3": 500, "c2": 360, "c3": 240, "z2": 60, "z3": 40, "comment": "schlecht lesbar" };
    var Wermsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wermsdorf", "lines": ["MN"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 440, "c3": 290, "z2": 0, "z3": 0 };
    var Westewitz_Hochw : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Westewitz-Hochw.", "lines": ["BC"], "upperCase": "", "dd2": 440, "dd3": 290, "c2": 280, "c3": 190, "z2": 0, "z3": 0 };
    var Wiesa : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wiesa", "lines": ["KE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wiesenbad : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wiesenbad", "lines": ["AF"], "upperCase": "", "dd2": 620, "dd3": 420, "c2": 290, "c3": 200, "z2": 580, "z3": 390 };
    var Wiesenburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wiesenburg", "lines": ["SZ"], "upperCase": "", "dd2": 840, "dd3": 560, "c2": 360, "c3": 240, "z2": 70, "z3": 50, "via": "Zwickau" };
    var Wilischthal : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilischthal", "lines": ["AF", "WE"], "upperCase": "", "dd2": 530, "dd3": 350, "c2": 200, "c3": 130, "z2": 490, "z3": 330 };
    var Wilkau_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilkau Bf.", "lines": ["SZ", "WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "comment": "unklar" };
    var Wilkau_Haltept : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilkau Haltept.", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wilsdruff : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilsdruff", "lines": ["PNo"], "upperCase": "", "dd2": 110, "dd3": 75, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wilthen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilthen", "lines": ["BS", "OW"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Putzkau" };
    var Wilzschhaus = {
        kind: "BHFTAG", "station": "Wilzschhaus", "lines": ["CA", "WCd"], "upperCase": "", "dd2": 950, "dd3": 630, "c2": 470, "c3": 310, "z2": 340, "z3": 230,
        "via": "Aue", "comment": "(fehlend via kirchberg) "
    };
    var Wilzschmühle : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wilzschmühle", "lines": ["WCd"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wintersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wintersdorf", "lines": ["GM"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wittgensdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wittgensdorf", "lines": ["KC", "LW"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 65, "c3": 45, "z2": 360, "z3": 240, "via": "Chemnitz", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 320, "z3b": 220, "viab": "Limbach" };
    var Wittigschenke : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wittigschenke", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Witzschdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Witzschdorf", "lines": ["AF"], "upperCase": "", "dd2": 480, "dd3": 320, "c2": 150, "c3": 100, "z2": 0, "z3": 0 };
    var Wolfsgrund : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wolfsgrund", "lines": ["MS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wolfsgrün : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wolfsgrün", "lines": ["CA"], "upperCase": "", "dd2": 870, "dd3": 580, "c2": 390, "c3": 260, "z2b": 270, "z3b": 180, "via": "Thalheim" };
    var Wolkenburg : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wolkenburg", "lines": ["GW"], "upperCase": "", "dd2": 760, "dd3": 510, "c2": 280, "c3": 190, "z2": 180, "z3": 120, "comment": "via frei erfunden" };
    var Wolkenstein : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wolkenstein", "lines": ["AF", "WJ"], "upperCase": "", "dd2": 590, "dd3": 390, "c2": 260, "c3": 170, "z2": 550, "z3": 370, "via": "Flöha" };
    var Wuitz_Mumsdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wuitz-Mumsdorf", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wulm : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wulm", "lines": ["MO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 60, "z3": 40 };
    var Wurzen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wurzen", "lines": ["LD", "GW"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 650, "c3": 430, "z2": 0, "z3": 0, "via": "Riesa", "dd2b": 0, "dd3b": 0, "c2b": 500, "c3b": 340, "z2b": 600, "z3b": 400, "viab": "Rochlitz", "dd2c": 0, "dd3c": 0, "c2c": 700, "c3c": 480, "z2c": 720, "z3c": 490, "viac": "Leipzig Bayr.Bf." };
    var Wülknitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wülknitz", "lines": ["ZE"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Wünschendorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wünschendorf", "lines": ["PWz", "WM"], "upperCase": "ISW", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 230, "z3": 160 };
    var Wüstenbrand : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wüstenbrand", "lines": ["DW", "HW", "LWd"], "upperCase": "", "dd2": 570, "dd3": 380, "c2": 90, "c3": 60, "z2": 210, "z3": 140 };
    var Wüstendittersdorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Wüstendittersdorf", "lines": ["SSz"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zabeltitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zabeltitz", "lines": ["DE"], "upperCase": "", "dd2": 270, "dd3": 180, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zaschwitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zaschwitz", "lines": ["OD"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zauckerode : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zauckerode", "lines": ["PNo"], "upperCase": "", "dd2": 55, "dd3": 40, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zausswitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zausswitz", "lines": ["OS"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zehista : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zehista", "lines": ["PGc"], "upperCase": "", "dd2": 130, "dd3": 90, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeisigschenke : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zeisigschenke", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeithain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zeithain", "lines": ["ZE"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zeitz", "lines": ["ZA"], "upperCase": "IPR", "dd2": 0, "dd3": 0, "c2": 560, "c3": 370, "z2b": 440, "z3b": 300, "via": "Altenburg", "viab": "Werdau" };
    var Zescha : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zescha", "lines": ["BK"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zeulenroda : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zeulenroda", "lines": ["WM"], "upperCase": "IRÄL", "dd2": 1240, "dd3": 830, "c2": 760, "c3": 510, "z2": 470, "z3": 320, "via": "Mehltheuer", "dd2b": 0, "dd3b": 0, "c2b": 0, "c3b": 0, "z2b": 360, "z3b": 240, "viab": "Seelingstädt" };
    var Ziegenhain : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Ziegenhain", "lines": ["RN"], "upperCase": "", "dd2": 360, "dd3": 240, "c2": 0, "c3": 0, "z2": 0, "z3": 0, "via": "Nossen" };
    var Zittau_Bf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zittau Bf.", "lines": ["ZL", "ZN", "ZO", "RZ"], "upperCase": "", "dd2": 630, "dd3": 420, "c2": 1110, "c3": 740, "z2": 1410, "z3": 940, "via": "Eibau", "dd2b": 700, "dd3b": 470, "c2b": 0, "c3b": 0, "z2b": 0, "z3b": 0, "viab": "Herrnhut" };
    var Zittau_Haltepkt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zittau Haltepkt.", "lines": ["ZM", "ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittau_Schiesshaus : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zittau Schiesshaus", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittau_Vorstadt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zittau Vorstadt", "lines": ["ZO"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zittel : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zittel", "lines": ["ZM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zoblitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zoblitz", "lines": ["GD"], "upperCase": "", "dd2": 540, "dd3": 360, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zschaitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zschaitz", "lines": ["RC"], "upperCase": "", "dd2": 440, "dd3": 300, "c2": 290, "c3": 200, "z2": 0, "z3": 0 };
    var Zschernitzsch : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zschernitzsch", "lines": ["ZA"], "upperCase": "ISA", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 0, "z3": 0 };
    var Zschopau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zschopau", "lines": ["AF"], "upperCase": "", "dd2": 510, "dd3": 340, "c2": 180, "c3": 120, "z2": 470, "z3": 320 };
    var Zweinaundorf : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zweinaundorf", "lines": ["LG"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 450, "c3": 300, "z2": 0, "z3": 0 };
    var Zwenkau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwenkau", "lines": ["GM"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 480, "c3": 320, "z2": 500, "z3": 330 };
    var Zwickau : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwickau", "lines": ["DW", "SZ", "ZF"], "upperCase": "", "dd2": 780, "dd3": 520, "c2": 300, "c3": 200, "z2": 0, "z3": 0, "comment": "schnellzug obere zeile fehlt S, preis passt" };
    var Zwickau_Hpkt : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwickau Hpkt.", "lines": ["DW"], "upperCase": "", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 15, "z3": 10 };
    var Zwota : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwota", "lines": ["CA", "ZK"], "upperCase": "", "dd2": 1100, "dd3": 730, "c2": 620, "c3": 410, "z2": 350, "z3": 240 };
    var Zwönitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwönitz", "lines": ["CA", "ZC", "ZS"], "upperCase": "", "dd2": 710, "dd3": 470, "c2": 230, "c3": 150, "z2": 270, "z3": 180 };
    var Zwötzen : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zwötzen", "lines": ["PWz"], "upperCase": "IRJL", "dd2": 0, "dd3": 0, "c2": 0, "c3": 0, "z2": 270, "z3": 180 };
    var Zöblitz : StationTicketInfoEntryKpxTagged = { kind: "BHFTAG", "station": "Zöblitz", "lines": ["RF"], "upperCase": "", "dd2": 620, "dd3": 410, "c2": 290, "c3": 190, "z2": 570, "z3": 380 };

}

