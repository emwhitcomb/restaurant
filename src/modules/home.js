function createHome() {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  const pitch = document.createElement('div');
  pitch.setAttribute('id', 'pitch');
  pitch.textContent = 'An extraordinary dining experience should be more than delicious food and amazing drinks. It should also let you enjoy the warmth of conversation with your guests and forget the world around you. All in a place that makes you feel at home.';
  const quoted = document.createElement('div');
  quoted.setAttribute('id', 'quoted');
  quoted.textContent = '- Ian Rutherford, Proprietor';

  home.appendChild(pitch);
  home.appendChild(quoted);

  return home;
} 

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  const home = createHome();
  main.appendChild(home);
}

export default loadHome;