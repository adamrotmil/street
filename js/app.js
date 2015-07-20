$(document).ready(function() {
	$('.ryu').mouseenter(function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
		})
		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
		})
		.mousedown(function() {
			console.log('mouse down!');
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate({
						'left': '1020px'
					},
					500,
					function() {
						$(this).hide();
						$(this).css('left', '520px');
					}
				);
		})
		.mouseup(function() {
			console.log('mouse up!');
			$('.ryu-throwing').hide();
			$('.ryu-ready').show();
		})
	$(document).keydown(function() {
		if (event.which == 88) {
			console.log('key is down!');
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	});
	$(document).keyup(function() {
		if (event.which == 88) {
			console.log('key is up');
			$('.ryu-still').show();
			$('.ryu-cool').hide();
		}
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}