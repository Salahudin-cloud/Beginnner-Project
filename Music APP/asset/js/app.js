
let songs = ['asset/songs/StandOutFitIn.mp3','asset/songs/Yesterday.mp3','asset/songs/Tabun.mp3'];
let currentSong = 0;
let bar = document.querySelector('.fill');
let song = new Audio();
let judulLagu = document.querySelector('.container .judul  h2');
let next = document.querySelector('#next');
let pre = document.querySelector('#pre');
const poster = ['asset/img/bg.png','asset/img/bg2.jpg','asset/img/bg3.jpg'];
const wallpaper = document.querySelector('#bg');
const picSong = document.querySelector('.pic');
window.onload = playSong;
function playSong () {
    song.src = songs[currentSong];
    song.play();
    judulLagu.innerHTML = songs[currentSong] ;

}

//change the play button to pause when click play 
const playBtn = document.querySelector('.container .wrapper #play');
playBtn.addEventListener('click',function(){
   if(song.paused){
       song.play();
       playBtn.setAttribute('src' , 'asset/img/Pause.png');
   }else {
       song.pause();
       playBtn.setAttribute('src' , 'asset/img/Play.png');
   }
});

song.addEventListener('timeupdate',function (){
    let position = song.currentTime / song.duration;
    bar.style.width = position * 100 + '%';
});

next.addEventListener('click',function (){
    currentSong++;
    if(currentSong > 2) {
        currentSong = 0;
    }
    playSong();
    playBtn.setAttribute('src' , 'asset/img/Pause.png');
    wallpaper.setAttribute('src' , poster[currentSong]);
    picSong.setAttribute('src', poster[currentSong]);

});

pre.addEventListener('click', function(){
    currentSong--;
    if(currentSong < 0  ) {
        currentSong = 2;
    }
    playSong();
    playBtn.setAttribute('src' , 'asset/img/Pause.png');
    wallpaper.setAttribute('src' , poster[currentSong]);
    picSong.setAttribute('src', poster[currentSong]);
})