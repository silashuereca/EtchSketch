

const setGrid = document.getElementById('setGridBtn')
setGrid.addEventListener('click', changeGrid);

function changeGrid() {
  let gridSize = prompt('Choose grid size 1-100')
  if (gridSize > 100) {
    return alert('Too big of a grid. Please enter grid size 1-100')
  }
  


    function generateGrid(){
    let totalGridNum = gridSize * gridSize;
    

        for (let i = 0; i < totalGridNum; i++) {


          //Creating a new div element for grid
          const row = document.getElementById('etchContainer');
          let container = document.querySelector('.etch-container');
          container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`;
          let div = document.createElement('div')
          
          row.append(div);

              //Change each div color to normal black 
              const blackAndWhiteBtn = document.getElementById('blackAndWhite');
              blackAndWhiteBtn.addEventListener('click', changeToBlack)
              
              function changeToBlack() {
                div.addEventListener('mouseover', changeColor);
                function changeColor() {
                  div.style.backgroundColor = 'black';
                  
                }

              }

              changeToBlack()

              //Change div color to random rgb value
              const changeColorBtn = document.getElementById('changeColorBtn');
              changeColorBtn.addEventListener('click', function(){

                div.addEventListener('mouseover', changeColor);
              function changeColor() {
                div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
              }
          
              })
          
        }
    

      }

      generateGrid(gridSize)

}


function clearGrid() {
  const clear = document.getElementById('btn')
  clear.addEventListener('click', function(){
    window.location.reload(true)
  })
}

clearGrid()





