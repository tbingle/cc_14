//Task 1
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    //Get the ticket container
    const ticketContainer = document.getElementById("ticketContainer");
    //Create a new ticket div
    const ticket = document.createElement("div");
    ticket.classList.add("support-ticket");
    //Create a heading for the customer name
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = customerName;
    //Create a paragraph for the issue description
    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = issueDescription;
    //Create a label and paragraph for the priority level
    const priorityLabel = document.createElement("p");
    priorityLabel.textContent = "Priority: " + priorityLevel;
    //Create the "Resolve" button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; 
    //Attach an event listener to remove the ticket when clicked
    resolveButton.addEventListener("click", function () {
        ticketContainer.removeChild(ticket);
    });
    //Append the elements to the ticket div
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    //Append the ticket to the ticket container
    ticketContainer.appendChild(ticket);
}
