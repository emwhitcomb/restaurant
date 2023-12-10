import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function createBanner() {
    const banner = document.createElement('div');
    banner.setAttribute('id', 'banner');
    const restaurant = document.createElement('div');
    restaurant.setAttribute('id', 'restaurant');
    restaurant.textContent = "Rutherford's";
    const tabContainer = document.createElement('div');
    tabContainer.setAttribute('id', 'tab-container');
    const home = document.createElement('div');
    home.setAttribute('id', 'home-tab');
    home.classList.add('tab');
    home.textContent = 'Home';
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-tab');
    menu.classList.add('tab');
    menu.textContent = 'Menu';
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact-tab');
    contact.classList.add('tab');
    contact.textContent = 'Contact';
    const motto = document.createElement('div');
    motto.setAttribute('id', 'motto');
    motto.textContent = '- Where savory meets comfort';

    banner.appendChild(restaurant);
    banner.appendChild(tabContainer);
    banner.appendChild(motto);

    tabContainer.appendChild(home);
    tabContainer.appendChild(menu);
    tabContainer.appendChild(contact);

    return banner;
}

function navEvents() {
    const homeBtn = document.getElementById('home-tab');
    const menuBtn = document.getElementById('menu-tab'); 
    const contactBtn = document.getElementById('contact-tab');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

function createMain() {
    const main = document.createElement('div')
    main.setAttribute('id', 'main');
    return main;
  }

function init() {
    const content = document.getElementById('content');
    const banner = createBanner();
    const main = createMain();
    content.appendChild(banner);
    content.appendChild(main);
    loadHome();
    navEvents();
}

init();