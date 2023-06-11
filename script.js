// global variable for color of square
let color = 'black';

// function that populates the grid
function createBoard(num) {
    let grid = document.querySelector('.grid')
    // clears out old existing squares in the grid so that when you add new squares, the board retains its shape
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`

    // create num by num grid
    for (let i = 0; i < num * num; i++) {
        let square = document.createElement('div');
        // event listener to change color when mouse is over squares
        square.addEventListener('mouseover', changeColor);
        square.style.backgroundColor = 'blue';
        grid.appendChild(square)
        // grid.insertAdjacentElement('beforeend', square);
    }
} 

createBoard(16)
// function that changes size of grid given valid user inputs
function changeSize(userInput) {
    if (userInput >= 2 && userInput <= 100) {
        createBoard(userInput);
    }
    else {
        console.log('too many squares')
    }
}

// this function is actually being created num times: each changeColor function is focusing only on a singular div
function changeColor() {
    this.style.backgroundColor=color;
}

// function to change color of square when buttons are pressed
function buttonColor(button) {
    color = button;
}