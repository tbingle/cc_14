//Task 1
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    //Get the ticket container
    const ticketContainer = document.getElementById("ticketContainer");
    //Create a new ticket div
    const ticket = document.createElement("div");
    ticket.classList.add("support-ticket");
    if (priorityLevel === "High") {
        ticket.classList.add("high-priority");
    }
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
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    //Attach an event listener to remove the ticket when clicked
    resolveButton.addEventListener("click", function () {
        event.stopPropagation();
        ticketContainer.removeChild(ticket);
    });
    editButton.addEventListener("click", function (event) {
        //Prevent the event from propagating 
        event.stopPropagation();
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = customerName;

        const issueInput = document.createElement("input");
        issueInput.type = "text";
        issueInput.value = issueDescription;

        const priorityInput = document.createElement("select");
        const highOption = document.createElement("option");
        highOption.value = "High";
        highOption.textContent = "High";
        const lowOption = document.createElement("option");
        lowOption.value = "Low";
        lowOption.textContent = "Low";
        priorityInput.appendChild(highOption);
        priorityInput.appendChild(lowOption);
        priorityInput.value = priorityLevel;

        // Create a "Save" button to save changes
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        // Replace the current elements with input fields and save button
        nameHeading.replaceWith(nameInput);
        issueParagraph.replaceWith(issueInput);
        priorityLabel.replaceWith(priorityInput);
        editButton.replaceWith(saveButton);

        // Save the updated details when the Save button is clicked
        saveButton.addEventListener("click", function () {
            // Update the customer name, issue description, and priority level with new values
            nameHeading.textContent = nameInput.value;
            issueParagraph.textContent = issueInput.value;
            priorityLabel.textContent = "Priority: " + priorityInput.value;

            // Replace the input fields with updated static content
            nameInput.replaceWith(nameHeading);
            issueInput.replaceWith(issueParagraph);
            priorityInput.replaceWith(priorityLabel);

            // Replace the Save button with the Edit button
            saveButton.replaceWith(editButton);
        });
    });
    //Append the elements to the ticket div
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
    ticket.appendChild(editButton);
    //Append the ticket to the ticket container
    ticketContainer.appendChild(ticket);
}
function highlightHighPriorityTickets() {
    //Select all high-priority tickets using querySelectorAll
    const highPriorityTickets = document.querySelectorAll(".high-priority");
    //Convert NodeList to an array using Array.from()
    const highPriorityArray = Array.from(highPriorityTickets);
    //Loop through each high-priority ticket and apply a style
    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = "#ffeb3b";  //Change background color to yellow
        ticket.style.border = "2px solid #f44336"; //Add a red border
    });
}
document.getElementById("ticketContainer").addEventListener("click", function (event) {
    console.log("A ticket was clicked!", event.target);
});