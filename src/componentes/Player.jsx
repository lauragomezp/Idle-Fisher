/*https://stackoverflow.com/questions/47686345/playing-sound-in-react-js*/

import "../estilos/player.css"

const Player = ({ playing, toggle, volume, handleVolumeChange }) => {
  return (
    <div className="reproductor">
        <div className="play-stop">{playing ? 
            <img onClick={toggle} className="play-stop-img" src="/imagenes/Alert006.png"></img> : 
            <img onClick={toggle} className="play-stop-img" src="/imagenes/Alert008.png"></img>}
        </div>
        <div className="descripcion-musica">{playing ? 
            <strong>Now playing...</strong>: 
            <></>}
            <p>Wii U OST - Mii Maker Editing a Mii (TV)</p>
        </div>
      <input className="barra-volumen"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <span className="volumen">Volume: {Math.round(volume * 100)}%</span>
    </div>
  );
};

export default Player;
