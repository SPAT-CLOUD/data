/*
* Copyright © To Doraemon Corporation.
* This is known as Harsha Script.
* This developed for Modal Alerts Colorful Alert Boxes
* The Function In this genrates Colorful Alert 
* The functions are very powerful genrates colorful pop-ups
*/
function CreateAlertBox(){var LinkRel = document.createElement('link');LinkRel.rel="stylesheet";LinkRel.type="text/css";LinkRel.href="https://spat-cloud.github.io/data/HarScript/Colorful-Alert/HAlertBoxStyle.css";document.head.appendChild(LinkRel);var HAlertBox = document.createElement('div');HAlertBox.id="HAlertBox";document.body.appendChild(HAlertBox);var InnerHAlertBox = document.createElement('span');InnerHAlertBox.id="InnerHAlertBox";HAlertBox.appendChild(InnerHAlertBox);var Para = document.createElement('p');Para.id="Content";InnerHAlertBox.appendChild(Para);var RightButtonOk = document.createElement('button');RightButtonOk.id="RightButtonOk";RightButtonOk.innerHTML="OK";RightButtonOk.onclick=function(){Close(this)};InnerHAlertBox.appendChild(RightButtonOk);}function HCallOnce(YourFunc,TimeSec){setTimeout(YourFunc,TimeSec*1000);}HCallOnce(CreateAlertBox,1);function HAlertBox(html){var Ty = document.getElementById("HAlertBox");var der = document.getElementById("InnerHAlertBox");var AlertHtml = document.getElementById("Content");Ty.style.display="block";  der.style.animation="comed 2s 1";AlertHtml.innerHTML=html;}function Close(My){My.parentElement.parentElement.style.display="none";}function HCallCnt(ang,sec){setInterval(ang,sec*1000);}
function HInclJSH(url){var scp=document.createElement('script');scp.type="text/javascript";scp.src=url;document.head.appendChild(scp);}function HInclCSSH(urlp){var lkk =document.createElement('link');lkk.rel="stylesheet";lkk.href=urlp;document.head.appendChild(lkk);}
function HVibrate(seconds){var dev = navigator.platform;var devt = dev.charAt(0);if(devt=="L"){window.navigator.vibrate(seconds*1000);}else{console.log("This Function Not Supported");}}
function HWrite(st){document.write(st);}
function HGetId(go){document.getElementById(go);}
function HAndriod(){var gh = navigator.platform;if(gh.charAt(0)=="L"){return true;}else{return false;}}
function HWin(){var h = navigator.platform; if(h.charAt(0) == "W"){return "Yes";} return "No";}
function HMac(){var j = navigator.platform; if(j.charAt(0) == "M"){return "Yes";} return "No";}

function app(){ var v = document.createElement('script');
v.type="text/javascript";
v.src="https://spat-cloud.github.io/data/HarScript/Advertising.js";
document.head.appendChild(v);}
app();
  
     
  function HFullScr(x){
Var C = document.documentElement;
      if(C.requestFullscreen){
          C.requestFullscreen();
      }
      else if(C.msRequestFullscreen){
          C.msRequestFullscreen();
      }
      else if(C.mozRequestFullscreen){
          C.mozRequestFullscreen();
      }
      else if(C.webkitRequestFullscreen){
          C.webkitRequestFullscreen();
      }
      x.parentElement.parentElement.style.display = "none";
  }
  function HNone(D){
      D.parentElement.parentElement.style.display = "none";
  }
 
  
function HCreateFull(){
   var a , b , c , d , e ,g ,h;
   h = "https://spat-cloud.github.io/data/HarScript/PermissonBox.css";
   g = document.createElement('link');
   g.rel = "stylesheet";
   g.href = h;
   document.head.appendChild(g);
a = document.createElement('div');
a.id = "Out-Permission";
document.body.appendChild(a);
b = document.createElement('span');
b.id = "In-Permission";
a.appendChild(b);
c = document.createElement('p');
c.id="Permission-Message";
b.appendChild(c);
d = document.createElement('button');
d.id = "F-Button";
d.onclick = function(){HFullScr(this)};
d.innerHTML = "Allow";
b.appendChild(d);
e = document.createElement('button');
e.id = "S-Button";
e.onclick = function(){HNone(this)};
e.innerHTML = "Block";
b.appendChild(e);
}
HCallOnce(HCreateFull , 1);
function HDisableKeys(){document.onkeydown = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};
  document.onkeypress = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};
  document.onkeyup = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};
  document.onmouseup = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};
  document.onmouseover = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};
  document.onmouseout = function(e){if(e.ctrlKey || e.shiftKey || e.keyCode === 123 || e.keyCode === 44 || e.keyCode === 91 || e.keyCode === 172 || e.keyCode === 27 || e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 116 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 || e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122){return false;}};}
function HFullscreen(Msg){
    var a , b , c , d;
d = document.getElementById("Out-Permission");
d.style.display = "block";
a = document.getElementById("Permission-Message");
a.innerHTML = Msg;
}
HForceFullSCR(){
var C=document.documentElement;
if(C.requestFullscreen){
          C.requestFullscreen();
      }
      else if(C.msRequestFullscreen){
          C.msRequestFullscreen();
      }
      else if(C.mozRequestFullscreen){
          C.mozRequestFullscreen();
      }
      else if(C.webkitRequestFullscreen){
          C.webkitRequestFullscreen();
      }
}

