import spritePath from '../img/sprite.svg?url';

export function renderStarsAdvanced(rating, spriteSVGPath = spritePath) {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const percentage = Math.round(decimal * 100);

  let starsHtml = '';

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += `
          <div class="star">
            <svg class="star-filled"><use href="${spriteSVGPath}#star-filled"></use></svg>
          </div>`;
    } else if (i === fullStars + 1 && decimal > 0) {
      starsHtml += `
          <div class="star">
            <svg class="star-bg"><use href="${spritePath}#star-filled"></use></svg>
            <svg class="partial-star" style="--percent: ${percentage}%">
              <use href="${spritePath}#star-filled"></use>
            </svg>
          </div>`;
    } else {
      starsHtml += `
          <div class="star">
            <svg class="star-bg"><use href="${spritePath}#star-filled"></use></svg>
          </div>`;
    }
  }

  return `
      <li class="star-svg">
        <div class="star-container">
          ${starsHtml}
        </div>
      </li>`;
}

import spriteSVGArrowRightModal from '../img/sprite.svg?url';

export function renderArtistCards(artists, container) {
  const markup = artists
    .map(artist => {
      const image =
        artist.strArtistThumb ||
        'https://via.placeholder.com/350x350?text=No+Image';

      const artistGenresArray = artist.genres || [];

      const genres =
        artist.genres
          ?.map(genre => `<li class="genre-tag">${genre}</li>`)
          .join('') || '';
      const bio =
        artist.strBiographyEN || 'Короткий опис для цього артиста відсутній.';

      return `
        <li class="artist-card">
          <img src="${image}" alt="${
        artist.strArtist
      }" class="artist-card-image" />
          <div class="artist-card-content">
            <ul class="artist-card-genres">${genres}</ul>
            <h3 class="artist-card-name">${artist.strArtist}</h3>
            <p class="artist-card-description">${bio}</p>
            <button id="learn-more-btn" class="artist-card-link" data-artist-id="${
              artist._id
            }" data-genres='${JSON.stringify(
        artistGenresArray
      )}'>Learn More <svg class="icon-lernmore" width="24" height="24">
      <use href="${spriteSVGArrowRightModal}#icon-caret-arrow-artist-right"></use>
    </svg></button>
          </div>
        </li>
      `;
    })
    .join('');

  container.insertAdjacentHTML('beforeend', markup);
}
