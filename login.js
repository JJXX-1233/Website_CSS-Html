window.onload = ()=>{ //start when the website is loaded, set the username and password, this will be the default username and password. can be changed by the user. 
    this.sessionStorage.setItem("username","admin"); 
    this.sessionStorage.setItem("password","password1");
}
var input = document.getElementsByTagName("input"); //get the input fields
var login = document.getElementById("LogIn"); //get the login button
var form = document.querySelector("form"); //get the form

var readCookie = document.getElementById("readCookie");
var cookiedel = document.getElementById("CookieDel");

//var calculator = document.getElementById("Opencal"); //get the button that open's calculator
//var calitem = document.getElementsByClassName("calculator")[0];  // start the calculator and start its process/ abandon. 
//var n1 = document.getElementById("num1");
//var n2 = document.getElementById("num2");
//var result = document.getElementById("result");

function setCookie(cname, cvalue, exdays) { //this function sets the cookie learn from W3 and stackoverflow. 
    const d = new Date(); //set the date
    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //set the time
    let expires = "expires="+ d.toUTCString(); //set the expiration date for the cookie 365days
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //set the cookie wiht name,pass,exp date and location
}

login.onclick = ()=>{
    if((input[0].value != "") && (input[1].value != "")){
       if((input[0].value == this.sessionStorage.getItem("username")) && (input[1].value == this.sessionStorage.getItem("password"))){
           //window.location.href = "index.html";
           alert("Login successful & Cookies set "); //alert the user that the login process if completele
           
           
           

           //when cookie are not removed by the user the cookie will stay on the website for 365 days
           setCookie("username", input[0].value.toString(),365); //set the cookie with the username and password with the value of the input field(HTML)
           setCookie("password",input[1].value.toString(),365); //expiration date is 365 days its hardcoded.



        //document.cookie = "username=admin";
           //document.cookie = "password=password1";
           //document.cookie = "username=" + input[0].value.toString(); expires = "Thu, 18 Dec 2023 12:00:00 UTC";
           //document.cookie = "password=" + input[1].value.toString(); expires = "Thu, 18 Dec 2023 12:00:00 UTC";

           

       } //validation for the username and password
       else{
        if((input[0].value != this.sessionStorage.getItem("username"))){  //if the username is incorrect 
            input[0].nextElementSibling.textContent = "Username is incorrect";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            },2000);
           
 
        }

        if((input[1].value != this.sessionStorage.getItem("password"))){ //if the password is incorrect
            input[1].nextElementSibling.textContent = "password is incorrect";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
            },2000);
           
 
        }


       }
    }
    else{
        if(input[0].value == ""){ //if the username is empty
            input[0].nextElementSibling.textContent = "Username cannot be empty";
            setTimeout(()=>{
                input[0].nextElementSibling.textContent = "";
            },2000);
        }

        if(input[1].value == ""){ //if the password is empty
            input[1].nextElementSibling.textContent = "Password cannot be empty";
            setTimeout(()=>{
                input[1].nextElementSibling.textContent = "";
            },2000);
        }
    }
}

readCookie.onclick = ()=>{ //reads the cookie and displays it in an alert box
    let cookie = document.cookie;
    alert(getCookie("username") + " " + getCookie("password") );
}

cookiedel.onclick = ()=>{ //deletes the cookie
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    alert("Cookies deleted");
}

function getCookie(cname) { //this function gets the cookie learn from W3 and stackoverflow.
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "nothing found";
  }
  


