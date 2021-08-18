/*  Tela Extra Pequena  - xs - máximo de 575.98px                   - Smartphones em modo retrato                     
    Tela Pequena        - sm - mínimo de 576px, máximo de 767.98px  - Smartphones em modo paisagem
    Tela Média          - md - mínimo de 768px, máximo de 991.98px  - Tablets
    Tela Larga          - lg - mínimo de 992px, máximo de 1199.98px - Desktops e Notebooks
    Tela Extra Larga    - xl - mínimo de 1200px                     - Monitores e TVs Grandes
    Fonte: https://getbootstrap.com/docs/4.0/layout/overview/
*/
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        992:{
            items:6
        },
        1200:{
            items:8
        }
    }
});