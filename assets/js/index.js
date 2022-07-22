
const propiedadesJSON = [{
  name: "Casa de campo",
  description: "Un lugar ideal para descansar de la ciudad",
  rc:"https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
  rooms: 2,
  m: 170
},
{
  name: "Casa de playa",
  description: "Despierta tus días oyendo el oceano",
  src:"https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
  rooms: 2,
  m: 130
},
{
  name: "Casa en el centro",
  description: "Ten cerca de ti todo lo que necesitas",
  src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
  rooms: 1,
  m: 80
},
{
  name: "Casa rodante",
  description: "Conviertete en un nómada del mundo sin salir de tu casa",
  src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
  rooms: 1,
  m: 6
},
{
  name: "Departamento",
  description: "Desde las alturas todo se ve mejor",
  src:"https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
  rooms: 3,
  m: 200
},
{
  name: "Mansión",
  description: "Vive una vida lujosa en la mansión de tus sueños ",
  src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
  rooms: 5,
  m: 500
}
];
  

let content = ""

propiedadesJSON.forEach(p => {
content += `
<div class="propiedad">
<div><img class="img" src="${p.src}" alt=""></div>
<section>
<h5>${p.name}</h5>
<div class="d-flex justify-content-between">
  <p>Cuartos: ${p.rooms}</p>
  <p>Metros: ${p.m}</p>
</div>
<p class="my-3">${p.description}</p>
<button class="btn btn-info ">Ver más</button>
</section>
</div>
`
});

const list = document.querySelector("#list")
list.innerHTML = content

const t = propiedadesJSON.length
const total = document.querySelector("#total")
total.innerHTML = t  

function validar($cantidad, $desde, $hasta){
  if ($cantidad < 1 || $desde < 1 || $hasta <1){
    return false
  }
  return true
}

function buscar(){

  let cantidad = parseInt(document.querySelector("#cantidaddecuartos").value)
  let  desde = parseInt(document.querySelector("#desde").value)
  let hasta = parseInt(document.querySelector("#hasta").value)
  
  cantidad = isNaN(cantidad) ? 0 : cantidad
  desde = isNaN(desde) ? 0 : desde
  hasta = isNaN(hasta) ? 0 : hasta


  if(validar(cantidad, desde, hasta)){

    const propiedadesfiltradas = propiedadesJSON.filter(p => p.rooms === cantidad && p.m >= desde && p.m <= hasta)
    let content = ""
    propiedadesfiltradas.forEach(p =>{
      content += `
      <div class="propiedad">
      <div><img class="img" src="${p.src}" alt=""></div>
      <section>
          <h5>${p.name}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${p.rooms}</p>
              <p>Metros: ${p.m}</p>
          </div>
          <p class="my-3">${p.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
      </div>
    `
    });

    const list = document.querySelector("#list")
    list.innerHTML = content

    const t = propiedadesfiltradas.length
    const total = document.querySelector("#total")
    total.innerHTML = t
    if(t ===0){
      alert("No se consiguieron resultados")
    }
  } else{
    alert("Faltan campos por completar")
  }
}