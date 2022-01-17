/*
  Copyright © 2022 SonPanAbTej SPAT
  DORAEMON 2112 / NETDORM License
  2022-01-17 16:59:?? Mon Jan changes made
*/
window.addEventListener("beforeunload" , functioneren(event){event.returnValue = "some";});window.addEventListener("contextmenu" ,function(e){e.preventDefault();},false);
function Joner()
{
 var B = ["Doraemon" , "Nobita Nobi" ,"Shizuka Minamoto" ,"Takesi Goda" ,"Suneo Honekawa" ,"Degisuki" ,"U Harsha" ,"Teacher","Shinchan"];
 var Src = ["https://spat-cloud.github.io/data/DORAEMON1.png" , "https://spat-cloud.github.io/data/Profile/Nobi Nobita.png" , 
            "https://spat-cloud.github.io/data/Profile/Shizuka Minamoto.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Takesi Goda.png" , 
            "https://spat-cloud.github.io/data/Profile/Suneo Honekawa.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Dekisugi.jfif" , 
"https://spat-cloud.github.io/data/31.jpg", "https://spat-cloud.github.io/data/Profile/Teacher.jfif" , "https://spat-cloud.github.io/data/Profile/Shinchan.png"];
j = document.querySelectorAll("#Person");
 g = document.querySelectorAll("#Profile");
 h = document.querySelectorAll("#Pname");
 hjk = document.getElementById("Left-Message");
 he = document.getElementById("Mes");
for(i=0 ;i<g.length;i++)
 {
  g[i].src = Src[i];
}
for(k=0;k<h.length;k++)
{
h[k].innerHTML = B[k];
}

}
