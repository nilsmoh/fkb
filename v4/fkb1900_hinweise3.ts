//import { pfeilstart } from "./SaxInputTypes";

//import {TKbsAbweichung} from "./SaxParsedTypes";

interface Empty {
    dummy?: never; //weak type to check for exccess properties
}

interface Block2 {
    Standard: Block2Entry  | BlockEntryZeilenFolge |Block2EntryVirtuelleFolgeZelle | Block2EntryTabelle | Block2Zelle  | Empty | Block2EntryZubringerZellenFolge|  Block2EntryAnschlussWeiterZellenFolge ,
    Abweichend?: Block2Entry  | BlockEntryZeilenFolge |Block2EntryVirtuelleFolgeZelle | Block2EntryTabelle | Block2Zelle  | Empty
    ,Alternative?: Block2Entry  //echter zweiter Eintrag in Tabelle, fuer den aber kein platz ist
   // scope?: string
}

interface entry {
    q: string,    //quelle
    c?: string,    //kommentar
    BLOCK: Block2
}
/*
interface page {
    head: string,
    list: Array<entry>
};
*/

interface page {
    head: string,
    list: Array< {
    q: string,    //quelle
    c?: string,    //kommentar
    BLOCK: {
    Standard: Block2EntryZug | Block2EntryScTabellenTeilFortsetzung | BlockEntryZeilenFolge | Block2EntryScGlobal & {checked:true} | Block2EntryAnschlussWeiterZellenFolge
        | Block2EntryZuegeInBelegtenSpalten |Block2EntryVirtuelleFolgeZelle | Block2EntryTeilZug  | Block2EntryTabelle | Block2EntryZubringerZellenFolge | Block2Zelle  | Empty,
    Abweichend?: Block2Entry | BlockEntryZeilenFolge  | Block2EntryTabelle | Block2Zelle  | Empty
    ,Alternative?: Block2Entry  //echter zweiter Eintrag in Tabelle, fuer den aber kein platz ist
   // scope?: string
}}>
};

enum AllgemeineInfo {
    aBedeutetHaltenZumAussteigen,
    eBedeutetHaltenZumEinsteigen,
    sieheLokalZuege,
    DresdnerVerbindungsbahnzuegseSieheUnter1,
    VorortzugeDresdenTharandtSieheUnter2,
    VorortzugesSieheNr5,
    VorortzugePirnaDresdenSieheUnter5,
    sieheLokalZuege6,  //s.Lokalzuege unter 6.,
    DresdenerVorortzuegesieheunter6,
    sa7,
    SieheUnter7,
    SieheUnter3,
    SieheUnter8,
    SieheUnter9,
    SieheUnter58,
    SieheUnter56,
    SieheUnter54,
    SieheUnter94,
    Rundreisekarte_Dresden_Muegeln_Geising_Altenberg_und_weiter_Kipsdorf_Hainsberg_Dresden_II_Kl_3_40M_III_Kl_2_30_M,
    Schlafwagenkarten_Leipzig_Myslowitz_I_Kl_10_M__IIKL_8M__Leipzig_Breslau_IKl_7M__IIKl_5_50M,
    FahrpreiseSeite222,
    DirecteWagenSUnter247,
    FahrKartenNLaubanUndWeiterZumZug121ohnePreiserhoehungUeberKohlfurt,
    RueckfahrkartenUberHerrnhutGeltenAuchUeberWarnsdorfUndBischofswerda,
    RueckfahrkartenZwischenSebnitzUndDresdenAltOderNeustUeberSchandauDuerrsdorfPirnaOderDuerroehrsdorfArnsdorfII460pfIII310pf,
    IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten,
    IVKlAuchSonnUndFeiertags,
    L_Luxuszug__nur_mit_Fahrk__I_Kl__Schnellz__u__geg__besond__Zuschlag_benutzb,
    D__Durchgangszug__bei_welchem_ausser_dem_Fahrpreis_Platzgebuehren_erhoben_werden_und_zwar_fuer_Strecken_bis_150km_1_00M_ueber_150km_2_00M,
    InVoitersreuthZollrevision,
    Rueckfahrk_Leipz_Grimma_ueb_Wurzen_oder_Naunhof,
    Umwegkarten_Wurzen_Borsdorf_Grossbothen_und_umgek_zu_Fahrk_nach_Grossboth_etc_ueb_Nerchau
}

type ScZeilenFolge =
    { kind: "ZeilenFolge", startZeileBhf: StationTicketInfoEntryKpxTagged /*string*/, endZeileBhf:  StationTicketInfoEntryKpxTagged /* string*/ }

type ScZubringerZellenFolge =
    { kind: "ZubringerZellenFolge", startZelle: StationTicketInfoEntryKpxTagged /*string*/, endZelle: StationTicketInfoEntryKpxTagged/*string*/ }

type ScAnschlussWeiterZellenFolge =
    { kind: "AnschlussWeiterZellenFolge", startZelle: StationTicketInfoEntryKpxTagged /*string*/, endZelle:StationTicketInfoEntryKpxTagged /* string*/ }


type ScZugFuerExpliziteNrn =
    { kind: "ZugNr", WichtigeZugNummern: Array<string> }

type ScTeilZug = {
    kind: "TeilZug", 
    TZgueltigAbBhf?:StationTicketInfoEntryKpxTagged, // string,   //scope Teilzug
    TZgueltigBisBhf?: StationTicketInfoEntryKpxTagged //,  //scope Teilzug
}

type ScZug = {
    kind:"Zug"
}

type ScZelle = {
    kind:"Zelle"
}

type ScTabellenTeilFortsetzung = {      //Tabelle hier darueber aufspalten !!!
    kind: "TabellenTeilFortsetzung"
}

type ScZuegeInBelegtenSpalten = { //SonnUndFesttagszuege
    kind:"ZuegeInBelegtenSpalten"
}

type ScGlobal = {kind:"Global"}
type ScTabelle = {kind:"Tabelle"}
type ScSeite = {kind:"Seite"}

type ScVirtuelleFolgeZelle = {kind:"VirtuelleFolgeZelle"}


var TabellenteilFortSetzung: ScTabellenTeilFortsetzung = {
    kind:"TabellenTeilFortsetzung"
} //scope

var ZuegeInBelegtenSpalten:ScZuegeInBelegtenSpalten = {//waagerecht "Sonn und Festtagszuege" in  wa,wa,wa,wa,wa --> diese 5 zuege betroffen
    kind:"ZuegeInBelegtenSpalten"
}

var VirtuelleFolgeZelle:ScVirtuelleFolgeZelle = {kind:"VirtuelleFolgeZelle"}
// schwieriger Unterschied:
var Global: ScGlobal = {kind: "Global"} //Scope
var Tabelle: ScTabelle = {kind:"Tabelle"} //scope

var Zelle:ScZelle = {kind:"Zelle"}; //scope z.b. haelt in Ulbersdorf nur zum Aussteigen
var Zug:ScZug = {kind:"Zug"}; //""; //scope

type FertigeZeit = TZeit24; //  string | number;

type KategorieTyp = "Schnellzug" | "DZug" | "Nord Sued Express";



type Block2EntryScGlobal =  {
    scope: ScGlobal,
    Verwaltung?: VerwaltungT | Array<{ von: StationTicketInfoEntryKpxTagged, bis:StationTicketInfoEntryKpxTagged, Dir: VerwaltungT }>,
    AllgemeineInfo?:AllgemeineInfo,
    Klasse? : EKlassen,
    FahrkartenInfo? : string,
    AlleZuegeHaltenIn?:  StationTicketInfoEntryKpxTagged   , //globale zusatzinfo, wahrscheinlich kein platz fuer Zelle,
    ZugOhneSpalte?: TZugOhneSpalte
 }

  //z.b. siehe auch unter 5, d.h. geschweifte klammer senkrecht in header
 type BlockEntryZeilenFolge = {
    scope: ScZeilenFolge,
    Verwaltung?: VerwaltungT,
    AllgemeineInfo?:AllgemeineInfo,
    Klasse? : EKlassen,
    ZuegeHaltenNurZumEinsteigen?:boolean,
    ZuegeHaltenNurZumAussteigen?:boolean
 }

 type Block2EntryZuegeInBelegtenSpalten = {
    scope:  ScZuegeInBelegtenSpalten,
    Fahrtage?: FAEHRT_T
 }

type Block2EntryTeilZug = {
    scope: ScTeilZug,
    Kategorie? :KategorieTyp,
    GeltungsTag? : string,
    Klasse?: EKlassen,
    Fahrtage?:FAEHRT_T,
    RedundanteZugNr?: Array<String | Number>,
    ZeilenLinkOhneBedeutung? : boolean,
    ZugNr? : string | number

}

type Block2EntryVirtuelleFolgeZelle = {
    scope: ScVirtuelleFolgeZelle, //kein platz fuer extra zeile, koennte als extrazeile nach verweis umgesetzt werden
    AnkunftOrt: StationTicketInfoEntryKpxTagged , //Dresden_Neust_Leip_Bf, 
    Kategorie:KategorieTyp, //"Schnellzug",  
    AnkunftZeit:  FertigeZeit,
    PfeilStart: number
}

type Block2EntryZugNr = {
    scope : ScZugFuerExpliziteNrn,
    Klasse:  EKlassen,//any 
}

type Block2EntryTabelle = {
    scope: ScTabelle,
    Verwaltung?: VerwaltungT | Array<{ von: StationTicketInfoEntryKpxTagged, bis:StationTicketInfoEntryKpxTagged, Dir: VerwaltungT }>,  
    Klasse?: EKlassen,//any,
    Fahrtage?:FAEHRT_T,
    AllgemeineInfo?: AllgemeineInfo
}

type Block2EntryZubringerZellenFolge = {
    scope: ScZubringerZellenFolge,
    Fahrtage?:FAEHRT_T,
    Kategorie?:KategorieTyp,
    Klasse?: EKlassen,//any,
    mehrzeiligerAnschlusszugKommtAus?: StationTicketInfoEntryKpxTagged ,
    AnschlussZubringerAb?:TAnschlussZubringerAb,
    ZugNr?: string | number
}

type Block2EntryAnschlussWeiterZellenFolge = {
    scope: ScAnschlussWeiterZellenFolge,
    Fahrtage?:FAEHRT_T,
    AnschlussWeiterAb?: {Bhf?:StationTicketInfoEntryKpxTagged ,  bis?:StationTicketInfoEntryKpxTagged  },
    Klasse?:  EKlassen,
    AnschlussWeiterNach?:any,
    mehrZeiligerAnschlusszugFaehrtNach?:StationTicketInfoEntryKpxTagged
}


interface TZugOhneSpalte { Fahrtage?: string, Klasse?: string, ZugNr?: string, weg: [{ bhfAb?: StationTicketInfoEntryKpxTagged, zeit?: FertigeZeit, bhfAn?: StationTicketInfoEntryKpxTagged }] } //z.b.fkb61
  
interface TAnschlussZubringerAb {ZugNr?: string, Bhf?: StationTicketInfoEntryKpxTagged, Zeit?: FertigeZeit , Klasse?: string, WeitereFernStartpunkte?: Array<StationTicketInfoEntryKpxTagged>,
        Geltungstag?: string,  mitUmstiegIn?: StationTicketInfoEntryKpxTagged, mitUmstiegInZugNr?: string, ohneUmstieg?: boolean, Ueber?: StationTicketInfoEntryKpxTagged[], Kategorie?: KategorieTyp
    }    // anschluss abfahrt fuer zelle jetzt mit konkretem zeilentyp !!! 


// nur 1 Bedeutung: Tabelle wird hier aufgespalten z.b. vorortzuege
interface Block2EntryScTabellenTeilFortsetzung  {scope: ScTabellenTeilFortsetzung};

type Block2Entry = Block2EntryZug | Block2Zelle | Block2EntryScTabellenTeilFortsetzung | Block2EntryScGlobal | Block2EntryZuegeInBelegtenSpalten 
        |  Block2EntryVirtuelleFolgeZelle | Block2EntryZugNr | Block2EntryTeilZug | Block2EntryTabelle |  Block2EntryZubringerZellenFolge ;

type Block2Zelle = {
    scope: ScZelle,
     //angabe ausserhalb des eigentlichen zuglauf (vor oder nach dem teil der in der tabelle angegeben ist z.b fkb 1 )
    OhneNrNach?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | Array<{ziel:StationTicketInfoEntryKpxTagged, ank: any}>,
    OhneNrAus?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged>,
    // abweichung INNERHALB des eigentlichen zuglaufs der tabelle
    verlasseKbsNach?: StationTicketInfoEntryKpxTagged | { Kategorie?: KategorieTyp, nach: StationTicketInfoEntryKpxTagged[], ueber?: StationTicketInfoEntryKpxTagged, AnkunftsZeit?:  FertigeZeit },
    erreicheKbsAus?: StationTicketInfoEntryKpxTagged | { Kategorie?: KategorieTyp, aus: StationTicketInfoEntryKpxTagged[], ueber?: StationTicketInfoEntryKpxTagged, 
    AbfahrtsZeit?: FertigeZeit },
    Fahrtage?: FAEHRT_T,
    GeltungsTag?: string, //falls scope zelle
    RedundanteZugNr?: Array<String | Number>,
    virtuellerAnschluss?: { AnschlussAusZeit: FertigeZeit, AnschlussAusBhf: StationTicketInfoEntryKpxTagged }, //Zubringer ohne eigene zeile
    AnkunftOrt?:  StationTicketInfoEntryKpxTagged /*String*/,                     // DD Neust  // Schles.Bhf  jetzt in ankunftort 
    AnkunftZeit?: FertigeZeit,
    AbfahrtsOrt?: StationTicketInfoEntryKpxTagged, //string,
    AbfahrtsZeit?: FertigeZeit,
    haeltAuchIn?: StationTicketInfoEntryKpxTagged, //string,
    
   AnschlussZubringerAb?: TAnschlussZubringerAb,
    AnschlussZubringerIn?: { ZugNr?: string, Geltungstag?: string },
//    AnschlussWeiterAb?: {Bhf?:StationTicketInfoEntryKpxTagged ,  bis?:StationTicketInfoEntryKpxTagged  },
    AnschlussWeiterNach?: { Geltungstag?: string, /*SubBhf?: string,*/ Bhf?: StationTicketInfoEntryKpxTagged ,Ueber?: Array</*string*/StationTicketInfoEntryKpxTagged>, Zeit?: FertigeZeit, 
                WeitereFernziele?: Array</*string*/StationTicketInfoEntryKpxTagged>, mitUmstiegIn?: StationTicketInfoEntryKpxTagged,mitUmstiegInZugNr?:number[], 
                mitUmstiegSieheKbs?:number[] 
                ohneUmstieg?: boolean, Kategorie?: string },
    
    
    ZugOhneSpalte?: TZugOhneSpalte,
    Verwaltung?: VerwaltungT | Array<{ von: StationTicketInfoEntryKpxTagged, bis:StationTicketInfoEntryKpxTagged, Dir: VerwaltungT }>,  
    Klasse?: EKlassen,
//    ZuegeHaltenNurZumEinsteigen?: boolean, //JETZT scope Zeilenfolge 
//    ZuegeHaltenNurZumAussteigen?: boolean, //JETZT scope Zeilenfolge
    PfeilStart?: number,           //uebergang/Anschluss von diesem Zug nach .. wird erreicht
    PfeilZiel?: number,            // dieser Zug wird erreicht
    ZugNr?: string | number,
    DirekterWagen?: Array<StationTicketInfoEntryKpxTagged>, // scope Zug, gilt aber ggf auch vorher im zubringer und oder nachher im anschluss
    DirekterwagenKlasse?: string,
    ZeilenLinkOhneBedeutung?: boolean // Marker 2x in tabelle, einmal an zug und einmal zusaetzlich um die zeile zu finden, letzteres kann ignoriert werden
    Schlafwagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged }, // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    Speisewagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged },   // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    Buffetwagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged },   // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    FahrkartenInfo?: string //text zur gueltigkeit von rueckfahrkarten, ohne direkten einfluss auf fahrplan,
    AllgemeineInfo?: AllgemeineInfo,
    andererBhf?: StationTicketInfoEntryKpxTagged,               //fuer scope zelle , Z.B. Anschluss aus gilt fuer anderen Bahnhof als zellenkopf angibt 
    ZugVerlaesstStreckeAberKommtZurueck?: { letzterBhf:  StationTicketInfoEntryKpxTagged, abweichend: Array< StationTicketInfoEntryKpxTagged>, wiederDaBhf:  StationTicketInfoEntryKpxTagged },  //z.B. dresdenhbf -> weinboehla ueber cossebaude
    //AlleZuegeHaltenIn?: StationTicketInfoEntryKpxTagged /* string*/, //globale zusatzinfo, wahrscheinlich kein platz fuer Zelle,
    ZugVermitteltAnschluss?: { ZugNr: string, Ziele: Array< StationTicketInfoEntryKpxTagged> },
    OmnibusUeberfuehrung?: Array< StationTicketInfoEntryKpxTagged>, // subbahnhoefe in LEipzig,
    OmnibusUeberfuehrungZuAnschlusszuegen?: Array<StationTicketInfoEntryKpxTagged>,
    NurArbeiterBefoerderung?: boolean,
    ZugWartetNicht?: { ZugNr: string, GepaeckVonNichtUeberfuehrt: Array<StationTicketInfoEntryKpxTagged> },
    haeltWerktagsFuerIVKlInProesen?: boolean,
    Klasse4AuchSonnUndFesttags?: true,
    Kategorie?: KategorieTyp //z.B. DZug oder Schnellzug, z.B. wenn nur teil des weges hochgestuft,
    mehrZeiligerAnschlusszugFaehrtNach?: StationTicketInfoEntryKpxTagged,
    mehrzeiligerAnschlusszugKommtAus?: StationTicketInfoEntryKpxTagged

}



