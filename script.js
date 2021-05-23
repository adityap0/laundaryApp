let process = document.querySelector(".modulelist");
let login = document.querySelector(".login");
let form = document.querySelector("form");
let goback = document.querySelector("goback");

let userName, userNum, userModule, bookedSlot, bookedDate, bookedMonth;
let parentSlotIndex, slotIndex;

form.addEventListener("submit", handleForm);

let mainPage = document.querySelector(".main-page ");
function handleForm(event) {
  event.preventDefault();
  let name = event.target.elements.fname.value;
  let num = +event.target.elements.num.value;

  users.forEach((user) => {
    if (user.number == num && user.username == name) {
      mainPage.classList.add("display-off");
      login.classList.add("display-off");
      let confirmationPage = document.querySelector(".confirmpage");

      confirmationPage.classList.remove("display-off");
      confirmationPage.querySelector(
        "p"
      ).innerText = `Thankyou ${user.userName}, your slot has been confirmed @ ${user.bookedDate} ${user.bookedMonth} ${user.bookedSlot}`;
      return;
    } else {
      return;
    }
  });

  userName = name;
  userNum = num;
  document.querySelector("cite").innerText = `👨🏻 ${name}`;
  document.querySelector(".overlay").classList.add("display-off");
  mainPage.classList.remove("display-off");
}

let display = document.querySelector(".display");
let modeRoot = document.querySelector(".all-modes");

let submitWashingmode = document.querySelector(".submitmodule");

let i = 0;

function displayWashingModeUI() {
  modules.forEach((item, index) => {
    let li = document.createElement("li");
    li.classList.add(`pos${index + 1}`);
    let a = document.createElement("a");
    a.classList.add("button-controller");
    a.href = "#";
    a.innerText = item.mode;
    userModule = item.mode;
    a.id = index;
    a.addEventListener("click", handleFunctionality);
    li.append(a);
    modeRoot.append(li);
  });
  users.forEach((item) => {
    slotdates[item.parentIndex].slot[item.childIndex].isTrue = false;
  });
}

function handleFunctionality(event) {
  let index = event.target.id;

  document.querySelector(
    ".lcdisplay p"
  ).innerHTML = `<span class="degree">${modules[index].temp}°</span><br>
  <span class="mode">${modules[index].mode} </span> <br>
  <span class="Time">${modules[index].time}</span>`;
}

submitWashingmode.addEventListener("click", handleSubmit);

let overlay = document.querySelector(".overlay");
function handleSubmit(event) {
  if (event.target.innerText === "SUBMIT") {
    process.classList.add("display-off");
    createCalender();
    submitWashingmode.innerText = "Confirm";
  } else {
    currentUser.username = userName;
    currentUser.number = userNum;
    currentUser.bookedSlot = bookedSlot;
    currentUser.bookedDate = bookedDate;
    currentUser.selectedModule = userModule;
    currentUser.parentIndex = +parentSlotIndex;
    currentUser.childIndex = +slotIndex;

    slotdates[parentSlotIndex].slot[slotIndex].isTrue = false;

    users.push(currentUser);
    localStorage.setItem("users", JSON.stringify(users));

    overlay.classList.remove("display-off");

    mainPage.classList.add("display-off");
    login.classList.add("display-off");
    let confirmationPage = document.querySelector(".confirmpage");

    confirmationPage.classList.remove("display-off");
    confirmationPage.querySelector(
      "p"
    ).innerText = `Thankyou ${userName}, your slot has been confirmed @ ${bookedDate} ${bookedMonth} ${bookedSlot}`;
  }
  currentUSer = {};
}

let calenderoot = document.querySelector(".slotbuttons");

function createCalender() {
  calenderoot.innerHTML = "";
  slotdates.forEach((item, parentIndex) => {
    let ul = document.createElement("ul");
    ul.classList.add("align-center", "slot-ul");

    let h2 = document.createElement("h2");
    h2.innerText = `${item.date} ${item.month}`;
    h2.classList.add("h2-header");
    ul.append(h2);

    item.slot.forEach((slotime, index) => {
      let li = document.createElement("li");
      li.classList.add("slot-li");
      let button = document.createElement("button");
      button.innerText = slotime.time;

      button.classList.add("slot-btn", "slot-button");
      button.setAttribute("data-parentIndex", parentIndex);
      button.setAttribute("data-index", index);

      button.addEventListener("click", handleSlot);
      li.append(button);
      ul.append(li);
    });
    calenderoot.append(ul);
  });

  disableSelectedSlot();
}
let temp;
function handleSlot(event) {
  bookedSlot = event.target.innerText;
  bookedDate = slotdates[event.target.dataset.parentindex].date;
  bookedMonth = slotdates[event.target.dataset.parentindex].month;

  parentSlotIndex = event.target.dataset.parentindex;
  slotIndex = event.target.dataset.index;

  let allBtn = document.querySelectorAll(".slot-btn");
  allBtn.forEach((btn) => {
    btn.disabled = false;
  });
  disableSelectedSlot();
  event.target.disabled = true;
}

function disableSelectedSlot() {
  let allBtn = document.querySelectorAll(".slot-btn");
  allBtn.forEach((btn) => {
    if (
      slotdates[btn.dataset.parentindex].slot[btn.dataset.index].isTrue ===
      false
    ) {
      btn.disabled = true;
    }
  });
}

displayWashingModeUI();
