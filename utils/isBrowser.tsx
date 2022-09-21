// check if you are on the client (browser) or server
export const isBrowser = () => typeof window !== "undefined";

export const isLocal = () => location.hostname === "localhost";

export const isDev = () => process.env.NODE_ENV !== "production";