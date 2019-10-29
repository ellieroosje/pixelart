// Select color input
const colorPicker = document.getElementById('colorPicker').value;


// Select size input
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
document.querySelector('input[type="submit"]').addEventListener('click', SubmitButton);
function SubmitButton(event){
  event.preventDefault();
  makeGrid();
}

function makeGrid() {

  // DOM Variables
  const grid = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  // Clearing previous grid
  grid.innerHTML=null;

  // Create Grid
  for (var v = 0; v < height; v++){
    var row = document.createElement('tr')
    row.id = 'row-' + v;
    grid.appendChild(row);

    for(var h = 0; h < width; h++){
        var col = document.createElement('td')
        col.id = 'row-' + row + '-' + h;
        
        col.addEventListener('click', function(){
            var color = colorPicker;
            color = event.target.style.color;
        });
        
        col addEventListener('dblclick', function(){
            //want to be able to remove color here
        });
        
        grid.lastChild.appendChild(col);
    }
  }
}


