const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const form = document.getElementById('form');

const fname_error = document.getElementById('fname_error');
const lname_error = document.getElementById('lname_error');
const email_error = document.getElementById('email_error');
const address_error = document.getElementById('address_error');

form.addEventListener('submit',(e)=>
{
    var email_cheak = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(firstname.value === '' || firstname.value == null){
        e.preventDefault();
        fname_error.innerHTML="first name is requred";
    }
    else{
        fname_error.innerHTML="";
    }
    if(lastname.value === '' || lastname.value == null){
        e.preventDefault();
        lname_error.innerHTML="last name is requred";
    }
    else{
        lname_error.innerHTML="";
    }
    if(!email.value.match(email_cheak)){
        if(email.value === '' || email.value == null){
            e.preventDefault();
            email_error.innerHTML="email address is requred";
        }
        else{
            e.preventDefault();
            email_error.innerHTML="Invalid email address";
            email.style.color="#FF0000";
        }   
    }
    else{
        email_error.innerHTML="";
        email.style.color="#05253C";
    }
    if(address.value === '' || address.value == null){
        e.preventDefault();
        address_error.innerHTML="address is requred";
    }
    else{
        address_error.innerHTML="";
    } 

});




