/*
Copyright 1969-2021 Doraemon Corporation Limited Inc

This Script is Developed For Just No purpose
But This Will Read Img with Attribute src
checks length of image tag

And Replaces All Images in Website With Nonce 
Changes All into Doraemon Images 

By Including This Script By 

<script src="https://spat-cloud.github.io/HarScript/ImageChanger1.0.js"></script>

And Call function Doraemon_Change_Images()

by Call(seconds);
only once repeat

CallI(seconds);
continous ly repeats by how many seconds You gave
*/
function Doraemon_Change_Images(){var img = document.getElementsByTagName('img');for(i=0;i<img.length;i++){img[i].src="https://spat-cloud.github.io/data/DORAEMON1.png";}
var com = document.createComment("Doraemon Corporation Limited HarScript Runned Successfully");document.body.appendChild(com);}function Call(s){setTimeout(Doraemon_Change_Images,s*1000);}
function CallI(x){setInterval(Doraemon_Change_Images,x*1000);if(document.getElementsByTagName('body').length!==0){var cre = document.createElement('h1');cre.style.backgrounColor="lightskyblue";cre.style.color="white";cre.innerHTML="SUCCESSFULLY RUNNED FUNCTION CallI()";document.body.appendChild(cre);}}
