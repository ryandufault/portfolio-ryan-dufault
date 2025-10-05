gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(SplitText);

// Header svg
document.querySelector(".header-svg").addEventListener("click", accueil); // quand on clique sur le header

function accueil() {
    window.location.href = "index.html"; // quand on clique sur le header ça ramène à l'accueil
  }

// Anim du texte
const splitDesc = new SplitText(".projet-description", {
  type: "lines", // divise le texte en lignes
});
gsap.from(splitDesc.lines, {
  duration: 1, // pour chaque ligne animation par le haut et opacité
  y: 6,
  opacity: 0,
  stagger: 0.05, // chaque ligne
  scrollTrigger: {
    trigger: ".projet-description",
    start: "top 75%", // commence quand l'élément est plus vers le bas de l'écran par rapport à son haut (75% de l'écran)
    end: "bottom+=50%", // l'animation se finit à plus de 50% du bas de l'élément
    toggleActions: "play none none reverse", // l'animation joue dans le sens opposé quand on remonte vers le haut
  },
});

// V   à déterminer, peut-être trop d'animations?    V */

/*const split2 = new SplitText(".projet-titre", {
  type: "lines", // divise le texte en lignes
});
gsap.from(split2.lines, {
  duration: 1, // pour chaque ligne animation par le haut et opacité
  y: 6,
  opacity: 0,
  stagger: 0.05, // chaque ligne
  scrollTrigger: {
    trigger: ".projet-titre",
    start: "top 75%", // commence quand l'élément est plus vers le bas de l'écran par rapport à son haut (75% de l'écran)
    end: "bottom+=50%", // l'animation se finit à plus de 50% du bas de l'élément
    toggleActions: "play none none reverse", // l'animation joue dans le sens opposé quand on remonte vers le haut
  },
});

const split3 = new SplitText(".infos-projet", {
  type: "lines", // divise le texte en lignes
});
gsap.from(split3.lines, {
  duration: 1, // pour chaque ligne animation par le haut et opacité
  y: 6,
  opacity: 0,
  stagger: 0.05, // chaque ligne
  scrollTrigger: {
    trigger: ".infos-projet",
    start: "top 75%", // commence quand l'élément est plus vers le bas de l'écran par rapport à son haut (75% de l'écran)
    end: "bottom+=50%", // l'animation se finit à plus de 50% du bas de l'élément
    toggleActions: "play none none reverse", // l'animation joue dans le sens opposé quand on remonte vers le haut
  },
});*/