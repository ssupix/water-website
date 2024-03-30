

// ARROW
gsap.registerPlugin(ScrollTrigger);

gsap.to("path", {
    scrollTrigger: {
        trigger: ".arrow-container",
        start: "top 70%", 
        end: "top 2%", 
        scrub: true,
    },
    strokeDashoffset: 0, 
   
});

// RUNNING TEXT LINE
gsap.to(".running ul li", {
    duration: 6,
    x: "-102%",
    ease: "linear",
    repeat: -1
});