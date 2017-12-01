$(document).ready(function() {

    gridel = document.getElementById(grid);
    
    if (matchMedia) {
	const mq = window.matchMedia("(min-width: 321px) and (max-width: 600px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
    }

    function WidthChange(mq){
	if(mq.matches){
	}
	else {
	}
    }    
});
