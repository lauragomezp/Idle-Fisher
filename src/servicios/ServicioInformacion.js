import http from "./http-axios";

class ServicioInformacion {

    // Obtener todos los peces
    getAll() {
      return http.get("/getPeces")  // La ruta ahora apunta a getPeces
        .then(response => response.data);  // Ya no necesitas acceder a "peces" porque esa es toda la respuesta
    }
  
    // Obtener un pez por ID
    getId(id) {
      return http.get("/getPeces")  // La ruta ahora apunta a getPeces
        .then(response => response.data.find(pez => pez.id === id));  // Filtra por ID
    }
  
    // Buscar por nombre
    getNombre(nombre) {
      return http.get("/getPeces")  // La ruta ahora apunta a getPeces
        .then(response => response.data.filter(pez => pez.nombre.toLowerCase().includes(nombre.toLowerCase())));  // Filtra por nombre
    }
  
    // Buscar por precio mayor que
    getGtPrecio(precio) {
      return http.get("/getPeces")  // La ruta ahora apunta a getPeces
        .then(response => response.data.filter(pez => pez.precio > precio));  // Filtra por precio mayor
    }
  }
  
  export default new ServicioInformacion();
  