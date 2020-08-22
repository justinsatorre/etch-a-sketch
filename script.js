const container = document.getElementById('container');
const reset = document.getElementById('reset');
const change = document.getElementById('change');

change.addEventListener('click', changeSize);

function makeGrid(size) {
    if (size === '' || isNaN(size)){
        alert("Please enter a number next time.");
    }
    else if (size >600) {
        alert('Please choose a number less than 600.');
    }
    else    {container.style.setProperty('--grid-size', size);
        for (c=0; c < Math.pow(size, 2); c++){
            cell = document.createElement('div');
            container.appendChild(cell).className = 'clear';
            draw(cell);
            shake(cell);
        }
    }
}
function draw(element) {
    element.addEventListener('mouseover', () => {
        element.classList.remove('clear')
        element.classList.add('black');
        container.classList.remove('shakeit');
    })
}
function shake(element) {
    reset.addEventListener('click', ()  => {
        container.classList.add('shakeit');
        element.classList.remove('black');
        element.classList.add('clear');
        element.removeAttribute('style');
    });
}
function changeSize() {
    let newSize = prompt("What fidelity would you like to etch in?", "Please enter a numeral less than or equal to 600");
    makeGrid(newSize);
}
makeGrid(16);