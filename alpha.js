<<<<<<< HEAD
// function play() {
//     //step-1: hide the home screen. to hide add hidden class in home section and add remove hidden class from artboard section.

//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');

//     //step-2: show the playground
//     const playgroundSection = document.getElementById('playground-section');
//     playgroundSection.classList.remove('hidden');

// }

function play() {

    hidElementByID('home-section');
    showElementByID('playground-section');

}
=======

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    //stop the game if press escape key
    if (playerPressed == 'Escape') {
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //Check Matched or Not

    if (playerPressed === expectedAlphabet) {


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore)



        //-----------------------------------
        //update score
        //1. get the current score
        //2. increase the score by 1
        //3. show the updated score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        //2. increase the score by 1
        // const newScore = currentScore + 1;
        //3. show the updated score
        //currentScoreElement.innerText = newScore;


        removeBGColorById(expectedAlphabet)
        continueGame();
    } else {

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);

        if (updatedLife == 0) {
            gameOver();
        }



        //------------------------------------------
        //step-1: get the current life number
        // const currentLifeElment = document.getElementById('current-life');
        // const currentLifeText = currentLifeElment.innerText;
        // const currentLife = parseInt(currentLifeText);
        //step-2: reduce the life count
        // const newLife = currentLife - 1;

        // //step-3: display the updated score
        // currentLifeElment.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    const alphabet = addARandomNumber();


    //set randomly generated alphabet in display
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;


    setBGColorById(alphabet);
}


function play() {
    //hide home section

    hide('final-score');
    hide('home-section');
    show('playground-section');

    //reset score and life
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);

    continueGame();

}

function gameOver() {
    hide('playground-section');
    show('final-score');

    const lastScore = getTextElementValueById('current-score');
    setElementValueById('last-score', lastScore);

    //clear the last highlited alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBGColorById(currentAlphabet);


}
>>>>>>> 60cd69e795060353bac0f84b4d499ec6b3eb8cf7
