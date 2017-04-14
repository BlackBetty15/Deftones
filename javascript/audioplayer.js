
var player=document.getElementById("audioPlayer");
var slika=document.getElementById("imgAnime");
var trenutnoIme=document.getElementById("trenutnoIme");
trenutnoIme .innerHTML='Choose a song...';
var album=document.getElementById("album");
var dugme=document.getElementById("play");
var trenutno=document.getElementById("trenutno");
var ukupno=document.getElementById("ukupno");
var playlist=document.getElementsByClassName("playList");

    for(var i=0;i<playlist.length;i++){
        playlist[i].addEventListener("click",function(){

            audioSrc="audio/"+ this.getAttribute("data-songName")+".mp3";
            name=this.getAttribute("data-songName");
            albumName=this.getAttribute("data-albumName");
            albumLink=this.getAttribute("data-image");

            player.setAttribute("src",audioSrc);
            player.play();
            trenutnoIme.innerHTML=name;
            album.innerHTML=albumName;
            slika.style.backgroundImage="url("+albumLink+")";
            dugme.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
        });

    }

dugme.addEventListener("click",function () {
    if(player.paused) {
        player.play();
        dugme.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        slika.style.visibility="visible";
    } else {
        player.pause();
        dugme.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        slika.style.visibility="hidden";
    }
});
var idIntervala=setInterval(function(){

    trenutno.innerHTML=readableDuration(player.currentTime);
},100);

player.addEventListener('loadedmetadata',function () {
    ukupno.innerHTML=readableDuration(player.duration);
});
player.addEventListener('ended',function () {
    control.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>';
});

function readableDuration(seconds) {
    sec = Math.floor(seconds);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
}




