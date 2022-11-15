export default loadPage;

function loadPage(){
    const info = document.querySelector('.info');
    info.appendChild(loadContacts());
}

/**
 * Add contact info header, add image more styling
 * 
 */
function loadContacts(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const contactHeader = document.createElement('p');
    contactHeader.innerText = "Contact Us!"
    contactInfo.appendChild(contactHeader);

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = "\uD83D\uDCDE 444-332-3345";
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.innerText = "\u2709\uFE0F mcdonaldswannabe@outlook.mail";
    contactInfo.appendChild(email);

    contact.appendChild(contactInfo); 

    return contact;
}