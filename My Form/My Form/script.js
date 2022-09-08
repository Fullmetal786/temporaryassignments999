// By Mayank
var form = document.getElementById("form");
form.addEventListener('submit', function(event){
    event.preventDefault();
    var naam = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("rePassword").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // var res = document.getElementById("result");
    // res.document.write(naam + userName + email + mobile);
    
    if(pass == confirmPass){
        // alert("Password does not match!");
        document.getElementById("result").innerHTML = `<h3>User Details</h3><br>Name : ${naam}
    <br>User Name : ${userName} <br> Email : ${email} <br> Mobile : ${mobile}`;
    }
    else{
        alert("PAssword Does Not match!")
    }

})
