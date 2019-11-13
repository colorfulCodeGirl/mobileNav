const navBar = document.querySelector('.wrapper');
const btns = navBar.querySelectorAll('.button');

const changeBodyBackground = (newBtn) => {
  const typeOfBtn = newBtn.classList[1];
  const body = document.querySelector('body');
  switch (typeOfBtn) {
    case 'home':
      body.style.backgroundColor = '#5b37b7';
      break;
    case 'hart':
      body.style.backgroundColor = '#ea4c89';
      break;
    case 'search':
      body.style.backgroundColor = '#e6a919';
      break;
    case 'user':
      body.style.backgroundColor = '#1194aa';
      break;
    default:
      break;
  }
};

const openBtn = (newBtn) => {
  newBtn.style.transitionDelay = '2s';
  newBtn.classList.remove('blink');
  newBtn.classList.add('active');
  changeBodyBackground(newBtn);
  newBtn.style.transitionDelay = '.07s';
};

function changeBtn() {
  const current = navBar.querySelector('.active');
  const newBtn = this;
  newBtn.classList.add('blink');
  current.classList.remove('active');
  setTimeout(() => openBtn(newBtn), 100);
}

btns.forEach((btn) => btn.addEventListener('click', changeBtn));
