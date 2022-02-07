import { Loader } from './Loader.js';
import { Form } from './Form.js';

// example value for test
let numberOfPhone = 111111111;
let numberOfCode = 1111;

class Panel {
    constructor({ buttonStart, buttonCheck, buttonReset, buttonAgain, loader, form, modal }) {
        this.buttonStart = buttonStart;
        this.buttonCheck = buttonCheck;
        this.buttonReset = buttonReset;
        this.buttonAgain = buttonAgain;
        this.loader = loader;
        this.form = form;
        this.modal = modal;
    }

    init = (e) => {
        this.buttonStart.addEventListener('click', this.start);
        this.buttonCheck.addEventListener('click', this.check);
        this.buttonReset.addEventListener('click', this.reset);
        this.buttonAgain.addEventListener('click', this.again);
    }

    start = (e) => {
        Promise.all([
            new Promise(resolve => setTimeout(() => this.loader.addLoader(),)),
            new Promise(resolve => setTimeout(() => this.form.ChangeOnDisplay(), 1000)),
            new Promise(resolve => setTimeout(() => this.changeButtons(), 1000)),
        ])
        this.form.getValueCodeNumber();
        this.form.getValuePhoneNumber();
    }

    check = () => {

        if (form.numberPhone == numberOfPhone && form.numberCode == numberOfCode) {
            form.resetAllInput();
            Promise.all([

                new Promise(resolve => setTimeout(() => loader.addLoader(),)),
                new Promise(resolve => setTimeout(() => this.displayModal(), 1000)),

            ])
        } else {

            if (form.numberPhone !== numberOfPhone) {
                form.labelErrorPhone.innerText = 'niepoprawny numer telefonu - wpisz ponownie';
            }

            if (form.numberCode !== numberOfCode) {
                form.labelErrorCode.innerText = 'niepoprawny numer kodu - wpisz ponownie';
            }
        }
    }

    reset = () => {
        Promise.all([
            new Promise(resolve => setTimeout(() => loader.addLoader(),)),
            new Promise(resolve => setTimeout(() => this.goToStart(), 1000)),
        ])
    }

    again = () => {
        Promise.all([
            new Promise(resolve => setTimeout(() => loader.addLoader(),)),
            new Promise(resolve => setTimeout(() => this.goToForm(), 1000)),

        ])
    }

    changeButtons = () => {
        this.buttonStart.style.display = 'none';
        this.buttonCheck.style.display = 'block';
    }

    displayModal = () => {
        this.modal.style.display = "block";
    }

    goToStart = () => {
        modal.style.display = "none";
        form.hide();
        buttonCheck.style.display = 'none';
        buttonStart.style.display = 'block';
    }

    goToForm = () => {
        modal.style.display = "none";
    }

}

const form = new Form(document.getElementById('form'));
const loader = new Loader();
const modal = document.querySelector('.modal');
const panel = new Panel({
    buttonStart: document.getElementById('buttonStart'),
    buttonCheck: document.getElementById('buttonCheck'),
    buttonReset: document.getElementById('buttonReset'),
    buttonAgain: document.getElementById('buttonAgain'),
    loader,
    form,
    modal,
});

panel.init();

