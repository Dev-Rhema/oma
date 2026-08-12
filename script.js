const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const mainImage = document.getElementById("main-img");
const finalText = document.getElementById("final-text");

const noImages = [
  "imgs/no1.jpg",
  "imgs/NO2.jpg",
  "imgs/no3.jpg",
  "imgs/no4.jpg",
  "imgs/no5.jpg",
  "imgs/no6.jpg",
  "imgs/no7.jpg",
];
let noImageIndex = 0;
let yesScale = 1;

function moveNoButton() {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
}

function finalizeNoButton() {
  noButton.style.display = "none";
  if (finalText) {
    finalText.style.display = "block";
  }
}

function updateNoImage() {
  if (!mainImage || noImageIndex >= noImages.length) {
    finalizeNoButton();
    return;
  }

  mainImage.src = noImages[noImageIndex];
  noImageIndex += 1;

  if (noImageIndex >= noImages.length) {
    finalizeNoButton();
  }
}

function growYesButton() {
  yesScale += 0.08;
  yesButton.style.transform = `scale(${yesScale})`;
}

noButton.addEventListener("click", (event) => {
  if (noImageIndex >= noImages.length) return;
  event.preventDefault();
  moveNoButton();
  updateNoImage();
  growYesButton();
});

yesButton.addEventListener("click", () => {
  popup.style.display = "block";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";
