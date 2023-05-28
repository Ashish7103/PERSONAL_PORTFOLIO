const class10 = document.querySelector(".class_10");
const class12 = document.querySelector(".class_12");
const classGra = document.querySelector(".class_gra");

const cardContent1 = document.querySelector(".cr_1");
const cardContent2 = document.querySelector(".cr_2");
const cardContent3 = document.querySelector(".cr_3");
const card1 = document.querySelector(".card__1");
const card2 = document.querySelector(".card__2");
const card3 = document.querySelector(".card__3");
const cardSlide = document.querySelectorAll(".card__style");

const fieldset = document.querySelector(".form");

const btnScroll = document.querySelector(".scroll__to");

const imgBox=document.querySelector(".header__title__box_2");
const headerTitle=document.querySelector(".header__title");

// extra

const cls = document.querySelectorAll(".cls_dec");
// cardSlide.forEach((slide)=>{
//     slide.addEventListener('mouseenter',()=>{
//         console.log('ashish');
//        cls.forEach(()=>{
//         console.log('abhishek');

//        })

// const cls=document.querySelectorAll('.cls_dec');
// cardSlide.forEach((slide)=>{
//     slide.addEventListener('mouseenter',()=>{
//         console.log('ashish');

//         cls.forEach((clr)=>{
//             console.log('am');
//             if

//             clr.classList.add('animate__class10')
//            })
//         });
//        })

card1.addEventListener("mouseenter", (e) => {
  class10.classList.add("animate__class10");
  cardContent1.classList.add("animate__content");
  card1.classList.add("animate__card");
});
card1.addEventListener("mouseleave", (e) => {
  class10.classList.remove("animate__class10");
  cardContent1.classList.remove("animate__content");
  card1.classList.remove("animate__card");
});
card2.addEventListener("mouseenter", (e) => {
  class12.classList.add("animate__class10");
  cardContent2.classList.add("animate__content");
  card2.classList.add("animate__card");
});
card2.addEventListener("mouseleave", (e) => {
  class12.classList.remove("animate__class10");
  cardContent2.classList.remove("animate__content");
  card2.classList.remove("animate__card");
});
card3.addEventListener("mouseenter", (e) => {
  classGra.classList.add("animate__class10");
  cardContent3.classList.add("animate__content");
  card3.classList.add("animate__card");
});
card3.addEventListener("mouseleave", (e) => {
  classGra.classList.remove("animate__class10");
  cardContent3.classList.remove("animate__content");
  card3.classList.remove("animate__card");
});

// slider
const slider = function () {
  const cardSlide = document.querySelectorAll(".card__style");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = cardSlide.length;

  const goToSlide = function (slide) {
    cardSlide.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;

    goToSlide(curSlide);
  };

  const preSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;

    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
    // createDots();

    // activateDot(0);
  };
  init();

  // event handler
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", preSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") preSlide();
  });
};
slider();

//  smooth scrolling
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const section3 = document.querySelector("#section--3");
const section4 = document.querySelector("#section--4");
const header = document.querySelector(".header");
const footer = document.querySelector("#footer");

const navHome = document.querySelectorAll(".nav_home");

const navAbout = document.querySelectorAll(".nav_about");
const navSkill = document.querySelectorAll(".nav_skill");
const navEducation = document.querySelectorAll(".nav_education");
const navProject = document.querySelectorAll(".nav_project");
const navContact = document.querySelectorAll(".nav_contact");


navHome.forEach((item) => {
item.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});})
navAbout.forEach((item) => {
item.addEventListener("click", function () {
  header.scrollIntoView({ behavior: "smooth" });
});})
navSkill.forEach((item) => {
item.addEventListener("click", function () {
  section2.scrollIntoView({ behavior: "smooth" });
});})
navEducation.forEach((item) => {
item.addEventListener("click", function () {
  section3.scrollIntoView({ behavior: "smooth", block: "end" });
});})
navProject.forEach((item) => {
item.addEventListener("click", function () {
  section4.scrollIntoView({ behavior: "smooth", block: "end" });
});
});
navContact.forEach((item) => {
item.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth", block: "end" });
});
})

// console.log(btnScroll.getBoundingClientRect());
// console.log(section1.getBoundingClientRect());

// console.log(section1.getBoundingClientRect());
btnScroll.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    left: section1.getBoundingClientRect().left + window.pageXOffset,
    top: section1.getBoundingClientRect().top + window.pageYOffset,
    behavior: "smooth",
  });
});

//  sticky navigation
// intersection observer API
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect();
const stickyNav = function (entries, hea) {
  const [entry] = entries;
  //   console.log('ashish');

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserber = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // do not take rem or percentage value
  rootMargin: `-${navHeight.height}px`,
});
headerObserber.observe(header);

// const navHeight=stickyNav.getBoundingClientRect();

// const callback=function(entries){
//   const  [entry]=entries;
//    if(!entry.isIntersecting)
//    stickyNav.classList.add('sticky')
//    else
//    stickyNav.classList.remove('sticky')

// }
// let observer=new IntersectionObserver(callback,{
//     root:null,
//     rootMargin:`-${navHeight.height}px`,
//     threshold:0,
// })
// observer.observe(header);

// ////////// insertion of media queries using js \\\\\\\\\\\\\
//   const x=window.matchMedia('(max-width: 300px)');
//   const media=function(x){
//     if(x.mx.mat){
//         console.log('ashish');
//         media(x);
//         x.addEventListener(media(x));

//     }
//   }



const mediaQuery = window.matchMedia("(max-width: 717px)");

const toggleBtn=document.querySelector(".toggle-btn");
const dropdownMenu=document.querySelector(".dropdown_menu");
const toggleBtnIcon=document.querySelector(".toggle-btn i");

toggleBtn.addEventListener("click",function(){
  dropdownMenu.classList.toggle("active");
  // console.log(dropdownMenu);
  

  const isOpen=dropdownMenu.classList.contains("active");
  // toggleBtnIcon.className=isOpen?toggleBtnIcon.className.replace("fa-solid fa-xmark"):toggleBtnIcon.className.replace("fa-solid fa-bars");
  toggleBtnIcon.classList=isOpen?"fa-solid fa-xmark":"fa-solid fa-bars";
  
})


