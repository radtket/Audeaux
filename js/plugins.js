$(document).ready(function() {
    $(".slideshow").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
});