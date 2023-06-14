(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,n(r.key),r)}}function o(e,t,o){return(t=n(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(t){var o=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(o)?o:String(o)}var r=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=e.contador++,this._nombre=t,this._rut=o,e.empresas.push(this)}var o,n;return o=e,(n=[{key:"setId",set:function(e){this._id=e}},{key:"getId",get:function(){return this._id}},{key:"setNombre",set:function(e){this._nombre=e}},{key:"getNombre",value:function(){return this._nombre}},{key:"setRut",set:function(e){this._rut=e}},{key:"getRut",value:function(){return this._rut}},{key:"generarArray",value:function(){return e.empresas}},{key:"buscarPorId",value:function(t){for(var o=0;o<e.empresas.length;o++)if(e.empresas[o]._id===t)return e.empresas[o]._nombre}}])&&t(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function c(e,t,o){return(t=u(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}o(r,"contador",0),o(r,"empresas",[]);var s=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=e.contador++,this._productos=t||[],this._idEmpresa=o,e.totalProductos.push(this._productos)}var t,o;return t=e,o=[{key:"setId",set:function(e){this._id=e}},{key:"getId",value:function(){return this._id}},{key:"setIdEmpresa",set:function(e){this._idEmpresa=e}},{key:"getIdEmpresa",get:function(){return this._idEmpresa}},{key:"setProductos",set:function(e){this._productos.push(e)}},{key:"getProductos",value:function(){return this._productos}},{key:"totalImportaciones",value:function(){return e.contador}},{key:"calcularTotal",value:function(){for(var t=0,o=0;o<e.totalProductos.length;o++)if(Array.isArray(e.totalProductos[o]))for(var n=0;n<e.totalProductos[o].length;n++)t+=e.totalProductos[o][n]._precio*e.totalProductos[o][n]._cantidad;else t+=e.totalProductos[o]._precio*e.totalProductos[o]._cantidad;return t}}],o&&i(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}c(s,"contador",0),c(s,"totalProductos",[]);var f,p,y=function(){function e(t,o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=e.contador++,this._nombre=t,this._precio=o,this._cantidad=n}var t,o;return t=e,o=[{key:"setId",set:function(e){this._id=e}},{key:"getId",value:function(){return this._id}},{key:"setNombre",set:function(e){this._nombre=e}},{key:"getNombre",value:function(){return this._nombre}},{key:"setPrecio",set:function(e){this._precio=e}},{key:"getPrecio",value:function(){return this._precio}},{key:"setCantidad",set:function(e){this._cantidad=e}},{key:"getCantidad",value:function(){return this._cantidad}}],o&&d(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}f=y,(p=m(p="contador"))in f?Object.defineProperty(f,p,{value:0,enumerable:!0,configurable:!0,writable:!0}):f[p]=0;var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,o,n,r,a=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(r){var o=w(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function i(e,t,o,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=a.call(this,e,t))._rubro=o,r._tamano=n,r}return t=i,(o=[{key:"rubro",get:function(){return this._rubro},set:function(e){this._rubro=e}},{key:"tamano",get:function(){return this._tamano},set:function(e){this._tamano=e}}])&&v(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(r);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function I(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function P(e,t,o){return(t=S(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function S(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===E(t)?t:String(t)}var k=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=e.contador++,this._mercancia=t,this._organizmo=o,e.prohibiciones.push(this)}var t,o;return t=e,o=[{key:"id",get:function(){return this._id},set:function(e){this._id=e}},{key:"mercancia",get:function(){return this._mercancia},set:function(e){this._mercancia=e}},{key:"organizmo",get:function(){return this._organizmo},set:function(e){this._organizmo=e}},{key:"getById",value:function(t){for(var o=0;o<e.prohibiciones.length;o++)if(e.prohibiciones[o]._id==t)return e.prohibiciones[o]._organizmo}},{key:"getArray",value:function(){return e.prohibiciones}}],o&&I(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return j(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?j(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}P(k,"contador",0),P(k,"prohibiciones",[]);var T=["Maquinaria y equipos industriales","Productos electrónicos y tecnológicos","Automóviles y repuestos","Productos químicos y farmacéuticos","Textiles y prendas de vestir","Alimentos y bebidas","Productos de metal y acero","Productos de plástico","Materiales de construcción","Combustibles y energía"],C=["Grande","Mediana","Pequeña"],O=new k("Armas de fuego, municiones, explosivos y sustancias químicas, inflamables y asfixiantes","Dirección General de Movilización Nacional ( www.dgmn.cl )"),M=(new k("Material escrito o audiovisual relativo a las artes marciales destinado a la enseñanza, sin limitación alguna, cualquiera que sea la persona, establecimiento o entidad que efectúe la operación.\t","Dirección General de Movilización Nacional ( www.dgmn.cl )"),new k("Alcoholes, bebidas alcohólicas y vinagres\t\t","Servicio Agrícola y Ganadero ( www.sag.gob.cl )"),new k("Productos vegetales y mercancías que tengan el carácter de peligrosas para los vegetales.\t\t","Servicio Agrícola y Ganadero ( www.sag.gob.cl )"),new k("Animales, productos, subproductos y despojos de origen animal o vegetal.\t","Servicio Agrícola y Ganadero ( www.sag.gob.cl )"),new k("Fertilizantes y pesticidas","Servicio Agrícola y Ganadero ( www.sag.gob.cl )"),new k("Productos o subproductos alimenticios de origen animal o vegetal.\t","Servicio Agrícola y Ganadero ( www.sag.gob.cl )"),new k("Productos alimenticios de cualquier tipo\t","SEREMI de Salud www.minsal.cl"),new k("Productos farmacéuticos o alimenticios de uso médico y/o cosmético","Instituto Salud Pública de Chile www.ispch.cl"),new k("Estupefacientes y sustancias psicotrópicas que causen dependencia.\t","Instituto Salud Pública de Chile www.ispch.cl Seremi de Salud  www.minsal.cl"),new k("\tSustancias tóxicas o peligrosas para la salud. ","Seremi de Salud   www.minsal.cl"),new k(" Elementos o materiales fértiles, fisionables o radioactivos, sustancias radioactivas, equipos o instrumentos que generan radiaciones ionizantes\t"," Comisión Chilena de Energía Nuclear ( www.cchen.cl ) "),new k("Recursos hidrobiológicos, cualquiera sea su estado de desarrollo, incluidas las especies de carácter ornamental\t\t","Subsecretaría de Pesca ( www.subpesca.cl )"),new k("Productos pesqueros\t","Subsecretaría de Pesca ( www.subpesca.cl )"),new k("\tEquipos de radiocomunicaciones. Requieren autorización previa de uso de banda de transmisión","Subsecretaría de Telecomunicaciones ( www.subtel.cl )"),new k("Restos humanos o cenizas de incineración de los mismos\t","Ministerio de Salud, Hospital San Juan de Dios"),new k("Desperdicios y desechos de pilas, baterías y acumuladores; desechos de cinc, de plomo, de antimonio, berilio, cadmio, cromo, de productos farmacéuticos, de disolventes orgánicos.\t","Ministerio de Salud ( www.minsal.cl )"),new k("Especies de fauna y flora silvestres protegidas por el Convenio CITES\t","Autoridad definida de acuerdo al artículo IX de la Convención ( www.cites.org )"),new k("La importación de cementos susceptibles de ser empleados en la confección de elementos de resistencia de obras públicas y edificios.\t","Previo a su desaduanamiento deben presentar Certificado de Calidad, emitido por un Laboratorio de Control Técnico de Calidad de Construcción, inscrito en el Registro oficial de Laboratorios de Control Técnico de Calidad de Construcción del Ministerio de Vivienda y Urbanismo."),new k("Otra"," "),O.getArray());console.log(M);var A,L=new y("papa",1e3,1),q=new y("peras",2e3,10),x=[],R=new _("ImportadoraLinda","11.111.111-1","Maquinaria y equipos industriales","Pequeña");console.log(R);var H=[],z=[];H.push(R);var N,D=new s([L,q],R._id);z.push(D),console.log(D);var G,V=0,U=0,W=document.getElementById("tablaEmpresas");function F(){for(var e="",t=0,o=H;t<o.length;t++){var n=o[t];e+="\n      <tr>\n      <td>".concat(n.getId,"</td>\n        <td>").concat(n.getNombre(),"</td>\n        <td>").concat(n.getRut(),"</td>\n      </tr>\n    ")}W.innerHTML=e}var J,X,K,Q,Y=document.getElementById("tablaImportaciones");function Z(){for(var e="",t=0,o=z;t<o.length;t++){var n=o[t],r="",a="",i="";G=R.buscarPorId(n._idEmpresa);var c=n.getProductos();if(Array.isArray(c)){var u,s=B(n.getProductos());try{for(s.s();!(u=s.n()).done;){var l=u.value;r+=l.getPrecio()+"<br>",a+=l.getNombre()+"<br>",i+=l.getCantidad()+"<br>"}}catch(e){s.e(e)}finally{s.f()}e+="\n        <tr>\n        <td>".concat(n.getId(),"</td>\n          <td>").concat(G,"</td>\n          <td>").concat(i,"</td>\n          <td>").concat(a,"</td>\n          <td>").concat(r,"</td>\n        </tr>\n      ")}else r+=c.getPrecio()+"<br>",a+=c.getNombre()+"<br>",i+=c.getCantidad()+"<br>",e+="\n        <tr>\n        <td>".concat(n.getId(),"</td>\n          <td>").concat(G,"</td>\n          <td>").concat(i,"</td>\n          <td>").concat(a,"</td>\n          <td>").concat(r,"</td>\n        </tr>\n      ");Y.innerHTML=e}}document.getElementById("agregarEmpresa").addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("nombre").value,o=document.getElementById("rut").value,n=document.getElementById("rubroImportadora").value,r=document.getElementById("tamanoImportadora").value;A=new _(t,o,n,r),H.push(A),document.getElementById("formEmpresa").reset(),F(),ne(),$("#modalEmpresa").modal("hide")})),document.getElementById("agregarImportacion").addEventListener("click",(function(e){e.preventDefault();var t=parseInt(document.getElementById("idEmpresas").value),o=parseInt(document.getElementById("cantidad").value),n=document.getElementById("nombreProducto").value,r=parseInt(document.getElementById("valorProducto").value),a=new y(n,r,o),i=new s(a,t);z.push(i),document.getElementById("formImportacion").reset(),Z(),$("#modalImportaciones").modal("hide"),oe()})),$("#abrirModalEmpresa").click((function(){$("#modalEmpresa").modal("show")})),$("#abrirModalImportaciones").click((function(){!function(){(J=document.getElementById("idEmpresas")).innerHTML="";for(var e=0,t=H;e<t.length;e++){var o=t[e],n=document.createElement("option");n.value=o._id,n.text=o._nombre,J.add(n)}}(),$("#modalImportaciones").modal("show")})),function(){(Q=document.getElementById("prohibicionSelec")).innerHTML="";var e,t=B(M);try{for(t.s();!(e=t.n()).done;){var o=e.value,n=document.createElement("option");if(n.classList.add("text-truncate"),n.value=o._id,o._mercancia.length>90){var r=o._mercancia;n.title=r.substring(0,90)+"..."}n.text=o._mercancia,Q.add(n)}}catch(e){t.e(e)}finally{t.f()}}(),function(){(X=document.getElementById("tamanoImportadora")).innerHTML="";for(var e=0,t=C;e<t.length;e++){var o=t[e],n=document.createElement("option");n.value=o,n.text=o,X.add(n)}}(),function(){(K=document.getElementById("rubroImportadora")).innerHTML="";for(var e=0,t=T;e<t.length;e++){var o=t[e],n=document.createElement("option");n.value=o,n.text=o,K.add(n)}}();var ee=document.getElementById("totalValor"),te=document.getElementById("totalImportaciones");function oe(){var e,t;e="".concat(D.totalImportaciones()),t="".concat(D.calcularTotal()),ee.innerHTML=e,te.innerHTML=t}function ne(){var e=-1;for((N=document.getElementById("dashBoard")).innerHTML="";e<H.length;e++){var t=document.createElement("option");-1===e?(t.value="",t.text="Seleccione una empresa",N.add(t)):(t.value=H[e]._id,t.text=H[e]._nombre,N.add(t))}}document.getElementById("dashBoard").addEventListener("change",(function(e){for(var t=document.getElementById("nombreModal"),o=document.getElementById("rutModal"),n=document.getElementById("tamanoImportadoraModal"),r=document.getElementById("rubroImportadoraModal"),a=document.getElementById("dashBoard").value,i=0,c=H;i<c.length;i++){var u=c[i];if(u._id==parseInt(a)){t.value=u._nombre,o.value=u._rut,n.innerHTML="",r.innerHTML="";var s=document.createElement("option");s.value=u._tamano,s.text=u._tamano,n.add(s);var l=document.createElement("option");l.value=u._rubro,l.text=u._rubro,r.add(l)}}$("#modalDashBoard").modal("show"),function(){var e=document.getElementById("dashBoard").value;if(""===e)return void 0!==re&&re.destroy(),void(void 0!==ae&&ae.destroy());var t=[];V=0,U=0;for(var o=0,n=z;o<n.length;o++){var r=n[o];if(r._idEmpresa==e){var a=new y(r.getProductos());t.push(a)}}for(var i=0,c=t;i<c.length;i++){var u=c[i];if(U++,u._nombre.length>1){var s,l=B(u._nombre);try{for(l.s();!(s=l.n()).done;){var d=s.value;V=d._precio*d._cantidad+V}}catch(e){l.e(e)}finally{l.f()}}else V=u._nombre._precio*u._nombre._cantidad+V}for(var m=0,f=x;m<f.length;m++){var p=f[m];p._id==e&&(G=p._nombre)}(function(){void 0!==re&&re.destroy();var e=D.totalImportaciones()-U;re=new Chart(ie,{type:"bar",data:{labels:[G,"Otras Empresas"],datasets:[{data:[U,e],label:"grafico de total de importaciones empresa",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{responsive:!0}})})(),function(){void 0!==ae&&ae.destroy();var e=D.calcularTotal()-V;ae=new Chart(ce,{type:"bar",data:{labels:[G,"Otras Empresas"],datasets:[{label:"grafico de valor total de importaciones empresa",data:[V,e],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1}]},options:{responsive:!0}})}()}()}));var re,ae,ie=document.getElementById("tortaTotalImp").getContext("2d"),ce=document.getElementById("tortaTotalValorImp").getContext("2d"),ue=document.getElementById("prohibicionSelec"),se=document.getElementById("textoProhibicion");ue.addEventListener("change",(function(e){if(0!=ue.value){var t=ue.value,o="Los productos importados son sujetos a visaciones, certificaciones o vistos buenos para su importación. Para mayor informacion : \n";o+=O.getById(t),se.innerHTML=o}})),ne(),F(),Z(),oe()})();