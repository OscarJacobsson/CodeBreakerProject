let answerElement = document.getElementById('answer');
let attemptElement = document.getElementById('attempt');

function guess() {
    let inputElement = document.getElementById('user-guess');
    console.log('logging this..')
    if(answerElement.value == '' && attemptElement.value == '') { 
        setHiddenFields();
    }
    if(!validateInput(inputElement.value)) {
        return false;
    } else {
        attemptElement.value++;
    }
    if(getResults(inputElement.value)) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else {
        if(attemptElement.value >= 10) {
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        } else {
            setMessage("Incorrect, try again.");
        }
    }
}

function setHiddenFields() {
    attemptElement.value = 0;
    answerElement.value = Math.floor(Math.random()*10000);
    while(answerElement.value.length < 4) {
        answerElement.value = "0" + answerElement.value.toString();
    }
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(userGuess) {
    if(userGuess.length == 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input) {
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">'

    for( i = 0; i < input.length; i++) {
        if(input.charAt(i) == answerElement.value.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
        } else if(answerElement.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;

    if(input == answerElement.value) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(winner) {
    let code = document.getElementById('code');
    code.innerHTML = answerElement.value;
    if(winner) {
        code.className += " success"
    } else {
        code.className += " failure"
    }
}

function showReplay() {
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}