import http from "./http-axios"

class ServicioInformacionUsuarios {

  // Obtener todos los usuarios
  getAll() {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.usuarios);  // Accede a los usuarios dentro de la respuesta
  }

  // Obtener un usuario por ID
  getId(id) {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.usuarios.find(usuario => usuario.id === id));  // Filtra por ID
  }

  // Buscar un usuario por nombre
  getNombre(nombre) {
    return http.get("/getData")  // La función getData.js en Netlify
      .then(response => response.data.usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombre.toLowerCase())));  // Filtra por nombre
  }

  // Eliminar un usuario por ID
  delete(id) {
    return http.delete(`/usuarios/${id}`);  // Aquí se puede mantener la misma ruta para eliminar
  }

  // Crear un nuevo usuario
  post(nuevoUsuario) {
    return http.post(`/usuarios/`, nuevoUsuario);  // Aquí también puedes mantener la misma ruta
  }
}

export default new ServicioInformacionUsuarios();
