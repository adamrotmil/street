$(document).ready(function() {

var flag = true; // set inital flag
console.log('set initial flag');


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
			.animate(
				{'left': '1020px'},
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
		if ( event.which == 88 ) {
			console.log('key is down!');
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-still').hide();

			if(flag)
			{
				$('.ryu-cool').show();
				flag = false;
				console.log('set ryu cool to show and flag to false');
			}
			else
			{
				$('.ryu-cool').hide();
				$('.ryu-still').show();
				flag = true;
				console.log('set ryu cool to hide, still to show, and flag to true');
			}
		}	
	});


});




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}