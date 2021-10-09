class HarScript
{
    constructor(x , t)
    {
        x = this.x;
        t = this.t;
    }
    CreateAlert()
    {
   var c,d;
   c = document.createElement('div');
   c.id="5";
   c.setAttribute("style","top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.6);position:fixed;width:100%;height:100%;display:none");
   document.body.appendChild(c);
   d = document.createElement('iframe');
   d.id="c";
   d.setAttribute("style","pointer-events:none;color:#DDEFDA;word-wrap:break-word;left:25px;right:25px;margin:15% auto;-user-select:none;border:2px solid #ddd;border-radius:4px;background-color:#FFF;position:absolute;");
   d.style.width="280px";
   d.style.height="180px";
   d.style.frameBorder="0";
   c.appendChild(d);
    }
    CreateAlertBox() 
   {
    var LinkRel = document.createElement('link');
    LinkRel.rel = "stylesheet";
    LinkRel.type = "text/css";
    LinkRel.href = "https://spat-cloud.github.io/data/HarScript/Colorful-Alert/HAlertBoxStyle.css";
    document.head.appendChild(LinkRel);
    var HAlertBox = document.createElement('div');
    HAlertBox.id = "HAlertBox";
    document.body.appendChild(HAlertBox);
    var InnerHAlertBox = document.createElement('span');
    InnerHAlertBox.id = "InnerHAlertBox";
    HAlertBox.appendChild(InnerHAlertBox);
    var Para = document.createElement('p');
    Para.id = "Content";
    InnerHAlertBox.appendChild(Para);
    var RightButtonOk = document.createElement('button');
    RightButtonOk.id = "RightButtonOk";
    RightButtonOk.innerHTML = "OK";
    RightButtonOk.onclick = function() {this.parentElement.parentElement.style.display="none";};
    InnerHAlertBox.appendChild(RightButtonOk);
    }
HAlertBox(html) {
    var Ty = document.getElementById("HAlertBox");
    var der = document.getElementById("InnerHAlertBox");
    var AlertHtml = document.getElementById("Content");
    Ty.style.display = "block";
    der.style.animation = "comed 2s 1";
    AlertHtml.innerHTML = html;
}
    HAlert(cpp)
    {
var y,z;
  y = document.getElementById('5');
  z = document.getElementById('c');
  y.style.display="block";
  y.onclick=function(){this.style.display="none";};
  z.srcdoc=cpp;
    }
CreateWarning() {
    var Cg = document.createElement("div");
    Cg.id = "HarScript-0002";
    document.body.appendChild(Cg);
    var ZRt = document.createElement("span");
    ZRt.id = "HarScript-0004";
    Cg.appendChild(ZRt);
    var TTy = document.createElement("h1");
    //TTy.setAttribute("style" , "background-Color:Transparent Red; Margin-Left:16Px;Color:Yellow; Animation:Warning 0.8s Infinite;");
    TTy.id = "HarScript-0008";
    TTy.innerHTML = "&#9888; Warning!";
    ZRt.appendChild(TTy);
    var QM = document.createElement("p");
    QM.id = "HarScript-0016";
    //QM.settAttribute("style","color:#FFF; font-size:8px;margin-left:16Px;,margin-right:16px;");
    ZRt.appendChild(QM);
    var QqR = document.createElement("button");
    QqR.id = "HarScript-0032";

    QqR.onclick = function() {this.parentElement.parentElement.style.display="none";};
    QqR.innerHTML = "Ok";
    ZRt.appendChild(QqR);
}
HWarning(html) {
    var X, Y;
    X = document.getElementById("HarScript-0002");
    X.style.display = "Block";

    Y = document.getElementById("HarScript-0016");
    //Y = document.getElementById("HarScript-Warn-Box");
    //X = document.getElementById("HarScript-Warn-Outer");
    Y.innerHTML = html;
    HVibrate(4);
}
 $HId(r) {
    
    return document.getElementById(r);
}
 $HVanish(v) {
    
    return $HId(v).style.display = "none";
}

$HShow(c) {
    
    return $HId(c).style.display = "block";
}

 $HTag(t) {
    
    return document.getElementsByTagName(t);
}
}
