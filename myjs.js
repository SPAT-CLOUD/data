function Show(){let ht = document.getElementById("htno");
let Device=document.getElementById("UsAg");
let UsAg = navigator.userAgent;
 Device.value=`${UsAg}`;
let Nt = document.getElementById("NetTyp");
let nn = navigator.connection.type;
var val = document.getElementById("Val2");
var not = document.getElementById("Notf2");
Nt.value=`${nn}`;
if(ht.value==''||ht.value==null||ht.length!==10||val.length==8||val.value==""||val.value==null){
    var d = document.getElementById("Notf");
    d.style.display="block";
}
else{
not.style.display="block";
}
}
