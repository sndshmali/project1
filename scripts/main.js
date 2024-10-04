function darkMode(){
    let element = document.body;
    element.className ="dark-mode";
}

function lightMode(){
    let element =document.body;
    element.className = "light-mode"
}


// Function to handle page switching for tabs
function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;
    
    // Get all elements with class "tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Reset the background color of all tablinks
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the current tab, and set the background color of the clicked tab
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

/*    if (pageName==='shopping'){
        window.location.href = 'shopping.html';
        return;
    }

    if (pageName==='todo'){
        window.location.href = 'index.html';
        return;
    }
*/
}

// Get the element with id="defaultOpen" and click on it to open the default tab
document.getElementById("defaultOpen").click();

// Function to update the star rating for a specific container
function gfg(starNumber, container) {
    const stars = container.getElementsByClassName("star");
    
    // Remove existing star styling before applying new one
    //removeStarClasses(stars);

    // Apply the selected styling based on star number clicked
    let cls;
    if (starNumber == 1) cls = "one";
    else if (starNumber == 2) cls = "two";
    else if (starNumber == 3) cls = "three";

    for (let i = 0; i < starNumber; i++) {
        stars[i].classList.add(cls);
    }
}

// Function to remove the pre-applied star styling
function removeStarClasses(stars) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star"; // Reset each star to just "star" class
    }
}

// Add event listener to the Add button
document.getElementById('add').addEventListener('click', function() {
    addStarContainer();
});

// Function to add a new star container on a new line
function addStarContainer() {
    const allStarContainers = document.getElementById("allStarContainers");

    // Create a new star container div
    const newStarDiv = document.createElement("div");
    newStarDiv.classList.add("star-container");

    // Create the card div containing the stars
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    

    // Add stars to the card div and set onclick event for dynamic behavior
    for (let i = 1; i <= 3; i++) {
        const starSpan = document.createElement("span");
        starSpan.classList.add("star");
        starSpan.innerHTML = "★";
        
        // Assign a closure for dynamic onclick event to each star
        starSpan.onclick = function() {
            gfg(i, newStarDiv); // Pass star index and the container
        };

        cardDiv.appendChild(starSpan);
    }

    // Create an input field for the task
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "task";
    inputField.placeholder = "Task Name";

    // Append the card and the input field to the new star container div
    newStarDiv.appendChild(cardDiv);
    newStarDiv.appendChild(inputField);

    // Append the new star container to the parent container
    allStarContainers.appendChild(newStarDiv);
}

// Initialize the first static star container
const firstStarContainer = document.querySelector(".star-container");
const firstStars = firstStarContainer.querySelectorAll(".star");
firstStars.forEach((star, index) => {
    star.onclick = function() {
        gfg(index + 1, firstStarContainer); // Set stars for the first container
    };
});

