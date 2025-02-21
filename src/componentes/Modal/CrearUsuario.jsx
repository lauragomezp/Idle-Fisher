import React, { useState } from "react";
import "../../estilos/CrearUsuario.css";


const CrearUsuario = ({ onGuardar, onClose, total, clicks }) => {
    const [usuarioNuevo, setUsuarioNuevo] = useState({});
  
    const gestionarCambio = (e) => {
      const { name, value } = e.target;
      setUsuarioNuevo({ ...usuarioNuevo, [name]: value});
      
    };
  
    const guardarCambios = (e) => {
      e.preventDefault();
        onGuardar(usuarioNuevo);      
    };
  
    return (
      <div className="editar-producto">
        <img src="/imagenes/LM001.ico"></img>
        <h2>Crear Usuario</h2>
        <form onSubmit={guardarCambios}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            onChange={gestionarCambio}
            required
          />
  
          <label>Dinero:</label>
          <h4>{total}€</h4>
  
          <label>Clicks:</label>
          <h4>{clicks}</h4>
  
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    );
  };
  
  export default CrearUsuario;