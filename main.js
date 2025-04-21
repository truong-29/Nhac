document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    }, 1000);
    });
    function checkLogin() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "admin" && password === "123") {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("user-info").classList.remove("hidden");
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    }

    function checkSession() {
      if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("user-info").classList.remove("hidden");
      }
    }
    function recordTraffic() {
    fetch("record_traffic.php").then(response => response.text()).then(console.log);
    }
    window.onload = recordTraffic;
    document.addEventListener("DOMContentLoaded", function () {
    fetch("get_traffic.php")
    .then(response => response.json())
    .then(data => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const maxVisits = Math.max(...Object.values(data), 1); // Tránh chia cho 0
    
    let chartHtml = "";
    days.forEach(day => {
    let visitCount = data[day] || 0;
    let height = visitCount > 0 ? (visitCount / maxVisits) * 150 + 20 : 20; // Đảm bảo cột không bị ẩn
    
    chartHtml += `
    <div class="flex flex-col items-center w-10">
        <span class="text-xs text-white mb-1">${visitCount}</span> <!-- Hiển thị số trên cột -->
        <div class="w-6 bg-blue-400 rounded-md transition-all duration-300" style="height: ${height}px;"></div>
        <span class="text-xs text-white mt-1">${day.substring(0, 3)}</span>
    </div>
    `;
    });
    
    document.getElementById("traffic-chart").innerHTML = chartHtml;
    })
    .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    });
