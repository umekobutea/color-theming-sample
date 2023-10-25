export const range = (start: number, end: number, step = 1): number[] => {
    const ns: number[] = [];
    for (let n = start; n <= end; n += step) {
        ns.push(n);
    }
    return ns;
}