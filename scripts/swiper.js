const homeSlide = new Swiper('.home_slide',{
    autoplay: { delay: 0, disableOnInteraction: false },
    speed: 3000,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
});

const instSlide = new Swiper('.insta_slide',{
    autoplay: { delay: 0, disableOnInteraction: false },
    speed: 4000,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 40,
    centeredSlides: true,
})