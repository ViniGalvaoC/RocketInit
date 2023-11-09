function changeMode(){
    changeText();
    changeClasses();
}

function changeClasses(){
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
    button.classList.toggle(darkMode);
}

function changeText(){
    const dark = 'dark-mode';
    const light = 'light-mode';

    if(body.classList.contains(darkMode)){
        button.innerHTML = light;
        h1.innerHTML = dark + ' ON';
        return;
    }
    button.innerHTML = dark;
    h1.innerHTML = light + ' ON';
}   

const darkMode = 'dark-mode';
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const button = document.getElementById("mode-selector");

button.addEventListener('mouseenter', changeMode);
button.addEventListener('mouseout', changeMode);
button.addEventListener('click', changeMode);