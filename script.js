const form=document.getElementById('form');
const username = document.getElementById('username');
const email=document.getElementById('email');
const mob=document.getElementById('mob');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',e=>{

    e.preventDefault();
    validateInputes();
});

const setError =(element , message)=>{
    const inputcontrol=element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success')
};

const setSuccess=element=>{
    const inputcontrol=element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');

};

const validateInputes=()=>{
    const usernameValue=username.value.trim();
    const emailValue = email.value.trim();
    const mobValue = mob.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    if(usernameValue == ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }

    
    if(emailValue == ''){
        setError(email,'email is required');
    }
    else if(!/\S+@\S+\.\S+/.test(emailValue)){
        setError(email, 'Provide a valid email address');
    }
    else{
        setSuccess(email);
    }


    if(passwordValue == ''){
        setError(password,'PassWord is required');
    }
    else if(passwordValue.length >8){
        setError(password,'Password Must be at least 8 character.')
    }
    else{
        setSuccess(password);
    }

    if(password2Value == ''){
        setError(password2,'PassWord is required');
    }else if(password2!=password){
        setError(password2,"Plase doesnt Match");
    }
    else{
        setSuccess(password2);
    }

    
    if(mobValue == ''){
        setError(mob,'Mob no is required');
    }
    else if(mobValue.length <10){
        setError(mob,'Mob No Must be at Greater than 10 character.')
    }
    else{
        setSuccess(mob);
    }
};