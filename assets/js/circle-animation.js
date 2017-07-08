function rotateAnnotationCropper(offsetSelector, xCoordinate, yCoordinate, cropper){
    //alert(offsetSelector.left);
	var x = xCoordinate - offsetSelector.offset().left - offsetSelector.width()/2;
	var y = -1*(yCoordinate - offsetSelector.offset().top - offsetSelector.height()/2);
	var theta = Math.atan2(y,x)*(180/Math.PI);        


	var cssDegs = convertThetaToCssDegs(theta);
	var rotate = 'rotate(' +cssDegs + 'deg)';
	cropper.css({'-moz-transform': rotate, 'transform' : rotate, '-webkit-transform': rotate, '-ms-transform': rotate});
	$('body').on('mouseup', function(event){
		$('body').unbind('mousemove');
  	});

}
    
function convertThetaToCssDegs(theta){
    var cssDegs = 90 - theta;
    return cssDegs;
}


$(document).ready(function(){      

	$("#planetClickable ul li.active").mouseenter(function(){
	    $(this).addClass('animated jello');
	});
	$("#planetClickable ul li.active").mouseleave(function(){
	    $(this).removeClass('animated jello');
	});

	$("div#ship").one("webkitTransitionEnd  transitionend",
              function(event) {
              	console.log("1");
  });

  //  $('#ship').on('mousedown', function(){
       // $('body').on('mousemove', function(event){
            //rotateAnnotationCropper($('#planet').parent(), event.pageX,event.pageY, $('#planet'));    
        //});     
    //});

}); 
 


$(document).ready(function(){

	$( window ).resize(function() {
	 	
	 	var ship = document.getElementById("shipWrapper");	 	//Change the origin of the ships animation
	 	var canvas = document.getElementById('floating-head-canvas');	 	//Change the height of the canvas on resize


		var transOriginY = (window.innerHeight / 2);
		var transOriginX = (window.innerWidth / 2);
		//var transOrigin = "50%";

		//ship.style.webkitTransformOrigin = "50%" + transOrigin + "px";
		ship.style.webkitTransformOrigin = "50%" + transOriginY + "px";

		canvas.style.width = window.innerWidth + 'vh';
		canvas.style.height = window.innerHeight + 'vh';

	});

	 	var ship = document.getElementById("shipWrapper");
		var transOrigin = (window.innerHeight / 2);
		var transOriginX = (window.innerWidth / 2);
		//var transOrigin = "50%";

		//ship.style.webkitTransformOrigin = "50%" + transOrigin + "px";
		ship.style.webkitTransformOrigin = "50%" + transOrigin + "px";
});




// ------------- Floating head animation
$(document).ready(function(){

	var canvas = {
	    element: document.getElementById('floating-head-canvas'),
	    width: window.innerWidth ,
	    height: window.innerHeight,
	    initialize: function () {
	        this.element.style.width = this.width + 'vh';
	        this.element.style.height = this.height + 'vh';
	        document.body.appendChild(this.element);
	    }
	};

	var ball = {
	    element: document.createElement('div'),
	    width: 70,
	    height: 105,
	    dx: 8,
	    dy: 3,
	    initialize: function () {
	        this.element.className += 'floating-head';
	        this.element.style.width = this.width + 'px';
	        this.element.style.height = this.height + 'px';
	        canvas.element.appendChild(this.element);
	    },
	    moveTo: function (x, y) {
	        this.element.style.left = x + 'px';
	        this.element.style.top = y + 'px';
	    },
	    changeDirectionIfNecessary: function (x, y) {
	        if (x < 0 || x > canvas.width - ball.width) {
	            this.dx = -this.dx;
	        }
	        if (y < 0 || y > canvas.height - ball.height) {
	            this.dy = -this.dy;
	        }
	    },
	    draw: function (x, y) {
	        this.moveTo(x, y);
	        var ball = this;
	        setTimeout(function () {
	            ball.changeDirectionIfNecessary(x, y);
	            ball.draw(x + ball.dx, y + ball.dy);
	        }, 1000 / 30);
	    }
	};

	canvas.initialize();
	ball.initialize();
	ball.draw(0, 0);




});
