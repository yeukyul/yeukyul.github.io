/************************************************************/
/****************** Global Variables ************************/
/************************************************************/
var height = 0;
var minfontsize = 80;
var maxfontsize = 60;
var curfontsize = maxfontsize - height;
var main = true;
var onFocus = "";

/************************************************************/
/************************* General Fn ***********************/
/************************************************************/

/* define theme color for website */
var themecolors = {goldenrod: "#d6c897", 
                   lightcyan: "#a8bbc2"};


/* Animate page transition */
function redirectPage(page){
    $("body").fadeOut(1000, function(){
        window.location.href = page;
    });
};

/* Resize the header padding */
function addHeadPadding(){
    $(".headpadding").html("<br><br><br><br><br><br>");
};

/* Tracking scroll height */
$(window).scroll(function(event){
    height = $(window).scrollTop();
    curfontsize = maxfontsize - height / 2;
    console.log(height);
    updateScrollHeight(height);
    /* faintImage(height); */

});

updateScrollHeight = (function(height){
    $(".title.hello").css({
        fontSize: Math.min(curfontsize, minfontsize)
    });

});