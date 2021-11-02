//---Variables---//
let section = document.getElementById('section');
//---Variables---//
//---Funciones---//
const mostrarProductos =()=>{
    fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-productos")
    .then(res=>res.json())
    .then(respuesta=>{
        respuesta.forEach(producto => {
            section.innerHTML += `<div class="col-md-3" id= "card">
                                            <div data-aos="zoom-out" class="card shadow-sm">
                                            <!--Imagen del producto-->
                                            <img
                                                src="../imagen/the-last-samurai-minimal-4k_1618126622.jpg" class="card-img-top"alt="..."/>
                                            </div>
                                        </div>`
        });
    })
}
//---Funciones---//
//---Eventos---//
document.addEventListener('DOMContentLoaded', mostrarProductos)
//---Eventos---//
