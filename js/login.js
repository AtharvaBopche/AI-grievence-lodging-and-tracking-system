/* ==========================================
   Admin Login
   ========================================== */

const ADMIN_CREDENTIALS = {

    username: "admin",

    password: "admin123"

};

function loginAdmin(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    const password = document.getElementById("password").value.trim();

    if (

        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password

    ) {

        sessionStorage.setItem("adminLoggedIn", "true");

        window.location.href = "admin-dashboard.html";

    }

    else {

        alert("Invalid Username or Password");

    }

}