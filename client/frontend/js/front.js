//---Variables---//
let section = document.getElementById("section");
let secciones = document.querySelector('#section-productos')
let menu = document.querySelector(".nav-pills")

//---Variables---//

//---Funciones---//


const mostrarCategorias = ()=> {
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-categorias")
    .then((res) => res.json())
    .then(respuesta => {
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

let secciones =()=>{
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-productos")
  .then((res) => res.json())
  .then((respuesta) => {
    respuesta.forEach((categorias)=> {
      if (categorias.id_categoria === categorias.fk_categoria){
        fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/categoria-productos/"+respuesta.id_categoria)
        .then((res) => res.json())
        .then((respuesta) => {
          section.innerHTML=``
        })
        }
      })
    })
}

crearSectionCategoria =()=>{
  fetch("http://localhost/e-commerce-ferreyra/boilerplate_front_back_php/server/mostrar-categorias")
  .then(res => res.json())
  .then(respuesta=>{
    let main
    let categorias = respuesta.filter(function (categoria) {
    return categoria.id_categoria <= 3
     })
    //console.log(categorias)
    categorias.forEach(section=>{
     secciones.innerHTML += `<main id="${section.nombre}" class="container-fluid bg-secondary bg-gradient p-2 text-dark">
                                <h4 >${section.nombre}</h4>
                                <div class="album py-5 bg-light bg-secondary bg-gradient p-2 text-dark bg-opacity-75">
                                  <div class="container">
                                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="section">`
                                    
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

  secciones()
  
})
