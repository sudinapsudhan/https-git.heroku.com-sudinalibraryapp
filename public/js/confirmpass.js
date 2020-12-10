var x=document.getElementById("exampleInputPassword1")
var y=document.getElementById("exampleInputPassword2")


function validation(){
    
if(x.value!= y.value)
{
    
    alert("passwords did not match");
   return false;
    
}

else {
   
    return true;
}
}

