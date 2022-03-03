
  //Variables Storage
  const welcome = 'bienvenida';
  let saludoStorage = localStorage.getItem(welcome);
  let nameStorage = localStorage.getItem('nombreUsuario');
  let lastNameStorage = localStorage.getItem('apellidoUsuario');
  let anioNacimientoStorage = localStorage.getItem('anioNacimientoUsuario');
  let emailStorage = localStorage.getItem('emailUsuario');
  let cuantosStorage = localStorage.getItem('cuantosUsuario');
  let paisesStorage = localStorage.getItem('paisesUsuario');
  const contFormulario = document.getElementById("contFormulario");

  const YEAR = 2022;
  let edad = (YEAR - anioNacimiento);
  let esMayorDeEdad = edad >= 18; 

  //Variables DOM
  const greeting = document.getElementById("greeting");
  const form = document.getElementById("form");
  const contForm = document.getElementById("contForm");

    form.addEventListener("submit", (e) =>{
      e.preventDefault();
      localStorage.setItem('nombreUsuario', form.children[0].value);
      localStorage.setItem('apellidoUsuario', form.children[1].value);
      localStorage.setItem('anioNacimientoUsuario', form.children[2].value);
      localStorage.setItem('emailUsuario', form.children[3].value);
      localStorage.setItem('cuantosUsuario', form.children[4].value);
      localStorage.setItem('paisesUsuario', form.children[5].value);
      nameStorage = form.children[0].value;
      lastNameStorage = form.children[1].value;
      checkForm();
    })

  const send = document.getElementById("send");

   send.onclick = () => {
    modal_container.classList.remove("show");
}

  const checkForm = () => {
    if (nameStorage && nameStorage !== 'null'){
      console.log("La informacion ya existe");
      const element = document.createElement("div");
      contFormulario.remove();
      element.innerHTML = `<p class="Color">Hola ${nameStorage} ${lastNameStorage} te estabamos esperando</p>`;
      greeting.prepend(element);
     }else{
      console.log("La informacion no exixte");
    }
  }

  checkForm();

  const open = document.getElementById('open');
  const modal_container = document.getElementById("modal_container");
  const close = document.getElementById('close');

  open.addEventListener('click', () =>{
    modal_container.classList.add("show");
  })

  close.addEventListener('click', () =>{
    modal_container.classList.remove("show");
  })

  const card = document.getElementById('card')
  const city = document.getElementById('city');
  const date = document.getElementById('date');
  const tempImg = document.getElementById('temp-img');
  const temp = document.getElementById('temp');
  const weather = document.getElementById('weather');
  const range = document.getElementById('range');
  const rangee = document.getElementById('rangee');
  
  function Images(data) {
    const temp = toCelsius(data.main.temp);
    let src = 'images/termometro.png';
    if (temp > 28) {
      src = 'images/caliente.png';
    } else if (temp < 20) {
      src = 'images/frio.png';
    } 
    tempImg.src = src;
  }
  
  async function search(query) {
    try {
      const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
      const data = await response.json();
      card.style.display = 'block';
      city.innerHTML = `${data.name}, ${data.sys.country}`;
      data.innerHTML = (new Date()).toLocaleDateString();
      temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
      weather.innerHTML = data.weather[0].description;
      Images(data);
    } catch (err) {
      console.log(err);
      alert('Ingresa otro dato');
    }
  }

  function toCelsius(kelvin) {
     return Math.round(kelvin - 273.15);
   } 

  function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }
  
  const searchform = document.getElementById('search-form');
  const searchbox = document.getElementById('searchbox');
  searchform.addEventListener('submit', onSubmit, true);


  searchbox.addEventListener("click",()=>{
      console.log("Se hizo click en buscar el país");
  })


// localStorage.clear(); // Va a borrar todo en el localStorage