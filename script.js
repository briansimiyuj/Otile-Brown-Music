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


       playSong()

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


    playSong()


    console.log('working')


}




prevBtn.addEventListener("click", () =>{

    prevSong()

})