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
 var initSlider=$('.bxslider').bxSlider({
mode:'horizontal',
speed: 2000
});
function customizeCarousel(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('.carouselWrapper').css('margin-top',headerHeight);
}
else{
	$('.carouselWrapper').css('margin-top',0);
}
var halfscreen=(($(window).height())-($('.carouselWrapper').offset().top)-10);
console.log(halfscreen);
$('.carouselWrapper .bx-viewport').css('height',halfscreen);
$('.carouselWrapper .bx-viewport .bxslider img').height(halfscreen);
$('.carouselWrapper').css('width',halfscreen/(.668));

initSlider.reloadSlider();
}
 
  window.addEventListener("resize", customizeCarousel);
  window.addEventListener("orientationChange", customizeCarousel);
customizeCarousel();
$(window).scroll(function(e){
	if(onTop)
	{
		console.log("from top");
		if($(window).width()>767){
		var destination =$('#page').offset().top+48;
		}
		else{
			var destination =$('#page').offset().top+3;
		}
  //jQuery UI needed for animate function
		$("html,body").animate({scrollTop: destination}, 600);
		onTop=false;
	}
	if($(window).scrollTop() == 0)
	{
		 onTop=true;
	}
});     
function adjustImages(){
	var height=$(window).height();
	var width=$(window).width();
	if(width<=1024 && width>=768 && (width/height)<=1){
		var margin=$("#projectThumbs a.project").css("margin-top");
		var marginInt=parseFloat(margin);
		height=height-(2*marginInt)-5;
		$('#projectThumbs .project').height(height/3);
	}
	else if(width<768){
		var margin=$("#projectThumbs a.project").css("margin-top");
		var marginInt=parseFloat(margin);
		height=height-130-(2*marginInt)-5;
		$('#projectThumbs .project').height(height/3);
		
	}
	else{
	var margin=$("#projectThumbs a.project").css("margin-top");
	var marginInt=parseFloat(margin);
	height=height-marginInt-5;	
	$('#projectThumbs .project').height(height*(.5));
	}
}
adjustImages();
 window.addEventListener("resize",adjustImages);
  window.addEventListener("orientationChange", adjustImages);
});
