const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  

  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let contador = 0
  let contadorChecked=0

  function addTodo() {
    alert('Boton Add TODO clickeado!')
    const tituloTarea = prompt('Que tarea quieres agregar?')
    if (tituloTarea != undefined){
        contador++
        itemCountSpan.innerHTML = contador
        
        var node = document.createElement("LI");
        var check = document.createElement("INPUT");
        var textnode = document.createTextNode(tituloTarea);

        check.setAttribute("type", "checkbox");
        check.className=classNames.TODO_CHECKBOX;
        check.id ="data";
        check.addEventListener( 'change', function() {
          if(this.checked) {
             //alert('checkbox esta seleccionado');
             contadorChecked++;
             uncheckedCountSpan.innerHTML=contadorChecked;
          }
          else{
            contadorChecked--;
            uncheckedCountSpan.innerHTML=contadorChecked;
          }

          node.appendChild(textnode);
          node.className=classNames.TODO_ITEM
          list.appendChild(node);
          node.appendChild(check)

      });
       

    }

  }