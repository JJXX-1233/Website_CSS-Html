var MenuItems = document.getElementById("pMenuItems"); 
MenuItems.style.maxHeight = "0px";

function menutoggle(){ //this function toggles the menu on and off when the website go mobile
    if(MenuItems.style.maxHeight == "0px"){
        
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}

//new stuff



// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;


//used for flipping the pages in the menu. also its the sorting function for the menu too  
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.PageButtons span');
    var contents = document.querySelectorAll('.MenuSlec');

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
         
            contents.forEach(function(content) {
                content.style.display = 'none';
            });

            if (index < contents.length) {
                contents[index].style.display = 'block';
            } else {
                console.log('Additional functionality for ellipsis or other elements');
            }
        });
    });
});





