/**
 * Display the number to have 2 digits
 * @param {*} number 
 */
export const twoDecimals = (number) => parseFloat(number).toFixed(2);

export const dateTime = (dt: Date): string => {
    if (!dt) {
        return '';
    }
    const date = new Date(dt);
    if(!date ||
        Object.prototype.toString.call(date) !== '[object Date]') return '';
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = `0${date.getHours()}`.substr(-2);
    const min = `0${date.getMinutes()}`.substr(-2);
    const today = new Date();
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        return '[ hoje ]';
    }
    if (day === (today.getDate() - 1) && month === today.getMonth() && year === today.getFullYear()) {
        return '[ ontem ]';
    }
    return `${day.toString().substr(-2)}/${month.toString().substr(-2)}/${year} ${hour}:${min}`;
}

export const minTwoPlaces = (num: number) => num ? (num.toString().length < 2 ? `0${num.toString()}`.substr(-2) : num) : '00';
