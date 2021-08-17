$(window).on("scroll", function() {
  const scrollTop = $(this).scrollTop();
  const headerHeight = $("header").height()*2;
  // Limpar classes dos links do primeiro navegador
  $('#a_inicio').removeClass('active');
  $('#a_jogos').removeClass('active');
  $('#a_consoles').removeClass('active');
  $('#a_manuais').removeClass('active');
  // Pegar o topo de cada seção
  const jogos  = ($("#jogos").offset().top - headerHeight);
  const consoles = 3900; //($("#consoles").offset().top - headerHeight);
  const manuais = 4000; //($("#manuais").offset().top - headerHeight);
  // Condição para adicionar a classe active ao link conforme a seção no topo
  if (scrollTop >= jogos) {
    $('#a_jogos').addClass('active');
  } else if (scrollTop >= consoles) {
    $('#a_consoles').addClass('active');
  } else if (scrollTop >= manuais) {
    $('#a_manuais').addClass('active');
  } else {
      $('#a_inicio').addClass('active');
  };

  //Mudar fundo do header quando rolar a página
  if (scrollTop != 0) {
      $("header").removeClass('bg-black-gradient').addClass('bg-black');
    } else {
      $("header").removeClass('bg-black').addClass('bg-black-gradient')
  };
});