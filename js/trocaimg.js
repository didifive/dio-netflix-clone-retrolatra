function trocaImage(imagem,pasta,numero,acao){
    const imgSrc = "img/"+pasta+"/thumb"+numero+".png";
    const imgSrcNovo = "img/"+pasta+"/thumb"+numero+"-2.png";
    acao ? $(imagem).attr("src", imgSrcNovo).hide().fadeIn(200) : $(imagem).attr("src", imgSrc).hide().fadeIn(200);
};