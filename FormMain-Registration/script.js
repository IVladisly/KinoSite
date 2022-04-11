
console.log("Script is active");

document.querySelector('.button-Yes').onclick = buttonClickYes;
document.querySelector('.button-No').onclick = buttonClickNo;
const buttonYes = document.querySelector('.button-Yes');
const buttonNo = document.querySelector('.button-No');
const h2FirstLogin = document.querySelector('#h2-firstLogIn');



const formActive = document.querySelector('.form_registration');

const TVDiv = document.querySelector('.TVDiv');
const buttonLogIn = document.querySelector('#buttonLogIn');

const FormBlock = document.querySelector('.signUpFormBlock');
const FormMain = document.querySelector('.formMain-Block');
const MainBlockPasscode = document.querySelector('.ContentMainBlockPasscode');
const ContentMain = document.querySelector('.contentMain');
const emailUpButton = document.querySelector(".buttonEmailSucces");
const emailUpPlaceholder = document.querySelector("#inputEmail");
const buttonAccountLogIn = document.querySelector("#buttonLogIn");

const option = {
 "once" : true 
}


function buttonClickYes (){
  buttonYes.classList.add('active');
  buttonNo.classList.add('disable');
  setTimeout(()=> {
    formActive.style.opacity ="100";
    formActive.style.transform ="translateY( -5em)";
    h2FirstLogin.innerHTML = "Введите свой email";
  }, 300);
  
  
  
}

function buttonClickNo () {
  
}
function NoneDisplay () {
  ContentMain.style.display ="none";
}

function buttonSubmitLogin () {
  TVDiv.classList.add('disable');
  formActive.style.transform ="translateY( 10em)";
  h2FirstLogin.style.opacity ="0";
  ContentMain.classList.add('disable');
  setTimeout(NoneDisplay, 1200);
  setTimeout(ContentPasscode, 0);
}



const emailForm = document.forms.emailform;
const userEmail = emailForm.emailInput;


emailUpButton.addEventListener('click', function emailUpSubmit(){
  if (!userEmail.value.includes('@')) {
    
    h2FirstLogin.style.color = "var(--RubyRed)";
    emailForm.style.border = "1px solid var(--RubyRed)";
    userEmail.placeholder = "Неверный формат";
    
  }else {
    emailUpButton.removeEventListener('click', emailUpSubmit);
    buttonSubmitLogin();
    
  }
  
  
  
})


function ContentPasscode (testcook) {
  MainBlockPasscode.classList.add('active');
  emailUpPlaceholder.placeholder = userEmail.value;
  setTimeout(()=> {
    MainBlockPasscode.style.opacity="100";
  }, 300);
  //  buttonLogIn.classList.add('active');
}
