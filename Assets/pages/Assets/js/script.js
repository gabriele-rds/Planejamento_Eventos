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