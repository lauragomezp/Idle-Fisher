import { useState, useEffect } from "react";
import LocalStorageServicio from "./localStorage.js";

function UseLocalStorageState(clave, valorInicial) {
  const [state, setState] = useState(() => {
    
    const valorGuardado = LocalStorageServicio.get(clave);
    return valorGuardado !== null ? valorGuardado : valorInicial;
  });

  useEffect(() => {
    LocalStorageServicio.set(clave, state);
    
  }, [state]);

  return [state, setState];
}

export default UseLocalStorageState;