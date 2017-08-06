 //// Typen fuer Klassen
 

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



