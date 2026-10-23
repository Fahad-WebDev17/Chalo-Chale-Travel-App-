
// Select the booking modal
const bookingModalElement = document.getElementById("bookingModal");

// Create a Bootstrap modal instance
const bookingModal = new bootstrap.Modal(bookingModalElement);

// Select all booking buttons
const bookingButtons = document.querySelectorAll(".open-booking");

// Open the modal when any booking button is clicked
bookingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        bookingModal.show();
    });
});

// Set the minimum travel date to today
const travelDate = document.getElementById("travelDate");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

travelDate.min = `${year}-${month}-${day}`;

// Handle booking form submission
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
    }

    alert("Your booking request has been submitted successfully!");

    bookingForm.reset();
    bookingModal.hide();
});
