import { useEffect, useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import Tienda from './componentes/Tienda'
import './index.css'

import {Routes, Route } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import DetalleProducto from './componentes/DetalleProducto';
import UseStorageState from './servicios/UseStorageState';
import ServicioInformacion from './servicios/ServicioInformacion';
import ServicioInformacionUsuarios from './servicios/ServicioInformacionUsuarios';
import UseLocalStorageState from './servicios/UseLocalStorageState';
import Administrador from './componentes/Administrador';
import Inicio from './componentes/Modal_Inicio/Inicio';
import ModalInicio from './componentes/Modal_Inicio/ModalInicio';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  
  const toggle = () => {
    audio.loop = true;
    setPlaying(!playing);
  }

  const handleVolumeChange = e => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return {
    playing,
    toggle,
    volume,
    handleVolumeChange
  };
};

function App() {

  const pescadoresJSON = [
    { "pez": "Atún", "precio": 100, "cantidad": 0 },
    { "pez": "Merluza", "precio": 550, "cantidad": 0 },
    { "pez": "Salmón", "precio": 1000, "cantidad": 0 }
  ];

  const pecesConCantidadJSON = [
    { "nombre": "Atún", "cantidad": 0 },
    { "nombre": "Merluza", "cantidad": 0 },
    { "nombre": "Salmón", "cantidad": 0 }
  ];

  const usuariosJSON = [{
    "nombre": "vacío",
    "clicks": 0,
    "pescadores": [
      {
        "pez": "Atún",
        "precio": 100,
        "cantidad": 0
      },
      {
        "pez": "Merluza",
        "precio": 500,
        "cantidad": 0
      },
      {
        "pez": "Salmón",
        "precio": 1000,
        "cantidad": 0
      }
    ],
    "peces": [
      {
        "nombre": "Atún",
        "cantidad": 0
      },
      {
        "nombre": "Merluza",
        "cantidad": 0
      },
      {
        "nombre": "Salmón",
        "cantidad": 0
      }
    ],
    "dinero": 0
  }]

  const [total, setTotal] = UseStorageState("total", 0);
  const [pescadores, setPescadores] = UseStorageState("pescadores",pescadoresJSON);
  const [clicks, setClicks] = UseStorageState("clicks",0);
  const [peces, setPeces] = UseStorageState("peces", []);
  const [pecesConCantidad, setPecesConCantidad] = UseStorageState("pecesConCantidad", pecesConCantidadJSON);
  const [usuarios, setUsuarios] = UseLocalStorageState("usuarios", usuariosJSON);
  const [isLoading, setIsLoading] = UseStorageState("isLoading", true)

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

  useEffect(()=>{
    ServicioInformacion.getAll()
    .then((response)=>{
      if (response) {
        setPeces(response);
      } else {
        console.error("Datos mal formateados", response);
      }
      console.log(response)
    }
    )
    .catch((error)=>{alert("no se ha podido cargar la info "+ error)})

  },[])

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false); 
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const {
    playing,
    toggle,
    volume,
    handleVolumeChange
  } = useAudio("music/Wii_U_OST_Mii Maker_Editing_a_Mii_(TV).wav");  // Aquí colocas la URL de tu audio

  return (

    <div>
        <ModalInicio 
          closeTimeoutMS={2000}
          isOpen={isLoading}
          onRequestClose={() => setIsLoading(false)}
          className="modal"
          overlayClassName="overlay"
        >
          <Inicio />
        </ModalInicio>
  
        {!isLoading && (
          <div className="App">
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            <header className="App-header">
              <MenuSuperior clicks={clicks} total={total} />
            </header>
            <main>
              <Routes>
                <Route 
                  path="/" 
                  element={<ListaImagenes 
                    playing={playing} 
                    toggle={toggle} 
                    volume={volume} 
                    handleVolumeChange={handleVolumeChange} 
                    pecesConCantidad={pecesConCantidad} 
                    setPecesConCantidad={setPecesConCantidad} 
                    clicks={clicks} 
                    setClicks={setClicks} 
                    total={total} 
                    setTotal={setTotal} 
                    peces={peces} 
                    setPeces={setPeces} 
                  />} 
                />
                <Route 
                  path="/tienda" 
                  element={<Tienda 
                    pecesConCantidad={pecesConCantidad}
                    setPecesConCantidad={setPecesConCantidad}
                    total={total} 
                    setTotal={setTotal}
                    peces={peces}
                    setPeces={setPeces}
                    setPescadores={setPescadores}
                    setClicks={setClicks}
                    pescadores={pescadores}
                  />} 
                />
                <Route 
                  path="/pez/:id" 
                  element={<DetalleProducto />} 
                />
                <Route 
                  path="/usuarios" 
                  element={<Administrador
                    peces={peces}
                    setPeces={setPeces}
                    setPecesConCantidad={setPecesConCantidad}
                    pecesConCantidad={pecesConCantidad}
                    total={total} 
                    setTotal={setTotal}
                    setPescadores={setPescadores}
                    setClicks={setClicks}
                    clicks={clicks}
                    pescadores={pescadores}
                    usuarios={usuarios} 
                    setUsuarios={setUsuarios}
                  />} 
                />
                <Route 
                  path="*" 
                  element={<Pagina404 />} 
                />      
              </Routes>
            </main>
          </div>
        )}
      </div>
  
  );
}

export default App
