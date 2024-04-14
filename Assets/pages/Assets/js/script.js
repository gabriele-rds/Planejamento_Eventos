// Função para calcular o total do orçamento
function calcularTotal() {
  let total = 0;

  // Adiciona o valor de cada serviço selecionado ao total
  if (document.getElementById('fotografia').checked) {
    total += parseInt(document.getElementById('fotografia').value);
  }
  if (document.getElementById('dj').checked) {
    total += parseInt(document.getElementById('dj').value);
  }
  if (document.getElementById('decoracao').checked) {
    total += parseInt(document.getElementById('decoracao').value);
  }
  if (document.getElementById('flores').checked) {
    total += parseInt(document.getElementById('flores').value);
  }
  if (document.getElementById('aluguelLocal').checked) {
    total += parseInt(document.getElementById('aluguelLocal').value);
  }
  if (document.getElementById('convite').checked) {
    total += parseInt(document.getElementById('convite').value);
  }
  if (document.getElementById('buffet').checked) {
    total += parseInt(document.getElementById('buffet').value);
  }

  // Exibe o total na página
  document.getElementById('total').textContent = total;
}

// Adiciona um listener de mudança para calcular o total sempre que uma seleção for alterada
document.querySelectorAll('input[type="checkbox"]').forEach(input => {
  input.addEventListener('change', calcularTotal);
});


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': true
  });
  function fecharLightbox() {
    // Fecha o Lightbox
    lightbox.close();
  }