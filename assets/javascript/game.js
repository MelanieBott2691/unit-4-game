$(document).ready(function() {

    //variables

    var wins = 0;
    var losses = 0;
    var counter = 0;

    function randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * max - min + 1) + min;
    }

    var targetNumber = randomNum(19, 120);
    $("#target").html(targetNumber);

    var redCrayon = randomNum(1, 12);
    var blueCrayon = randomNum(1, 12);
    var yellowCrayon = randomNum(1, 12);
    var purpleCrayon = randomNum(1, 12);

    function reset() {
        counter = 0;
        $("#target").html(targetNumber);
        targetNumber = randomNum(19, 120);
        $("#playerScore").text(counter);
        redCrayon = randomNum(1, 12);
        blueCrayon = randomNum(1, 12);
        yellowCrayon = randomNum(1, 12);
        purpleCrayon = randomNum(1, 12);
    }

    $("#redCrayon").on("click", function() {
        counter += redCrayon;
        WinLoose();
        $(playerScore).text(counter);
    });

    $("#blueCrayon").on("click", function() {
        counter += blueCrayon;
        WinLoose();
        $(playerScore).text(counter);
    });

    $("#yellowCrayon").on("click", function() {
        counter += yellowCrayon;
        WinLoose();
        $(playerScore).text(counter);
    });

    $("#purpleCrayon").on("click", function() {
        counter += purpleCrayon;
        WinLoose();
        $(playerScore).text(counter);
    });

    function WinLoose() {

        if (counter === targetNumber) {
            wins += 1;
            alert("Winner!");
            $(win).text(wins);
            reset();

        } else if (counter > targetNumber) {
            losses += 1;
            alert("Not good enough. You LOOSE!");
            $(loss).text(losses);
            reset();
        }
    }
});