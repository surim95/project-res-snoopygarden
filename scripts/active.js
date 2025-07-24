document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e) {
        if (a.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

/* 헤더 광고 제거 이벤트 */
const adCloseBtn = document.querySelector('.ad_close_btn');
const headerAd = document.querySelector('.header_ad');
//console.log(adCloseBtn, headerAd);
adCloseBtn.addEventListener('click',()=>{
    headerAd.remove();
})