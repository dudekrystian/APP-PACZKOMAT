
export class Form {
    constructor(form) {
        this.form = form;
        this.inputNumber = document.getElementById('phoneNumber');
        this.inputCode = document.getElementById('codeNumber');
        this.numberPhone = 0;
        this.numberCode = 0;
        this.labelErrorPhone = document.getElementById('errorPhone');
        this.labelErrorCode = document.getElementById('errorCode');
        this.formCorrect = false;
    }


    ChangeOnDisplay = () => {
        this.form.style.display = "block";
    }

    hide = () => {
        this.form.style.display = "none";
    }

    getValuePhoneNumber = () => {

        let inputValuePhoneNumber;
        this.inputNumber.addEventListener('change', (e) => {
            inputValuePhoneNumber = e.target.value;

            if ((inputValuePhoneNumber.length !== 9)) {

                if (inputValuePhoneNumber.length < 9) {
                    this.labelErrorPhone.innerText = "numer za krótki";
                }

                else {
                    this.labelErrorPhone.innerText = "numer za długi";
                }
            }

            else {
                this.labelErrorPhone.innerText = '';
                this.numberPhone = inputValuePhoneNumber;
                return this.numberPhone;
            }
        })
    }

    resetAllInput = () => {
        this.numberCode = '';
        this.numberPhone = '';
        this.inputNumber.innerText = 'Numer telefonu:';
        this.inputCode.innerText = 'Numer kodu:'
        this.labelErrorCode.innerText = '';
        this.labelErrorPhone.innerText = '';
    }

    getValueCodeNumber = () => {
        let inputValueCodeNumber = '';

        this.inputCode.addEventListener('change', (e) => {
            inputValueCodeNumber = e.target.value;

            if ((inputValueCodeNumber.length !== 4)) {

                if (inputValueCodeNumber.length < 4) {
                    this.labelErrorCode.innerText = "numer za krótki";
                }
                else {
                    this.labelErrorCode.innerText = "numer za długi ";
                }
            }
            else {
                this.numberCode = inputValueCodeNumber;
                this.labelErrorCode.innerText = '';
                return this.numberCode;
            }
        })
    }

}

