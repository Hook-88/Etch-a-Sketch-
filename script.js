const BODY = document.querySelector('body');
const gridContainer = document.createElement('div');

gridContainer.id = 'grid-container';
BODY.appendChild(gridContainer);

function appendFieldsToContainer(gridSize) {
  if (gridSize > 100) {
    return 'the max is 100';
  } else {
    for (let i = 0; i < (gridSize * gridSize); i++) {
      const field = document.createElement('div');
      let fieldSize = 100 / gridSize;
  
      fieldSize = convertToStringPercentage(fieldSize);
      
      setFieldStyles(field, fieldSize);
      
      field.addEventListener('mouseenter', changeColorToGrey);
      //field.addEventListener('mouseleave', changeColorToWhite);
  
      gridContainer.appendChild(field);
  }
  }
}


function changeColorToGrey(e) {
  e.target.classList.add("charcoal");
}

function convertToStringPercentage(number) {
  return number.toString() + "%";
}

function setFieldStyles(field, fieldSize) {
  field.style.height = fieldSize;
  field.style.width = fieldSize;
}

appendFieldsToContainer(100);

