
function LoadGIF(){
  var g = document.createElement('img');
  g.src="https://spat-cloud.github.io/data/Loader.gif";
  g.style.width="100px";
  g.style.height="60px";
  g.setAttribute("style","margin:1% auto;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);position:fixed");document.body.appendChild(g);
  setTimeout(() => g.style.display = "none",8000);
}
function xyza(){
if(window.location.host=="vv-1757.github.io"){
 
 dvs=document.querySelectorAll('div');
 im=document.querySelectorAll('iframe');
 Array.from(dvs).forEach(iop=>iop.remove());
 Array.from(im).forEach(jj=>jj.style.display="none");
  document.body.innerHTML=`<h1 style="width:100%; height:100%;position:fixed;left:0;right:0;background-color:#ff0000;color:#fff; font-size:17px; padding:.5em;margin:0; border-radius:.5em;">Temporarily Unavailable Contact <a href="https://spat-cloud.github.io/download" style="text-decoration:none;color:#ccc;">admin</a></h1>`;
}else{
  LoadGIF();
}}
document.addEventListener("mouseover",xyza,{once:true});


