let modules = [
  {
    mode: "Normally Soiled",
    time: "1 hours 50 mins",
    temp: 30,
    isTrue: false,
  },
  {
    mode: "Heavily Soiled",
    time: "2 hours 0 min",
    temp: 27,
    isTrue: false,
  },
  {
    mode: "Express 15°",
    time: "1 hours 50 mins",
    temp: 30,
    isTrue: false,
  },
  {
    mode: "Cradle Wash",
    time: "2 hours 0 min",
    temp: 27,
    isTrue: false,
  },
  {
    mode: "Wool",
    time: "1 hours 50 mins",
    temp: 30,
    isTrue: false,
  },
  {
    mode: "Demo / Drain",
    time: "2 hours 0 min",
    temp: 27,
    isTrue: false,
  },
  {
    mode: "Spin Dry",
    time: "1 hours 50 mins",
    temp: 30,
    isTrue: false,
  },
  {
    mode: "Lingerie",
    time: "2 hours 0 min",
    temp: 27,
    isTrue: false,
  },
  {
    mode: "Demo / Drain",
    time: "1 hours 50 mins",
    temp: 30,
    isTrue: false,
  },
];

let slotdates = [
  {
    date: new Date().getDate(),
    month: new Date().toLocaleString("default", { month: "long" }),
    slot: [
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
      { time: "12:00", isTrue: true },
      { time: "2:00", isTrue: true },
      { time: "4:00", isTrue: true },
      { time: "6:00", isTrue: true },
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
    ],
  },
  {
    date: +new Date().getDate() + 1,
    month: new Date().toLocaleString("default", { month: "long" }),
    slot: [
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
      { time: "12:00", isTrue: true },
      { time: "2:00", isTrue: true },
      { time: "4:00", isTrue: true },
      { time: "6:00", isTrue: true },
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
    ],
  },
  {
    date: +new Date().getDate() + 2,
    month: new Date().toLocaleString("default", { month: "long" }),
    slot: [
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
      { time: "12:00", isTrue: true },
      { time: "2:00", isTrue: true },
      { time: "4:00", isTrue: true },
      { time: "6:00", isTrue: true },
      { time: "8:00", isTrue: true },
      { time: "10:00", isTrue: true },
    ],
  },
];

// slotdates = localStorage.setItem("slotdates", JSON.stringify(slotdates));

// let users = [
//   // {
//   //   name: "Adi",
//   //   number: 9650,
//   //   bookedSlot: "21 May, 8:00",
//   //   selectedModule: "Normally Soiled",
//   // },
// ];
let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

let currentUser = {
  // username: "Deepak",
  // number: "9650",
  // bookedSlot: "21 May, 8:00",
  // selectedModule: "Normally Soiled",
};
