function display(x)
{
    var a=x; 
    document.getElementById("result").value+=a;


}
function clear()
{
    document.getElementById("result").innerHTML="";
}
function operation()
{
    var b=document.getElementById("result").value;
    var c=eval(b);
    document.getElementById("result").value=c;
}