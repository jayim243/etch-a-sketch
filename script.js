// function that populates the grid
function createBoard(num) {
    let grid = document.querySelector('.grid')
    // clears out old existing squares in the grid so that when you add new squares, the board retains its shape
    let squares = grid.querySelectorAll('div')
    squares.forEach((div) => div.remove());

    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`

    for (let i = 0; i < num * num; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        grid.appendChild(square)
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