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