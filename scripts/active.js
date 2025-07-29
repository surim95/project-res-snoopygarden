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

const mapTitle = document.querySelector('.map_title');
const mapGoogle = document.querySelector('.map_wrap iframe');
const mapBtn = document.querySelector('.map_title_btn');
let titleStatus = true;
mapBtn.addEventListener('click',()=>{
    if(titleStatus) {
        mapTitle.style.display = 'none';
        mapBtn.style.transform = 'scale(-1)';
        mapGoogle.style.position = 'static';
        mapBtn.style.color = '#FFA600';
        titleStatus = false;
    } else {
        mapTitle.style.display = 'block';
        mapTitle.style.opacity = 1;
        mapBtn.style.transform = 'scale(1)';
        mapGoogle.style.position = 'absolute';
        mapBtn.style.color = '#FFF';
        titleStatus = true;
    }
})