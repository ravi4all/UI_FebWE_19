window.addEventListener("load", initEvents);
var audio;
var playBtn;
var playState = false;
var slide;
var minRemaining;
var secRemaining;

function initEvents() {
    audio = document.querySelector("#audio");
    playBtn = document.querySelector("#play");
    slide = document.querySelector("#slide");
    slide.addEventListener("change", seekSong);
    document.querySelector("#save").addEventListener("click", savePlaylist);
    document.querySelector("#load").addEventListener("click", loadPlaylist);
    minRemaining = document.querySelector("#minutesRemaining");
    secRemaining = document.querySelector("#secondsRemaining");
    var ul = document.querySelector("#songsList");
    playBtn.addEventListener("click", togglePlayState);
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.song_name;
        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Playlist";
        btn.className = "btn btn-primary w-100";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        span.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlaylist);
    })
}

function savePlaylist() {
    if (window.localStorage) {
        var json = JSON.stringify(obj.playList);
        localStorage.setItem('myPlaylist', json);
    } else {
        alert("Localstorage not supported...");
    }
}

function loadPlaylist() {
    var data = localStorage.getItem('myPlaylist');
    obj.playList = JSON.parse(data);
    printSong();
}

function playSong() {
    var span = document.querySelector("#currentSong");
    // console.log("Playing...");
    var songName = event.srcElement.parentElement.children[1].innerText;
    span.innerHTML = songName;
    // console.log(songName);
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_name == songName) {
            var songUrl = songsList[i].song_url;
        }
    }
    playState = false;
    audio.src = songUrl;

    setTimeout(function() {
        var duration = audio.duration;
        slide.max = duration;
        var minutes = parseInt(duration / 60);
        var seconds = parseInt(duration % 60);
        minRemaining.innerHTML = minutes;
        secRemaining.innerHTML = seconds;
    }, 500);
    setInterval(function() {
        slide.value = audio.currentTime;
    }, 1000);
    setInterval(function() {
        secRemaining.innerHTML -= 1;
        // console.log(secRemaining.innerHTML);
        if (secRemaining.innerHTML == 0) {
            secRemaining.innerHTML = 60;
        }
    }, 1000);
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

function seekSong() {
    var value = slide.value;
    audio.currentTime = value;
    // console.log(value);
}

function addToPlaylist() {
    var songName = event.srcElement.parentElement.children[1].innerHTML;
    // console.log(songName);
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_name == songName) {
            obj.addSong(songsList[i].song_id, songsList[i].song_name, songsList[i].song_url, songsList[i].song_thumb);
            break
        }
    }
    printSong();
}

function printSong() {
    var ul = document.querySelector("#playlist");
    ul.innerHTML = "";
    obj.playList.forEach(function(obj) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.innerHTML = obj.name;
        var img = document.createElement("img");
        img.setAttribute('src', obj.image);
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "btn btn-primary";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        span.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlaylist);
    })
}

function deleteFromPlaylist() {
    var songName = event.srcElement.parentElement.children[1].innerHTML;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_name == songName) {
            obj.deleteSong(songsList[i].song_id);
            break
        }
    }
    printSong();
}