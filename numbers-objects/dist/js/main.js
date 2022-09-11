const PHONE_NUMBER = {
    'Группа номеров 1': [
        ['Номер 1', '2591514'],
        ['Номер 2', '2182742'],
        ['Номер 3', '2791821']
    ],
    'Группа номеров 2': [
        ['Номер 1', '2485841']
    ],
    'Группа номеров 3': [
        ['Номер 1', '212433, 243574'],
        ['Номер 2', '442431, 552432']
    ]
}

for (let key in PHONE_NUMBER) {
    let row = document.createElement('tr');
    row.innerHTML = `<th colspan="2">${key}</th>`;
    document.querySelector('table').append(row);

    for (let i = 0; i < PHONE_NUMBER[key].length; i++) {
        let row = document.createElement('tr');
        row.innerHTML =`
            <td>${PHONE_NUMBER[key][i][0]}</td>
            <td>${PHONE_NUMBER[key][i][1]}</td>
        `
        document.querySelector('table').append(row);
    }
}