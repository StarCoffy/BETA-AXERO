var images = new Array();
nome();
window.onload=function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
				}
			}
			preload
      (
        "imgs/escute.png",
        "imgs/escute1.png",
        "imgs/escute2.png",
        "imgs/escute3.png",
        "imgs/escute4.png",
        "imgs/404p1.png",
      )


function page1()
{
  const fase1=document.getElementById("fase1"); 
  const erasim= document.getElementById("erasim");
  erasim.style.visibility="visible";
  fase1.style.visibility="hidden";
}
function page2()
{
    const erasim= document.getElementById("erasim");
    const real=document.getElementById("real?");
  real.style.visibility="visible";
  erasim.style.visibility="hidden";
}
function page3()
{
  const real=document.getElementById("real?");
  real.style.visibility="hidden";
  const escute=document.getElementById("escute");
  escute.style.visibility="visible";
}
function page4()
{
  const escute = document.getElementById("escute");
  escute.style.visibility="hidden";
  const escute2 = document.getElementById("escute1");
  escute2.style.visibility="visible";
  const tudo = document.getElementById("tudo");
  tudo.style.backgroundColor="red";
}