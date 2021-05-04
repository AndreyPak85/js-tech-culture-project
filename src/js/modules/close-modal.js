export function closeModal(selector) {

    const closeElement = document.querySelectorAll(selector);

    closeElement.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll('.popup').forEach(item => {
                item.classList.remove('display-block');
            })
        })

    })
}