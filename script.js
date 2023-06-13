// global variable for color of square
let color = 'black';
// user can click to turn on/off coloring
let click = true;
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.tagName != 'BUTTON'  && event.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = 'Color ON'
        } else {
            document.querySelector('.mode').textContent = 'Color OFF'
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
        grid.appendChild(square)
        // grid.insertAdjacentElement('beforeend', square);
    }
} 

createBoard(16)
// function that changes size of grid given valid user inputs
function changeSize(userInput) {
    if (userInput >= 2 && userInput <= 100) {
        document.querySelector('.error').style.display = 'none'
        createBoard(userInput);
    } else {
        document.querySelector('.error').style.display = 'flex'
    }
}

// this function is actually being created num times: each changeColor function is focusing only on a singular div
function changeColor() {
    if (click) {
        this.style.backgroundColor=color;
    }
    // if (color == 'random') {
    //     this.style.backgroundColor = hs1($(Math.random() * 360));
    // } else {
        
    // }
    
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


