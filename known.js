const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
})

document.querySelectorAll(".links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("show");
}))

function createScroller(scrollerId, leftId, rightId, scrollAmount) {
  const scroller = document.getElementById(scrollerId);
  const scrollLeft = document.getElementById(leftId);
  const scrollRight = document.getElementById(rightId);

  if (scroller) {
    // Clone cards to create infinite scroll illusion
    const cards = Array.from(scroller.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      scroller.appendChild(clone);
    });

    const autoScrollDelay = 3000; // 3 seconds between scrolls
    let autoScroll; // store interval

    // --- Scroll Right Function ---
    function scrollNext() {
      scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 10) {
          scroller.scrollTo({ left: 0, behavior: 'auto' });
        }
      }, 600);
    }

    // --- Scroll Left Function ---
    function scrollPrev() {
      scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        if (scroller.scrollLeft <= 0) {
          scroller.scrollTo({ left: scroller.scrollWidth / 2, behavior: 'auto' });
        }
      }, 600);
    }

    // --- Button Controls ---
    if (scrollLeft && scrollRight) {
        if (window.innerWidth > 768) {
            scrollLeft.addEventListener('click', scrollPrev);
            scrollRight.addEventListener('click', scrollNext);
        }
    }


    // --- Enable Auto Scroll only on Desktop ---
    function enableAutoScroll() {
        autoScroll = setInterval(scrollNext, autoScrollDelay);

        // Pause auto-scroll on hover or interaction
        [scroller, scrollLeft, scrollRight].forEach(el => {
          if (el) {
            el.addEventListener('mouseenter', () => clearInterval(autoScroll));
            el.addEventListener('mouseleave', () => {
              autoScroll = setInterval(scrollNext, autoScrollDelay);
            });
          }
        });
    }

    // --- Disable Auto Scroll for Mobile ---
    function disableAutoScroll() {
      clearInterval(autoScroll);
    }

    // --- Initialize ---
    enableAutoScroll();
  }
}

createScroller('course-list', 'scroll-left', 'scroll-right', 300);
createScroller('reviews-container', 'review-scroll-left', 'review-scroll-right', 320);


const sliderImage = document.getElementById("slider-image");
const images = [
  "Images/slider-image1.jpg",
  "Images/slider-image2.jpg",
  "Images/slider-image3.jpg",
];
let currentImageIndex = 0;

function changeImage() {
  if (sliderImage) {
    sliderImage.classList.add("fade-out");
    setTimeout(() => {
      sliderImage.src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
      sliderImage.classList.remove("fade-out");
    }, 1000);
  }
}

setInterval(changeImage, 3000); {
  sliderImage.classList.add("fade-out");
  setTimeout(() => {
    sliderImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.classList.remove("fade-out");
  }, 1000);
}

setInterval(changeImage, 3000);
