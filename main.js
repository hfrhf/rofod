var image = document.getElementById("image");
var ull = document.getElementById("ull");

image.addEventListener("click", function() {
  ull.classList.toggle("active")
  
  if (image.src.endsWith("menu.png")) {
    image.src = "imgs/menu2.png";
    image.alt = "Image 2";
  } else {
    image.src = "imgs/menu.png";
    image.alt = "Image 1";
  }
});





//slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets", // تحديث النوع إلى "bullets"
    bulletElement: "span", // تحديد عنصر HTML للنقطة (يفضل استخدام "span" لتناسب التنسيق)
    bulletClass: "swiper-pagination-bullet", // تعيين الفئة للنقطة
    bulletActiveClass: "swiper-pagination-bullet-active" // تعيين الفئة للنقطة النشطة
  },
  navigation: false // تعيين خاصية التنقل إلى false لإخفاء الأسهم
});
function updateSwiper() {
  if (window.innerWidth < 968) {
    swiper.params.slidesPerView = 1;
  } else if(window.innerWidth<1200){
    swiper.params.slidesPerView = 2;
  }
   else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update();
}
window.addEventListener('load', updateSwiper);
window.addEventListener('resize', updateSwiper);




