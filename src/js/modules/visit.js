/** 
 * При клике на эту надпись открывается модальное окно id=’free_visit_form’
 * При нажатии на крестик или подложку - исчезать.
 */

export function visit() {
    const freeVisit = document.querySelector(".free-visit p a");
    const freeVisitForm = document.querySelector("#free_visit_form");


    freeVisit.addEventListener("click", () => {
        freeVisitForm.classList.add("display-block");
    })

}