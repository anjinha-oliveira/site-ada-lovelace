document.getElementById("botao-enviar").addEventListener("click", validarFormulario)

function validarFormulario() {
  nome = document.getElementById("nome-da-usuaria").value
  email = document.getElementById("email-da-usuaria").value
  numero = document.getElementById("telefone-usuaria").value

  if(nome != "" && email != "" && numero != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  } else {
    alert("Por favor! Preencha os campos nome e email!")
  }
}
