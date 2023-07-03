function cm()
{
    var a=parseFloat(document.getElementById("g").value);
    var b=parseFloat(document.getElementById("h").value);
    var c=parseFloat(a*12);
    var d=parseFloat(c+b);
    var e=d*2.54;
    document.getElementById("d").innerHTML=e;
}
