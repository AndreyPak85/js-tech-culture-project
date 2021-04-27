const clubSelect = document.querySelector(".club-select");
const clubSelectList = document.querySelector(".clubs-list ul");

clubSelect.addEventListener("click", () => {
    if (clubSelectList.classList.contains("display-block")) {
        clubSelectList.classList.add("display-none"); 
        clubSelectList.classList.remove("display-block");
        console.log('added')
    }
    else {
        clubSelectList.classList.add("display-block");
        clubSelectList.classList.remove("display-remove");
        console.log('removed')
    }
})

/** 
 * @author AP 
 * При клике на эту надпись открывается модальное окно id=’free_visit_form’
 * При нажатии на крестик или подложку - исчезать.
 */

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
    })
})

formOverlay.forEach(item => {
    item.addEventListener("click", () => {
        freeVisitForm.classList.remove("display-block");
        callbackForm.classList.remove("display-block");

    })
})

/** 
 * При клике открывается модальное окно id="callback_form"
 * При нажатии на крестик или подложку - исчезать.
 */

 const callbackBtn = document.querySelectorAll(".callback-btn");
 const callbackForm = document.querySelector("#callback_form");
 
 
 
 callbackBtn.forEach( btn => {
     btn.addEventListener("click", () => {
        callbackForm.classList.add("display-block"); 
     })
 })
 

 