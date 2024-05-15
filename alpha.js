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
