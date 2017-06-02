function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function switched() {
  signup = document.querySelectorAll(".signup");
  logon = document.querySelectorAll(".logon");
  i = 0;
  while (i < signup.length) {
    signup[i].classList.toggle("display_n");
    i = i + 1;
  }
  i = 0;
  while (i < logon.length) {
    logon[i].classList.toggle("display_n");
    i = i + 1;
  }
}
function displayWatch() {
  document.querySelector(".watches").classList.remove("opo")
  document.querySelector(".sign_up").classList.add("display_n")
  document.querySelector(".compare").classList.add("opo")
}
function displayComp() {
  document.querySelector(".compare").classList.remove("opo")
  document.querySelector(".sign_up").classList.add("display_n")
  document.querySelector(".watches").classList.add("opo")
}
function displayStart() {
  document.querySelector(".sign_up").classList.remove("display_n")
  document.querySelector(".watches").classList.add("opo")
  document.querySelector(".compare").classList.add("opo")
}
function remErr() {
  document.querySelector(".error_msg").classList.add("display_n")
}
function compNow() {
  clockOne = document.querySelector(".input1").value;
  clockTwo = document.querySelector(".input2").value;
  clockOneName = document.querySelector(".name1");
  clockTwoName = document.querySelector(".name2");
  compCards = document.querySelectorAll(".compare_cards");
  compInput = document.querySelectorAll(".compare_inp");
  comp_i = 0
  if (clockOne == "" && clockTwo == "") {
  } else {
  if (clockOne == "The Minimal" && clockTwo == "The Casual") {
  while (comp_i < compCards.length) {
    compCards[comp_i].classList.toggle("display_n");
    comp_i += 1;
  }
  comp_i = 0
  while (comp_i < compInput.length) {
    compInput[comp_i].classList.toggle("display_n");
    comp_i += 1
  }
  clockOneName.innerHTML = clockOne;
  clockTwoName.innerHTML = clockTwo;
  document.querySelector(".clear_img").classList.toggle("display_n");
  document.querySelector(".compare_img").classList.toggle("display_n");
}
else {
  document.querySelector(".error_msg").classList.remove("display_n");
  errDiv = document.querySelector(".error_msg");
  error = "<h2>" + clockOne;
  error += " & " + clockTwo + "</h2>"
  errDiv.innerHTML += error;
}
}
}
