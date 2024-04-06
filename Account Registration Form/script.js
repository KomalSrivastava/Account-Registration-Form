function submit() {
    let firstName = document.querySelector("#firstName").value.trim();
    let lastName = document.querySelector("#lastName").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill out all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    alert("Thank you for registering: " + firstName + " " + lastName);
}
