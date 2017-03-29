function Lista() {
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
    boton.setAttribute("onclick", "Pendiente();");
    boton.setAttribute("id", "botoncito");
    var textoBoton = document.createTextNode("Crear pendiente");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
  }
  crearTitulo.innerText = tituloLista;
  espacioListas.appendChild(crearTitulo);
  document.getElementById("listaNueva").value = "";
  lista();//ambas funciones debo invocarlas aqui para que me cree
  boton();//lo necesario al mismo tiempo que se crea la lista
}

function Pendiente() {
  this.lista = document.createElement("ul");
  this.pendiente = document.createElement("li");
  this.entradaPendiente = document.getElementById("entradaPendiente").value;
  this.nuevaEntrada = function() {
    entradaPendiente.id = Date.now();
  }

  lista.appendChild(pendiente);
  pendiente.innerText = entradaPendiente;
  document.getElementById("entradaPendiente").value = "";
  espacioListas.appendChild(lista);
}
/*Averiguar:
  +porque solo me sirve el primer input
  +agregar botones que borren
*/
