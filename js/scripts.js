


!function(a){"use strict";a("body").scrollspy({target:".navbar-fixed-top",offset:60}),a("#topNav").affix({offset:{top:200}}),(new WOW).init(),a("a.page-scroll").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top-60},1450,"easeInOutExpo"),b.preventDefault()}),a(".navbar-collapse ul li a").click(function(){a(".navbar-toggle:visible").click()}),a("#galleryModal").on("show.bs.modal",function(b){a("#galleryImage").attr("src",a(b.relatedTarget).data("src"))})}(jQuery);