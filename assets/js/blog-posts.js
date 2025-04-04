const blogPosts = [
  {
    title: "Building nihon-ECF-3: My Manga Library in PHP",
    date: "2025-03-28",
    tags: ["php", "project", "backend"],
    content: `
  I started this project with one goal: creating a fast, efficient manga library that doesn’t look like it was built in 2009.

  Stack:
  - 💾 PHP (MVC + Altorouter)
  - 🖼️ WebP image optimization
  - 🛠️ JSON API interaction

  Code sample:
  function borrowManga(user, book) {
    if (user.limitReached()) throw "Limit exceeded!";
    user.addBook(book);
  }
      `.trim(),
  },

  {
    title: "Cyberpunk by Design: Aesthetic Choices in My Portfolio",
    date: "2025-03-30",
    tags: ["design", "ui", "cyberpunk"],
    content: `
  The goal? Make it feel like the user just jacked into a neural interface.

  🎯 Color Palette
  - #00f7ff - Neon Cyan
  - #121212 - Dark background
  - #ff007a - Optional accent

  🔠 Fonts & Vibes
  I went with FF-Chambers and Share Tech Mono — both futuristic, geometric, and a little aggressive.

  💡 Pro Tip:
  Keep contrast high. Neon is pretty, but unreadable if you overdo the glow.
      `.trim(),
  },

  {
    title: "TIL: encodeURIComponent Saved Me",
    date: "2025-04-01",
    tags: ["javascript", "api", "devtip"],
    content: `
  I was passing user input directly into an API URL and... yeah. Nothing worked. Until I remembered this lil' fella:

  const safeQuery = encodeURIComponent(userInput);
  fetch(\`/api/search?query=\${safeQuery}\`);

  Don’t be like me. Encode your inputs. Stay safe. Stay glitchy.
      `.trim(),
  },

  {
    title: "My Dev Setup (2025 Edition)",
    date: "2025-04-02",
    tags: ["productivity", "tools", "workflow"],
    content: `
  🧠 Software
  - VS Code + GitLens + Peacock
  - Figma + FigJam
  - ChatGPT (of course)

  🔧 Terminal Tools
  - zsh + Oh My Zsh
  - PNPM over npm/yarn (fight me)

  ✨ Bonus Productivity Boosts
  - Auto Dark Mode
  - Clipboard manager
  - PomoTimer in the menu bar

  It’s not about the tools. But damn, they help.
      `.trim(),
  },
];

const blogFeed = document.getElementById("blog-feed");

blogPosts.forEach((post) => {
  const el = document.createElement("div");
  el.className = "log-entry";
  el.innerHTML = `
          <div class="log-title">${post.title}</div>
          <div class="log-meta">[${
            post.date
          }] :: <span class="glitch-tag">${post.tags.join(", ")}</span></div>
          <div class="log-body">${post.content}</div>
        `;
  blogFeed.appendChild(el);
});
