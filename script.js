function createCountdown(targetDate, elementId) {
    // Set the date we're counting down to
    var countDownDate = moment.tz(targetDate, "America/Los_Angeles").valueOf();

    // Update the count down every 1 second
    var countdownFunction = setInterval(function() {

        // Get today's date and time in PST
        var now = moment().tz("America/Los_Angeles").valueOf();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        document.getElementById(elementId).innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById(elementId).innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Create multiple countdowns
createCountdown("2024-05-07 23:59:59", "apexCountdown");
createCountdown("2024-05-24 23:59:59", "fnCountdown");
createCountdown("2024-04-16 23:59:59", "owCountdown");
createCountdown("2024-06-10 23:59:59", "r6Countdown");
createCountdown("2024-06-5 23:59:59", "rlCountdown");