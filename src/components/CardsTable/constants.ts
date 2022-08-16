import { CardLocationProps } from "../CardLocation/types";

export const CARDS_ROWS = 3;

export const CARDS: CardLocationProps[] = [
  {
    id: 1,
    title: "Сходить на рынок для Лорда",
    description: "Купи то, купи сё...",
    actions: [
      {
        text: "Лук за 3 золота",
        type: "buy-bow",
      },
      {
        text: "Меч за 3 золота",
        type: "buy-sword",
      },
      {
        text: "Книга за 3 золота",
        type: "buy-book",
      },
    ],
    places: [],
  },
  {
    id: 2,
    title: "Чистить общественные конюшни",
    description: "Лучше лошадей, чем лорда портанки",
    actions: [
      {
        text: "Х золота за Х * 2 энергии (X <= 4)",
        type: "work-horse",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 3,
    title: "Держать манекен для фехтования Лорду (треб. пропуск на поле)",
    description: "Держал ты, а недоволен он... а ведь убить могло",
    actions: [
      {
        text: "+1 сила, -1 настроение",
        type: "train-might",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 4,
    title: "Читать книгу Лорду (треб. пропуск в библиотеку)",
    description: "Или как задавить интеллектом тушканчика",
    actions: [
      {
        text: "+1 интеллект, -3 настроение, -1 энергия",
        type: "train-knowlidge",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 5,
    title: "Бегать за стрелами по полю (треб. пропуск на стрельбище)",
    description: "Или убегать от стрел",
    actions: [
      {
        text: "+1 ловкость, -2 настроение, -1 энергия",
        type: "train-agility",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 6,
    title: "Сыграть в азартные игры",
    description: "Должна же быть справедливость хоть где-то",
    actions: [
      {
        text: "-2 золота, проверка >= 6 +7 золота",
        type: "work-dice",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 7,
    title: "Зайти в библиотеку (треб. книга и пропуск в библиотеку)",
    description: "Найти заклинание в библиотеке или подработать",
    actions: [
      {
        text: "переворот, -4 золота, -1 энергии",
        type: "buy-revert",
      },
      {
        text: "+4 золота, -3 энергии",
        type: "work-library",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 8,
    title: "Исследовать подземелья",
    description: "Иначе Лорд заблудится",
    actions: [
      {
        text: "-Х энергии (Х - кол-во подготовки)",
        type: "check-dungeon",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 9,
    title: "Упросить Лорда поработать телохранителем",
    description: "Работать Лорду не гоже, но иногда можно",
    actions: [
      {
        text: "+5 золота, -3 настроение",
        type: "work-lord",
      },
    ],
    places: [null, null],
  },
  {
    id: 10,
    title: "Подготовка к приключению Лорда",
    description: "Шнурки, зеркальце... немного хлеба",
    actions: [
      {
        text: "-Х энергии (Х - кол-во подготовки)",
        type: "check-adventure",
      },
    ],
    places: [null, null, null],
  },
  {
    id: 11,
    title: "Пустить грязные слухи о чужом Лорде",
    description: "Его партки видали у кухарки, а та в его партки и не влезет",
    actions: [
      {
        text: "-1 славы, -4 настроения выбранному",
        type: "make-dirty",
      },
    ],
    places: [null],
  },
  {
    id: 12,
    title: "Спрятаться от Лорда хотя бы на полдня",
    description: "Какие полдня, хотя бы на полчаса",
    actions: [
      {
        text: "+6 энергии, -2 настроения",
        type: "hide-seek",
      },
    ],
    places: [null, null],
  },
  {
    id: 13,
    title: "Отправить Лорда отдахать в таверну и оплатить все",
    description: "Отдыхает он, а платишь ты... зато никто не кричит",
    actions: [
      {
        text: "+3 настроения, -5 золота",
        type: "recover-mood",
      },
    ],
    places: [null, null],
  },
  {
    id: 14,
    title: "Поработать в кузнице (треб. меч и пропуск на поле)",
    description:
      "Кузнец, помощник, повар, прачка... кем еще не приходился ты Лорду?",
    actions: [
      {
        text: "+/-2, -6 золота, -3 энергии",
        type: "get-plus2",
      },
      {
        text: "+/-1, -4 золота, -2 энергии",
        type: "get-plus1",
      },
      {
        text: "+5 золота, -4 энергии",
        type: "work-workshop",
      },
    ],
    places: [null, null],
  },
  {
    id: 15,
    title: "Академия лучников (треб. меч и пропуск на поле)",
    description:
      "Разыскиваются движущиеся мешени... объявление имеет спрос и никто не жалуется",
    actions: [
      {
        text: "переброс, -4 золота, -1 энергии",
        type: "get-reroll",
      },
      {
        text: "6 золота, -5 энергии",
        type: "work-archery",
      },
    ],
    places: [null, null, null],
  },
];
