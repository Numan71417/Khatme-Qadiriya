import React, { useState,useEffect,useRef ,useCallback} from 'react'
import { Link } from 'react-router-dom'

const Header = ({audio,head,navl='' , navr=''}) => {

    const [play , setPlay] = useState(false);

    const audioRef = useRef();

    const yaseen1 = new Audio(audio);
    yaseen1.volume = 0.5;


    const handleAudio = () => {
        setPlay((prev) => !prev);
      };

    useEffect(() => {
        if (play) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [play, audioRef]);

  return (
      <div className="header">
            <div className="htop">
            <div className="back">
                <Link to={`/${navl}`}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="40">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                </svg>
                </Link>
            </div>

            <div className="htitle">
                <h1>{head}</h1>
            </div>

            <div className="audio" onClick={handleAudio}>
                { play === true ? 
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="50"><path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="50"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                }
            </div>
        
         {
          
            <div className="back">
                <Link to={`/${navr}`}>  
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="50"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </Link>
            </div>
            }

            <audio src={audio} ref={audioRef} />

        </div>


        </div>
    
  )
}

export default Header