type Block2EntryZug = {
    scope:  
          ScZug //z.B. passend rechts daneben
// EXTRA  | ScZelle //z.b. abweichende Fahrzeit
// EXTRA  | ScZeilenFolge     //z.b. siehe auch unter 5, d.h. geschweifte klammer senkrecht in HEADER
// EXTRA  | ScZubringerZellenFolge //z.b. zubringer aus anderem abfahrtsort
// EXTRA  | ScAnschlussWeiterZellenFolge //z.b. anschluss verkehrt nach anderem zielort, oder z.b. anschluss verkehrt ueber woanders
// EXTRA  | ScZugFuerExpliziteNrn  //abweichung fuer explizit angegebene Zugnummern
// EXTRA  | ScTeilZug //z.b. geschweifte klammer mit abweichender zugnummer  + klasse
// EXTRA  | ScTabellenTeilFortsetzung // nur 1 Bedeutung: Tabelle wird hier aufgespalten z.b. vorortzuege
// EXTRA  | ScZuegeInBelegtenSpalten // "Sonn und Festtagszuege", d.h. gilt fuer mehrere spalten
// EXTRA  | ScGlobal
// EXTRA  | ScTabelle
// EXTRA  | ScVirtuelleFolgeZelle //kein platz fuer extra zeile, koennte als extrazeile nach verweis umgesetzt werden
        ,
  
  //angabe ausserhalb des eigentlichen zuglauf (vor oder nach dem teil der in der tabelle angegeben ist z.b fkb 1 )
    OhneNrNach?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | Array<{ziel:StationTicketInfoEntryKpxTagged, ank: any}>,
    OhneNrAus?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged>,
    // abweichung INNERHALB des eigentlichen zuglaufs der tabelle
    verlasseKbsNach?: StationTicketInfoEntryKpxTagged | { Kategorie?: KategorieTyp, nach: StationTicketInfoEntryKpxTagged[], ueber?: StationTicketInfoEntryKpxTagged, AnkunftsZeit?:  FertigeZeit },
    erreicheKbsAus?: StationTicketInfoEntryKpxTagged | { Kategorie?: KategorieTyp, aus: StationTicketInfoEntryKpxTagged[], ueber?: StationTicketInfoEntryKpxTagged, 
    AbfahrtsZeit?: FertigeZeit },
    Fahrtage?: FAEHRT_T,
    GeltungsTag?: string, //falls scope zelle
    RedundanteZugNr?: Array<String | Number>,
    virtuellerAnschluss?: { AnschlussAusZeit: FertigeZeit, AnschlussAusBhf: StationTicketInfoEntryKpxTagged }, //Zubringer ohne eigene zeile
    AnkunftOrt?:  StationTicketInfoEntryKpxTagged /*String*/,                     // DD Neust  // Schles.Bhf  jetzt in ankunftort 
    AnkunftZeit?: FertigeZeit,
    AbfahrtsOrt?: StationTicketInfoEntryKpxTagged, //string,
    AbfahrtsZeit?: FertigeZeit,
    haeltAuchIn?: StationTicketInfoEntryKpxTagged, //string,
    
   AnschlussZubringerAb?: TAnschlussZubringerAb,
    AnschlussZubringerIn?: { ZugNr?: string, Geltungstag?: string },
//    AnschlussWeiterAb?: {Bhf?:StationTicketInfoEntryKpxTagged ,  bis?:StationTicketInfoEntryKpxTagged  },
    AnschlussWeiterNach?: { Geltungstag?: string, /*SubBhf?: string,*/ Bhf?: StationTicketInfoEntryKpxTagged ,Ueber?: Array</*string*/StationTicketInfoEntryKpxTagged>, Zeit?: FertigeZeit, 
                WeitereFernziele?: Array</*string*/StationTicketInfoEntryKpxTagged>, mitUmstiegIn?: StationTicketInfoEntryKpxTagged,mitUmstiegInZugNr?:number[], 
                mitUmstiegSieheKbs?:number[] 
                ohneUmstieg?: boolean, Kategorie?: string },
    
    
    ZugOhneSpalte?: TZugOhneSpalte,
    Verwaltung?: VerwaltungT | Array<{ von: StationTicketInfoEntryKpxTagged, bis:StationTicketInfoEntryKpxTagged, Dir: VerwaltungT }>,  
    Klasse?: EKlassen,
//    ZuegeHaltenNurZumEinsteigen?: boolean, //JETZT scope Zeilenfolge 
//    ZuegeHaltenNurZumAussteigen?: boolean, //JETZT scope Zeilenfolge
    PfeilStart?: number,           //uebergang/Anschluss von diesem Zug nach .. wird erreicht
    PfeilZiel?: number,            // dieser Zug wird erreicht
    ZugNr?: string | number,
    DirekterWagen?: Array<StationTicketInfoEntryKpxTagged>, // scope Zug, gilt aber ggf auch vorher im zubringer und oder nachher im anschluss
    DirekterwagenKlasse?: string,
    ZeilenLinkOhneBedeutung?: boolean // Marker 2x in tabelle, einmal an zug und einmal zusaetzlich um die zeile zu finden, letzteres kann ignoriert werden
    Schlafwagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged }, // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    Speisewagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged },   // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    Buffetwagen?: StationTicketInfoEntryKpxTagged | Array<StationTicketInfoEntryKpxTagged> | { von: StationTicketInfoEntryKpxTagged },   // angabe senkrecht in spalte, ueber konkreten Zuglauf hinaus
    FahrkartenInfo?: string //text zur gueltigkeit von rueckfahrkarten, ohne direkten einfluss auf fahrplan,
    AllgemeineInfo?: AllgemeineInfo,
    andererBhf?: StationTicketInfoEntryKpxTagged,               //fuer scope zelle , Z.B. Anschluss aus gilt fuer anderen Bahnhof als zellenkopf angibt 
    ZugVerlaesstStreckeAberKommtZurueck?: { letzterBhf:  StationTicketInfoEntryKpxTagged, abweichend: Array< StationTicketInfoEntryKpxTagged>, wiederDaBhf:  StationTicketInfoEntryKpxTagged },  //z.B. dresdenhbf -> weinboehla ueber cossebaude
    //AlleZuegeHaltenIn?: StationTicketInfoEntryKpxTagged /* string*/, //globale zusatzinfo, wahrscheinlich kein platz fuer Zelle,
    ZugVermitteltAnschluss?: { ZugNr: string, Ziele: Array< StationTicketInfoEntryKpxTagged> },
    OmnibusUeberfuehrung?: Array< StationTicketInfoEntryKpxTagged>, // subbahnhoefe in LEipzig,
    OmnibusUeberfuehrungZuAnschlusszuegen?: Array<StationTicketInfoEntryKpxTagged>,
    NurArbeiterBefoerderung?: boolean,
    ZugWartetNicht?: { ZugNr: string, GepaeckVonNichtUeberfuehrt: Array<StationTicketInfoEntryKpxTagged> },
    haeltWerktagsFuerIVKlInProesen?: boolean,
    Klasse4AuchSonnUndFesttags?: true,
    Kategorie?: KategorieTyp //z.B. DZug oder Schnellzug, z.B. wenn nur teil des weges hochgestuft,
    mehrZeiligerAnschlusszugFaehrtNach?: StationTicketInfoEntryKpxTagged,
    mehrzeiligerAnschlusszugKommtAus?: StationTicketInfoEntryKpxTagged
}

   enum ETimeValid {
        Nein = 1,        //
        Vorgabe24 = 2,  // 24 irgendwie geparst aus json
        Berechnet24 = 3  // 24 berechnet
    }

    // neuer Zeittyp, der roh und 24 klar trennt
    const ZEIT_ROH: "ZEIT_ROH" = "ZEIT_ROH";
    const ZEIT_24: "ZEIT_24" = "ZEIT_24";

  enum GesternHeuteMorgen {
        Unbekannt,
        Gestern,
        Heute,
        Morgen
    }

var makeZ = function(zeit12:number, ghm:GesternHeuteMorgen, nachmittag:boolean, validity? : ETimeValid ): TZeit24 {
    let tStunde12 = Math.floor( zeit12/100);
    let tMinute24 = zeit12 - (Math.floor( zeit12/100) * 100);


    if (!nachmittag){
        if (tStunde12 > 11){
            tStunde12 = tStunde12 - 12;  // fuer MV1203 was aber mitten in der nacht liegen soll
        }
    }

    let tResult = {
        kind: ZEIT_24,
        Stunde24: (nachmittag ? 12 : 0 ) + tStunde12,
        Minute24: tMinute24,
        WelcherTag: ghm,
        Valid: (validity != undefined) ? validity : ETimeValid.Vorgabe24,
        src: zeit12

    }
    return tResult;
}

var ZGN = function(n: number) { return makeZ(n, GesternHeuteMorgen.Gestern, true );  };

var ZHV = function(n: number) { return makeZ(n, GesternHeuteMorgen.Heute, false );  };
var ZHN = function(n: number) { return makeZ(n, GesternHeuteMorgen.Heute, true );  };
var ZMV = function(n: number) { return makeZ(n, GesternHeuteMorgen.Morgen, false );  };


var HN1105 = ZHN(1105);

    // time functions
var MV = function(n:number) : TZeiteintrag{

    let tStunde12 = Math.floor( n/100);

    var tResult :TZeiteintrag = {
        kind:  BLOCK_T.ZEITEINTRAG,
        Referenzkey: null,
        Schnellzug: false,
        Zeit:  { kind:  ZEIT_24,
                Stunde24: tStunde12, 
                Minute24: n - (Math.floor( n/100) * 100),
                WelcherTag: GesternHeuteMorgen.Morgen,
                Valid: ETimeValid.Vorgabe24,
                src: n},
        BerechneterZugLauf:  { kind:  ZUGLAUF_UNBEKANNT}
    };

    return tResult;
}

var HN305 = ZHN(305);
var HN946 = ZHN(946);
var MV1226 = ZMV(1226);
var HV657 = ZHV(657);
var HN830 = ZHN(830);
//var ASMV157 = ""; // globales Symbol a vor Zeit, kein extra Block   halt nur zum aussteigen (hier schnellzug)
//var SHN221 = "";   //Schnellzug heute nachmittag um 14:21
var MV1203 = ZMV(3); 




var check = function<T>(x:T): T & {checked:true}{
    (x as any)["checked"] = true
    return x as  T & {checked:true} ;
}


var id = function<T>(x:T): T {
    //(x as any)["checked"] = true
    return x ;
}




//TODO Dresden Hbf , ab, alt, 1250 ... [Alternative: Haupthalle ]
//     Dresden Hbf , ab, 530,  alt ... [Alternative: Nordhalle  ] 

