import http from "./http-axios"

class ServicioInformacion{

    getAll(){
        return http.get("peces")
    }

    getId(id){
        return http.get(`peces/${id}`)
    }

    getNombre(nombre) {
        return http.get(`/peces?nombre=${nombre}`);
    } 

    getGtPrecio(precio) {
        return http.get(`/peces/?precio_gt=${precio}`);
    } 

}
export default new ServicioInformacion