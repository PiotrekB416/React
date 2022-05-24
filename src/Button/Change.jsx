import React from "react";

const Change = (f) => {
    if(f == 0){
        return;
    }
    if(f == "SMB"){
        return (
            <ul className="Menu-List">
                <li id="broot1" className="hidden"><a className="MLA Und">Strona Główna</a></li>
                <li id="broot2" className="hidden"><a className="MLA">Informacje</a></li>
                <li id="broot3" className="hidden"><a className="MLA">Zdjęcia</a></li>
            </ul>
        );
    }
    if(f == "MMB"){
        return (
            <ul className="Menu-List">
                <li id="broot11" className="hidden"><a className="MLA Und">Strona Główna</a></li>
                <li id="broot22" className="hidden"><a className="MLA">Informacje</a></li>
                <li id="broot33" className="hidden"><a className="MLA">Zdjęcia</a></li>
            </ul>
        );
    }
}


let Mstate = 0;
let Sstate = 0;

export {Change, Mstate, Sstate};