var x24: Array<page> = [
    {

        head: "24.1 (FKB1 Verbindungsbahn)",
        list:
        [
        /*    
                    Alternativer bahnhof jetzt mit extrazeile umgesetzt
        {
            q: "a. Dresden Hptbf. Nordh.     1207",
            c: "todo alternativer bahnhof",
            BLOCK: { Standard: { scope: "??", Fehler: "alternativer bahnhof not implemented" }, Abweichend: {} }
        },
        {
            q: "a. Dresden Hptbf. Mittelh.   NICHT",
            c: "//alternativer bahnhof der nicht befahren und nicht angehalten wird",
            BLOCK: { Standard: { scope: "??", Fehler: "alternativer bahnhof not implemented" }, Abweichend: {} }
        },
        */
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
            BLOCK: { Standard: id<Block2EntryZug>( { scope: Zug, OhneNrNach: Coswig }), Abweichend: { scope: Zug, Fahrtage: SonnUndFesttags, OhneNrNach: Meissen_Cölln }  }
        },
        {
            q: "Fortsetzung",
            c: "Tabellenteil untereinander statt logisch nebeneinander",
            BLOCK: { Standard:  check<Block2EntryScTabellenTeilFortsetzung>( { scope: TabellenteilFortSetzung}), Abweichend: {} }
        }
        ]
    }
];
//25.1
var x25: Array<page> = [{
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
/*
--------------------------------------------------------------------------------------------------------------------------------------------------
*/
var x26: Array<page> = [
    {
        head: "26.2, 26.3",
        list: [{
            q: "*Verkehrt Werktags vor Sonn- und Festtagen bis Edle Krone (Ank. 504) und Klingenberg (Ank. 523)",
            c: "  //  (ganzer zug verkehrt weiter)",
            BLOCK: {
                Standard: {}, Abweichend: { scope: Zug, Fahrtage: SonnUndFesttags, OhneNrNach: [{ ziel: Edle_Krone, ank: 504 }, { ziel: Klingenberg_Colmn, ank: 523 }] }
            }
        }
        // ,
        // {
        //     q: "+Sonn und festtags",
        //     BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags }, Abweichend: {} }
        // },
        // // 26.3
        // {
        //     q: "*Nur Sonnabends.",
        //     c: "// (ganzer zug verkehrt)  ",
        //     BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends }, Abweichend: {} }
        // },
        // {
        //     q: "+Nur an Werktagen,ausser Sonnabends.",
        //     c: " //(ganzer zug verkehrt) /",
        //     BLOCK: { Standard: { scope: Zug, Fahrtage: WerktageAusserSonnabends }, Abweichend: {} },
        // },
        // {
        //     q: "n. Königsbrück",
        //     c: "verlaesst strecke",
        //     BLOCK: { Standard: { scope: Zug, OhneNrNach: "Koenigsbrueck" }, Abweichend: {} }
        // },
        // {
        //     q: "nach Schwepnitz",
        //     BLOCK: { Standard: { scope: Zug, OhneNrNach: "Schwepnitz" }, Abweichend: {} }
        // }

        ]
    }];


//-------------------------------------------------------------------------------------------------------------------------------------------------------

var x27: Array<page> = [
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


        //27.3

        {
            q: "von Königsbrück",
            BLOCK: { Standard: { scope: Zug, OhneNrAus: Königsbrück_B } }
        },
        {
            q: "nur werktags und zwar montags oder, wenn der fesstag dienstags von königsbrück, sonst aus moritzdorf",
            c: " (kommt aus anderer kbs)",
            BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags, OhneNrAus: Moritzdorf }, Abweichend: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag, 
                OhneNrAus:  Königsbrück_B } }
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
    }];
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

var x28: Array<page> = [
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
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: HN1105 } } }  //HeuteNachmittag
        },
        {
            q: "Nur sonn und festtags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
        }
        ]
    }];

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

var x29: Array<page> = [
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
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: HN305 } }, Abweichend: {} }  //in standard da sonst leer
            }, {
                q: "* nachts nach dem ersten mittwoch jeden monats (anschluss einzelzeit)",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: nachtsNachDemErstenMittwochJedenMonats } }
            }, {
                q: "! sonn und festtags in weesenstein", // (anschlusseintrag mit spezialziel, einschraenkung, obwohl zeit drinsteht)  
                //anschlusseintrag in glashuette steht so drin (anschluss, ankunftszeit weil zu gkuerzer faehrt)
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftOrt: Weesenstein, AnkunftZeit: HN946 }, Abweichend: {} } //vgl fkb51
            }, {
                q: "!sonn und festags bis geising-a ank 6:57",
                c: " (anschluss zeile abweichend an speziellen tagen)",
                BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftOrt: Geising_Altenb, AnkunftZeit: HV657 } } //anschlussweiternachIn-zeile
            },
            {
                q: " }nach s u fst",
                c: "//anschlusszeit, sonst leer",
                BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftZeit: MV1226 } } //morgenfrueh!!!
            }, {
                q: "nur werktags",
                c: " zug verkehrt",
                BLOCK: { Standard: { Fahrtage: SonnUndFesttags, scope: Zug }, Abweichend: {} }
            }, {
                q: "anschluss aus von glashuette 600" +
                "anschluss aus sonn und festtags von geising a abf 500",
                BLOCK: { Standard: { scope: Zelle, AbfahrtsOrt: Glashütte , AbfahrtsZeit: ZHN(600) }, 
                        Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AbfahrtsOrt: Geising_Altenb, AbfahrtsZeit: ZHN(500) } }
            }
        ]
    }];

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//const x:Block2 =   {Standard: { scope: Global, Klasse: Kl1bis3 } };

/*
var forceGlob = function(x: Block2EntryScGlobal): Block2EntryScGlobal & {checked:true}{
    (x as Block2EntryScGlobal & {checked:true})["checked"] = true;
    return x as Block2EntryScGlobal & {checked:true};
}
*/

const x30: Array<page> = [{
    head: "30.6 Dresden -> Meissen",
    list: [{
        q: "*Nur I.-III. Kl.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>({ scope: {kind:"Global"}}) }
    },
    {
        q: "nach Berlin",
        BLOCK: { Standard:  check<Block2EntryZug>(  { scope: Zug, OhneNrNach: Berlin } ) }
    }, {
        q: "nach Leipzig",
        BLOCK: { Standard:  check<Block2EntryZug>(  { scope: Zug, OhneNrNach: Leipzig } ) }
    },
    {
        q: "nach Riesa",
        BLOCK: { Standard:  check<Block2EntryZug>(  { scope: Zug, OhneNrNach: Riesa } ) }
    },
    {
        q: "!Ank Dresd-N Lpz. Bhf 221",
        BLOCK: { Standard:  check<Block2EntryVirtuelleFolgeZelle>(  { scope: VirtuelleFolgeZelle, AnkunftOrt: Dresden_Neust_Leip_Bf, Kategorie:"Schnellzug",  AnkunftZeit: ZHN(221) /* SHN221*/, PfeilStart: 1 } ) }
    },
    {
       q: "Pfeilziel",
        BLOCK: { Standard:  check<Block2Zelle>( { scope: Zelle, PfeilZiel: 1 } ) }
    },
    {
        q: "+zug 1556 verkehrt von coswig bis meissen-c nur sonn und festtags",
        c: "//  letzter teil des zuglaufes nur am we",
        BLOCK: {
            Standard: id<Block2EntryTeilZug>(  {
                scope: { kind: "TeilZug" , TZgueltigAbBhf: Coswig, TZgueltigBisBhf: Meissen_Cölln },
                GeltungsTag: SonnUndFesttags, RedundanteZugNr: [1556]
            } )
        }   //sonst: leer
    },
    {
        q: "++Züge 1506a, 1558, 1562 und 1582 verkehren nur Sonn- und festags",
        BLOCK: { Standard:  check<Block2Entry>( { scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: ["1506a", 1558, 1562, 1582] } ) }
    }]
}];

var x31: Array<page> = [{
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

var x32: Array<page> = [{
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
        BLOCK: { Standard: { scope: Zug, OhneNrNach: [ Grimma] } }
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
        }]
}];

var x33: Array<page> = [{
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

    }
        // rueckrichtung
        , {
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


//34

var x34: Array<page> = [{
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


var x35: Array<page> = [{
    head: "35",
    list: [
        {
            q: "nur werktags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
        }, {
            q: "Sonn und festtagszuege",
            BLOCK: { Standard: id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags } ) }
        }, {
            q: "nur werktags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
        }, {
            q: "Nur Werktags mit ausnahme der sonnabende und des 23.mai",
            BLOCK: { Standard: { scope: Zug, Fahrtage: WerktagsMitAusnahmeDerSonnabendeUndDes23Mai } }
        }, {
            q: "nur sonn und festtags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            //ab floeha fahrkarte

        }]
}];


var x36: Array<page> = [{
    head: "36.12hin dd - berlin und 13",
    list: [{
        q: "+ab jÜTERBOG i-iv klASSE",
        c: "//gueltigabbhf vorne in zeile nur ohne bedeutung angehaengt",
        BLOCK: { Standard: {}, Abweichend: id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Jueterbog}, Klasse: Kl1bis4, ZeilenLinkOhneBedeutung: true } ) }
    },
    {
        q: "!nur vom 15.6. bis 15.9. ",
        c: "anschluesse gelten nur an bestimmten tagen, sonst leer ",
        BLOCK: { Standard: { scope: Zelle, GeltungsTag: Vom15JuniBis15September} }
    },

    //TODO ?!
    //Coeln am Rhein ueber braunschweig hanover //zeileneintrag, kein block




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
        BLOCK: { Standard: check<Block2EntryScGlobal>({ scope: Global, FahrkartenInfo: "todo" } ) }
    }, {
        q: 'Alle Zuege I bis IV Klasse',
        BLOCK: { Standard: check<Block2EntryScGlobal>({ scope: Global, Klasse: Kl1bis4 } ) }

    }

    ]
}];
//a normal halt nur zum aussteigen



var x37: Array<page> = [{
    head: "37",
    list: [{
        q: "+ v.25./VI.b.31./VIII",
        BLOCK: { Standard: { scope: Zelle, GeltungsTag: vom25JuniBis31August /* Vom25VIbis31VIII*/ } }
    }, {
        // ENTFERNT, wird per [919,S1248] in Grundtabelle implementiert
        //q:S1248
        //c: alternativer anschlusseintrag gilt immer
        //standard:{}, Abweichend:{}, Zusatz:{anschlusszeit: SHN1248}

        //q: S444
        //c: alternativer anschlusseintrag gilt immer
        //standard:{}, Abweichend:{}, Zusatz:{anschlusszeit: SHN444}

        q: "E Dir Berlin, von Gr Lichterfelde bis röderau e.dir. halle",
        c: "Rest saechs Staatsb folgt aus Gegenrichtung auf Seite36.12",
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Verwaltung: [{ von: BerlinAHB, bis: GrossLichterfeldeOst, Dir: "KEDBerlin" }, { von: GrossLichterfeldeOst, bis: Röderau, Dir: "KEDHalle" }] } ) }
    }, {
        q: "Schlafwagen Berlin - Wien",
        BLOCK: { Standard: { scope: Zug, Schlafwagen: [Berlin, Wien] } }
    }, {
        q: "a bedeutet halten zum aussteigen",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.aBedeutetHaltenZumAussteigen } ) }
    }, {
        q: "e bedeutet halten zum einsteigen", //globaldefault
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.eBedeutetHaltenZumEinsteigen } ) }
    }, {
        q: "Alle Zuege I-IV Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl1bis4 } ) }
    }
    ]
}];


var x38: Array<page> = [{
    head: "38",
    list: [{
        q: "s.a. Lokalzuege",
        c: "",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Zossen, endZeileBhf: BerlinAHB }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege } }
    }, {
        q: "N.W.Bf.",
        c: " eintrag selber mit marker versehen",
        BLOCK: { Standard: { scope: Zelle, andererBhf: Wien_NWB /*Wien NW Bhf.*/ } }
    }, {
        q: "!ab Elsterwerda E Dir halle, ab zossen eb dir berlin",
        c: "",
        BLOCK: { Standard: /*forceGlob*/ check<Block2EntryScGlobal>({ scope: Global, Verwaltung: [{ von: Elsterwerda, bis: Zossen, Dir: "KEDHalle" }, { von: Zossen, bis: BerlinAHB, Dir: "KEDBerlin" }] }) }
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
        BLOCK: { Standard: check<Block2EntryScGlobal>({ scope: Global, Verwaltung: "DahmeUckroerEisenbahn" } ) }
    }, {
        q: "Saemmtliche Züge halten auch in Dabendorf",
        c: " fehlt da einfach aus platzgruenden eine zeile ????",
        BLOCK: { Standard: check<Block2EntryScGlobal>({ scope: Global, AlleZuegeHaltenIn: Dabendorf }) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard: check<Block2EntryScGlobal>({ scope: Global, Klasse: Kl2bis3 }) }
    }, {
        q: "Sonn und Festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }


    ]
}];

var x39: Array<page> = [{
    head: "39",
    list: [{
        q: "s.a.Localzuege",
        c: "sic hier Local statt Lokal !!!",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: BerlinAHB, endZeileBhf: Zossen }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege } }
    }, {
        q: "*ab Zossen KED Halle",
        c: "",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: [{ von: Zossen, bis: Elsterwerda, Dir: "KEDHalle" }] } ) }
    }, {
        q: "N.W.Bf.",
        c: " eintrag selber mit marker versehen",
        BLOCK: { Standard: { scope: Zelle, andererBhf: Wien_NWB /* "Wien NW Bhf." */ } }
    }, {
        q: "Über cossebaude  dresden friedrichstadt",
        c: "Zug verlaesst strecke, kommt aber wieder zurueck!, d.h. | bedeutet hier nicht durchfahrt sondern durchfahrt woanders !!!",
        BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Weinböhla, abweichend: [Cossebaude, Dresden_Fr ], wiederDaBhf: Dresden_Hptbf } } }
    }, {
        q: "+ über oberlausitzer bf in elsterwerda, ",
        BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Dobrilugk_Kirchhain, abweichend: [Elsterwerda_OberlausitzeBhf], wiederDaBhf: Grossenhain } } }
    }, {
        q: "+Anschluss von magdeburg abf 705",
        c:" normalerweise wuerde ueber zugnr 62 noch eine aubringerzeile aus magdeburg stehen",
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
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AlleZuegeHaltenIn: Dabendorf } ) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 }) }
    }, {
        q: "Sonn und Festtags",
        BLOCK: { Standard:   { scope: Zug, Fahrtage: SonnUndFesttags } }
    }
    ]
}];

var x40: Array<page> = [{
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

var x41: Array<page> = [{
    head: "41",
    list: [{
        q: "Saechs Staatsb",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "nur sonnabends im juni juli und august",
        c: "rechts senkrecht neben zuglauf",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnabendsInJuniJuliUndAugust } }
    }, {
        q: "sonn und festtagszuege",
        c: " : //interessant mehrere spalten",
        BLOCK: { Standard:  id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }  ) }
    }, {
        q: "Rundreisekarte Dresden Muegeln Geising Altenberg und weiter Kipsdorf Hainsberg Dresden II Kl 3,40M III Kl 2,30 M",
        c: "rundreisekarte info ?",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.Rundreisekarte_Dresden_Muegeln_Geising_Altenberg_und_weiter_Kipsdorf_Hainsberg_Dresden_II_Kl_3_40M_III_Kl_2_30_M } ) }
    }
    ]
}];

