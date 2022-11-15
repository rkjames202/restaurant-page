import Icon from "../img/burger.png"
import Photo from "../img/gobler-s-knobb.jpg"
export default loadPage;
export {reloadPage};

function loadPage(){
    const body = document.querySelector('body');
    
    const content = document.querySelector('#content');

    loadTabIcon();
    content.appendChild(loadTopWrap());
    content.appendChild(loadBackground());
    content.appendChild(loadInfo());


    body.appendChild(content);
}

function loadTabIcon(){
    const link = document.createElement('link');
    const head = document.querySelector('head');

    link.rel = 'icon';
    link.href = Icon;

    head.appendChild(link);
}

function reloadPage(){
    const info = document.querySelector('.info');
    
    info.replaceChildren();

    info.appendChild(loadTestimonial());
    info.appendChild(loadSchedule());
    info.appendChild(loadLocation());
}

function loadBackground(){
    const background = document.createElement('div');   
    background.classList.add('bg-image');

    return background;
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
    headerTitle.innerText = "Burger Shop";
    header.appendChild(headerTitle);

    return header;
}

function loadTabs(){
    const tabs = document.createElement('div');
    tabs.classList.add("tabs");

    const homeTab = document.createElement('div');
    homeTab.appendChild(document.createElement('p')).innerText = "Home";
    homeTab.classList.add("home-tab");
    homeTab.classList.add("active-tab");
    tabs.appendChild(homeTab);
    
    const menuTab = document.createElement('div');
    menuTab.innerText = "Menu";
    menuTab.classList.add("menu-tab");
    tabs.appendChild(menuTab);
    
    const infoTab = document.createElement('div');
    infoTab.innerText = "Contact";
    infoTab.classList.add("info-tab");
    tabs.appendChild(infoTab);

    return tabs;
}

function loadTopWrap(){
    const topWrap = document.createElement('div');
    topWrap.classList.add('top-wrap');

    topWrap.appendChild(loadHeader());
    topWrap.appendChild(loadTabs());

    return topWrap;
}

function loadInfo(){
    const info = document.createElement('div');
    info.classList.add("info");

    info.appendChild(loadTestimonial());
    info.appendChild(loadSchedule());
    info.appendChild(loadLocation());
    
    return info;
}

function loadTestimonial(){
    const testimonial = document.createElement('div');
    const text = document.createElement('p');
    const quotee = document.createElement('p');

    testimonial.classList.add("testimonial");

    text.innerText = 'I can believe burgers like this exits OMG! From the tender beef, fresh toppings and the world famous milkshakes. McDonalds just cannot compete...';
    quotee.innerText =  '- Ronald McDonald \uD83E\uDD21';

    testimonial.appendChild(text);
    testimonial.appendChild(quotee);

    return testimonial;
    
}

function loadSchedule(){
    const hours = document.createElement('div');
    hours.classList.add("hours");

    const hoursTitle = document.createElement('p');
    hoursTitle.innerText = "\uD83D\uDD52 Hours";
    hours.appendChild(hoursTitle);
    
    const hourList = document.createElement('ul');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for(let i = 0; i < 7; i++){
        hourList.appendChild(document.createElement('li')).innerText = `${days[i]}: 8AM - ${8-i}PM`
    };
    hours.appendChild(hourList);

    return hours;
}

function loadLocation(){
    const location = document.createElement('div');
    location.classList.add("location");

    location.appendChild(document.createElement('p'))
                        .innerText = "\uD83C\uDFE0 Location";

    
    location.appendChild(document.createElement('p'))
                        .innerText = "1234 Gobbler's Knob, Pennsylvania";

    const locationPhoto = new Image();
    locationPhoto.src = Photo;
    locationPhoto.alt = "Picture of Gobblers' Knob"
    location.appendChild(locationPhoto);

    return location;
}