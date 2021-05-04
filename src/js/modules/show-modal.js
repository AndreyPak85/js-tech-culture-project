export function showModal(selector, showElement) {

    const clickModal = document.querySelector(selector);
    const showModal = document.querySelector(showElement);

    clickModal.addEventListener('click', () => {
        showModal.classList.add('display-block');
    })
}