var x42: Array<page> = [{
    head: "42",
    list: [{
        q: "Saechs Staatseisenbahn",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
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

var x43: Array<page> = [{
    head: "43",
    list: [{
        q: "{nur freitags",
        c: " //anschluss",
        BLOCK: { Standard: { scope: Zelle, GeltungsTag: Freitags } }
    }, {
        q: "Localzuege Meissen-Cölln -- Dresden siehe unter 6.",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Meissen_Cölln, endZeileBhf: Dresden_Hptbf  }, AllgemeineInfo: AllgemeineInfo.sieheLokalZuege6 } }
    }, {
        q: "Alle Züge II u III Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }, {
        q: "Sonn und festtagszuege", // mehrere spalten waagerecht
        c: " : //interessant mehrere spalten",
        BLOCK: { Standard:  id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Nur Sonnabends im juni juli und august",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnabendsInJuniJuliUndAugust } }
    }
    ]
}];

var x44: Array<page> = [{
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

var x45: Array<page> = [{
    head: "45",
    list: [
        {
            q: "Saechs. Staatsb.",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        },
        {
            q: "Nur in der nacht nach sonn und festtagen",
            BLOCK: { Standard: { scope: Zelle, GeltungsTag: InDerAufEinenSonnOderFesttagFolgendenNacht } }
        }
    ]
}];

var x46: Array<page> = [{
    head: "46.23 //dresden-bodenbach  WIP",
    list: [{
        q: "Fahrpr auf seite 222 //global default",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.FahrpreiseSeite222 } ) }
    }, {
        q: "+ Vorortzuge siehe nr 5",
        c: " vorne mit geschweifter klammer und marker, text dann ganz woanders!  ",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden_Hptbf , endZeileBhf: Pirna_Bf }, AllgemeineInfo: AllgemeineInfo.VorortzugesSieheNr5 } }
    }, {
        q: "* dresdner verbindungsbahnzuege siehe unter 1",
        c: " steht mitten drin ohne geschweifte klammer und box passt auch nicht richtig !",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DresdnerVerbindungsbahnzuegseSieheUnter1 } ) }
    }, {
        q: "!Schles. Bf.", //zeitzelle zeile dresden neustadt
        BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Dresden_Neust_Schl_Bf /*SubBhf: "Schles.Bf"*/ } } }
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

var x47: Array<page> = [{
    head: "47",
    list: [{
        q: "Directe Wagen s.unter 247.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "Schlafwagen von wien",
        BLOCK: { Standard: { scope: Zug, Schlafwagen: { von: Wien } } }
    }, {
        q: "Vorortzuege Pirna dresden s unter 5",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugesSieheNr5 } ) }
    }, {
        q: "nur sonn und festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "+I-IIIKl",
        BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Klasse: Kl1bis3 } } }
    }, {
        q: "*schles bhf",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf /* SubBhf: "SchlesBf"*/ } } }
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
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf /* SubBhf: "Schles.Bf."*/ } } }
    }, {
        q: "bis leisnig",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Leisnig } } }
    }, {
        q: "bis nossen",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Nossen } } }
    }
    ]
}];

var x48: Array<page> = [{
    head: "48",
    list: [{
        //auch über röder giltig  fuer FK gehoert in zeilenzusatzinfo
        q: "*von 15juni bis15sept:335",
        BLOCK: { Standard: {}, Abweichend: id<Block2Zelle>( { scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Kategorie:"Schnellzug", Zeit: ZHN(335) } } ) }
    }, {
        q: "Schlafwagen Myslowitz Leipzig",
        BLOCK: { Standard: id<Block2EntryZug>( { scope: Zug, Schlafwagen: [Myslowitz, Leipzig] } ) }
    }, {
        q: "Buffetwagen Myslowitz Leipzig",
        BLOCK: { Standard: id<Block2EntryZug>( { scope: Zug, Buffetwagen: [Myslowitz, Leipzig] } ) }
    }, {
        q: "Dresdner Vorortzuege siehe unter 6",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>( { scope: { kind: "ZeilenFolge", startZeileBhf: Dresd_Wettinerstr, endZeileBhf: Priestewitz }, AllgemeineInfo: AllgemeineInfo.DresdenerVorortzuegesieheunter6 } ) }
    }
    ]
}];

var x49: Array<page> = [{
    head: "49",
    list: [{
        q: "s.u.7",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Wurzen, endZeileBhf: Leipzig }, AllgemeineInfo: AllgemeineInfo.SieheUnter7 } }
    }, {
        q: "* ueber Halle Bebra",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Ueber: [Halle, Bebra] } } }
    }, {
        q: "nach stuttgart-mailand",  //verlaesst kbs ;-)
        BLOCK: { Standard: { scope: Zug, AnschlussWeiterNach: { WeitereFernziele: [Stuttgart, Mailand] } } }
    }, {
        q: "+Bei den mit + bezeichneten zuegen findet omnibusueberfuehrung v dresdner nach den thuer Bahnhofe statt",
        BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Dr_Bf  /* "DresdnerBhf"*/, Leipzig_Th_Bf /*"ThueringerBhf"*/] } }
    }, {
        q: "bis Erf. 229",
        BLOCK: { Standard: id<Block2EntryAnschlussWeiterZellenFolge> ( { scope:  { kind: "AnschlussWeiterZellenFolge", startZelle: Leipzig, endZelle: Frankfurt_M }, AnschlussWeiterNach: { Bhf: Erfurt, Zeit: ZMV(229) /*"MV229"*/ } } ) }
    },
    // KBS25 Radebeul
    {
        q: "Alle Zuege II u III Kl",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }, {
        q: "III",
        c: " fuer zug 6523",
        BLOCK: { Standard: { scope: Zug, Klasse: Kl3 } }
    }, {
        q: "verkehrt nur sonnabends und dient nur der arbeiterbefoerderung   ", //rechtsdanebensenkrecht 
        BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends, NurArbeiterBefoerderung: true } }

    }, {
        q: "Sonn und Festtagszuege",
        BLOCK: { Standard:  id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags }  ) }
    }

    ]
}];

var x50: Array<page> = [{
    head: "50f",
    list: [{
        q: "+ vom ersten juni bis 15 september",
        BLOCK: { Standard: { scope: Zelle, GeltungsTag: Vom1JuniBis15September } }
    }, {
        q: "* bei den mit * bezeichneten zuegen findet omnibusueberfuehrung vom thueringer nach dem dresdener bahnhof statt.",
        BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Th_Bf , Leipzig_Dr_Bf] } }
    }, {
        q: "Dresdener Vorortzege s unter 6", //globaldefault
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DresdenerVorortzuegesieheunter6 } ) }
    }, {
        q: "! Zug 3 wartet nicht. Durchgangs-Gepaeck vom Zuge von Magdeburg-halle wird nicht ueberfuehrt.",
        BLOCK: { Standard: { scope: Zug, ZugWartetNicht: { ZugNr: "3", GepaeckVonNichtUeberfuehrt: [ Magdeburg, Halle] } } }
    }, {
        q: "(Anschluss) von Erf (3:34)", //anschluss aus mit anderem ort
        BLOCK: { Standard: { scope: { kind: "ZubringerZellenFolge", startZelle: Frankfurt_M, endZelle: Leipzig_Th_Bf  }, 
            AnschlussZubringerAb: { Bhf: Erfurt, Zeit: ZHV(334) /*"HV334"*/ } } }
    }, {
        q: "von Mailand Stuttgart",
        BLOCK: { Standard: { scope: { kind: "ZubringerZellenFolge", startZelle: Frankfurt_M, endZelle: Leipzig_Th_Bf  }, 
            AnschlussZubringerAb: { WeitereFernStartpunkte: [Mailand, Stuttgart] } } }
    }, {
        q: "Buffetwagen Leipzig-Myslowitz", //in zuglauf mehrere keinhalt eintraege untereinander
        BLOCK: { Standard: { scope: Zug, Buffetwagen: [Leipzig, Myslowitz] } }
    }, {
        q: "s.a. unter 7",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Dr_Bf, endZeileBhf: Wurzen }, AllgemeineInfo: AllgemeineInfo.SieheUnter7 } }
    }
    ]
}];

var x51: Array<page> = [{
    head: "51",
    list: [{
        q: "Schlafwagen Leipzig Myslowitz",
        BLOCK: { Standard: { scope: Zug, Schlafwagen: [Leipzig, Myslowitz] } }
    }, {
        q: "Schlafwagenkarten Leipzig Myslowitz I Kl 10 M, IIKL 8 M, Leipzig Breslau IKl 7M, II Kl 5_50M",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.Schlafwagenkarten_Leipzig_Myslowitz_I_Kl_10_M__IIKL_8M__Leipzig_Breslau_IKl_7M__IIKl_5_50M } ) }
    }, {
        q: "b Casl ",
        c: "Caslau a.d. Strecke Caslau Nimburg Tetschen heute Caslav  ???",
        BLOCK: { Standard: id<Block2EntryAnschlussWeiterZellenFolge> (  { scope: { kind: "AnschlussWeiterZellenFolge", startZelle: Tetschen, endZelle: Wien_NWB },  AnschlussWeiterNach: { Bhf: Časlau } } ) }
    },
    // Radeburg kbs25
    {
        q: "Alle Zuege II. u. III. Kl.", //globaldefault
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }, {
        q: "Sonn- und Festtagszuege", //waagerecht ueberschrift mehrere zeilen
        BLOCK: { Standard:  id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Nur Montags oder, wenn dieser ein Festtag ist, Dienstags. ",    //senkrecht neben zuglauf
        BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
    }, {
        q: "III",
        BLOCK: { Standard: { scope: Zug, Klasse: Kl3 } }
    }
    ]
}];

var x52: Array<page> = [{
    head: "52",
    list: [{
        q: "Sächs. Staatsb.", //global default
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn- und Festtags.",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "! Nur Montags und Donnerstags, ab 1.Juni täglich.",
        BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Geltungstag: MontagsUndDonnerstagsUndAb1JuniTaeglich }, AnschlussZubringerIn: { Geltungstag: MontagsUndDonnerstagsUndAb1JuniTaeglich } } }
    }, {
        q: "In der Nacht nach Sonn- und Festtagen.", //passend verkehrt
        BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
    }, //FKB27
    {
        q: "Sächs. Staatsb.", //global default
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    },
    {
        q: "Alle Zuege II u III Kl",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }
    ]
}];

var x53: Array<page> = [{
    head: "53",
    list: [
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "+ Hält Werktags für IV Klasse in Prösen",
            BLOCK: { Standard: { scope: Zug /*SIC*/, haeltWerktagsFuerIVKlInProesen: true } }
        }, {
            q: "*SonnUndFesttags: 1132",
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags, Zeit: ZHV(1132) /* "HV1132"*/ } } }
        }, {
            q: "nach Chemnitz Ank.1155",
            BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Chemnitz, AnkunftZeit: ZHV(1155) /*"HV1155"*/ } }
        }, {
            q: "Nur Freitags.", //passend verkehrt
            BLOCK: { Standard: { scope: Zug, Fahrtage: Freitags } }
        },
        //Nossen - Elsterwerda
        {
            q: "+ Hält Werktags für IV Klasse in Prösen",
            BLOCK: { Standard: { scope: Zug /*SIC*/, haeltWerktagsFuerIVKlInProesen: true } }
        }, {
            q: "Nur Freitags.", //passend verkehrt
            BLOCK: { Standard: { scope: Zug, Fahrtage: Freitags } }
        }, {
            q: "pfeilstart",
            BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
        }, {
            q: "pfeilziel",
            BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1 } }
        },
        //malteserkreuz mittelteil als opticalmarker --> passendes unicode symbol ??
        // Klingenberg-colmnitz
        {
            q: "Alle Zuege II u III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }

    ]
}];

var x54: Array<page> = [{
    head: "54 FKB30 Dresden Goerlitz",
    list: [
        {
            q: "direkte wagen s.u. 247", //globaldefault
            BLOCK: { Standard: { scope: Zug, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } }
        }, {
            q: "s.a.unt.3",
            BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden_Neust_Schl_Bf , endZeileBhf: Arnsdorf }, AllgemeineInfo: AllgemeineInfo.SieheUnter3 } }
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
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.FahrKartenNLaubanUndWeiterZumZug121ohnePreiserhoehungUeberKohlfurt } ) }
        }, {
            q: "bis Horka",
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterAb: { bis: Horka } } }
        },
        // Zugsverbindung Dresden Zittau Reichenberg

        //fahrkartenspalte: a.D.N. //aus dresden neustadt  HOEHE VERSCHOBEN ?????
        {
            q: "*Sonn-und Festtags:831",
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussWeiterNach: { Zeit: ZHN(831) /*"831"*/ } } }
        }, {
            q: "S.u.F.",
            BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
        }
    ]
}];

var x55: Array<page> = [{
    head: "55",
    list: [
        {
            q: "+vom 15.juni bis 15.september:335 ab breslau", //anschluss aus
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Bhf: Breslau, Zeit: ZHN(335) /*"335"*/ } } }
        }, {
            q: "Nur Sonnabends",
            BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends } }
        }, {
            q: "Buffetwagen Myslowitz-Leipzig",
            BLOCK: { Standard: { scope: Zug, Buffetwagen: [Myslowitz, Leipzig] } }
        }, {
            q: "s.a.unt.3",
            BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Arnsdorf, endZeileBhf: Dresden_Neust_Schl_Bf  }, AllgemeineInfo: AllgemeineInfo.SieheUnter3 } }
        }, {
            q: "Schlafwagen Leipzig-Myslowitz",
            BLOCK: { Standard: { scope: Zug, Schlafwagen: [Leipzig, Myslowitz] } }
        }, {
            q: "*Schnellzug v Reichenberg-Zittau über Warnsdorf",
            BLOCK: { Standard: { scope: Zug, erreicheKbsAus: { Kategorie: "Schnellzug", aus: [Reichenberg, Zittau], ueber: Warnsdorf } } }
        },
        //Zugsverbindungen  //so eine art staedtevrbindungstabelle
        {
            q: "*mit Umst. in Bautzen",
            BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { mitUmstiegIn: Bautzen } } }
        }, {
            q: "!Sonn und Festt:705",
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussZubringerAb: { Zeit: ZHN(705) /*"705" */ } } }
        }, {
            q: "Rückfahrkarten über Hermsdorf gelten auch über Warnsdorf und Bischofswerda",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.RueckfahrkartenUberHerrnhutGeltenAuchUeberWarnsdorfUndBischofswerda } ) }
        }
    ]
}];

