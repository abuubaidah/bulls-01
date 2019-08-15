(function ($) {
    "use strict";

    $(document).ready(function(){
        $(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
		});
    });
    
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
       
    });
}(jQuery));	







