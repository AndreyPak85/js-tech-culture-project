export function forms() {
    /** 
     * Все формы на странице и в модальных окнах должны отправляться посредством 
     * ajax(без перезагрузки страницы) и захватывать все введенные данные. 
     * Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). 
     * В последних двух состояниях необходимо заменить сам контент модального окна на оповещение. 
     * Необходима маска или валидация номера телефона (нужное кол-во чисел, код). 
     * Заполнение имени и комментария - только на русском языке.
     */

    // Callback form    
    const form1 = document.querySelector("#form1")
    const check = document.querySelector("#check");
    const divMessage1 = document.createElement("div")
    divMessage1.style.color = "white";
    divMessage1.style.fontSize = "18px";
    form1.append(divMessage1);

    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        thanksModal.classList.add("display-block")
        divMessage1.textContent = "Идет отправка ";
        const formData = new FormData(form1);
        if (check.checked) {
            fetch("server.php", {
                    method: "POST",
                    body: formData
                })
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    divMessage1.textContent = "Данные отправлены";
                    console.log(text)
                })
                .catch((error) => {
                    divMessage1.textContent = "Возникла ошибка";
                    thanksModalFormContent.textContent = "НЕ УДАЧА!"
                    thanksModalFormContentP.textContent = "Что то случилось не так, Ваша форма не отправлена"
                    thanksModal.classList.add("display-block");
                    setTimeout(() => {
                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    console.log(error)
                })
        } else {
            divMessage1.textContent = "Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие";
        }
    })

    //Visit form
    const form2 = document.querySelector("#form2");
    const check2 = document.querySelector("#check2");
    const divMessage2 = document.createElement("div")
    divMessage2.style.color = "white";
    divMessage2.style.fontSize = "18px";
    form2.append(divMessage2);

    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        thanksModal.classList.add("display-block")
        thanksModalFormContent.textContent = "Отправка!"
        thanksModalFormContentP.textContent = "Данные отправляются"
        divMessage2.textContent = "Идет отправка";
        const formData = new FormData(form2);
        if (check2.checked) {
            fetch("server.php", {
                    method: "POST",
                    body: formData
                })
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    console.log(text)
                    thanksModalFormContent.textContent = "УДАЧА"
                    thanksModalFormContentP.textContent = "Данные отправлены"
                    setTimeout(() => {

                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    divMessage2.textContent = "Данные отправлены";
                })
                .catch((error) => {
                    divMessage2.textContent = "Возникла ошибка"
                    thanksModalFormContent.textContent = "НЕ УДАЧА!"
                    thanksModalFormContentP.textContent = "Что то случилось не так, Ваша форма не отправлена"
                    thanksModal.classList.add("display-block");
                    setTimeout(() => {
                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    console.log(error)
                })
        } else {
            divMessage2.textContent = "Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие";
        }
    })

    //Card order

    const cardForm = document.querySelector("#card_order");
    const cardMessage = document.createElement("div");
    const cardCheck = document.querySelector("#card_check");
    cardMessage.style.fontSize = "18px";
    cardForm.append(cardMessage);
    cardForm.addEventListener("submit", (e) => {
        e.preventDefault();
        thanksModal.classList.add("display-block")
        thanksModalFormContent.textContent = "Отправка!"
        thanksModalFormContentP.textContent = "Данные отправляются"
        cardMessage.textContent = "Идет отправка";
        const formData = new FormData(cardForm);
        if (cardCheck.checked) {
            fetch("server.php", {
                    method: "POST",
                    body: formData
                })
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    console.log(text)
                    thanksModalFormContent.textContent = "УДАЧА"
                    thanksModalFormContentP.textContent = "Данные отправлены"
                    setTimeout(() => {

                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    cardMessage.textContent = "Данные отправлены"
                })
                .catch((error) => {
                    cardMessage.textContent = "Возникла ошибка"
                    thanksModalFormContent.textContent = "НЕ УДАЧА!"
                    thanksModalFormContentP.textContent = "Что то случилось не так, Ваша форма не отправлена"
                    thanksModal.classList.add("display-block");
                    setTimeout(() => {
                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    console.log(error)
                })
        } else {
            cardMessage.textContent = "Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие";
        }
    })

    // Необходима маска или валидация номера телефона (нужное кол-во чисел, код). 
    // Mask



    /** 
     * Форма отправки данных, запретить отправку если не стоит галочка согласен на обработку данных и 
     * сообщить пользователю что необходимо подтвердить согласие.
     * После отправки данных вывести модальное окно c id="thanks" 
     * в котором сообщение об успешной отправки или об ошибке если отправка не удалась
     * 

     */


    const thanksModal = document.querySelector("#thanks");
    const bannerForm = document.querySelector("#banner-form");
    const check1 = document.querySelector("#check1");
    const message1 = document.createElement("div")
    message1.style.fontSize = "24px";
    message1.style.marginTop = "20px";
    bannerForm.append(message1)

    bannerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        message1.textContent = "Данные отправляются";
        if (check1.checked) {
            message1.textContent = "";
            const formData = new FormData(bannerForm);
            fetch("server.php", {
                    method: "POST",
                    body: formData
                })
                .then((response) => {
                    return response.text()
                })
                .then((text) => {
                    console.log(text)
                    message1.textContent = "Данные отправлены!"
                    thanksModal.classList.add("display-block")
                    setTimeout(() => {
                        thanksModal.classList.remove("display-block")
                    }, 3000)
                })
                .catch((error) => {
                    message1.textContent = "Отправка не удалась";
                    thanksModalFormContent.textContent = "НЕ УДАЧА!"
                    thanksModalFormContentP.textContent = "Что то случилось не так, Ваша форма не отправлена"
                    thanksModal.classList.add("display-block");
                    setTimeout(() => {
                        thanksModal.classList.remove("display-block")
                    }, 3000)
                    console.log(error)

                })
        } else {
            message1.textContent = "Не стоит галочка согласен на обработку данных, необходимо подтвердить согласие";
        }
    })

    const removeDisplayBlock = (element) => {
        element.classList.remove("display-block");
    }

    const thanksModalOverlay = thanksModal.querySelector(".overlay");
    const thanksModalClose = thanksModal.querySelector(".close-form img");
    const thanksModalCloseBtn = thanksModal.querySelector(".close-btn");
    const thanksModalFormContent = thanksModal.querySelector(".form-content h4")
    const thanksModalFormContentP = thanksModal.querySelector(".form-content p")

    thanksModalOverlay.addEventListener("click", () => {
        removeDisplayBlock(thanksModal);
    });
    thanksModalClose.addEventListener("click", () => {
        removeDisplayBlock(thanksModal);
    });
    thanksModalCloseBtn.addEventListener("click", () => {
        removeDisplayBlock(thanksModal);
    })


    /** 
     * Отправка формы должна передать данные по выбраному клубу и номер телефона, маска или валидация обязательна, 
     * после отправки открыть модальное окно с id="thanks" и если отправка была неудачной сообщить в модальном окне о неудачной отправке
     */

    const footerForm = document.querySelector("#footer_form");

    footerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        thanksModal.classList.add("display-block")

        const formData = new FormData(footerForm);
        fetch("server.php", {
                method: "POST",
                body: formData
            })
            .then((response) => {
                return response.text()
            })
            .then((text) => {
                console.log(text)
                setTimeout(() => {
                    thanksModal.classList.remove("display-block")
                }, 3000)
            })
            .catch((error) => {
                thanksModalFormContent.textContent = "НЕ УДАЧА!"
                thanksModalFormContentP.textContent = "Что то случилось не так, Ваша форма не отправлена"
                thanksModal.classList.add("display-block");
                setTimeout(() => {
                    thanksModal.classList.remove("display-block")
                }, 3000)
                console.log(error)

            })

    })
}