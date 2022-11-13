import Icon from "./burger.png"
import Photo from "./gobler-s-knobb.jpg"
export default loadPage;

/**
 * Make div uniform, add styling
 */
function loadPage(){
    const body = document.querySelector('body');
    
    const content = document.querySelector('#content');

    content.appendChild(loadHeader());
    content.appendChild(loadTabs());
    content.appendChild(loadInfo());


    body.appendChild(content);
}

function loadHeader(){
    const header = document.createElement('div');
    header.classList.add("header");
    
    const burgerIcon = new Image();
    burgerIcon.src = Icon;
    burgerIcon.alt = "burger-icon";
    header.appendChild(burgerIcon);

    const headerTitle = document.createElement('p');
    headerTitle.classList.add("h-title");
    headerTitle.innerText = "The Best Burger Shop";
    header.appendChild(headerTitle);

    const emptyDiv = document.createElement('div');
    header.appendChild(emptyDiv);

    return header;
}

function loadTabs(){
    const tabs = document.createElement('div');
    tabs.classList.add("tabs");

    const homeTab = document.createElement('div');
    homeTab.innerText = "Home";
    homeTab.classList.add("home-tab");
    tabs.appendChild(homeTab);
    
    const menuTab = document.createElement('div');
    menuTab.innerText = "Menu";
    menuTab.classList.add("menu-tab");
    tabs.appendChild(menuTab);
    
    const infoTab = document.createElement('div');
    infoTab.innerText = "Contact Info";
    infoTab.classList.add("info-tab");
    tabs.appendChild(infoTab);

    return tabs;
}

function loadInfo(){
    const info = document.createElement('div');
    info.classList.add("info");

    info.appendChild(loadTestimonials());
    info.appendChild(loadSchedule());
    info.appendChild(loadLocation());
    
    return info;
}

function loadTestimonials(){
    const testimonial = document.createElement('div');
    testimonial.classList.add("testimonial");

    const quote1 = document.createElement('div');
    quote1.innerText = `"I can believe burgers like this exits OMG! From the tender beef,
                        fresh topping and the world famous milkshake. McDonald's just can't
                        compete :("

                        - Ronald McDonald`;

    testimonial.appendChild(quote1);

    return testimonial;
    
}

function loadSchedule(){
    const hours = document.createElement('div');
    hours.classList.add("hours");

    const hoursTitle = document.createElement('p');
    hoursTitle.innerText = "Hours";
    hours.appendChild(hoursTitle);
    
    const hourList = document.createElement('ul');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < 7; i++){
        hourList.appendChild(document.createElement('li')).innerText = `${days[i]}: 8AM - 8PM`
    };
    hours.appendChild(hourList);

    return hours;
}

/**
 * 
 * Add picture
 */
function loadLocation(){
    const location = document.createElement('div');
    location.classList.add("location");
    
    location.appendChild(document.createElement('p'))
                        .innerText = "1234 Gobbler's Knob, Pennsylvania";

    const locationPhoto = new Image();
    locationPhoto.src = Photo;
    locationPhoto.alt = "Picture of Gobblers' Knob"
    location.appendChild(locationPhoto);

    return location;
}