import { notes } from '../../utils/game';
import { PianoProps } from './piano.types';
import style from './style.module.css';

export const Piano = ({ visible }: PianoProps) => {
    return (
        <div
            className={style.container}
            style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? 1 : 0 }}
        >
            {
                notes.map((note, index) => {
                    if (note === 'E' || note === 'B') {
                        return (<div key={`${note}-${index}`} className={`${style.key} ${style.keyHalf}`}>
                            <span className={style.keyText}>
                                {note}
                            </span>
                        </div>)
                    }
                    return (
                        <div key={`${note}-${index}`} className={`${style.key} ${style.keyWhole}`}>
                            <span className={style.keyText}>
                                {note}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}