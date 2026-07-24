const button = document.getElementById("loadBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

button.addEventListener("click", function () {

    status.innerText = "Loading...";
    usersDiv.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {

                data.forEach(user => {
                    usersDiv.innerHTML += `
                        <div class="user">
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
                    `;
                });

                status.innerText = "Loaded successfully";

            })
            .catch(error => {
                status.innerText = "Error loading data";
                console.log(error);
            });

    }, 2000);

});