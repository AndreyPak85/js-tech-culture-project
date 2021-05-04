import {
    popup
} from './modules/popup';

import {
    showModal
} from './modules/show-modal';


import {
    sliders
} from './modules/sliders';

import {
    calc
} from './modules/calc';

import {
    forms
} from './modules/forms';

import {
    favicon
} from './modules/favicon';

import {
    mask
} from './modules/mask';

import {
    checkTextInputs
} from './modules/checkRu';


import {
    closeModal
} from './modules/close-modal';

import {
    gift
} from './modules/gift';

popup('.clubs-list', '.clubs-list ul');

sliders();
calc();
forms();
favicon();
mask('[name="phone"]')
checkTextInputs('[name="name"]');


showModal('[data-popup="#free_visit_form"]', '#free_visit_form');
showModal('[data-popup="#callback_form"]', '#callback_form');
gift('.fixed-gift', '#gift');

closeModal('.overlay')
closeModal('.close-form')