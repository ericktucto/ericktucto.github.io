document.addEventListener("DOMContentLoaded", () => {
  // El archivo 404.html hace que el link de navbar se active
  // esto quita el link de cualquiera de ellas
  let paths = ["/", "/series", "/projects", "/categories"];
  if (paths.indexOf(window.location.pathname) >= 0) {
    document.querySelector("#message").innerHTML = 'ESTÁ EN CONSTRUCCIÓN';
  }
});
