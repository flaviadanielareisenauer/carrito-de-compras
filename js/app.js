const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");


cargarEventListeners();
function cargarEventListeners() {  
  listaCursos.addEventListener("click", agregarCurso);
}


function agregarCurso(event) {
  event.preventDefault(); 

  if (event.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = event.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}