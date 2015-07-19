// bouncing ball using setInterval
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball"),
	counter = 0,
	run, isRunning = false;
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 1, dy = 1;

function AnimateBall() {

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;
	
}

$(document).ready(function() {
    $(document).click(function() {
		counter += 1;
		$('#counter').html(counter);
    });
});

ball.addEventListener( "click", function() {
		if(isRunning){
			clearInterval(run);
			isRunning = false;
		} else {
			run = setInterval(AnimateBall, 10);
			isRunning = true;
		}
		// run = !run;
	}
);