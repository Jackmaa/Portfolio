document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".timeline-item");
  const timeline = document.querySelector(".timeline");

  if (!timeline || items.length === 0) return; // Safety check

  let observer = new IntersectionObserver(
    (entries) => {
      let visibleItems = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });

      // Get all currently visible timeline items
      visibleItems = [...items].filter((item) =>
        item.classList.contains("visible")
      );

      if (visibleItems.length > 0) {
        const firstVisible = visibleItems[0].querySelector(".timeline-dot");
        const lastVisible =
          visibleItems[visibleItems.length - 1].querySelector(".timeline-dot");

        if (firstVisible && lastVisible) {
          let startY =
            firstVisible.getBoundingClientRect().top + window.scrollY;
          let endY =
            lastVisible.getBoundingClientRect().bottom + window.scrollY;

          let newHeight = Math.max(endY - startY, 0);

          // If the last timeline item is fully visible, add an extra buffer
          if (
            visibleItems[visibleItems.length - 1] === items[items.length - 1]
          ) {
            newHeight += 100; // Adjust this value based on your design
          }

          timeline.style.setProperty("--timeline-height", `${newHeight}px`);
        }
      }
    },
    { threshold: 0.1 }
  ); // Lower threshold helps detect elements earlier

  // Observe all timeline items
  items.forEach((item) => observer.observe(item));
});
