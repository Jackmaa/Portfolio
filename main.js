const btnToggle = document.getElementById("toggle-dashboard-menu");
const dashboardMenu = document.getElementById("menu-dashboard");

btnToggle.addEventListener("click", () => {
  dashboardMenu.classList.toggle("hidden");
});

const granimInstance = new Granim({
  element: "#granim-canvas",
  direction: "radial", // Use 'radial' for a conic-like effect
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#a8a9ad", "#c0c0c0", "#fd9a00"], // Gradient 1
        ["#fd9a00", "#a8a9ad", "#c0c0c0"], // Gradient 2
        ["#272727", "#c0c0c0", "#fd9a00"], // Gradient 3
      ],
      transitionSpeed: 3000, // Speed of gradient transitions
    },
  },
});
