import {popup} from './modules/popup';
import {visit} from './modules/visit';
import {callback} from './modules/callback';
import {gift} from './modules/gift';
import {sliders} from './modules/sliders';
import {calc} from './modules/calc';
import {forms} from './modules/forms';
import {favicon} from './modules/favicon';
import {mask} from './modules/mask';
import {checkTextInputs} from './modules/checkRu';

popup();
visit();
callback();
gift();
sliders();
calc();
forms();
favicon();
mask('[name="phone"]')
checkTextInputs('[name="name"]');