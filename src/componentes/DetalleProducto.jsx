import '../estilos/DetalleProducto.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ServicioInformacion from '../servicios/ServicioInformacion';

const DetalleProducto = () => {  

  const {id} = useParams()

  //let productoInfo = buscarProducto(productos,nombre )

  const [pezConInfo,setPezConInfo] = useState([])

  console.log(pezConInfo)

  useEffect(() => {
  ServicioInformacion.getId(id)
      .then((response) => {
        setPezConInfo(response.data);
      })
      .catch((error) => {
       alert("No se ha podido consultar el producto")
      });
    }, []
  );

  return (
    <div className="container-detalle-producto">
      {pezConInfo !== null ? (
        <div className="producto-info-detalle">
          <h1 className="producto-nombre-detalle">{pezConInfo.nombre}</h1>
          <p className="producto-precio-detalle">{pezConInfo.precio} Є</p>
          <img
            className="producto-imagen-detalle"
            src={pezConInfo.url}
            alt={pezConInfo.nombre}
          />
        </div>
      ) : (
        <h1 className="error-mensaje">No existe el producto indicado</h1>
      )}
    </div>
  );
  
};

export default DetalleProducto ;
