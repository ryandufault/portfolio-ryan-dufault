gsap.registerPlugin(ScrollTrigger);

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

tl.to([".responsive-svg:nth-child(1)", ".header-links"], {
  y: "-100vh",
  duration: 3,
  ease: "none",
})
  .set(".responsive-svg:nth-child(1)", {
    display: "none", // fait disparaitre le 1er svg
  })
  .set(".responsive-svg:nth-child(2)", {
    display: "block",
    opacity: 1, // fait apparaitre le 2ème svg
  })
  .to(".responsive-svg:nth-child(2)", {
    clipPath: "inset(0% 0% 0% 0%)", // fait apparaitre le 2ème svg par le bas avec un mask
    ease: "none",
  })
  .to(".header-links", {
    display: "none", // fait disapraitre les liens
  });

/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
/* ANIM HEADER     ANIM HEADER     ANIM HEADER        */
/* ^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^= */
