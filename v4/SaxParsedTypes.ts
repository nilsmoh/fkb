import { /*EKlassen,*/ TFahrpreisAngabe } from "./SaxBaseTypes";
import { /*IZellenEigenschaft */} from "./SaxInputTypes";

    // stark typisierte, geparste Tabelle - noch unbearbeitet, aber PASSEND getypt   !!!
    export interface SingleDirectionScheduleTyped {
        Quelle: EQuelle;
        Kommentar: string;
        Seite: number; // seite in FKB wie gedruckt
        Ueberschrift: string,
        Route1900: string,
        Klassen: EKlassen,
        Zeilen: Array<TZeile>;

        ZusatzBloecke: Array<TBlockinhaltBaseV2>
    }

    export enum EBahnverwaltung {
        NichtAngegeben,
        KSaechsStsEB
    }


    // Header
    export enum EQuelle {
        FritzscheSommer1900
    }



    

    // ZEILENTYPEN

    // isue tracker 11784 beschreibt algebraische Datentypen
    // BEISPIELE 100a Seite 105
    export enum ZEILE_T {
        ZUGNR = "ZUGNR",
        KLASSEN = "KLASSEN",
        ANSCHLUSS_ZUBRINGER_AB = "ANSCHLUSS_ZUBRINGER_AB", // a.  Karlsbad B.E.B.
        ANSCHLUSS_ZUBRINGER_IN = "ANSCHLUSS_ZUBRINGER_IN", // in  Johanngeorgenstadt  //Ort == Zielort        FROM == Losfahrort
        NORMAL = "NORMAL",                                                 // aus Johanngeorgenstadt
    // ab  Erlabrunn
    // .. Erlabrunn
    // .. in Johanngeorgensatdt
        ANSCHLUSS_WEITER_AB = "ANSCHLUSS_WEITER_AB", // a. Johanngeorgenstadt   //Ort == Abfahrtsort,   NACH == Zielort
        ANSCHLUSS_WEITER_IN = "ANSCHLUSS_WEITER_IN" // in Karlsbad B.E.B.  
    }

    
    export type TNormalZeileEintragBase =  TLeerEintrag | TBlockEintrag | TDickerStrichEintrag | TError | TKlassenEintrag | TZugNrEintrag;

    export type TNormalZeileEintrag = TZeiteintrag | TNormalZeileEintragBase | TKeinHalt | TAnkunftEintrag ;
    export type TZugNummernEintrag  =               TNormalZeileEintragBase;
    export type TKlassenNrEintrag   =              TNormalZeileEintragBase;

  

    export interface TError {
        kind: typeof BLOCK_T.ERROR;
        Grund: string;
    }

    export interface TZugNrZeile {
        kind: typeof ZEILE_T.ZUGNR,
        ZugNummern: Array<TZugNummernEintrag>,
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined
    }

    export interface TKlassenNrZeile {
        kind: typeof ZEILE_T.KLASSEN,
        KlassenNummern: Array<TKlassenNrEintrag>,
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined,    //letzter eintrag
        BlockEintrag: TBlockEintrag | undefined                  // falls in Kopfspalte
    }

    export enum EAnAb {
        An,
        FirstAb,
        FollowAb
    }

   

//region ZEILE

    export type TZeile = TZugNrZeile | TKlassenNrZeile | TNormalzeile | TAnschlussZubringerAbZeile | TAnschlussZubringerInZeile | TAnschlussWeiterAbZeile | TAnschlussWeiterInZeile;

    // KOPF / Header der Normalzeilen
    export interface TNormalzeile {
        kind: typeof ZEILE_T.NORMAL,
        Km: number | undefined;
        BhfTag: StationTicketInfoEntryKpxTagged | null;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        AnAb: EAnAb;
        //ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
        //Lfd: number;
        //Referenz: string | null;
     
        //Via: StationTicketInfoEntryKpxTagged | null;

        Ref: string | null,
        Lfd: number,
        Via: StationTicketInfoEntryKpxTagged[] | null;


        Fahrkarteninfo: any;


    }

    export interface TAnschlussZubringerAbZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_ZUBRINGER_AB, // ZEILE_ANSCHLUSS_AUS,
        BhfTag: StationTicketInfoEntryKpxTagged | null;
        AnschlussNummern: Array<string | number>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        Ref: string | null,
        Lfd: number,
        Via: StationTicketInfoEntryKpxTagged[] | null;
        Fahrkarteninfo: any;
    }

    export interface TAnschlussZubringerInZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_ZUBRINGER_IN, // ZEILE_ANSCHLUSS_AUS,
        BhfTag: StationTicketInfoEntryKpxTagged | null;
        AnschlussNummern: Array<string | number>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        Ref: string | null,
        Lfd: number,

        //ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
        Via: StationTicketInfoEntryKpxTagged[] | null;
        Fahrkarteninfo: any;
    }

    export interface TAnschlussWeiterAbZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_WEITER_AB,
        BhfTag: StationTicketInfoEntryKpxTagged | null;
        AnschlussNummern: Array<string | number>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        Ref: string | null,
        Lfd: number,
        //ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
        Via: StationTicketInfoEntryKpxTagged[] | null;
        Fahrkarteninfo: any;
    }

    export interface TAnschlussWeiterInZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_WEITER_IN, //  ZEILE_ANSCHLUSS_NACH_IN,
        BhfTag: StationTicketInfoEntryKpxTagged | null;
        AnschlussNummern: Array<string | number>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        Ref: string | null,
        Lfd: number,
        //ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
        Via: StationTicketInfoEntryKpxTagged[] | null;
        Fahrkarteninfo: any;


    }

