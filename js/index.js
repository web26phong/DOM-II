// Your code goes here

//click event. turns the logo header red on click
const logoheading = document.querySelector(".logo-heading");
logoheading.addEventListener("click", () => {
    logoheading.style.color = "red";
})

//dblclick event. changes the navigation container background color on double click
const navC = document.querySelector(".nav-container");
navC.addEventListener("dblclick", () => {
    navC.style.backgroundColor = "lightgray";
})

//mousemove event. changes color of the navigation container background
document.querySelector(".nav-container").addEventListener("mousemove", () => {
    document.querySelector(".nav-container").style.backgroundColor = "white";
})

//mouseenter event. links change color when the mouse enters them
document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("mouseenter", event => {
        event.target.style.color = "red";
    })
})

//mouseleave event. links change color when the mouse leaves them
document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("mouseleave", event => {
        event.target.style.color = "black";
    })
})

//mousedown event. changes color of intro header when the mouse button is clicked on it
document.querySelector(".intro h2").addEventListener("mousedown", event => {
    event.target.style.color = "red";
})

//mouseup event. changes color of intro header when the mouse button is released over it
document.querySelector(".intro h2").addEventListener("mouseup", event => {
    event.target.style.color = "black";
})

//copy event. changes color of text-content header when copied
document.querySelectorAll(".text-content h2").forEach(item => {
    item.addEventListener("copy", event => {
        event.target.style.color = "red";
    })
})

//keydown event. changes color of text-content paragraphs when a key is pressed
const textP = document.querySelectorAll(".text-content p");
textP.forEach(item => {
    document.addEventListener("keydown", () => {
        item.style.color = "red";
    })
})

//keyup event. changes color of text-content paragraphs when a key is released
document.querySelectorAll(".text-content p").forEach(item => {
    document.addEventListener("keyup", () => {
        item.style.color = "black";
    })
})


//created 2 variables below, destinationHeading is a child of destinationContainer
//stopPropagation() to stop container from changing color when clicking on destinationheading
//without stopPropagation() in destinationHeading's event handler, destinationContainer would change color when clicking on destinationHeading
const destinationHeading = document.querySelector(".content-destination h2");
destinationHeading.addEventListener("click", () =>{
    destinationHeading.style.backgroundColor = "green";
    event.stopPropagation();
})

const destinationContainer = document.querySelector(".content-destination");
destinationContainer.addEventListener("click", () => {
    destinationContainer.style.backgroundColor = "orange";
})

//preventDefault() to preventing links from working normally
document.querySelectorAll(".nav-link").forEach(item => {
    addEventListener("click", event => {
        event.preventDefault();
    })
})