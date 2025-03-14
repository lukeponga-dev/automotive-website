document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("nav-active");
    });

    // Handle Booking Form Submission
    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        // Display confirmation message
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "block";
        confirmationMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your <strong>${service}</strong> service is booked for <strong>${date}</strong>. We will contact you at <strong>${phone}</strong> or <strong>${email}</strong>.`;

        // Clear the form after submission
        document.getElementById("bookingForm").reset();
    });
});
