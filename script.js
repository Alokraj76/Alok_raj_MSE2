 // Navigation Function
    function showSection(id) {
      document.querySelectorAll('.container').forEach(sec => sec.classList.add('hidden'));
      document.getElementById(id).classList.remove('hidden');
    }

    // Student form submit
    document.getElementById('studentForm').addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('studentMsg').textContent = "✅ Registration Successful!";
      e.target.reset();
    });

    // Lecture upload dummy
    function uploadLecture() {
      const file = document.getElementById('lectureFile').files[0];
      if (file) {
        const li = document.createElement('li');
        li.textContent = file.name + " uploaded successfully!";
        document.getElementById('lectureList').appendChild(li);
        document.getElementById('uploadMsg').textContent = "✅ Lecture uploaded!";
      } else {
        document.getElementById('uploadMsg').style.color = "red";
        document.getElementById('uploadMsg').textContent = "Please select a file.";
      }
    }

    // Notification system
    document.getElementById('notifyForm').addEventListener('submit', e => {
      e.preventDefault();
      const text = document.getElementById('notifyInput').value;
      const div = document.createElement('div');
      div.className = "notification";
      div.textContent = "🔔 " + text;
      document.getElementById('notifyContainer').appendChild(div);
      e.target.reset();
    });

    // Admin login dummy
    document.getElementById('adminForm').addEventListener('submit', e => {
      e.preventDefault();
      const user = document.getElementById('adminUser').value;
      const pass = document.getElementById('adminPass').value;
      const msg = document.getElementById('adminMsg');

      if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "✅ Admin Logged In Successfully!";
      } else {
        msg.style.color = "red";
        msg.textContent = "❌ Invalid credentials!";
      }
    });