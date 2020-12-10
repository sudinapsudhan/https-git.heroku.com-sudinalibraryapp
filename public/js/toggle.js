var state=false;
function toggle(){
if(state){
    document.getElementById("exampleInputPassword1").setAttribute("type","password");
   
    state = false;
}
else{
    document.getElementById("exampleInputPassword1").setAttribute("type","text");
   
    state = true;
}
}
var state=false;
function toggle1(){
if(state){
 
    document.getElementById("exampleInputPassword2").setAttribute("type","password");
    state = false;
}
else{
   
    document.getElementById("exampleInputPassword2").setAttribute("type","text");
    state = true;
}
}
