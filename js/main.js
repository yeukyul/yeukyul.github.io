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

/************************************************************/
/************************* Home Page ************************/
/************************************************************/

/* opening animation */
$(document).ready(function() {
    
    /* Home Page */
    $('.under').fadeIn(1000, "linear", showLogo).removeClass('hidden');
    $(window).bind('resize', set_body_height);
    $('#menuimg').bind('mousemove', selectMenuItem);
    $('#menuimg').bind('click', moveToItem);
    set_body_height();
    
    /* Projects Page */
    $('.project-item').slideDown(1300).removeClass('hidden');
    
    /* About me Page */
    $('.opening').fadeIn(1200, "swing").removeClass('hidden');
    $('#portrait').fadeIn(1200, "swing").removeClass('hidden');
    
    /* Resume Page */
    $('.preview').fadeIn(1200, "swing").removeClass('hidden');
    
});

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

/************************************************************/
/*********************** Projects Page **********************/
/************************************************************/

$('#myModal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto'); 
    $('.modal .modal-body').css('max-height', $(window).height() * 0.8);
});

/************************************************************/
/*********************** About me Page **********************/
/************************************************************/

var aboutDescription = '<p>I am a Junior in Carnegie Mellon University, <br>majoring in Statistics and minoring in Computer Science.</p><p>I am a technology enthusiast and love to build everything from software packages to webpages and apps. Coming from a Statistics and CS background, I not only have a rigorous technical background, but am also a keen eye and interest in design. I am obsessed with designing aesthetically pleasing and highly user-friendly interfaces and products. Right now I am involved in multiple projects, and am also a programmer in a Human Computer Interaction Research Lab.</p><p>I am currently working on a web-based game with javascript,<br> and am super excited to head to PennApps in mid-January!</p>';

var skillsDescription = '<p><strong>Programming languages:</strong> C, R, Python, HTML, CSS, Javascript, PHP, Java</p><p><strong>Statistics:</strong> Modeling, Prediction, Multivariate regression, Hierarchical Clustering, Visualization</p><p><strong>General:</strong> Adobe Photoshop, Illustrator, Microsoft Office, R Studio, Git, Origami Studio, D3.js</p>';

var contactMeDescription = '<div id = "contactInfo"><br><span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span><div class = "contact">+1 (646) 321-3377</div><br><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><div class = "contact">lyeukyu@gmail.com</div></div>';

$('#about').on('click', function(){
    $('#aboutMe-header').fadeOut(500, function(){
        $('#aboutMe-header').attr('src', 'Images/AboutMe/hello.png');
        $('#aboutMe-header').fadeIn(1000);
    });
    $("#hello-description").fadeOut(500, function(){
        $("#hello-description").html(aboutDescription);
        $("#hello-description").fadeIn(1000);
    })
});
    

$('#skills').on('click', function(){
    $('#aboutMe-header').fadeOut(500, function(){
        $('#aboutMe-header').attr('src', 'Images/AboutMe/Skills.png');
        $('#aboutMe-header').fadeIn(1000);
    });
    $("#hello-description").fadeOut(500, function(){
        $("#hello-description").html(skillsDescription);
        $("#hello-description").fadeIn(1000);
    })
});

$('#contactMe').on('click', function(){
    $('#aboutMe-header').fadeOut(500, function(){
        $('#aboutMe-header').attr('src', 'Images/AboutMe/ContactMe.png');
        $('#aboutMe-header').fadeIn(1000);
    });
    $("#hello-description").fadeOut(500, function(){
        $("#hello-description").html(contactMeDescription);
        $("#hello-description").fadeIn(1000);
    })
});

/************************************************************/
/************************ Resume Page ***********************/
/************************************************************/

var onOption = 1;

$('#resumeOption').hover(function(){
    if (onOption == 1) return;
    this.setAttribute('src', 'Images/Resume/Resume_hover.png');
}, function(){
    if (onOption == 1) return;
    this.setAttribute('src', 'Images/Resume/Resume_alt.png');
});
    

$('#writingSampleOption').hover(function(){
    if (onOption == 2) return;
    this.setAttribute('src', 'Images/Resume/WritingSample_hover.png');
}, function(){
    if (onOption == 2) return;
    this.setAttribute('src', 'Images/Resume/WritingSample_alt.png');
});
  

$('#resumeOption').click(function(){
    this.setAttribute('src', "Images/Resume/Resume_selected.png");
    onOption = 1;
    $('#writingSampleOption').attr('src', 'Images/Resume/WritingSample_alt.png');
    $('#resume').fadeOut(500, function(){
        $('#resume').attr('src', 'Images/Resume/YeukYuLee.png');
        $('#resume').fadeIn(1000);
    });
});


$('#writingSampleOption').click(function(){
    /* change attribute of the */
    this.setAttribute('src', "Images/Resume/WritingSample_selected.png");
    onOption = 2;
    $('#resumeOption').attr('src', 'Images/Resume/Resume_alt.png');
    $('#resume').fadeOut(500, function(){
        $('#resume').attr('src', 'Images/Resume/WritingSampleDocument.png');
        $('#resume').fadeIn(1000);
    });
});


$('#download').on("click", function(){
    if (onOption === 1) redirectPage('Images/Resume/YeukYuLee.pdf');
    else (redirectPage('Images/Resume/WritingSample.pdf'));
})
