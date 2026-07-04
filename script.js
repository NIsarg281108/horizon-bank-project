function checkLogin() {
    let isloggedin = localStorage.getItem("isloggedin");
    if (isloggedin !== "true") {
        window.location.href = "login.html";
    }
}
function updateNavigation() {
    let isloggedin = localStorage.getItem("isloggedin");
    let account = document.getElementById("accountLink");
    let transaction = document.getElementById("transactionLink");
    let login = document.getElementById("loginLink");
    let logout = document.getElementById("logoutLink");
    let heroButton = document.getElementById("heroButton");
    let welcome = document.getElementById("welcomeMessage");
    if (isloggedin === "true") {
        if(account) account.style.display = "inline";
        if(transaction) transaction.style.display = "inline";
        if(login) login.style.display = "none";
        if(logout) logout.style.display = "inline";
        if(heroButton){
            heroButton.innerHTML = "My Account";
            heroButton.href = "account.html";
        }
        let name = localStorage.getItem("customerName");
        if(welcome){
            welcome.innerHTML = "Welcome Back,  " + name + "👋";
        }
    }
    else {
        if(account) account.style.display = "none";
        if(transaction) transaction.style.display = "none";
        if(login) login.style.display = "inline";
        if(logout) logout.style.display = "none";
        if(heroButton){
            heroButton.innerHTML = "Login";
            heroButton.href = "login.html";
        }
        if(welcome){
            welcome.innerHTML = "Secure Banking for Your Future";
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
    else if (customerid === "HB1001" && password === "Jenu@123") {
        localStorage.setItem("isloggedin", "true");
        localStorage.setItem("customerid", customerid);
        localStorage.setItem("customerName", "Abhinav Sharma");
        window.location.href = "account.html";
    }
    else {
        error.innerHTML = "Invalid Customer ID or Password.";
    }
}
function togglePassword(){
    let password = document.getElementById("password");
    let eye = document.getElementById("eyeIcon");
    if(password.type === "password"){
        password.type = "text";
        eye.src ="securebank/images/Untitled_design-removebg-preview.png" ;
    }
    else{
        password.type = "password";
        eye.src = "securebank/images/Untitled_design__1_-removebg-preview.png";
    }
}
function logout() {
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("customerid");
    localStorage.removeItem("customerName");
    window.location.href = "index.html";
}
function toggleDetails(){
    let button = document.getElementById("viewButton");
    if(button.innerHTML === "🔐 View Sensitive Details"){
        document.getElementById("pinBox").style.display = "block";
    }
    else{
        document.getElementById("accountNumber").innerHTML = "🔒 **********";
        document.getElementById("balance").innerHTML = "🔒 **********";
        button.innerHTML = "🔐 View Sensitive Details";
        document.getElementById("cardNumber").innerHTML ="**** **** **** 1295";
        document.getElementById("expiry").innerHTML ="**/**";
        document.getElementById("cvv").innerHTML ="***";
    }
}
function verifyPin(){
    let pin = document.getElementById("pin").value;
    let error = document.getElementById("pinError");
    let button = document.getElementById("viewButton");
    if(pin === "1234"){
        document.getElementById("accountNumber").innerHTML = "7977921295";
        document.getElementById("balance").innerHTML = "₹12,500";
        document.getElementById("pinBox").style.display = "none";
        button.innerHTML = "🔒 Hide Sensitive Details";
        document.getElementById("pin").value = "";
        error.innerHTML = "";
        document.getElementById("cardNumber").innerHTML ="4587 8912 4587 1295";
        document.getElementById("expiry").innerHTML ="09/30";
        document.getElementById("cvv").innerHTML ="482";
    }
    else{
        error.innerHTML = "Incorrect PIN";
    }
}
function transferMoney(){
    alert("Transfer Money feature will be available soon.");
}
function downloadStatement(){
    alert("Statement download will be available soon.");
}
function manageCards(){
    alert("Card Services feature will be available soon.");
}
function contactSupport(){
    alert("Customer Support is available 24/7.");
}