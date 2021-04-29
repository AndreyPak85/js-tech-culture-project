export function calc() {
    /** 
     * Реализовать калькулятор цены взять со страниц клубов
     * 
     */

    const price = document.querySelector("#price-total");
    const inputMozaika = document.querySelector("#card_leto_mozaika");
    const inputShelkovo = document.querySelector("#card_leto_schelkovo");
    const priceBtns = document.querySelectorAll(".time label");
    const cardOrder = document.querySelector("#card_order");
    const promoCode = document.querySelector(".price-message input")

    let secretCode = "ТЕЛО2019"
    let chkWord = '';

    promoCode.addEventListener("input", (e) => {
        chkWord = e.target.value;
    })

    let formBtn = ''
    const getPrice = (btn) => {
        if (btn == "card_leto_schelkovo") btn = formBtn;
        if (btn == "card_leto_mozaika") btn = formBtn;

        switch (btn) {
            case "m1": {
                if (inputMozaika.checked) {
                    price.textContent = "1990";
                } else {
                    price.textContent = "2990"
                }
                formBtn = "m1";
                break;
            }
            case "m2": {
                if (inputMozaika.checked) {
                    price.textContent = "9900"

                } else {
                    price.textContent = "14990"
                }
                formBtn = "m2";
                break;
            }
            case "m3": {
                if (inputMozaika.checked) {
                    price.textContent = "13900"
                } else {
                    price.textContent = "21990"
                }
                formBtn = "m3";
                break;
            }
            case "m4": {
                if (inputMozaika.checked) {
                    price.textContent = "19900"
                } else {
                    price.textContent = "24990"
                }
                formBtn = "m4";
                break;
            }
        }
    }

    const checkPromo = (word) => {
        if (word.value.toLowerCase() == secretCode.toLowerCase()) {
            price.textContent = Math.round(parseInt(price.textContent) * 0.7)
        }
    }

    cardOrder.addEventListener("change", (e) => {
        getPrice(e.target.id);
        checkPromo(e.target);
    });



}