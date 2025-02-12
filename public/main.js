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

const aboutHeadings = document.querySelectorAll(".about-heading");

// Add event listener to each .about-heading element
aboutHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    // Close all previously opened sections (using for loop for clarity)
    for (let i = 0; i < aboutHeadings.length; i++) {
      const otherHeading = aboutHeadings[i];
      if (otherHeading !== heading) { // Skip the clicked heading
        const otherContent = otherHeading.nextElementSibling;
        otherContent.classList.add("none"); // Hide content
        const otherIcon = otherHeading.querySelector("i");
        otherIcon.classList.remove("fa-angle-up"); // Reset icon to down
        otherIcon.classList.add("fa-angle-down");
      }
    }

    // Get the sibling element (p or ul) for the clicked heading
    const content = heading.nextElementSibling;

    // Toggle the 'none' class for the clicked heading's content
    content.classList.toggle("none");

    // Toggle the i element class for fa-angle-down and fa-angle-up for clicked heading
    const icon = heading.querySelector("i");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
  });
});


//Learn more Button

let learnMoreButton = document.querySelector(".btn-learn-more");

learnMoreButton.addEventListener("click", function () {
  // Navigate to the about.html file
  window.location.href = "about.html";
});

//Getting involved button

var gettingInvolvedButton = document.querySelector(".gettingInvolvedBtn");

gettingInvolvedButton.addEventListener("click", function () {
  // Navigate to the about.html file
  window.location.href = "contact.html";
});
