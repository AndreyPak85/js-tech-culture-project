/** 
 * При клике открывается модальное окно id="callback_form"
 * При нажатии на крестик или подложку - исчезать.
 */
export function callback() {

    const callbackBtn = document.querySelectorAll(".callback-btn");
    const callbackForm = document.querySelector("#callback_form");



    callbackBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            callbackForm.classList.add("display-block");
        })
    })
}