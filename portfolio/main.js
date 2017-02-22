var id = setInterval(frame, 300);
var timer = 0;
var endTime = 25;
var currentPicture = "images/3_17.png"


$(document).ready(function() {
    $("#temp-38").hide();
    $("#temp-39").hide();
});

function frame() {
    if (timer == 50) {
        clearInterval(id);
        id = setInterval(frame, 300);
    } else {
        animate();
        blinkSep();
        slideWord();
        timer++;
    }
}

function blinkSep() {
    console.log("blinking");
    if (timer % 2 == 0) {
        $(".hour").attr("color", "rgb(200, 200, 200)");
    }
    else {
        $("#sep").attr("color", "white");
    }
}

function animate() {
    if (timer >= 4 && timer <= 10 && timer%2 == 0) {
        $("#monwharf").attr("src", "images/3_18.png");
    }
    else if (timer >= 4 && timer < 10 && timer%2 == 1) {
        $("#monwharf").attr("src", "images/3_18_blink.png");
    }
    else if (timer >= 10 && timer <= 15) {
        $("#monwharf").attr("src", "images/3_18.png");
    }
    else if (timer > 25) {
        $("#monwharf").attr("src", "images/3.png");
    }
    else if (timer > 15 && timer%2 == 0) {
         $("#monwharf").attr("src", "images/3_alert.png");
    }
    else if (timer > 15 && timer%2 == 1) {
         $("#monwharf").attr("src", "images/3.png");
    }
    
}

function slideWord() {
     if (timer == 4) {
        $("#temp-37").slideDown(1200, "linear", function() {
            $("#temp-37").hide();
        });
        
        $("#temp-38").slideDown(1200, "linear");
    }
    if (timer == 25) {
        $("#temp-38").slideDown(1200, "linear", function() {
            $("#temp-38").hide();
        });
        
        $("#temp-39").slideDown(1200, "linear");
    }
}
