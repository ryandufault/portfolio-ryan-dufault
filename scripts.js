gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* ANIM HEADER     ANIM HEADER     ANIM HEADER        */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".responsive-svg",
    start: "top", // initialisation timeline, start: top, end : 1 vh de + que la fin du viewheight de début
    end: "bottom+=100%",
    scrub: 2,
  },
});

tl.to([".responsive-svg", ".header-links"], {
  y: "-100vh",
  opacity: 0,
  duration: 3,
  ease: "none",
})
  .set(".header-svg", {
    display: "block", // fait apparaitre le 2ème svg
    opacity: 1,
  })
  .to(".header-svg", {
    clipPath: "inset(0% 0% 0% 0%)", // fait apparaitre le 2ème svg par le bas avec un mask
    ease: "none",
  })
  .to(".header-links", {
    display: "none", // fait disapraitre les liens
  });

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* ANIM HEADER     ANIM HEADER     ANIM HEADER        */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */

// Header svg
document.querySelector(".header-svg").addEventListener("click", scrollTop);

function scrollTop() {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.inOut" });
}

/////////////////////////////////////////////////////////////////

// Projets <a>
let projetsSection = document.getElementById("projets");

function scrollProjets() {
  gsap.to(window, {
    scrollTo: { y: projetsSection.offsetTop - 70 },
    duration: 1,
    ease: "power2.inOut",
  });
}

document
  .querySelector(".a-header:nth-child(1)")
  .addEventListener("click", scrollProjets);

/////////////////////////////////////////////////////////////////

// Apropos <a>
let aproposSection = document.getElementById("apropos");

function scrollApropos() {
  gsap.to(window, {
    scrollTo: { y: aproposSection.offsetTop - 70 },
    duration: 1,
    ease: "power2.inOut",
  });
}

document
  .querySelector(".a-header:nth-child(2)")
  .addEventListener("click", scrollApropos);

gsap.to(".logiciels-track", {
  x: "-100%",
  duration: 10,
  repeat: -1,
  ease: "none",
});
