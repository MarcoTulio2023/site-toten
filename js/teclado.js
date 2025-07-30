let inputAtivo = null;

function mostrarTeclado(input) {
  inputAtivo = input;
  document.getElementById("teclado").style.display = "block";
}

function inserirTecla(tecla) {
  if (!inputAtivo) return;
  if (tecla === '␡') {
    inputAtivo.value = inputAtivo.value.slice(0, -1);
  } else if (tecla === '↵') {
    inputAtivo.form?.submit?.(); // dispara submit se for dentro de um form
  } else {
    inputAtivo.value += tecla;
  }
}

const teclas = [
  '1','2','3','4','5','6','7','8','9','0',
  'Q','W','E','R','T','Y','U','I','O','P',
  'A','S','D','F','G','H','J','K','L',
  'Z','X','C','V','B','N','M',
  'Á','É','Í','Ó','Ú','Ã','Õ','Ç',
  '␡',' ','↵'
];

window.onload = () => {
  const teclado = document.getElementById("teclado");
  teclas.forEach(t => {
    const tecla = document.createElement("span");
    tecla.className = "tecla";
    tecla.innerText = t;
    tecla.onclick = () => inserirTecla(t === ' ' ? ' ' : t);
    teclado.appendChild(tecla);
  });
};