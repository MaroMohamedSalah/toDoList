let myName = document.getElementById('myName');
let intro = document.getElementById('textIntro');
let singUp = document.getElementById('username');
let check = document.getElementById('check');
let user  = document.getElementById('user');
let btn = document.getElementById('signUp');
let msg = document.getElementById('msg');
let userSection = document.getElementById('userSection');
if(localStorage.getItem("toDoUsername")){
    location.href = './pages/main.html'
}
window.onscroll = () => {
    if (window.scrollY >= 0 && window.scrollY < 472) {
        intro.style.opacity = '1';
        intro.style.bottom = '0';
        myName.style.opacity = '1';
        myName.style.bottom = '0';
    }
    else {
        intro.style.opacity = '0';
        intro.style.bottom = '-114px';
        myName.style.opacity = '0';
        myName.style.bottom = '-114px';
    }
    console.log(window.scrollY);
    if (window.scrollY >= 200 && window.scrollY < 900) {
        userSection.style.left = '0';
        userSection.style.opacity = '1';
    }else{
        userSection.style.left = '-1000px';
        userSection.style.opacity = '0';
    }
};
singUp.oninput = () =>{
    console.log(singUp.value)
    console.log(singUp.value.length)
    if(checkFirstLetterNumber(singUp.value) === false && singUp.value.length !== 1 && singUp.value !== ''){
        check.style.opacity = '1';
        btn.style.opacity = '1';
        msg.style.opacity = '0';
        btn.onclick = () =>{
            localStorage.setItem('toDoUsername' , singUp.value);
            location.href  = './pages/main.html'
        }
        // btn.style.display = 'block';
    }else{
        check.style.opacity = '0';
        btn.style.opacity = '0';
        if(singUp.value.length === 1){
            msg.textContent = `"${singUp.value}" is not valid, your name can't be one char!`
            msg.style.opacity = '1';
        }else if(checkFirstLetterNumber(singUp.value)){
            msg.textContent = `"${singUp.value}" is not valid, your userName can't start by number`
            msg.style.opacity = '1';
        }else{
            msg.style.opacity = '0';
            msg.textContent = '';
        }

        // btn.style.display = 'none';
    }
}
function checkFirstLetterNumber(_string)
{
    return /^\d/.test( _string);
}