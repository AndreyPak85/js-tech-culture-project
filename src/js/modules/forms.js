export function forms() {
    /** 
     * Все формы на странице и в модальных окнах должны отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. 
     * Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). 
     * В последних двух состояниях необходимо заменить сам контент модального окна на оповещение. 
     * Необходима маска или валидация номера телефона (нужное кол-во чисел, код). 
     * Заполнение имени и комментария - только на русском языке.
     */



    // const sendForm = (form) => {
    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //         mess.textContent = message.loading;
    //         const formData = new FormData(form);
    //         fetch("server.php", {
    //             method: "POST",
    //             body: formData,
    //         })
    //             .then((response) => {

    //                 return(response.text())
    //             })
    //             .then((text) => console.log(text))
    //             .catch((error) =>
    //             {
    //                 mess.textContent = message.failure;
    //             })    
    //     mess.textContent = message.success;
    // })
    // }

    // forms.forEach((form) => sendForm(form));






    // bannerForm.addEventListener("submit", (e) => {
    //     e.preventDefault();

    //     fetch("https://jsonplaceholder.typicode.com/posts", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name: "AP",
    //             body: 'andrey',
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         }
    //     }).then((response) => response.json())
    //         .then((json) => console.log(json));




    // })


    // const sendFormData = (form) => {
    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault;
    //         const formData = new FormData(form);
    //         console.log(formData);
    //     })


    //     // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     //     method: "POST",
    //     //     headers: {'Content-type': 'application/json; charset=UTF-8'},
    //     //     body: formData,  
    //     // })
    //     //     .then(response =>  response.json())
    //     //     .then(json => console.log(json))
    // }



    /** 
     * Форма отправки данных, запретить отправку если не стоит галочка согласен на обработку данных и 
     * сообщить пользователю что необходимо подтвердить согласие.
     * После отправки данных вывести модальное окно c id="thanks" 
     * в котором сообщение об успешной отправки или об ошибке если отправка не удалась
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
                thanksModal.classList.add("display-block")
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