const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButton = document.querySelector('.close-popup');
const popup = document.getElementById('popup');

openPopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'block';
  });
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
