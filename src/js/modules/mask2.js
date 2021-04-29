export const mask = (selector) => {

    const setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(e) {
        const template = "+7 (___) ___ __ __";
        let i = 0;
        let def = template.replace(/\D/g, '');
        let value = this.value.replace(/\D/g, '');

        if (def.length >= value.length) {
            value = def;
        }

        this.value = template.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a
        })

        if (e.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    const inputs = document.querySelectorAll(selector);

    input.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });

}