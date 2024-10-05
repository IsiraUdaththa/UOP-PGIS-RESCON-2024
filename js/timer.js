// Set the deadline date
const deadline = new Date("November 1, 2024 08:00:00").getTime();

// Update the countdown every 1 second
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = deadline - now;

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in individual boxes
    document.getElementById("days").innerHTML = String(days);
    document.getElementById("hours").innerHTML = String(hours);
    document.getElementById("minutes").innerHTML = String(minutes);
    document.getElementById("seconds").innerHTML = String(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Registration Closed";
        document.getElementById("countdown").style.color = "#d32f2f"; // Change to red color
    }
}, 1000);
