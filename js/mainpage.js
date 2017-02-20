/* this module deals with main page transition */

/* opening animation */
$(document).ready(function() {
    /* Home Page */
    $('.under').fadeIn(1000, "linear", showLogo).removeClass('hidden');
    $("#page-bar").hide();
    $("#modal-background").hide();
    $(window).bind('resize', set_body_height);
    set_body_height();
})
                  
/* Swap background image after window is resized */
function set_body_height() { 
    if ($(window).width() > 1300){
        $("#headerbg").html('<img src = "Images/Home/header-large.png" class = "under" id = "headerimg">');
    }
    if ($(window).width() <= 1300){
        $("#headerbg").html('<img src = "Images/Home/header-alt.png" class = "under" id = "headerimg">');
    }
};

/* Make Logo visible */
showLogo = function(){
     $('#logoimg').fadeIn(1000, "swing", showNextButton).removeClass('hidden');
};



var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};