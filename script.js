// global variable for color of square
let color = 'black';
// user can click to turn on/off coloring
let click = true;


document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName != 'BUTTON'  && event.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textcontainer = 'Color ON'
            document.querySelector('.mode').style.color = 'rgb(198, 226, 43)'
        } else {
            document.querySelector('.mode').textcontainer = 'Color OFF'
            document.querySelector('.mode').style.color = 'rgb(226, 43, 67)'
        }
    }
})


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
        square.style.backgroundColor = 'white';
        grid.appendChild(square);
        // grid.insertAdjacentElement('beforeend', square);
    }
} 


// default beginning board
createBoard(16)


// function that changes size of grid given valid user inputs
function changeSize(userInput) {
    if (userInput >= 2 && userInput <= 100) {
        document.querySelector('.error').textContent = "";
        createBoard(userInput);
    } else {
        document.querySelector('.error').textContent = "Size must be between 2 and 100";
        document.querySelector('.error').style.color = 'yellow';
        document.querySelector('.error').style.fontSize = '30px';
    }
}


// this function is actually being created num times: each changeColor function is focusing only on a singular div
function changeColor() {
    if (click) {
        if (color === 'random') {
            // randomized color formula
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor=color;
        }
    }
}


// function to change color of square when buttons are pressed
function buttonColor(button) {
    color = button;
}


// function for reset button(basically resets board)
function buttonReset() {
    let grid = document.querySelector('.grid')
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor='white');
}


