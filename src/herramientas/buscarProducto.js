//*********************************************************************************/
// Buscar un producto, en el array informacion facilitado
//*********************************************************************************/
export function buscarPez(informacion, nombre) {
  return informacion.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase()) || null;
}

export function buscarPescador(informacion, pez) {
  return informacion.find(producto => producto.pez.toLowerCase() === pez.toLowerCase()) || null;
}


//*********************************************************************************/
// Incrementar la cantidad de un producto, en el array informacion facilitado
//*********************************************************************************/
export function incrementarCantidad(informacion , nombre) {  
  
  return informacion.map(producto => {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
      return { ...producto, cantidad: producto.cantidad + 1 }; 
    }
    return { ...producto }; 
  });
}

export function anadirUsuario(informacion, nuevoUsuario) {  
  return [...informacion, nuevoUsuario];
}

export function eliminarUsuario(informacion, usuarioEliminar) {

  return informacion.filter(usuario => usuario.nombre !== usuarioEliminar.nombre);
}


export function sumarPescador(pescadores, pez){

  return pescadores.map((pescador) => {
    if (pescador.pez === pez) {
      return {
        ...pescador,
        cantidad: pescador.cantidad + 1, 
        precio: pescador.precio * 2 
      };
    }
    return {...pescador};
  });

}

export function venderCantidadConcreta(informacion , nombre, cantidad) {  
  
  return informacion.map(producto => {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
      return { ...producto, cantidad: producto.cantidad - cantidad }; 
    }
    return { ...producto }; 
  });
}

//*********************************************************************************/
// Reducir la cantidad de un producto, en el array informacion facilitado
//*********************************************************************************/
export function reducirCantidad(informacion, nombre) {  
  
  
}

/*https://fontawesomeicons.com/fa/react-js-convert-number-into-k-thousand-m-million-and-b-billion*/

export function formatearNumero(numero) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(numero);
}



