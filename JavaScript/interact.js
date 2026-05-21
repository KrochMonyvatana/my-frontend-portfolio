document.addEventListener("DOMContentLoaded", () => {

  // ================= DARK MODE TOGGLE =================
  const toggleBtn = document.getElementById("themeToggle");
  const toggleText = document.getElementById("toggleText");

  if (toggleBtn && toggleText) {

    // load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      toggleText.textContent = "Night Mode";
    } else {
      document.body.classList.remove("dark");
      toggleText.textContent = "Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggleText.textContent = "Night Mode";
        localStorage.setItem("theme", "dark");
      } else {
        toggleText.textContent = "Light Mode";
        localStorage.setItem("theme", "light");
      }
    });
  }


  // ================= MENU FLASH EFFECT =================
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      this.classList.add("flash");

      setTimeout(() => {
        this.classList.remove("flash");
      }, 200);
    });
  });


  // ================= SMOOTH SCROLL =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // ================= DOWNLOAD BUTTON (TEXT ONLY POPUP) =================
  const downloadBtn = document.querySelector(".download-btn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const popup = document.createElement("div");
      popup.innerHTML = "📥 Downloading...";

      // TEXT ONLY STYLE
      popup.style.position = "fixed";
      popup.style.bottom = "20px";
      popup.style.right = "20px";
      popup.style.background = "transparent";
      popup.style.border = "none";
      popup.style.boxShadow = "none";
      popup.style.padding = "0";
      popup.style.color = "white";
      popup.style.fontSize = "16px";
      popup.style.fontWeight = "500";
      popup.style.zIndex = "9999";

      document.body.appendChild(popup);

      // change text
      setTimeout(() => {
        popup.innerHTML = "✅ Downloaded!";
      }, 1500);

      // start download
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = downloadBtn.href;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }, 1600);

      // remove popup
      setTimeout(() => {
        popup.remove();
      }, 3000);
    });
  }

});