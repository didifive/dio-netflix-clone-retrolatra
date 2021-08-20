//velocidade: slow ou fast
//ancora para topo: inicio
function rolarPagina(ancora,velocidade){
    const alturaHeader = $("header").height();
    
    let rolarPara;


    ancora != 'inicio' ? rolarPara = ($(ancora).offset().top-alturaHeader) : rolarPara = 0;

    $('html, body').animate({scrollTop:rolarPara}, velocidade);
    
    return false;
};