var x56: Array<page> = [{
    head: "56",
    list: [{
        q: "*Sonn und festtags 831",
        BLOCK: { Standard: {}, Abweichend: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags, Zeit: ZHN(831) /* "831"*/ } } }
    }, {
        q: "über Warnsdorf", //bei mehrere kein halt untereinander ab Eibau
        BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Eibau, abweichend: [Warnsdorf], wiederDaBhf: Zittau } } }
    }, {
        q: "über Warnsdorf", //bei mehrere kein halt untereinander ab Neugersdorf
        BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Neugersdorf, abweichend: [Warnsdorf], wiederDaBhf: Zittau } } }
    }, {
        q: "von Loebau",
        BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Löbau } }
    }, {
        q: "+nur sonn und festtags",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags } } }
    }]
}
    , {
        head: "56.31 Zittau-Bischofswerda ",
    list: [
        {
            q: "+nur sonn und festtags",
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Geltungstag: SonnUndFesttags } } }
        }, {
            q: "über Warnsdorf", //bei mehrere kein halt untereinander bis Eibau
            BLOCK: { Standard: { scope: Zug, ZugVerlaesstStreckeAberKommtZurueck: { letzterBhf: Zittau, abweichend: [Warnsdorf], wiederDaBhf: Eibau } } }
        }, {
            q: "über Warnsdorf", //bei mehrere kein halt untereinander bis Neugersdorf
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

var x57: Array<page> = [{
    head: "57.32 Reichenberg Eibau und zurueck ",
    list: [{
        q: "*In Oberullersdorf halten die Zuege nur zum Einsteigen", // wie eXXXX an allen zeiten
        BLOCK: { Standard:  check<BlockEntryZeilenFolge>(  { scope:  { kind: "ZeilenFolge", startZeileBhf: Oberullersdorf, endZeileBhf: Oberullersdorf }, ZuegeHaltenNurZumEinsteigen: true } ) }
    }, {
        q: "Nur werktags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
    }, {
        q: "#850 I-III Sonn und festtags: aus reichenberg 246 , aus Machendorf 258 in Kratzau 307",
        c: "eigener Zug der eigentlich eigene spalte haette",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, ZugOhneSpalte: { Fahrtage: SonnUndFesttagsSowie1624mai1429juni15aug828sept, 
            Klasse: Kl1bis3, ZugNr: "850", weg: [{ bhfAb: Reichenberg, zeit: ZHN(246) }, { bhfAb: Machendorf, zeit: ZHN(258) }, { bhfAn: Kratzau, zeit: ZHN(307) }] } } ) }
    }, {
        q: "10:00 in Kreibitz", // Anschluss in Ankunftszeit in anderem Ort
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Kreibitz, Zeit: ZHN(1000) /*1000*/ } } }
    }
        , {
        q: "11:31 in Ebersbach", // Anschluss in Ankunftszeit in anderem Ort
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Ebersbach, Zeit: ZHN(1131) /*"1131"*/ } } }
    }, {
        q: "*In Oberullersdorf halten die Zuege nur zum Aussteigen", // wie aXXXX an allen zeiten
        BLOCK: { Standard:  check<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Oberullersdorf, endZeileBhf: Oberullersdorf }, ZuegeHaltenNurZumAussteigen: true } ) }
    }, {

        q: "+849 I-III Sonn und festtags: aus kratzau 315, aus machendorf 325 in reichenberg 335",
        c: "regulaere Zug der eigentlich eigene spalte haette",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, ZugOhneSpalte: { Fahrtage: SonnUndFesttagsSowie1624mai1429juni15aug828sept, Klasse: Kl1bis3, ZugNr: "849", 
            weg: [{ bhfAb: Kratzau, zeit: ZHN(315) }, { bhfAb: Machendorf, zeit: ZHN(325) }, { bhfAn: Reichenberg , zeit: ZHN(335) }] } } )  }
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


var x58: Array<page> = [{
    head: "58",
    list: [
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Zuege II - IV Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
        }, {
            q: "Alle Zuege II u III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }, {
            q: "Rückfahrkarten zwischen sebnitz und dresden alt oder -neust über schandau, düröhrdorf pirna oder dürrörhrsdorf-arnsdoorf II460pf III310pf",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.RueckfahrkartenZwischenSebnitzUndDresdenAltOderNeustUeberSchandauDuerrsdorfPirnaOderDuerroehrsdorfArnsdorfII460pfIII310pf } ) }
        }
    ]
}];

var x59: Array<page> = [{
    head: "59",
    list: [//FKB 37
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "*mit umsteigen in bautzen", //zu anschluss nach in
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Bautzen } } }
        }, //FKB 38
        {
            q: "Alle Zuege II - IV Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
        },
        {
            q: "#Zuege2699 und 2700 verkehren nur sonn und festtags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, RedundanteZugNr: [2699, 2700] } }
        }, {
            q: "+zug 2701 verkehrt nur donnerstags oder wenn dieser ein festtag ist am mittwoch vorher",
            BLOCK: { Standard: { scope: Zug, Fahrtage: DonnerstagOderWennDieserFesttagDannMittwochVorher, RedundanteZugNr: [2701] } }
        }, {
            q: "*mit umsteigen in bautzen", //zu anschluss nach in
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Bautzen } } }
        }, //FKB 39,40
        {
            q: "Alle Zuege II - III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }, {
            q: "SonnUndFesttags",
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
        }
    ]
}];

var x60: Array<page> = [{
    head: "60.41",
    list: [
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Zuege II - IV Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
        }, {
            q: "+Zug 807 und 808 verkehren zwischen Cunewalde und Bautzen nur Sonnabends, Sonn- und Festtags", //sonst kuerzer naemlich nur Obercunewalde - cunewalde !!!
            c: "807 ab Cunewalde nur manchmal",
            BLOCK: { Standard: id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Cunewalde}, Fahrtage: SonnabendsSonnUndFesttags, RedundanteZugNr: ["807"] } ) }        //gueltigAbBhf muss von validierer gegen bahnhof geprüft werden
        },
        {
            q: "+Zug 807 und 808 verkehren zwischen Cunewalde und Bautzen nur Sonnabends, Sonn- und Festtags", //sonst kuerzer naemlich nur Obercunewalde - cunewalde !!!
            c: "808 bis koeblitz nur manchmal",
            BLOCK: { Standard: id<Block2EntryTeilZug>(  { scope:{kind:"TeilZug", TZgueltigBisBhf: Köblitz}, Fahrtage: SonnabendsSonnUndFesttags, RedundanteZugNr: ["808"] } ) }        //gueltigAbBhf muss von validierer gegen bahnhof geprüft werden
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
        }]
}, {
    head: "60.42 + 60.43",
    list: [{

        q: "Sächs. Staatsb.", //global default
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II - IV Kl",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
    }, {
        q: "!Montags und Sonnabends 535",
        BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: MontagsUndSonnabends, AnschlussWeiterNach: { Zeit: ZHV(535) /*"535"*/ } } }
    }, {
        q: "!Montags und Sonnabends 550",
        BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: MontagsUndSonnabends, AnschlussWeiterNach: { Zeit: ZHV(550) /* "550" */  } } }
    }, {
        q: "+Nur Montags oder, wenn dieser ein Festtag ist, Dienstags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag } }
    }
    ]
}];

var x61: Array<page> = [{
    head: "61",
    list: [{
        q: "(kleines viereck) Vom 15.Juni bis 15.September: s335",
        BLOCK: { Standard: {}, Abweichend:  id<Block2Zelle>( { scope: Zelle, GeltungsTag: Vom15JuniBis15September, AnschlussZubringerAb: { Kategorie:"Schnellzug", Zeit: ZHN(3353) /*"s335"*/ } } ) }
    }
    
    , {
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
        q: "Sonn- und Festtagszuege", //mehrspalte ueberschrift
        BLOCK: { Standard:  id<Block2EntryZuegeInBelegtenSpalten> ( { scope: ZuegeInBelegtenSpalten, Fahrtage: SonnUndFesttags } ) }
    }
    ,  {
        q: "Görlitz-Nikrisch-Seidenberg: K.Eisenb.Dir. Breslau, Nikrisch-Zittau: Sächs. Staatsb.",
        //{kind:"ZeilenFolge", startZeileBhf:string, endZeileBhf: string}
        BLOCK: {
            Standard: id<BlockEntryZeilenFolge>(  { scope: (check< ScZeilenFolge >( { kind: "ZeilenFolge" , startZeileBhf:  Görlitz , endZeileBhf: Nikrisch  } )) , Verwaltung: "KEDBreslau"  })
            
            ,
            Abweichend: id<BlockEntryZeilenFolge>(  { scope: check< ScZeilenFolge >( { kind: "ZeilenFolge", startZeileBhf: Nikrisch, endZeileBhf: Zittau_Bf } ), Verwaltung: "Saechs" } )
        }
    }
    , {
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
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
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
        BLOCK: { Standard: id<Block2EntryZubringerZellenFolge>(  { scope: { kind: "ZubringerZellenFolge", startZelle: Seidenberg, endZelle: Nikrisch }, ZugNr: "624" } ) }
    }, {
        q: "anschluss aus zugnr 628",
        c: "",
        BLOCK: { Standard: id<Block2EntryZubringerZellenFolge>( { scope: { kind: "ZubringerZellenFolge", startZelle: Seidenberg, endZelle: Nikrisch },  ZugNr: "628"  } ) }
    }
    
    ]
}];


var x62: Array<page> = [{
    head: "62",
    list: [    //FKB 45
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Zuege II - III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }, {
            //Textzeile rekonstruiert aus FKB So1901
            //(1901: Die Züge 2632, 2635, 2639 (dieser von Bertsdorf bis Oybin), 2640, 2641 verkehren nur an Sonn- und Festtagen ab 26.Mai bis Ende August )
            // reko zugnummern ergeben sich aus Malteserkreuz -> sind plausibel
            q: "+Die Züge 2632, 2635, 2639 (dieser von Bertsdorf bis Oybin), 2640, 2641 verkehren nur an Sonn- und Festtagen ab 20.Mai bis Ende August",
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags20MaiBisEndeAugust, RedundanteZugNr: [2632, 2635, 2640, 2641] } }
        }, {

            q: "++Der Zug 2639 von Bertsdorf bis Oybin verkehrt nur an Sonn- und Festtagen ab 20.Mai bis Ende August",
            c: "frei gebastelt NM weil in einem zu komplex",
            BLOCK: { Standard: id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Bertsdorf, TZgueltigBisBhf: Oybin}, Fahrtage: SonnUndFesttags20MaiBisEndeAugust, RedundanteZugNr: [2639] } ) }

        }, {
            q: "Nur im Juli und August",
            BLOCK: { Standard: { scope: Zug, Fahrtage: JuliUndAugust } }
        }, {
            q: "Nur im Mai, Juni und September",
            BLOCK: { Standard: { scope: Zug, Fahrtage: MaiJuniSeptember } }

        }, { //FKB 46
            q: "Alle Zuege II - III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }, {
            q: "Nur in der Nacht nach Sonn- und Festtagen",
            BLOCK: { Standard: { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } }
        }, {
            q: "+Sonn und Festtags: 705",
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnschlussZubringerAb: { Zeit: ZHN(705) /*"705"*/ } } }
        }
    ]
}];

var x63: Array<page> = [{
    head: "63.47 1/2",
    list: [{
        q: "S.Stb.", //global default
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "Verkehrt nur Sonnabends.",
        BLOCK: { Standard: { scope: Zug, Fahrtage: Sonnabends } }
    },
    {
        q: "+Verbindungen ohne Umsteigen von Dresden-Neust.", //geschweifte klammer unklar
        BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { ohneUmstieg: true } } }
    }]
},
{
    head: "63.47 2/2",
    list: [
        {
            q: "S.Stb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" }  ) }
        },
        {
            q: "+Verbindungen ohne Umsteigen bis Dresden-Neust.",
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { ohneUmstieg: true } } }
        }
        , {
            q: "oZug2744 verkehrt nur Montags oder, wenn dieser ein Festtag ist Dienstag ab Königsbrück, an allen anderen Werktagen nur von Moritzdorf aus.",
            BLOCK: {
                Standard: { scope: Zug, Fahrtage: Werktags },
                Abweichend: id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Königsbrück_B , TZgueltigBisBhf: Moritzdorf }, Fahrtage: MontagsFallsMontagEinFesttagDannDienstag, RedundanteZugNr: [2744] } )
            }
        }]
},
{
    head: "63.46 kpl",
    list: [{
        q: "Alle Zuege II - III Kl",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }, {
        q: "Nur Sonn- und Festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }
    ]
}];


var x64: Array<page> = [{
    head: "64",
    list: [
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Zuege II - IV Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis4 } ) }
        }, {
            q: "o Schl.Bhf.", //ankunft in bahnhofsaenderung
            c: "muss das nach DD Neustadt statt Hbf ??? ??? -> zug endet schon in Neustadt s.Seite 27 !!!",
            BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Dresden_Neust_Schl_Bf } } }
        }, {
            q: "Nur in d Nacht n. Dienstag und Sonntag.", //1901 ist n. besser lesbar
            c: "Interpretation des 'nach' ist aus FKB So 1899 fuer den selben Zug uebernommen   ",
            BLOCK: { Standard: { scope: Zug, Fahrtage: DienstagsUndSonntags } }
        }
    ]
}];

var x65: Array<page> = [{
    head: "65.51 + 65.52",
    list: [{
        q: "Sächs. Staatsb.", //global default
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Züge II und III Kl",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
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
            Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ),
            Abweichend: check<Block2EntryZugNr> ( { scope: { kind: "ZugNr", WichtigeZugNummern: ["2821", "2828"] }, Klasse: Kl2bis4 } )
        }
    }]
}
    , {
        head: "65.43",
    list: [
        {
            q: "Sächs. Staatsb.", //global default
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Züge II und III Kl",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
        }]
}];

var x66: Array<page> = [{
    head: "66",
    list: [{
        q: "dir wagen s 247",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "Vorortzuege Dresden-tharandt s unter 2.",
        c: "diesmal nicht direkt vor betreffenden bahnhoefen angeordnet",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugeDresdenTharandtSieheUnter2 } ) }
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


var x67: Array<page> = [{
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
        BLOCK: { Standard: id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Reichenbach_i_V, TZgueltigBisBhf: Hof}, Kategorie: "DZug", Klasse: Kl1bis2 } ) }
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
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten } ) }

    }, {
        q: "nur werktags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
    }
    ]
}];

var x68: Array<page> = [{
    head: "68",
    list: [{
        q: "siehe u 56",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>( { scope: { kind: "ZeilenFolge", startZeileBhf: Hof, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 } ) }
    }, {
        q: "siehe u 58",
        BLOCK: { Standard:  id<BlockEntryZeilenFolge>( { scope: { kind: "ZeilenFolge", startZeileBhf: Eger, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 }) }
    }, {
        q: "siehe u 9",
        BLOCK: { Standard:  id<BlockEntryZeilenFolge>( { scope: { kind: "ZeilenFolge", startZeileBhf: Wüstenbrand, endZeileBhf: Chemnitz }, AllgemeineInfo: AllgemeineInfo.SieheUnter9 } ) }
    }, {
        q: "+ mit umsteigen in Reichenbach iV s640",
        c: "FKB56 zeigt den anschluss in Reichenbach mit einem Pfeil 144->155",
        BLOCK: { Standard: {}, Alternative: id<Block2Zelle>( { scope: Zelle, AnschlussZubringerAb: { Bhf: München, mitUmstiegIn: Reichenbach_i_V, Kategorie: "Schnellzug",  Zeit: ZGN(640) /* gestern nachmittag"S640" */ } } ) }

    }, {
        q: "Directe Wagen unter 247.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "Von Würzburg",
        BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Würzburg } }
    }, {
        q: "!Nord-Süd-Express",
        BLOCK: { Standard: { scope: {kind:"TeilZug", TZgueltigAbBhf: Hof, TZgueltigBisBhf: Reichenbach_i_V}, AnschlussWeiterNach: { Kategorie: "Nord Sued Express" } } }
    }, {
        q: "D I.II. ", // D steht vor Zugnummer: D101 siehe unten
        BLOCK: { Standard: { scope: {kind:"TeilZug", TZgueltigAbBhf: Hof, TZgueltigBisBhf: Reichenbach_i_V}, Kategorie: "DZug", Klasse: Kl1bis2 } }
    }, {
        q: "nach Gössnitz",
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Gössnitz } }
    }, {
        q: "Nach Meerane",
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Meerane } }
    }
    ]
}];

