const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    // Toggle active class on the clicked accordion item
    item.classList.toggle('active');
    // Close all other accordion items
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});
