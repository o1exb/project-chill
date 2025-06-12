import { refs } from './refs.js';
import { onBtnOpenMenuClick, onBtnCloseMenuClick } from './handlers';

refs.burgerBtnOpenMenu.addEventListener('click', onBtnOpenMenuClick);
refs.burgerBtnCloseMenu.addEventListener('click', onBtnCloseMenuClick);
