export default loadInfo;

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
                 price: '15.99',
                 description: `One of the best meal deals we have to offer, 
                               served with fries and a drink of choice`
                 }, 
                {
                 name: "Deluxe Kid's Meal",
                 price: '7.99',
                 description: `Our kids meal comes with our patented miniature burger
                              small fries, drink, and a toy.`
                },
                {
                 name: "Family Pack",
                 price: '49.99',
                 description: `Enough food to feed the whole family and then some. Comes
                               with 4 of our signature burger with toppings of choice, 4 
                               side of your choice and 4 of our world famous milkshakes.`
                   },]
    
    const menu = document.createElement('div');
    menu.classList.add('menu');

    entrees.forEach((entree) => {
        let container = document.createElement('div');
        container.classList.add('menu-item');
        console.log(entree);
        
        for (let field in entree){
            let itemDetail = document.createElement('p');
            itemDetail.innerText = entree[field];

            container.appendChild(itemDetail);
        }

        menu.appendChild(container);
    });

    return menu;
}