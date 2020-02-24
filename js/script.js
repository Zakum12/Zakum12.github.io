$(document).ready(function () {
    $('.slider-rooms').slick({
        arrows: true,
        dots: true,
        speed: 1500,
        // autoplay: true,
        autoplaySpeed: 1500,
    });
});

$(document).ready(function () {
    $('.slider-reviews').slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        arrows: true,
        dots: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 1500,
    });
});