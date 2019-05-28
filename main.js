
// navigation btns and listeners
const reset = document.getElementById('btn')
reset.addEventListener('click', resetPage, false)

const gridSize = document.getElementById('setGridBtn');
gridSize.addEventListener('click', setGridSize, false);


// reseting grid
function resetPage() {
  window.location.reload(true)
}

// setting the grid size and storing into a variable
function setGridSize() {
  let gridSize = prompt('choose your gird size between 1-50')

  if(gridSize > 50) {
   return alert('Too big of a grid')
  } else {
    return generateGrid(gridSize);
  }
}


// change rgb  values to random
function changeToRandomColor() {
  let divColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

  return changeDivColor(divColor);
}

// change color back to its default value
// function colorToBlack() {
// let divColor = 'black'

// return changeDivColor(divColor);
// }






function generateGrid(number) {
  


        let totalGridNum = number * number;
  
        for (let i = 0; i < totalGridNum; i++) {


          //Creating a new div element for grid
          const row = document.getElementById('etchContainer');
          let container = document.querySelector('.etch-container');
          container.style.cssText = `grid-template-columns: repeat(${number}, 1fr); grid-template-rows: repeat(${number}, 1fr)`;
          let div = document.createElement('div')
          
          row.append(div);

          //declaring color variables and event listeners
          const blackAndWhite = document.getElementById('blackAndWhite');
          blackAndWhite.addEventListener('click', colorToBlack, false)

          const randomColor = document.getElementById('changeColorBtn');
          randomColor.addEventListener('click', changeToRandomColor, false)

          // changing the color to black
          function colorToBlack() {
            
                  div.addEventListener('mouseover', changeDivColor, false);

                  function changeDivColor() {
                    div.style.backgroundColor = `black`
                  }
            
            }

          function changeToRandomColor() {
           
            
            div.addEventListener('mouseover', randomColor, false) 

             function randomColor(){ 
               div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
             }
          }         

    }

}

generateGrid()














