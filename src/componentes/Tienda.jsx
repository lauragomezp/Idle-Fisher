import { Link } from 'react-router-dom';
import '../estilos/Tienda.css';
import { incrementarCantidad, venderCantidadConcreta } from '../herramientas/buscarProducto';
import { buscarPez } from "../herramientas/buscarProducto";
import { buscarPescador } from '../herramientas/buscarProducto';
import { useEffect, useState } from 'react'
import { sumarPescador } from '../herramientas/buscarProducto';
import { formatearNumero } from '../herramientas/buscarProducto';

const Tienda = ({ peces, setPeces, total, setTotal, pescadores, setPescadores, pecesConCantidad, setPecesConCantidad }) => {

  const venderTodos = (pez) => {

    const pezConCantidad = buscarPez(pecesConCantidad, pez.nombre)
    
    setPecesConCantidad(venderCantidadConcreta(pecesConCantidad, pez.nombre, pezConCantidad.cantidad))
    const ganancias = pez.precio * pezConCantidad.cantidad
    setTotal(total + (ganancias));
    alert("¡Has vendido todas las unidades de este producto! Ganancias: "+ ganancias+"€")

  }

    const buyAutoclicker = (pescador) => {
      const falta = pescador.precio - total;
      if (total >= pescador.precio) {
        setTotal((prevTotal) => prevTotal - pescador.precio);
        setPescadores(sumarPescador(pescadores,pescador.pez))
      } else {
        alert("¡Oops! Aún no tienes dinero para comprar este producto. Necesitas " + falta + "€ más para obtenerlo.");
      }
    };
  
    useEffect(() => {
      if (pescadores && pescadores.length > 0) {
        const interval = setInterval(() => {
          pescadores.forEach((pescador) => {
            if (pescador.cantidad > 0) {
              setPecesConCantidad((prevPeces) => {
                return prevPeces.map((pez) => {
                  if (pez.nombre === pescador.pez) {
                    return { ...pez, cantidad: pez.cantidad + pescador.cantidad };
                  }
                  return pez;
                });
              });
            }
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }
    }, [pescadores, setPecesConCantidad]);

  return (
    <div className="container-tienda">
  <div className="container-imagen-tienda">
    {peces.map((producto, index) => {
      const pezConCantidad = buscarPez(pecesConCantidad, producto.nombre)
      const pescador = buscarPescador(pescadores, producto.nombre)
      return (
        <div id={"pez-" + index} key={index} className="producto-tarjeta-tienda">
          <div className="producto-detalle">
            <span>
              {pezConCantidad.cantidad} x {producto.nombre} : {producto.precio}Є
            </span>
            <Link to={`/pez/${producto.id}`}>
              <img className="producto-tarjeta-tienda-img" src={producto.url} alt={producto.nombre} />
            </Link>
          </div>

          {/* Botones para incrementar/reducir cantidad */}
          <div className="producto-acciones">       
            <button className="btn-vender"
              onClick={() => venderTodos(producto)}
            >
              [̲̅$̲̅(̲̅∞)̲̅$̲̅]
            </button>
          </div>

          {/* Sección para contratar pescadores */}
          <div className="autoclicker-section">
            <h3>Pescadores de {producto.nombre}</h3>
            {pescador.pez === "Atún" ? (
                <>
                  <p>¿Harto de pescar al tuntún?</p>
                  <p>¡Contrata un pescador de atún!</p>
                </>
              ) : pescador.pez === "Merluza" ? (
                <>
                  <p>Que tu pesca no sea una chapuza</p>
                  <p>¡Contrata un pescador de merluza!</p>
                </>
              ) : pescador.pez === "Salmón" ? (
                <>
                  <p>La pesca no tiene por qué ser un dramón</p>
                  <p>¡Contrata un pescador de salmón!</p>
                </>
              ) : (
                <>
                  <p>¡Este pescador es muy rápido!</p>
                  <p>¡Contrátalo para pescar más en menos tiempo!</p>
                </>
            )}
            <p className="total">Número de pescadores activos: {pescador.cantidad || 0}</p>
            <button onClick={() => buyAutoclicker(pescador)}>Contratar pescador</button>
            <p>{formatearNumero(pescador.precio)}€</p>
          </div>
        </div>
      );
    })}
  </div>
</div>

  );
}


export default Tienda;
