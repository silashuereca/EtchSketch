


// let colorNumber  = Math.radon * 255;
// let randomColor = Math.floor(rgb(colorNumber, colorNumber, colorNumber));


function generateGrid(){
for (let i = 0; i < 256; i++) {
  const row = document.getElementById('etchContainer');
  let div = document.createElement('div')
  row.append(div);

  //Changing each div color
  div.addEventListener('mouseover', changeColor);
  function changeColor() {
    div.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  }
  
}

}

generateGrid()


function clearWindow() {
  const clear = document.getElementById('btn')
  clear.addEventListener('click', function(){
    window.location.reload(true);
  })
}

clearWindow();



