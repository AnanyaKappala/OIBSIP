function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    var navbarToggle = document.getElementById("navbar-toggle");
    if (navbar.style.display === "block") {
        navbar.style.opacity = "0";
        setTimeout(function() {
            navbar.style.display = "none";
        }, 300);
    } else {
        navbar.style.display = "block";
        setTimeout(function() {
            navbar.style.opacity = "1";
        }, 10);
    }
    navbarToggle.classList.toggle("hide");
}
// Get references to the navbar and navbar toggle elements
var navbar = document.getElementById("myNavbar");
var navbarToggle = document.getElementById("navbar-toggle");

// Function to close the navbar
function closeNavbar() {
    navbar.style.opacity = "0";
    setTimeout(function() {
        navbar.style.display = "none";
        navbarToggle.classList.remove("hide");
    }, 300);
}

// Function to toggle the navbar
function toggleNavbar() {
    if (navbar.style.display === "block") {
        closeNavbar();
    } else {
        navbar.style.display = "block";
        setTimeout(function() {
            navbar.style.opacity = "1";
            navbarToggle.classList.add("hide");
        }, 10);
    }
}

// Close the navbar when a link is clicked
var navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(function(link) {
    link.addEventListener("click", closeNavbar);
});

// Close the navbar when clicking outside the navbar
window.addEventListener("click", function(event) {
    if (!navbar.contains(event.target) && event.target !== navbarToggle) {
        closeNavbar();
    }
});

// Add the fade-in class after a delay
setTimeout(function() {
    var bigImage = document.querySelector(".big-img-left");
    bigImage.classList.add("fade-in");
}, 500);

// Function to start the animation for the skill bars
function startSkillAnimation() {
    var skillBars = document.querySelectorAll(".skill-bar");
  
    // Iterate over each skill bar
    skillBars.forEach(function(bar) {
      var percentage = bar.getAttribute("data-percentage");
      var width = 0;
  
      // Increase the width gradually
      var intervalId = setInterval(frame, 10); // Adjust the interval duration as desired
  
      function frame() {
        if (width >= percentage) {
          clearInterval(intervalId);
        } else {
          width++;
          bar.style.width = width + "%";
        }
      }
    });
  }
  
  // Call the startSkillAnimation function after a short delay
  setTimeout(startSkillAnimation, 500);

  // Function to handle the intersection of the progress bars
function handleProgressIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Start the animation when the progress bar comes into view
        entry.target.style.animation = "progress-animation 10s ease";
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Create an intersection observer instance
  var progressObserver = new IntersectionObserver(handleProgressIntersection, {
    threshold: 0.5, // Adjust this threshold value as per your requirement
  });
  
  // Select all the progress bar elements
  var progressBarElements = document.querySelectorAll(".c-bar-interior, .Cp-bar-interior, .h-bar-interior, .java-bar-interior, .figma-interior");
  
  // Observe each progress bar element
  progressBarElements.forEach(function (progressBar) {
    progressObserver.observe(progressBar);
  });
  