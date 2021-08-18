$(".trigger_popup").click(function(){
    $("#popup-bg").removeClass('popup-bg').addClass('popup-bg-active');
    $("#popup").removeClass('popup').addClass('popup-active');
});
$("#popup-bg").click(function(){
    $("#popup-bg").removeClass('popup-bg-active').addClass('popup-bg');
    $("#popup").removeClass('popup-active').addClass('popup');
});