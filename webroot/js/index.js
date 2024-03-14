document.getElementById('email').addEventListener('click',function(){
    let email = document.getElementById('email').dataset['email'];
    location.href='mailto:'+email.replace('[anfora]','@');
});