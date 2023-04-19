document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('active');
    })
    function closeBurger() {
      document.querySelector('.burger').classList.remove('open');
    document.querySelector('nav').classList.remove('open');
    $('.body').removeClass('active');
    }