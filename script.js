function filterImages(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const matches = card.classList.contains(category);
      card.style.display = matches ? 'block' : 'none';
    }
  });
}
