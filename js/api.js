/* ==========================================
   API Service
   AI-Powered Grievance Lodging System
   ========================================== */

const API_BASE_URL = "https://api.atharvabopche.online";

/* ==========================================
   Submit Complaint
   ========================================== */

async function submitComplaint(data) {

    const response = await fetch(
        `${API_BASE_URL}/api/complaints`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to submit complaint.");
    }

    return await response.json();
}


/* ==========================================
   Track Complaint
   ========================================== */

async function trackComplaint(ticketId) {

    const response = await fetch(
        `${API_BASE_URL}/api/track/${ticketId}`
    );

    if (!response.ok) {
        throw new Error("Complaint not found.");
    }

    return await response.json();
}


/* ==========================================
   Complaint History
   ========================================== */

async function getComplaintHistory(mobile) {

    const response = await fetch(
        `${API_BASE_URL}/api/history/${mobile}`
    );

    if (!response.ok) {
        throw new Error("Unable to fetch history.");
    }

    return await response.json();
}


/* ==========================================
   Dashboard
   ========================================== */

async function getDashboard() {

    const response = await fetch(
        `${API_BASE_URL}/api/admin/dashboard`
    );

    if (!response.ok) {
        throw new Error("Unable to load dashboard.");
    }

    return await response.json();
}


/* ==========================================
   Get All Complaints
   ========================================== */

async function getAllComplaints() {

    const response = await fetch(
        `${API_BASE_URL}/api/admin/complaints`
    );

    if (!response.ok) {
        throw new Error("Unable to fetch complaints.");
    }

    return await response.json();
}


/* ==========================================
   Complaint Details
   ========================================== */

async function getComplaintDetails(ticketId) {

    const response = await fetch(
        `${API_BASE_URL}/api/admin/complaints/${ticketId}`
    );

    if (!response.ok) {
        throw new Error("Complaint not found.");
    }

    return await response.json();
}


/* ==========================================
   Update Complaint
   ========================================== */

async function updateComplaint(ticketId, data) {

    const response = await fetch(
        `${API_BASE_URL}/api/admin/update/${ticketId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error("Update failed.");
    }

    return await response.json();
}