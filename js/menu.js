// Função chamada ao clicar no botão "Clique aqui para interagir"
function abrirMenu() {
  // Redireciona da index.html para o menu
  window.location.href = "html/menu.html";
}

// Abre o iframe com o site desejado
function abrirIframe(url) {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('iframe-container').style.display = 'block';
  document.getElementById('iframe-site').src = url;
  document.getElementById('btn-voltar').style.display = 'block'; // Mostra o botão de voltar
}

function voltarMenu() {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('iframe-site');
  const menu = document.getElementById('menu');
  const btnVoltar = document.getElementById('btn-voltar');

  if (iframeContainer && iframeContainer.style.display === 'block') {
    // Está visualizando um iframe → volta para o menu
    iframe.src = "";
    iframeContainer.style.display = 'none';
    menu.style.display = 'block';
    btnVoltar.style.display = 'none';
  } else {
    // Está no menu → volta para a página principal
    window.location.href = "../index.html";
  }
}

function enviarTeste() {
  const valor = document.getElementById('input-teste').value;
  if (valor.trim() === "") {
    alert("Digite algo para testar.");
    return;
  }
  console.log("Valor digitado:", valor);
  alert("Você digitou: " + valor);
}


