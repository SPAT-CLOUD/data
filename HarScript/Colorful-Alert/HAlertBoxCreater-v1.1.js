/*
* CopyRight © 2021 Doraemon Corporation , Inc Limited
* This Code Genrates Colorful Alert Rather Than
* Standard alert(); Function Provided By JavaScript
* The Default Property Has Two Buttons 1st LeftButton Close
* The Close Button Closes 
* The Second Button Right Button Ok Also Closes
* The Default Color of Alert box is White
* The Default Color Of Buttons is Green
* First Call Function CreateAlertBox();
* Then Use HAlertBox(YourStatments);
* Example HAlertBox("Test");
* To Use This In Your Website First thing
* You Must Have <head> and <body> tags
* In head tag include as shown below
* <script type="text/javascript" src="https://spat-cloud.github.io/data/HarScript/Colorful-Alert/HAlertBoxCreater-v1.1.js"></script>
* Next Call Function CreateAlertBox();
* <script> HAlertBox(YourStaments);</script>
* Ex:
  <!DOCTYPE HTML>
<html>
    <head>
        <title>
            Test
        </title>
 <script src="https://spat-cloud.github.io/data/HarScript/Colorful-Alert/HAlertBoxCreater-v1.1.js"></script> 
 <meta name="viewport" content="width=device-width, Maximum-scale=1 , initial-scale=1.0">
    </head>
    <script>
  function Test(){
      HAlertBox("html");
  }
    </script>
    <body onload="CreateAlertBox()">
        
  <button onclick="Test()">Click</button>      
    </body>
</html>
*/

function CreateAlertBox(){
var LinkRel = document.createElement('link');
   LinkRel.rel="stylesheet";
   LinkRel.type="text/css";
   LinkRel.href="https://spat-cloud.github.io/data/HarScript/Colorful-Alert/HAlertBoxStyle.css";
     document.head.appendChild(LinkRel);
var HAlertBox = document.createElement('div');
HAlertBox.id="HAlertBox";
document.body.appendChild(HAlertBox);
var InnerHAlertBox = document.createElement('span');
InnerHAlertBox.id="InnerHAlertBox";
HAlertBox.appendChild(InnerHAlertBox);
var Para = document.createElement('p');
Para.id="Content";
InnerHAlertBox.appendChild(Para);
var LeftButtonClose = document.createElement('button');
LeftButtonClose.id="LeftButtonClose";
LeftButtonClose.innerHTML="Close";
LeftButtonClose.onclick=function(){Close(this)};
InnerHAlertBox.appendChild(LeftButtonClose);
var RightButtonOk = document.createElement('button');
RightButtonOk.id="RightButtonOk";
RightButtonOk.innerHTML="OK";
RightButtonOk.onclick=function(){Close(this)};
InnerHAlertBox.appendChild(RightButtonOk);
}
function HAlertBox(html){
var Ty = document.getElementById("HAlertBox");
 var der = document.getElementById("InnerHAlertBox");
var AlertHtml = document.getElementById("Content");

 
 Ty.style.display="block";  
 
    der.style.animation="comed 2s 1";
   AlertHtml.innerHTML=html;
        }
function Close(My){
  My.parentElement.parentElement.style.display="none";
    
}
