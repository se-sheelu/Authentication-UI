let detlog = document.querySelector(".dtsignin");
let detreg = document.querySelector(".dtsignup");
let linklog = document.querySelector("#lnk_log");
let linkreg = document.querySelector("#lnk_reg");
function callsign() {
  detlog.classList.toggle("callreg");
  detreg.classList.toggle("setreg");
}
linklog.addEventListener("click", callsign);
linkreg.addEventListener("click", callsign);
function resetLogForm() {
  document.getElementById("login").reset();
  event.preventDefault();
}
function resetRegForm() {
  document.getElementById("register").reset();
  event.preventDefault();
}