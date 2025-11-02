// function myFunction() {
//     var x = document.getElementById('top-nav');
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
})

document.querySelectorAll(".links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const sliderImage = document.getElementById("slider-image");
const images = [
  "Images/slider-image1.jpg",
  "Images/slider-image2.jpg",
  "Images/slider-image3.jpg",
];
let currentImageIndex = 0;

function changeImage() {
  sliderImage.classList.add("fade-out");
  setTimeout(() => {
    sliderImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.classList.remove("fade-out");
  }, 1000);
}

setInterval(changeImage, 7000);
