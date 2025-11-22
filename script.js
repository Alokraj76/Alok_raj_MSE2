// Show specific section
    function showSection(id) {
      document.querySelectorAll("[data-section]").forEach(sec => sec.classList.add("hidden"));
      const section = document.getElementById(id);
      if (section) {
        section.classList.remove("hidden");
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Open course link in new tab
    function openCourse(url) {
      window.open(url, "_blank");
    }

    // Add notification
    function addNotification() {
      const input = document.getElementById("notifInput");
      const list = document.getElementById("notifList");
      const text = input.value.trim();
      if (!text) return;

      const li = document.createElement("li");
      li.className = "bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm";
      li.textContent = "🔔 " + text;
      list.prepend(li); // latest on top
      input.value = "";
    }

    // Admin login
    function adminLogin() {
      const user = document.getElementById("adminUser").value.trim();
      const pass = document.getElementById("adminPass").value.trim();
      const panel = document.getElementById("adminDashboard");

      if (user === "admin" && pass === "admin123") {
        alert("Admin login successful!");
        panel.classList.remove("hidden");
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        alert("Invalid credentials. Try admin / admin123");
      }
    }

    // Default section on load
    showSection("home");