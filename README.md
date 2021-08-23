# Recriando a Interface do Netflix
## Digital Innovation One: Bootcamp LocalizaLabs React Developer
### Projeto: RETROLATRA - Classic Retro Game Portal

&nbsp;

Projeto desenvolvido com instruções de [Felipe Aguiar](https://github.com/felipeAguiarCode) na trilha de estudo do Bootcamp LocalizaLabs React Developer da [Digital Innovation One](https://digitalinnovation.one/).

Link da base utilizada neste projeto: [felipeAguiarCode/netflix-clone](https://github.com/felipeAguiarCode/netflix-clone)

Neste projeto foram realizadas algumas modificações e inclusões, as alterações mais importantes foram:
* O projeto foi transformado em um portal de jogos Retro;
* Criado o arquivo ``js/header.js`` para configurar comportamentos do header (cabeçalho); 
* Melhorias no header (cabeçalho) para ser visualmente mais parecido com a versão 2021 da Netflix;
* Media Query, `@media`, do ``style/responsive.css`` utilizando padrões de tamanho de telas do [Bootstrap 4](https://getbootstrap.com/docs/4.0/layout/overview/);
* Criado o rodapé da página: `footer` com configuração de CSS para estilização e responsividade;
* Criado o ``js/trocaimg.js`` com a função `trocaImage` para trocar a imagem dos itens do carrossel no `onmouseover` (o efeito foi aplicado somente nos itens da seção de Manuais);
* Criado um pré carregador de imagens ``style/preloader.css`` para pré carregar as imagens utilizadas no efeito do `trocaImage` nos manuais;
* Criado um popup (controlado e estilizado por ``js/popup.js`` e ``styles/popup.css``) para abrir quando o botão "Mais Informações" for clicado;
* Criado um script para rolar a página ao clicar nos links do Cabeçalho, a funcão `rolarPagina(ancora,velocidade)` está no arquivo ``js/links.js``.

Link do projeto para acessar online: https://5dti.tec.br/retrolatra

Para abrir o projeto localmente é recomendado abrir o arquivo ``index.html`` com a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do Visual Studio Code. 

&nbsp;

Clique abaixo para ver vídeo mostrando a responsividade e elementos:
[![Watch the video](https://img.youtube.com/vi/DauPMoheI8U/maxresdefault.jpg)](https://youtu.be/DauPMoheI8U)

&nbsp;

Desenvolvido com:
* [Visual Studio Code](https://code.visualstudio.com/) 1.59.0.

Fontes externas:
* [Font Awesome](https://fontawesome.com/);
* [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/);
* [JQuery](https://jquery.com/).

Agradecimento especial para as pessoas que disponibilizaram o nome Retrolatra neste projeto:
* Joéber Berlocher e 
* Lucas de Freitas da [HikariDesign](https://hikaridesign.com.br)
