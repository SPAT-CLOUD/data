function CreateAlertBox(){
var LinkRel = document.createElement('link');
LinkRel.rel="stylesheet";
LinkRel.type="text/css";
LinkRel.href="https://spat-cloud.github.io/data/HarScript/HAlertBox.css";
document.head.appendChild("LinkRel");
var HAlertBox = document.createElement('div');
HAlertBox.id="HAlertBox";
document.body.appendChild("HAlertBox");
var InnerHAlertBox = document.createElement('span');
InnerHAlertBox.id="InnerHAlertBox";
document.body.HAlertBox.appendChild("InnerHAlertBox");
var LeftButtonClose = document.createElement('button');
LeftButtonClose.id="LeftButtonClose";
LeftButtonClose.innerHTML="Close";
document.body.HAlertBox.InnerHAlertBox.appendChild("LeftButtonClose");
var RightButtonOk = document.createElement('button');
RightButtonOk.id="RightButtonOk";
RightButtonOk.innerHTML="OK";
document.body.HAlertBox.InnerHAlertBox.appendChild("RightButtonOk");
}
setTimeout(CreateAlertBox,1000);
function HAlertBox(Content){
var ContentInAlert = document.getElementById("InnerHAlertBox");
ContentInAlert.innerHTML=Content;
}