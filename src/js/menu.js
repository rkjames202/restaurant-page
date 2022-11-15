export default loadInfo;
import DeluxeMeal from '../img/deluxe.jpg'
import KidsMeal from '../img/kids.jpg'
import FamilyMeal from '../img/family.jpg'

function loadInfo(){
   const info = document.querySelector('.info');
   info.appendChild(loadItems());
}

/**
 * Add pictures to each menu item, add styling
 * 
 */
function loadItems(){
    let entrees = [{
                 name: 'Cheeseburger Deluxe Supreme Meal',
                 price: '$6.99',
                 description: 'One of the best meal deals we have to offer, served with fries and a drink of choice',
                 picture: DeluxeMeal
                 }, 
                {
                 name: "Deluxe Kid's Meal",
                 price: '$4.99',
                 description: 'Our kids meal comes with our patented miniature burger small fries, drink, and a toy.',
                 picture: KidsMeal
                },
                {
                 name: "Family Pack",
                 price: '$99.99',
                 description: 'Enough food to feed the whole family and then some. Comes with 12 of our signature burger with toppings of choice, 12 side of your choice and 12 of our world famous milkshakes.',
                picture: FamilyMeal
                   },]
    
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    entrees.forEach((entree) => {
        let container = document.createElement('div');
        container.classList.add('menu-item');

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        
        for (let field in entree){
            let itemField = document.createElement('p');

            if(field !== 'name' && field !== 'picture'){
                itemField.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ` + entree[field]; 
            } else if (field === 'name'){
                itemField.innerText = entree[field];
            } 
           
            itemInfo.appendChild(itemField);
        }

        container.appendChild(itemInfo);

        const itemImage = new Image();
        itemImage.src = entree.picture;

        const imgWrap = document.createElement('div');
        imgWrap.classList.add('menu-img-wrap')
        imgWrap.appendChild(itemImage);

        container.appendChild(imgWrap);

        menu.appendChild(container);
    });

    return menu;
}