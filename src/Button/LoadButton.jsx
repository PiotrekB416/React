import React from "react";
import { createRoot } from "react-dom/client";
import * as Menu_Button from "./Change";
import sleep from "../sleep";

const Sub_Menu = (doc) => {
    let Menu = Object.values(Menu_Button);
    const b = doc.getElementById("Sub-Button");
    const m = doc.getElementById('Menu-Button');
    const broot = createRoot(document.getElementById('broot'))
    
    b.addEventListener("click", async () => {
        
        if (Menu[1] == 0) {
            Menu[1] = 1;
            rot(0, b, m);
            broot.render(Menu[0](0));
            await sleep(10);
            broot.render(Menu[0]("SMB"));
            await sleep(1);
            cha(0, doc);
            
        }
        else if (Menu[1] == 1) {
            Menu[1] = 0;
            rot(1, b, m);
            await cha(1, doc);
            
            broot.render(Menu[0](0));
        }
        Menu[2] = 0;
    });

    m.addEventListener("click", async () => {
        if (Menu[2] == 0) {
            Menu[2] = 1;
            rot2(0, b, m);
            broot.render(Menu[0](0));
            await sleep(10);
            broot.render(Menu[0]("MMB"));
            await sleep(1);
            //cha(0, doc);
            
        }
        else if (Menu[2] == 1) {
            Menu[2] = 0;
            rot2(1, b, m);
            //await cha(1, doc);
            
            broot.render(Menu[0](0));
        }
        Menu[1] = 0;
    });
}

async function rot(a, b, m){
    if(a == 0){
        if(m.style.transform == "rotate(0deg)"){
            for(let i = 1; i < 10; i++){
                b.style.transform = "rotate(" + (10*i + "deg") + ")";
                await sleep(1);
            }
            
        } else {
            for(let i = 1; i < 10; i++){
                b.style.transform = "rotate(" + (10*i + "deg") + ")";
                
                m.style.transform = "rotate(" + (-10*(9-i) + "deg") + ")";
                await sleep(1);
            }
        }
    } else if (a == 1) {
        for(let i = 8; i >= 0; i--){
            b.style.transform = "rotate(" + (10*(i) + "deg") + ")";
            await sleep(1);
        }
    }
    
}

async function rot2(a, b, m){
    if(a == 0){
        if(b.style.transform == "rotate(0deg)"){
            for(let i = -1; i > -10; i--){
                m.style.transform = "rotate(" + (10*i + "deg") + ")";
                await sleep(1);
            }
        } else {
            for(let i = -1; i > -10; i--){
                m.style.transform = "rotate(" + (10*i + "deg") + " )";
                b.style.transform = "rotate(" + (10*(i + 9) + "deg") + ")";
                await sleep(1);
            }
        }
    } else if (a == 1) {
        for(let i = -8; i <= 0; i++){
            m.style.transform = "rotate(" + (10*(i) + "deg") + ")";
            await sleep(1);
        }
    }
}

async function cha(a, doc){
    let st = 10;
    if(a == 0){
        for(let i = 1; i < 4; i++){
            doc.getElementById('broot' + i).classList.remove("hidden");
            await sleep(st);
        }
    } else if (a == 1){
        for(let i = 3; i > 0; i--){
            doc.getElementById('broot' + i).classList.add("hidden");
            await sleep(st);
        }
    }
}

export default Sub_Menu;