window.addEventListener("load", initEvents);
var audio;
var playBtn;
var playState = false;

function initEvents() {
    audio = document.querySelector("#audio");
    playBtn = document.querySelector("#play");
    var ul = document.querySelector("#songsList");
    playBtn.addEventListener("click", togglePlayState);
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);

        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    })
}

function playSong() {
    var span = document.querySelector("#currentSong");
    // console.log("Playing...");
    var songName = event.srcElement.parentElement.innerText;
    span.innerHTML = songName;
    // console.log(songName);
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_name == songName) {
            var songUrl = songsList[i].song_url;
        }
    }
    playState = false;
    audio.src = songUrl;
    togglePlayState();
}

function togglePlayState() {
    playState = !playState;
    toggleSong();
}

function toggleSong() {
    if (playState) {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}