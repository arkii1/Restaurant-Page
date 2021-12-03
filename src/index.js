import initHomeContent from './homepage'
import initMenuContent from './menu'
import initAboutContent from './about'

init();
let currentPage = 'HOME';

function init() {
    console.log("init()");
    initTemplate();
    initHomeContent();
}

function initTemplate() {
    console.log("initTemplate()");
    // Set up initial background & overlay
    // ============================================
    const bgDiv = document.createElement('div');
    bgDiv.classList.add("background-image");

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add("overlay");
    // ============================================

    // Set up buttons
    // ============================================
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');

    const homeEvent = () => switchPage('HOME');
    const homeButton = initButton('Home', homeEvent);
    const menuEvent = () => switchPage('MENU');
    const menuButton = initButton('Menu', menuEvent);
    const aboutEvent = () => switchPage('ABOUT');
    const aboutButton = initButton('About', aboutEvent);

    buttonDiv.appendChild(homeButton);
    buttonDiv.appendChild(menuButton);
    buttonDiv.appendChild(aboutButton);

    overlayDiv.appendChild(buttonDiv); //maybe could just use overlay div? not sure if it links locally or the link transfers to appended child
    // ============================================

    const page = document.createElement('div'); //bad name
    page.classList.add('page');
    overlayDiv.appendChild(page);

    // Append everything together
    // ============================================
    bgDiv.appendChild(overlayDiv);
    const content = document.getElementById('content');
    content.appendChild(bgDiv);
    // ============================================

    
}

function initButton(name, event){
    const button = document.createElement('button');
    button.innerHTML = name;
    button.setAttribute('id', name);
    button.addEventListener('click', event);
    return button;
}

function switchPage(page) {
    if(page === currentPage)
        return;

    console.log("Switching page to:" + page);

    clearPage();
    if(page === 'HOME') {
        initHomeContent();
        currentPage = 'HOME';
        }
    else if (page === 'MENU') {
        initMenuContent();
        currentPage = 'MENU';
    }
    else if (page === 'ABOUT') {
        initAboutContent();
        currentPage = 'ABOUT';
    }
}

function clearPage() {
    const page = document.querySelector('.page');
    if(page == null) {
        console.error("overlay div is null clearPage()");
        return;
    }
    const childArray = Array.from(page.children);
    for (let i = 0; i < childArray.length; i++) {
        const element = childArray[i];
        element.remove();
    }
}


