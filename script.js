// Login Code
let process = document.querySelector(".process");
let login = document.querySelector(".login");
let form = document.querySelector("form");

let userName, userNum, userModule, bookedSlot, bookedDate;
let parentSlotIndex, slotIndex ;

form.addEventListener("submit", handleForm);
function handleForm(event) {
  event.preventDefault();
  let name = event.target.elements.fname.value;
  userName = name;
  let num = +event.target.elements.num.value;
  userNum = num;
  // currentUser.username = name;
  // currentUser.number = num;
  login.classList.add("display-off");
  process.classList.remove("display-off");
}
// console.log(newUser);

// Functioning Code

let display = document.querySelector(".display");
let ul = document.querySelector("ul");
let calenderoot = document.querySelector(".calender ul");
let submitWashingmode = document.querySelector(".submitWashingmode");
// let timeArry = [40, 50, 60, 100];

let i = 0;

function displayWashingModeUI() {
  modules.forEach((item, index) => {
    console.log(item);
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = item.mode;
    // currentUser.mode = item.mode;
    userModule = item.mode;
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
  if(event.target.innerText === "Submit"){
    // console.log(event.target.innerText)
    createCalender();
    submitWashingmode.innerText = "Confirm";

  }else{
    console.log(event)
    
    currentUser.username = userName;
    currentUser.number = userNum;
    currentUser.bookedSlot = bookedSlot;
    currentUser.bookedDate = bookedDate;
    currentUser.selectedModule = userModule
    slotdates[parentSlotIndex].slot[slotIndex].isTrue = false;
    localStorage.setItem("slotdates", JSON.stringify(slotdates));

     users.push(currentUser);
     localStorage.setItem("users", JSON.stringify(users));
     currentUSer = {};
     alert("your slot has booked.")
  }
  
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
      //   clearDisabledSlot(button);
      let button = document.createElement("button");
      button.innerText = slotime.time;

      button.classList.add("slot-btn");
      button.setAttribute("data-parentIndex", parentIndex);
      button.setAttribute("data-index", index);
    
      //   button.disabled = true;
      //   clearDisabledSlot(button);
<<<<<<< HEAD
      if (slotime.isTrue === false) {
        // console.log(button);
        // console.dir(button.dataset.index);
        button.disabled = true;
        let slotIndex = button.dataset.index;
        let pindex = button.dataset.parentIndex;
        clearDisabledSlot(slotIndex, pindex, button);
        // let pindex = button.parentIndex;
        // clearDisabledSlot(button);
      }
      //   button.setAttribute("isTrue", false);
=======
      // if (slotime.isTrue === false) {
      //   button.disabled = true;
      // }
  
>>>>>>> e28df305afd66160333faad5e17a2a713eaaa6b3
      button.addEventListener("click", handleSlot);
      
      li.append(button);
    });
    ul.append(li);
    calenderoot.append(li);
  });

  disableSelectedSlot()
}

function handleSlot(event) {


 
  bookedSlot = event.target.innerText;
  bookedDate = event.target.parentNode.firstChild.innerText;
  
  parentSlotIndex = event.target.dataset.parentindex
  slotIndex =  event.target.dataset.index
  
  let allBtn = document.querySelectorAll(".slot-btn");
  allBtn.forEach(btn => {
    btn.disabled = false;
  })
  disableSelectedSlot();
  event.target.disabled = true;
  // createCalender()
}

function disableSelectedSlot() {
  let allBtn = document.querySelectorAll(".slot-btn");
  allBtn.forEach(btn => {
    if(slotdates[btn.dataset.parentindex].slot[btn.dataset.index].isTrue === false){
      btn.disabled = true
    }
  })
}
<<<<<<< HEAD
displayWashingModeUI();

function clearDisabledSlot(id, pid, btn) {
  slotdates.forEach((eachslot) => {
    eachslot.slot.forEach((slotime) => {
      btn.disabled = false;
    });
  });
}
=======

displayWashingModeUI();
>>>>>>> e28df305afd66160333faad5e17a2a713eaaa6b3
