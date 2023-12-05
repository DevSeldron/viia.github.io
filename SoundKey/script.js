const audioElements = [];
const maxConcurrentSounds = 5; // Adjust as needed

for (let i = 0; i < maxConcurrentSounds; i++) {
const audio = document.createElement('audio');
audio.volume = 1.0; // Set volume to maximum (1.0)
audioElements.push(audio);
}

let currentAudioIndex = 0;

document.getElementById('soundFileInput').addEventListener('change', function(event) {
const file = event.target.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function(e) {
const audioSrc = e.target.result;
audioElements.forEach(audio => {
audio.src = audioSrc;
});
};
reader.readAsDataURL(file);
}
});

document.getElementById('soundUrlInput').addEventListener('change', function(event) {
const audioSrc = event.target.value;
audioElements.forEach(audio => {
audio.src = audioSrc;
});
});

document.getElementById('textInput').addEventListener('keydown', function(event) {
const audio = audioElements[currentAudioIndex];
audio.currentTime = 0; // Rewind to the beginning
audio.volume = parseFloat(document.getElementById('volumeSlider').value);
audio.play();
currentAudioIndex = (currentAudioIndex + 1) % maxConcurrentSounds;
});

document.getElementById('volumeSlider').addEventListener('input', function(event) {
const volume = parseFloat(event.target.value);
audioElements.forEach(audio => {
audio.volume = volume;
});
});
