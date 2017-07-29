import { /*EKlassen,*/ TFahrpreisAngabe, TEchteZeit } from "./SaxBaseTypes";
import { IZellenEigenschaft } from "./SaxInputTypes";

    // stark typisierte, geparste Tabelle - noch unbearbeitet !!!
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

    export enum EScope {
        //KeineAngabe = 0,
        DefaultZug = 1,   // nur die aktuelle Zugnummer vgl strecke 99
        RestSpalte = 2    // auch darunter stehende Zuege vgl strecke 99
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

    
    export type TNormalZeileEintrag = TZeiteintrag | TLeerEintrag | TBlockEintrag | TKeinHalt | TDickerStrichEintrag | TAnkunftEintrag | TError;



    



    export type TZugNrEintrag = TLeerEintrag | TBlockEintrag | TDickerStrichEintrag | TError;
    export type TKlassenNrEintrag = TLeerEintrag | TBlockEintrag | TDickerStrichEintrag | TError;

    

    export interface TDickerStrichEintrag {  //wWaagerechter BLOCK_DICKERSTRICH  siehe seite 103   Mittweida
        kind: typeof BLOCK_T.DICKERSTRICH;
        BerechneterZugLauf: TZugLaufInfo;
    }

    export interface TAnkunftEintrag  //"Ank." in tabelle
    {
        kind: typeof BLOCK_T.ANKUNFT;
        BerechneterZugLauf: TZugLaufInfo;
    }

    export interface TError {
        kind: typeof BLOCK_T.ERROR;
        Grund: string;
    }






    export interface TZeiteintrag {
        kind: typeof BLOCK_T.ZEITEINTRAG;
        Referenzkey: string | null;
        Schnellzug: boolean;
        Zeit: TEchteZeit;
        BerechneterZugLauf: TZugLaufInfo;

    }

    

    //block der tabelle, meist groesser als 1x1
    export interface TBlockEintrag {
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

    export interface TZugNrZeile {
        kind: typeof ZEILE_T.ZUGNR,
        ZugNummern: Array<TZugNrEintrag>,
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


    // KOPF der Normalzeilen
    export interface TNormalzeile {
        kind: typeof ZEILE_T.NORMAL,
        Km: number | undefined;
        BhfTag: string;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        AnAb: EAnAb;
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
    }

    export interface TAnschlussZubringerAbZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_ZUBRINGER_AB, // ZEILE_ANSCHLUSS_AUS,
        BhfTag: string;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
    }

    export interface TAnschlussZubringerInZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_ZUBRINGER_IN, // ZEILE_ANSCHLUSS_AUS,
        BhfTag: string;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
    }

    export interface TAnschlussWeiterAbZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_WEITER_AB,
        BhfTag: string;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
    }

    export interface TAnschlussWeiterInZeile {
        kind: typeof ZEILE_T.ANSCHLUSS_WEITER_IN, //  ZEILE_ANSCHLUSS_NACH_IN,
        BhfTag: string;
        AnschlussNummern: Array<string>;
        Zeiteintraege: Array<TNormalZeileEintrag>;
        ZeitZeileZusatzInfo: ZeitZeileZusatzInfo | undefined;    //letzter eintrag
    }

//endregion

    // infos hinter einer zeitzeile
    export interface ZeitZeileZusatzInfo {
        AnschlussNummern: string[],
        Ortsname: string,
        Fahrpreise: TFahrpreisAngabe,
        Valid: boolean,
        Raw: string
    }

//region ZUSATZINFORMATION
    // enthaelt die mit * oder so angeflanschten Zusatzinformationen


    /*Inhalt eines Erlaeuterungstextes, entweder mit opticalMarker, oder senkrecht in ein en zuglauf geschrieben */
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

    export interface TBlockinhaltBaseV2{
        Verweistyp: TVerweisTyp; 
        TextOrt: TTextOrt,

        Inhalt: entry
    }

    //region VERWEIS + TEXTORT

    //// Typen fuer Verweis
    export type TVerweisTyp = TVerweisPassend | TVerweisFern | TVerweisEmbedded | TVerweisGlobalDefault;    // | Pfeilstart ? PFEILZIEL ? 

    export enum VERWEIS_T{
        PASSEND = "VERWEIS_PASSEND",
        FERN = "VERWEIS_FERN" ,
        EMBEDDED = "VERWEIS_EMBEDDED",
        GLOBAL_DEFAULT = "VERWEIS_GLOBAL_DEFAULT"
    }


    // in richtiger Spalte, aber mit buchstabe referenziert
    export interface TVerweisPassend {
        kind: typeof VERWEIS_T.PASSEND, // VERWEIS_PASSEND,
        ReferenzKey: string,
        Scope: EScope
    }
    export interface TVerweisFern {
        kind: typeof VERWEIS_T.FERN, // VERWEIS_FERN,
        ReferenzKey: string,            // nur Verweistyp == Fern :  a..r, t..z
        OpticalMarker: string
    }
    export interface TVerweisEmbedded { //direkt 1*1 eingebettet
        kind: typeof VERWEIS_T.EMBEDDED // VERWEIS_EMBEDDED
    }
    // z.b. alle zuege 2u3 klasse,  textort gibt die renderposition an
    export interface TVerweisGlobalDefault {
        kind: typeof VERWEIS_T.GLOBAL_DEFAULT // VERWEIS_GLOBAL_DEFAULT
    }

    
    //// TEXTORT //Text wird in z.b. links neben header geschrieben
    export type TTextOrt = TTextOrtNichtAngegeben | TTextOrtLinksVonHeader | TTextOrtRechtsVonHeader | TTextOrtUnterHeader | TTextOrtGanzeSpalte;
    
    export enum TEXTORT_T {
        NICHTANGEGEBEN = "TEXTORT_NICHTANGEGEBEN",
        LINKSVONHEADER = "TEXTORT_LINKSVONHEADER",
        RECHTSVONHEADER = "TEXTORT_RECHTSVONHEADER",
        UNTERHEADER = "TEXTORT_UNTERHEADER",
        GANZESPALTE = "TEXTORT_GANZESPALTE"
    }

    export interface TTextOrtNichtAngegeben { kind: typeof TEXTORT_T.NICHTANGEGEBEN };
    export interface TTextOrtLinksVonHeader { kind: typeof TEXTORT_T.LINKSVONHEADER };
    export interface TTextOrtRechtsVonHeader { kind: typeof TEXTORT_T.RECHTSVONHEADER };
    export interface TTextOrtUnterHeader { kind: typeof TEXTORT_T.UNTERHEADER };
    export interface TTextOrtGanzeSpalte { kind: typeof TEXTORT_T.GANZESPALTE, UebersprungeneSpalten: number, Spaltenbreite: number };

    //endregion

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
        Eingabedaten: IZellenEigenschaft;
    }


//endregion
