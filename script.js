const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdownToggles = document.querySelectorAll(".dropbtn");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Toggle dropdowns only on mobile
dropdownToggles.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // prevent link jumping
      const parent = this.parentElement;
      parent.classList.toggle("open");

      // Close others
      document.querySelectorAll(".dropdown").forEach((drop) => {
        if (drop !== parent) drop.classList.remove("open");
      });
    }
  });
});

const dropdowns = document.querySelectorAll(".dropdown");

// Dropdown functionality
dropdowns.forEach((dropdown) => {
  const dropbtn = dropdown.querySelector(".dropbtn");
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  dropbtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    event.stopPropagation(); // Prevent event from bubbling up to document

    // Close other open dropdowns
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown
          .querySelector(".dropdown-content")
          .classList.remove("show");
        otherDropdown.querySelector(".dropbtn").classList.remove("active");
      }
    });

    dropdownContent.classList.toggle("show");
    dropbtn.classList.toggle("active");
  });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      const dropbtn = dropdown.querySelector(".dropbtn");
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
        dropbtn.classList.remove("active");
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

  if (slides.length === 0) return; // Exit if no slides are found

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // Exit if no slides are found
  showManualSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // Exit if no slides are found
  showManualSlides((slideIndex = n));
}

function showManualSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return; // Exit if no slides are found

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Testimonial Carousel functionality
let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
  let i;
  let testimonials = document.getElementsByClassName("testimonial-item");
  let dots = document.getElementsByClassName("nav-dot");

  if (testimonials.length === 0) return; // Exit if no testimonials are found

  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonialIndex++;
  if (testimonialIndex > testimonials.length) {
    testimonialIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  testimonials[testimonialIndex - 1].style.display = "block";
  dots[testimonialIndex - 1].className += " active";
  setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
}

function currentTestimonial(n) {
  let testimonials = document.getElementsByClassName("testimonial-item");
  if (testimonials.length === 0) return; // Exit if no testimonials are found
  showManualTestimonials((testimonialIndex = n));
}

function showManualTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial-item");
  let dots = document.getElementsByClassName("nav-dot");

  if (testimonials.length === 0) return; // Exit if no testimonials are found

  if (n > testimonials.length) {
    testimonialIndex = 1;
  }
  if (n < 1) {
    testimonialIndex = testimonials.length;
  }
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  testimonials[testimonialIndex - 1].style.display = "block";
  dots[testimonialIndex - 1].className += " active";
}

// FAQ Section Script
document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", (event) => {
    const faqItem = item.closest(".faq-item");
    faqItem.classList.toggle("active");
    const faqAnswer = faqItem.querySelector(".faq-answer");
    if (faqItem.classList.contains("active")) {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    } else {
      faqAnswer.style.maxHeight = "0";
    }
  });
});

const popup = document.getElementById("scrollImage");
const mission = document.getElementById("our-mission");

window.addEventListener("scroll", () => {
  const triggerTop = document.getElementById("image-trigger-section").offsetTop;
  const missionTop = mission.offsetTop;
  const scrollY = window.scrollY;

  // Show image once scrolled past trigger point but before "Our Mission"
  if (scrollY >= triggerTop && scrollY < missionTop - window.innerHeight / 2) {
    popup.classList.add("active");
  } else {
    popup.classList.remove("active");
  }
});

window.addEventListener("load", () => {
  document.getElementById("popup").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