var x69: Array<page> = [{
    head: "69",
    list: [{
        q: "+Ab Glauchau Nr. 1057 //Zugnr änderung",
        BLOCK: { Standard: { scope: {kind:"TeilZug", TZgueltigAbBhf: Glauchau}, ZugNr: 1057 } }
    }, {
        q: "Schlafwagen München Dresden",
        BLOCK: { Standard: { scope: Zug, Schlafwagen: [München, Dresden] } }
    }, {
        q: "Vorortzüge Tharandt Dresden siehe u.2.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.VorortzugeDresdenTharandtSieheUnter2 } ) }
    }, {
        q: "b.Tetsch",
        c: " durchgehender anschlusszug ",
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Tetschen } }
    }]
}, {
    head: "69.55",
    list: [{
        q: "i. Chemnitz", //anschluss bhf änderung
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Chemnitz } } }
    }, {
        q: "IV Klasse wird auch an Tagen geführt die in sachsen als festtage, in reuss aber als werktage gelten",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.IV_Klasse_wird_auch_an_Tagen_gefuehrt__die_in_Sachsen_als_Festtage__in_Reuss_aber_als_Werktage_gelten } ) }
    }, {
        q: "*mit umsteigen in crimmitschau",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Crimmitschau } } }
    }, {
        q: "!ueber reichenbach i.V.",
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Ueber: [ Reichenbach_i_V] } } }
    }
    ]
}];

var x70: Array<page> = [{
    head: "70",
    list: [
        //ueberschrift komisch, anscheinend angabe von abzweigstrecken
        {
            q: "+IV Kl auch sonn und festtags",
            BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Schönefeld , endZeileBhf: Leipzig_Bayr_Bf  }, AllgemeineInfo: AllgemeineInfo.IVKlAuchSonnUndFeiertags } ) }
        }, {
            q: "s.a.u.8",
            BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Bayr_Bf, endZeileBhf: Kieritzsch }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 } ) }
        }, {
            q: "L == Luxuszug, nur mit Fahrk. I.Kl. (Schnellz.) u. geg. besond.Zuschlag benutzb.",
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.L_Luxuszug__nur_mit_Fahrk__I_Kl__Schnellz__u__geg__besond__Zuschlag_benutzb } ) }
        }, {
            q: "Speisewagen Berlin-Münch.",
            BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Speisewagen: [Berlin, München] } ) }
        }, {
            q: "n.Zw.", // ???
            c: "Zugbeginn HN908 siehe FKB61 Meerane ankunft vs Abfahrt 1 minute unterschied...939 ab schoenboernchen, Ankunft S.67 um 1008 in Zwickau",
            BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, verlasseKbsNach: Zwickau } ) }
        }, {
            q: "Nord-Süd-Expresszug (Brenner)",
            BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Kategorie: "Nord Sued Express" } ) }
        }, {
            q: "von Dresden", //aus anderer kbs
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
            BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.D__Durchgangszug__bei_welchem_ausser_dem_Fahrpreis_Platzgebuehren_erhoben_werden_und_zwar_fuer_Strecken_bis_150km_1_00M_ueber_150km_2_00M } ) }
        }]
}];

//spaltennummern zum uebergang auf naechste seite mit fortsetzung der tabelle

var x71: Array<page> = [{
    head: "71",
    list: [{
        q: "   s.a.58",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Plauen_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 } }
    }, {
        q: "Nur Werktags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
    }, {
        q: "nach Eger(Ank329)",
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Eger], Kategorie:"Schnellzug",  AnkunftsZeit: ZHN(329) } } }
    }, {
        q: "I-IV Kl", //ZugZellenfolge oder teilzug
        BLOCK: { Standard: { scope: {kind:"TeilZug", TZgueltigAbBhf: Plauen_i_V, TZgueltigBisBhf: Hof}, Klasse: Kl1bis4 } }
    }, {
        q: "b.Weiden",
        c: "anschlusszug verlauf ",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope: {kind: "AnschlussWeiterZellenFolge", startZelle:Hof, endZelle:München}, mehrZeiligerAnschlusszugFaehrtNach: Weiden } ) }
    }, {
        q: "(rechteck) bei den mit (rechteck) bezeichneten Zügen findet in Leipzig Omnibusüberführung vom Magdeburg. nach dem Bayr.Bhf. statt.",
        BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Magd_Bf , Leipzig_Bayr_Bf] } }
    }, {
        q: "Direkte Wagen siehe 247.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "Schlafwagen Dresden Muenchen",
        BLOCK: { Standard: { scope: Zug, Schlafwagen: [Dresden, München] } }
    }, {
        q: "nach Eger (Ank533)",
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Eger],Kategorie:"Schnellzug",  AnkunftsZeit: ZMV(533) } } }
    }, {
        q: "!über Schnabelwald",
        c: "detail eines Anschlusszuges mit mehreren Zeilen",
        BLOCK: { Standard: { scope:  {kind: "AnschlussWeiterZellenFolge", startZelle: Hof, endZelle: Nürnberg}, AnschlussWeiterNach: { Ueber: [Schnabelwald] } } }
    }, {
        //71.57
        q: "Saechs Staatsb",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "s.u.8",
        BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Connewitz, endZeileBhf: Oetzsch  }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 } }
    }, {
        q: "Sonn- und Festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }
    ]
}];



var x72: Array<page> = [{
    head: "72f",
    list: [{
        q: "s.auch 58",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Plauen_i_V, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 } ) }
    }, {
        q: "Nur werktags",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }, {
        q: "*ab Rchb. Nr. 233",
        //Zugnr woanders angebeben weil nur platz fuer neue klassenangaben, Rchb = Reichenbach i.V.
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Reichenbach_i_V}, ZugNr: 233 } ) }
    }, {
        q: "+ab Werdau Nr. 205",  //zugnr angabe
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Werdau}, ZugNr: 205 } ) }
    }, {
        q: "von Eger",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, erreicheKbsAus: Eger } ) }
    }, {
        q: "v.Zw.", // Anschlusszug kommt von woanders als obere zeilen des selben anschlusszug sagen
        BLOCK:{Standard: id<Block2EntryZubringerZellenFolge>(  {scope:   { kind: "ZubringerZellenFolge", startZelle: Chemnitz, endZelle: Gössnitz }, mehrzeiligerAnschlusszugKommtAus: Zwickau } ) }
    }, {
        q: "217 I-III", //Klasse und zug in einer Zelle nebeneinander
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, ZugNr: 217, Klasse: Kl1bis3 } ) }
    }, {
        q: "!über Schnabelw.",
        c: "detail eines Anschlusszuges mit mehreren Zeilen;   evtl ZubringerAb und ZubringerIn in verschiedene Bloecke fassen ???",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, AnschlussZubringerAb: { Ueber: [Schnabelwald] } } ) }

    }, {
        q: "Schlafwagen Münch Dresden",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Schlafwagen: [München, Dresden] } ) }
    }, {
        q: "nach Dresden Ank502",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, verlasseKbsNach: { nach: [Dresden], Kategorie:"Schnellzug", AnkunftsZeit: ZHN(502) /* "SHN502" */  } } ) }  //SHN502
    }, {
        q: "schlaf und buffetwagenmuenchen berlin",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Schlafwagen: [München, Berlin], Buffetwagen: [München, Berlin] } ) }
    }, {
        q: "Nord-Süd-Express-Zug(Brenner)",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Kategorie: "Nord Sued Express" } ) }
    }]
}];




var x73: Array<page> = [{

    head: "73",
    list: [
        {
            q: "s a u 8",
            BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf:Kieritzsch , endZeileBhf: Leipzig_Bayr_Bf }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 } )}
        }, {
            q: "+IV.Kl. auch Sonn und Festtag",
            BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Bayr_Bf, endZeileBhf: Leipzig_Berl_Bf }, AllgemeineInfo: AllgemeineInfo.IVKlAuchSonnUndFeiertags } ) }
        }
        //bayr bhf
        , {
            q: "speisewagen muenchen berlin",
            BLOCK: { Standard:  id<Block2EntryZug>( { scope: Zug, Speisewagen: [München, Berlin] } ) }
        }, {
            q: "b coeth",
            BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope:   {kind: "AnschlussWeiterZellenFolge", startZelle: Leipzig_Magd_Bf  , endZelle: Magdeburg}, mehrZeiligerAnschlusszugFaehrtNach: Cöthen } ) }
        }, {
            q: "(Rechteck) bei den mit (rechteck) bezeichneten Zuegen findet in Leipzig omnibusueberfuehrung vom Bayr. nach dem Magdeb. Bhf. statt.",
            BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, OmnibusUeberfuehrung: [Leipzig_Bayr_Bf , Leipzig_Magd_Bf] } ) }
        }]
}
,
{
    head: "73.57",
    list: [
    {
        q: "Saechs.Staatsb.  //oben links"  ,
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, 
    {
        q: "+in der auf einen sonn oder festtag folgenden nacht",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } ) }
    }, {
        q: "s.a.u.8",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Leipzig_Connewitz , endZeileBhf: Oetzsch }, AllgemeineInfo: AllgemeineInfo.SieheUnter8 } ) }
    }, {
        q: "nur Werktags",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }, {
        q: "sonn und festtags",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "247 II-IV", // mit geschweifter klammer, ersatz durch anfangs und endmarker
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Gaschwitz, TZgueltigBisBhf: Leipzig_Bayr_Bf}, ZugNr: 247, Klasse: Kl2bis4 } ) }
    }]
}

];


var x74: page[] = [{
    head: "74",
    list: [
    {
        q: "Directe Wagen s.u.247", //oben rechts
        BLOCK: { Standard: check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, 
    {
        q: "In Voitersreuth Zollrevision", //oben links
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.InVoitersreuthZollrevision } ) }
    }, {
        q: "su54",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Dresden_Hptbf }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 } ) }
    }, {
        q: "su56",
        BLOCK: { Standard: id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Reichenbach_i_V, endZeileBhf: Magdeburg }, AllgemeineInfo: AllgemeineInfo.SieheUnter58 } ) }

    }, {
        q: "+verkehrt vom 1.Mai bis 15.Sept. ausschl. der Sonn und Festtage sowie des 14.Juni",
        BLOCK: { Standard: id<Block2EntryZug>( { scope: Zug, Fahrtage: vom1MaiBis15SeptOhneSonnUndFesttageOhne14Juni } ) }
    }, {
        q: "! ueb Mrkt Redwitz",
        BLOCK: { Standard: id<Block2EntryZubringerZellenFolge>(  { scope: { kind: "ZubringerZellenFolge", startZelle: München, endZelle: Eger }, AnschlussZubringerAb: { Ueber: [Marktredwitz] }   } ) }
    }, {
        q: "+I.Kl. u. nur von 15.6. bis 15.9.", //anschluss_zubringer_ab und anschluss_zubringer_hin",
        BLOCK: { Standard: id<Block2EntryZubringerZellenFolge>(  { scope: { kind: "ZubringerZellenFolge", startZelle: Karlsbad, endZelle: Eger }, Fahrtage: Vom15JuniBis15September, Klasse: Kl1  } ) }
    }, {
        q: "x ueber Franzensbad",
        c: "Zubringer, der nicht durch eger fahert",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, AnschlussZubringerAb: { Ueber: [Franzensbad] } } ) }
    }, {
        q: "+ I.Kl u. nur von  15.5. bis 15.9. ", //anschluss_zubringer_ab und anschluss_zubringer_hin",
        BLOCK: { Standard: id<Block2EntryZubringerZellenFolge>(  { scope: { kind: "ZubringerZellenFolge", startZelle: Karlsbad, endZelle: Eger }, Fahrtage: Vom15MaiBis15September, Klasse: Kl1  } ) }
    }, {
        q: "nach Gera Ankunft 1010 ", //verlaeest Strecke",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, verlasseKbsNach: { nach: [Gera], AnkunftsZeit: ZHV(1010) } } ) }
    }, {
        q: "*Zug 2085 haelt bis mit 15.Septbr. auch in Antonienhoehe an ", //bis mit == einschliesslich ? Antonienhoehe liegt zw hof und eger an FKB 108b",
        BLOCK: { Standard: {}, Abweichend: id<Block2EntryZug>(  { scope: Zug, GeltungsTag: bis15September, haeltAuchIn: Antonienhöhe, RedundanteZugNr: ["2085"] } ) }
    }, {
        q: "*I-IV Kl ", //fern fuer startmarker bis endmarker",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Adorf, TZgueltigBisBhf: Reichenbach_i_V}, Klasse: Kl1bis4 } ) }
    }, {
        q: "*Zuege 2105 und 2107 verkehren nur bis mit 15.September", //== einschliesslich?",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: bis15September, RedundanteZugNr: ["2105", "2107"] } ) }
    }, {
        q: "*Zug der Bayr. Staatsbahnen.",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Verwaltung: "Bay" } ) }
    }, {
        q: "!D. I.II.",   //Anschluss ist DZug 1+2 klasse",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, Kategorie: "DZug", Klasse: Kl1bis2 } ) }
    }, {
        q: "211 I-IV ",//geschweifte klammer", oberer Bf !
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Plauen_i_V , TZgueltigBisBhf: Reichenbach_i_V}, ZugNr: 211, Klasse: Kl1bis4 } ) }
    }, {
        q: "Sonn und festtags vom 20 mai bis 16.sept sowie am 5 juni ", //passend zuglaufinfo",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags20MaiBis16SeptSowie5Juni } ) }
    }]
}];


