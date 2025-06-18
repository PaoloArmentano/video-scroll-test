gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector('.hero video');
const hero = document.querySelector('.hero');

gsap.to(video, {
  scale: 1.9,           
  scrollTrigger: {
    trigger: hero,
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    pinSpacing: true
  }
});
