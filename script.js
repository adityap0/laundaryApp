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
  users.forEach((item)=>{
     slotdates[item.parentIndex].slot[item.childIndex].isTrue = false;
    //  console.log(typeof item.parentIndex, item.childIndex)
  })
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
    currentUser.parentIndex = +parentSlotIndex;
    currentUser.childIndex = +slotIndex;
    

    // slotdates[parentSlotIndex].slot[slotIndex].isTrue = false;

    // localStorage.setItem("slotdates", JSON.stringify(slotdates));

     users.push(currentUser);
     localStorage.setItem("users", JSON.stringify(users));

     console.log(currentUser.username,
      currentUser.number,
      currentUser.bookedSlot,
      currentUser.bookedDate,
      currentUser.selectedModule,
      currentUser.parentIndex,
      currentUser.childIndex)
  }
     currentUSer = {};

  
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

      button.classList.add("slot-btn");
      button.setAttribute("data-parentIndex", parentIndex);
      button.setAttribute("data-index", index);
    
      //   button.disabled = true;
      //   clearDisabledSlot(button);
      // if (slotime.isTrue === false) {
      //   button.disabled = true;
      // }
  
      button.addEventListener("click", handleSlot);
      
      li.append(button);
    });
    ul.append(li);
    calenderoot.append(li);
  });

  disableSelectedSlot()
}

function handleSlot(event) {

//  console.log(event.target.dataset.parentindex);
//  console.log(event.target.dataset.index)

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

displayWashingModeUI();