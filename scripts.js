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
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* SCROLLTO     SCROLLTO     SCROLLTO     SCROLLTO    */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

// Header svg
document.querySelector(".header-svg").addEventListener("click", scrollTop); 

function scrollTop() {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.inOut" }); // quand on clique sur le header ça scroll au top
}

/////////////////////////////////////////////////////////////////

// Projets <a>
let projetsSection = document.getElementById("projets");

function scrollProjets() {
  gsap.to(window, {
    scrollTo: { y: projetsSection.offsetTop - 70 }, // scroll à la section Projets
    duration: 1,
    ease: "power2.inOut",
  });
}

document
  .querySelector(".a-header:nth-child(1)") // scroll à la section Projets au click du <a>
  .addEventListener("click", scrollProjets);

/////////////////////////////////////////////////////////////////

// Apropos <a>
let aproposSection = document.getElementById("apropos");

function scrollApropos() {
  gsap.to(window, {
    scrollTo: { y: aproposSection.offsetTop - 70 }, // scroll à la section À propos
    duration: 1,
    ease: "power2.inOut", // lissage
  });
}

document
  .querySelector(".a-header:nth-child(2)") // sélectionne le lien À propos
  .addEventListener("click", scrollApropos); // scroll à la section À propos au click du <a>

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* SCROLLTO     SCROLLTO     SCROLLTO     SCROLLTO    */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* ANIM LOGICIELS    ANIM LOGICIELS    ANIM LOGICIELS */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

gsap.set(".logiciels-row", { x: "18%" }); // set le x a 18% avant l'anim

let animLogiciels = gsap.to(".logiciels-row", { // animations sur la bande de logiciels
  x: "-18%", // déplace de gauche à droite avec le yoyo
  duration: 7,
  repeat: -1,
  yoyo: true, // effet de "yoyo"
  ease: "sine.inOut", // lissage
});

document.querySelector(".logiciels-row").addEventListener("mouseover", function(event) { // quand on hover ça stop l'animation
    animLogiciels.pause()
});

document.querySelector(".logiciels-row").addEventListener("mouseout", function(event) { // quand on quitte le hover ça repart l'animation
  animLogiciels.resume();
});

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* ANIM LOGICIELS    ANIM LOGICIELS    ANIM LOGICIELS */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */

/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */
/* BOUTONS/CLICS    BOUTONS/CLICS    BOUTONS/CLICS    */
/* v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v=v= */

//projetFleur
document.querySelectorAll(".projetFleur").forEach(function(element) { // sélectionne tout les éléments avec la classe
    element.addEventListener("click", projetFleur); // call la fonction quand clic
});

function projetFleur() {
    window.location.href = "fleur.html"; // dirige l'utilisateur sur la page du projet
}

//projetBirden
document.querySelectorAll(".projetBirden").forEach(function(element) { // sélectionne tout les éléments avec la classe
  element.addEventListener("click", projetBirden); // call la fonction quand clic
});

function projetBirden() {
  window.location.href = "birden.html"; // dirige l'utilisateur sur la page du projet
}

//projetLecorps
document.querySelectorAll(".projetLecorps").forEach(function(element) { // sélectionne tout les éléments avec la classe
  element.addEventListener("click", projetLecorps); // call la fonction quand clic
});

function projetLecorps() {
  window.location.href = "le_corps.html"; // dirige l'utilisateur sur la page du projet
}

//projetMaisonhantee
document.querySelectorAll(".projetMaisonhantee").forEach(function(element) { // sélectionne tout les éléments avec la classe
  element.addEventListener("click", projetMaisonhantee); // call la fonction quand clic
});

function projetMaisonhantee() {
  window.location.href = "maison_hantee.html"; // dirige l'utilisateur sur la page du projet
}

//projetAutoportrait
document.querySelectorAll(".projetAutoportrait").forEach(function(element) { // sélectionne tout les éléments avec la classe
  element.addEventListener("click", projetAutoportrait); // call la fonction quand clic
});

function projetAutoportrait() {
  window.location.href = "autoportrait.html"; // dirige l'utilisateur sur la page du projet
}

//projetIncisive
document.querySelectorAll(".projetIncisive").forEach(function(element) { // sélectionne tout les éléments avec la classe
  element.addEventListener("click", projetIncisive); // call la fonction quand clic
});

function projetIncisive() {
  window.location.href = "incisive.html"; // dirige l'utilisateur sur la page du projet
}

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* BOUTONS/CLICS    BOUTONS/CLICS    BOUTONS/CLICS    */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */