function initAboutContent() {
    console.log('initAboutContent()');
    const page = document.querySelector('.page');
    if(page == null) {
        console.error("overlay is null");
        return;
    }   

    const header = document.createElement('h1');
    header.innerHTML = "About";
    header.classList.add("about");
    page.appendChild(header);

    const aboutDescription = document.createElement('p');
    aboutDescription.classList.add('about');
    aboutDescription.innerHTML = "Cafe Mock offers a range a quality yet affordable meals. Located in the beautiful centre of Cheltenham, our warm, family-friendly location creates a comfertable & joyful ambience to enjoy your experience with us and your friends and family."
    page.appendChild(aboutDescription);

}

export default initAboutContent;