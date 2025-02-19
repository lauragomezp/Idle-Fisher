class SessionStorageServicio {
    static get(valor) {
      try {
        const item = window.sessionStorage.getItem(valor);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error("Error LEYENDO el valor", valor, error);
        return null;
      }
    }
  
    static set(clave, valor) {
      try {
        window.sessionStorage.setItem(clave, JSON.stringify(valor));
      } catch (error) {
        console.error("Error GUARDANDO el valor", clave, error);
      }
    }
  
    static remove(valor) {
      try {
        window.sessionStorage.removeItem(valor);
      } catch (error) {
        console.error("Error BORRANDO el valor", valor, error);
      }
    }
  
    static clear() {
      try {
        window.sessionStorage.clear();
      } catch (error) {
        console.error("Error LIMPIANDO sessionStorage", error);
      }
    }
  }
  
  export default SessionStorageServicio;
  