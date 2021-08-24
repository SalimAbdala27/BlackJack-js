// const welcome = () => {
//   document.querySelector(".onload__Welcome").getElementsByClassName.display = "block";
// }
function load() {
  document.querySelector(".onload__Welcome").style.display = "block";
}
const startBtn = document.querySelector(".onload__Welcome-btn");

  startBtn.addEventListener("click", () => {
    document.querySelector(".onload__Welcome").style.display = "none";
  });