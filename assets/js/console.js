document.addEventListener("DOMContentLoaded", () => {
  const outputElement = document.getElementById("output");
  const inputElement = document.getElementById("input");

  // Fonction pour afficher du texte dans la console
  function printToConsole(text) {
    outputElement.innerHTML += text + "<br />";
    outputElement.scrollTop = outputElement.scrollHeight; // Pour faire défiler l'écran vers le bas
  }

  // Fonction de boot avec animation
  function bootSequence() {
    const bootMessages = [
      "Initializing system...",
      "Loading Cyberpunk Core...",
      "Welcome to the Matrix.",
      "Access granted. Enter command:",
    ];

    let delay = 0;
    bootMessages.forEach((message, index) => {
      setTimeout(() => {
        printToConsole(message);
        if (index === bootMessages.length - 1) {
          inputElement.focus(); // Donner le focus au champ d'entrée
        }
      }, delay);
      delay += 1500; // Attendre 1.5s entre chaque message
    });
  }

  // Fonction pour gérer l'entrée des commandes
  function handleCommand(command) {
    const sanitizedCommand = command.toLowerCase().trim();
    let response = "";
    if (sanitizedCommand.startsWith("say ")) {
      figlet.parseFont("Standard", standardFont);
      const textToSay = command.slice(4).trim();
      if (textToSay) {
        figlet.text(textToSay, { font: "Standard" }, (err, data) => {
          if (err) {
            printToConsole("Error generating ASCII art.");
            return;
          }

          printToConsole(`<pre class="ascii">${data}</pre>`);
        });
      } else {
        printToConsole("Usage: say [text]");
      }
      return;
    } else {
      switch (sanitizedCommand) {
        case "clear":
          outputElement.innerHTML = ""; // Effacer la console
          response = "Console cleared.";
          break;
        case "help":
          response =
            'Commandes disponibles : \nhelp \nsay "your phrase" \nstatus \nhack \nabout \ncontact \nskills \nclear \nexit';
          break;
        case "status":
          response = "System: Online\nCPU: 95%\nMemory: 78%\nDisk: 40% free";
          break;
        case "hack":
          response = "Hacking... Accessing mainframe... Unauthorized!";
          break;
        case "about":
          response =
            "Hello, I'm Valentin. I am a web developer with a passion for programming, gaming, and music. Check out my projects!";
          break;
        case "contact":
          response =
            "You can contact me at: valentingillot@gmail.com\nCheck out my LinkedIn: https://www.linkedin.com/in/valentin-gillot/ and my GitHub: https://github.com/Jackmaa/";
          break;
        case "skills":
          response =
            "I am proficient in:\n- HTML, CSS, JavaScript\n- PHP, Java\n- React, Express.js\n- MVC, REST APIs\n- Git, Docker";
          break;
        case "exit":
          response = "Exiting... Goodbye!";
          window.location.reload(); // Réinitialiser la console
          break;
        default:
          response = "Commande inconnue. Tapez 'help' pour voir les commandes.";
      }
    }

    printToConsole(response);
  }

  // Écouter l'entrée de l'utilisateur
  inputElement.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const userInput = inputElement.value;
      if (userInput.trim()) {
        printToConsole(`> ${userInput}`);
        handleCommand(userInput);
      }
      inputElement.value = ""; // Effacer le champ après chaque commande
    }
  });

  // Démarrer la séquence de démarrage lors du chargement
  bootSequence();

  // Open console with keyboard shortcut (Ctrl + Shift + C)
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      e.preventDefault(); // Prevent default action
      hideConsoleHint(); // Hide the hint if visible
      toggleConsole(); // Show or hide the console
    }
  });

  // Toggle console visibility
  function toggleConsole() {
    const consoleElement = document.getElementById("console");
    consoleElement.style.display =
      consoleElement.style.display === "none" ||
      consoleElement.style.display === ""
        ? "block"
        : "none";
  }
});

const hint = document.querySelector(".console-hint");
setTimeout(() => {
  document.querySelector(".console-hint")?.remove();
}, 10000); //
function hideConsoleHint() {
  const hint = document.querySelector(".console-hint");
  if (hint) hint.style.display = "none";
}
