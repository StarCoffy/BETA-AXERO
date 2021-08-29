var fundo = new Audio('musicas/poemasong.mp3');
var fundoantes = new Audio('musicas/asayonara.mp3');
var fundoantes2 = new Audio('musicas/doki.mp3');
var abrir = new Audio('musicas/poemapagina.mp3');
var glitch = new Audio('musicas/glitch.mp3');
var aa = new Audio('musicas/aa.mp3');
var creepyost = new Audio('musicas/creepyost.mp3');
var senha="foreverandever";
var prisao=1;
var controlevoltar=1;
var delay,delayback,normal,plus,plus2,plus3;
nome();

function nome(){
nome=prompt("Digite a senha:");
  if(nome==senha)
  {
    alert("добро пожаловать, любовь моя, наслаждайтесь");
  }
  else 
  {while(prisao==1)
  alert("SAIA FILHO DA PUTA");
  }
}

window.addEventListener("load",function (){
 sumir();
 tocar();
})
function sumir()
{
   const load=document.getElementById("loading");
 load.style.visibility="hidden";
}
function tocar()
{
 fundoantes2.play(); 
}
function abrirpoema()
{
  abrir.play();
  const poema=document.getElementById('poema');
  poema.style.opacity='1';
  const bottao=document.getElementById('bottao');
  bottao.style.opacity='0';
  bottao.style.userSelect='none';
  const voltar=document.getElementById("voltar");
  voltar.style.visibility="visible";
  fundo.play();
}
function scary()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('ideias/assust.jpg')";
  const bottao=document.getElementById('bottao');
  bottao.style.opacity='0';
  aa.play();
  
}
function scrarypart()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/assust.png')";
}
function scrarypart2()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/assustp2.png')";
}
function scrarypart3()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/assustp3.png')";
  aa.pause();
}
function normal()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/fundopoemaedit8.png')";
  tudo.style.backgroundSize="110%";
  glitch.play();
}
function normal2()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/fundopoemaedit8.png')";
  tudo.style.backgroundSize="110%";
}
function delaypoema() 
{
  if(prisao==1)
  {
  fundoantes2.pause();
  delayback = setTimeout(scary,2000);
  plus = setTimeout(scrarypart,4000);
  plus2 = setTimeout(scrarypart2,6000);
  normal = setTimeout(normal,10000);
  plus3 = setTimeout(scrarypart3,34500);
  normal2 = setTimeout(normal2,36000);
  delay = setTimeout(abrirpoema,36000);
  }
  prisao++;
}
function voltar()
{
  if(controlevoltar==1)
  {
  const semitudo = document.getElementById("semitudo");
  semitudo.style.visibility="hidden";
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/nada.png')";
  const voltar=document.getElementById("voltar");
  voltar.style.visibility="hidden";
  fundo.pause();
  controle=setTimeout(voltar1,5000);
  controlevoltar++;
  }
}
function voltar1()
{
  const tudo=document.getElementById("tudo");
  tudo.style.backgroundImage="url('imgs/assustp4voltar.png')";
  creepyost.play();
  controle1=setTimeout(voltar2,7000);
}
function voltar2()
{
  window.location.replace("index.html");
}
