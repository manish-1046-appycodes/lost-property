const gsapSettings = {

    parallaxLoad: () => {

        const parallaxItems = document.querySelectorAll('.js-parallax');
        
        parallaxItems.forEach(function(parallaxItem) {
            console.log('g');
            const img = parallaxItem.childNodes[0];


            gsap.timeline({
                scrollTrigger: {
                    trigger: parallaxItem,
                    scrub: true,
                    start: "top top",
                    end: "bottom top"
                }

            })
            .to(img, {
                yPercent: 25
            });
            
        });
        
    },

    carousels: () => {
        Draggable.create('.carousel', {
            type:"x",
            bounds: document.querySelector(".carousel-wrap"),
            //throwProps:true,
            inertia: true
            
        });
    },

    init: () => {
        gsapSettings.parallaxLoad();
        gsapSettings.carousels();
    }


}


