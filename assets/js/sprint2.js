var espacioListas = document.getElementById("espacioListas");

function Lista(id, titulo) {
  this.id = id
  this.titulo= titulo
}

function crearLista() {
  var id = Date.now();
  var titulo = document.getElementById("listaNueva");
  var lista = new Lista(id, titulo.value)

  mostrarLista(lista);
}

function mostrarLista() {
  var crearTitulo = document.createElement("h3");
  var division = document.createElement("hr");
  var titulo = document.getElementById("listaNueva").value;
  crearTitulo.innerText = titulo;
  espacioListas.appendChild(division);
  espacioListas.appendChild(crearTitulo);
  document.getElementById("listaNueva").value = "";
  crearPendiente();
}//ya funcionan las 3 funciones de arriba

function Pendiente( id, lista, pendiente, entradaPendiente) {
  this.id = id
  this.listaPendientes = lista
  this.pendiente = pendiente
  this.entradaPendiente = entradaPendiente
}

function crearPendiente() {
  var id = Date.now();
  mostrarPendiente();
}

function mostrarPendiente(pendiente) {
  var idGeneral = Date.now();
  var entradaPendiente = document.createElement("INPUT");
  entradaPendiente.setAttribute("type", "text");//con esto le pongo los atributos que necesito
  entradaPendiente.setAttribute("placeholder", "Escribe tu pendiente");
  entradaPendiente.id = idGeneral;
  espacioListas.appendChild(entradaPendiente);
  botonCrearPendiente();
}

function botonCrearPendiente() {
  var entradaPendiente = document.getElementById(idGeneral);
  var listaPendientes = document.createElement("ul");
  var elementoPendiente = document.createElement("li");
  var boton = document.createElement("BUTTON");
  boton.setAttribute("type", "button");
  boton.setAttribute("onclick", "Pendiente();");
  var textoBoton = document.createTextNode("Crear pendiente");
  boton.appendChild(textoBoton);
  espacioListas.appendChild(boton);

  listaPendientes.appendChild(elementoPendiente);
  elementoPendiente.innerText = entradaPendiente;
  //document.getElementById("entradaPendiente").value = "";
  espacioListas.appendChild(listaPendientes);
  //botonBorrarPendiente();
}

function botonBorrarPendiente() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "borrarPendiente();");
    var textoBoton = document.createTextNode("Borrar pendiente");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
}

function botonBorrarLista() {
    var boton = document.createElement("BUTTON");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "borrarLista();");
    var textoBoton = document.createTextNode("Borrar Lista");
    boton.appendChild(textoBoton);
    espacioListas.appendChild(boton);
}

//botonCrear();//lo necesario al mismo tiempo que se crea la lista
//botonBorrarLista();
