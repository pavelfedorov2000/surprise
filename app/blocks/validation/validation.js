app.validation = {
    name: 'validation',
    description: 'your script description',
    init() {
        const form = document.querySelector('.js-form');

        let defaultConfig = {
            // class of the parent element where the error/success class is added
            classTo: 'form__field',
            errorClass: 'error',
            successClass: 'success',
            // class of the parent element where error text element is appended
            errorTextParent: 'form__field',
            // type of element to create for the error text
            errorTextTag: 'span',
            // class of the error text element
            errorTextClass: 'error-text'
        };

        // create the pristine instance
        let pristine = new Pristine(form, defaultConfig);

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            pristine.validate(); // returns true or false
        });

        //const phoneInput = document.querySelector('input[type=tel]');

        /* pristine.addValidator(phoneInput, function (value) {
            if (value.replace(/\D+/g, '').length > 0) {
                return true;
            }
            return false;
        }, "Некорректный номер", 2, false); */

        // phone mask
        //$("input[type=tel]").mask("+375 (99) 999-99-99");
    },
};