var x75: page[] = [{
    head: "75",
    list: [{
        q: "Directe Wagen s.u.247", //oben rechts
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "In Voitersreuth Zollrevision", //oben links
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.InVoitersreuthZollrevision } ) }
    }, {
        q: "+ueber Greiz //anschluss zubringer aus",
        BLOCK: { Standard:  id<Block2Zelle>(   { scope: Zelle, AnschlussZubringerAb: { Ueber: [Greiz] } }) }
    }, {
        q: "*nur I.Kl",
        BLOCK: { Standard:  id<Block2Zelle>(   { scope: Zelle, Klasse: Kl1 }) }
    }, {
        q: "*D I II",
        BLOCK: { Standard:  id<Block2EntryZubringerZellenFolge>(   { scope: {kind:"ZubringerZellenFolge", startZelle: Dresden, endZelle: Reichenbach_i_V } , Kategorie: "DZug", Klasse: Kl1bis2 } ) }
    }, {
        q: "+Zuege 2106 u. 2108 verkehren nur bis mit 15.September",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: bis15September, RedundanteZugNr: ["2106", "2108"] } ) }
    }, {
        q: "(RAUTE) Zug 2082 haelt bis mit 15.Sept auch in antonienhoehe an",
        BLOCK: { Standard: {}, Abweichend:  id<Block2EntryZug>(  { scope: Zug, GeltungsTag: bis15September, haeltAuchIn: Antonienhöhe, RedundanteZugNr: ["2082"] } ) }
    }, {
        q: "(kleiner endstarn) Zuege der Bayer. Staatsbahnen",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Verwaltung: "Bay" } ) }
    }, {
        q: "von Gera abf 450",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, erreicheKbsAus: { aus: [Gera], AbfahrtsZeit: ZHV(450) } } ) }
    }, {
        q: "von Gera abf 742",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, erreicheKbsAus: { aus: [Gera], AbfahrtsZeit: ZHV(742) } } ) }
    }, {
        q: "** I.-IIIKl. //geschweifte klammer",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Adorf, TZgueltigBisBhf: Eger}, Klasse: Kl1bis3 } ) }
    }, {
        q: "s.u.56",
        BLOCK: { Standard:  id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Magdeburg, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter56 } ) }
    }, {
        q: "s.u.54",
        BLOCK: { Standard:  id<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Dresden, endZeileBhf: Reichenbach_i_V }, AllgemeineInfo: AllgemeineInfo.SieheUnter54 } ) }
    }, {
        //q:"//Pfeil ist unklare :-( 736->750    umstieg moeglich ",
        q: "Pfeilstart",
        c: "Anschluss hier an zugende in anderen zug mittenrein",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, PfeilStart: 1 } ) }
    }, {
        q: "Pfeilende",
        c: "Mitten rein in anderen Zuglauf !!!",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, PfeilZiel: 1 } ) }
    }, {
        q: "(grosser endstern) ueber Franzensbad",
        c: "anderer startort des anschlusses, muss vor eger umnsteigen !!!",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope:  {kind: "AnschlussWeiterZellenFolge", startZelle:Eger, endZelle:Karlsbad}, AnschlussWeiterAb: {Bhf: Franzensbad} } ) }
    }, {
        q: "!ueber Marktredwitz",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope:  {kind: "AnschlussWeiterZellenFolge", startZelle:Eger, endZelle:München}, AnschlussWeiterNach: { Ueber: [Marktredwitz] } } ) }
    }, {
        q: "(rechteck) I.Kl u  nur von 15juni b 15 sept",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> ( { scope:  {kind: "AnschlussWeiterZellenFolge", startZelle:Eger, endZelle:Karlsbad}, Fahrtage: Vom15JuniBis15September, Klasse: Kl1 }) }
    }, {
        q: "+ I.Kl u nur von 16.V. b 16.IX",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope:  {kind: "AnschlussWeiterZellenFolge", startZelle:Eger, endZelle:Karlsbad}, Fahrtage: vom16maibis16sept, Klasse: Kl1 } ) }
    }, {
        q: "(geschweifte klammer) von 15.6 b. 15.8",
        c: "Anschluss weiter L 6:55 nach wien",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, GeltungsTag: vom15junibis15august } ) }
    }, {
        q: "(geschweifte klammer) ueber M.Redwitz",
        BLOCK: { Standard:  id<Block2EntryAnschlussWeiterZellenFolge> (  { scope: {kind: "AnschlussWeiterZellenFolge", startZelle:Eger, endZelle:München} , AnschlussWeiterNach: { Ueber: [Marktredwitz] } } ) }
    }]
}];



var x76: Array<page> = [{
    head: "76",
    list: [{
        q: "Saechs. Staatsb.", //oben links global default
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn und festtags",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Sonn und festtags sowie mittwochs",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttagsSowieMittwochs } ) }
    }, {
        q: "!Saechs Bhf", //anschluss_zubringer_aus Gera (Pr) geaendert su Gera (Sä)
        BLOCK: { Standard: { scope: Zelle, AnschlussZubringerAb: { Bhf: Gera_Reuss_S_St_B } } }
    }, {
        q: "!Gera (Reuss) Saechs. Bhf.", //anschluss_weiter_nach geaendert andererbhf
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Gera_Reuss_S_St_B } } }
    }, {
        q: "* in Altenburg", //anschluss_weiter_in"
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Altenburg } } }
    }, {
        q: "Sonn und festtags",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Nur Werktags",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }]
}];


//Ausserdem zusaetzliche tabelle umgesetzt durch mehrere (winzige) einzeltabellen





var x77: page[] = [{
    head: "77",
    list: [{
        q: "Saechs. Staatsb.",  //global",
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Dir Wag S 247", //global"
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
    }, {
        q: "Sonn - und festtags", //passend in zugspalte"
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "Sonn- und festtags sowie am 5.juni (Pfingstdienstag)", //passend in zugspalte"
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttagsSowie5Juni } }
    }, {
        q: "i. Bad Elster", //anschluss_weiter_in Bahnhofsaenderung"
        BLOCK: { Standard: { scope: Zelle, AnschlussWeiterNach: { Bhf: Bad_Elster } } }
    }]
}];


var x78: page[] = [{
    head: "78",
    list: [
        {
            q: "Dir. Wagen s. 247",
            BLOCK: { Standard: check<Block2EntryScGlobal>(  { scope: Global, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
        }, {
            q: "Nur Werktags", //passend in zugspalte
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
        }, {
            q: "Sonn- und Festtags.",
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
        }, {
            q: "Ausserdem: Zug 2046a (II.-IV. Kl.): ab Meerane 330, in Goessnitz 341",  //waere eigene spalte wenn der platz reichte
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, ZugOhneSpalte: { Klasse: Kl2bis4, ZugNr: "2046a", weg: [{ bhfAb: Meerane, zeit: ZHN(330) }, { bhfAn: Gössnitz, zeit: ZHN(341) }] } } ) }
        }, {
            q: "Ausserdem: Zug 2045a (II.-IV. Kl.): ab Goessnitz 354, in Meerane 405",  //waere eigene spalte wenn der platz reichte
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, ZugOhneSpalte: { Klasse: Kl2bis4, ZugNr: "2045a", weg: [{ bhfAb: Gössnitz, zeit: ZHN(354) }, { bhfAn: Meerane, zeit: ZHN(405) }] } } ) }
        }]
}];


var x79: page[] = [{
    head: "79",
    list: [{
        q: "Saechs. Staatsb.",  //global",
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "+Sonn und Festtags: 1139",
        BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AnkunftZeit: ZHN(1139) /*"1139"*/ } }
    }]
}];

var x80: page[] = [{
    head: "80",
    list: [{
        q: "Saechs. Staatsb.", //global oben links
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege fuehren nur e i n e Wagenklasse.", //global, halbe leerzeichen in eine"
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Klasse: KlNurEine } ) }
    }, {
        q: "Ausserdem: an Sonn- und Festtagen: 820 von Reichenbach i.V. unt.Bhf nach Mylau Haltest",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, ZugOhneSpalte: { Fahrtage: SonnUndFesttags, weg: [{ bhfAb: Reichenbach_i_V_u_B , zeit: ZHN(820) }, { bhfAn: Mylau_Hst }] } } ) }
    }, {
        q: "Ausserdem: an Sonn- und Festtagen: 800 von  Mylau Haltest nach Reichenbach i.V. unt.Bhf ",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, ZugOhneSpalte: { Fahrtage: SonnUndFesttags, weg: [{ bhfAb: Mylau_Hst, zeit: ZHN(800) }, { bhfAn: Reichenbach_i_V_u_B /* "Reichenbach unt bhf"*/ }] } } ) }
    }, {
        q: "Ausserdem: an Werktagen: 715 von Mylau Bhf nach Reichenbach i.V. unt.Bhf",
        BLOCK: { Standard:  id<Block2EntryZug>( { scope: Zug, ZugOhneSpalte: { Fahrtage: Werktags, weg: [{ bhfAb: Mylau_Bahnhof /*"Mylau bhf"*/, zeit: ZHN(715) }, { bhfAn: Reichenbach_i_V_u_B  }] } } ) }
    }, {
        q: "In der Nacht nach Sonn- u. Festtagen",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: InDerAufEinenSonnOderFesttagFolgendenNacht } ) }
    }, {
        q: "Sonn- und Festtags.", //passend, aber rechts neben den zeiteintraegen
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) } 
    }]
}];

var x81: Array<page> = [{
    head: "81",
    list: [{
        q: "Saechs. Staatsb.", //global keine globalen klassen
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "*ab Falkenstein nur II. u. III. Kl.",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Falkenstein}, Klasse: Kl2bis3 } ) }
    }, {
        q: "+ab Falkenstein auch IV. Kl.",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Falkenstein}, Klasse: Kl2bis4 } ) }
    }, {
        q: "Alle Zuege II. III.Kl.",
        BLOCK: { Standard: check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];


const x82: page[] = [{
    head: "82",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "+Nur Werktags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
    }, {
        q: "ueb Lausigk in Leipzig Ank 1024 ",//kursiv
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Leipzig], ueber: Lausigk, Kategorie:"Schnellzug", AnkunftsZeit: ZHV(1024) /*"S1024"*/ } } }
    }, {
        q: "ub Lausigk in Leipzig Ank 925",//kursiv
        BLOCK: { Standard: { scope: Zug, verlasseKbsNach: { nach: [Leipzig], ueber: Lausigk, Kategorie:"Schnellzug", AnkunftsZeit: ZHN(925) /* "S925"*/ } } }
    }, {
        q: "Sonn und Festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "(rund) Bei den mit(rund) bezeichneten Zuegen findet in Leipzig Omnibusueberfuehrung vom Bayer. nach dem Magdeb. Bahnhof zu den Anschlusszuegen statt",
        BLOCK: { Standard: { scope: Zug, OmnibusUeberfuehrungZuAnschlusszuegen: [Leipzig_Bayr_Bf, Leipzig_Magd_Bf] } }
    }, {
        q: "Alle Zuege II - IV Kl", //global
        BLOCK: { Standard: check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }, {
        q: "*Ab Wittgensdorf bis Chemnitz Zug 1654 I-IV Kl",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Wittgensdorf, TZgueltigBisBhf: Chemnitz}, ZugNr: "1654", Klasse: Kl1bis4 } ) }

    }]
}];

const x83: page[] = [{
    head: "83",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Nur Werktags",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }, {
        q: "Von Leipzig (840 Abf) ueber Lausigk",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, erreicheKbsAus: { aus: [Leipzig], AbfahrtsZeit: ZHV(840), ueber: Lausigk } } ) }
    }, {
        q: "Von Leipzig (635 Abf) ueber Lausigk",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, erreicheKbsAus: { aus: [Leipzig], AbfahrtsZeit: ZHV(635), ueber: Lausigk } } ) }
    }, {
        q: "+Zug 1640 haelt auch in Oetzsch",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, RedundanteZugNr: ["1640"], haeltAuchIn: Oetzsch }  ) }
    }, {
        q: "(rund) Bei den mit(rund) bezeichneten Zuegen findet in Leipzig Omnibusueberfuehrung vom Magdeb. nach dem Bayer Bahnhof zu den Anschlusszuegen statt",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, OmnibusUeberfuehrungZuAnschlusszuegen: [Leipzig_Magd_Bf, Leipzig_Bayr_Bf] } ) }
    }, {
        q: "*Zug 1730 ist von Chemnitz bis Wittgensdorf Schnellzug I.-III.Kl.",
        BLOCK: { Standard:  id<Block2EntryTeilZug>(  { scope: {kind:"TeilZug", TZgueltigAbBhf: Chemnitz, TZgueltigBisBhf: Wittgensdorf}, 
                                                                    ZugNr: "1730", Kategorie: "Schnellzug", Klasse: Kl1bis3 } ) }
    }, {
        q: "Alle Zuege II - IV Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }]
}];

var x84: page[] = [{
    head: "84",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "*Sonn- und Festtags",
        BLOCK: { Standard: { scope: Zelle, GeltungsTag: SonnUndFesttags } }
    }]
}];
//(Langenleuba Altenburg wurde erst 1901 eroeffnet)


var x85: page[] = [{
    head: "85 (KBS75..)",
    list: [{
        q: "Nur Mittwochs und Sonnabends",
        BLOCK: { Standard: { scope: Zug, Fahrtage: MittwochsUndSonnabends } }
    }, {
        q: "In der Nacht v. Mittwoch z. Donnerstag und vom Sonnabend z. Sonntag.",
        BLOCK: { Standard: { scope: Zug, Fahrtage: InDerNachtVonMittwochZuDonnerstagUndSonnabendZuSonntag } }
    }]
}];

//(Kieritsch Kroitzsch Pegau erst 1909 eroeffnet[sic])

var x86: page[] = [{
    head: "86",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(   { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];
//(Chemnitz Obergruena eroeffnet 1903 nur Gueter?)

var x87: page[] = [{
    head: "87",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>( { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];


var x88: page[] = [{
    head: "88 (kbs81) Chemnitz Riesa Roederau",
    list: [
        {
            q: "Nur Werktags",
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
        }]
},
{
    head: "88 Kriebethal Waldheim extratabelle",
    list: [
        {
            q: "Nur Sonn- und Festtags Dir Wagen 247 II-III Kl",
            c: "Waldheim Kriebethal wurde nur im sommer am WE im Personenverkehr bedient !!!"
            + "Komplette Tabelle mitten drin -> auslagern in untertabelle!!!",
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3, AllgemeineInfo: AllgemeineInfo.DirecteWagenSUnter247 } ) }
        }]
},
{
    head: "88 fkb81a Strehla Oschatz",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard: check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];

var x89: page[] = [{
    head: "89 (KBS81 forts.)",
    list: [{
        q: "v. Noss",
        c: " eintrag in AnschlussZubringerAus Zeile ohne zeit aber mit anderem Bhf als zeile eigentlich hat",
        BLOCK: { Standard:  id<Block2Zelle>(  { scope: Zelle, AnschlussZubringerAb: {Bhf: Nossen } } ) }
    }, {
        q: "v. Leisn.",
        c: " eintrag in AnschlussZubringerAus Zeile ohne zeit aber mit anderem Bhf als zeile eigentlich hat",
        BLOCK: { Standard:  id<Block2Zelle>(  { scope: Zelle, AnschlussZubringerAb: {Bhf: Leisnig } } ) }
    }, {
        q: "Nur Werktags",
        BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }]
},
{
    head: "89 Waldheim Kriebethal extratabelle",
    list: [
        {
            q: "Nur Sonn- und Festtags  II-III Kl",
            c: "Waldheim Kriebethal wurde nur im sommer am WE im Personenverkehr bedient !!!"
            + "Komplette Tabelle mitten drin -> auslagern in untertabelle!!!",
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3 } ) }
        }]
},
  
{
    head: "89 fkb81a Oschatz Strehla",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II u III Klasse",
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];

var x90: page[] = [{
    head: "90 (KBS82)",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn und festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "Rueckfahrk. Leipz-Grimma ueb Wurzen oder Naunhof", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, AllgemeineInfo: AllgemeineInfo.Rueckfahrk_Leipz_Grimma_ueb_Wurzen_oder_Naunhof } ) }
    }, {
        q: "Umwegkarten Wurzen-Borsdorf-Grossbothen und umgek. zu Fahrk. nach Grossboth. etc. ueb. Nerchau",// global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, AllgemeineInfo: AllgemeineInfo.Umwegkarten_Wurzen_Borsdorf_Grossbothen_und_umgek_zu_Fahrk_nach_Grossboth_etc_ueb_Nerchau } ) }
    }
        // TODO Fussuebergang eigener Zeilentyp !!!
        , {
        q: "Sonn und festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }]
}];

