var calculator = document.getElementById("Opencal"); //get the button that open's calculator
var calitem = document.getElementsByClassName("calculator")[0]; //get the calculator
var n1 = document.getElementById("num1"); //get the first number
var n2 = document.getElementById("num2"); //get the second number
var result = document.getElementById("result"); //get the result, READONLY!!!!!!



//this is just the boring math, nothing really special. 
// they just do the math opertion and display the result in the result field(HTML) 
document.getElementById("add").onclick = ()=>{
    result.value = parseFloat(n1.value) + parseFloat(n2.value);
}

document.getElementById("sub").onclick = ()=>{ 
    result.value = parseFloat(n1.value) - parseFloat(n2.value);
}
document.getElementById("multi").onclick = ()=>{ 
    result.value = parseFloat(n1.value) * parseFloat(n2.value);
}  
document.getElementById("div").onclick = ()=>{ 
    result.value = parseFloat(n1.value) / parseFloat(n2.value);
}