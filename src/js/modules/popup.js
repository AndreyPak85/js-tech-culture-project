/** 
 * При клике на кнопку “Выбрать клуб”
 * открывается выпадающее меню (есть в верстке)
 */

export function popup(selector, selectorDisplay) {

    const popupClick = document.querySelector(selector);
    const popupDisplay = document.querySelector(selectorDisplay)


    popupClick.addEventListener("click", (e) => {
        popupDisplay.classList.toggle('display-block');
    })

}