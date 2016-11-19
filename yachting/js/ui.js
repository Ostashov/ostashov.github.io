// MENU
$(".menu-bar .menu-block-btn").click(function() {
    var classList = $(this).attr('class');
    if (classList.indexOf('active') == -1) {
       $(this).addClass("active");
    } else {
        $(this).removeClass("active");
    }
});

$(document).click( function(event){
    if( $(event.target).closest(".menu-bar .menu-block-btn.active").length ) return;
    $(".menu-bar .menu-block-btn.active").removeClass("active");
    event.stopPropagation();
});








// RadioButton
$('.radioblock').find('.radio').each(function(){
    $(this).click(function(){
        var valueRadio = $(this).html();
        $(this).parent().find('.radio').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find('input').val(valueRadio);
    });
});




// Select
$('.slct').click(function(){
    $(this).parent().parent().parent().find(".drop").slideUp();
    $(this).parent().parent().parent().find(".slct").removeClass("active");
    var dropBlock = $(this).parent().find('.drop');

    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();

        $(this).addClass('active');

        $('.drop').find('li').click(function(){

            var selectResult = $(this).html();

            $(this).parent().parent().find('input').val(selectResult);

            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

            dropBlock.slideUp();
        });

    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }

    return false;
});