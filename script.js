const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(squaresPerSide) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
}

resetButton.addEventListener('click', function() {
    let squaresPerSide = prompt("Enter the number of squares per side (max 100):");
    squaresPerSide = parseInt(squaresPerSide);

    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Invalid input! Please enter a number between 1 and 100.");
    } else {
        createGrid(squaresPerSide);
    }
});
createGrid(16);
