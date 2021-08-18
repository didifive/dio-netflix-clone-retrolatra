function preLoaderImages() {
    imageObj = new Image();
    const images = ["img/manuais/thumb1-2.png",
                    "img/manuais/thumb2-2.png",
                    "img/manuais/thumb3-2.png",
                    "img/manuais/thumb4-2.png",
                    "img/manuais/thumb5-2.png",
                    "img/manuais/thumb6-2.png",
                    "img/manuais/thumb7-2.png",
                    "img/manuais/thumb8-2.png",
                    "img/manuais/thumb9-2.png",
                    "img/manuais/thumb10-2.png",
                ];
    images.forEach(preLoader());

    function preLoader(i){
        imageObj.src=images[i];
    };
};