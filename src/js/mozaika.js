import {
    sliderMain,
    sliderPortfolio,
    sliderService
} from './modules/sliders.js';

import {
    favicon
} from './modules/favicon.js';

sliderMain(".main-slider .slide");
sliderPortfolio('.gallery-slider');
sliderService('.services-slider')

favicon();