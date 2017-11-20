let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer == '' && attempt == '') { 
        setHiddenFields();
    }
    if(!validateInput(input.value)) {
        return false;
    } else {
        attempt++;
    }
    if(getResults()) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else {
        if(attempt>=10) {
            setMessage("You Lose! :()");
            showAnswer(false);
            showReplay();
        } else {
            setMessage("Incorrect, try Again.");
        }
    }
    //add functionality to guess function here
}

function setHiddenFields() {
    attempt = 0;
    answer = Math.floor(Math.random(10000));
    while(answer.toString()>4) {
        answer = 0 + answer;
    }
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if(input.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults() {
    if(input == answer) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(winner) {
    let code =document.getElementById('code');
    code.innerHTML = answer.value;
    if(winner) {
        code.className += " success"
    } else {
        code.className += " failure"
    }
}

function showReplay() {
    document.getElementById('guessing-div').style.display;
    document.getElementById('replay-div').style.block;
}