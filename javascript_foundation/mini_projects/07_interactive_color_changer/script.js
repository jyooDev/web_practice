

const buttons = document.querySelectorAll('.color-btn');
const text = document.getElementById('text');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        color = button.getAttribute('data-color');
        text.style.color = color;
        console.log(color);
    })
})

const colorContainer = document.getElementById('colorContainer');
console.log(colorContainer);
