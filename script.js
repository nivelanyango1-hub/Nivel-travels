// Welcome Message
alert("Welcome to Nivel Travels! We are happy to serve you.");

// Form Validation
function validateForm() {

    let name = document.forms["travelForm"]["name"].value;
    let email = document.forms["travelForm"]["email"].value;
    let phone = document.forms["travelForm"]["phone"].value;
    let gender = document.forms["travelForm"]["gender"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    if (gender == "") {
        alert("Please select your gender.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
