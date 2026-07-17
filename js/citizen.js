/* ==========================================
   Citizen Dashboard JavaScript
   AI-Powered Grievance Lodging & Tracking System
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeDashboard();

    highlightActiveNavigation();

});

/* ==========================================
   Initialize Dashboard
========================================== */

function initializeDashboard() {

    welcomeUser();

    animateStatistics();

}

/* ==========================================
   Welcome Message
========================================== */

function welcomeUser() {

    const welcomeElement = document.getElementById("welcomeMessage");

    if (!welcomeElement) return;

    const hour = new Date().getHours();

    let greeting = "Welcome";

    if (hour < 12) {

        greeting = "Good Morning";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

    }

    else {

        greeting = "Good Evening";

    }

    welcomeElement.textContent = `${greeting}, Citizen`;

}

/* ==========================================
   Dashboard Card Navigation
========================================== */

function goToSubmit() {

    window.location.href = "submit-complaint.html";

}

function goToTrack() {

    window.location.href = "track-complaint.html";

}

function goToHistory() {

    window.location.href = "complaint-history.html";

}

/* ==========================================
   Animate Statistics (Future Use)
========================================== */

function animateStatistics() {

    const statNumbers = document.querySelectorAll(".stat-number");

    statNumbers.forEach((element) => {

        const target = Number(element.dataset.value);

        if (isNaN(target)) return;

        let current = 0;

        const interval = setInterval(() => {

            current++;

            element.textContent = current;

            if (current >= target) {

                clearInterval(interval);

            }

        }, 20);

    });

}

/* ==========================================
   Highlight Active Navigation
========================================== */

function highlightActiveNavigation() {

    const links = document.querySelectorAll(".nav-links a");

    links.forEach((link) => {

        if (link.href === window.location.href) {

            link.classList.add("active");

        }

    });

}

/* ==========================================
   Notifications
========================================== */

function showNotification(message, type = "success") {

    const notification = document.createElement("div");

    notification.className = `notification ${type}`;

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 3000);

}