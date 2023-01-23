const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
const body = document.body;

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  let date = new Date().toLocaleDateString('pt-br').slice(0, -5);

  if(nlwSetup.dayExists(date)) {
    alert("Este dia já foi registrado.")
    return
  }
  nlwSetup.addDay(date);
}
function save() {
  localStorage.setItem("data", JSON.stringify(nlwSetup.data))
}

nlwSetup.setData(JSON.parse(localStorage.getItem("data"))) || {};
nlwSetup.load();