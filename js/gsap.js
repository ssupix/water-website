// ABOUT ELEMENTS

// ARROW
// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

// assign animation to .path
gsap.to("path", {
    scrollTrigger: {
        // animation is triggered when ".arrow-container" enters the viewport
        trigger: ".arrow-container",
        start: "top 70%", 
        end: "top 0", 
        // smooth animation
        scrub: true,
    },
    // set the stroke dash offset to 0
    strokeDashoffset: 0, 
});

// RUNNING TEXT LINE
// animates elements with the class .running ul li
gsap.to(".running ul li", {
    // set the animation duration to 6 seconds
    duration: 6,
    // moves the elements horizontally by -102%
    x: "-102%",
    // linear easing
    ease: "linear",
    // makes the animation repeat infinitely
    repeat: -1
});


  


