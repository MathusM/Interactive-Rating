var selectedButton = null;
var ButtonValue;

function ButtonSelection(buttonNumber) {
  if (selectedButton) {
    selectedButton.style.backgroundColor = ''; // Limpar estilo de fundo laranja do botão anteriormente selecionado e a fonte
    selectedButton.style.color = '';
  }
  
  var clickedButton = document.getElementById('button' + buttonNumber);
  clickedButton.style.backgroundColor = 'orange'; // Definir estilo de fundo laranja para o botão clicado e a cor da fonte
  clickedButton.style.color = 'white';
  
  selectedButton = clickedButton; // Armazenar referência ao botão selecionado

  ButtonValue = buttonNumber;
  console.log(ButtonValue)
}



function ConclusionSubmit () {
    if (!ButtonValue) {
      alert ('Selecione uma classificação de 1 a 5')
      return;
    }

    var mainSection = document.getElementById('mainz');
    mainSection.style.display = 'none';

    var thanksSection = document.getElementById('maintz');
    thanksSection.style.display = '';

    var buttonValueSpan = document.getElementById('resultclass');
    buttonValueSpan.textContent = ButtonValue;
}

