/** 
 * При клике на эту надпись открывается модальное окно id=’free_visit_form’
 * При нажатии на крестик или подложку - исчезать.
 */

export function visit() {
    const freeVisit = document.querySelector(".free-visit p a");
    const freeVisitForm = document.querySelector("#free_visit_form");
    const formCloseImg = document.querySelectorAll(".close-form");
    const formOverlay = document.querySelectorAll(".overlay");

    freeVisit.addEventListener("click", () => {
        freeVisitForm.classList.add("display-block");
    })

    formCloseImg.forEach(item => {
        item.addEventListener("click", (e) => {
            freeVisitForm.classList.remove("display-block");
            callbackForm.classList.remove("display-block");
            giftModal.classList.remove("display-block");
        })
    })

    formOverlay.forEach(item => {
        item.addEventListener("click", () => {
            freeVisitForm.classList.remove("display-block");
            callbackForm.classList.remove("display-block");
            giftModal.classList.remove("display-block");
        })
    })
}