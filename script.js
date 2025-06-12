const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Close hamburger menu on nav-link click (for mobile)
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Dropdown functionality
dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent event from bubbling up to document

        // Close other open dropdowns
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.dropdown-content').classList.remove('show');
                otherDropdown.querySelector('.dropbtn').classList.remove('active');
            }
        });

        dropdownContent.classList.toggle('show');
        dropbtn.classList.toggle('active');
    });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        dropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            const dropbtn = dropdown.querySelector('.dropbtn');
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                dropbtn.classList.remove('active');
            }
        });
    }
}); 