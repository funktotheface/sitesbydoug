document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  tl.from(".hero-heading", {
    opacity: 0,
    duration: 2,
    delay: 0.5,
  })
  .from(".hero-subheading", {
    opacity: 1,
    duration: 1,
    ease: "back.out(1)",
  }, "-=0.");

  const heroSpan = document.querySelector('.hero-heading span');
  const heroButton = document.getElementById('heroButton');
  const navLogo = document.getElementById('navLogo');
  const navLinks = document.querySelectorAll('.nav-link');
  const heroBg = document.querySelector('.hero-bg');

  let hue = 30;
  const hueMin = 30;
  const hueMax = 90;
  const hueStep = 0.5;
  const animationSpeed = 40;

  const interval = setInterval(() => {
    const filterValue = `hue-rotate(${hue}deg) saturate(0.6) brightness(0.9)`;

    // Apply filtered hue to all elements
    if (heroSpan) heroSpan.style.filter = filterValue;
    if (heroButton) heroButton.style.filter = filterValue;
    if (navLogo) navLogo.style.filter = filterValue;
    navLinks.forEach(link => link.style.filter = filterValue);
    if (heroBg) heroBg.style.filter = filterValue;

    hue += hueStep;

    if (hue >= hueMax) {
      clearInterval(interval);

      // Reset to defaults
      [heroSpan, heroButton, navLogo, heroBg].forEach(el => {
        if (el) el.style.filter = '';
      });
      navLinks.forEach(link => link.style.filter = '');

      // Optional: fade out the hero image
      if (heroBg) {
        heroBg.style.transition = 'opacity 1s ease';
        heroBg.style.opacity = '0';
      }
    }
  }, animationSpeed);
});
