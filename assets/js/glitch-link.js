// Register the GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

// Custom scramble effect function
function scrambleText(element, text, chars) {
  const characters = chars.split("");
  let scrambledText = "";

  // Generate random characters for scrambling
  for (let i = 0; i < text.length; i++) {
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];
    scrambledText += randomChar;
  }

  // Set scrambled text
  element.textContent = scrambledText;
}

// Trigger the scramble effect on hover and stop it after 1 second
function startScrambling(element, text, chars) {
  const scrambleDuration = 1; // 1 second of scrambling
  const interval = setInterval(() => {
    scrambleText(element, text, chars);
  }, 100); // Scramble text every 100 ms

  // Stop the scramble after 1 second and transition back to the original text
  setTimeout(() => {
    clearInterval(interval);

    // Smoothly transition back to the original text
    gsap.to(element, {
      duration: 1,
      text: {
        value: text,
        delimiter: "",
      },
      ease: "power3.out",
    });
  }, scrambleDuration * 1000); // 1 second
}

// Setup the hover effect for all elements with class "scrambleText"
document.addEventListener("DOMContentLoaded", () => {
  const scrambleLinks = document.querySelectorAll("a span.scrambleText");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^";

  // Trigger scramble on mouse enter for each element
  scrambleLinks.forEach((element) => {
    const originalText = element.textContent;

    element.addEventListener("mouseenter", () => {
      // Start scrambling the text and smoothly transition back after 1 second
      startScrambling(element, originalText, chars);
    });
  });
  document.querySelectorAll("button span.scrambleText").forEach((element) => {
    const originalText = element.textContent;
    element.parentElement.addEventListener("mouseenter", () => {
      // Start scrambling the text and smoothly transition back after 1 second
      startScrambling(element, originalText, chars);
    });
  });
});
