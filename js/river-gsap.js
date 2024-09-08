// RIVER ELEMENTS
// SIDE SCROLLING

// waits for all the content to be loaded before running the function
document.addEventListener("DOMContentLoaded", function() {
    // register the scroll trigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // convert all elements with the class "content" inside the element with id "river" into an array
    const contents = gsap.utils.toArray("#river .content");

    // create an animation to move the contents horizontally
    gsap.to(contents, {
        // move the contents horizontally by the width of a single content multiplied by the number of contents minus 1
        // this effectively aligns all contents horizontally
        xPercent: -100 * (contents.length - 1),
        // define the plugin options
        scrollTrigger: {
            // set the trigger element
            trigger: "#river",
            // pin the trigger element during the animation
            pin: true,
            // set the scrubbing speed
            scrub: 0.5
        }
    });
});