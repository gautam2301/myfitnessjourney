function fadeOutAndRedirect() {
    document.body.classList.add("fade-out"); // Fade effect
    setTimeout(() => {
        window.location.href = "contact.html"; // Redirect to content page
    }, 500); // Delay for smooth transition
}


window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulating form submission success
        formStatus.innerText = "✅ Message sent successfully!";
        formStatus.style.color = "lightgreen";

        // Optional: Clear form after submission
        form.reset();
    });
});





