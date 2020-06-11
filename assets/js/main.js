
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(document).mouseup(function (e){
	var container = $(".navbar-collapse.collapse.show .navbar-nav");
	if (!container.is(e.target) && container.has(e.target).length === 0){
	  $('.navbar-collapse').collapse('hide');
	}
});
