const musicContainer = document.querySelector('.music-container'),

    playBtn = document.querySelector("#play"),

    prevBtn = document.querySelector("#prev"),

    nextBtn = document.querySelector("#next"),

    audio = document.querySelector("audio"), 

    progress  = document.querySelector(".progress"),

    progressContainer = document.querySelector('.progress-container'),

    title = document.querySelector("#title"),

    cover = document.querySelector(".img-container img")



const songs = ['Dusuma', 'Jamila', 'This Kind', 'The Way', 'In Love']    



let songIndex = 0


const loadSong = (song) =>{

       title.innerText = song

       audio.src = `Music/${song}.mp3`

       cover.src= `IMG/${song}.jpg` 

}

loadSong(songs[songIndex])




const playSong = () =>{

    musicContainer.classList.add("play")

    playBtn.classList.remove('fa-play')

    playBtn.classList.add('fa-pause')
    
    audio.play()

    console.log('working')

}




playBtn.addEventListener("click", () =>{

   playSong()

})