/** 
 * При клике на кнопку “Выбрать клуб”
 * открывается выпадающее меню (есть в верстке)
 */

export function popup() {
    const clubSelect = document.querySelector(".club-select");
    const clubSelectList = document.querySelector(".clubs-list ul");

    clubSelect.addEventListener("click", () => {
        if (clubSelectList.classList.contains("display-block")) {
            clubSelectList.classList.add("display-none");
            clubSelectList.classList.remove("display-block");
        } else {
            clubSelectList.classList.add("display-block");
            clubSelectList.classList.remove("display-remove");
        }
    })
}