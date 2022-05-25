import React from "react";

const Change = (f) => {
    if(f == 0){
        return;
    }
    if(f == "SMB"){
        return (
            <ul className="Menu-List">
                <li id="broot1" className="hidden MLL"><a className="MLA Und">Strona Główna</a></li>
                <li id="broot2" className="hidden MLL"><a className="MLA">Informacje</a></li>
                <li id="broot3" className="hidden MLL"><a className="MLA">Zdjęcia</a></li>
            </ul>
        );
    }
    if(f == "MMB"){
        return (
            <ul className="Menu-List">
                <li id="brootM1" className="hidden MLL"><a className="MLA Und">Strona Główna</a></li>
                <li id="brootM2" className="hidden MLL"><a className="MLA">Galeria</a></li>
                <li id="brootM3" className="hidden MLL"><a className="MLA">Wielki Mur Chiński</a></li>
                <li id="brootM4" className="hidden MLL"><a className="MLA">Petra</a></li>
                <li id="brootM5" className="hidden MLL"><a className="MLA">Statua Chrystusa</a></li>
                <li id="brootM6" className="hidden MLL"><a className="MLA">Machu Picchu</a></li>
                <li id="brootM7" className="hidden MLL"><a className="MLA">Chichen Itza</a></li>
                <li id="brootM8" className="hidden MLL"><a className="MLA">Koloseum</a></li>
                <li id="brootM9" className="hidden MLL"><a className="MLA">Tadź Mahal</a></li>
            </ul>
        );
    }
}


let Mstate = 0;
let Sstate = 0;

export {Change, Mstate, Sstate};

