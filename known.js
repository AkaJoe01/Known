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

// SCROLLABLE CARD BUTTON 

const courseList = document.getElementById('course-list');
const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');

// Clone cards to create infinite scroll illusion
const cards = Array.from(courseList.children);
cards.forEach(card => {
  const clone = card.cloneNode(true);
  courseList.appendChild(clone);
});

const scrollAmount = 300;
const autoScrollDelay = 3000; // 3 seconds between scrolls
let autoScroll; // store interval

// --- Scroll Right Function ---
function scrollNext() {
  courseList.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  setTimeout(() => {
    if (courseList.scrollLeft + courseList.clientWidth >= courseList.scrollWidth - 10) {
      courseList.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, 600);
}

// --- Scroll Left Function ---
function scrollPrev() {
  courseList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

  setTimeout(() => {
    if (courseList.scrollLeft <= 0) {
      courseList.scrollTo({ left: courseList.scrollWidth / 2, behavior: 'auto' });
    }
  }, 600);
}

// --- Button Controls ---
scrollLeft.addEventListener('click', scrollPrev);
scrollRight.addEventListener('click', scrollNext);

// --- Enable Auto Scroll only on Desktop ---
function enableAutoScroll() {
  if (window.innerWidth > 768) { // desktop only
    autoScroll = setInterval(scrollNext, autoScrollDelay);

    // Pause auto-scroll on hover or interaction
    [courseList, scrollLeft, scrollRight].forEach(el => {
      el.addEventListener('mouseenter', () => clearInterval(autoScroll));
      el.addEventListener('mouseleave', () => {
        autoScroll = setInterval(scrollNext, autoScrollDelay);
      });
    });
  }
}

// --- Disable Auto Scroll for Mobile ---
function disableAutoScroll() {
  clearInterval(autoScroll);
}

// --- Initialize ---
if (window.innerWidth > 768) {
  enableAutoScroll();
} else {
  disableAutoScroll();
}

// --- Handle Resize (Responsive Switch) ---
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    enableAutoScroll();
  } else {
    disableAutoScroll();
  }
});


/* REVIEWS BUTTON CODE */

const review_buttons = document.getElementById('review-buttons');
const reviewLeft = document.getElementById('review-left');
const reviewlRight = document.getElementById('review-right');

const scrollAmount2 = 320; // distance per scroll
const autoScrollDelay2 = 3000; // 3 seconds

function scrollNext() {
  if (review_buttons.scrollLeft + review-buttons.clientWidth >= review-buttons.scrollWidth - 10) {
    review_buttons.scrollLeft = 0;
  } else {
    review-buttons.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollPrev() {
  if (review_buttons.scrollLeft === 0) {
    review_buttons.scrollLeft = review-buttons.scrollWidth;
  } else {
    review_buttons.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

// Manual button controls
scrollLeft.addEventListener('click', scrollPrev);
scrollRight.addEventListener('click', scrollNext);

// Auto-scroll every few seconds
let autoScroll2 = setInterval(scrollNext, autoScrollDelay);

// Pause auto-scroll when user interacts
review-buttons.addEventListener('mouseenter', () => clearInterval(autoScroll));
review-buttons.addEventListener('mouseleave', () => {
  autoScroll = setInterval(scrollNext, autoScrollDelay);
});
scrollLeft.addEventListener('mouseenter', () => clearInterval(autoScroll));
scrollRight.addEventListener('mouseenter', () => clearInterval(autoScroll));
scrollLeft.addEventListener('mouseleave', () => {
  autoScroll = setInterval(scrollNext, autoScrollDelay);
});
scrollRight.addEventListener('mouseleave', () => {
  autoScroll = setInterval(scrollNext, autoScrollDelay);
});





























// const courseList = document.getElementById('course-list');
// const scrollLeft = document.getElementById('scroll-left');
// const scrollRight = document.getElementById('scroll-right');

// // Clone cards to create infinite scroll illusion

// const cards = Array.from(courseList.children);
// cards.forEach(card => {
//   const clone = card.cloneNode(true);
//   courseList.appendChild(clone);
// });

// const scrollAmount = 300;
// const autoScrollDelay = 3000; // time between scrolls (3s)

// // --- Scroll Right Function ---
// function scrollNext() {
//   courseList.scrollBy({ left: scrollAmount, behavior: 'smooth' });

//   setTimeout(() => {
//     if (courseList.scrollLeft + courseList.clientWidth >= courseList.scrollWidth - 10) {
//       courseList.scrollTo({ left: 0, behavior: 'auto' });
//     }
//   }, 600);
// }

// // --- Scroll Left Function ---
// function scrollPrev() {
//   courseList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

//   setTimeout(() => {
//     if (courseList.scrollLeft <= 0) {
//       courseList.scrollTo({ left: courseList.scrollWidth / 2, behavior: 'auto' });
//     }
//   }, 600);
// }

// // --- Button Controls ---

// scrollLeft.addEventListener('click', scrollPrev);
// scrollRight.addEventListener('click', scrollNext);

// // --- Auto Scroll Setup ---

// let autoScroll = setInterval(scrollNext, autoScrollDelay);

// // --- Pause Auto Scroll on Hover or Interaction ---
// [courseList, scrollLeft, scrollRight].forEach(el => {
//   el.addEventListener('mouseenter', () => clearInterval(autoScroll));
//   el.addEventListener('mouseleave', () => {
//     autoScroll = setInterval(scrollNext, autoScrollDelay);
//   });
// });

























// const courseList = document.getElementById('course-list');
// const scrollLeft = document.getElementById('scroll-left');
// const scrollRight = document.getElementById('scroll-right');

// scrollLeft.addEventListener('click', () => {
//     courseList.scrollBy({ left: -300, behavior: 'smooth' });
//     });

// scrollRight.addEventListener('click', () => {
//     courseList.scrollBy({ left: 300, behavior: 'smooth' });
//     });