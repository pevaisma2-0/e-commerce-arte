// ----Variables----//
//seccion de alta de productosy agregar categorias//
let formAgregar = document.getElementById('agregarProductos');
let formCategoria = document.getElementById('agregarCategoria');
let inputs = formAgregar.querySelectorAll('input');
let inputCategoria = formCategoria.querySelector('input');
let textarea = formAgregar.querySelector('textarea').value;
let select = document.getElementById('selectAgregar');
let errorDiv = document.querySelector('.error');
let errorCategoria = document.querySelector('.errorCategoria');
//seccion de alta de productos y agregar categorias//
//Listado de Productos//
let tbody = document.getElementById('items')
let listaProductos = document.getElementById('lista-productos').content
let modalMensajes = document.getElementById('mensajes').content
//Listado de Productos//
//modal para agregar//
var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('myInput')
//modal para agregar//
var validacion = false;
//Fragmentos//
let frangmento = document.createDocumentFragment()
let mensajesModal = document.createDocumentFragment()
//Fragmentos//
// ----Variables----//
// -----------------//
// ----Funciones----//
const mostrarProductos =()=>{
    fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/productos")
    .then(res=>res.json())
    .then(respuesta=>{
        let clone
        if (respuesta.length != 0) {
                respuesta.forEach(producto=>{
                    listaProductos.querySelector('tr th').textContent = producto.id_producto
                    listaProductos.querySelectorAll('tr td')[0].textContent = producto.titulo
                    listaProductos.querySelectorAll('tr td')[1].textContent = producto.precio
                    listaProductos.querySelectorAll('tr td')[2].textContent = producto.descripcion
                    listaProductos.querySelectorAll('tr td')[3].textContent = producto.categoria
                    listaProductos.querySelector('tr td .btn-info').setAttribute("data-id", producto.id_producto)
                    listaProductos.querySelector('tr td .btn-danger').setAttribute("data-id", producto.id_producto)
                    listaProductos.querySelector('tr td .btn-danger').setAttribute("onclick", "eliminarProducto()")
                    clone = listaProductos.cloneNode(true)
                    frangmento.appendChild(clone)
                })
        }
        else{
            listaProductos.querySelector('tr th').textContent = "No se han cargado productos aun"
            clone = listaProductos.cloneNode(true)
            frangmento.appendChild(clone)
        }
        tbody.appendChild(frangmento)
    })
}
const mostrarCategorias = ()=>{
    fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-categorias")
    .then(res=>res.json())
    .then (async categoria=>{
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
const eliminarProducto =()=>{
    Swal.fire({
        title: '¿Desea Eliminar este producto?',
        text: "No podra volver a recuperarlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Acepto'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
              title:'Se elimino el producto con exito',
              icon: 'success'
          })
          fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/productos")
          .then(res=>res.json())
          .then(respuesta=>{
              console.log(respuesta)
          })
        }
      })
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
    mostrarProductos()
    mostrarCategorias()
})
// ----Eventos----//