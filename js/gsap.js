

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

const contents = gsap.utils.toArray("#river .content");

gsap.to(contents, {
    xPercent: -100 * (contents.length -1),
    // scrollTrigger: {
    //     trigger: "#river",
    //     pin: true,
    //     scrub: 1
    // }
})
