var controle=1;
var carta=1;
var fundo = new Audio('musicas/fundo.mp3');
var poemaback = new Audio('musicas/creepy.mp3');
var poemaback2 = new Audio('musicas/poemabackcomplete.mp3');
var somzinho = new Audio('musicas/selec.mp3');
var somzinho2 = new Audio('musicas/somzinho2.mp3');
var somzinho3 = new Audio('musicas/somzinho3.mp3');
var somzinho4 = new Audio('musicas/somzinho4.mp3');
var somzinho5 = new Audio('musicas/somzinho5.mp3');
var images = new Array();
function preload() {
for (i = 0; i <preload.arguments.length; i++) 
       {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
			 }
			}
			preload(
        "imgs/nuvemtextin.png",
        "imgs/nuvemdesenho.png",
        "imgs/nuvemmusic.png",
        "imgs/nuvemcreepy.png",
        "imgs/nuvemcreepy2.png",
        "imgs/nuvemdefault.png",
        "imgs/nuvemhelp2.png",
        "imgs/nuvemhelp3.png",
        "imgs/nuvemhelp4.png",
        "imgs/nuvemhelp5.png",
        "imgs/kuromimusicaedit2.png",
        "imgs/nada.png",
        "imgs/olho.gif",
        "imgs/pink.gif",
        "imgs/betterloveme.png",
        "imgs/betterloveme2.png",
        "imgs/kk.png",
        "imgs/kk2.png",
        "imgs/arte.gif",
        "imgs/cartinha.png",
        "imgs/cartinha2.png",
        "imgs/carta.png",
        "imgs/desf.gif",
        "imgs/musica.png",
        "imgs/help.png",
        "imgs/me.png",
        "imgs/killme.png",
        "imgs/desf.png",
        "imgs/sangue2.png",
        "imgs/nuvemhelp.png",
        "imgs/cartaafter.png",
        "imgs/ja.png",
			)

window.addEventListener("load",function (){
 const load=document.getElementById("loading");
 load.style.visibility="hidden";
 const tudo=document.getElementById("tudo");
 tudo.style.backgroundColor="pink";
 fundo.play();
})

function selectext()
{
  const escolha=document.getElementById('select');
  if(carta==1){
 escolha.style.backgroundImage="url('imgs/carta.png')";
  }else {escolha.style.backgroundImage="url('imgs/cartaafter.png')";}
  const textin=document.getElementById("escrita");
  escrita.style.backgroundImage="url('imgs/nuvemtextin.png')";
  if(carta>=2)
  {
  document.body.style.cursor = 'default';
  }else{document.body.style.cursor = 'pointer';}
 somzinho.play();
 fundo.play();
}

function abrircarta()
{
  if(carta==1){
  window.open("textinho.html");
  fundo.pause();
  carta++;}else if(carta==2){
  const caixa2=document.getElementById("caixa2");
  caixa2.style.visibility="visible";
   sim = setTimeout(sim,2000);
  carta++;
  }
}

function aindanao()
{
  if(prisao==1){
  caixa=document.getElementById("caixa");
  caixa.style.visibility="visible";
  outro = setTimeout(sim,3000);
  prisao++;
  }
}

function sim()
{
caixa2=document.getElementById("caixa2");
  caixa2.style.visibility="hidden";
}

function selectmusica()
{
const nuvem = document.getElementById("escrita");
 const escolha=document.getElementById('select');
 if(controle==1)
 {
 escolha.style.backgroundImage="url('imgs/help.png')";
 controle++;
 }
 else {if(controle==2)
 {
 escolha.style.backgroundImage="url('imgs/me.png')";  
 } controle++;}
if(controle==6)
 {
escolha.style.backgroundImage="url('imgs/killme.png')";
 }
 escolha.style.backgroundRepeat="no-repeat";
 if(controle<3){
 nuvem.style.backgroundImage="url('imgs/nuvemmusic.png')";
  somzinho.play();
 }else if(controle==3)
 {
 nuvem.style.backgroundImage="url('imgs/nuvemhelp.png')";
 somzinho3.play();
 }else if(controle==4)
 {
  nuvem.style.backgroundImage="url('imgs/nuvemhelp2.png')";
   somzinho4.play();
 }else if(controle==5)
 {
  nuvem.style.backgroundImage="url('imgs/nuvemhelp3.png')";
     somzinho5.play();
 }else if(controle==6)
 {
  nuvem.style.backgroundImage="url('imgs/nuvemhelp4.png')";
  somzinho2.play();
 }else if(controle==8)
 {
   help();
 }
  if(controle>8)
  {
    nuvem.style.backgroundImage="url('imgs/nuvemdefault.png')";
  }
  fundo.play();
}


