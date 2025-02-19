import http from "./http-axios"

class ServicioInformacionUsuarios{

    getAll(){
        return http.get("/usuarios")
    }

    getId(id){
        return http.get(`/usuarios/${id}`)
    }

    getNombre(nombre) {
        return http.get(`/usuarios?nombre=${nombre}`);
    }

    delete(id) {
        return http.delete(`/usuarios/${id}`);
    }
    
    post(nuevoUsuario){
        return http.post(`/usuarios/`, nuevoUsuario)
    }

}
export default new ServicioInformacionUsuarios