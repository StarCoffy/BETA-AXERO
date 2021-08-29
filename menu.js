var senha="Bunny";
var prisao=1;
var carta=1;
var fundo = new Audio('musicas/fundo.mp3');
var poemaback = new Audio('musicas/creepy.mp3');
var somzinho = new Audio('musicas/selec.mp3');
var images = new Array();
function preload() {
for (i = 0; i < preload.arguments.length; i++) 
       {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
			 }
			}
			preload(
        "imgs/aindanao.png",
        "imgs/nuvemdefault.png",
        "imgs/nuvemtextin.png",
        "imgs/nuvemdesenho.png",
        "imgs/nuvemmusic.png",
        "imgs/nuvemcreepy.png",
        "imgs/kuromimusicaedit2.png",
        "imgs/nada.png",
        "imgs/olho.gif",
        "imgs/pink.gif",
        "imgs/betterloveme.png",
        "imgs/kk.png",
        "imgs/arte.gif",
        "imgs/cartinha.png",
        "imgs/carta.png",
        "imgs/cartaafter.png",
        "imgs/ja.png",
        "imgs/desf.gif",
        "imgs/musica.png",
			)
nome=prompt("Senha?")
if(nome==senha)
{
  alert("Espero que goste uwu");
}
else while(prisao==1)alert("Saia");

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

function selectmusica()
{
 const escolha=document.getElementById('select');
 escolha.style.backgroundImage="url('imgs/kuromimusicaedit2.png')";
 escolha.style.backgroundRepeat="no-repeat";
 const nuvem = document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemmusic.png')";
 somzinho.play();
 fundo.play();
}

function nada()
{
 const escolha=document.getElementById('select')
 escolha.style.backgroundImage="url('imgs/nada.png')";
  const tudo=document.getElementById('tudo')
 tudo.style.backgroundImage="url('imgs/nada.png')";
 escolha.style.backgroundSize="300px";
 const nuvem=document.getElementById("escrita");
 escrita.style.backgroundImage="url('imgs/nuvemdefault.png')";
 if (somzinho.played=true)
 {
   somzinho.currentTime="0";
   somzinho.pause();
 }
 document.body.style.cursor="default";
}

function creepy()
{
   const semitudo=document.getElementById("semitudo").style.opacity="0";
   const tudo=document.getElementById('tudo')
  tudo.style.backgroundImage="url('imgs/olho.gif')";
  tudo.style.backgroundColor="red";
  const text=document.getElementById("text");
  text.style.paddingBottom="30px";
  text.style.backgroundImage="url('imgs/pink.gif')"
   const escolha=document.getElementById('select')
 escolha.style.backgroundImage="url('imgs/betterloveme.png')";
 const musica=document.getElementById('musica');
 musica.style.backgroundImage="url('imgs/kk.png')";
 
 musica.style.backgroundSize="80px";
 musica.style.paddingRight="10px";
 musica.style.paddingBottom="75px";
 const desenho=document.getElementById('desenho')
 desenho.style.backgroundImage="url('imgs/desf.gif')";
 desenho.style.backgroundSize="200px";
 const nuvem = document.getElementById("escrita");
 nuvem.style.backgroundImage="url('imgs/nuvemcreepy.png')"; 
   const caixa2=document.getElementById("caixa2");
  caixa2.style.visibility="hidden";
   poemaback.play();
   fundo.pause();
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
caixa=document.getElementById("caixa");
  caixa.style.visibility="hidden";
caixa2=document.getElementById("caixa2");
  caixa2.style.visibility="hidden";
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
  const semitudo=document.getElementById("semitudo").style.opacity="1";
  const text=document.getElementById("text");
  text.style.backgroundImage="url('imgs/cartinha.png')"
  text.style.paddingBottom="55px";
 const tudo=document.getElementById('tudo')
  tudo.style.backgroundColor="pink";
  const musica=document.getElementById('musica')
 musica.style.backgroundImage="url('imgs/musica.png')";
 musica.style.backgroundSize="100px";
 musica.style.paddingRight="20px";
 musica.style.paddingBottom="55px";
  const desenho=document.getElementById('desenho')
 desenho.style.backgroundImage="url('imgs/desenho.png')";
 desenho.style.backgroundSize="100px";
 const caixa=document.getElementById("caixa");
  caixa.style.visibility="hidden";
 poemaback.pause();
 fundo.play();
}