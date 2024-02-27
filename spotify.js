console.log("Welcome to spotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName:"tere bin", filePath:"project/1.mp3", coverPath: "covers/1.jpg"},
        {songName:"kasariya", filePath:"Project/2.mp3", coverPath: "covers/1.jpg"},
       {songName:"o mahi", filePath:"project/3.mp3", coverPath: "covers/1.jpg"},
       {songName:"siya ram", filePath:"project/4.mp3", coverPath: "covers/1.jpg"},
       {songName:"o mahi", filePath:"project/3.mp3", coverPath: "covers/1.jpg"},
       {songName:"siya ram", filePath:"project/4.mp3", coverPath: "covers/1.jpg"},
                ]
                
   
   masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})

