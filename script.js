
/* Meteur Surveys - JavaScript */

// Display a message when the website is ready.
document.addEventListener("DOMContentLoaded", function () {
    console.log("Meteur Surveys website loaded successfully.");

    // Handle clicks on survey buttons.
    const surveyButtons = document.querySelectorAll(".survey-card button");

    surveyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Survey opportunities are coming soon. Please check back later!");
        });
    });
});
