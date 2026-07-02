function checkLogin() {

    let isloggedin = localStorage.getItem("isloggedin");

    if (isloggedin !== "true") {
        window.location.href = "login.html";
    }

}
function updateNavigation(){

    let isloggedin = localStorage.getItem("isloggedin");

    let account = document.getElementById("accountLink");
    let transaction = document.getElementById("transactionLink");
    let login = document.getElementById("loginLink");
    let logout = document.getElementById("logoutLink");

    if(account && transaction && login && logout)
    {
        if(isloggedin === "true")
        {
            account.style.display = "";
            transaction.style.display = "";
            logout.style.display = "";
            login.style.display = "none";
        }

        else
        {
            account.style.display = "none";
            transaction.style.display = "none";
            logout.style.display = "none";
            login.style.display = "";
        }
    }

}
function login() {

    let customerid = document.getElementById("customerid").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    error.innerHTML = "";

    if (customerid === "" && password === "") {
        error.innerHTML = "Please enter Customer ID and Password.";
    }

    else if (customerid === "") {
        error.innerHTML = "Please enter Customer ID.";
    }

    else if (password === "") {
        error.innerHTML = "Please enter Password.";
    }

    else if (customerid === "HB1001" && password === "Horizon@123") {

        localStorage.setItem("isloggedin", "true");
        localStorage.setItem("customerid", customerid);

        window.location.href = "account.html";
    }

    else {
        error.innerHTML = "Invalid Customer ID or Password.";
    }

}

function togglePassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    }

    else {
        password.type = "password";
    }

}

function logout(){

    localStorage.setItem("isloggedin","false");

    window.location.href="index.html";

}