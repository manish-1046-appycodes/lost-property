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

    init: () => {
        gsapSettings.parallaxLoad();
    }


}
