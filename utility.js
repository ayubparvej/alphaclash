function show(elementId) {


    const playgroundSection = document.getElementById(elementId);
    playgroundSection.classList.remove('hidden');

}

function hide(elementId2) {

    const homeSection = document.getElementById(elementId2);
    homeSection.classList.add('hidden');

}

function setBGColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBGColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const Value = parseInt(elementValueText);
    return Value;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function addARandomNumber() {
    //Step one: create an alphabets array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //Step two: Generate random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];

    return alphabet;


}