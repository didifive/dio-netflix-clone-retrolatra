$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() != 0) {
        $("header").removeClass('bg-black-gradient').addClass('bg-black');
      } else {
        $("header").removeClass('bg-black').addClass('bg-black-gradient')
    };
});