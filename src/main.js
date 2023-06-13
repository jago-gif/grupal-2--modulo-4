import { Empresa } from "./empresa.js";
import { Importacion } from "./importacion.js"
import { Producto } from "./producto.js"
import { Importador } from "./importador.js";


const rubrosImportaciones = [
  "Maquinaria y equipos industriales",
  "Productos electrónicos y tecnológicos",
  "Automóviles y repuestos",
  "Productos químicos y farmacéuticos",
  "Textiles y prendas de vestir",
  "Alimentos y bebidas",
  "Productos de metal y acero",
  "Productos de plástico",
  "Materiales de construcción",
  "Combustibles y energía",
];

const tamanoImportadora = [
  "Grande",
  "Mediana",
  "Pequeña",
];

//creacion manual de productos
let producto = new Producto("papa", 1000, 1);
let producto2 = new Producto("peras", 2000, 10);
let nuevaEmpresa;//se tiene que borrar
//creacion de empresa
let empresas = [];//se tiene que borrar

let importadora = new Importador(
  "ImportadoraLinda",
  "11.111.111-1",
  "Maquinaria y equipos industriales",
  "Pequeña"
);
console.log(importadora)
let importadoras = [];
let importaciones = [];
importadoras.push(importadora)
let productos = [producto, producto2]
//creacion de importacion
let importacion = new Importacion(productos, importadora._id)
importaciones.push(importacion)
console.log(importacion)
let selectEmpresaDashBoard;
let total = 0;
let cantidad = 0;
let nombreEmpresa;

let tablaEmpresas = document.getElementById('tablaEmpresas');
//carga tabla de empresas
function cargarEmpresas() {
  let empresasCarga = importadoras;
  let contTablaEmpresa = "";
  for (let empresa of empresasCarga) {
    contTablaEmpresa += `
      <tr>
      <td>${empresa.getId}</td>
        <td>${empresa.getNombre()}</td>
        <td>${empresa.getRut()}</td>
      </tr>
    `;
  }
  tablaEmpresas.innerHTML = contTablaEmpresa
}