function help()
{
 const nuvem=document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemhelp5.png')";
 me = setTimeout(me,3000);
}


function me()
{
 const nuvem=document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemdefault.png')";
}


function nada()
{

 const escolha=document.getElementById('select');
 escolha.style.backgroundImage="url('imgs/nada.png')";
  const tudo=document.getElementById('tudo');
 tudo.style.backgroundImage="url('imgs/nada.png')";
 escolha.style.backgroundSize="300px";
 const nuvem=document.getElementById("escrita");
 escrita.style.backgroundImage="url('imgs/nuvemdefault.png')";
 if (somzinho.played=true)
 {
   somzinho.currentTime="0";
   somzinho.pause();
 }
 fundo.play();
 document.body.style.cursor="default";
}


function creepy()
{
   const semitudo=document.getElementById("semitudo").style.opacity="0";
   const tudo=document.getElementById('tudo');
   if(controle<6){
  tudo.style.backgroundImage="url('imgs/olho.gif')";
  tudo.style.backgroundColor="red";
   }else if(controle>=6)
   {
  tudo.style.backgroundImage="url('imgs/olho.gif')";
  tudo.style.backgroundColor="black";
  const nuvem = document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemcreepy2.png')";  
   }
   if(controle<6){
  const text=document.getElementById("text");
  text.style.paddingBottom="30px";
  text.style.backgroundImage="url('imgs/pink.gif')";
   }else if(controle>=6)
   {
    text.style.backgroundImage="url('imgs/cartinha2.png')";
   }
   const escolha=document.getElementById('select');
   if(controle<6)
   {
 escolha.style.backgroundImage="url('imgs/betterloveme.png')";
  }else if(controle>=6)
  {
     escolha.style.backgroundImage="url('imgs/betterloveme2.png')";
     const poema = document.getElementById("poema");
     poema.style.backgroundImage="url('imgs/sangue2.png')";
   poemaback.play();
   poemaback2.play();
  }
 const musica=document.getElementById('musica');
 if(controle<6){
 musica.style.backgroundImage="url('imgs/kk.png')";
 }else {musica.style.backgroundImage="url('imgs/kk2.png')";}
 musica.style.backgroundSize="80px";
 musica.style.paddingRight="10px";
 musica.style.paddingBottom="75px";
 const desenho=document.getElementById('desenho');
 if(controle<6){
 desenho.style.backgroundImage="url('imgs/desf.gif')";
 }else if(controle>=6)
 {
  desenho.style.backgroundImage="url('imgs/desf.png')"; 
 }
 desenho.style.backgroundSize="200px";
 if(controle<6){
 const nuvem = document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemcreepy.png')";  
 }
  const caixa=document.getElementById("caixa2");
  caixa.style.visibility="hidden";
   poemaback.play();
   fundo.pause();
}


function selectdesenho()
{
 const escolha=document.getElementById('select');
  escolha.style.backgroundImage="url('imgs/arte.gif')";
 escolha.style.backgroundRepeat="no-repeat";
 const nuvem = document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemdesenho.png')";
  somzinho.play();
  fundo.play();
}



function normal()
{
  const poema=document.getElementById("poema");
  poema.style.backgroundImage="url('imgs/sangue.png')";
  const semitudo=document.getElementById("semitudo").style.opacity="1";
  const text=document.getElementById("text");
  text.style.backgroundImage="url('imgs/cartinha.png')";
  text.style.paddingBottom="55px";
  const tudo=document.getElementById('tudo');
  tudo.style.backgroundColor="pink";
  const musica=document.getElementById('musica');
 musica.style.backgroundImage="url('imgs/musica.png')";
 musica.style.backgroundSize="100px";
 musica.style.paddingRight="20px";
 musica.style.paddingBottom="55px";
  const desenho=document.getElementById('desenho');
 desenho.style.backgroundImage="url('imgs/desenho.png')";
 desenho.style.backgroundSize="100px";
  if(controle>=6)
 {
   poemaback2.pause();
 }
 poemaback.pause();
 fundo.play();
}