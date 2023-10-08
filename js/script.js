// Function to handle form input and update the button text
const onFormInput = () => {
  const nameInput = document.querySelector('input[placeholder="Your Name"]');
  const emailInput = document.querySelector(
    'input[placeholder="E-mail Address"]'
  );
  const phoneInput = document.querySelector(
    'input[placeholder="Phone Number"]'
  );
  const addressInput = document.querySelector(
    'input[placeholder="Your Address"]'
  );
  const serviceSelect = document.querySelector(".custom-select");
  const commentInput = document.querySelector("textarea");
  const quoteBtn = document.getElementById("quoteBtn");

  // Check if any of the form fields have a value
  if (
    nameInput.value ||
    emailInput.value ||
    phoneInput.value ||
    addressInput.value ||
    serviceSelect.value ||
    commentInput.value
  ) {
    quoteBtn.innerText = "Finish Your Quote";
    quoteBtn.removeAttribute("disabled");
  } else {
    quoteBtn.innerText = "Get A Quote";
    quoteBtn.setAttribute("disabled", "true");
  }
};

// JavaScript function to show the full content when "Read More" is clicked
function showFullContent(event) {
  event.preventDefault(); // Prevent the link from navigating to another page

  // Get the parent div (blog-item) of the clicked "Read More" link
  const blogItem = event.target.closest(".blog-item");

  // Find and show the hidden content within the blog-item
  const fullContent = blogItem.querySelector(".full-content");
  fullContent.style.display = "block";
}

// Add event listeners to each "Read More" link
const readMoreLinks = document.querySelectorAll(".read-more-btn");
readMoreLinks.forEach((link) => {
  link.addEventListener("click", showFullContent);
});

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openfullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}
function closeFullImg() {
  fullImgBox.style.display = "none";
}

//  Swiper JS
const swiper = new Swiper(".swiper", {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
function submitForm() {
  var emailInput = document.getElementById("emailInput");
  var modal = document.getElementById("myModal");

  // Clear the input field after clicking Submit
  emailInput.value = "";

  // Open the modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
}

function closeModal() {
  var modal = document.getElementById("myModal");

  // Close the modal
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling again when the modal is closed
}
