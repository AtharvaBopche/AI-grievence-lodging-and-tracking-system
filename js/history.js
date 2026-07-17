const historyContainer = document.querySelector(".history-container");

const mobile = prompt("Enter your registered mobile number");

loadHistory();

async function loadHistory() {

    try {

        const complaints = await getComplaintHistory(mobile);

        historyContainer.innerHTML = "";

        if (complaints.length === 0) {

            historyContainer.innerHTML =
                "<h2>No complaints found.</h2>";

            return;
        }

        complaints.forEach(c => {

            historyContainer.innerHTML += `

            <div class="history-card">

                <div class="card-header">

                    <h2>${c.ticket_id}</h2>

                    <span class="status">
                        ${c.status}
                    </span>

                </div>

                <p><strong>Issue :</strong> ${c.issue}</p>

                <p><strong>Department :</strong> ${c.department}</p>

                <p><strong>Priority :</strong> ${c.priority}</p>

                <p><strong>Summary :</strong> ${c.summary}</p>

                <button class="view-btn"
                    onclick="window.location='track-complaint.html?ticket=${c.ticket_id}'">

                    <i class="fa-solid fa-eye"></i>

                    View Details

                </button>

            </div>

            `;

        });

    }

    catch (err) {

        console.error(err);

        alert("Unable to load complaint history.");

    }

}