var pages=0;
var clicks=0;
var abrir= new Audio ('musicas/abricarta.mp3');
var fundo= new Audio('musicas/textsong.mp3');
var images = new Array();
function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
				}
			}
			preload(
				"imgs/fundotextp1.png",
        "imgs/fundotextp2.png",
        "imgs/fundotextp3.png",
        "imgs/fundotextp4.png",
        "imgs/fundotextp5.png",
        "imgs/fundotextp6.png",
        "imgs/fundotextp7.png",
        "imgs/fundotextp8.png",
        "imgs/fundotextp9.png",	
        "imgs/fundotextp10.png",
        "imgs/fundotextp11.png",
        "imgs/fundotextp12.png",
        "imgs/fundotextp13.png",
        "imgs/fundotextp14.png",
        "imgs/fundotextp15.png",
        "imgs/fundotextp16.png",
        "imgs/fundotextp17.png",
        "imgs/fundotextp18.png",
        "imgs/fundotextp19.png",
        "imgs/fundotextp20.png",
        "imgs/fundotextp21.png",
        "imgs/fundotextp22.png",
        "imgs/fundotextp23.png",
        "imgs/fundotextp24.png",
        "imgs/fundotextp25.png",
			)
function abrircarta()
{
  const inicio =document.getElementById("inicio");
  inicio.style.visibility="hidden";
  const start =document.getElementById("start");
  start.style.visibility="hidden";
  const setair=document.getElementById("passar");
  setair.style.visibility="visible";
  abrir.play();
  passar();
}
window.addEventListener("load",function (){
 const load=document.getElementById("loading");
 load.style.visibility="hidden";
 const tudo=document.getElementById("tudo");
 tudo.style.backgroundColor="pink";
})
function passar()
{
  const setavoltar=document.getElementById("voltar");
  const ir=document.getElementById("passar");
 if(clicks==0)
 {
   pages++;
   fundo.play();
 }
 if(clicks==1)
 {
   clicks--;
 }
 if(pages==1)
 {
   const tudo=document.getElementById("tudo");
   tudo.style.backgroundImage="url('imgs/fundotextp1.png')";
  setavoltar.style.visibility="hidden";
     fundo.play();
 }
 if(pages==2)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp2.png')";
  setavoltar.style.visibility="visible";
     fundo.play();
 }
 if(pages==3)
 {
  tudo.style.backgroundImage="url('imgs/fundotextp3.png')"; 
     fundo.play();
 }
 if(pages==4)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp4.png')";
      fundo.play();
 }
  if(pages==5)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp5.png')";
      fundo.play();
 }
   if(pages==6)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp6.png')";
      fundo.play();
 }
   if(pages==7)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp7.png')";
      fundo.play();
 }
    if(pages==8)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp8.png')";
      fundo.play();
 }
     if(pages==9)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp9.png')";
      fundo.play();
 }
  if(pages==10)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp10.png')"; 
      fundo.play();
  } 
  if(pages==11)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp11.png')";
      fundo.play();
 }
   if(pages==12)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp12.png')";
      fundo.play();
 }
    if(pages==13)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp13.png')";
      fundo.play();
 }
     if(pages==14)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp14.png')";
      fundo.play();
 }
     if(pages==15)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp15.png')";
      fundo.play();
 }
      if(pages==16)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp16.png')";
      fundo.play();
 }
     if(pages==17)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp17.png')";
      fundo.play();
 }
      if(pages==18)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp18.png')";
      fundo.play();
 }
       if(pages==19)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp19.png')";
      fundo.play();
 }
        if(pages==20)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp20.png')";
      fundo.play();
 }
         if(pages==21)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp21.png')";
      fundo.play();
 }
          if(pages==22)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp22.png')";
      fundo.play();
 }
           if(pages==23)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp23.png')";
      fundo.play();
 }
            if(pages==24)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp24.png')";
   ir.style.visibility="visible"
      fundo.play();
 }
             if(pages==25)
 {
   tudo.style.backgroundImage="url('imgs/fundotextp25.png')";
   ir.style.visibility="hidden";
      fundo.play();
 }
}
function voltar()
{
  if(clicks==0)
  {
    pages-=1;
    clicks++;
    passar();
   }
}