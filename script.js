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

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
  showManualSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showManualSlides(slideIndex = n);
}

function showManualSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Testimonial Carousel functionality
let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
    let i;
    let testimonials = document.getElementsByClassName("testimonial-item");
    let dots = document.getElementsByClassName("nav-dot");
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display = "block";
    dots[testimonialIndex-1].className += " active";
    setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
}

function currentTestimonial(n) {
  showManualTestimonials(testimonialIndex = n);
}

function showManualTestimonials(n) {
    let i;
    let testimonials = document.getElementsByClassName("testimonial-item");
    let dots = document.getElementsByClassName("nav-dot");
    if (n > testimonials.length) {testimonialIndex = 1}
    if (n < 1) {testimonialIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    testimonials[testimonialIndex-1].style.display = "block";
    dots[testimonialIndex-1].className += " active";
}

// FAQ Section Script
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const faqItem = item.closest('.faq-item');
        faqItem.classList.toggle('active');
        const faqAnswer = faqItem.querySelector('.faq-answer');
        if (faqItem.classList.contains('active')) {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        } else {
            faqAnswer.style.maxHeight = "0";
        }
    });
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
});

// Basic message sending (for demonstration)
const chatbotSendBtn = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotBody = document.getElementById('chatbot-body');

chatbotSendBtn.addEventListener('click', () => {
    sendMessage();
});

chatbotInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatbotInput.value.trim();
    if (messageText !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', 'user-message');
        messageDiv.textContent = messageText;
        chatbotBody.appendChild(messageDiv);
        chatbotInput.value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to bottom

        // Simulate bot response (you would integrate with a real chatbot API here)
        setTimeout(() => {
            const botResponseDiv = document.createElement('div');
            botResponseDiv.classList.add('chatbot-message', 'bot-message');
            botResponseDiv.textContent = "I'm a simple bot. How else can I assist you?";
            chatbotBody.appendChild(botResponseDiv);
            chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to bottom
        }, 1000);
    }
} 