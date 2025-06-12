import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { refs } from './refs.js';
import { postFeedback } from './artists-api.js';

const {
  loaderOverlay,
  modalForm,
  stars,
  nameInput,
  messageInput,
  modalOverlay,
  closeBtn,
  feedbackBtn,
} = refs;

function showLoader() {
  loaderOverlay.classList.remove('hidden');
}
function hideLoader() {
  loaderOverlay.classList.add('hidden');
}

let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    updateStars(index + 1);
  });
  star.addEventListener('mouseleave', () => {
    updateStars(selectedRating);
  });

  star.addEventListener('click', () => {
    selectedRating = index + 1;
    updateStars(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.setAttribute('fill', '#a76cdb');
    } else {
      star.setAttribute('fill', '#ffffff');
    }
  });
}

function openModal() {
  modalOverlay.classList.add('is-open');
}
feedbackBtn.addEventListener('click', openModal);

function closeModal() {
  modalOverlay.classList.remove('is-open');
}

closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function validateForm() {
  let isValid = true;
  let messages = [];

  if (nameInput.value.trim().length < 2 || nameInput.value.trim().length > 16) {
    isValid = false;
    messages.push('Name must be between 2 and 16 characters');
  }
  if (
    messageInput.value.trim().length < 10 ||
    messageInput.value.trim().length > 512
  ) {
    isValid = false;
    messages.push('Message must be between 10 and 512 characters.');
  }

  if (selectedRating < 1 || selectedRating > 5) {
    isValid = false;
    messages.push('Rating must be between 1 and 5 stars.');
  }

  if (!isValid) {
    messages.forEach(msg => {
      iziToast.error({
        title: 'Error',
        message: msg,
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: true,
      });
    });
  }
  return isValid;
}

function resetForm() {
  modalForm.reset();
  updateStars(0);
  selectedRating = 0;
}

modalForm.addEventListener('submit', async e => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }
  const data = {
    name: nameInput.value.trim(),
    rating: selectedRating,
    descr: messageInput.value.trim(),
  };

  showLoader();

  await postFeedback(data);

  closeModal();
  resetForm();
  hideLoader();
});
