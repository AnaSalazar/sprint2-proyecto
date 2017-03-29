function crearLista() {
  this.espacioListas = document.getElementById("espacioListas");
  this.crearTitulo = document.createElement("h2");
  this.tituloLista = document.getElementById("listaNueva").value;
  this.lista = function(){
    var entradaPendiente = document.createElement("INPUT");
    entradaPendiente.setAttribute("type", "text");//con esto le pongo los atributos que necesito
    entradaPendiente.setAttribute("placeholder", "Escribe tu pendiente");
    entradaPendiente.setAttribute("id", "entradaPendiente");
    espacioListas.appendChild(entradaPendiente);
  }
  this.boton = function() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "crearPendiente();");
    boton.setAttribute("id", "boton");
    var textoBoton = document.createTextNode("Crear pendiente");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
  }
  crearTitulo.innerText = tituloLista;
  espacioListas.appendChild(crearTitulo);
  document.getElementById("listaNueva").value = "";
  lista();//ambas funciones debo invocarlas aqui para que me cree
  boton();//lo necesario al mismo tiempo que se crea la lista
  crearPendiente();
}

function crearPendiente() {
  var lista = document.createElement("ul");
  var pendiente = document.createElement("li");
  var entradaPendiente = document.getElementById("entradaPendiente").value;
  var boton2 = entradaPendiente;
  //siguienteEntradaPendiente.id = Date.now();
  lista.appendChild(pendiente);
  pendiente.innerText = entradaPendiente;
  document.getElementById("entradaPendiente").value = "";
  espacioListas.appendChild(lista);

}
