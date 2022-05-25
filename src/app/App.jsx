import React from "react";

const App = () => {
    return(
        <h1 style={{fontFamily: 'Lato, sans-serif'}}>
            <a href="index.html" id="Main-Href">
            7 Cudów Świata
            </a>
        </h1>
    );
}

const Opinion = () => {
    return (
        <div id="footerdiv">
            <a href=""  id="footerHref">
                Podziel się opinią o stronie
            </a>
        </div>
    );
}

export {App, Opinion}
