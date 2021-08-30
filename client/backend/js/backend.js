// ----Variables----//
let formAgregar = document.getElementById('agregarProductos');
let inputs = document.querySelectorAll('input');
let textarea = document.querySelector('textarea').value;
let select = document.getElementById('selectAgregar').value;
let errorDiv = document.querySelector('.error');
var validacion = false;
// ----Variables----//
// -----------------//
// ----Funciones----//
const agregarProducto = (e)=>{
    for (let i = 0; i < inputs.length; i++) {
        validacion = false;
        if ((inputs[i].value == "") &&(select == "0")) {
                errorDiv.classList.add('alert');
                errorDiv.classList.add('alert-danger');
                errorDiv.innerHTML = "!!Completar los Campos¡¡";
        }
        else{
            validacion = true;
        }
    }
   if (validacion) {
        let envio = new FormData(formAgregar);
        fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/producto", {
            method: "POST",
            body: envio
        }).then(res =>{res.text()})
        .then(respuesta=>{
            console.log(respuesta)
                errorDiv.classList.add('alert');
                errorDiv.classList.remove('alert-danger');
                errorDiv.classList.add('alert-success');
                errorDiv.innerHTML = "Se ha agregado el Producto Exitosamente";   
        });
        select = 0
        textarea.innerHTML = ""
        for (let i = 0; i < inputs.length; i++) {inputs[i].value = ""}
   }
}
// ----Funciones----//
// -----------------//
// ----Eventos----//
formAgregar.addEventListener('submit', (e)=>{
    e.preventDefault();
    agregarProducto();
});
// ----Eventos----//
