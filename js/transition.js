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
}

projectSlideInLeft = function(){
    TweenLite.to($(".project-menu"), SPEED, {left:"50%", ease:Power2.easeOut});
}

projectSlideOutRight = function(){
    TweenLite.to($(".project-menu"), SPEED, {left:OUT_POSITION_RIGHT, ease:Power2.easeOut});
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
