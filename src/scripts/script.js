function validar() {
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    let input = document.getElementsByTagName('input');

    // first name
    if(firstName.value == '') {
        txtname.innerHTML = 'First Name cannot be empty';
        firstName.style.border = "2px solid #F0787A";
        firstName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }

    if(firstName.value != '') {
        firstName.style.border = "1px solid #b9b6d3";
        txtname.innerHTML = '';
        firstName.style.background = "none";
    }

    // last name
    if(lastName.value == '') {
        txtlastname.innerHTML = 'Last Name cannot be empty';
        lastName.style.border = "2px solid #F0787A";
        lastName.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }

    if(lastName.value != '') {
        lastName.style.border = "1px solid #b9b6d3";
        txtlastname.innerHTML = '';
        lastName.style.background = "none";
    }

    // email 
    if(email.value == '') {
        txtemail.innerHTML = 'Looks like this is not an email';
        email.style.border = "2px solid #F0787A"
        email.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
        email.placeholder = "email@example/com";

    }

    if(email.value != '') {
        email.style.border = "1px solid #b9b6d3";
        txtemail.innerHTML = '';
        email.style.background = "none";
    }

    // password
    if(pass.value == '') {
        txtpass.innerHTML = 'Password cannot be empty'
        pass.style.border = "2px solid #F0787A"
        pass.style.background = "url('src/assets/images/icon-error.svg') no-repeat content-box right";
    }

    if(pass.value != '') {
        pass.style.border = "1px solid #b9b6d3";
        txtpass.innerHTML = '';
        pass.style.background = "none";
    }
}
