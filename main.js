// Get text path elements
const textpath1 = document.querySelector('#text_path_1');
const textpath2 = document.querySelector('#text_path_2');
const textpath3 = document.querySelector('#text_path_3');

// Add click handlers for smooth scrolling
document.querySelector('.red_svg').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.orange_svg').addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.yellow_svg').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Update text path offsets based on scroll position
function updateTextPathOffset1(offset) {
    textpath1.setAttribute('startOffset', 200 + offset);
}

function updateTextPathOffset2(offset) {
    textpath2.setAttribute('startOffset', 240 + offset);
}

function updateTextPathOffset3(offset) {
    textpath3.setAttribute('startOffset', 240 + offset);
}

// Throttle scroll event for better performance
let ticking = false;
function onScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            updateTextPathOffset1(scrollY * 0.9);
            updateTextPathOffset2(scrollY * 0.83);
            updateTextPathOffset3(scrollY * 0.85);
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);
