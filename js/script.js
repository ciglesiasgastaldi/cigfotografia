 //Menú hamburguesa
 
 const icon = document.getElementById("icon");
 const navUl = document.querySelector("nav ul");

icon.addEventListener("click", () => {
    navUl.classList.toggle("show");
    });

const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((link) =>{
    link.addEventListener("click", () =>{
        navUl.classList.remove("show");

    });
});

// formulario de contacto

document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.querySelector("#contacto form");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = formulario.querySelector('input[type="text"]').value;
    const telefono = formulario.querySelector('input[type="number"]').value;
    const email = formulario.querySelector('input[type="email"]').value;
    const mensaje = formulario.querySelector('.text-area').value;

    if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    alert("Formulario enviado correctamente!");
    formulario.reset();
  });
});
