import './style.css';
import {default as homePage} from './pageLoad.js'
import {default as menuPage} from './menu.js'
import {default as contactPage} from './contact.js'

homePage();
addTabListeners();

//Commit

function addTabListeners(){
    const content = document.querySelector("#content");
    const info = document.querySelector(".info");
    const homeTab = document.querySelector(".home-tab");
    const menuTab = document.querySelector(".menu-tab");
    const infoTab = document.querySelector(".info-tab");

    homeTab.onclick = () => {
        content.replaceChildren();
        homePage();
        addTabListeners();
    };

    menuTab.onclick = () => {
        info.replaceChildren();
        menuPage();
    }

    infoTab.onclick = () => {
        info.replaceChildren();
        contactPage();
    }
}
