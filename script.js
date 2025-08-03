// Smooth Scroll
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    document.querySelector("nav ul").classList.remove("show");
  });
});

// Active Nav Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Mobile Menu Toggle
const menuIcon = document.createElement("div");
menuIcon.classList.add("menu-icon");
menuIcon.innerHTML = "&#9776;";
document.querySelector("nav").appendChild(menuIcon);

menuIcon.addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("show");
});

// Resume Download Button
const resumeBtn = document.querySelector(".resume-btn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "media/resume.pdf";
    link.download = "Palak_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
