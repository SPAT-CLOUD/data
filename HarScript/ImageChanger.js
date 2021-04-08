/*
Copyright 1969-2021 Doraemon Corporation Limited Inc

This Script is Developed For Just No purpose
But This Will Read Img with Attribute src
checks length of image tag

And Replaces All Images in Website With Nonce 
Changes All into Doraemon Images 

By Including This Script By 

<script src="https://spat-cloud.github.io/HarScript/ImageChanger.js"></script>

And Call function Doraemon_Change_Images()

by setTimeout(Doraemon_Change_Images,seconds in milli secs);
only once repeat

setInterval(Doraemon_Change_Images,seconds in millisecs);
continous ly repeats by how many seconds You gave
*/
function Doraemon_Change_Images(){var img = document.getElementsByTagName('img');for(i=0;i<img.length;i++){img[i].src="https://spat-cloud.github.io/data/DORAEMON1.png";}
var com = document.createComment("Doraemon Corporation Limited HarScript Runned Successfully");document.body.appendChild(com);}
