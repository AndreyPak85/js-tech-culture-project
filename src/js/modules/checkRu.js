/**
 * Заполнение имени и комментария - только на русском языке. 
 */

export const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^а-я 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};