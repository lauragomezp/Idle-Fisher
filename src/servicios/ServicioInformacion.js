import http from "./http-axios"

class ServicioInformacion {

  // Obtener todos los peces
  getAll() {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.peces);  // Accede a los peces dentro de la respuesta
  }

  // Obtener un pez por ID
  getId(id) {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.peces.find(pez => pez.id === id));  // Filtra por ID
  }

  // Buscar por nombre
  getNombre(nombre) {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.peces.filter(pez => pez.nombre.toLowerCase().includes(nombre.toLowerCase())));  // Filtra por nombre
  }

  // Buscar por precio mayor que
  getGtPrecio(precio) {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.peces.filter(pez => pez.precio > precio));  // Filtra por precio mayor
  }

}

export default new ServicioInformacion();
