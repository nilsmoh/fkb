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