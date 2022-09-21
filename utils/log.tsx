export default function log(...messages): void {
    try {
        if (process.env.NODE_ENV) {
            console.log(messages.join(' '), new Date());
        }
    } catch {

    }
}