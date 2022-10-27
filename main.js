
// ハンバーガー部分
const hamburgerMenu = document.querySelector(".toggle-btn");

const nav = document.getElementById("nav");
const mask = document.getElementById("mask");
const hamburgerMenuSections = document.querySelectorAll(".menu-sec");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  nav.classList.toggle('active');
  mask.classList.toggle('active');
});


hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    nav.classList.remove("active");
    mask.classList.remove("active");
  });
});



// feature(fade-in)
let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if(scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
})

// スライドショー
$('.slider').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});
