// ----Variables----//
let formAgregar = document.getElementById('agregarProductos');
let formCategoria = document.getElementById('agregarCategoria');
let inputs = formAgregar.querySelectorAll('input');
let inputCategoria = formCategoria.querySelector('input');
let textarea = formAgregar.querySelector('textarea').value;
let select = document.getElementById('selectAgregar');
let errorDiv = document.querySelector('.error');
let errorCategoria = document.querySelector('.errorCategoria');
var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('myInput')
var validacion = false;
// ----Variables----//
// -----------------//
// ----Funciones----//
const mostrarCategorias = ()=>{
    fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-categorias")
    .then(res=>res.json())
    .then (async categoria=>{
        console.log(categoria);
        for (let i = 0; i < categoria.length; i++) {
            const option = document.createElement('option');
            option.setAttribute("value", + categoria[i].id_categoria);
            option.innerText = categoria[i].nombre;
            select.appendChild(option);
        }
    });
}
const agregarProducto = (e)=>{
    for (let i = 0; i < inputs.length; i++) {
        validacion = false;
        if ((inputs[i].value == "")) {
                errorDiv.classList.add('alert');
                errorDiv.classList.add('alert-danger');
                errorDiv.innerHTML = "!!Completar los Campos¡¡";
                console.log(i);
        }
        else{
            validacion = true;
        }
    }
   if (validacion) {
       console.log("Estoy aca")
        let envio = new FormData(formAgregar);
        fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/agregar", {
            method: "POST",
            body: envio
        }).then(res =>res.json())
        .then(Response=>{
            errorDiv.classList.add('alert');
            errorDiv.classList.remove('alert-danger');
            errorDiv.classList.add('alert-success');
            errorDiv.innerHTML = Response;   
        });
        select = 0
        textarea.innerHTML = ""
        for (let i = 0; i < inputs.length; i++) {inputs[i].value = ""}
   }
}
const agregarCategoria = ()=>{
    validacion = false;
        if (inputCategoria.value == "") {
                errorCategoria.classList.add('alert');
                errorCategoria.classList.add('alert-danger');
                errorCategoria.innerHTML = "!!Completar los Campos¡¡";
        }
        else{
            validacion = true;
        }
        if (validacion) {
            let envioCategoria = new FormData(formCategoria);
            fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/agregar-categoria",
            {
                method: "POST",
                body: envioCategoria
            }).then(res=>res.json())
            .then(Response=>{
                errorCategoria.classList.add('alert');
                errorCategoria.classList.remove('alert-danger');
                errorCategoria.classList.add('alert-success');
                errorCategoria.innerHTML = Response;
                mostrarCategorias();
                inputCategoria.value = "";
            });
        }
}
// ----Funciones----//
// -----------------//
// ----Eventos----//
formAgregar.addEventListener('submit', (e)=>{
    e.preventDefault();
    agregarProducto();
});
myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
});
formCategoria.addEventListener('submit', (e)=>{
    e.preventDefault();
    agregarCategoria();
});
document.addEventListener('DOMContentLoaded', (e)=>{
    mostrarCategorias();
})
// ----Eventos----//
