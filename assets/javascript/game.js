$(document).ready(function() {

    //variables

    var wins = 0;
    var losses = 0;
    var counter = 0;

    function randomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var targetNumber = randomNum(19, 120);
    $("#target").html(targetNumber);

    var redCrayon = randomNum(1, 12);
    var blueCrayon = randomNum(1, 12);
    var yellowCrayon = randomNum(1, 12);
    var purpleCrayon = randomNum(1, 12);

    function resetGame() {
        counter = 0;
        targetNumber = randomNum(19, 120);
        $("#target").html(targetNumber);
        $("#playerScore").text(counter);
        redCrayon = randomNum(1, 12);
        blueCrayon = randomNum(1, 12);
        yellowCrayon = randomNum(1, 12);
        purpleCrayon = randomNum(1, 12);
    }

    $("#redCrayon").on("click", function() {
        counter += redCrayon;
        $(playerScore).text(counter);
        WinLoose();
    });

    $("#blueCrayon").on("click", function() {
        counter += blueCrayon;
        $(playerScore).text(counter);
        WinLoose();
    });

    $("#yellowCrayon").on("click", function() {
        counter += yellowCrayon;
        $(playerScore).text(counter);
        WinLoose();
    });

    $("#purpleCrayon").on("click", function() {
        counter += purpleCrayon;
        $(playerScore).text(counter);
        WinLoose();
    });

    function WinLoose() {
        if (counter === targetNumber) {
            console.log("victory");
            document.getElementById("winSound").play();
            wins++;
            // $(win).text(wins);
            updateDisplay();
            setTimeout(resetGame, -1);

        } else if (counter > targetNumber) {
            document.getElementById("loseSound").play();
            losses++;
            // $(loss).text(losses);
            updateDisplay();
            setTimeout(resetGame, -1);
            // reset();
        }
    }

    function updateDisplay() {
        document.getElementById("win").innerHTML = wins;
        document.getElementById("loss").innerHTML = losses;
    }
});