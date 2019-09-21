$(document).ready(function(){
function customizeSection(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('#page2').css('margin-top',headerHeight);
}
else{
	$('#page2').css('margin-top',0);
}
}
 
  window.addEventListener("resize", customizeSection);
  window.addEventListener("orientationChange", customizeSection);
customizeSection();

});     

