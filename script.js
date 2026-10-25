let variant = 14;
let head = document.getElementById("tableHead");
let body = document.getElementById("tableBody");

// Числа зверху: від 11 до 20, помножені на варіант.
for (let i = 11; i <= 20; i++) {
    let th = document.createElement("th");
    th.textContent = i * variant;
    head.appendChild(th);
}

// Числа зліва кратні 7, починаючи з 14.
for (let i = 14; i <= 77; i += 7) {
    let row = document.createElement("tr");

    let firstCell = document.createElement("th");
    firstCell.textContent = i;
    row.appendChild(firstCell);

    for (let j = 11; j <= 20; j++) {
        let cell = document.createElement("td");
        cell.textContent = i * j;
        row.appendChild(cell);
    }

    body.appendChild(row);
}
