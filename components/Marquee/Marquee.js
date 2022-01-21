import { useEffect } from "react";

import Script from "next/script";

const Marquee = ({words}) => {

    useEffect( () => {

        let currentScroll = 0;
        let isScrollingDown = true;

        let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 40, ease: "linear"}).totalProgress(0.5);

        gsap.set(".marquee__inner", {xPercent: -50});

        window.addEventListener("scroll", function(){

            if ( window.pageYOffset > currentScroll ) {
                isScrollingDown = true;
            } else {
                isScrollingDown = false;
            }

            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1
            });

            currentScroll = window.pageYOffset
        });

    }, []);

    return (
    <section className="marquee overflow-hidden relative font-display text-[50px] lg:text-[140px] leading-none lg:leading-none">
        <div className="marquee__inner w-fit flex flex-row" aria-hidden="true">
            
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
        <div className="marquee__part  shrink-0" dangerouslySetInnerHTML={ {__html: words}}/>
            
            
            
        </div>


    </section>)
}

export default Marquee;
