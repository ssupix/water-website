gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".section-dark");
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    duration: 3,
    start: "top 30px, right 30px",
    end: "bottom 50px",
    scrub: 1,
    toggleClass: {
      targets: ".nav-link",
      className: "text-white"
    },
    markers: true
  });
});