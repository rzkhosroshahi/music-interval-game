export const randomArrayPick = <T>(array: Array<T>): T => {
    return array[Math.floor(Math.random() * array.length)];
}

export const randomObjPick = (obj: object) => {
    return randomArrayPick(Object.keys(obj)) as keyof typeof obj;
}