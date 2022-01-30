

import Script from 'next/script'

import { useState, useEffect } from "react"


import Footer from "./Footer/Footer"
import Header from "./Header/Header"



const Layout = ({children, border, colourTheme, headerBgColor}) => {
    const [notice, setNotice] = useState(false);
    const [headerThemeBg, setHeaderThemeBg] = useState('dark');
    const [themeBg, setThemeBg] = useState('white');
    const [navOpen, setNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect( () => {
        Cursors.init();
        
        if ( colourTheme == 'blue' ) {
            setThemeBg('blue');
        }

        if ( headerBgColor == 'light' ) {
            setHeaderThemeBg('light');
        } else {
            setHeaderThemeBg('dark');
        }

        
        
        window.addEventListener('scroll', checkScroll);

        return () => {
            setThemeBg('white');
            window.removeEventListener('scroll', checkScroll);
        }
        
    });

    const toggleNav = () => {
        setNavOpen( navOpen => !navOpen );
    }

    const checkScroll = () => {
        if ( window.scrollY > 0 ) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    

    

    return (
        <div className={`leading-13 text-sm lg:leading-13 lg:text-21px  ${ themeBg == 'blue' ? "bg-blue-1 text-white" : "bg-cream-1"}`}>
            
            <Header 
            notice={notice} 
            toggleNavFunc={toggleNav}
            navOpenState={navOpen}
            setNoticeFunc={setNotice}
            isScrolledState={isScrolled}
            headerThemeBgState={headerThemeBg}/>
            
            <main className={`${ notice ? 'pt-[0px]' : 'pt-[40px]'}`}>{children}</main>

            <Footer border={border}/>
            
            <Script id="SITE" strategy="beforeInteractive" src="/js/site-settings.js"/>
            <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.min.js"/>
            <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.min.js"/>
            <Script id="DRAGGABLE" strategy="beforeInteractive" src="/js/Draggable.min.js"/>
            <Script id="INERTIA" strategy="beforeInteractive" src="/js/InertiaPlugin.min.js"/>
            <Script id="GSAPSETTINGS" strategy="beforeInteractive" src="/js/gsap-settings.js"/>
            <Script id="Accordion" strategy="beforeInteractive" src="/js/accordion.js"/>
            <Script id="Cursors" strategy="beforeInteractive" src="/js/cursors.js"/>
        </div>
    )
}

export default Layout
