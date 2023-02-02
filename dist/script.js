var lsFilme = [];
var lsTrailer = [];

function adicionarFilme() {
  
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilme = document.getElementById('trailer').value;
  
  if (filmeFavorito.endsWith("jpg") || filmeFavorito.endsWith("jpe")) {
    
    lsFilme.push(filmeFavorito);
    lsTrailer.push(trailerFilme);
    
    var elementoListaFilmes = document.getElementById('listaFilmes');
    
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<a href=" + trailerFilme + " target='_blank'>" + "<img src=" + filmeFavorito + ">" + "</a>";
    }else {
      alert("Somente aceitamos endereços com .jpg ou .jpe!");
    }
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
  }