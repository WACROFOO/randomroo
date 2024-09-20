// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the buttons
    const generateButton = document.getElementById('GenerateButton');
    const checkPriceButton = document.getElementById('CheckPriceButton');

    // Add event listener for the Generate button
    generateButton.addEventListener('click', function() {
        // Slide the Generate button to the left
        generateButton.classList.add('slide-left');

        // Ensure the Check Price button is visible and slide it to the right
        checkPriceButton.classList.remove('hidden'); // Remove hidden class
        setTimeout(function() {
            checkPriceButton.classList.add('slide-right');
        }, 500); // Small delay to allow CSS transitions to trigger
    });

});
