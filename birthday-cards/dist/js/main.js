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

  people.forEach(item => {
    let namePeople = `${item['name']['f']} ${item['name']['i']} ${item['name']['o']}`;
    let date = `${item['date']['d']} ${month[+item['date']['m']]} ${item['date']['y']}`;

    let element = document.createElement('p');
    element.innerHTML = namePeople + ' ' + date;

    for (let i = 0; i <=12; i++) {
        if (item['date']['m'] == i) {
            if (document.querySelector(`.items > div .item${i}`) == null) {
                let div = document.createElement('div');
                div.classList.add('item');
                div.innerHTML = `
                    <h4>${monthIp[i]}</h4>
                    <div class="item${i}"></div>
                `;
                document.querySelector('.items').append(div);
            }

            document.querySelector(`.items > div .item${i}`).append(element);
        }
    }
  })