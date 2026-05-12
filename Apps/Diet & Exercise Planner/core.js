const crossBtn = document.querySelector('.cross-btn');
const items = document.querySelector('.items');
const hamBtn = document.querySelector('.ham-btn')

// Clicking hamburger button will envoke this code
hamBtn.addEventListener('click', function(){
    if(items.style.display === 'block'){
        items.style.display = 'none';
    } else {
        items.style.display = 'block';
        hamBtn.style.display = 'none';
        crossBtn.style.display = 'block';
    }
});

// Clicking cross button will envoke this code
crossBtn.addEventListener('click', function(){
    if(items.style.display === 'block'){
        items.style.display = 'none';
        hamBtn.style.display = 'block';
        crossBtn.style.display = 'none';
    }
})

// Code for number load on display after clicking
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(button => {
    button.addEventListener('click', function(){
        const pressedNumber = button.innerText;
        display.innerText += pressedNumber;
    })
})

const backCross = document.querySelector('.back-cross');
backCross.addEventListener('click', function(){
    let currentText = display.innerText;
    if (currentText.length > 0){
        display.innerText = currentText.slice(0, -1);
    }
});


const handle = document.querySelector('.tap-icon');
const container = document.querySelector('.slide-container');
// const display = document.querySelector('.display'); // To show who you're calling

let isDragging = false;
let startX = 0;

// 1. CAPTURE: Record where the finger first touches
handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    handle.style.transition = 'none'; // Follow finger instantly
});

// 2. MOVE: Calculate distance and update position
window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    let currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;

    // Calculate the 'finish line'
    const maxSlide = container.offsetWidth - handle.offsetWidth - 10;

    // Constraints: Don't let it slide off the left or right sides
    if (deltaX < 0) deltaX = 0;
    if (deltaX > maxSlide) deltaX = maxSlide;

    // Physically move the icon
    handle.style.transform = `translateX(${deltaX}px)`;

    // 3. SUCCESS: If it reaches the end, trigger the action
    if (deltaX >= maxSlide) {
        isDragging = false;
        alert("Calling " + (display.innerText || "Unknown") + "..."); 
        resetHandle();
    }
});

// 4. RELEASE: If the user lets go, snap it back
window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    resetHandle();
});

// Helper function to animate the return to start
function resetHandle() {
    handle.style.transition = 'transform 0.3s ease-out';
    handle.style.transform = 'translateX(0px)';
}

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    let currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;

    // The 'Finish Line' math:
    const maxSlide = container.offsetWidth - handle.offsetWidth - 10;

    // The 'Invisible Walls' math:
    if (deltaX < 0) deltaX = 0;
    if (deltaX > maxSlide) deltaX = maxSlide;

    // The 'Movement' (MUST USE BACKTICKS):
    handle.style.transform = `translateX(${deltaX}px)`; 

    if (deltaX >= maxSlide) {
        isDragging = false;
        alert("Calling..."); 
        resetHandle();
    }
});

function resetHandle() {
    handle.style.transition = 'transform 0.3s ease-out';
    handle.style.transform = 'translateX(0px)';
}