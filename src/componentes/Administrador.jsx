import React, { useEffect, useState } from 'react';
import '../estilos/Administrador_vista.css';
import ServicioInformacion from '../servicios/ServicioInformacion';
import Modal from './Modal/Modal'
import CrearUsuario from './Modal/CrearUsuario';
import ServicioInformacionUsuarios from '../servicios/ServicioInformacionUsuarios';
import { anadirUsuario } from '../herramientas/buscarProducto';
import { eliminarUsuario } from '../herramientas/buscarProducto';

function Administrador({peces, setPeces, usuarios, setUsuarios, setClicks, clicks, total, setTotal, pescadores, setPescadores, setPecesConCantidad, pecesConCantidad}) {
  
  const [modals, setModals] = useState({    
    editar: false,
    crear: false
  });


  const gestionarModal = (tipo, estado, usuario = null) => {
    setModals({ ...modals, [tipo]: estado });     
  };

    const cargarPartida = (usuario) => {
      setPecesConCantidad(usuario.peces)
      setPescadores(usuario.pescadores)
      setTotal(usuario.dinero)
      setClicks(usuario.clicks)
      setPeces(peces)            
    };
  
  const guardarNuevoUsuario = (nuevoUsuario) => {
    nuevoUsuario.clicks = clicks
    nuevoUsuario.pescadores = pescadores
    nuevoUsuario.peces = pecesConCantidad
    nuevoUsuario.dinero = total
    setUsuarios(anadirUsuario(usuarios, nuevoUsuario))
    setModals({ ...modals, crear: false });
  };

  const borrarPartida = (usuario) =>{
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar esta partida?");
        if (confirmar) {
          setUsuarios(eliminarUsuario(usuarios, usuario.id))
          alert("Partida eliminada correctamente.");
        }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
          <th><img src='/imagenes/userclear.png'></img> Nombre</th>
          <th>Clicks <img src='/imagenes/pointer.png'></img></th>
          <th>Dinero (€) 💵</th>
          <th>Cargar partida <img src='/imagenes/Disc002.ico'></img></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.clicks}</td>
              <td>{item.dinero}</td>
              <td className="actions">
                <button className="edit" onClick={() => cargarPartida(item)}>Cargar</button>
                <button className="delete" onClick={() => borrarPartida(item)}>Borrar</button>               
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para crear productos */}
      <button className="crear-producto-btn" onClick={()=> gestionarModal("crear", true)}>
        Guardar nuevo usuario
      </button>

      <Modal isOpen={modals.crear} onClose={() => gestionarModal("crear", false)}>
          {(
            <CrearUsuario
            clicks={clicks}
            total={total}
              onGuardar={guardarNuevoUsuario}
              onClose={() => gestionarModal("crear", false)}
            />
          )}
        </Modal>

    </>
  );
}

export default Administrador;
