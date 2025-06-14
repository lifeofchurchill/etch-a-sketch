const container = document.querySelector('#container');
const button = document.getElementById('resetBtn')

function createGridSIze(size) {
    container.innerHTML = '';
    const squareSize = 512 / size;

    for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('square')
    grid.style.width = `${squareSize}px`
    grid.style.height = `${squareSize}px`

    grid.addEventListener('mouseenter', () => {
    grid.classList.add('hovered');
    });
    container.appendChild(grid)
    }
}

button.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter number of squares per side (max 100):"), 10); 
    if (newSize && newSize > 0 && newSize <= 100) {
        createGridSIze(newSize)
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

createGridSIze(16);
