import { Link } from 'react-router-dom';
import '../estilos/cuerpo.css';
import { buscarPez, formatearNumero, incrementarCantidad } from '../herramientas/buscarProducto';
import Player from './Player';

// Componente ListaImagenes
const ListaImagenes = ({urls, song, setSong, clicks, setClicks , peces, setPeces, pecesConCantidad, setPecesConCantidad, playing, toggle, volume, handleVolumeChange}) => {

  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1); 
  };

  const AnadirProducto = (nombre) => { 

    let pezAnadir = buscarPez(peces, nombre);

    if (pezAnadir === null) {     
      setPecesConCantidad([...peces,
        {nombre: pezAnadir.nombre, cantidad: 1 }
      ]);
    } else {

      setPecesConCantidad(incrementarCantidad(pecesConCantidad, nombre));
    }
  };

  const PescarTodos = () => {
    const nuevosPecesConCantidad = pecesConCantidad.map((pez) => {
      return incrementarCantidad([pez], pez.nombre); 
    });

    setPecesConCantidad(nuevosPecesConCantidad.flat());
  };
  


  return (
    <>
      <div class="ocean">
        <div className="container-principal">
        <div className="container-imagen">
          {peces.map((item, index) => {
            const pezConCantidad = buscarPez(pecesConCantidad, item.nombre)
            return (
              <div id={"pez-" + index} key={index} className="producto-tarjeta">
                <Link>
                  <img
                    src={item.url}
                    alt="imagen"
                    className='imagen-cuerpo'
                    onClick={() => {
                      AnadirProducto(item.nombre);
                      handleClick();
                    }}
                  />
                </Link>
                <div className="producto-info-cuerpo">
                  <p className='item-nombre'>{item.nombre}</p>
                  <p className="cantidad-peces-cuerpo">
                    {pezConCantidad.cantidad > 0
                      ? `${formatearNumero(pezConCantidad.cantidad)}`
                      : <span className="no-hay-peces">No hay pescado para vender</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

        <div className="container-btn-pescar">
        <button className="btn-pescar-todos" onClick={() => {
          PescarTodos();
          handleClick();
        }}>
          <img className="img-pescar"src='/imagenes/fishing-icon.png'></img>
        </button>
      </div>
      
      <Player 
      urls={urls}
      song={song}
      setSong={setSong}
      playing={playing} 
                toggle={toggle} 
                volume={volume} 
                handleVolumeChange={handleVolumeChange} ></Player>

      <div class="bubble bubble--1"></div>
      <div class="bubble bubble--2"></div>
      <div class="bubble bubble--3"></div>
      <div class="bubble bubble--4"></div>
      <div class="bubble bubble--5"></div>
      <div class="bubble bubble--6"></div>
      <div class="bubble bubble--7"></div>
      <div class="bubble bubble--8"></div>
      <div class="bubble bubble--9"></div>
      <div class="bubble bubble--10"></div>
      <div class="bubble bubble--11"></div>
      <div class="bubble bubble--12"></div>
</div>
    </>
  );
};

export default ListaImagenes;
