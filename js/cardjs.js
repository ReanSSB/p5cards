var turn = 1;
var p1Move = 0;
var p2Move = 0;

var p1Score = 0;
var p2Score = 0;

var gamePlayable = true;
var gameOver = false;

async function restart(){

    setTimeout(() => {

        if (!gameOver){

            if (p1Move == 1) { document.getElementById("ryuji").classList.remove("flip"); document.getElementById("ryuji").classList.add("flipReverse"); }
            if (p1Move == 2) { document.getElementById("makoto").classList.remove("flip"); document.getElementById("makoto").classList.add("flipReverse"); }
            if (p1Move == 3) { document.getElementById("ann").classList.remove("flip"); document.getElementById("ann").classList.add("flipReverse"); }
    
            if (p2Move == 1) { document.getElementById("yusuke").classList.remove("flip"); document.getElementById("yusuke").classList.add("flipReverse"); }
            if (p2Move == 2) { document.getElementById("futaba").classList.remove("flip"); document.getElementById("futaba").classList.add("flipReverse"); }
            if (p2Move == 3) { document.getElementById("haru").classList.remove("flip"); document.getElementById("haru").classList.add("flipReverse"); }
        
            p1Move = 0;
            p2Move = 0;
    
            gamePlayable = true;

        }


    }, 2000);
}

function restartgame(){

    if (p1Move == 1) { document.getElementById("ryuji").classList.remove("flip"); document.getElementById("ryuji").classList.add("flipReverse"); }
    if (p1Move == 2) { document.getElementById("makoto").classList.remove("flip"); document.getElementById("makoto").classList.add("flipReverse"); }
    if (p1Move == 3) { document.getElementById("ann").classList.remove("flip"); document.getElementById("ann").classList.add("flipReverse"); }

    if (p2Move == 1) { document.getElementById("yusuke").classList.remove("flip"); document.getElementById("yusuke").classList.add("flipReverse"); }
    if (p2Move == 2) { document.getElementById("futaba").classList.remove("flip"); document.getElementById("futaba").classList.add("flipReverse"); }
    if (p2Move == 3) { document.getElementById("haru").classList.remove("flip"); document.getElementById("haru").classList.add("flipReverse"); }

    p1Move = 0;
    p2Move = 0;

    p1Score = 0;
    p2Score = 0;

    gamePlayable = true;
    gameOver = false;

    document.getElementById("score").innerHTML = p1Score + " | " + p2Score;

    document.getElementById("winner").style.display = "none";
    document.getElementById("restart").style.display = "none";



}


function whoWon() {

    gamePlayable = false;

    if (p1Move == 1) { document.getElementById("ryuji").classList.add("flip"); document.getElementById("ryuji").classList.remove("flipReverse"); }
    if (p1Move == 2) { document.getElementById("makoto").classList.add("flip"); document.getElementById("makoto").classList.remove("flipReverse"); }
    if (p1Move == 3) { document.getElementById("ann").classList.add("flip"); document.getElementById("ann").classList.remove("flipReverse"); }

    if (p2Move == 1) { document.getElementById("yusuke").classList.add("flip"); document.getElementById("yusuke").classList.remove("flipReverse"); }
    if (p2Move == 2) { document.getElementById("futaba").classList.add("flip"); document.getElementById("futaba").classList.remove("flipReverse"); }
    if (p2Move == 3) { document.getElementById("haru").classList.add("flip"); document.getElementById("haru").classList.remove("flipReverse"); }

    if (p1Move == p2Move) {
        console.log("tie");
        restart();

    } else if (p1Move == 3 && p2Move == 2) {
        console.log("scissors cuts paper! p1 win")
        p1Score++;
        restart();

    } else if (p1Move == 2 && p2Move == 1) {
        console.log("paper covers rock! p1 win")
        p1Score++;
        restart();

    } else if (p1Move == 1 && p2Move == 3) {
        console.log("rock breaks scissors! p1 win")
        p1Score++;
        restart();

    } else if (p2Move == 3 && p1Move == 2) {
        console.log("scissors cuts paper! p2 win")
        p2Score++;
        restart();

    } else if (p2Move == 2 && p1Move == 1) {
        console.log("paper covers rock! p2 win")
        p2Score++;
        restart();

    } else if (p2Move == 1 && p1Move == 3) {
        console.log("rock breaks scissors! p2w win")
        p2Score++;
        restart();

    }


    if (p1Score == 5 | p2Score == 5) {
        console.log("game over");
        document.getElementById("score").innerHTML = p1Score + " | " + p2Score; gameOver = true;
        document.getElementById("winner").style.display = "block";
        document.getElementById("restart").style.display = "block";

        if (p1Score > p2Score) document.getElementById("winner").textContent="Player 1 wins!";
        else document.getElementById("winner").textContent="Player 2 wins!";
    
    }

    else document.getElementById("score").innerHTML = p1Score + " | " + p2Score;

}


onkeydown = function (e) {

    if(gamePlayable){


        //Scissord
        if (e.keyCode == "81") {

            turn += 1;
            p1Move = 1
        }

        //Paper
        if (e.keyCode == "87") {

            turn += 1;
            p1Move = 2;
        }

        // rock
        if (e.keyCode == "69") {

            turn += 1;
            p1Move = 3;
        }


        //Scissors
        if (e.keyCode == "35" | e.keyCode == "37" ) {

            turn += 1;
            p2Move = 1;
        }

        //Paper
        if (e.keyCode == "40") {

            turn += 1;
            p2Move = 2;
        }

        //Rock
        if (e.keyCode == "34" | e.keyCode == "39") {

            turn += 1;
            p2Move = 3;
        }


        if (p1Move > 0 && p2Move > 0) whoWon();
    }

}