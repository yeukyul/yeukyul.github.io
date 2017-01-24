/* This file controls front-end animation and page transition */

$( document ).ready(function() {
  //hide drawPad and textbarAlbums
  $('#aww-wrapper').hide();
  $('#helptext').hide();

  //hide back button
  console.log("hiding!");    
  $('#songDetail').hide();
});

/******************* Embedding Aww Board *******************/

// Aww board API, board initialization
 var aww = new AwwBoard('#aww-wrapper', {
    apiKey: '391e33ce-16fb-41e9-aced-ad424988deba'
});

// Get dataURL of current canvas
function saveBoard(){
  var img = aww.getImage();
  return img;
}

// Change field of form to dataURL to prepare form submission
function getDataURL(){
    document.getElementById('imgDataURL').value = saveBoard();
    console.log(document.getElementById('imgDataURL').value);
    return true;
}

function showCanvas(){

    //hide textbar
    TweenMax.to('#introbar', 1.5, { ease: Power2.easeInOut, x: -1000});

    //hide vinyl
    TweenMax.to('.discAnimate', 1.5, { ease: Power2.easeInOut, rotation: 60, x: -308});

    //show textbarAlbums
    TweenMax.from('.textbarAlbums', 1.5, { ease: Power2.easeInOut, x: 750});

    /* add drawPad */
    $('#aww-wrapper').show();
    $('#helptext').show();
    $("#cover").css("width", "600px");
}

function toggleBanner(state){
    if (state === 'hide') $('#introbar').addClass('hidden');
}

function lookForSong(){
    $('#aww-wrapper').hide();
    $('#cover').hide();
    $('#helptext').hide();
    $('#songDetail').show();
    $('#disc').attr('src', 'image/art_vivalavida.jpg').addClass('clip-circle');
    
    // roll vinyl over
    TweenMax.to('.discAnimate', 1.5, { ease: Power2.easeInOut, rotation: 270, x: 100});
}

$('#play').hover(function(){
    $('#play').attr('src', './image/buttons/play-hov.png');
}, function(){
    $('#play').attr('src', './image/buttons/play.png');
});

$('#next').hover(function(){
    $('#next').attr('src', './image/buttons/next-hov.png');
}, function(){
    $('#next').attr('src', './image/buttons/next.png');
});

$('#prev').hover(function(){
    $('#prev').attr('src', './image/buttons/prev-hov.png');
}, function(){
    $('#prev').attr('src', './image/buttons/prev.png');
});
