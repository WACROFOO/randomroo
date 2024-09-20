// Add event listener for the Generate button
document.getElementById("GenerateButton").addEventListener("click", function() {
    console.log("Generate button clicked!"); // Debug: Check if button is clicked
    this.classList.add("slide-left");
    console.log("Class 'slide-left' added"); // Debug: Check if class is added

    // Ensure the Check Price button is visible
    var checkPriceButton = document.getElementById("CheckPriceButton");
    checkPriceButton.classList.remove("hidden"); // Remove hidden class
    checkPriceButton.style.display = "inline-block"; // Ensure it's visible
    console.log("Check Price button made visible"); // Debug: Check if button is visible

    // Delay the appearance of the Check Price button until the slide is complete
    setTimeout(function() {
        // Show the Check Price button with a fade-in effect and move to its position
        checkPriceButton.classList.add("fade-in");
        console.log("Class 'fade-in' added to Check Price button"); // Debug: Check if class is added
    }, 300); // Match this with the duration of the slide-left transition (1s)
});
