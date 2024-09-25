import { QuestionBarProps } from './question-bar.types';
import style from './style.module.css';

export const QuestionBar = ({ from, to, onHintClick }: QuestionBarProps) => {
    return (
        <div className={style.container}>
            <div className={style.questionBox}>
                <div className={style.questionTitle}>
                    From: <span className={style.text}>{from}</span>
                </div>
                <div className={style.questionTitle}>
                    To: <span className={style.text}>{to}</span>
                </div>
            </div>
            <div>
                <span
                    className={style.hint}
                    onMouseDown={() => onHintClick(true)}
                    onMouseUp={() => onHintClick(false)}
                    onTouchStart={() => onHintClick(true)}
                    onTouchEnd={() => onHintClick(false)}
                >
                    i
                </span>
            </div>
        </div>
    )
}