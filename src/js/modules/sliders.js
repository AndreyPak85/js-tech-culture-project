function sliderMain(selector) {

    let count = 0;
    const mainSlider = document.querySelectorAll(selector);
    setInterval(() => {
        if (count == 5) count = 0;
        mainSlider[count].classList.add("slide-active");
        mainSlider[mainSlider.length - 1].classList.remove("slide-active");
        if (count > 0) {
            mainSlider[count].classList.add("slide-active");
            mainSlider[count - 1].classList.remove("slide-active");
        }
        count++;
    }, 1000)

}


function sliderPortfolio(selector) {
    const portfolioSlider = document.querySelector(selector);
    const portfolioRight = portfolioSlider.querySelector('#arrow-right');
    const portfolioLeft = portfolioSlider.querySelector('#arrow-left');
    const portfolioSlides = portfolioSlider.querySelectorAll('.slide');
    const portfolioDots = portfolioSlider.querySelectorAll('.dot');

    let portfolioIndex = 0;

    portfolioRight.addEventListener('click', (e) => {
        e.preventDefault();
        portfolioIndex++;
        if (portfolioIndex == 5) portfolioIndex = 0;
        if (portfolioIndex == 0) {
            portfolioSlides[portfolioIndex].classList.add("slide-active");
            portfolioSlides[portfolioSlides.length - 1].classList.remove("slide-active");
            portfolioDots[portfolioIndex].classList.add("dot-active");
            portfolioDots[(portfolioDots.length - 1)].classList.remove('dot-active');
        }

        if (portfolioIndex > 0) {
            portfolioSlides[portfolioIndex].classList.add("slide-active");
            portfolioSlides[portfolioIndex - 1].classList.remove("slide-active");
            portfolioDots[portfolioIndex].classList.add("dot-active");
            portfolioDots[portfolioIndex - 1].classList.remove("dot-active");
        }
    })

    portfolioLeft.addEventListener('click', (e) => {
        e.preventDefault();
        portfolioIndex--;
        if (portfolioIndex < 0) portfolioIndex = 4;
        if (portfolioIndex == 4) {
            portfolioSlides[portfolioIndex].classList.add("slide-active");
            portfolioSlides[0].classList.remove("slide-active");
            portfolioDots[portfolioIndex].classList.add("dot-active");
            portfolioDots[0].classList.remove("dot-active");
        }
        if (portfolioIndex < 4) {
            portfolioSlides[portfolioIndex].classList.add("slide-active");
            portfolioSlides[portfolioIndex + 1].classList.remove("slide-active");
            portfolioDots[portfolioIndex].classList.add("dot-active");
            galleryDots[portfolioIndex + 1].classList.remove("dot-active");
        }
    })
}


function sliderService(selector) {
    const servicesSlider = document.querySelector(selector);
    const arrowLeft = servicesSlider.querySelector("#arrow-left");
    const arrowRight = servicesSlider.querySelector("#arrow-right");
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
    })
}


export {
    sliderMain,
    sliderPortfolio,
    sliderService
};