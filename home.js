$("#btn").click(function() {
	$('.shrinker').removeClass('timelapse');
	setTimeout(function() {
		$('.shrinker').addClass('timelapse');
	}, 500)
})
