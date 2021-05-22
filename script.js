// Login Code
let process = document.querySelector(".process");
let login = document.querySelector(".login");
let form = document.querySelector("form");

let userName, userNum, userModule, userSlot;
let pIndex, index ;

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
    
    
    currentUser.username = userName;
    currentUser.number = userNum;
    currentUser.bookedSlot = userSlot;
    currentUser.selectedModule = userModule
    slotdates[pIndex].slot[index].isTrue = false;

     users.push(currentUser);
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
}

let btnNow;
function handleSlot(event) {
  let allBtn = document.querySelectorAll(".slot-btn");
  allBtn.forEach(btn=>{
    btn.disabled = false
  })
  allBtn.forEach(btn=>{
  
    
  allBtn.forEach(btn=>{
    
  })

  currentUser.userSlot = event.target.innerText
  event.target.disabled = true;
  console.dir(event)
  
  pIndex = event.target.dataset.parentindex;
  index = event.target.dataset.index;
  // createCalender()




  //   console.dir(event.target.dataset);
  //   console.log(event.target.dataset.parentindex);


  // let selectedSlot =
  //   slotdates[event.target.dataset.parentindex].slot[
  //     event.target.dataset.index
  //   ];
  // selectedSlot.isTrue = false;


  // createCalender();

  //   selectedSlot = true;
 
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
