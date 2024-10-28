function encryptText() {
  let inputText = document.getElementById('inputText').value;
  let encryptedText = inputText
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
  let inputText = document.getElementById('inputText').value;
  let decryptedText = inputText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  document.getElementById('outputText').value = decryptedText;
}

function copyText() {
  let outputText = document.getElementById('outputText');
  // Usa a nova API de Clipboard se disponível
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(outputText.value)
      .then(() => {
        alert('Texto copiado com sucesso!');
      })
      .catch((err) => {
        console.error('Falha ao copiar o texto: ', err);
      });
  } else {
    // Alternativa para navegadores mais antigos
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado com sucesso!');
  }
}

function clearText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
}
