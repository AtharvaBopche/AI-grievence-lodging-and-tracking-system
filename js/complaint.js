window.onload = loadComplaints;

async function loadComplaints() {

    try {

        const complaints = await getAllComplaints();

        const tbody = document.querySelector("tbody");

        tbody.innerHTML = "";

        complaints.forEach(c => {

            tbody.innerHTML += `

            <tr>

                <td>${c.ticket_id}</td>

                <td>${c.name}</td>

                <td>${c.department}</td>

                <td>
                    <span class="priority ${c.priority.toLowerCase()}">
                        ${c.priority}
                    </span>
                </td>

                <td>
                    <span class="status">
                        ${c.status}
                    </span>
                </td>

                <td>-</td>

                <td>

                    <button class="action-btn view"
                        onclick="window.location.href='complaint-details.html?ticket=${c.ticket_id}'">

                        <i class="fa-solid fa-eye"></i>

                    </button>

                    <button class="action-btn edit"
                        onclick="window.location.href='update-status.html?ticket=${c.ticket_id}'">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                </td>

            </tr>

            `;

        });

    }

    catch (err) {

        console.error(err);

        alert("Unable to load complaints.");

    }

}