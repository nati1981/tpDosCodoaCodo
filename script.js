// on click 
// total a pagar. descuentos por tipo de estudiante

let entrada = 200;
let descuentoEstudiante = .20;
let descuentoTrainee = .50;
let descuentoJunior = .85;

const cantidadEntradas = document.getElementById("entradasIngresadas");

const categoria = document.getElementById ("categoriaSeleccionada");

const compra = document.getElementById("totalCompra");


function calculo () {
    
    if (categoria.value == "estudiante") {        
       let descuentoEntrada = ((entrada * descuentoEstudiante) * cantidadEntradas.value);
       compra.insertAdjacentHTML('beforeend' , descuentoEntrada);
                             
    } else if(categoria.value == "trainee") {
        descuentoEntrada = ((entrada * descuentoTrainee) * cantidadEntradas.value);
        compra.insertAdjacentHTML('beforeend' , descuentoEntrada);
       

    } else {
        descuentoEntrada = ((entrada * descuentoJunior) * cantidadEntradas.value);
        compra.insertAdjacentHTML('beforeend' , descuentoEntrada);          

    }

    

}



