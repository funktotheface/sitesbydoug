// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const animSections = gsap.utils.toArray([
// '.flyRight',
// '.flyLeft',
//   ]);

//   animSections.forEach((animSection) => {
// gsap.from(animSection, {
//   scrollTrigger: {
//     trigger: animSection,
//     start: 'top 80%',
//     toggleActions: 'play none none none'
//   },
//   x: animSection.classList.contains('flyLeft') ? 500 : -500,
//   opacity: 0,
//   duration: 2,
//   ease: 'back.out(1)',
//   delay: 0.2,
// });

//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".hero-heading", {
    x: -500,
    opacity: 0,
    duration: 2,
    ease: "back.out(1)",
  })
  .from(".hero-subheading", {   // assuming your p has class "hero-subheading"
    // x: -500,
    opacity: 0,
    duration: 2,

  },"-=0.1") // starts this animation 1.5 seconds before the previous one ends;
});
