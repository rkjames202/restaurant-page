import '../style.css';
import {default as homePage, reloadPage} from './pageLoad.js'
import {default as menuPage} from './menu.js'
import {default as contactPage} from './contact.js'

homePage();
addTabListeners();

/**
 * Commit along the way
 * Include photo credit in footer
 */

function addTabListeners(){
    const info = document.querySelector(".info");
    const homeTab = document.querySelector(".home-tab");
    const menuTab = document.querySelector(".menu-tab");
    const infoTab = document.querySelector(".info-tab");

    homeTab.onclick = () => {
        reloadPage();
        activeTab(homeTab);
    };

    menuTab.onclick = () => {
        info.replaceChildren();
        menuPage();
        activeTab(menuTab);
    }

    infoTab.onclick = () => {
        info.replaceChildren();
        contactPage();
        activeTab(infoTab);
    }
}

function activeTab(currTab){
    const tabs = document.querySelectorAll("[class$=-tab]");

    tabs.forEach((tab) => {
        if(tab != currTab){
            tab.classList.remove("active-tab");
        } else {
            tab.classList.add("active-tab");
        }

        window.location.href = "#content"
    });
}
