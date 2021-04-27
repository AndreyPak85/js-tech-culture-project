const clubSelect = document.querySelector(".club-select");
const clubSelectList = document.querySelector(".clubs-list ul");

clubSelect.addEventListener("click", () => {
    if (clubSelectList.classList.contains("display-block")) {
        clubSelectList.classList.add("display-none"); 
        clubSelectList.classList.remove("display-block");
    }
    else {
        clubSelectList.classList.add("display-block");
        clubSelectList.classList.remove("display-remove");
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
 
/** 
 * При клике на подарок должно появляться модальное окно (id="gift") и сам подарок полностью исчезает со страницы. 
 * При нажатии на крестик или подложку окно исчезает.
 */

const gift = document.querySelector(".fixed-gift");
const giftModal = document.querySelector("#gift");

gift.addEventListener("click", (e) => {
    giftModal.classList.add("display-block");
    e.target.classList.add("display-none");
})

/**
 * На первой странице реализовать слайдер
 */
let count = 0;
const mainSlider = document.querySelectorAll(".main-slider .slide");
setInterval(() => {
    if(count == 5) count = 0;
    mainSlider[count].classList.add("slide-active");
    mainSlider[mainSlider.length-1].classList.remove("slide-active");
    if (count > 0) {
        mainSlider[count].classList.add("slide-active");
        mainSlider[count-1].classList.remove("slide-active");
    }
    count++;
}, 1000)

