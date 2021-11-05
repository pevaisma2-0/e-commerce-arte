//---Variables---//
let section = document.getElementById("section");
let secciones = document.querySelector('#section-productos')
let menu = document.querySelector(".nav-pills")

//---Variables---//
//---Funciones---//
const mostrarProductos = () => {
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-productos")
    .then((res) => res.json())
    .then((respuesta) => {
      console.log(respuesta)
      respuesta.forEach((producto) => {
        section.innerHTML += `<div class="col-md-3" id= "card">
                                            <div data-aos="zoom-out" class="card shadow-sm">
                                            <img
                                                src="../imagen/the-last-samurai-minimal-4k_1618126622.jpg" class="card-img-top"alt="..."/>
                                            </div>
                                        </div>`;
      });
    });
};
const mostrarCategorias = () => {
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-categorias")
    .then((res) => res.json())
    .then(respuesta => {
      console.log(respuesta)
      let menuCategoria = respuesta.filter(function (categoria) {
        return categoria.id_categoria <= 3
      })
      menuCategoria.forEach(categoria=>{
        menu.innerHTML += `<li class="nav-item">
                              <a class="nav-link" href="#${categoria.nombre}">${categoria.nombre}</a>
                            </li>`
      })
    })
}
crearSectionCategoria =()=>{
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-productos")
  .then(res => res.json())
  .then(respuesta=>{
    let main
    respuesta.forEach(section=>{
     secciones.innerHTML += `<main id="${section.categoria}" class="container-fluid bg-secondary bg-gradient p-2 text-dark">
                            <h4 >${section.categoria}</h4>
                            <div class="album py-5 bg-light bg-secondary bg-gradient p-2 text-dark bg-opacity-75">
                              <div class="container">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="section">`
                                  + mostrarProductos() +
                                `</div>
                              </div>
                            </div>
                          </main>`
    })
  })

}
//---Funciones---//
//---Eventos---//
document.addEventListener("DOMContentLoaded", ()=>{
  crearSectionCategoria()
  // mostrarProductos()
  mostrarCategorias()
  
} );
//---Eventos---//