var x91: page[] = [{
    head: "91",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn und festtags",
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
    }, {
        q: "Nur am 1. Mittw. jed. Mon., demnach i.d. Nacht v.2/3mai, 6/7 juni, 4/5 juli, 1/2 aug. u 5/6 Sept",
        BLOCK: { Standard: { scope: Zug, Fahrtage: ersterMittwochJedenMonatsDH2mai6juni4juli1august5september } }
    }, {
        // TODO Fussuebergang in eigener Zeile
        q: "+Sonn und festtags",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Grossbothen, TZgueltigBisBhf: Rochlitz}, Fahrtage: SonnUndFesttags } ) }
    }]
}];

var x92: page[] = [{
    head: "92 (Wechselburg-chemnitz erst 1902 eroeffnet)",
    list: []
}];


var x93: page[] = [{
    head: "93",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "II-IV Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }, {
        q: "Nur Sonn- und Festtags mit IIuIII Kl", //nicht taegl, Iv kl in sachsen eh nicht am sonn+festtag (erst 1908)
        BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags, Klasse: Kl2bis3 } }
    }, {
        q: "+Zug 5584 haelt Sonn u Festtags auch in Roedlitz",
        BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, haeltAuchIn: Rödlitz } }
    }, {
        q: "II-III Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];


var x94: page[] = [{
    head: "94 (KBS85f)",
    list: [{
        q: "Saechs. Staatsb.", //global
        BLOCK: { Standard:   id<Block2EntryTabelle >(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn und festtags", //passend
        BLOCK: { Standard:   id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Sonn und festtags im juni, juli und august", //passend
        BLOCK: { Standard:   id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttagsInJuniJuliUndAugust } ) }
    }, {
        q: "+Zug 1394 faehrt im Mai und September taeglich, in der uebrigen Zeit nur werktags",
        BLOCK: { Standard:   id<Block2EntryZug>(  { scope: Zug, RedundanteZugNr: ["1394"], Fahrtage: MaiUndSeptemberTaeglichSonstWerktags } ) }
    }, {
        q: "S.Stb.", //global
        BLOCK: { Standard:   id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "II u III Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }, {
        q: "++nur Sonn und festtags", //wa in zugnummernzeile! nicht klassenzeile, 
        BLOCK: { Standard:   id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }
    ]
}];


var x95: page[] = [{
    head: "95 (fkb85-88)",
    list: [
        {
            q: "Saechs. Staatsb.", //global
            BLOCK: { Standard:   id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
        }, {
            q: "(rund) von Annaberg bis Erdmansdorf nur montags, von Erdmansdorf bis chemnitz an allen werktagen",
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags }), 
                    Abweichend: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Annaberg, TZgueltigBisBhf: Erdmannsdorf}, Fahrtage: Montags } ) }
        }, {
            q: "Sonn und festtags", //passend
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
        }, {
            q: "Sonn und festtags im juni, juli und august",
            BLOCK: { Standard:  id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttagsInJuniJuliUndAugust } ) }
        }, {
            q: "+ Zug 1395 verkehrt im Mai und septembertaeglich, in der uebrigen Zeit nur Werktags.",
            BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, RedundanteZugNr: ["1395"], Fahrtage: MaiUndSeptemberTaeglichSonstWerktags } ) }
        }, {
            q: "Saechs. Staatsb.", //global
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
        }, {
            q: "Alle Zuege II u III Kl", //global
            BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
        }]
}];


var x96: page[] = [{
    head: "96",
    list: [
        {
            q: "Saechs. Staatsb.", //global
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
        }, {
            q: "**Von chemnitz bis Floeha Zug 1009 mit I-IV Kl",
            BLOCK: { Standard:  id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Chemnitz, TZgueltigBisBhf: Flöha }, ZugNr: "1009", Klasse: Kl1bis4 } ) }
        }, {
            q: "Saechs. Staatsb.", //global
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
        }, {
            q: "II bis IV Kl", //global
            BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
        }]
}];

var x97: page[] = [{
    head: "97 ",
    list: [{
        q: "Saechs Staatsb", //global
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn und Festtags", //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "!Umsteigen in Floeha in Zug1018 (s.Nr.54)  //Anschluss_zubringer_aus, der aber intern ein umsteigen fordert wenn man aus dresden kommt",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, AnschlussZubringerAb: { mitUmstiegIn: Flöha, mitUmstiegInZugNr: "1018" } } ) }
    }, {
        q: "+Mit Umsteigen in floeha unter Benutzung der Zuege 1069/107 (s.Nr.11 u 54)",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, AnschlussWeiterNach: { mitUmstiegIn: Flöha, mitUmstiegInZugNr: [1069, 107], mitUmstiegSieheKbs: [11, 54] } } ) }
    }, {
        q: "SaechsStaatsb //global",
        BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "II u III Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
    }]
}];


var x98: page[] = [{
    head: "98 (FKB94f)",
    list: [{
        q: "Saechs staatsb",// //global
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Nur Sonn- und Festtags", //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Nur Werktags",// //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }, {
        q: "Nur am Werkktage vor Sonn- und Festtag.", //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: WerktageVorSonnUndFesttagen } ) }
    }, {
        q: "Saechs. Staatsb.",// //global
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "II-IV Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }]
}];


var x99: page[] = [{
    head: "99 (FKB94f rueck)",
    list: [{
        q: "Saechs. Staatsb.",// //global
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "Sonn- und Festtags", //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }, {
        q: "Nur Werktags",// //passend
        BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
    }, {
        q: "! ab Zwoenitz nur II.III.Kl.",
        BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Zwönitz}, Klasse: Kl2bis3 } ) }
    }, {
        q: "II-IV Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }
    ]
}];



var x100: page[] = [{
    head: "100 (FKB96 hin)",
    list: [{
        q: "S. Stb.",// //global
        BLOCK: { Standard: id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
    }, {
        q: "II u III Kl", //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    }, {
        q: "Nur Werktags.", //passend
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: Werktags } ) }
    }, {
        q: "Nur Sonn- und Festtags",
        BLOCK: { Standard: id<Block2EntryZug>(  { scope: Zug, Fahrtage: SonnUndFesttags } ) }
    }
    ]
}];


var x101: page[] = [{
    head: "101 (FKB98)",
    list: [
        {
            q: "Saechs. Staatsb.",// //global
            BLOCK: { Standard:  id<Block2EntryTabelle>(  { scope: Tabelle, Verwaltung: "Saechs" } ) }
        }, {
            q: "s.a.94", //geschweifte Klammer in header
            BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Muldenberg, endZeileBhf: Zwota }, AllgemeineInfo: AllgemeineInfo.SieheUnter94 } }
        }, {
            q: "**II.-IV.Kl.", //geschweifte Klammer
            BLOCK: { Standard:  check<BlockEntryZeilenFolge>(  { scope: { kind: "ZeilenFolge", startZeileBhf: Zwota, endZeileBhf: Klingenthal }, Klasse: Kl2bis4 } ) }
        }, {
            q: "*Werktags", //zeit f anschluss nach in
            BLOCK: { Standard: { scope: Zelle, GeltungsTag: Werktags } }
        }, {
            q: "s.a.94", //geschweifte Klammer in header
            c: "kein platz fuer regulaere klassenzeile unter zugnr, daher ganzer block zugewiesen",
            BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Zwota, endZeileBhf: Muldenberg }, AllgemeineInfo: AllgemeineInfo.SieheUnter94 } }
        }, {
            q: "**II.-IV.Kl.", //geschweifte Klammer
            BLOCK: { Standard: { scope: { kind: "ZeilenFolge", startZeileBhf: Klingenthal, endZeileBhf: Zwota }, Klasse: Kl2bis4 } }
        }


    ]
}];








// ab hier schon gedruckt
var x102: Array<page> = [
    {
        head: "102 (FKB99)",
        list: [
            {
                q: "Saechs Staatsb", //global   
                BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Verwaltung: "Saechs" } ) }
            }, {
                q: "nach Stollberg", //verlasse KBS
                BLOCK: { Standard: { scope: Zug, verlasseKbsNach: Stollberg } }
            },  {
                q: "(rund) Zug 1961",
                BLOCK: { Standard: { scope: Zug, ZugNr: 1961 } }
            },{
                q: "? Zug 1963",
                BLOCK: { Standard: { scope: Zug, ZugNr: 1963 } }
            }, {
                q: "Sonn und Festtags", //passend
                BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
            }, {
                q: "Nur Werktags.", //passend
                BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
            }, {
                q: "Pfeil", //Anschluss wird erreicht
                BLOCK: { Standard: { scope: Zelle, PfeilStart: 1 } }
            }, {
                q: "Pfeil", //Anschluss wird erreicht
                BLOCK: { Standard: { scope: Zelle, PfeilZiel: 1} }
                 }, {
                      q: " *Zug2041 II-IV",
                      BLOCK: { Standard: { scope: Zug, ZugNr: 2041, Klasse: Kl2bis4 } }
                    }
        ]
    }];


var x103: Array<page> = [{
    head: "103.99",
    list: [
        {
            q: "** Zug 218 I.-III.",
            //in klassenzeile header
            BLOCK: { Standard: { scope: Zug, ZugNr: 218, Klasse: Kl1bis3 } }
        }, {
            q: "Sonn- und festtags", //passend
            BLOCK: { Standard: { scope: Zug, Fahrtage: SonnUndFesttags } }
        }, {
            q: "Nur werktags", //passend
            BLOCK: { Standard: { scope: Zug, Fahrtage: Werktags } }
        }, {
            q: "+Ab Zwickau Zug 2064 II.-IV.",
            BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Zwickau}, ZugNr: 2064, Klasse: Kl2bis4 } ) }                       //gueltigAbBhf muss von validierer gegen bahnhof geprüft werden
        }, {
            q: "!Ab Zwickau Zug 2054 II.-IV.",
            BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Zwickau}, ZugNr: 2054, Klasse: Kl2bis4 } ) }                        //gueltigAbBhf muss von validierer gegen bahnhof geprüft werden
        }, {
            q: "(rund) Ab Zwickau Zug 2060 II.-IV.",
            BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Zwickau}, ZugNr: 2060, Klasse: Kl2bis4 } ) }        //gueltigAbBhf muss von validierer gegen bahnhof geprüft werden
        }, {
            q: "von Stollberg", //aus anderer KBS
            BLOCK: { Standard: { scope: Zug, erreicheKbsAus: Stollberg } }
        }, {
            q: "**Zug 1996", //geschweifte klammer
            BLOCK: { Standard: id<Block2EntryTeilZug>( { scope: {kind:"TeilZug", TZgueltigAbBhf: Schlettau, TZgueltigBisBhf: Annaberg}, ZugNr: 1996 } ) }
        }
    ]
}];


var x104: Array<page> = [{
    head: "104",
    list: [{
        q: "Saechs. Staatsb.",
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Verwaltung: "Saechs" } ) }
    }, {
        q: "Alle Zuege II IV Klasse",  //global
        BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
    },
    {
        q: "*Sonn und Festtags",
        c: "//*644 Anschluss nur sonntags sozusagen",
        BLOCK: { Standard: id<Block2Zelle>(  { scope: Zelle, GeltungsTag: SonnUndFesttags } ) } //sonst leer
    }
    ]
}];


var x105: Array<page> = [{
    head: "105",
    list: [
        {
            q: "S. Staatsb.",
            BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Verwaltung: "Saechs" } ) }
        },
        {
            q: "Alle Zuege II.-IV.Kl.",
            BLOCK: { Standard:  check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis4 } ) }
        },
        {
            q: "*Sonn und festtags: 830",
            c: "//anschluss zubringer aus: geaenderte Zeit",
            BLOCK: { Standard: {}, Abweichend: { scope: Zelle, GeltungsTag: SonnUndFesttags, AbfahrtsZeit: HN830 } } //zubringer aus schlettau faehrt dort sonntags 830
        },
        {
            q: "Alle Zuege II u III Kl",
            BLOCK: { Standard: check<Block2EntryScGlobal>(  { scope: Global, Klasse: Kl2bis3 } ) }
        },
        {
            q: "+Direkter Wagen zwischen Werdau und Karlsbad",
            BLOCK: { Standard: { scope: Zug, DirekterWagen: [Werdau, Karlsbad] } }
        }
    ]
}];

// 106(FKB102=Hof-Muenchen Bay. Stsb.)



/*


ideen
Zeitaenderung:
SonnUndFeiertagsZeit
VerkehrtSonntags
VerkehrtErstenMittwochImMonat
...

zeitundortsaenderung //fuer anschluss: sonntag anderer anschluss
auskbsaenderung
zugverkehrt

*/

var xall:page[] = [];
var pagelistlist = [                x24,x25,x26,x27,x28,x29,
                    x30,x31,x32,x33,x34,x35,x36,x37,x38,x39,
                    x40,x41,x42,x43,x44,x45,x46,x47,x48,x49,
                    x50,x51,x52,x53,x54,x55,x56,x57,x58,x59,
                    x60,x61,x62,x63,x64,x65,x66,x67,x68,x69,
                    x70,x71,x72,x73,x74,x75,x76,x77,x78,x79,
                    x80,x81,x82,x83,x84,x85,x86,x87,x88,x89,
                    x90,x91,x92,x93,x94,x95,x96,x97,x98,x99,
                    x100,x101,x102,x103,x104,x105
               
                    ];

pagelistlist.forEach((xl)=>{
    xall = xall.concat(xl);
});


var xalt:page[] = [];

[x102,x103,x104,x105].forEach((xl)=>{
    xalt = xalt.concat(xl);
});


var statistics = function (input: page[]) {
    console.log("do statistics");
    // find all scopekeys at runtime
    let scopekeys: { [sc: string]: number } = {};
    let useds:{[sc:string]: {[prop:string]:number}} = {};

    input.forEach((p: page) => {
        p.list.forEach((ent:entry) => { 
            type lll =  ("Standard" | "Abweichend" | "Alternative");
            ["Standard", "Abweichend", "Alternative"].forEach((saa:lll) => {
                let Block: { [key in lll ]?: any} = ent.BLOCK; 
                if (Block[saa]) {
                    if ((Block[saa] as any).scope !== undefined) {
                        let b: Block2Entry = Block[saa] as Block2Entry;
                        let currentscope = b.scope.kind;
                        if (scopekeys[b.scope.kind] === undefined) {
                            scopekeys[b.scope.kind] = 1;
                        } else {
                            scopekeys[b.scope.kind]++;
                        }
                        // stats
                        if (useds[currentscope] === undefined){
                            useds[currentscope] = {};
                        }
                        Object.keys(b).forEach((propkey)=>{

                            if (useds[currentscope][propkey] === undefined){
                                useds[currentscope][propkey] = 1;
                            }else{
                                useds[currentscope][propkey]++;
                            }
                        });

                    }
                }
            });
        });
    });

    // add used keys for every scopekey


    console.log(scopekeys);
    console.log(useds);
};

console.log("execute statistics");
statistics(xall);
console.log("teilstatistik region schwarzenberg :");

statistics(xalt);

