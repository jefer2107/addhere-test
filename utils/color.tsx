let usedColors: number[] = [];

export const getRandomColor = () => {
    const colors = ['#D7263D', '#F46036', '#2E294E', '#1B998B', '#C5D86D'];
    const rnd = Math.round(Math.random() * 4);
    if (!usedColors.includes(rnd)) {
        usedColors.push(rnd);
        if (usedColors.length === colors.length) {
            usedColors = [];
        }
        return colors[rnd];
    }
    return getRandomColor();
}