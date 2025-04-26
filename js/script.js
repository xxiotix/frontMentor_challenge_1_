document.addEventListener('DOMContentLoaded', () => {
  const btnAll = document.querySelector('.btn-all');
  const btnActive = document.querySelector('.btn-active');
  const btnInactive = document.querySelector('.btn-inactive');
  const cards = document.querySelectorAll('.extension-card');

  btnAll.addEventListener('click', () => {
    cards.forEach(card => {
      card.style.display = 'flex';
    });
  });

  btnActive.addEventListener('click', () => {
    cards.forEach(card => {
      const checkbox = card.querySelector('input[type="checkbox"]');
      card.style.display = checkbox.checked ? 'flex' : 'none';
    });
  });

  btnInactive.addEventListener('click', () => {
    const anyActive = [...cards].some(card => card.querySelector('input[type="checkbox"]').checked);

    cards.forEach(card => {
      const checkbox = card.querySelector('input[type="checkbox"]');

      if (!anyActive) {
        card.style.display = 'flex';
      } else {
        card.style.display = !checkbox.checked ? 'flex' : 'none';
      }
    });
  });
  const btnMode = document.querySelector('.btn-mode');
const body = document.body;

btnMode.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  const img = btnMode.querySelector('img');
  if (body.classList.contains('light-mode')) {
    img.src = './assets/images/icon-moon.svg'; // Assume you have a moon icon for dark mode
    img.alt = 'switch_to_dark';
  } else {
    img.src = './assets/images/icon-sun.svg'; // Back to sun icon
    img.alt = 'switch_to_light';
  }
});

});
