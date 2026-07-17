/* ==========================================
   TRACK COMPLAINT
   AI Grievance System
========================================== */

const trackBtn = document.getElementById("trackBtn");
const ticketInput = document.getElementById("ticketInput");

const loadingBox = document.getElementById("loadingBox");
const resultSection = document.getElementById("resultSection");

trackBtn.addEventListener("click", trackComplaintDetails);

ticketInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        trackComplaintDetails();

    }

});

/* ==========================================
   Track Complaint
========================================== */

async function trackComplaintDetails() {

    const ticketId = ticketInput.value.trim();

    if (ticketId === "") {

        alert("Please enter a Ticket ID.");

        return;

    }

    loadingBox.style.display = "flex";

    try {

        const complaint = await trackComplaint(ticketId);

        loadingBox.style.display = "none";

        resultSection.style.display = "block";

        populateComplaint(complaint);

    }

    catch (error) {

        loadingBox.style.display = "none";

        resultSection.style.display = "none";

        alert("Complaint not found.");

        console.error(error);

    }

}

/* ==========================================
   Populate Data
========================================== */

function populateComplaint(data) {

    document.getElementById("ticketId").textContent = data.ticket_id;

    document.getElementById("citizenName").textContent = data.name;

    document.getElementById("department").textContent = data.department;

    document.getElementById("location").textContent = data.location;

    document.getElementById("issue").textContent = data.issue;

    document.getElementById("aiDepartment").textContent = data.department;

    document.getElementById("aiPriority").textContent = data.priority;

    document.getElementById("confidence").textContent =
        Math.round(data.confidence * 100) + "%";

    document.getElementById("summary").textContent = data.summary;

    document.getElementById("remarks").textContent =
        data.remarks || "No remarks available.";

    /* ===========================
       Priority Badge
    =========================== */

    const priorityBadge = document.getElementById("priorityBadge");

    priorityBadge.textContent = data.priority;

    priorityBadge.className = "badge";

    switch (data.priority.toLowerCase()) {

        case "high":

            priorityBadge.classList.add("high");

            break;

        case "medium":

            priorityBadge.classList.add("medium");

            break;

        default:

            priorityBadge.classList.add("low");

    }

    /* ===========================
       Status Badge
    =========================== */

    const statusBadge = document.getElementById("statusBadge");

    statusBadge.textContent = data.status;

    statusBadge.className = "badge";

    switch (data.status.toLowerCase()) {

        case "submitted":

            statusBadge.classList.add("submitted");

            break;

        case "assigned":

            statusBadge.classList.add("assigned");

            break;

        case "in progress":

            statusBadge.classList.add("progress");

            break;

        case "inspection completed":

            statusBadge.classList.add("progress");

            break;

        case "resolved":

            statusBadge.classList.add("resolved");

            break;

        case "closed":

            statusBadge.classList.add("closed");

            break;

    }

    updateTimeline(data.status);

}

/* ==========================================
   Timeline
========================================== */

function updateTimeline(status) {

    const steps = [

        "stepSubmitted",

        "stepAssigned",

        "stepProgress",

        "stepInspection",

        "stepResolved",

        "stepClosed"

    ];

    steps.forEach(step => {

        document.getElementById(step).classList.remove("active");

        document.getElementById(step).classList.remove("completed");

    });

    let current = 0;

    switch (status.toLowerCase()) {

        case "submitted":

            current = 0;

            break;

        case "assigned":

            current = 1;

            break;

        case "in progress":

            current = 2;

            break;

        case "inspection completed":

            current = 3;

            break;

        case "resolved":

            current = 4;

            break;

        case "closed":

            current = 5;

            break;

    }

    for (let i = 0; i < current; i++) {

        document.getElementById(steps[i]).classList.add("completed");

    }

    document.getElementById(steps[current]).classList.add("active");

}