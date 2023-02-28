
                /* Script para referencias*/

function abreForm(nombre1) {
    document.getElementById("miForm").style.display = "block";
    document.getElementById("nombre-referencia").innerHTML=nombre1;
  }
  
  function cierraForm() {
    document.getElementById("miForm").style.display = "none";
  }

  function confirmaEnvio(){
    alert("Se envio correctamente, en breve sera contactado")
  }

                /* script para trabajos realizados     */


    filtraSeleccion("todo") //inicia llamando a funcion mostrando todo
    function filtraSeleccion(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "todo") c = "";
    
    //agrega show a seleccionados y saca a los no

    for (i = 0; i < x.length; i++) {
        remueveClase(x[i], "show");
        if (x[i].className.indexOf(c) > -1) agregaClase(x[i], "show");
    }
    }

    //     Muestra filtrados 
    function agregaClase(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
    }

    // Oculta no seleccionados
    function remueveClase(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
    }

    // Resalta seleccionado
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }                


    



