const musicContainer = document.querySelector('.absolute_foot');
const playBTN = document.querySelector('#play');
const prevBTN = document.querySelector('#prev');
const nextBTN = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');

//song title
const songs = ['505'];

// default song track
let songIndex = 0;

function playSong(){
    musicContainer.classList.add('play');
    playBTN.querySelector( 'i.fa').classList.remove('fa-play-circle')
    playBTN.querySelector('i.fa').classList.add('fa-pause-circle')

    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBTN.querySelector('i-fa').classList.add('fa-play-circle');
    playBTN.querySelector('i-fa').classList.remove('fa-pause-circle');

    audio.pause();
}

playBTN.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})