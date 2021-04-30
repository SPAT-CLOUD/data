/*
* Copyright © To Doraemon Corporation.
* This is known as Harsha Script.
* This developed for Modal Alerts Colorful Alert Boxes
* The Function In this genrates Colorful Alert 
* The functions are very powerful genrates colorful pop-ups
*/
function CreateAlertBox(){var LinkRel = document.createElement('link');LinkRel.rel="stylesheet";LinkRel.type="text/css";
var UserAg = navigator.platform;
if(UserAg.charAt(0)="L"){

LinkRel.href="https://spat-cloud.github.io/data/HarScript/Mobile/HAlertBoxStyle-Mobile.css";document.head.appendChild(LinkRel);var HAlertBox = document.createElement('div');HAlertBox.id="HAlertBox";document.body.appendChild(HAlertBox);var InnerHAlertBox = document.createElement('span');InnerHAlertBox.id="InnerHAlertBox";HAlertBox.appendChild(InnerHAlertBox);var Para = document.createElement('p');Para.id="Content";InnerHAlertBox.appendChild(Para);var LeftButtonClose = document.createElement('button');LeftButtonClose.id="LeftButtonClose";LeftButtonClose.innerHTML="Close";LeftButtonClose.onclick=function(){Close(this)};InnerHAlertBox.appendChild(LeftButtonClose);var RightButtonOk = document.createElement('button');RightButtonOk.id="RightButtonOk";RightButtonOk.innerHTML="OK";RightButtonOk.onclick=function(){Close(this)};InnerHAlertBox.appendChild(RightButtonOk);}}function HCallOnce(YourFunc,TimeSec){setTimeout(YourFunc,TimeSec*1000);}HCallOnce(CreateAlertBox,1);
function HAlertBox(html){var Ty = document.getElementById("HAlertBox");var der = document.getElementById("InnerHAlertBox");var AlertHtml = document.getElementById("Content");Ty.style.display="block";  der.style.animation="comed 2s 1";AlertHtml.innerHTML=html;}
function Close(My){My.parentElement.parentElement.style.display="none";}
function HCallCnt(ang,sec){setInterval(ang,sec*1000);}
