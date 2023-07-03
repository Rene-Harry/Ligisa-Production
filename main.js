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

// Get all the .about-heading elements
const aboutHeadings = document.querySelectorAll('.about-heading');

// Add event listener to each .about-heading element
aboutHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    // Get the sibling element (p or ul)
    const content = heading.nextElementSibling;

    // Toggle the 'none' class
    content.classList.toggle('none');

    // Toggle the i element class for fa-angle-down and fa-angle-up
    const icon = heading.querySelector('i');
    icon.classList.toggle('fa-angle-down');
    icon.classList.toggle('fa-angle-up');
  });
});




//Learn more Button

var button = document.querySelector('.btn-learn-more');

  button.addEventListener('click', function() {
    // Navigate to the about.html file
    window.location.href = 'about.html';
  });

  //Getting involved button

  var button = document.querySelector('.gettingInvolvedBtn');

  button.addEventListener('click', function() {
    // Navigate to the about.html file
    window.location.href = 'contact.html';
  });




