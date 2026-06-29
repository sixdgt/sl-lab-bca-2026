const dbData = {
    "username": "superadmin",
    "password": "2027"
}

const loginForm = document.getElementById('myForm');
const btnLogin = document.getElementById('loginBtn');
const errorMessage = document.getElementById('errorMessage');
document.cookie = "loginAttempts=0; path=/"; 

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return value;
    }
    return null;
}

window.onload = () => {
    const count = parseInt(getCookie("loginAttempts")) || 0;

    if (count >= 3) {
        btnLogin.disabled = true;
        btnLogin.style.cursor = "not-allowed";
        errorMessage.textContent = "Too many attempts. Please wait...";
        errorMessage.style.color = "red";

        setTimeout(() => {
            btnLogin.disabled = false;
            errorMessage.textContent = "";
        }, 60000); 
    }
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let count = parseInt(getCookie("loginAttempts")) || 0;

    const formData = new FormData(loginForm);

    if (
        formData.get('username') === dbData.username &&
        formData.get('password') === dbData.password
    ) {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";

        document.cookie = "loginAttempts=0; path=/";
        btnLogin.disabled = false;

    } else {
        count++;

        if (count >= 3) {
            const blockTime = new Date(Date.now() + (60 * 1000));

            errorMessage.textContent =
                `Too many attempts. Try again after ${blockTime.toLocaleTimeString()}`;
            errorMessage.style.color = "red";

            btnLogin.disabled = true;
            btnLogin.style.cursor = "not-allowed";

            document.cookie =
                `loginAttempts=${count}; expires=${blockTime.toUTCString()}; path=/; SameSite=Strict`;

        } else {
            errorMessage.textContent =
                `Invalid credentials. ${3 - count} attempts left.`;
            errorMessage.style.color = "red";

            document.cookie = `loginAttempts=${count}; path=/`;
        }
    }
});