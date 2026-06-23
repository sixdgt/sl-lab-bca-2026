const form = document.getElementById("signupForm");
const button = document.getElementById("signupButton");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;
    // validate name
    if (name === ""){
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (name.length < 3 || name.length > 100){
        nameError.textContent = "Name must be between 3 and 100 characters.";
        isValid = false;
    }

    // validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression for email validation
    if (email === ""){
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)){
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // validate password
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // regular expression for password validation (at least 6 characters, at least one letter and one number)
    if (password === ""){
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)){
        passwordError.textContent = "Password must contain at least one letter and one number. It must be at least 6 characters long.";
        isValid = false;
    }

    // validate confirm password
    if (confirmPassword === ""){
        passwordError.textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword){
        passwordError.textContent = "Passwords do not match.";
        isValid = false;
    }

});
