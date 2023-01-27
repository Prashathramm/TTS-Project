const tts = document.querySelector("#tts");
const stt = document.querySelector("#stt");

tts.onclick = () => {
    window.location.href="text_to_speech/index.html";
}

stt.onclick = () => {
    window.location.href="speech_to_text/index.html";
}