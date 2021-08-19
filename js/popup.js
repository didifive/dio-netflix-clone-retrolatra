function abrirPopup(){
    $("#popup-bg").removeClass('popup-bg').addClass('popup-bg-active');
    $("#popup").removeClass('popup').addClass('popup-active');
    $("#popup-close").removeClass('popup-close').addClass('popup-close-active');
};

function fecharPopup(){
    $("#popup-bg").removeClass('popup-bg-active').addClass('popup-bg');
    $("#popup").removeClass('popup-active').addClass('popup');
    $("#popup-close").removeClass('popup-close-active').addClass('popup-close');
};

$(".trigger_popup").click(abrirPopup);
$("#popup-bg").click(fecharPopup);
$("#popup-close").click(fecharPopup);