
const images = ["img/queso1.jpeg", "img/queso2.jpeg"];
let currentIndex = 0;


const carouselImage = document.getElementById("carouselImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");


function changeImage(index) {
  currentIndex = (index + images.length) % images.length;
  carouselImage.src = images[currentIndex];
}


prevButton.addEventListener("click", () => changeImage(currentIndex - 1));
nextButton.addEventListener("click", () => changeImage(currentIndex + 1));