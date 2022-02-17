function submit() {
    let firstName = document.forms["form"]["firstName"].value;
    let lastName = document.forms["form"]["lastName"].value;
    let email = document.forms["form"]["email"].value;
    let password = document.forms["form"]["password"].value;

    submit = true;

    if (firstName == null || firstName == '') {
        nameError = "Please enter your name";
        document.getElementById("txtname").innerHTML = nameError;
        submit = false;
    }
    return submit;
}