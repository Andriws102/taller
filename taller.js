function saludar(e, fun) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    
    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }else{
        alert("Hola buenas tardes " + nombre);
    }

}

let frutas = ["Manzana", "Pera", "Banano"];

const button = document.getElementById("buttonSaludar");

button.addEventListener("click", saludar);