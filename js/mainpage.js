
/* Animate page transition */
function redirectPage(page){
    $("body").fadeOut(1000, function(){
        window.location.href = page;
    });
};


/* opening animation */
$(document).ready(function() {
    
    /* Home Page */
    $('.under').fadeIn(1000, "linear", showLogo).removeClass('hidden');
    $(window).bind('resize', set_body_height);
    $('#menuimg').bind('mousemove', selectMenuItem);
    $('#menuimg').bind('click', moveToItem);
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
     $('#logoimg').fadeIn(1000, "swing").removeClass('hidden');
};

/* Hide logo when hover */
$("#logo").hover(function()
{
    $(this).find("#logoimg").fadeOut(1000);
    $(this).find("#menuimg").fadeIn(1500);
}, function() {
    $(this).find("#menuimg").fadeOut(1000);
    $(this).find("#logoimg").fadeIn(1500);
});

/* identify user click/ hover in which item */
whichItem = function(e){
    var img = $("#menuimg");
    var offset = img.offset();
    var clickX = e.clientX - offset.left;
    var clickY = e.clientY - offset.top;
    var propX = clickX / img.width();
    var propY = clickY / img.height();
    if(propY >= 0.25 && propY <= 0.40 && propX >= 0 && propY <= 1){
        return ("projects");
    } 
    else if (propY > 0.40 && propY <= 0.55 && propX >= 0 && propY <= 1){
        return ("resume");
    } 
    else if (propY > 0.55 && propY <= 0.70 && propX >= 0 && propY <= 1) {
        return ("aboutme");
    }
    return null;
};

/* Select Menu Item */
selectMenuItem = function(e){
    switch(whichItem(e)){
        case "projects":
            $("#menuimg").attr("src", "Images/Menu/projects.png");
            break;
        case "resume":
            $("#menuimg").attr("src", "Images/Menu/resume.png");
            break;
        case "aboutme":
            $("#menuimg").attr("src", "Images/Menu/aboutme.png");
            break;
        default:
            $("#menuimg").attr("src", "Images/Menu/unselected.png");
    }
};

/* Page redirection after user clicked on menu */
moveToItem = function(e){
    var page;
    switch(whichItem(e)){
        case "projects":
            page = "/projects.html";
            break;
        case "resume":
            page = "/resume.html";
            break;
        case "aboutme":
            page = "/aboutme.html";
            break;
        default:
            return;
    }
    redirectPage(page);
};