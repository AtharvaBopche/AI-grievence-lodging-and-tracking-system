/* ==========================================
   Check Admin Login
   ========================================== */

if (sessionStorage.getItem("adminLoggedIn") !== "true") {

    window.location.href = "admin-login.html";

}

window.onload = loadDashboard;

async function loadDashboard() {

    try {

        const data = await getDashboard();

        // ===== Statistics =====

        const statCards = document.querySelectorAll(".stat-card h2");

        statCards[0].textContent = data.stats.total;
        statCards[1].textContent = data.stats.submitted;
        statCards[2].textContent = data.stats.in_progress;
        statCards[3].textContent = data.stats.resolved;

        // ===== Recent Complaints =====

        const tbody = document.querySelector("tbody");

        tbody.innerHTML = "";

        data.recent.forEach(c => {

            tbody.innerHTML += `

            <tr>

                <td>${c.ticket_id}</td>

                <td>${c.name}</td>

                <td>${c.department}</td>

                <td>${c.status}</td>

                <td>${c.priority}</td>

            </tr>

            `;

        });

    }

    catch (error) {

        console.error(error);

        alert("Unable to load dashboard.");

    }


}

function logout() {

    sessionStorage.removeItem("adminLoggedIn");

    window.location.href = "admin-login.html";

}