(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (form.checkValidity()) {

                var stat = SaveData()

                event.preventDefault();
                if (stat == true) {

                    form.classList.remove('was-validated');
                }
            } else {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }

            event.preventDefault();
        }, false);
    });
})();