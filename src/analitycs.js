function appAnalytic() {
    let counter = 0;
    let isDestroyed = false;
    const listener = () => counter++;

    document.addEventListener('click', listener);

    return {
        get destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        get click() {
            return isDestroyed ? 'appAnalytic Destroyed' : counter;
        }
    }
}
window.analytics=appAnalytic();
