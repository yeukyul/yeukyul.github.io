/* This file controls the mainScreen animation */
// var id = setInterval(frame, 10);
var cloudSpeed = 10;
var harrySpeed = 1;
var width = $(window).width();
var height = $(window).height();
var flyMaxHeight = Math.round(height * 0.65);
var flyMinHeight = Math.round(height * 0.3);

/*___________________ Event Handler __________________*/

/* Update global variable whenever width and height resizes */
/*
$(window).resize(function(){
    width = $(this).width();
    height = $(this).height();
})
*/

/*_____________________ Animation ____________________*/

/******************************************************/
/************************ Clouds **********************/
/******************************************************/

/* Get left pos of an object */
function leftPos(elem){
    var leftVal = elem.css("left");
    return parseInt(leftVal.slice(0, -2));
}


/* update left position of cloud by cloudspeed */
function changeLeftPos(elem, speed){
    elem.each(function(){
        var leftVal = leftPos($(this)) - speed;
        /*  remove cloud if cloud goes off canvas */
        if (leftVal + width <= 0){
            $(this).css({
                "left": $(window).width() + "px"
            });
        } else {
            $(this).css({
                "left": leftVal + "px"
            });
        }
    });
}


/* move all clouds */
function moveCloud() {
    var id = setInterval(frame, 100);
    function frame() {
        changeLeftPos($(".cloud"), cloudSpeed);
    }
};

/******************************************************/
/************************ Harry ***********************/
/******************************************************/

/* update bottom position of harry by flyspeed */
function changeTopPos(elem, speed){
    var topVal = topPos(elem) + speed;
    elem.css({
        "top": topVal + "px"
    });
}

/* Get top pos of a harry */
function topPos(elem){
    var topVal = elem.css("top");
    return parseInt(topVal.slice(0, -2));
}

function moveHarry(){
    var id = setInterval(frame, 30);
    var direction = -1;
    counter = 0;
    function frame() {
        var height = $(window).height();
        harryTopPos = topPos($("#harry"));
        //console.log(harryTopPos);
        if (harryTopPos == flyMinHeight ||
            harryTopPos == flyMaxHeight){
            harrySpeed *= direction;
        }
        changeTopPos($("#harry"), harrySpeed);
    }
};


/*___________________ HTML element ___________________*/

/******************************************************/
/******************** Page Redirect ******************/
/*****************************************************/

/* navigate to play screen */
$(function(){
    $('#play').click(function(){
        window.location='game.html'
    });
});

/* navigate to help screen */
$(function(){
    $('#help').click(function(){
        window.location='helpScreen.html'
    });
});


/*___________________ Function calls ___________________*/

moveCloud();
moveHarry();