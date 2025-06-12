import { refs } from './refs.js';

export function onBtnOpenMenuClick() {
  refs.headerMenuContainer.classList.add('is-open');
  window.addEventListener('resize', onWindowResizeCloseMenu);

  refs.menuAnchorAbout.addEventListener('click', onBtnCloseMenuClick);
  refs.menuAnchorArtists.addEventListener('click', onBtnCloseMenuClick);
  refs.menuAnchorReviews.addEventListener('click', onBtnCloseMenuClick);
}

export function onBtnCloseMenuClick() {
  refs.headerMenuContainer.classList.remove('is-open');
  window.removeEventListener('resize', onWindowResizeCloseMenu);

  refs.menuAnchorAbout.removeEventListener('click', onBtnCloseMenuClick);
  refs.menuAnchorArtists.removeEventListener('click', onBtnCloseMenuClick);
  refs.menuAnchorReviews.removeEventListener('click', onBtnCloseMenuClick);
}

function onWindowResizeCloseMenu() {
  if (window.innerWidth >= 768) {
    refs.headerMenuContainer.classList.remove('is-open');
    window.removeEventListener('resize', onWindowResizeCloseMenu);
  }
}
