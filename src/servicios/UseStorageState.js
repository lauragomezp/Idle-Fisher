import { useState, useEffect } from "react";
import SessionStorageServicio from "./sessionStorage.js";

function UseStorageState(clave, valorInicial) {
  const [state, setState] = useState(() => {
    
    const valorGuardado = SessionStorageServicio.get(clave);
    return valorGuardado !== null ? valorGuardado : valorInicial;
  });

  useEffect(() => {

    SessionStorageServicio.set(clave, state);
    
  }, [state]);

  return [state, setState];
}

export default UseStorageState;
