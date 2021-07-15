function Op(){
       var i ,cA , cB , cC ,cD;
var B = ["Doraemon" , "Nobita Nobi" ,"Shizuka Minamoto" ,"Takesi Goda" ,"Suneo Honekawa" ,"Degisuki" ,"tamako" ,"Teacher","Shinchan"];
 var Src = ["https://spat-cloud.github.io/data/DORAEMON1.png" , "https://spat-cloud.github.io/data/Profile/Nobi Nobita.png" , 
            "https://spat-cloud.github.io/data/Profile/Shizuka Minamoto.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Takesi Goda.png" , 
            "https://spat-cloud.github.io/data/Profile/Suneo Honekawa.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Dekisugi.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Tamako.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Teacher.jfif" , 
            "https://spat-cloud.github.io/data/Profile/Shinchan.png"];
    for(i=0; i < 9 ; i++) {
       cA = document.createElement('div');
       cA.id="All";
       document.body.appendChild(cA);
cB = document.createElement('div');
cB.id="Person";
cA.appendChild(cB);
       cC= document.createElement('img');
       cC.id = "Profile";
       cC.src = Src[i];
       cC.style.width = "80px";
       cC.style.height = "100px";
       cA.appendChild(cC);
       cD = document.createElement('div');
     cD.innerHTML =  B[i];
       cD.id="Pname";
       cA.appendChild(cD);
    }  
    var Img = ["https://spat-cloud.github.io/data/Call_End.png" , "https://spat-cloud.github.io/data/Video_Disabled.png" , "https://spat-cloud.github.io/data/Microphone_Disabled.png"];
  var T = document.createElement('div');
  T.id="Controls";
  document.body.appendChild(T);
  var J ,K ,l;
  for(J=0 ; J < 3 ; J++){
K = document.createElement('button');
    K.id="btn";
    K.disabled;
    T.appendChild(K);
    l = document.createElement('img');
    l.id="ico";
    l.src=Img[J];
    l.style.width="40px";
    l.style.height="40px";
    K.appendChild(l);
  }
   }