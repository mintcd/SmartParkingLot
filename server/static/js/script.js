function updateSensorData() {
    fetch("/sensor_data")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("temperature").textContent =
                data.temperature;
            document.getElementById("humidity").textContent = data.humidity;
            document.getElementById("wind").textContent = data.wind;
        });
}

function updateVehicleParkedData() {
    fetch("/vehicle_parked_data")
        .then((response) => response.json())
        .then((data) => {
            var tableBody = document.getElementById("informations-body");
            tableBody.innerHTML = "";
            data.reverse();
            // Loop over the data and populate the table rows
            data.forEach(function (item) {
                var row = document.createElement("tr");
                var keyCell = document.createElement("td");
                var idCell = document.createElement("td");
                var posCell = document.createElement("td");
                var timeCell = document.createElement("td");

                // Set the cell values
                keyCell.textContent = item.key;
                idCell.textContent = item.id;
                posCell.textContent = item.pos;
                timeCell.textContent = item.time;

                // Append the cells to the row
                row.appendChild(keyCell);
                row.appendChild(idCell);
                row.appendChild(posCell);
                row.appendChild(timeCell);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        });
}

setInterval(updateVehicleParkedData, 2000);
setInterval(updateSensorData, 2000); 
