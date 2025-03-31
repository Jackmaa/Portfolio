// Select the path
const path = document.querySelector("#logo-path");
const svg = document.querySelector("#logo-svg");
// Get the total length of the path
const pathLength = path.getTotalLength();

// Set initial strokeDasharray and strokeDashoffset
gsap.set(path, {
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength,
});

// Animate the drawing of the path
gsap
  .timeline()
  .to(path, {
    strokeDashoffset: 0, // Draw the path
    duration: 2, // Adjust duration for speed
    ease: "power2.inOut",
  })
  .to(path, {
    duration: 0.5,
    repeat: 3, // Glow pulses
    yoyo: true,
    onUpdate: function () {
      // Add a glow effect by animating the stroke color
      const glowColor = `rgba(0, 255, 255,0.8)`;
      const glowColor2 = `rgba(138, 44, 226,0.8)`;
      svg.style.filter = `drop-shadow(0px 0px 10px ${glowColor}) drop-shadow(0px 0px 40px ${glowColor2})`;
    },
  });
