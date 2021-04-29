/** 
 * При клике на подарок должно появляться модальное окно (id="gift") и сам подарок полностью исчезает со страницы. 
 * При нажатии на крестик или подложку окно исчезает.
 */

export function gift() {
    const gift = document.querySelector(".fixed-gift");
    const giftModal = document.querySelector("#gift");

    gift.addEventListener("click", (e) => {
        giftModal.classList.add("display-block");
        e.target.classList.add("display-none");
    })
}