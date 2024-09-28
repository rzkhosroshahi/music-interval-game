import { AudioPlayerProps } from "./audio.type";

export function AudioPlayer({ fileName, className }: AudioPlayerProps) {
    return (
        <audio
            className={className}
            src={`audio-files/${fileName}.mp3`}
            controls
            autoPlay={false}
        />
    )
}