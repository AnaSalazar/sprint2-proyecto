function Lista() {
  this.espacioListas = document.getElementById("espacioListas");
  this.division = document.createElement("hr");
  this.crearTitulo = document.createElement("h2");
  this.tituloLista = document.getElementById("listaNueva").value;
  this.lista = function(){
    var entradaPendiente = document.createElement("INPUT");
    entradaPendiente.setAttribute("type", "text");//con esto le pongo los atributos que necesito
    entradaPendiente.setAttribute("placeholder", "Escribe tu pendiente");
    entradaPendiente.setAttribute("id", "entradaPendiente");
    espacioListas.appendChild(entradaPendiente);
  }
  this.botonCrear = function() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "Pendiente();");
    var textoBoton = document.createTextNode("Crear pendiente");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
  }
  this.botonBorrarLista = function() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "borrarLista();");
    var textoBoton = document.createTextNode("Borrar Lista");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
  }
  crearTitulo.innerText = tituloLista;
  espacioListas.appendChild(division);
  espacioListas.appendChild(crearTitulo);
  document.getElementById("listaNueva").value = "";
  lista();//ambas funciones debo invocarlas aqui para que me cree
  botonCrear();//lo necesario al mismo tiempo que se crea la lista
  botonBorrarLista();
}

function Pendiente() {
  this.lista = document.createElement("ul");
  this.pendiente = document.createElement("li");
  this.entradaPendiente = document.getElementById("entradaPendiente").value;
  this.botonBorrarPendiente = function() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "borrarPendiente();");
    var textoBoton = document.createTextNode("Borrar pendiente");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
  }
  lista.appendChild(pendiente);
  pendiente.innerText = entradaPendiente;
  document.getElementById("entradaPendiente").value = "";
  espacioListas.appendChild(lista);
  botonBorrarPendiente();
}
/*Averiguar:
  +por qué solo me sirve el primer input
*/
