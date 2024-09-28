import { useCallback, useState } from "react";
import { Tabs } from "../tabs";
import { NoteIntervals } from "../note-intervals";
import { TwoNotes } from "../two-notes";
import style from './games.module.css';
import { Piano } from "../piano";

const games = [
    {
        name: 'Note and Interval',
        Component: NoteIntervals,
    },
    {
        name: 'Two Notes',
        Component: TwoNotes,
    }
];

export function Games() {
    const [tab, setTab] = useState<string>(games[0].name);
    const [hintVisible, setHintVisible] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleSetFileName = useCallback((arg: string) => {
        setFileName(arg);
    }, []);

    return (
        <div className={style.container}>
            <Tabs
                tabList={games}
                activeTab={tab}
                onClick={(tabName) => setTab(tabName)}
            />
            {games.map(({ name, Component }) => (
                <div
                    key={name}
                    style={{ display: tab === name ? 'flex' : 'none' }}
                >
                    <Component
                        onHintClick={(visible) => setHintVisible(visible)}
                        fileName={fileName}
                        setAudioFileName={handleSetFileName}
                    />
                </div>
            ))}
            <Piano visible={hintVisible} />
        </div>
    );
};

