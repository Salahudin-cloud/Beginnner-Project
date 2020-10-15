//Dark Mode 
const darkMod = document.querySelector('.container .dark-mode');
const header = document.querySelector('.container .judul');
const judul = document.querySelector('.container .judul .tulisan-judul');
const body = document.getElementsByTagName('body')[0];
const wilayahComputer = document.querySelector('.container .permainan .wilayah-komputer');
const wilayahUser = document.querySelector('.container .permainan .wilayah-player');
const hasil = document.querySelector('.container .permainan .kotak-hasil');
darkMod.addEventListener('click', function(){
   header.style.backgroundColor = '#fff';
   judul.style.color = '#111';
   body.style.backgroundColor = '#18191a';
   wilayahComputer.style.border = '5px solid #000';
   wilayahComputer.style.backgroundColor = '#fff';
   wilayahComputer.style.color = '#fff';
   wilayahUser.style.border = '5px solid #000';
   wilayahUser.style.backgroundColor = '#fff';
   wilayahUser.style.color = '#000';
   hasil.style.border = '5px solid rgb(0, 0, 0)';
});

darkMod.addEventListener('dblclick',function(){
   header.style.backgroundColor = '#292828';
   judul.style.color = '#fff';
   body.style.backgroundColor = '#ffff';
   wilayahComputer.style.border = '5px solid #000';
   wilayahComputer.style.backgroundColor = 'hsl(199, 82%, 58%)';
   wilayahComputer.style.color = '#000';
   wilayahUser.style.border = '5px solid #000';
   wilayahUser.style.backgroundColor = 'hsl(140, 71%, 51%)';
   wilayahUser.style.color = '#000';
   hasil.style.border = '5px solid rgb(245,76,76)';
});

//game 
//pilihan computer 
function getPilihanComputer(){
   const comp = Math.random();
   if(comp  < 0.34) return 'gajah';
   if(comp >= 0.34 && comp < 0.67) return 'orang';
   return 'semut';
}
//rule 
function getHasil(comp , player){
   if(player == comp) return 'SERI';
   if(player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
   if(player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
   if(player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
} 

function putar(){
   const imgComputer = document.querySelector('.gajahComputer');
   const gambar = ['gajah','orang','semut'];
   const waktuSekarang = new Date().getTime();
   let i = 0;
   setInterval(function(){
      if(new Date().getTime() - waktuSekarang > 1000){
         clearInterval();
         return;
      }
      imgComputer.setAttribute('src', 'asset/img/' + gambar[i++] + '.png');
      if(i == gambar.length) i = 0;
   },100);
  
}
const pilihan = document.querySelectorAll('.container .permainan li img');
pilihan.forEach(function(pil){
   pil.addEventListener('click', function(){
      const pilihanComputer = getPilihanComputer();
      const pilihanPlayer = pil.className;  
      const hasil = getHasil(pilihanComputer,pilihanPlayer);
     
     
     
      putar();
     
     
     
      setTimeout(function(){
         const imgComputer = document.querySelector('.container .permainan .gajahComputer');
         imgComputer.setAttribute('src', 'asset/img/' + pilihanComputer + '.png');
         const kotakHasil = document.querySelector('.container .permainan .kotak-hasil');
         kotakHasil.innerHTML = hasil;
      },1000);
   });
});
