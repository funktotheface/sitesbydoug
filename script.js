document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animations (as before)
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

  const heroBg = document.querySelector('.hero-bg');
  const heroSpan = document.querySelector('.hero-heading span');
  const heroButton = document.getElementById('heroButton');
  const navLogo = document.getElementById('navLogo');
  const navLinks = document.querySelectorAll('.nav-link');

  let hue = 0;
  let lastTime = 0;
  const speed = 7; // degrees per second, adjust here to make it faster or slower

  function updateHue(time) {
    if (!lastTime) lastTime = time;
    const delta = (time - lastTime) / 1000; // seconds passed since last frame
    lastTime = time;

    hue = (hue + speed * delta) % 360; // increment hue based on elapsed time and speed
    const hueRotateValue = `hue-rotate(${hue}deg)`;

    if (heroBg) heroBg.style.filter = hueRotateValue;
    if (heroSpan) heroSpan.style.filter = hueRotateValue;
    if (heroButton) heroButton.style.filter = hueRotateValue;
    if (navLogo) navLogo.style.filter = hueRotateValue;
    navLinks.forEach(link => {
      link.style.filter = hueRotateValue;
    });

    requestAnimationFrame(updateHue);
  }

  requestAnimationFrame(updateHue);
});

