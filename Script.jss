/* Part 3: Functional Logic — Scope, Parameters, Return Values, Animation Triggers */

// Function with parameters and return value
function toggleAnimation(elementId, action) {
    let element = document.getElementById(elementId);

    if (action === "start") {
        element.classList.add("bouncing");
        return "Animation started!";
    } else if (action === "stop") {
        element.classList.remove("bouncing");
        return "Animation stopped!";
    } else {
        return "Invalid action!";
    }
}

// Event listener (demonstrates scope + trigger)
let isAnimating = false;
document.getElementById("animateBtn").addEventListener("click", function () {
    // Toggle animation state
    let message;
    if (!isAnimating) {
        message = toggleAnimation("animatedBox", "start");
    } else {
        message = toggleAnimation("animatedBox", "stop");
    }
    isAnimating = !isAnimating;

    // Log return value
    console.log(message);
});
