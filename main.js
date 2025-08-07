onload = () =>{
        document.body.classList.remove("container");
};

// Auto play music dari img/music.mp3
const music = new Audio("img/music.mp3");
music.loop = true;
music.play();
