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
function compNow() {
  compCards = document.querySelector(".compare_cards").classList.remove("display_n")
  
}
