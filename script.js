console.log("Spotify clone");
let songIndex = 0;
let audioElement = new Audio('bgms/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Vikram Title Track Lyric", filePath: "bgms/1.mp3", coverPath: "covers/cover1.png" },
    { songName: "Lokiverse Theme Song", filePath: "bgms/2.mp3", coverPath: "covers/cover2.png" },
    { songName: "LEO Lokiverse 2.0 Theme Song", filePath: "bgms/3.mp3", coverPath: "covers/cover3.png" },
    { songName: "Jawan Prevue Theme Song", filePath: "bgms/4.mp3", coverPath: "covers/cover4.png" },
    { songName: "Hukum Thalaivar Alappara Song", filePath: "bgms/5.mp3", coverPath: "covers/cover5.png" },
    { songName: "JD Intro Theme Song", filePath: "bgms/6.mp3", coverPath: "covers/cover6.png" },
    { songName: "Rolex Entry Bgm", filePath: "bgms/7.mp3", coverPath: "covers/cover7.png" },
    { songName: "Vedalam The Theri Theme Lyric", filePath: "bgms/8.mp3", coverPath: "covers/cover8.png" },
    { songName: "Master The Blaster", filePath: "bgms/9.mp3", coverPath: "covers/cover9.png" },
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByClassName('songName').innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `bgms/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `bgms/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `bgms/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})