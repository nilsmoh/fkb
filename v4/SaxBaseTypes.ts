 //// Typen fuer Klassen
    export enum EKlassen {
        NichtAngegeben,
        Klassen1bis3,
        Klassen2bis3,
        Klassen2bis4,
        Klassen3bis4
    }

    export function assertNever(x: never): never {
            throw new Error("Unexpected object: " + x);
    }

//region FAHRPREIS
     // Fahrpreise hinter ZeitZeile
    export enum FAHRPREIS_T{
        KEINE_ANGABE = "FAHRPREIS_KEINE_ANGABE",
        EINFACH = "FAHRPREIS_EINFACH",
        EINFACH_UND_RUECK = "FAHRPREIS_EINFACH_UND_RUECK",
        AB = "FAHRPREIS_AB"
    }
    export type TFahrpreisAngabe = TFahrpreisNix | TFahrpreisEinfach | TFahrpreisEinfachUndRueck | TFahrpreisAb;

    export interface TFahrpreisNix {
        kind: typeof FAHRPREIS_T.KEINE_ANGABE
    }

    export interface TFahrpreisEinfach {
        kind: typeof FAHRPREIS_T.EINFACH,
        Einfach2: number,
        Einfach3: number
    }

    export interface TFahrpreisEinfachUndRueck {
        kind: typeof FAHRPREIS_T.EINFACH_UND_RUECK,
        Einfach2: number,
        Einfach3: number,
        Rueck2: number,
        Rueck3: number
    }

    export interface TFahrpreisAb {
        kind: typeof FAHRPREIS_T.AB,
        AbfahrtsOrt: string
    }
//endregion

//region ZEIT
    export type TEchteZeit = TZeitRoh | TZeit24;

    export enum GesternHeuteMorgen {
        Unbekannt,
        Gestern,
        Heute,
        Morgen
    }

    export enum ETimeValid {
        Nein = 1,        //
        Vorgabe24 = 2,  // 24 irgendwie geparst aus json
        Berechnet24 = 3  // 24 berechnet
    }

    // neuer Zeittyp, der roh und 24 klar trennt
    export const ZEIT_ROH: "ZEIT_ROH" = "ZEIT_ROH";
    export const ZEIT_24: "ZEIT_24" = "ZEIT_24";

    export interface TZeitRoh {
        kind: typeof ZEIT_ROH;
        RohZeit: number;
    }

    export interface TZeit24 {
        kind: typeof ZEIT_24;
        Stunde24: number;
        Minute24: number;
        WelcherTag: GesternHeuteMorgen;
        Valid: ETimeValid;
        src: number;

    }
//endregion

//region FAHRTAGE oder GUELTIGTAGE

     // GUELTIGKEIT
    export type TGueltigkeit = TGueltigImmer | TGueltigNie | TGueltigAb;
    export enum GUELTIG_T {
        IMMER = "GUELTIG_IMMER",
        NIE = "GUELTIG_NIE",
        AB = "GUELTIG_AB"
    }
    interface TGueltigImmer { kind: typeof GUELTIG_T.IMMER };
    interface TGueltigNie { kind: typeof GUELTIG_T.NIE };
    interface TGueltigAb { kind: typeof GUELTIG_T.AB, bhf: string };
    //todo wochentagsabhaengige gueltigkeit etc

    //// Fahrtage
    export type TFahrtage = TFaehrtImmer | TFaehrtWerktags | TFaehrtSonnUndFesttags;
    export enum FAEHRT_T{
        IMMER = "FAEHRT_IMMER",
        WERKTAGS = "FAEHRT_WERKTAGS",
        SONNUNDFESTTAGS = "FAEHRT_SONNUNDFESTTAGS"
    }
    interface TFaehrtImmer { kind: typeof FAEHRT_T.IMMER };
    interface TFaehrtWerktags { kind: typeof FAEHRT_T.WERKTAGS };
    interface TFaehrtSonnUndFesttags { kind: typeof FAEHRT_T.SONNUNDFESTTAGS };


//endregion