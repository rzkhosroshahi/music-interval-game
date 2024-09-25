export const notes: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];

export const intervals = {
    second: 2,
    third: 3,
    fourth: 4,
    fifith: 5,
    sixth: 6,
    seventh: 7,
};


export const calcDiff = (fromStart: string, to: string) => {
    let diff = 0;
    let from = fromStart;

    const startNotes = [...notes.slice(notes.indexOf(from) + 1)];

    for (let i = 0; i <= notes.length; i++) {
        if (from === to) {
            diff++;

            return diff;
        }
        from = startNotes[i];
        diff++;
    }

    return diff;
};

export const calcInterval = (from: string, toStart:  keyof typeof intervals) => {
    const to = intervals[toStart];
    const startNotes =  [...notes.slice(notes.indexOf(from))];

    for (let i = 0; i <= notes.length; i++) {
        if (i == to - 1) {
            return startNotes[i];
        }
    }
}