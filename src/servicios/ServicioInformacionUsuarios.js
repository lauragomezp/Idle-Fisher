import http from "./http-axios";

class ServicioInformacionUsuarios {

    // Obtener todos los usuarios
    getAll() {
      return http.get("/getUsuarios")  // La ruta ahora apunta a getUsuarios
        .then(response => response.data);  // Accede a los usuarios dentro de la respuesta
    }
  
    // Obtener un usuario por ID
    getId(id) {
      return http.get("/getUsuarios")  // La ruta ahora apunta a getUsuarios
        .then(response => response.data.find(usuario => usuario.id === id));  // Filtra por ID
    }
  
    // Buscar un usuario por nombre
    getNombre(nombre) {
      return http.get("/getUsuarios")  // La ruta ahora apunta a getUsuarios
        .then(response => response.data.filter(usuario => usuario.nombre.toLowerCase().includes(nombre.toLowerCase())));  // Filtra por nombre
    }
  
  }
  
  export default new ServicioInformacionUsuarios();
  