/* opening animation */
$(document).ready(function() {
    
    
    /* About me Page */
    $('.opening').fadeIn(1200, "swing").removeClass('hidden');
    $('#portrait').fadeIn(1200, "swing").removeClass('hidden');
    
});

/************************************************************/
/*********************** About me Page **********************/
/************************************************************/

var aboutDescription = '<p>I am a Junior in Carnegie Mellon University, <br>majoring in Statistics and minoring in Computer Science.</p><p>I am a technology enthusiast and love to build everything from software packages to webpages and apps. Coming from a Statistics and CS background, I not only have a rigorous technical background, but am also a keen eye and interest in design. I am obsessed with designing aesthetically pleasing and highly user-friendly interfaces and products. Right now I am involved in multiple projects, and am also a programmer in a Human Computer Interaction Research Lab.</p><p>I am currently working on a web-based game with javascript,<br> and am super excited to head to PennApps in mid-January!</p>';

var skillsDescription = '<p><strong>Programming languages:</strong> C, Java, R, Python, HTML, CSS, Javascript, PHP, SQL</p><p><strong>Statistics:</strong> Modeling, Prediction, Multivariate regression, Hierarchical Clustering, Visualization</p><p><strong>Hardware:</strong>Arduino</p><p><strong>General:</strong> Adobe Photoshop, Illustrator, InDesign, Acrobat, Version Control (Git), Gradle, Travis CI, Microsoft Office, R Studio, Git, Shiny in R</p>';

var contactMeDescription = '<div id = "contactInfo"><br><span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span><div class = "contact">+1 (646) 321-3377</div><br><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><div class = "contact">lyeukyu@gmail.com</div><br></div>';

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

