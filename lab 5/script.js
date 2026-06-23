const spanOne = document.getElementById("one");
const spanTwo = document.getElementById("two");
const form = document.getElementById("myForm");
const textInput = document.getElementById("name");

// Event listener for mouseover event on spanOne
spanOne.addEventListener("mouseover", () => {
    spanOne.style.backgroundColor = "#fff";
    spanOne.style.color = "#f10a0a";
});

// Mouseout event to reset the color of spanOne
spanOne.addEventListener("mouseout", () => {
    spanOne.style.backgroundColor = "";
    spanOne.style.color = "";
});

// Mouse double click event on spanTwo to change paragraph text
spanTwo.addEventListener("dblclick", () => {
    const paragraph = document.querySelector("p");
    paragraph.textContent = "You double-clicked the text! Click once to reset.";
});
// click event on spanTwo to reset the paragraph text
spanTwo.addEventListener("click", () => {
    const paragraph = document.querySelector("p");
    paragraph.textContent = "Double-click the text above to change this message.";
});

// key input event on text input to display the entered name
textInput.addEventListener("input", () => {
    const nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent = `Hello, ${textInput.value}!`;
});

// key up event to clear the name display when input is cleared
textInput.addEventListener("keyup", () => {
    const nameDisplay = document.getElementById("nameDisplay");
    if (textInput.value === "") {
        nameDisplay.textContent = "Type your name above to see a greeting! Note: Numbers are not allowed.";
    }
});
// keypress event to prevent entering numbers in the text input
textInput.addEventListener("keypress", (event) => {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
        alert("Numbers are not allowed in the name field!");
    }
});
// keydown event to log the key pressed in the console
textInput.addEventListener("keydown", (event) => {
    const message = document.getElementById("message");
    message.textContent = `You pressed the "${event.key}" key.`;
});

// form submit event to prevent default behavior and display a message
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = textInput.value;
    alert(`Form submitted with name: ${message}`);
    form.reset();
    const nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.textContent = "Type your name above to see a greeting! Note: Numbers are not allowed.";
});

// window events
// 1. load event
window.addEventListener("load", () => {
    const defaultMessage = document.getElementById("welcome");
    // it will show the message after 1 second 
    setTimeout(() => {
        defaultMessage.style.display = "block";
        defaultMessage.style.transition = "opacity 1s ease-in-out";
        defaultMessage.style.opacity = "1";
    }, 1000);
    // it will hide the message after 5 seconds
    setTimeout(() => {
        defaultMessage.style.display = "none";
    }, 5000);
});

// 2. resize event
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const message = document.getElementById("message");
    message.textContent = `Window resized to: ${width}x${height}`;
});

// 3. scroll event
window.addEventListener("scroll", () => {
     const appearsDiv = document.getElementById("appears");
    const scrollPosition = window.scrollY;
    const message = document.getElementById("message");
    message.textContent = `You have scrolled ${scrollPosition}px down the page.`;

    if (scrollPosition >= 30 && scrollPosition <= 100) {
       appearsDiv.style.display = "block";
    } else {
        appearsDiv.style.display = "none";
    }
});