const BODY = document.querySelector('body');
const gridContainer = document.createElement('div');

gridContainer.id = 'grid-container';
BODY.appendChild(gridContainer);

function appendFieldsToContainer(numOfFields) {
  for (let i = 0; i < numOfFields; i++) {
    const field = document.createElement('div');
    field.className = 'grid-field'
    gridContainer.appendChild(field);
  }
}

appendFieldsToContainer((16*16));


