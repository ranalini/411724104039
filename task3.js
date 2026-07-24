let messages = [];

const input = document.getElementById("messageInput");
const count = document.getElementById("count");
const status = document.getElementById("status");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const messagesDiv = document.getElementById("messages");

// Character count using input event
input.addEventListener("input", function () {
    count.textContent = "Character Count: " + input.value.length;
});

// Display all messages
function displayMessages() {
    messagesDiv.innerHTML = "";

    messages.forEach((msg, index) => {
        const p = document.createElement("p");
        p.className = "message";
        p.textContent = msg;

        messagesDiv.appendChild(p);

        // Remove message after 10 seconds
        setTimeout(() => {
            if (messages.includes(msg)) {
                messages.splice(messages.indexOf(msg), 1);
                displayMessages();
                status.textContent = "Message Expired";
            }
        }, 10000);
    });
}

// Add Message button
addBtn.addEventListener("click", function () {

    const message = input.value;

    const promise = new Promise((resolve, reject) => {
        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }
    });

    promise
        .then((msg) => {
            status.textContent = "Message Added Successfully";

            messages.push(msg);

            displayMessages();

            input.value = "";
            count.textContent = "Character Count: 0";
        })
        .catch((error) => {
            status.textContent = error;
        });
});

// Clear All Messages button
clearBtn.addEventListener("click", function () {
    messages = [];
    messagesDiv.innerHTML = "";
    status.textContent = "All Messages Cleared";
});