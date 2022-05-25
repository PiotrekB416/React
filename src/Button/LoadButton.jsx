import React from "react";
import { createRoot } from "react-dom/client";
import * as Menu_Button from "./Change";
import sleep from "../sleep";

const Sub_Menu = (doc) => {
    let Menu = Object.values(Menu_Button);
    const b = doc.getElementById("Sub-Button");
    const m = doc.getElementById('Menu-Button');
    const broot = createRoot(document.getElementById('broot'))

    let bp = 0;
    b.addEventListener("click", async () => {
        if(bp != 0){
            return;
        }
        bp = 1;
        async function rend() {
            if (Menu[1] == 0) {
                Menu[1] = 1;
                rot(0, b, m);
                broot.render(Menu[0](0));
                await sleep(100);
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
        }
        await rend();
        await sleep(10)

        Menu[2] = 0;
        bp = 0;
    });

    let mp = 0;
    m.addEventListener("click", async () => {
        if(mp != 0){
            return;
        }
        mp = 1;
        async function rend(){
            if (Menu[2] == 0) {
                Menu[2] = 1;
                rot2(0, b, m);
                broot.render(Menu[0](0));
                await sleep(100);
                broot.render(Menu[0]("MMB"));
                await sleep(1);
                cha2(0, doc);

            }
            else if (Menu[2] == 1) {
                Menu[2] = 0;
                rot2(1, b, m);
                await cha2(1, doc);

                broot.render(Menu[0](0));
            }
        }
        await rend();
        await sleep(10);
        Menu[1] = 0;
        mp = 0;
    });
}

let rots = 200;

async function rot(a, b, m) {
    async function addM() {
        m.classList = "";
        m.classList = "rotcclr";
        await sleep(rots);
        m.classList = "";
        m.classList = "rot0";
    }
    if (a == 0) {

        b.classList = "";
        b.classList = "rotcl";

        if (!m.classList.contains("rot0")) {
            addM();
        }
        await sleep(rots);
        b.classList = "";
        b.classList = "rot90";

    } else if (a == 1) {
        b.classList = "";
        b.classList = "rotclr";
        await sleep(rots);
        b.classList = "";
        b.classList = "rot0";
    }

}

async function rot2(a, b, m) {
    async function addB() {
        b.classList = "";
        b.classList = "rotclr" ;
        await sleep(rots);
        b.classList = "";
        b.classList = "rot0";
    }
    if (a == 0) {
        m.classList = "";
        m.classList = "rotccl";
        if (!b.classList.contains("rot0")) {
            addB();
        }
        await sleep(rots);
        m.classList = "";
        m.classList = "rot-90";
    } else if (a == 1) {
        m.classList = "";
        m.classList = "rotcclr";
        await sleep(rots);
        m.classList = "";
        m.classList = "rot0";
    }
}

async function cha(a, doc) {
    let st = 10;
    if (a == 0) {
        for (let i = 1; i < 4; i++) {
            doc.getElementById('broot' + i).classList.remove("hidden");
            await sleep(st);
        }
    } else if (a == 1) {
        for (let i = 3; i > 0; i--) {
            doc.getElementById('broot' + i).classList.add("hidden");
            await sleep(st);
        }
    }
}

async function cha2(a, doc) {
    let st = 10;
    if (a == 0) {
        for (let i = 1; i < 10; i++) {
            doc.getElementById('brootM' + i).classList.remove("hidden");
            await sleep(st);
        }
    } else if (a == 1) {
        for (let i = 9; i > 0; i--) {
            doc.getElementById('brootM' + i).classList.add("hidden");
            await sleep(st);
        }
    }
}

export default Sub_Menu;
