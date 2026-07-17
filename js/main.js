/* ============================================================
   AI Grievance System
   File: main.js
   Purpose:
   Handles common frontend interactions for the landing page.
============================================================ */


/* ============================================================
   Wait Until DOM is Fully Loaded
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initializeSmoothScrolling();

    initializeNavbarEffect();

    initializeScrollAnimations();

    initializeActiveNavigation();

});


/* ============================================================
   Smooth Scrolling
============================================================ */

function initializeSmoothScrolling() {

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            targetSection.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}


/* ============================================================
   Navbar Shadow on Scroll
============================================================ */

function initializeNavbarEffect() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.classList.add("navbar-scrolled");

        }

        else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}


/* ============================================================
   Active Navigation Highlight
============================================================ */

function initializeActiveNavigation() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    });

}


/* ============================================================
   Scroll Fade Animation
============================================================ */

function initializeScrollAnimations() {

    const animatedElements = document.querySelectorAll(

        ".hero-content, .hero-image, .about, .portal-card"

    );

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

}


/* ============================================================
   Utility Functions
============================================================ */

function showElement(element) {

    element.classList.remove("hidden");

    element.classList.add("show");

}

function hideElement(element) {

    element.classList.remove("show");

    element.classList.add("hidden");

}


/* ============================================================
   Future Features
============================================================ */

// Back To Top Button

// Dark Mode

// Notification Banner

// Mobile Navigation Menu

// Theme Switcher

// These features can be added later without
// changing the existing project structure.