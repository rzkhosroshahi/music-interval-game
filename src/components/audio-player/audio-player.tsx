import { useRef } from "react";
import { AudioPlayerProps } from "./audio.type";
import Volume from './volume.svg';
import style from './audio-player.module.css';

export function AudioPlayer({ fileName }: AudioPlayerProps) {
    const audioElement = useRef<HTMLAudioElement>(null);

    const handleClickOnSound = () => {
        if (audioElement.current) {
            audioElement.current.play();
        }
    }
    return (
        <div className={style.container}>
            <audio
                ref={audioElement}
                src={`audio-files/${fileName}.mp3`}
                controls
                autoPlay={false}
                style={{ display: 'none' }}
            />
            <img onClick={handleClickOnSound} src={Volume} alt="" />
        </div>
    )
}