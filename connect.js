/*
  Copyright © 2022 SonPanAbTej SPAT
  DORAEMON 2112 / NETDORM License
  2022-01-17 16:59:?? Mon Jan changes made
*/
window.addEventListener("beforeunload" , functioneren(event){event.returnValue = "some";});window.addEventListener("contextmenu" ,function(e){e.preventDefault();},false);function Joner(){
 var B = ["Doraemon" , "Nobita Nobi" ,"Shizuka Minamoto" ,"Takesi Goda" ,"Suneo Honekawa" ,"Degisuki" ,"tamako" ,"Teacher","Shinchan","U Harsha"];
 var Src = ["https://spat-cloud.github.io/data/DORAEMON1.png" , "https://spat-cloud.github.io/data/Profile/Nobi Nobita.png" , 
            "https://spat-cloud.github.io/data/Profile/Shizuka Minamoto.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Takesi Goda.png" , 
            "https://spat-cloud.github.io/data/Profile/Suneo Honekawa.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Dekisugi.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Tamako.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Teacher.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Shinchan.png"
             "https://spat-cloud.github.io/data/31.jpg"
];
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
setTimeout(() => j[6].style.display ='none', 6000);
setTimeout(() => j[7].style.display ='none', 8000);
setTimeout(() => j[5].style.display ='none', 10000);
setTimeout(() => j[4].style.display ='none', 12000);
setTimeout(() => j[8].style.display ='none', 16000);
setTimeout(() => j[3].style.display ='none', 18000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "tamako left meeting";},7000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Teacher left meeting";},9000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Degisuki left meeting";},14000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Suneo Honekawa left meeting";},18000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Shinchan is Removed By Doraemon";},20000);
setTimeout(function(){hjk.style.display ='block';he.innerHTML = "Takesi Goda left meeting";},22000);}
