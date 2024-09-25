import { MessageProps } from './message.types';
import style from './style.module.css';

export const Message = ({ message, type }: MessageProps) => {
    return (
        <div className={`${style.message} ${type === 'success' ? style.success : style.failed}`}>
            {message}
        </div>
    )
}