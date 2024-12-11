export function setDelay(callback,time) {
    setTimeout(() => {
        callback();
    }, time);
}