const tablaImportaciones = document.getElementById('tablaImportaciones');
//carga tabla de importaciones
function cargarImportaciones() {
  let contTablaImportaciones = '';
  for (let importacion of importaciones) {
    let precio = "";
    let nombre = "";
    let cantidad = "";
     nombreEmpresa = importadora.buscarPorId(importacion._idEmpresa);

    let cantidadDeProductos = importacion.getProductos();
//si tiene mas de un producto es array y itera los productos que tiene
    if (Array.isArray(cantidadDeProductos)) {
      for (let producto of importacion.getProductos()) {
        precio += "" + producto.getPrecio() + "<br>"
        nombre += "" + producto.getNombre() + "<br>"
        cantidad += "" + producto.getCantidad() + "<br>"
      }
      contTablaImportaciones += `
        <tr>
        <td>${importacion.getId()}</td>
          <td>${nombreEmpresa}</td>
          <td>${cantidad}</td>
          <td>${nombre}</td>
          <td>${precio}</td>
        </tr>
      `;
    }
    //si no es array solo carga la info del producto
    else {
      precio += "" + cantidadDeProductos.getPrecio() + "<br>"
      nombre += "" + cantidadDeProductos.getNombre() + "<br>"
      cantidad += "" + cantidadDeProductos.getCantidad() + "<br>"
      contTablaImportaciones+= `
        <tr>
        <td>${importacion.getId()}</td>
          <td>${nombreEmpresa}</td>
          <td>${cantidad}</td>
          <td>${nombre}</td>
          <td>${precio}</td>
        </tr>
      `;
    }
    tablaImportaciones.innerHTML= contTablaImportaciones
  }


}
//metodo para crear una empresa desde el modal 
document.getElementById("agregarEmpresa").addEventListener("click", function (event) {
  event.preventDefault();
  let nombreEmpresa = document.getElementById("nombre").value;
  let rutEmpresa = document.getElementById("rut").value;
  let rubroEmpresa = document.getElementById("rubroImportadora").value;
  let tamanoEmpresa = document.getElementById("tamanoImportadora").value;
  nuevaEmpresa = new Importador(nombreEmpresa, rutEmpresa,rubroEmpresa,tamanoEmpresa)
  importadoras.push(nuevaEmpresa);
  document.getElementById("formEmpresa").reset();
//recargar tabla
  cargarEmpresas();
  mostrarEmpresasSelect()
  //cerrar modal
  $('#modalEmpresa').modal('hide');

})
//crear importacion desde modal
document.getElementById("agregarImportacion").addEventListener("click", function (event) {
  event.preventDefault();

  let idEmpresa = parseInt(document.getElementById("idEmpresas").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let nombreProducto = document.getElementById("nombreProducto").value;
  let valorProducto = parseInt(document.getElementById("valorProducto").value);



  let nuevoProducto = new Producto(nombreProducto, valorProducto, cantidad);
  let nuevaImportacion = new Importacion(nuevoProducto, idEmpresa)

  importaciones.push(nuevaImportacion)
  document.getElementById("formImportacion").reset();
//recarga la tabla de importaciones
  cargarImportaciones();
//cierra model
  $('#modalImportaciones').modal('hide');
  //carga metodo para ver los totales
  cargartotales();
})


//abrir modal empresa
$('#abrirModalEmpresa').click(function () {
  $('#modalEmpresa').modal('show');
});
let selectEmpresa;
let selectTamano;
let selectRubro;
//abrir modal importaciones
$('#abrirModalImportaciones').click(function () {
  //carga las empresas al selector de modal
  cargarEmpresasEnSelect();
  $('#modalImportaciones').modal('show');
});
//genera los options de select empresas
function cargarEmpresasEnSelect() {
  selectEmpresa = document.getElementById("idEmpresas");
  selectEmpresa.innerHTML = '';
  for (let empresa of importadoras) {
    let option = document.createElement("option");
    option.value = empresa._id;
    option.text = empresa._nombre;
    selectEmpresa.add(option);
  }
}
//genera los options de select Tamaño importadora
function cargarTamanoEnSelect() {
  selectTamano = document.getElementById("tamanoImportadora");
  selectTamano.innerHTML = "";
  for (let tamano of tamanoImportadora) {
    let option = document.createElement("option");
    option.value = tamano;
    option.text = tamano;
    selectTamano.add(option);
  }
}
//genera los options de select rubro importadora

function cargarRubroEnSelect() {
  selectRubro = document.getElementById("rubroImportadora");
  selectRubro.innerHTML = "";
  for (let rubro of rubrosImportaciones) {
    let option = document.createElement("option");
    option.value = rubro;
    option.text = rubro;
    selectRubro.add(option);
  }
}
cargarTamanoEnSelect();
cargarRubroEnSelect();


const totalValor = document.getElementById("totalValor");
const totalImpFront = document.getElementById("totalImportaciones"); 
//genera el texto con los totales 
function cargartotales(){
  let contTV = "";
  let contTIF = "";
  contTV = `${importacion.totalImportaciones()}`;
  contTIF = `${importacion.calcularTotal()}`;
  totalValor.innerHTML = contTV;
  totalImpFront.innerHTML = contTIF;
}
function mostrarEmpresasSelect() {
  let i =-1;
  
  selectEmpresaDashBoard  = document.getElementById("dashBoard");
  selectEmpresaDashBoard.innerHTML = '';
 
  for ( i; i<importadoras.length; i++) {
    let option = document.createElement("option");
    
    if(i===-1){
      option.value = "";
      option.text = "Seleccione una empresa";
      selectEmpresaDashBoard.add(option);
    }else{
      option.value = importadoras[i]._id;
      option.text = importadoras[i]._nombre;
      selectEmpresaDashBoard.add(option);
    }

  }
}
document.getElementById("dashBoard").addEventListener("change", function (event) {
  //aprovechar evento para abrir modal
    let nombreModal = document.getElementById("nombreModal");
    let rutModal = document.getElementById("rutModal");
    let tamanoModal = document.getElementById("tamanoImportadoraModal");
    let rubroModal = document.getElementById("rubroImportadoraModal");


    //vamos a buscar la empresa 
      let idEmpSelec = document.getElementById("dashBoard").value;
  
  for (let empresa of importadoras){
    if(empresa._id == parseInt(idEmpSelec)){
      nombreModal.value = empresa._nombre;
      rutModal.value = empresa._rut;
      tamanoModal.innerHTML = "";
      rubroModal.innerHTML = "";

      let optionT = document.createElement("option");
      optionT.value = empresa._tamano;
      optionT.text = empresa._tamano;
      tamanoModal.add(optionT);
      let optionR = document.createElement("option");
      optionR.value = empresa._rubro;
      optionR.text = empresa._rubro;
      rubroModal.add(optionR);

    }
  }
    
    $("#modalDashBoard").modal("show");



  abrirDash()
});

function abrirDash(){
  let idEmpSelec = document.getElementById("dashBoard").value;
  if(idEmpSelec === ""){
    if (typeof myChart !== 'undefined') {
      myChart.destroy();
    }
    if (typeof myChart1 !== 'undefined') {
      myChart1.destroy();
    }
    return;
  }
  let importacionesByEmpresa = [];
  total = 0;
  cantidad = 0;
  for (let importacion of importaciones){
    if(importacion._idEmpresa == idEmpSelec){
      let poductoByEmp = new Producto(importacion.getProductos());
      importacionesByEmpresa.push(poductoByEmp);
    }
  }
  for ( let impoEmp of importacionesByEmpresa){
    cantidad++
    if(impoEmp._nombre.length > 1){

      for (let producto of impoEmp._nombre){
        total = (producto._precio*producto._cantidad) + total;
      }
    }else{
      total = (impoEmp._nombre._precio*impoEmp._nombre._cantidad) + total;
    }
  }
  for (let emp of empresas) {
    if(emp._id == idEmpSelec){
      nombreEmpresa = emp._nombre;
    }
  }
  activarDashTotalImportaciones();
  activarDashTotalValorImportaciones();
  //console.log("total",total, "cantidad", cantidad)
}
var ctx = document.getElementById('tortaTotalImp').getContext('2d');
var myChart; 
var ctx1 = document.getElementById('tortaTotalValorImp').getContext('2d');
var myChart1; 
function activarDashTotalImportaciones(){
  
  if (typeof myChart !== 'undefined') {
    myChart.destroy();
  }
  let totalEntorta1 = importacion.totalImportaciones()-cantidad;

var data = {
  labels: [nombreEmpresa, 'Otras Empresas'],
  datasets: [{
    data: [cantidad, totalEntorta1],
    label:'grafico de total de importaciones empresa',
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
    borderWidth: 1
  }]
};

var options = {
  responsive: true
};

 myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
}

function activarDashTotalValorImportaciones(){
  
  if (typeof myChart1 !== 'undefined') {
    myChart1.destroy();
  }
  let totalTorta2 = importacion.calcularTotal()-total;

var data1 = {
  labels: [nombreEmpresa, 'Otras Empresas'],
  datasets: [{
    label:'grafico de valor total de importaciones empresa',
    data: [total, totalTorta2],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
    borderWidth: 1
  }]
};

var options = {
  responsive: true
};

 myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: data1,
  options: options
});
}
mostrarEmpresasSelect()
cargarEmpresas();
cargarImportaciones();
cargartotales();



