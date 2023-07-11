window.onload = function() {
    var loginHeight = document.querySelector('.login').offsetHeight;
    document.querySelector('.imagem').style.height = loginHeight + 'px';
  };
  window.onresize = function() {
    var loginHeight = document.querySelector('.login').offsetHeight;
    document.querySelector('.imagem').style.height = loginHeight + 'px';
  };

  document.getElementById("botao").addEventListener("click", function(event) {
    event.preventDefault(); // Isso impede que o formulário seja submetido antes que você possa verificar os campos
    let usuario = document.getElementById("usuario").value;
    let  email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    if (usuario && email && senha) {
      window.location.href = "http://127.0.0.1:5500/home.html";
    } else {
      alert("Por favor, preencha todos os campos antes de entrar.");
    }
});

  