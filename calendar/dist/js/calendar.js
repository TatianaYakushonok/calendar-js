function createCalendar(elem, year, month) {
    elem = document.querySelector(elem);

    let mon = month - 1;
    let d = new Date(year, mon);

    switch (mon)
    {
        case 0: 
            month = 'Январь'
            break;
        case 1:
            month = 'Февраль'
            break;
        case 2:
            month = 'Март'
            break;
        case 3:
            month = 'Апрель'
            break;
        case 4:
            month = 'Май'
            break;
        case 5:
            month = 'Июнь'
            break;
        case 6:
            month = 'Июль'
            break;
        case 7:
            month = 'Август'
            break;
        case 8:
            month = 'Сентябрь'
            break;
        case 9:
            month = 'Октябрь'
            break;
        case 10:
            month = 'Ноябрь'
            break;
        case 11:
            month = 'Декабрь'
            break;
    };

    let table = `
     <table>
        <caption>${month} ${year}</caption>
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th style="color: red">сб</th>
            <th style="color: red">вс</th>
        </tr>
        <tr>
    `;

    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        if (getDay(d) == 5 || getDay(d) == 6) {
            table += '<td style="color: red">' + d.getDate() + '</td>';
        }
        else {
            table += '<td>' + d.getDate() + '</td>';
        }
        
        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML += table;;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day =  7;
    return day - 1;
}

for (let i = 1; i < 13; i++) {
    createCalendar('.container', 2022, i);
}