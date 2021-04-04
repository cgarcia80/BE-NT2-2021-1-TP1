const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

let contador = 0;
let contadorChecked = 0;

function addTodo() {
  //alert('Boton Add TODO clickeado!')
  const tituloTarea = prompt("Qué tarea quieres agregar?");
  tituloTarea.className = classNames.TODO_TEXT;

  if (tituloTarea != "") {
    if (tituloTarea!= undefined) {

      var check = document.createElement("INPUT");
      var node = document.createElement("LI");
      var textnode = document.createTextNode(tituloTarea);

      mostrarTarea(check, node, textnode, list);
      contarTareasAgregadas();
      contarUnchecked(check);

    }
  }
}

function mostrarTarea(check, node,textnode,list){    
  //AGREGAMOS ESTILOS A LOS ELEMENTOS
  check.setAttribute("type", "checkbox");
  check.className = classNames.TODO_CHECKBOX;
  node.className = classNames.TODO_ITEM;
  list.appendChild(node);
  node.appendChild(check);
  node.appendChild(textnode); //INSERTA EN EL DOM   
}

function contarTareasAgregadas(){
  contador++;
  itemCountSpan.innerHTML = contador;
}

function contarUnchecked(check){
  contadorChecked++;
  uncheckedCountSpan.innerHTML = contadorChecked;
  
  check.addEventListener("change", function () {
    if (this.checked) {
      //alert('checkbox esta seleccionado');
      contadorChecked--;
      uncheckedCountSpan.innerHTML = contadorChecked;
    } else {
      contadorChecked++;
      uncheckedCountSpan.innerHTML = contadorChecked;
  }})
}