import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from 'react-router-dom';
import { buscarPez, formatearNumero } from "../herramientas/buscarProducto";

// Componente MenuSuperior
const MenuSuperior = ({ total, clicks}) => {

  const importeTotal = formatearNumero(total)

  return (
    <div className="menu-superior">
      <nav>
        <ul className="menu-lista">
          {/* Enlaces */}
          <li><Link className="menu-a" to="/"><img src="/imagenes/Display027.ico"></img><p>Pescar</p></Link></li>
          <li><Link className="menu-a" to="/tienda"><img src="/imagenes/CP078.ico"></img><p>Lonja</p></Link></li>
          <li><Link className="menu-a" to="/usuarios"><img src="/imagenes/LM001.ico"></img><p>Usuarios</p></Link></li>
        </ul>
      </nav>
      <div className="carrito-info">
            <span className="carrito-total">
              <span className="info-titulo">Total</span> {importeTotal} Є
            </span>
            <span className="carrito-total">
              <span className="info-titulo">Clicks</span> {clicks}
            </span>
      </div>
    </div>
  );
};

export default MenuSuperior;
