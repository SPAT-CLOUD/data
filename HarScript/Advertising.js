function HAdv(Url,Msg,RURL,Bmsg){
var cc = document.createElement('link');
cc.rel="stylesheet";
cc.href="https://spat-cloud.github.io/data/HarScript/Advertising.css";
document.head.appendChild(cc);
var G = document.createElement('div');
G.setAttribute("style","display:none;width:100%;Height:100%;top:0;Bottom:0;Left:0;Right:0;background-color:rgba(0,0,0,0.8);position:fixed;");
G.style.display="block";
G.style.animation="Gb 2s 1";
document.body.appendChild(G);
var H = document.createElement('span');
H.setAttribute("style","background-color:#FFFFFF;Color:#000000;text-align:center;Left:1%;Right:1%;top:1%;bottom:20px;font-size:15px;Padding-bottom:120px;position:fixed;");
G.appendChild(H);
var I = document.createElement('span');
I.setAttribute("style","background-Color:#9C9C9C;Color:#FFFFFF;font-size:20px;padding:12px 24px;top:0;left:0;right:0;position:absolute;");
I.innerHTML="Ad";
H.appendChild(I);
var J = document.createElement('button');
J.setAttribute("style","Float:Right;Color:#000000;Font-weight:Bold;Background-Color:#9C9C9C;Border:2px Solid #000000;Border:none;padding:0;Font-size:28px;top:0;right:0;border-radius:6px;Position:absolute;");
J.innerHTML="&times;";
J.onclick=function(){Vf(this)};
H.appendChild(J);
var K = document.createElement('br');
H.appendChild(K);
var L = document.createElement('br');
H.appendChild(L);
var M = document.createElement('br');
H.appendChild(M);
var N = document.createElement('br');
H.appendChild(N);
var O = document.createElement('img');
O.src=Url;
O.width="240";
O.height="180";
H.appendChild(O);
var P = document.createElement('p');
P.style.color="#73ADEF";
P.style.fontSize="14px";
P.style.fontWeight="bold";
P.innerHTML = Msg;
H.appendChild(P);
var Hf = document.createElement('a');
Hf.style.textDecoration="none";
Hf.style.color="#FFFFFF";
Hf.href=RURL;
H.appendChild(Hf);
var Q = document.createElement('button');
Q.setAttribute("style","color:White;Background-Image:Linear-gradient(to Bottom , Green , Lightgreen);width:100%;BOrder:None;bottom:0;Left:0;Right:0;Font-size:10px;Padding:12px;Font-weight:bold;Position:Absolute;");
Q.innerHTML=Bmsg;
Hf.appendChild(Q);}
function Vf(x){x.parentElement.parentElement.style.display="none";}
function start(){
    setTimeout(()  => HAdv("https://i.ytimg.com/vi_webp/I3smzfz5oe4/mqdefault.webp" , "Watch Shinchan Movie Golden Sword Deleted Scenes On Youtube","https://m.youtube.com/watch?v=I3smzfz5oe4&list=PLfiin_UZFjZR1YIsh3S9iPQVE2vi3MgQ1&index=1" , "Watch Now For Free"), 4000);
}
start();
