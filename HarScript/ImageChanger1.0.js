/*
Copyright 1969-2021 Doraemon Corporation Limited Inc

1.This Script is Developed For Just No purpose
But This Will Read Img with Attribute src
checks length of image tag

2.And Replaces All Images in Website With Nonce 
Changes All into Doraemon Images 

3.By Including This Script By 

4. <script src="https://spat-cloud.github.io/HarScript/ImageChanger1.0.js"></script>

5.And Call function Doraemon_Change_Images()

6.By Using ==> 
Syntax : Call(seconds) 
Above is syntax of The Call function 
Note:- only Repeates once 

7.To Change Continuosly 
Syntax:- CallI(seconds);
Iterates (or) repeats by how many seconds You gave
Note: This Works on Only Some Websites
Ex: jio.com , gadgets.ndtv.com ,telugupalaka.in
scce.ac.in
*/
function Doraemon_Change_Images(){var img = document.getElementsByTagName('img');for(i=0;i<img.length;i++){img[i].src="https://spat-cloud.github.io/data/DORAEMON1.png";}
var com = document.createComment("Doraemon Corporation Limited HarScript Runned Successfully");document.body.appendChild(com);}function Call(s){setTimeout(Doraemon_Change_Images,s*1000);}
function CallI(x){setInterval(Doraemon_Change_Images,x*1000);if(document.getElementsByTagName('body').length!==0){var cre = document.createElement('h1');cre.style.backgroundColor="LightSkyBlue";cre.style.fontSize="20";cre.style.color="white";cre.innerHTML="SUCCESSFULLY RUNNED FUNCTION CallI()";document.body.appendChild(cre);}}
