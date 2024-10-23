var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

//new stuff

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset > sticky) {
 header.classList.add("sticky");
} else {
 header.classList.remove("sticky");
}

}
function myFunctionP() { // the popup function 
    var popup = document.getElementById("myPopup"); //get the popup
    popup.classList.toggle("show");
  
}



function checkCookie() { //this function checks if the cookie is set or not
    let username = getCookie("username"); //get the cookie
    if (username != "") {
     alert("Welcome again " + username); //greet the user
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365); 
      }
    }
  }