const form = document.getElementById("complaintForm");
const loadingBox = document.getElementById("loadingBox");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    loadingBox.style.display = "flex";

    try {

        const complaintData = {

            name: document.getElementById("name").value.trim(),

            mobile: document.getElementById("mobile").value.trim(),

            location: document.getElementById("location").value.trim(),

            complaint:
                "Category: " +
                document.getElementById("category").value +
                "\n\nComplaint:\n" +
                document.getElementById("complaint").value.trim()

        };

        const result = await submitComplaint(complaintData);

        loadingBox.style.display = "none";

        alert(`Complaint Submitted Successfully!

Ticket ID: ${result.ticket_id}

Department: ${result.department}

Priority: ${result.priority}

Status: ${result.status}`);

        form.reset();

    }

    catch (error) {

        loadingBox.style.display = "none";

        console.error(error);

        alert("Failed to submit complaint.");

    }

});