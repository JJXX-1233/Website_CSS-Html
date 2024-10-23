var MenuItems = document.getElementById("pMenuItems"); //mobile downdown menu system
MenuItems.style.maxHeight = "0px";

function menutoggle(){ //mobile only menu toggle
    if(MenuItems.style.maxHeight == "0px"){ 
        MenuItems.style.maxHeight = "200px";
    }
    else{
        MenuItems.style.maxHeight = "0px";
    }
}


//the cart system 
document.addEventListener("DOMContentLoaded", function() {
 


    var addToCartButton = document.getElementById('addToCartButton'); //get the add to cart button
    addToCartButton.addEventListener('click', function(event) { //when the button is clicked
        event.preventDefault(); //prevent the default action 

        var colour = document.getElementById('colourSelect').value; //get the colour on the selecter


        
        var quantity = document.getElementById('quantityInput').value; //get the quantity on the input field

        if (colour === "Pick a colour") { //if the colour is not selected
            alert("Please select a colour.");
            return;
        }
        if (quantity <= 0) { //if the quantity is not selected
            alert("Please enter a valid quantity.");
            return;
        }

        var message = "Product: Gaming PC\nColour: " + colour + "\nQuantity: " + quantity; //display the message
        alert(message); //output
    });
});

