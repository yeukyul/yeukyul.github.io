
/* sidebar javascript */

var settings = {
      		toggle: ".sliiider-toggle", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
      		exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
      		animation_duration: "0.5s", //how long it takes to slide the menu
     		place: "right", //where is the menu sliding from, possible options are (left | right | top | bottom)
      		animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
      		body_slide: true, //set it to true if you want to use the effect where the entire page slides and not just the div
     		no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
            auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
};

var menu = $('#menu').sliiide(settings);


/* tooltip js */

$('.tooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});