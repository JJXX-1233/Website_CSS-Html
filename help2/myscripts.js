let popup = document.getElementById("popup");

        //function openPopup(){
        //   popup.classList.add("open-popup");
        // }

        function closePopup() {
            popup.classList.remove("open-popup");
            document.getElementById('firstName').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('email').value = "";
            document.getElementById('query').value = "";

        }

        function openPopup() {
            let v1 = document.forms["cForm"]["firstName"].value;
            if (v1 == "") {
                alert("Please enter a first name.")
                return false;
            } else {
                let v2 = document.forms["cForm"]["lastName"].value;
                if (v2 == "") {
                    alert("Please enter a last name.")
                    return false;
                } else {

                    let v3 = document.forms["cForm"]["email"].value; //Email < this@google.com >
                   if (v3 == "") // check is empty
                    {
                        alert("Please enter a valid email.")
                        return false;

                    } else {
                        
                        if (v3.indexOf('@') <= 0) {
                            alert("Invalid email.")
                            return false;

                        }
                        else if ((v3.charAt(v3.length - 4) != '.') && (v3.charAt(v3.length - 3) != '.')) {
                            alert("Invalid email.")
                            return false;

                        }
                        else {
                            let v4 = document.forms["cForm"]["query"].value;
                            if (v4 == "") {
                            alert("Please enter a query.")
                            return false;
                            } else {
                            popup.classList.add("open-popup");
                            }
                        }



                        


                    

                        
                    }
                }
            }
        }