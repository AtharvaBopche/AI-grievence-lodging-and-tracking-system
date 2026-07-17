const params = new URLSearchParams(window.location.search);
const ticketId = params.get("ticket");

window.onload = loadComplaint;

async function loadComplaint() {

    if (!ticketId) {

        alert("No ticket selected.");
        return;

    }

    try {

        const complaint = await trackComplaint(ticketId);

        document.getElementById("ticketId").value = complaint.ticket_id;
        document.getElementById("citizen").value = complaint.name;
        document.getElementById("department").value = complaint.department;
        document.getElementById("priority").value = complaint.priority;

        document.getElementById("status").value = complaint.status;
        document.getElementById("remarks").value = complaint.remarks || "";

        document.getElementById("issue").textContent =
            complaint.issue;

        document.getElementById("aiDepartment").textContent =
            complaint.department;

        document.getElementById("aiPriority").textContent =
            complaint.priority;

        document.getElementById("confidence").textContent =
            Math.round((complaint.confidence || 0) * 100) + "%";

    }

    catch (err) {

        console.error(err);

        alert("Unable to load complaint.");

    }

}

document.getElementById("updateForm").addEventListener("submit", async function(e){

    e.preventDefault();

    try{

        await updateComplaint(ticketId,{

            status:document.getElementById("status").value,

            remarks:document.getElementById("remarks").value

        });

        alert("Complaint updated successfully.");

        window.location.href="view-complaints.html";

    }

    catch(err){

        console.error(err);

        alert("Unable to update complaint.");

    }

});

document.getElementById("resolveBtn").onclick=async function(){

    try{

        await updateComplaint(ticketId,{

            status:"Resolved",

            remarks:document.getElementById("remarks").value

        });

        alert("Complaint marked as Resolved.");

        window.location.reload();

    }

    catch(err){

        console.error(err);

        alert("Unable to resolve complaint.");

    }

};