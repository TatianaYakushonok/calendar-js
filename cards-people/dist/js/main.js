//Месеца
const month = ["", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//Месяца в именительном падеже
const monthIp = ["", "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

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
      number: ["89056664737", "89057774737"]
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

  function createCards(selector, arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            ФИО: ${arr[i]['name']['f']} ${arr[i]['name']['i']} ${arr[i]['name']['o']}<br>
            Номера телефонов: ${arr[i]['number'].join(', ')}<br>
            День рождения: ${arr[i]['date']['d']} ${month[+arr[i]['date']['m']]} ${arr[i]['date']['y']}<br>
            Комната: ${arr[i]['room']}<br>
        `;
        document.querySelector(selector).append(item);
    }
  };

  createCards('.items', people);