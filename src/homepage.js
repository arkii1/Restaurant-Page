function initHomeContent() {
    console.log("initHomeContent()");
    const overlay = document.querySelector('.overlay');
    if(overlay == null) {
        console.error("overlay is null");
        return;
    }   

    const header = document.createElement('h1');
    header.innerHTML = "Cafe Mock";
    header.classList.add("homepage-header");
    overlay.appendChild(header);

    const description = document.createElement('p');
    description.innerHTML = "Insert amazing description here";
    description.classList.add("homepage-description");
    overlay.appendChild(description);
}

export default initHomeContent;