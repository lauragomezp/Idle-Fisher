/*https://stackoverflow.com/questions/47686345/playing-sound-in-react-js*/

import { useState } from "react";
import "../estilos/player.css"


const Player = ({ song, setSong, urls, playing, toggle, volume, handleVolumeChange }) => {

  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track the index of the current song
  
  const nextSong = () => {
    if(playing){
      toggle();
    }
    const currentSongIndex = urls.indexOf(song);
    const nextIndex = (currentSongIndex + 1) % urls.length; 
    setSong(urls[nextIndex]);   
  };
  
  const prevSong = () => {
    if(playing){
      toggle();
    }
    const currentSongIndex = urls.indexOf(song); 
    const prevIndex = (currentSongIndex - 1 + urls.length) % urls.length; 
    setSong(urls[prevIndex]); 
  };

  return (
    <div className="reproductor">
      <div className="botones-container">
      <img className="previous" onClick={prevSong} src="/imagenes/Sign026.ico"></img>
        <div className="play-stop">{playing ? 
            <img onClick={toggle} className="play-stop-img" src="/imagenes/Alert006.png"></img> : 
            <img onClick={toggle} className="play-stop-img" src="/imagenes/Alert008.png"></img>}
        </div>
        <img className="next" onClick={nextSong} src="/imagenes/Sign027.ico"></img>
        </div>
        <div className="descripcion-musica">{playing ? 
            <strong>Now playing...</strong>: 
            <></>}
            <p>{song.replace("/music/", "").replace(/_/g, " ").replace(".wav", "")}</p>
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
