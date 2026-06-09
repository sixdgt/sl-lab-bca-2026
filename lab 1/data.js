// array of country names
const countries = ["India", "USA", "Germany", "Australia", "Japan"];

// Get the unordered list element with id "dataList" from the HTML document
const dataList = document.getElementById("dataList");

// Using for...of loop to iterate through the array of countries
for(name of countries) {
    // it will add a new list of countries with html tag <li> to the unordered list with id "dataList"
    dataList.innerHTML += `<li>${name}</li>`;
}