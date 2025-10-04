
function LoadGIF(){
  var g = document.createElement('img');
  g.src="https://spat-cloud.github.io/data/Loader.gif";
  g.style.width="100px";
  g.style.height="60px";
  g.setAttribute("style","margin:1% auto;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8);position:fixed");document.body.appendChild(g);
  setTimeout(() => g.style.display = "none",8000);
}
async function xyza(){
if(window.location.host.includes("vv-1757")){
window.open("https://spat-cloud.github.io/new/") 
}else{
  LoadGIF();
}}
document.addEventListener("mouseover",xyza,{once:true});


