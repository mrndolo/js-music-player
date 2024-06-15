let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.textContent === "pause"){
        song.pause();
        ctrlIcon.textContent = "play_arrow";
    }
    else{
        song.play();
        ctrlIcon.textContent = "pause";
        console.log(ctrlIcon.textContent);
    }
}