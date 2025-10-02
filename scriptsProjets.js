gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Header svg
document.querySelector(".header-svg").addEventListener("click", accueil); 

function accueil() {
    window.location.href = "index.html";
  }