//endregion

    // infos hinter einer zeitzeile
    export interface ZeitZeileZusatzInfo {
        AnschlussNummern: (string | number)[],
        Via: StationTicketInfoEntryKpxTagged[] | null,
        Ortsname: StationTicketInfoEntryKpxTagged | null,
        Fahrpreise: TFahrpreisAngabe,
        Ref: string | null,
        Lfd: number, 
        Valid: boolean,
        Raw: string
    }


    //export interface Fahrkarteninfo

//region ZUSATZINFORMATION
    // enthaelt die mit * oder so angeflanschten Zusatzinformationen


    /*Inhalt eines Erlaeuterungstextes, entweder mit opticalMarker, oder senkrecht in ein en zuglauf geschrieben */
   /*
    export interface TBlockinhaltBase {
        Verweistyp: TVerweisTyp; 
        TextOrt: TTextOrt,

        // TODO this should be changed to new already parsed info
        ZugNrOderKlasse: TBlockInhaltZugnummerOderKlasse;
        Gueltig: TGueltigkeit,
        KbsAbweichung: TKbsAbweichung,  //nach / von
        Fahrtage: TFahrtage,
        PfeilInfo: TPfeilInfo,
        Unbekannt: TBlockInhaltRawUnbekannt | TBlockInhaltRawOk;
        Bahnverwaltung: EBahnverwaltung;
    }
*/


    //region VERWEIS + TEXTORT

   
    
    // ZugNrOderKlasse
    export interface TBlockInhaltZugnummerOderKlasse {
        Zugnr: string | null;
        Klassen: EKlassen;
    }


   

    //// Typen fuer KbsAbweichung
    export type TKbsAbweichung = TKbsAbweichung_Keine | TKbsAbweichung_Aus | TKbsAbweichung_Nach;
    export enum KBS_ABWEICHUNG_T {
        KEINE = "KBS_ABWEICHUNG_KEINE",
        AUS = "KBS_ABWEICHUNG_AUS",
        NACH = "KBS_ABWEICHUNG_NACH"
    }

    export interface TKbsAbweichung_Keine { kind: typeof KBS_ABWEICHUNG_T.KEINE };
    export interface TKbsAbweichung_Aus {
        kind: typeof KBS_ABWEICHUNG_T.AUS;
        bhf: string;
        KBS: string;
        SchonKomplettiert: boolean;
    };               //Validierungsschritt soll das spaeter korrekt eintragen
    export interface TKbsAbweichung_Nach {
        kind: typeof KBS_ABWEICHUNG_T.NACH;
        bhf: string;
        KBS: string;
        SchonKomplettiert: boolean;
    };

    //PFEILINFO
    export type TPfeilInfo = TKeinPfeil | TPfeilStart | TPfeilZiel;
    export const TKEINPFEIL: "TKEINPFEIL" = "TKEINPFEIL";
    export const TPFEIL_START: "TPFEIL_START" = "TPFEIL_START";
    export const TPFEIL_ZIEL: "TPFEIL_ZIEL" = "TPFEIL_ZIEL";
    export interface TKeinPfeil { kind: typeof TKEINPFEIL };
    export interface TPfeilStart { kind: typeof TPFEIL_START; ReferenzKey: string; };
    export interface TPfeilZiel { kind: typeof TPFEIL_ZIEL; ReferenzKey: string; };


    //// Typen fuer Raw
    export const BlockRaw_ok: "BLOCKRAWOK" = "BLOCKRAWOK";
    export const BlockRawUnbekannt: "BLOCKRAWUNBEKANNT" = "BLOCKRAWUNBEKANNT";

    export interface TBlockInhaltRawOk {
        kind: typeof BlockRaw_ok;
    }

    export interface TBlockInhaltRawUnbekannt {
        kind: typeof BlockRawUnbekannt;
        Eingabedaten: any /*IZellenEigenschaft*/;  //TODO change to v2 input
    }


//endregion
