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

var onTop=true;

$('.bxslider').bxSlider({
mode:'horizontal',
speed: 2000
});
function customizeCarousel(){
var halfscreen=(($(window).height())-($('.carouselWrapper').offset().top)-10);
console.log(halfscreen);
$('.carouselWrapper .bx-viewport').css('height',halfscreen);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen);
}
 
  window.addEventListener("resize", customizeCarousel);
  window.addEventListener("orientationChange", customizeCarousel);
customizeCarousel();
function fixImages(){
 var hei=$(window).height()/2;
 
}
window.addEventListener("resize", fixImages);
window.addEventListener("orientationChange", fixImages);
fixImages();
$(window).scroll(function(e){
	if(onTop)
	{
		console.log("from top");
		var destination =$('#page').offset().top+50;
  //jQuery UI needed for animate function
		$("html,body").animate({scrollTop: destination}, 600);
		onTop=false;
	}
	if($(window).scrollTop() == 0)
	{
		 onTop=true;
	}
});     




})
