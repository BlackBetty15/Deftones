
var player=document.getElementById("audioPlayer");
var imgAnime=document.getElementById("imgAnime");
var currentName=document.getElementById("currentName");
currentName .innerHTML='Choose a song...';
var album=document.getElementById("album");
var playBtn=document.getElementById("play");
var now=document.getElementById("now");
var sum=document.getElementById("sum");
var playlist=document.getElementsByClassName("playList");

    for(var i=0;i<playlist.length;i++){
        playlist[i].addEventListener("click",function(){

            audioSrc="audio/"+ this.getAttribute("data-songName")+".mp3";
            name=this.getAttribute("data-songName");
            albumName=this.getAttribute("data-albumName");
            albumLink=this.getAttribute("data-image");

            player.setAttribute("src",audioSrc);
            player.play();
            currentName.innerHTML=name;
            album.innerHTML=albumName;
            imgAnime.style.backgroundImage="url("+albumLink+")";
            playBtn.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
        });

    }

playBtn.addEventListener("click",function () {
    if(player.paused) {
        player.play();
        playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
        imgAnime.style.visibility="visible";
    } else {
        player.pause();
        playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        imgAnime.style.visibility="hidden";
    }
});
var idInterval=setInterval(function(){

    now.innerHTML=readableDuration(player.currentTime);
},100);

player.addEventListener('loadedmetadata',function () {
    sum.innerHTML=readableDuration(player.duration);
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




