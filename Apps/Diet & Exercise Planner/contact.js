const hamburger = document.querySelector('.hamburger');
const categories = document.querySelector('.categories');
const crossbtn = document.querySelector('.crossbtn');

// --- CLICK HAMBURGER: Open Menu ---
hamburger.addEventListener('click', function() {
    categories.style.display = 'block'; // Show menu
    crossbtn.style.display = 'flex';     // Show X button
    hamburger.style.display = 'none';    // Hide Hamburger
});

// --- CLICK CROSS: Close Menu ---
crossbtn.addEventListener('click', function() {
    categories.style.display = 'none';   // Hide menu
    crossbtn.style.display = 'none';     // Hide X button
    hamburger.style.display = 'flex';    // Show Hamburger
});


// 1. Setup the variables
const handle = document.querySelector('.touch'); // Your icon container
const container = document.querySelector('.callfunction'); // The red track
let isDragging = false;
let startX = 0;

// 2. Start the Slide
handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    handle.style.transition = 'none'; // Stop the "snapping" during movement
});

// 3. The Movement
window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    let currentX = e.touches[0].clientX;
    let deltaX = currentX - startX;

    // Calculate the track length
    const maxSlide = container.offsetWidth - handle.offsetWidth - 10;

    // Boundary walls
    if (deltaX < 0) deltaX = 0;
    if (deltaX > maxSlide) deltaX = maxSlide;

    // Physically move the button (using backticks!)
    handle.style.transform = `translateX(${deltaX}px)`;

    // Check for "Success"
    if (deltaX >= maxSlide) {
        isDragging = false;
        const number = document.querySelector('.display').innerText;
        if (number) {
            window.location.href = `tel:${number}`;
        } else {
            alert("Enter a number first!");
        }
        resetHandle();
    }
});

// 4. Release (Snap back if not finished)
window.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;
        resetHandle();
    }
});

function resetHandle() {
    handle.style.transition = 'transform 0.3s ease-out';
    handle.style.transform = 'translateX(0px)';
}

// Even if I click div in the category, it will call link
// 1. Select ALL elements with the class 'cat'
const catItems = document.querySelectorAll('.cat');

// 2. Give each one a "sensor"
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Find the link inside the clicked item
        const link = item.querySelector('a');
        
        if (link) {
            // Get the 'href' (e.g., 'recent.html') and go there
            window.location.href = link.getAttribute('href');
        }
    });
});

const displayMode = document.getElementById('displaymode');

displayMode.addEventListener('click', function(){
    if(displayMode.style.display === 'block'){
        displayMode.style.display = 'none';
    } else {
        displayMode.style.display = 'block';
    }
})