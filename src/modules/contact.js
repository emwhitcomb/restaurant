function createContact() {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'info-container');
    const map = document.createElement('img');
    map.setAttribute('alt', 'map');
    map.setAttribute('id', 'location');
    map.src = './images/map.jpg';
    const address = document.createElement('div');
    address.setAttribute('id', 'address');
    const street = document.createElement('div');
    street.setAttribute('id', 'street');
    street.textContent = '708 Bella Ave';
    const cityState = document.createElement('div');
    cityState.setAttribute('id', 'city-state');
    cityState.textContent = 'Any City, WA 90000';
    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone');
    phone.textContent = 'Phone: (555)123-5555';
    const schedule = document.createElement('div');
    schedule.setAttribute('id', 'schedule');
    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    hours.textContent = 'Hours';
    const openHours = document.createElement('div');
    openHours.textContent= 'Tue - Sun: 11:00 AM - 10:00 PM';
    const closedHours = document.createElement('div');
    closedHours.textContent= 'Mon: Closed';

    contact.appendChild(map);
    contact.appendChild(address);
    address.appendChild(street);
    address.appendChild(cityState);
    contact.appendChild(phone);
    contact.appendChild(schedule);
    schedule.appendChild(hours);
    schedule.appendChild(openHours);
    schedule.appendChild(closedHours);

    return contact;
  } 
  
  function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    const contact = createContact();
    main.appendChild(contact);
  }
  
  export default loadContact;