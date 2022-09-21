const SEPARATOR = '___';

export function imgToStr(url: string) {
    return url.replaceAll('/', SEPARATOR);
}

export function StrToImg(url: string) {
    return url.replaceAll(SEPARATOR, '/');
}