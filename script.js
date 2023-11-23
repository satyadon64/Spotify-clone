//initialize the variables
let songIndex=0;
let audioElement= new Audio("songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let currentSong=document.getElementById(songIndex);
let bottomSongName= document.getElementById("bottomSongName");


let songs=[
    {songName:"Let Me Love You",filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Bezuban kab se",filepath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"jab tak",filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"beintihan",filepath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"tumhari kasam",filepath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"i am in love",filepath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"bhula denaa mujhe",filepath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"jab tum hote ho",filepath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"tu hi mera pyar",filepath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"bande mataram",filepath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    bottomSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(songIndex).classList.remove("fa-circle-play");
    document.getElementById(songIndex).classList.add("fa-circle-pause");
    gif.style.opacity=1;
}else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    document.getElementById(songIndex).classList.remove("fa-circle-pause");
    document.getElementById(songIndex).classList.add("fa-circle-play");
    gif.style.opacity=0;

}
});


//Listen to events progressbar logic
audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value=progress;
});
myProgressBar.addEventListener("click",()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
});

// make all icon to play function
const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    });

}

//song list logic of pause play songs
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if(songIndex == parseInt(e.target.id)){
            if(audioElement.paused){
            songIndex=parseInt(e.target.id);
            makeAllPlay();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            audioElement.play();
            masterPlay.classList.remove("fa-circle-play");
            masterPlay.classList.add("fa-circle-pause");
            }
            else{
            audioElement.pause();
            makeAllPlay();
            masterPlay.classList.remove("fa-circle-pause");
            masterPlay.classList.add("fa-circle-play");
            }
        }
        else{
            if(audioElement.paused){
                songIndex=parseInt(e.target.id);
                makeAllPlay();
                e.target.classList.remove("fa-circle-play");
                e.target.classList.add("fa-circle-pause");
                audioElement.src=`songs/${songIndex+1}.mp3`;
                audioElement.currentTime=0;
                audioElement.play();
                bottomSongName.innerText=songs[songIndex].songName;
                masterPlay.classList.remove("fa-circle-play");
                masterPlay.classList.add("fa-circle-pause");
    
             }
            else{
                songIndex=parseInt(e.target.id);
                audioElement.pause();
                makeAllPlay();
                e.target.classList.remove("fa-circle-play");
                e.target.classList.add("fa-circle-pause");
                audioElement.src=`songs/${songIndex+1}.mp3`;
                audioElement.currentTime=0;
                audioElement.play();
                bottomSongName.innerText=songs[songIndex].songName;
                masterPlay.classList.remove("fa-circle-play");
                masterPlay.classList.add("fa-circle-pause");
            }
        }
        
    });
});
// Master previous botton
document.getElementById("previous").addEventListener("click",()=>{
    document.getElementById(songIndex).classList.remove("fa-circle-pause");
    document.getElementById(songIndex).classList.add("fa-circle-play");
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    bottomSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(songIndex).classList.remove("fa-circle-play");
    document.getElementById(songIndex).classList.add("fa-circle-pause");

});

// Master next botton
document.getElementById("next").addEventListener("click",()=>{
    document.getElementById(songIndex).classList.remove("fa-circle-pause");
    document.getElementById(songIndex).classList.add("fa-circle-play");
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
   
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    bottomSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");  
    document.getElementById(songIndex).classList.remove("fa-circle-play");
    document.getElementById(songIndex).classList.add("fa-circle-pause");
    
});