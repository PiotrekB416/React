import React from "react";
import { createRoot } from "react-dom/client";
import {App} from "./app/App.jsx";
import { Opinion } from "./opinion/opinion.jsx";
import Sub_Menu from "./Button/LoadButton";
import Change from "./Roll/Change";

const root = [createRoot(document.getElementById('tytul')), createRoot(document.getElementById('footer'))];
root[0].render(App())
root[1].render(Opinion())

Sub_Menu(document);

