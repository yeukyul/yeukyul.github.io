/* this module is responsible for showing and hiding buttons */


$("#more").hover(function() {$("#more").attr("src", "Images/buttons/more-hov.png")}, 
                function() {$("#more").attr("src", "Images/buttons/more.png")});

$("#next").hover(function() {$("#next").attr("src", "Images/buttons/next-hov.png")}, 
                function() {$("#next").attr("src", "Images/buttons/next.png")});

$("#back").hover(function() {$("#back").attr("src", "Images/buttons/back-hov.png")}, 
                function() {$("#back").attr("src", "Images/buttons/back.png")});

$("#github-icon").hover(function() {$("#github-icon").attr("src", "Images/buttons/github-hov.png")}, 
                function() {$("#github-icon").attr("src", "Images/buttons/github.png")});


$("#resume-icon").hover(function() {$("#resume-icon").attr("src", "Images/buttons/resume-hov.png")}, 
                function() {$("#resume-icon").attr("src", "Images/buttons/resume.png")});

$(".cross").hover(function() {$(".cross").attr("src", "Images/buttons/cross-hov.png")}, 
                function() {$(".cross").attr("src", "Images/buttons/cross.png")});


/* blur background */
$(".md-trigger").click(function() {
    $("#modal-background").show();
})

$(".md-close").click(function() {
    $("#modal-background").hide();
})