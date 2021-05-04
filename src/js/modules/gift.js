/** 
 * При клике на подарок должно появляться модальное окно (id="gift") и сам подарок полностью исчезает со страницы. 
 * При нажатии на крестик или подложку окно исчезает.
 */

import {
    showModal
} from './show-modal';

export function gift(selector, showElement) {

    showModal(selector, showElement)
    document.querySelector(selector).addEventListener('click', (e) => {
        e.target.remove();
    })
}