$(document).ready(function(){
    $(".value__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:true,
        centerMode: true,
        draggable:true,
        centerPadding: '60px',
        prevArrow:`<span class="prev-arrow slick-arrow"><i class='bx bx-left-arrow-alt'></i></span>`,
        nextArrow:`<span class="next-arrow slick-arrow"><i class='bx bx-right-arrow-alt' ></i></span>`,
        // autoplay:true,
        // autoplaySpeed: 1000,
    })
})