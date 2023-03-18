const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector("#volume"),
Checkbox = document.querySelector("#checkbox");

let allKeys = [],
audio = new Audio(`assets/a.wav`);

const playTune = (key) => {
    audio.src = `assets/${key}.wav`; 
    audio.play(); 
    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active");
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}


Checkbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);