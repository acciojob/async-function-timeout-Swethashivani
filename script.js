document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = document.getElementById("delay").value;
    const output = document.getElementById("output");
output.innerHTML = "";
    // Function to introduce a delay using async/await
    function delayMessage(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    if (!text) {
        output.innerText = "Please enter a message.";
        return;
    }

    if (!delay || isNaN(delay) || delay < 0) {
        output.innerText = "Please enter a valid delay in milliseconds.";
        return;
    }

   // Indicate delay in progress

    await delayMessage(parseInt(delay));

    output.innerText = text; // Display message after delay
});

