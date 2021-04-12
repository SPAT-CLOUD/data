function Show(){let ht = document.getElementById("htno");
let Device=document.getElementById("UsAg");
let UsAg = navigator.userAgent;
 Device.value=`${UsAg}`;
let Nt = document.getElementById("NetTyp");
let nn = navigator.connection.type;

Nt.value=`${nn}`;
if(ht.value==''||ht.value==null){
    var d = document.getElementById("Notf");
    d.style.display="block";
}
}