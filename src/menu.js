function initMenuContent() {
    console.log("initMenuContent()");
    const overlay = document.querySelector('.overlay');
    if(overlay == null) {
        console.error("overlay is null");
        return;
    }  
    createMenu(overlay);
}


function createMenu(overlay) {
    appendHeader(overlay);

    appendDivider(overlay);

    const item1Header = 'The Boss Breakfast';
    const item1Description = 'Bacon, sausage, hog’s pudding, mushrooms, hash browns, roasted tomato, baked beans,scrambled eggs, two slices of toast.';
    const item1Price = '£12.85';
    appendMenuItem(item1Header, item1Description, item1Price, overlay);

    appendDivider(overlay);

    const item2Header = 'The Veggie Boss';
    const item2Description = 'Scrambled eggs, hash browns, sweetcorn fritter, roasted tomato, mushroom, seasonal greens, baked beans, two slices of toast.';
    const item2Price = '£11.85';
    appendMenuItem(item2Header, item2Description, item2Price, overlay);

    appendDivider(overlay);

    const item3Header = 'The Vegan Boss';
    const item3Description = 'Scrambled tofu, hash browns, sweetcorn fritter, roasted tomato, mushrooms, seasonal greens, baked beans, two slices of toast.';
    const item3Price = '£11.85';
    appendMenuItem(item3Header, item3Description, item3Price, overlay);

    appendDivider(overlay);
}

function appendHeader(overlay) {
    const header = document.createElement('h1');
    header.classList.add('menu-item');
    header.innerHTML = "Menu";

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('menu-item');
    headerDiv.appendChild(header);

    overlay.appendChild(headerDiv);
}

function appendDivider(overlay) {
    const divider = document.createElement('hr');
    divider.classList.add('menu-item');
    overlay.appendChild(divider);
}

function appendMenuItem(header, descrption, price, overlay) {
    const item = document.createElement('div');
    item.classList.add('menu-item');
    const itemHeader = document.createElement('h2');
    itemHeader.classList.add('menu-item');
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('menu-item');
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item');

    item.appendChild(itemHeader);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice);

    itemHeader.innerHTML = header;
    itemDescription.innerHTML = descrption;
    itemPrice.innerHTML = price;

    overlay.appendChild(item);

}

export default initMenuContent;