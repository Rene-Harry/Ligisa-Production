const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});


// About

// Get all the about-heading elements
const aboutHeadings = document.querySelectorAll('.about-heading');


// Add click event listener to each about-heading element
aboutHeadings.forEach((heading) => {
  

  const paragraph = heading.nextElementSibling;
  const image = heading.querySelector('img');

  // Hide the paragraph initially
  paragraph.style.display = 'none';

  // Add click event listener to the about-heading element
  heading.addEventListener('click', () => {
    // Toggle the display of the paragraph when the about-heading is clicked
    if (paragraph.style.display === 'none') {
      
      image.src = './images/up-arrow.png';
      

      paragraph.style.display = 'block';
      paragraph.style.transition = 'opacity 2s ease in';
      
      image.style.opacity = '0';
      image.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        image.style.opacity = '1';
      }, 0);
    } else {
      // Change the image source back to arrow-down.png
      image.src = './images/arrow-down.png';

      // Hide the paragraph with a smooth transition
      paragraph.style.display = 'none';
      paragraph.style.transition = 'opacity 2s ease';
      
      // Fade out the image with a smooth transition
      image.style.opacity = '0';
      image.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        image.style.opacity = '1';
      }, 0);
    }
  });
});

//Learn more Button

var button = document.querySelector('.btn-learn-more');

  button.addEventListener('click', function() {
    // Navigate to the about.html file
    window.location.href = 'about.html';
  });




