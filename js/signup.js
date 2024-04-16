document.addEventListener("DOMContentLoaded", function() {

    function togglePasswordVisibility() {
        var passwordInput = document.getElementById("password");
        var passwordIcon = document.querySelector(".fa-eye");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordIcon.classList.remove("fa-eye");
            passwordIcon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            passwordIcon.classList.remove("fa-eye-slash");
            passwordIcon.classList.add("fa-eye");
        }
    }

    document.querySelector(".fa-eye").addEventListener("click", togglePasswordVisibility);

    document.querySelector(".signupBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validate the signup form
        if (validateSignup()) {
            // Redirect to the account page if validation succeeds
            window.location.href = "account.html";
        }
    });

    function validateSignup() {
        var fullNameInput = document.getElementById("fullname");
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("password");
        var agreeCheckbox = document.getElementById("agree");

        if (fullNameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || !agreeCheckbox.checked) {
            alert("Please fill in all fields and agree to the terms and services.");
            return false;
        }
        return true;
    }
});
