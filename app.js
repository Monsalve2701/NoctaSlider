const intro = document.querySelector(".intro");
const video = document.querySelector("video"); 
const logo = document.querySelector("img");


//End section   
const section = document.querySelector("section");
const end = section.querySelector("h1");

//Scroll magic
const controller = new ScrollMagic.Controller ();


//scene

const scene = new ScrollMagic.Scene({
    duration: 15000,
    triggerElemnt: intro,
    triggerHook: 0
})
.addIndicators(controller)
.setPin(intro)
.addTo(controller);


//Video animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 42);



 