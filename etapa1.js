var controlegeral=1;
var images = new Array();
nome();
window.onload=function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
				}
			}
			preload(
        "imgs/assustp4fundo.png",
      )      
function comeco()
{ if(controlegeral==1)
  {
  comeco =setTimeout(fase1,10000);
  controlegeral++;
  }else{}
}
function fase1()
{
  const etapa1 = document.getElementById("etapa1");
  etapa1.style.visibility="hidden";
  const etapa2 = document.getElementById("etapa2");
  etapa2.style.visibility="visible";
  controle = setTimeout(fase2,5000);
}
function fase2()
{
  const etapa2 = document.getElementById("etapa2");
  etapa2.style.visibility="hidden";
  const etapa3 = document.getElementById("etapa3");
  etapa3.style.visibility="visible";
  controle2=setTimeout(fase3,5000);
}
function fase3()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/assustp4fundo.png')";
  tudo.style.backgroundSize="100%";
  tudo.style.backgroundSize="no-repeat"
  const etapa3 = document.getElementById("etapa3");
  etapa3.style.visibility="hidden";
  controle3 = setTimeout(fase4,4000);
}
function fase4()
{
  window.location.replace("index2.html");
}