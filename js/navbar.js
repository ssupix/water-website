// NAV BAR

// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);
// select all elements with the class "section-dark" and convert them into an array
const sections = gsap.utils.toArray(".section-dark");

// iterate over each section
sections.forEach((section) => {
  // create a ScrollTrigger for each section
  ScrollTrigger.create({
    // set the trigger element for the ScrollTrigger
    trigger: section,
    // set the duration of the animation
    duration: 3,
    // starting position relative to the trigger element
    start: "top 30px, right 30px",
    // ending position relative to the trigger element
    end: "bottom 50px",
    // to make the animation smoother
    scrub: 1,
    // toggle a css class when the ScrollTrigger is active
    toggleClass: {
      targets: ".nav-link", // target elements with the class "nav-link"
      className: "text-white" // add or remove the class "text-white"
    },
     // uncomment the line below to display markers for debugging
    markers: true
  });
});