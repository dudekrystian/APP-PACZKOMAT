export const LOADER_TIME = 1000;

export class Loader {
    constructor() {
        this.loader = document.createElement('div');
    }

    addLoader = () => {
        const body = document.querySelector('body');
        body.appendChild(this.loader);
        this.loader.classList.add('loader');
        setTimeout(this.endLoader, LOADER_TIME);
    }

    endLoader = () => {
        this.loader.remove();
    }
}