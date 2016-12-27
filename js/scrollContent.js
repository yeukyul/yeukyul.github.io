var height = 0;

/* Tracking scroll height */
$(window).scroll(function(event){
    height = $(window).scrollTop();
    updateScrollHeight(height);
});

updateScrollHeight = (function(height){
    /* change css */
    $(".title.hello").css({
        fontSize: Math.min(curfontsize, minfontsize)
    });
});
    