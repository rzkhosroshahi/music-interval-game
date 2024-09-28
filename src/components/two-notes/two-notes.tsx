import { useState, useRef, useEffect } from "react";
import { QuestionBar } from "../question-bar";
import { Message } from "../message";
import { randomArrayPick } from "../../utils/utils";
import { calcDiff, notes } from "../../utils/game";
import { TwoNotesProps } from "./two-notes.types";
import style from './style.module.css';

const GAME_NAME = 'TwoNotes';
export const TwoNotes = ({ onHintClick, setAudioFileName, fileName }: TwoNotesProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [from, setFrom] = useState(randomArrayPick(notes));
    const [to, setTo] = useState(randomArrayPick(notes));
    const [msg, setMsg] = useState('');
    const [msgType, setMsgType] = useState<'success' | 'failed'>('success');
    const [score, setScore] = useState(0);
    const highScore = localStorage.getItem(GAME_NAME) ?? 0;

    useEffect(() => {
        setAudioFileName(`${from}${to}`.toLowerCase());
    }, [from, to, setAudioFileName]);

    const setHighScore = (score: number) => {
        if (highScore) {
            if (score > Number(highScore)) {
                localStorage.setItem(GAME_NAME, score.toString());
            }
            return;
        }
        localStorage.setItem(GAME_NAME, score.toString());
    }

    const resetForm = () => {
        let randomFrom = randomArrayPick(notes);
        let randomTo = randomArrayPick(notes);

        while (`${from}${to}` === `${randomFrom}${randomTo}`) {
            randomFrom = randomArrayPick(notes);
            randomTo = randomArrayPick(notes);
        }

        setFrom(randomFrom);
        setTo(randomTo);
        if (inputRef.current) inputRef.current.value = '';
    }

    const handleOnKeyUp = () => {
        const result = calcDiff(from, to);
        if (result === Number(inputRef.current?.value)) {
            setMsg(`Your answer is right! The difference between ${to} and ${from} is: ${result}`);
            setMsgType('success');
            setScore(() => {
                const sc = score + 1
                setHighScore(sc);
                return sc;
            });
        } else {
            setMsg(`Your answer is wrong! The difference between ${to} and ${from} is: ${result}`);
            setMsgType('failed');
        }

        resetForm();
    }

    return (
        <div className={style.container}>
            <QuestionBar from={from} to={to} onHintClick={onHintClick} fileName={fileName} />
            <input
                ref={inputRef}
                className={style.input}
                type="tel"
                placeholder="Type the interval"
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