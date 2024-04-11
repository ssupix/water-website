// CURSOR WIDGET


// select div from the document
gsap.set(".scroll-cursor", {xPercent: -50, yPercent: -50});

// assign x and y, create animation
let xTo = gsap.quickTo(".scroll-cursor", "x", {duration: 0.8, ease: "power3"}),
    yTo = gsap.quickTo(".scroll-cursor", "y", {duration: 0.8, ease: "power3"});

// waits for mouse to move to run the function
window.addEventListener("mousemove", e => {
  // sets xTo to client's cursor's x
  xTo(e.clientX);
  // sets yTo to client's cursor's y
  yTo(e.clientY);
});