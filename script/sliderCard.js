if (window.innerWidth < 767) {
    $('.cardSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: $('.newsPrev'),
        nextArrow: $('.newsNext'),
        appendDots: $('.newsDots'),
    });
  }
  