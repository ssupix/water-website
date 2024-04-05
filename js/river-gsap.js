gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#river .content");

gsap.to(contents, {
    xPercent: -100 * (contents.length - 1),
    scrollTrigger: {
        trigger: "#river",
        pin: true, // Pin the trigger element
        start: "top top", // Start the scroll animation when the top of the trigger element reaches the top of the viewport
        end: () => "+=" + (window.innerWidth * (contents.length - 1)), // End the scroll animation when the width of all sections has been scrolled
        scrub: true // Smooth scrolling effect
    }
});