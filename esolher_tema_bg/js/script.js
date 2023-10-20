$(document).ready(function() {
    $("#salvarPreferencia").click(function() {
      salvarPreferencia();
    });
  
    $("#restaurarPreferencia").click(function() {
      restaurarPreferencia();
    });
  
    function salvarPreferencia() {
      //variável temaSelecionado armazena o valor selecionado no elemento 
      //com o id "tema". $(#tema")eh uma selecao de elemento jQuery 
      //que representa o elemento de selecao (um menu suspenso).
      //val()é um método jQuery que obtém o valor selecionado nesse elemento  
      let temaSelecionado = $("#tema").val();
      //setItem("tema", temaSelecionado) é um método do objeto 
      //localStorage. Este método é usado para definir um item no 
      //armazenamento local (localStorage) com um nome (chave) 
      //e um valor.
      localStorage.setItem("tema", temaSelecionado);
      atualizarTema();
    }
  
    function restaurarPreferencia() {
       // variável usada para armazenar o valor do tema que foi 
       //anteriormente salvo no localStorage. O
       // método getItem("tema") é usado para recuperar o valor 
       //associado à chave "tema" no localStorage. 
       //Isso significa que temaSalvo conterá o valor do 
       //tema que foi anteriormente selecionado e armazenado.
        let temaSalvo = localStorage.getItem("tema");
      if (temaSalvo) {
        $("#tema").val(temaSalvo);
        atualizarTema();
      }
    }
  
    //Atualiza dinamicamente o tema da página com base na 
    //preferência de tema selecionada pelo usuário. Ele modifica 
    //as classes do elemento body para aplicar o tema 
    //correspondente e exibe o tema atual no elemento com o 
    //id "temaAtual"
    function atualizarTema() {
        let temaSelecionado = $("#tema").val();
        // adiciona a classe temaSelecionado ao elemento body usando .addClass(temaSelecionado)
      $("body").removeClass("light dark").addClass(temaSelecionado);
      $("#temaAtual").text(temaSelecionado);
    }
  
    // Restaura a preferência de tema ao carregar a página
    restaurarPreferencia();
  });