import { useEffect, useRef, useState } from "react"
import { QuestionBar } from "../../../../components/question-bar";
import { Message } from "../../../../components/message";
import { randomArrayPick, randomObjPick } from "../../../../utils/utils";
import { calcInterval, intervals, notes } from "../../../../utils/game";
import { NoteIntervalsProps } from "./note-intervals.types";
import style from './style.module.css';

const GAME_NAME = 'NoteIntervals';
export const NoteIntervals = ({ onHintClick, fileName, setAudioFileName }: NoteIntervalsProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [from, setFrom] = useState(randomArrayPick(notes));
    const [to, setTo] = useState<keyof typeof intervals>(randomObjPick(intervals));
    const [msg, setMsg] = useState('');
    const [msgType, setMsgType] = useState<'success' | 'failed'>('success');
    const [score, setScore] = useState(0);
    const highScore = localStorage.getItem(GAME_NAME) ?? 0;

    useEffect(() => {
        const finalNote = calcInterval(from, to);
        setAudioFileName(`${from}${finalNote}`.toLowerCase());
    }, [from, to, setAudioFileName]);

    const resetForm = () => {
        let fromNote = randomArrayPick(notes);
        let toInterval = randomObjPick(intervals);

        while (`${fromNote}${toInterval}` === `${from}${to}`) {
            fromNote = randomArrayPick(notes);
            toInterval = randomObjPick(intervals);
        }
        setFrom(fromNote);
        setTo(toInterval);
        if (inputRef.current) inputRef.current.value = '';
    }

    const setHighScore = (score: number) => {
        if (highScore) {
            if (score > Number(highScore)) {
                localStorage.setItem(GAME_NAME, score.toString());
            }
            return;
        }
        localStorage.setItem(GAME_NAME, score.toString());
    }

    const handleOnKeyUp = () => {
        const result = calcInterval(from, to);
        if (result === inputRef.current?.value.toUpperCase()) {
            setMsg(`Your answer is right! The ${to} interval of ${from} is: ${result}`);
            setMsgType('success');
            setScore(() => {
                const sc = score + 1
                setHighScore(sc);
                return sc;
            });
        } else {
            setMsg(`Your answer is wrong! The ${to} interval of ${from} is: ${result}`);
            setMsgType('failed');
        }

        resetForm();
    }
    return (
        <div className={style.container}>
            <QuestionBar
                from={from}
                to={to}
                onHintClick={onHintClick}
                fileName={fileName}
            />
            <input
                ref={inputRef}
                className={style.input}
                type="string"
                placeholder="Type the result note"
                onKeyUp={handleOnKeyUp}
            />
            <div className={style.score}>
                <span>
                    score: {score}
                </span>
                <span>
                    high score: {highScore}
                </span>
            </div>
            <Message message={msg} type={msgType} />
        </div>
    )
}