const btnToggle = document.getElementById("toggle-dashboard-menu");
const dashboardMenu = document.getElementById("menu-dashboard");

btnToggle.addEventListener("click", () => {
  dashboardMenu.classList.toggle("hidden");
});
