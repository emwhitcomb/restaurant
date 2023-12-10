function createAppetizers() {
    const appetizers = document.createElement('div');
    appetizers.classList.add('category');
    appetizers.setAttribute('id', 'appetizer');

    const saladPic = document.createElement('img');
    saladPic.classList.add('food-pic');
    saladPic.setAttribute('alt', 'salad');
    saladPic.src = './images/salad.jpg';
    const crispTitle = document.createElement('span');
    crispTitle.textContent = 'Crisp';

    const crisp = document.createElement('div');
    crisp.classList.add('menu-item');
    crisp.setAttribute('id', 'crisp');
    crisp.appendChild(saladPic);
    crisp.appendChild(crispTitle);

    const dipPic = document.createElement('img');
    dipPic.classList.add('food-pic');
    dipPic.setAttribute('alt', 'dip');
    dipPic.src = './images/dips.jpg';
    const savoryTitle = document.createElement('span');
    savoryTitle.textContent = 'Savory';

    const savory = document.createElement('div');
    savory.classList.add('menu-item');
    savory.setAttribute('id', 'savory');
    savory.appendChild(dipPic);
    savory.appendChild(savoryTitle);

    const breadPic = document.createElement('img');
    breadPic.classList.add('food-pic');
    breadPic.setAttribute('alt', 'bread');
    breadPic.src = './images/rolls.jpg';
    const breadTitle = document.createElement('span');
    breadTitle.textContent = 'Bread';

    const basket = document.createElement('div');
    basket.classList.add('menu-item');
    basket.setAttribute('id', 'basket');
    basket.appendChild(breadPic);
    basket.appendChild(breadTitle);

    appetizers.appendChild(crisp);
    appetizers.appendChild(savory);
    appetizers.appendChild(basket);

    return appetizers;
}

function createEntrees() {
    const entrees = document.createElement('div');
    entrees.classList.add('category');
    entrees.setAttribute('id', 'entree');

    const beefPic = document.createElement('img');
    beefPic.classList.add('food-pic');
    beefPic.setAttribute('alt', 'steak');
    beefPic.src = './images/beef.jpg';
    const beefTitle = document.createElement('span');
    beefTitle.textContent = 'Beef';

    const beef = document.createElement('div');
    beef.classList.add('menu-item');
    beef.setAttribute('id', 'beef');
    beef.appendChild(beefPic);
    beef.appendChild(beefTitle);

    const poultryPic = document.createElement('img');
    poultryPic.classList.add('food-pic');
    poultryPic.setAttribute('alt', 'chicken');
    poultryPic.src = './images/chicken.jpg';
    const poultryTitle = document.createElement('span');
    poultryTitle.textContent = 'Poultry';

    const poultry = document.createElement('div');
    poultry.classList.add('menu-item');
    poultry.setAttribute('id', 'poultry');
    poultry.appendChild(poultryPic);
    poultry.appendChild(poultryTitle);

    const fishPic = document.createElement('img');
    fishPic.classList.add('food-pic');
    fishPic.setAttribute('alt', 'fish');
    fishPic.src = './images/fish.jpg';
    const fishTitle = document.createElement('span');
    fishTitle.textContent = 'Fish';

    const fish = document.createElement('div');
    fish.classList.add('menu-item');
    fish.setAttribute('id', 'fish');
    fish.appendChild(fishPic);
    fish.appendChild(fishTitle);

    entrees.appendChild(beef);
    entrees.appendChild(poultry);
    entrees.appendChild(fish);

    return entrees;
}

function createDesserts() {
    const desserts = document.createElement('div');
    desserts.classList.add('category');
    desserts.setAttribute('id', 'dessert');

    const lightPic = document.createElement('img');
    lightPic.classList.add('food-pic');
    lightPic.setAttribute('alt', 'crepes');
    lightPic.src = './images/crepes.jpg';
    const lightTitle = document.createElement('span');
    lightTitle.textContent = 'Light';

    const light = document.createElement('div');
    light.classList.add('menu-item');
    light.setAttribute('id', 'light');
    light.appendChild(lightPic);
    light.appendChild(lightTitle);

    const indulgentPic = document.createElement('img');
    indulgentPic.classList.add('food-pic');
    indulgentPic.setAttribute('alt', 'cheesecake');
    indulgentPic.src = './images/cheesecake.jpg';
    const indulgentTitle = document.createElement('span');
    indulgentTitle.textContent = 'Indulgent';

    const indulgent = document.createElement('div');
    indulgent.classList.add('menu-item');
    indulgent.setAttribute('id', 'indulgent');
    indulgent.appendChild(indulgentPic);
    indulgent.appendChild(indulgentTitle);

    const digestifPic = document.createElement('img');
    digestifPic.classList.add('food-pic');
    digestifPic.setAttribute('alt', 'digestif');
    digestifPic.src = './images/digestif.jpg';
    const digestifTitle = document.createElement('span');
    digestifTitle.textContent = 'Digestifs';

    const digestif = document.createElement('div');
    digestif.classList.add('menu-item');
    digestif.setAttribute('id', 'digestif');
    digestif.appendChild(digestifPic);
    digestif.appendChild(digestifTitle);

    desserts.appendChild(light);
    desserts.appendChild(indulgent);
    desserts.appendChild(digestif);

    return desserts;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-container');
    const appetizerTitle = document.createElement('span');
    appetizerTitle.textContent = 'Appetizers';
    menu.appendChild(appetizerTitle);
    menu.appendChild(createAppetizers());
    const entreeTitle = document.createElement('span');
    entreeTitle.textContent = 'Entrees';
    menu.appendChild(entreeTitle);
    menu.appendChild(createEntrees());
    const dessertTitle = document.createElement('span');
    dessertTitle.textContent = 'Desserts';
    menu.appendChild(dessertTitle);
    menu.appendChild(createDesserts());

    return menu;
}

function loadItem() {
    const item = document.createElement('div');
    item.setAttribute('id', 'item');
    item.textContent = "Boilerplate For Future Menu Items";
    const main = document.getElementById('main');
    main.textContent = '';
    const menu = createMenu();
    main.appendChild(item);
}

function navMenu() {
    const item = document.getElementsByClassName('menu-item');

    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', loadItem);
    }
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    const menu = createMenu();
    main.appendChild(menu);
    navMenu();
}

export default loadMenu;