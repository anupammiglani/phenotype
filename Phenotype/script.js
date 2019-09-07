document.addEventListener("DOMContentLoaded", function() {

 
  function lazyload() {
 
var lazyloadThrottleTimeout;
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
   
    lazyloadThrottleTimeout = setTimeout(function() {
var lazyloadImages = document.querySelectorAll("img.lazyload");  
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {


            if(img.getBoundingClientRect().top < (window.innerHeight + scrollTop)) {
console.log("image loaded");
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
 
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
  lazyload();
});

$(document).ready(function(){


$('.bxslider').bxSlider({
mode:'horizontal',
speed: 2000,
});
function customizeCarousel(){
var halfscreen=($(window).height())/2;
console.log(halfscreen);
$('.carouselWrapper .bx-viewport').css('height',halfscreen);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen);
}
 
  window.addEventListener("resize", customizeCarousel);
  window.addEventListener("orientationChange", customizeCarousel);
customizeCarousel();



})
