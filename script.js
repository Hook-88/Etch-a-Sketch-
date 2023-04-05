const BODY = document.querySelector('body');
const gridContainer = document.createElement('div');

gridContainer.id = 'grid-container';
BODY.appendChild(gridContainer);

function appendFieldsToContainer(numOfFields) {
  for (let i = 0; i < numOfFields; i++) {
    const field = document.createElement('div');
    field.className = 'grid-field';
    
    field.addEventListener('mouseenter', changeColorToGrey);
    //field.addEventListener('mouseleave', changeColorToWhite);

    gridContainer.appendChild(field);
  }
}

appendFieldsToContainer((16*16));



function changeColorToGrey(e) {
  e.target.classList.add("charcoal");
}

function changeColorToWhite(e) {
  e.target.classList.remove("charcoal");
}