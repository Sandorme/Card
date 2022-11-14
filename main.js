function newPage() {
    var audio = document.getElementById("audio");
    audio.play() && window.open('https://www.instagram.com/isandormeszaros/', "_blank") || window.location.replace('https://www.instagram.com/isandormeszaros/');;  
}

function newProfile(){
    document.getElementById("empty").innerHTML = "Sorry Mate, I am working on it!";
}