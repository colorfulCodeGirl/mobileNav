const navBar = document.querySelector('.wrapper');

const changeSection = (e) => {
    console.log(e.target);
    const currentlyOpen = navBar.querySelector('.active');
    let openThis;
    if (e.target.nodeName !== 'BUTTON') {
        const newClassName = e.target.classList[0];
        if ( newClassName === 'wrapper') {
            
            return;
         } //skip function, because none off the buttons where clicked 
        openThis = navBar.querySelector(`.${newClassName}`);
    } else {
        openThis = e.target;
    }
    currentlyOpen.classList.remove('active');
    openThis.classList.add('active');
    changeBodyBackground(openThis);
}

const changeBodyBackground = (openThis) => {
    const typeOfButton = openThis.classList[1];
    const body = document.querySelector('body');
    switch (typeOfButton) {
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
    }
}

navBar.addEventListener('click', changeSection);