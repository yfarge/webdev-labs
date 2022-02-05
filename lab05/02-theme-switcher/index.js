/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const setDefault = () => {
   body = document.querySelector('body');
   body.removeAttribute("class");
};

const setOcean = () => {
   body = document.querySelector('body');
   body.className = 'ocean';
};

const setDesert = () => {
   body = document.querySelector('body');
   body.className = 'desert';
};

const setHighContrast = () => {
   body = document.querySelector('body');
   body.className = 'high-contrast';
};


document.querySelector('#default').addEventListener('click', setDefault);
document.querySelector('#ocean').addEventListener('click', setOcean);
document.querySelector('#desert').addEventListener('click', setDesert);
document.querySelector('#high-contrast').addEventListener('click', setHighContrast);
