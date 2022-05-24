import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import Sub_Menu from "./Button/LoadButton";
import Change from "./Roll/Change";
const root = [createRoot(document.getElementById('tytul'))];
root[0].render(App())


Sub_Menu(document);

