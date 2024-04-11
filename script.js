const loader = document.querySelector(".loader");
window.addEventListener("load", function() {
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

ScrollReveal({ reset: true, distance: "50px", duration: 2000 }).reveal(
	".name, .title, .card",
	{ delay: 300, origin: "bottom" },
);
ScrollReveal({ reset: true, distance: "50px", duration: 2000 }).reveal(
	".about-title",
	{ delay: 300, origin: "left" },
);
ScrollReveal({ reset: true, distance: "50px", duration: 2000 }).reveal(
	".about-text",
	{ delay: 400, origin: "right" },
);
