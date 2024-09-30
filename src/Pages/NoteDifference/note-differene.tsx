import { Fragment, useCallback, useState } from "react";
import { Tabs } from "@/components/tabs";
import { Piano } from "@/components/piano";
import { NoteIntervals } from "./components/note-intervals";
import { TwoNotes } from "./components/two-notes";
import style from './note-differene.module.css';

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


export function NoteDiffernce() {
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
                onClick={(tabname: string) => setTab(tabname)}
            />
            {games.map(({ name, Component }) => (
                <Fragment key={name}>
                    {
                        tab === name &&
                        <Component
                            onHintClick={(visible) => setHintVisible(visible)}
                            fileName={fileName}
                            setAudioFileName={handleSetFileName}
                        />
                    }
                </Fragment>
            ))}
            <Piano visible={hintVisible} />
        </div>
    );
};




