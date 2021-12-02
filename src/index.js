import initHomeContent from './homepage'
import initMenuContent from './menu'

init();

function init() {
    console.log("init()");
    initTemplate();
    // initHomeContent();
    initMenuContent();
}

function initTemplate() {
    console.log("initTemplate()");
    const bgDiv = document.createElement('div');
    bgDiv.classList.add("background-image");

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add("overlay");

    bgDiv.appendChild(overlayDiv);
    const content = document.getElementById('content');
    content.appendChild(bgDiv);
}




