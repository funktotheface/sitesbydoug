document.addEventListener("DOMContentLoaded", () => {

    // GSAP Animations (as before)
  gsap.registerPlugin(TextPlugin);
  const tl = gsap.timeline();

tl
  .from(".hero-subheading", {
    opacity: 0,
    x: -100,
    duration: 2,
    delay: 2,
    ease: "back.out(1)",
  })
  .from(".HeroList", {
    opacity: 0,
    x: 100,
    duration: 2,
    ease: "back.out(1)",
    
  }, "<")
  .from(".slider", {
    opacity: 0,
    duration: 2,
    ease: "back.out(1)",
  }, "<")
  
  .from(".contentSpan", {
    opacity: 0,
    duration: 2,
    ease: "back.out(1)",
  }); // "<" starts it at the same time as previous

  
  const heroSpan = document.querySelector('.hero-heading span');
  const heroButton = document.getElementById('heroButton');
  const navLogo = document.getElementById('navLogo');
  const navLinks = document.querySelectorAll('.nav-link');
  const heroBg = document.querySelector('.hero-bg'); // assuming this holds the image
  const hexBg = document.getElementById('hexbg');
  const content = document.querySelectorAll('.content');
  const HeroList = document.querySelector('.HeroList');

  let hue = 0;
  const hueStep = 2;         // change per frame
  const maxHue = 360;
  const animationSpeed = 10; // ms (roughly 60fps)

  const interval = setInterval(() => {
    const hueRotateValue = `hue-rotate(${hue}deg)`;

    // Apply hue filter to all elements
    if (heroSpan) heroSpan.style.filter = hueRotateValue;
    if (heroButton) heroButton.style.filter = hueRotateValue;
    if (navLogo) navLogo.style.filter = hueRotateValue;
    navLinks.forEach(link => link.style.filter = hueRotateValue);
    if (heroBg) heroBg.style.filter = hueRotateValue;
    if (hexBg) hexBg.style.filter = hueRotateValue;
    content.forEach(el => el.style.filter = hueRotateValue);
;

    hue += hueStep;

    if (hue >= maxHue) {
      clearInterval(interval);

      // Reset styles to defaults after cycle
      if (heroSpan) {
        heroSpan.style.filter = '';
        heroSpan.style.color = ''; // or set explicitly: "red"
      }
      if (heroButton) {
        heroButton.style.filter = '';
        heroButton.style.borderColor = ''; // or "red"
      }
      if (navLogo) navLogo.style.filter = '';
      navLinks.forEach(link => link.style.filter = '');
      // Uncomment if you want to fade out the hero background

      if (heroBg) {
        // Clear hue and fade out
        heroBg.style.filter = '';
        heroBg.style.transition = 'opacity 2s ease';
        heroBg.style.opacity = '0';

        // heroBg.addEventListener('transitionend', () => {
        //   HeroList.style.display = 'block';
        // }, { once: true });
       
      }
    }

    const hueSlider = document.getElementById('hueSlider');

if (hueSlider) {
  hueSlider.addEventListener('input', (e) => {
    const sliderHue = parseInt(e.target.value);
    const hueRotateValue = `hue-rotate(${sliderHue}deg)`;

    // Apply slider hue filter independently
    if (heroSpan) heroSpan.style.filter = hueRotateValue;
    if (heroButton) heroButton.style.filter = hueRotateValue;
    if (navLogo) navLogo.style.filter = hueRotateValue;
    navLinks.forEach(link => link.style.filter = hueRotateValue);
    if (heroBg) heroBg.style.filter = hueRotateValue;
    if (hexBg) hexBg.style.filter = hueRotateValue;
    content.forEach(el => el.style.filter = hueRotateValue);
  });
}

  }, animationSpeed);
});
