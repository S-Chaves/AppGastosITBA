const form = document.querySelector('form');
const gastos = document.querySelector('.gastos');
const totalDOM = document.querySelector('.total');
const aporteDOM = document.querySelector('.aporte');

let cantPer = 0;
let total = 0;

form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const gasto = parseInt(document.querySelector('#gasto').value);

  if (nombre.match(/^\s+$/g)) return;

  total += gasto;
  cantPer += 1;
  agregarDOM(nombre, gasto);

  form.reset();
});

function agregarDOM(nombre, gasto) {
  gastos.innerHTML += `
  <li class="list-group-item">${nombre}: $${gasto}</li>
  `;
  totalDOM.textContent = `${total}`;
  aporteDOM.textContent = `${(total / cantPer).toFixed(2)}`;
}