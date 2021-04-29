export function sliders() {
    /**
     * На первой странице реализовать слайдер
     */
    let count = 0;
    const mainSlider = document.querySelectorAll(".main-slider .slide");
    setInterval(() => {
        if (count == 5) count = 0;
        mainSlider[count].classList.add("slide-active");
        mainSlider[mainSlider.length - 1].classList.remove("slide-active");
        if (count > 0) {
            mainSlider[count].classList.add("slide-active");
            mainSlider[count - 1].classList.remove("slide-active");
        }
        count++;
    }, 3000)



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
        if (offset > overlayWidth) {
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
        if (galleryIndex == 5) galleryIndex = 0;
        if (galleryIndex == 0) {
            gallerySlides[galleryIndex].classList.add("slide-active");
            gallerySlides[gallerySlides.length - 1].classList.remove("slide-active");
            galleryDots[galleryIndex].classList.add("dot-active");
            galleryDots[galleryDots.length - 1].classList.remove("dot-active");
        }
        if (galleryIndex > 0) {
            gallerySlides[galleryIndex].classList.add("slide-active");
            gallerySlides[galleryIndex - 1].classList.remove("slide-active");
            galleryDots[galleryIndex].classList.add("dot-active");
            galleryDots[galleryIndex - 1].classList.remove("dot-active");
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
    })

}