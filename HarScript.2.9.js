function HARSCRIPT()
{
   var Script = new XMLHttpRequest();
   Script.onload = function()
                   {
                     eval(this.responseText);
                   };
   Script.open("GET","https://spat-cloud.github.io/data/HarScript/HarScript.v2.9.Latest.min.js",true);
   Script.send(null);
}HARSCRIPT();
