import { getArtists, getGenres } from './artists-api';
import { renderArtistCards } from './render-functions';
import { refs } from './refs';
import svgArrowsBasePuth from '../img/sprite.svg?url';

let currentPage = 1;
let selectedGenre = '';
let selectedSort = '';
let searchValue = '';
const perPage = 8;

const searchInput = document.getElementById('searchInput');
const genreDropdown = document.getElementById('genreDropdown');
const genreToggle = document.getElementById('genreToggle');
const genreList = document.getElementById('genreList');
const sortingDropdown = document.getElementById('sortingDropdown');
const sortingToggle = document.getElementById('sortingToggle');
const sortingList = document.getElementById('sortingList');
const resetBtn = document.getElementById('resetBtn');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const iconArrowOpenCloseContainer = document.querySelector('.icon-chevron');
const artistsCard = document.getElementById('artists-card-id');
const spinner = document.querySelector('.spinner');
const artistsGrid = refs.artistsGrid;
const loadMoreBtn = refs.loadMoreBtn;
const emptyState = document.getElementById('emptyState');
const searchAndFiltersOpener = document.querySelector(
  '.search-and-filters-opener'
);
const filtersPanelForm = document.querySelector('.filters-panel');
const scrollToTopBtn = document.querySelector('.scrollBtnUp');

// --- Dropdown logic (only one open at a time) ---
function closeAllDropdowns() {
  genreDropdown.classList.remove('open');
  sortingDropdown.classList.remove('open');
}
genreToggle.addEventListener('click', () => {
  if (genreDropdown.classList.contains('open')) {
    genreDropdown.classList.remove('open');
    genreDropdown.querySelector(
      '.icon-chevron'
    ).innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-up-arrow"></use>`;
  } else {
    closeAllDropdowns();
    genreDropdown.classList.add('open');
    genreDropdown.querySelector(
      '.icon-chevron'
    ).innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-down-arrow"></use>`;
  }
});
sortingToggle.addEventListener('click', () => {
  if (sortingDropdown.classList.contains('open')) {
    sortingDropdown.classList.remove('open');
    sortingDropdown.querySelector(
      '.icon-chevron'
    ).innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-up-arrow"></use>`;
  } else {
    closeAllDropdowns();
    sortingDropdown.classList.add('open');
    sortingDropdown.querySelector(
      '.icon-chevron'
    ).innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-down-arrow"></use>`;
  }
});
document.addEventListener('click', e => {
  if (
    !genreDropdown.contains(e.target) &&
    !sortingDropdown.contains(e.target)
  ) {
    closeAllDropdowns();
  }
});

// --- Show/hide filters panel on mobile ---
searchAndFiltersOpener.addEventListener('click', () => {
  filtersPanelForm.classList.toggle('open');
  if (filtersPanelForm.classList.contains('open')) {
    iconArrowOpenCloseContainer.innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-down-arrow"></use>`;
  } else {
    iconArrowOpenCloseContainer.innerHTML = `<use href="${svgArrowsBasePuth}#icon-chevron-up-arrow"></use>`;
  }
});

// --- Genres from API ---
async function populateGenres() {
  const genresData = await getGenres();
  if (!genresData?.length) return;
  genreList.innerHTML =
    `<div class="dropdown-item" data-value="">Default</div>` +
    genresData
      .map(
        genre =>
          `<div class="dropdown-item" data-value="${genre.genre}">${genre.genre}</div>`
      )
      .join('');
}
populateGenres();

// --- Handlers ---
sortingList.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-item')) {
    selectedSort =
      e.target.dataset.value === 'default' ? '' : e.target.dataset.value;
    sortingToggle.querySelector('.dropdown-title').textContent = `${
      selectedSort || 'Default'
    }`;
    currentPage = 1;
    closeAllDropdowns();
    fetchAndRenderArtists(true);
  }
});

genreList.addEventListener('click', e => {
  if (e.target.classList.contains('dropdown-item')) {
    selectedGenre =
      e.target.dataset.value === 'Default' ? '' : e.target.dataset.value;
    genreToggle.querySelector('.dropdown-title').textContent = `${
      selectedGenre || 'Default'
    }`;
    currentPage = 1;
    closeAllDropdowns();
    fetchAndRenderArtists(true);
  }
});
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    searchValue = searchInput.value.trim();
    currentPage = 1;
    fetchAndRenderArtists(true);
  }
});
filtersPanelForm.addEventListener('submit', e => {
  e.preventDefault();
  searchValue = searchInput.value.trim();
  currentPage = 1;
  fetchAndRenderArtists(true);
});
resetBtn.addEventListener('click', () => {
  selectedGenre = '';
  selectedSort = '';
  searchValue = '';
  searchInput.value = '';
  genreToggle.textContent = 'Default';
  sortingToggle.textContent = 'Default';
  currentPage = 1;
  fetchAndRenderArtists(true);
});

resetFiltersBtn.addEventListener('click', () => {
  selectedGenre = '';
  selectedSort = '';
  searchValue = '';
  searchInput.value = '';
  genreToggle.textContent = 'Default';
  sortingToggle.textContent = 'Default';
  currentPage = 1;
  fetchAndRenderArtists(true);
});

// --- Load More ---
loadMoreBtn.addEventListener('click', () => {
  currentPage++;
  fetchAndRenderArtists();
});

// --- Main fetch/render ---
async function fetchAndRenderArtists(clear = false) {
  loadMoreBtn.style.display = 'none';
  emptyState.classList.add('hidden');
  spinner.classList.remove('hidden');
  if (clear) artistsGrid.innerHTML = '';
  const params = {
    page: currentPage,
    name: searchValue,
    sortName: selectedSort || undefined,
    genre: selectedGenre || undefined,
  };
  const data = await getArtists(
    params.page,
    params.name,
    params.sortName,
    params.genre
  );
  const artists = data?.artists || [];
  if (clear && artists.length === 0) {
    emptyState.classList.remove('hidden');
    artistsCard.innerHTML = '';
    spinner.classList.add('hidden');
    return;
  }
  renderArtistCards(artists, artistsGrid);
  if (artists.length === perPage) {
    loadMoreBtn.style.display = 'flex';
  } else {
    loadMoreBtn.style.display = 'none';
  }
  spinner.classList.add('hidden');
}

// --- Initial load ---
fetchAndRenderArtists(true);

// --- Scroll to top button ---

function handleToggleScrollToTopButton() {
  if (window.scrollY > (document.body.scrollHeight - window.innerHeight) / 2) {
    scrollToTopBtn.classList.add('visible-scrollBtn');
  } else {
    scrollToTopBtn.classList.remove('visible-scrollBtn');
  }

  function handleScrollToTopButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (scrollToTopBtn.classList.contains('visible-scrollBtn')) {
    scrollToTopBtn.addEventListener('click', handleScrollToTopButtonClick);
  } else {
    scrollToTopBtn.removeEventListener('click', handleScrollToTopButtonClick);
  }
}

document.addEventListener('scroll', handleToggleScrollToTopButton);
