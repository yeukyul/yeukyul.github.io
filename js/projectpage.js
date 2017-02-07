$(document).ready(function() {
     /* Projects Page */
    $('.project-item').slideDown(1300).removeClass('hidden');
})

/************************************************************/
/*********************** Projects Page **********************/
/************************************************************/

$('#myModal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto'); 
    $('.modal .modal-body').css('max-height', $(window).height() * 0.8);
});
