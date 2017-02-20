/* This module handles transitions between page */

/* globals constants*/
var OUT_POSITION_LEFT = "-100%";
var OUT_POSITION_RIGHT = "150%";
var MAX_PAGE = 3;
var SPEED = 2.5;

/* global variables */
var page = 0;
var mainElement = [$("#headerimg"), $("#logoimg")];
var projectPage1 = [$("#collegeexplorer"), $("#fce"), $("#drawdio"), $("#ggplot"), $("#hp")];
var AboutMeElement = [$("#me"), $("#aboutme-description")];


/* handle slide form right page transition */
$("#next").click(function(){
    if (page >= 3) return;
    page++;
    updatePageTitle();
    
    if (page == 1) {
        mainSlideLeft();
        projectSlideInLeft();
        showBackButton();
    }
    if (page == 2) {
        TweenLite.to($(".project-menu"), SPEED, {left:OUT_POSITION_LEFT, ease:Power2.easeOut});
        TweenLite.to($("#me"), SPEED, {left:"13%", ease:Power2.easeOut});
        TweenLite.to($("#aboutme-description"), SPEED, {left:"50%", ease:Power2.easeOut});
        hideNextButton();
    }
})

/* handle slide from to left page transition */
$("#back").click(function(){
    if (page <= 0) return;
    page--;
    updatePageTitle();
    if (page == 0) {
        mainSlideIn();
        projectSlideOutRight();
        hideBackButton();
    }
    if (page == 1) {
        moveGroup(AboutMeElement, OUT_POSITION_RIGHT, true);
        projectSlideInLeft();
        showNextButton();
    }
    
})


/* move the whole group of elements */
moveGroup = function(group, position, hide) {
    for (var i = 0; i< group.length; i++) {
        element = group[i];
        TweenLite.to(element, SPEED, {left:position, ease:Power2.easeOut});
    }
}

mainSlideLeft = function() {
    
    TweenLite.to($("#headerimg"), SPEED, {left:"-100%", ease:Power2.easeOut});
    moveGroup(mainElement, OUT_POSITION_LEFT, true);
}

mainSlideIn = function() {
    TweenLite.to($("#headerimg"), SPEED, {left:"0%", ease:Power2.easeOut});
    TweenLite.to($("#logoimg"), SPEED, {left:"58%", ease:Power2.easeOut});
    $("#pagetitle").html("");

}

projectSlideInLeft = function(){
    /*
    TweenLite.to($("#collegeexplorer"), SPEED, {left:"10%", ease:Power2.easeOut, onComplete: showBackButton});
    TweenLite.to($("#fce"), SPEED, {left:"47%", ease:Power2.easeOut});
    TweenLite.to($("#drawdio"), SPEED, {left:"47%", ease:Power2.easeOut});
    TweenLite.to($("#ggplot"), SPEED, {left:"69%", ease:Power2.easeOut});
    TweenLite.to($("#hp"), SPEED, {left:"69%", ease:Power2.easeOut});
    */
    TweenLite.to($(".project-menu"), SPEED, {left:"50%", ease:Power2.easeOut});
}

projectSlideOutRight = function(){
    /*
    TweenLite.to($("#collegeexplorer"), SPEED, {left:"150%", ease:Power2.easeOut, onComplete: hideBackButton});
    TweenLite.to($("#fce"), SPEED, {left:"150%", ease:Power2.easeOut});
    TweenLite.to($("#drawdio"), SPEED, {left:"150%", ease:Power2.easeOut});
    TweenLite.to($("#ggplot"), SPEED, {left:"150%", ease:Power2.easeOut});
    TweenLite.to($("#hp"), SPEED, {left:"150%", ease:Power2.easeOut});
    */
    TweenLite.to($(".project-menu"), SPEED, {left:OUT_POSITION_RIGHT, ease:Power2.easeOut});
}

/* update title of the page */
updatePageTitle = function() {
    switch(page) {
        case(0):
            $("#pagetitle").html("");
            $("#page-bar").hide();
            break;
        case(1):
            $("#pagetitle").hide().html("<h1 class='page-title'>Projects</h1>").fadeIn(400, "linear").show();
            $("#page-bar").fadeIn(400, "linear").show();
            break;
        case(2):
             $("#pagetitle").hide().html("<h1 class='page-title'>About Me</h1>").fadeIn(400, "linear").show();
            $("#page-bar").hide();
            break;
            
        default:
            break;
    }
}

hideBackButton = function() {
    $("#back").fadeOut(500, "swing").hide();
}

hideNextButton = function() {
    $("#next").fadeOut(500, "swing").hide();
}

showNextButton = function() {
    $("#next").fadeIn(500, "swing").show().removeClass("hidden");
}

showBackButton = function() {
    $("#back").fadeIn(500, "swing").show();
}
