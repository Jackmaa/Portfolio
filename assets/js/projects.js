const username = "Jackmaa";

async function fetchProjects() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();

  const projectsContainer = document.querySelector("#projects");
  projectsContainer.innerHTML = "";

  repos.forEach((repo) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <div class="card-content">
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
         <button class="info-btn" data-name="${repo.name}" data-description="${
      repo.description
    }" data-url="${repo.html_url}">
          More Info
        </button>
      </div>
    `;
    projectsContainer.appendChild(projectCard);

    addTiltEffect();
  });
  addLightboxEvents();
}

document.addEventListener("DOMContentLoaded", fetchProjects);

function addTiltEffect() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const { offsetWidth: width, offsetHeight: height } = card;
      const { offsetX: x, offsetY: y } = e;

      // Calculate tilt effect values
      const rotateX = (y / height - 0.5) * 20; // Max 20 degrees tilt
      const rotateY = (x / width - 0.5) * -20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      // Reset on mouse leave
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function addLightboxEvents() {
  const lightbox = document.getElementById("lightbox");
  const closeButton = document.querySelector(".close-btn");
  const infoButtons = document.querySelectorAll(".info-btn");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");
  const lightboxLink = document.getElementById("lightbox-link");

  infoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Button clicked:", this);
      lightboxTitle.textContent = this.getAttribute("data-name");
      lightboxDescription.textContent = this.getAttribute("data-description");
      lightboxLink.href = this.getAttribute("data-url");

      lightbox.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}
