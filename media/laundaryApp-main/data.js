let modules = [
  {
    mode: "Normally Soiled",
    time: 90,
    temp: 30,
    isTrue: false,
  },
  {
    mode: "Heavily Soiled",
    time: 120,
    temp: 27,
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

localStorage.setItem("slotdates", JSON.stringify(slotdates));

// let users = [
//   // {
//   //   name: "Adi",
//   //   number: 9650,
//   //   bookedSlot: "21 May, 8:00",
//   //   selectedModule: "Normally Soiled",
//   // },
// ];
let users = localStorage.getItem('users')
 ? JSON.parse(localStorage.getItem('users'))
 : [] ;

let currentUser = 
  {
    // username: "Deepak",
    // number: "9650",
    // bookedSlot: "21 May, 8:00",
    // selectedModule: "Normally Soiled",
  }
