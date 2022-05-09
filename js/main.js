$(function () {
    $('.slider__slider').slick({
        variableWidth: true,
        slidesToScroll: 2,
        speed: 850,
        prevArrow: '<img class="slider__arrow slider__arrow__left" src="images/arrow 1.svg" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow__right" src="images/arrow 2.svg" alt="">',
    });
});