// JavaScript to detect scrolling and change header style
window.onscroll = function() {
    var header = document.getElementById('main-header');
    
    // If the user scrolls down 50px or more, add the 'scrolled' class
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};





// Get the hamburger menu and nav-links
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener for clicking the hamburger icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// CSS to show the nav links when active
const style = document.createElement('style');
style.innerHTML = `
    .nav-active {
        display: flex !important;
        flex-direction: column;
        background-color: #007bff;
        position: absolute;
        top: 60px;
        right: 0;
        width: 100%;
        padding: 10px 0;
        z-index: 1000;
    }

    .nav-active li {
        margin: 10px 0;
    }
`;
document.head.appendChild(style);
