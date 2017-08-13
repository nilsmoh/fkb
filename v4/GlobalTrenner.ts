

enum ETrennerArt{
    Ort = "Ort",
    Zugnr =  "Zugnr" ,
    Klassenzeile =  "Klassenzeile" ,
    Ab = "Ab",
    An = "An",
    NixWeiter= "NixWeiter"
}

interface TTrennerEintrag {
    kind: BLOCK_T.TRENNER,
    ort?:string,
    art: ETrennerArt
}

//TRENNER hilfe
var ORTPREFIX = "_Ort_";

//TRENNER eigentliche
var CH:TTrennerEintrag = { kind:BLOCK_T.TRENNER, ort:  ORTPREFIX + "Chemnitz" , art: ETrennerArt.Ort} ;   //kind:"KOPFENDE"
var LE :TTrennerEintrag = { kind:BLOCK_T.TRENNER, ort: ORTPREFIX + "Leipzig" , art: ETrennerArt.Ort} ;

var TR : TTrennerEintrag = { kind: BLOCK_T.TRENNER, art: ETrennerArt.NixWeiter};   //  trenner ohne weitere bedeutung



var ab :TTrennerEintrag = { kind:BLOCK_T.TRENNER, art:ETrennerArt.Ab};
var an :TTrennerEintrag = { kind:BLOCK_T.TRENNER, art:ETrennerArt.An}; 
var zn :TTrennerEintrag = { kind:BLOCK_T.TRENNER, art:ETrennerArt.Zugnr}; 
var kl :TTrennerEintrag = { kind:BLOCK_T.TRENNER, art:ETrennerArt.Klassenzeile};

