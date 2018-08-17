$(document).ready(function(){
	
	$(".products-tabs").addClass('bag-hot');
	$(".products-tab").removeClass('bag-hot');

	$(".tabllist-bag-hot").click(function(event) {
		$(".products-tabs").addClass('bag-hot');
		$(".products-tab").removeClass('bag-hot');
		//$(".products-tabs").addClass('bag-new');
	});
	$(".tabllist-new").click(function(event) {
		$(".products-tabs").removeClass('bag-hot');
		$(".products-tab").addClass('bag-hot');
		
	});

	$(".filter-product").hide();
	  $(".owl-carousel").owlCarousel();
	  $(".filters").click(function(event) {
  	 $(".filter-product").slideToggle(400);
  });

});