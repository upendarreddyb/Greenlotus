
$(document).ready(function () {
    $('.slider-detail').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        active: true,
        // fade: true,
        asNavFor: '.slider-img',

    });
    $('.slider-img').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-detail',
        dots: false,
        arrows: false,
        focusOnSelect: true,

    });
    $('.slider-arr-up').click(function () {
        $('.slider-img').slick('slickNext');

    });
    $('.slider-arr-down').click(function () {
        $('.slider-img').slick('slickPrev');
        $('.slider-img').css("rotate", "0deg");
    });

});


var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function () {
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#' + target).addClass('active');

    if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function () {
    $(this).find('.heart').toggleClass("is-active");
});

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

