gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".scroll-cursor", "x", {duration: 0.8, ease: "power3"}),
    yTo = gsap.quickTo(".scroll-cursor", "y", {duration: 0.8, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});