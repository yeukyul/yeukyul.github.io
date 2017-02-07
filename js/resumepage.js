/* opening animation */
$(document).ready(function() {

    
    /* Resume Page */
    $('.preview').fadeIn(1200, "swing").removeClass('hidden');
    
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
