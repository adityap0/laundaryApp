// Login Code
let process = document.querySelector(".process");
let login = document.querySelector(".login");
let form = document.querySelector("form");
form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  let name = event.target.elements.fname.value;
  let num = +event.target.elements.num.value;
  newUser.push({ name: name, number: num });
  login.classList.add("display-off");
  process.classList.remove("display-off");
}
// console.log(newUser);

// Functioning Code

let display = document.querySelector(".display");
let ul = document.querySelector("ul");
let calenderoot = document.querySelector(".calender ul");
let submitWashingmode = document.querySelector(".submitWashingmode");
let timeArry = [40, 50, 60, 100];
let i = 0;

function displayWashingModeUI() {
  modules.forEach((item, index) => {
    console.log(item);
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = item.mode;
    a.id = index;
    a.addEventListener("click", handleFunctionality);
    li.append(a);
    ul.append(li);
  });
}

function handleFunctionality(event) {
  let index = event.target.id;
  display.innerText =
    modules[index].temp + " " + modules[index].mode + "" + modules[index].time;
}

submitWashingmode.addEventListener("click", handleSubmit);
function handleSubmit(event) {
  submitWashingmode.innerText = "Confirm";
  //   timeArry.push(modules[i].time);
  //   console.log(timeArry);
  createCalender();
}
// console.log(timeArry);
function createCalender() {
  calenderoot.innerHTML = "";
  slotdates.forEach((item, parentIndex) => {
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    li.append(h2);
    h2.innerText = item.date;
    item.slot.forEach((slotime, index) => {
      let button = document.createElement("button");
      button.innerText = slotime.time;
      button.setAttribute("data-parentIndex", parentIndex);
      button.setAttribute("data-index", index);
      //   button.disabled = true;
      //   clearDisabledSlot(button);
      if (slotime.isTrue === false) {
        button.disabled = true;
        clearDisabledSlot(button);
      }
      //   button.setAttribute("isTrue", false);
      button.addEventListener("click", handleSlot);
      li.append(button);
    });
    ul.append(li);
    calenderoot.append(li);
  });
}

function handleSlot(event) {
  //   console.dir(event.target.dataset);
  //   console.log(event.target.dataset.parentindex);
  let selectedSlot =
    slotdates[event.target.dataset.parentindex].slot[
      event.target.dataset.index
    ];
  selectedSlot.isTrue = false;
  createCalender();
  //   console.log(selectedSlot);
  //   selectedSlot = true;
  //   console.log(event.target);
  //   console.log(event.target.id);
  //   console.log(event.target.isTrue);
}
displayWashingModeUI();

// function clearDisabledSlot(btn) {
//   console.log(btn);
//   slotdates.forEach((eachslot) => {
//     eachslot.slot.forEach((slotime) => {
//       btn.disabled = true;
//     });
//   });
// }
