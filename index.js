const nameInput = document.getElementsByClassName("name-input");
const welcomeName = document.getElementsByClassName("welcome-name");
const themeSelector = document.querySelector("#themes");
const themeLink = document.querySelector(".theme");
const someText = document.querySelector('.reveal-text');
const buttonText = document.querySelector('.button-text');
const imageURL = document.querySelector("input[name='img-url']");
const frameColor = document.querySelector("input[name='frm-clr']");
const frameWidth = document.querySelector("input[name='frm-wdt']");
const imageBox = document.querySelector(".image-container");
const img = document.querySelector(".gallery-image");

let urlVar = "";
let colorVar = "#ffffff";
let widthVar = 5;
let images = [
    {"src": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", "alt": "Forest"},
    {"src": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400", "alt": "Foggy mountains"},
    {"src": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400", "alt": "Bridge in forest"},
    {"src": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400", "alt": "Flower field"},
    {"src": "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400", "alt": "Green trees"}
];

function setTheme() {
    let theme = themeSelector.value;
    themeLink.setAttribute("href", "css/theme-" + theme + ".css");
}

// function hideImageOnLoad() {
// 	imageBox.style.display = "none";
// };

function setImage(url, width, color) {
	imageBox.style.display = "block";
	imageBox.style.borderStyle = "solid";
	imageBox.style.backgroundImage = "url('" + url + "')";
	imageBox.style.borderWidth = width + "px";
	imageBox.style.borderColor = color;
};

function loadImage() {
    let src = img.getAttribute("src");
    let imageInfo = images[Math.floor(Math.random() * images.length)];
    while(src === imageInfo.src) {
        imageInfo = images[Math.floor(Math.random() * images.length)];
    }
    
    img.setAttribute("src", imageInfo.src);
    img.setAttribute("alt", imageInfo.alt);
}

buttonText.addEventListener('click', () => {
	someText.classList.toggle("no-text");
});

nameInput[0].addEventListener('change', () => {
	welcomeName[0].innerHTML = `Welcome, ${nameInput[0].value}`;
});

themeSelector.addEventListener("change", () => {
    setTheme();
});

imageURL.addEventListener("change", () => {
	urlVar = imageURL.value;
	setImage(urlVar, widthVar, colorVar);
});

frameColor.addEventListener("change", () => {
	colorVar = frameColor.value;
	setImage(urlVar, widthVar, colorVar);
});

frameWidth.addEventListener("change", () => {
	widthVar = frameWidth.value;
	setImage(urlVar, widthVar, colorVar);
});

img.addEventListener("click", () => {
    loadImage();
});

document.body.addEventListener("keydown", e => {
    if(e.key === " ") {
        loadImage();
    }
});

// hideImageOnLoad();
setTheme();
loadImage();