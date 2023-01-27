let spe = window.webkitSpeechRecognition;
let recognition = new spe();
console.log("Came")

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let text = document.getElementById("textarea")

let content ="";

recognition.continuous = true;

recognition.onresult = (event) => {
    let curr = event.resultIndex;
    let transcript = event.results[curr][0].transcript

    content+=transcript;
    
    text.innerHTML=content;
}

recognition.onstart = () => {
    console.log("Started");
}


recognition.onspeechend = () => {
    recognition.stop();
}


startBtn.onclick = () => {
    if(content.length=="") {
        content+="";
    }
    recognition.start();
    console.log("Listening");
}

stopBtn.onclick = () => {
    recognition.stop();
}
