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
// const mainSlider = document.querySelectorAll(".main-slider .slide");
// setInterval(() => {
//     if(count == 5) count = 0;
//     mainSlider[count].classList.add("slide-active");
//     mainSlider[mainSlider.length-1].classList.remove("slide-active");
//     if (count > 0) {
//         mainSlider[count].classList.add("slide-active");
//         mainSlider[count-1].classList.remove("slide-active");
//     }
//     count++;
// }, 1000)

/** 
 * Реализовать сладер #2
 */

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const servicesSlider = document.querySelector(".services-slider");
const servicesSlides = servicesSlider.querySelectorAll(".slide");
const overlayWidth = parseInt(window.getComputedStyle(servicesSlider).width);
let offset = 0;

arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    offset += 225;
    if (offset > overlayWidth){
        offset = 0;
    }
    servicesSlides.forEach(slide => {
        slide.style.transform = `translateX(-${offset}px)`;
    })
    console.log(offset);   
})

arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    offset -= 225;
    if (offset < 0) {
        offset = overlayWidth;
    }
    servicesSlides.forEach(slide => {
        slide.style.transform = `translateX(-${offset}px)`;
    })
    console.log(offset);
})

/** 
 * Реализовать слайдер #3
 */

const gallerySlider = document.querySelector(".gallery-slider");
const gallerySlides = gallerySlider.querySelectorAll(".slide")
const galleryBtnRight = gallerySlider.querySelector("#arrow-right");
const galleryBtnLeft = gallerySlider.querySelector("#arrow-left");
const galleryDots = document.querySelectorAll(".portfolio-dots li");

let galleryIndex = 0

galleryBtnRight.addEventListener("click", (e) => {
    e.preventDefault();
    galleryIndex++;
    if (galleryIndex == 5)  galleryIndex = 0;
    if (galleryIndex == 0) {
        gallerySlides[galleryIndex].classList.add("slide-active");
        gallerySlides[gallerySlides.length-1].classList.remove("slide-active");
        galleryDots[galleryIndex].classList.add("dot-active");
        galleryDots[galleryDots.length-1].classList.remove("dot-active");
    }
    if (galleryIndex > 0) {
        gallerySlides[galleryIndex].classList.add("slide-active");
        gallerySlides[galleryIndex-1].classList.remove("slide-active");
        galleryDots[galleryIndex].classList.add("dot-active");
        galleryDots[galleryIndex-1].classList.remove("dot-active");
    } 
})

galleryBtnLeft.addEventListener("click", (e) => {
    e.preventDefault();
    galleryIndex--;
    if (galleryIndex < 0) galleryIndex = 4;

    if (galleryIndex == 4) {
        gallerySlides[galleryIndex].classList.add("slide-active");
        gallerySlides[0].classList.remove("slide-active");
        galleryDots[galleryIndex].classList.add("dot-active");
        galleryDots[0].classList.remove("dot-active");
    }
    if (galleryIndex < 4) {
        gallerySlides[galleryIndex].classList.add("slide-active");
        gallerySlides[galleryIndex + 1].classList.remove("slide-active");
        galleryDots[galleryIndex].classList.add("dot-active");
        galleryDots[galleryIndex + 1].classList.remove("dot-active");
    }    
} ) 

/** 
 * Реализовать калькулятор цены взять со страниц клубов
 * 
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
            }
            else {
                price.textContent = "2990"
            }
            formBtn = "m1";
            break;
        }
        case "m2": {
            if (inputMozaika.checked) {
                price.textContent = "9900"
                
            }
            else {
                price.textContent = "14990"
            }
            formBtn = "m2";
            break;
        }
        case "m3": {
            if (inputMozaika.checked) {
                price.textContent = "13900"
            }
            else {
                price.textContent = "21990"
            }
            formBtn = "m3";
            break;
        }
        case "m4": {
            if (inputMozaika.checked) {
                price.textContent = "19900"
            }
            else {
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

// cardOrder.addEventListener("change", (e) => {
//     console.log(e.target.id)
//     switch(e.target.id) {
//         case "m1": {
//             if (inputMozaika.checked) {
//                 price.textContent = "1999"
//             }
//             else {
//                 price.textContent = "2999"
//             }
//             break;
//         }
//         case "m2": {
//             if (inputMozaika.checked) {
//                 price.textContent = "9900"
//             }
//             else {
//                 price.textContent = "14990"
//             }
//             break;
//         }
//         case "m3" : {
//             if (inputMozaika.checked) {
//                 price.textContent = "13900"
//             }
//             else {
//                 price.textContent = "21990"
//             }
//             break;
//         }
//         case "m4": {
//             if (inputMozaika.checked) {
//                 price.textContent = "19900"
//             }
//             else {
//                 price.textContent = "24990"
//             }
//             break;
//         }
//     }
    
// })

// priceBtns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         switch (e.target.textContent) {
//             case "1 месяц": {
//                 if (inputMozaika.checked) {
//                     price.textContent = "1999"
//                 }
//                 else {
//                     price.textContent = "2999"
//                 }
//                 break;
//             }
//             case "6 месяцев": {
//                 if (inputMozaika.checked) {
//                     price.textContent = "9900"
//                 }
//                 else {
//                     price.textContent = "14990"
//                 }
//                 break;
//             }
//             case "9 месяцев": {
//                 if (inputMozaika.checked) {
//                     price.textContent = "13900"
//                 }
//                 else {
//                     price.textContent = "21990"
//                 }
//                 break;
//             }
//             case "12 месяцев": {
//                 if (inputMozaika.checked) {
//                     price.textContent = "19900"
//                 }
//                 else {
//                     price.textContent = "24990"
//                 }
//                 break;
//             }
//         }

//     }
//     )
// })
