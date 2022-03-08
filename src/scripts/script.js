function validar() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let input = document.getElementsByTagName('input');


    if(firstName.value == '') {
        txtname.innerHTML = 'First Name cannot be empty';
        firstName.style.border = "2px solid #F0787A";
        firstName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
        
        // document.querySelector("input").style.border = "red";
    }

    if(lastName.value == '') {
        txtlastname.innerHTML = 'Last Name cannot be empty';
        lastName.style.border = "2px solid #F0787A";
        lastName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }

    if(email.value == '') {
        txtemail.innerHTML = 'Looks like this is not an email';
        email.style.border = "2px solid #F0787A"
        email.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
        email.placeholder = "email@example/com";

    }

    if(pass.value == '') {
        txtpass.innerHTML = 'Password cannot be empty'
        pass.style.border = "2px solid #F0787A"
        pass.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }
}
