// Show welcome popup when the page loads
window.onload = function () {
    document.getElementById("popup").style.display = "flex";
};

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Booking form validation
function validateForm() {

    let name = document.forms["travelForm"]["name"].value;
    let email = document.forms["travelForm"]["email"].value;
    let phone = document.forms["travelForm"]["phone"].value;
    let gender = document.forms["travelForm"]["gender"].value;

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number should contain exactly 10 digits.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    alert("🎉 Thank you for booking with Nivel Travels!\nWe will contact you soon.");

    return false;
}
