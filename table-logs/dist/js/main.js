const JURNALS = [
    ["1", "Описание журнала", "yes"],
    ["2", "Описание журнала", "no"],
    ["3", "Описание журнала", "no"],
    ["4", "Описание журнала", "yes"],
];

JURNALS.forEach(item => {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2] == 'yes' ? '<span style="color: green">&#9745</span>' : item[2] == 'no' ? '<span style="color: red">&#9746</span>' : item[2]}</td>
    `
    document.querySelector('table').tBodies[0].append(row);
})