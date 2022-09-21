
export const isHome = (router) => router.pathname === "/";

export const goBack = (router, event: { preventDefault: () => void; } = null) => {
    if (event) {
        event.preventDefault();
    }
    router.back();
};