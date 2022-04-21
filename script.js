const circle = document.querySelector(".circle");
const socialMedia = document.querySelector(".social__media");
circle.addEventListener("click", () => {
    circle.classList.toggle("active");
    socialMedia.classList.toggle("show");
})