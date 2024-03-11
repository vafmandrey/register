let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtpassword = document.querySelector("#txtPassword");
let txtconfirmPassword = document.querySelector("#txtconfirmPassword");

btnRegister.onclick = function(){
    register (txtUsername.value, txtPassword.value, txtconfirmPassword.value);
}

function register (username, password, confirmPassword) {
    //If...else if...else
    //Conditional Operators [Greater Than <, Less Than>,Equal ==,Not !]
    // Greater Than or Equal >=, Less Than Equal <=
    //alert("Register button has been clicked.")
    console.log(username, password, confirmPassword);
    
    if (password == confirmPassword && password != "" && confirmPassword !="") {
        console.log("Password Match!")
    
    } else if (password == "" || !confirmPassword == "") {
        return console.log("Password Does Not Match.")
    } else {
        return console.log("Password Must Not Be Empty.")
    }
}
