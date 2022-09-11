const people = [
    {
      room: "8",
      name: {
        f: "Степанов",
        i: "Борис",
        o: "Иванович"
      },
      date: {
        d: 17,
        m: 6,
        y: 1996
      },
      number: ["89057999079"]
    },
    {
      room: "3",
      name: {
        f: "Смирнов",
        i: "Сергей",
        o: "Борисович"
      },
      date: {
        d: 22,
        m: 9,
        y: 1994
      },
      number: ["89097622050"]
    },
    {
      room: "1",
      name: {
        f: "Архипов",
        i: "Иван",
        o: "Сергеевич"
      },
      date: {
        d: 24,
        m: 7,
        y: 1993
      },
      number: ["89056664737"]
    },
    {
      room: "2",
      name: {
        f: "Горшков",
        i: "Кирилл",
        o: "Петрович"
      },
      date: {
        d: 25,
        m: 6,
        y: 1995
      },
      number: ["89137782447"]
    },
  ];

  function rooms() {
    let rooms = [];

    for (let i = 0; i < people.length; i++) {
        rooms.push(
            [people[i]['room'], `${people[i]['name']['f']} ${people[i]['name']['i']} ${people[i]['name']['o']}`]
        )
    };
    return rooms.sort((a, b) => +a[0] - b[0]);
  }

  document.querySelector('body').innerHTML = `<table></table>`;
  let title_rooms = document.createElement('tr');
  title_rooms.innerHTML = `
    <th>Комната</th>
    <th>ФИО</th>
  `;
  document.querySelector('table').append(title_rooms);
  
  for (let i = 0; i < rooms().length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${rooms()[i][0]}</td>
        <td>${rooms()[i][1]}</td>
    `;
    document.querySelector('table').append(row);
  }