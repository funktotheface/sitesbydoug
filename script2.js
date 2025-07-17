document.addEventListener("DOMContentLoaded", () => {

    // GSAP Animations (as before)
  const tl = gsap.timeline();

  tl

  .from(".hero-subheading", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    ease: "back.out(1)",
  });

  
  const heroSpan = document.querySelector('.hero-heading span');
  const heroButton = document.getElementById('heroButton');
  const navLogo = document.getElementById('navLogo');
  const navLinks = document.querySelectorAll('.nav-link');
  const heroBg = document.querySelector('.hero-bg'); // assuming this holds the image

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
      if (heroBg) {
        // Clear hue and fade out
        heroBg.style.filter = '';
        heroBg.style.transition = 'opacity 1s ease';
        heroBg.style.opacity = '0';
      }
    }
  }, animationSpeed);
});
