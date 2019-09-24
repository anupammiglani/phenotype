$(document).ready(function(){
function setContent(){
if($(window).width()<=767){	
var headerHeight=$("#header").outerHeight();
$('#page3').css('margin-top',headerHeight);
}
else{
	$('#page3').css('margin-top',0);
}
}
setContent();
window.addEventListener("resize",setContent);
  window.addEventListener("orientationChange",setContent);
});