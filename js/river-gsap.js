gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#river .content");

gsap.to(contents, {
    xPercent: -100 * (contents.length -1),
    scrollTrigger: {
        trigger: "#river",
        pin: true,
        scrub: 1
    }
})