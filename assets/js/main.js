function crearLista() {
  this.espacioListas = document.getElementById("espacioListas");
  this.crearTitulo = document.createElement("h2");
  this.tituloLista = document.getElementById("listaNueva").value;
  this.lista = function(){
    var pendiente = document.createElement("INPUT");
    pendiente.setAttribute("type", "text");
    pendiente.setAttribute("placeholder", "Escribe tu pendiente");
    espacioListas.appendChild(pendiente);
  }


  crearTitulo.innerText = tituloLista;
  espacioListas.appendChild(crearTitulo);
  lista();
}
