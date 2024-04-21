function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function clearLast() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function calculate() {
    try {
      var result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  // Adicionei um listener de evento para o botão de alternância de modo
document.getElementById('mode-toggle').addEventListener('click', toggleMode);

// Função para alternar entre modo claro e escuro
function toggleMode() {
  var body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    document.getElementById('mode-toggle').innerHTML = '<i class="material-icons">brightness_4</i>';
  } else {
    body.classList.add('dark-mode');
    document.getElementById('mode-toggle').innerHTML = '<i class="material-icons">brightness_7</i>';
  }
}
