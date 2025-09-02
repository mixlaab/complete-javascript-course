'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalButtons = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const calcAge = function(birthYear) {
  console.log(2037-birthYear);
  console.log(this);
}

for (let i = 0; i < openModalButtons.length; i++){
  openModalButtons[i].addEventListener('click', openModal);
}

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})

// console.log(this);
calcAge(1992);