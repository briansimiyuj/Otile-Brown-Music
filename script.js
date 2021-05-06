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

}





const pauseSong = () =>{

    musicContainer.classList.remove("play")

    audio.pause()

}






playBtn.addEventListener("click", () =>{

    const playing = musicContainer.classList.contains("play")

    if (!playing){

        playSong()
    
       } else {
    
        pauseSong()
           
       }

})







const nextSong = () =>{

       songIndex++

       if(songIndex > songs.length - 1){
           
        songIndex = 0

       }


       loadSong(songs[songIndex])


       if (musicContainer.classList.contains("play")){

        musicContainer.classList.remove("play")

           setTimeout(() => {
               
            playSong()

           }, 1000)
           
       } 

}



nextBtn.addEventListener("click", () =>{

    nextSong()

})





const prevSong = () =>{

    songIndex--

    if (songIndex < 0) {
           
           songIndex = songs.length - 1

    }


    loadSong(songs[songIndex])


    if (musicContainer.classList.contains("play")){

        musicContainer.classList.remove("play")

           setTimeout(() => {
               
            playSong()

           }, 1000)
                     
       } 

}




prevBtn.addEventListener("click", () =>{

    prevSong()

})








function setProgress(e){

    const width = this.clientWidth

    const clickX = e.offsetX

    const duration = audio.duration

    let audioCurrentTime = audio.currentTime

    audioCurrentTime = (clickX / width) * duration

}




progressContainer.addEventListener("click", setProgress)




const updateProgress = (e) =>{

    const {duration, currentTime} = e.srcElement

    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`

}


audio.addEventListener("timeupdate", updateProgress)