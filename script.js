gsap.registerPlugin(ScrollTrigger);

gsap.from(".txt-gradient", { duration: 1, x: "-100%", ease: "back-out" });
gsap.from("#hero-img", { duration: 1, scale: "0.5", ease: "circ-out" });
gsap.from(".about", { scrollTrigger: ".about", duration: 1, x: "-100%" });
gsap.from(".mob-about", {
  scrollTrigger: ".mob-about",
  duration: 1,
  x: "-100%",
});
gsap.from(".skill-wrapper", {
  scrollTrigger: ".skill-wrapper",
  duration: 1,
  x: "-100%",
  ease: "circ-out",
});
gsap.from(".contact-card", { duration: 2, scale: "0.5", ease: "circ-out" });
gsap.to(".contact-card", {
  scrollTrigger: ".contact-card",
  duration: 2,
  scale: "1",
  ease: "circ-out",
});
gsap.from(".email", { duration: 1, scale: "0.3", ease: "circ-out" });
gsap.to(".email", {
  scrollTrigger: ".contact-card",
  duration: 1,
  scale: "1",
  ease: "circ-out",
});
gsap.from(".title-wrapper", { duration: 1, y: "-100%", ease: "bounce" });

const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side-nav");

navBtn.addEventListener("click", () => {
  sideBar.classList.toggle("reveal");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("reveal");
});
