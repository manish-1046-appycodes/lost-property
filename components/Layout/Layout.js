import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { useState, useEffect } from "react"
import AdobeAnalytics from '../AdobeAnalytics/AdobeAnalytics'
import NavBarMob from '../NavBarMob/NavBarMob'


import Footer from "./Footer/Footer"
import Header from "./Header/Header"




const Layout = ({children, border, colourTheme, headerBgColor, headerMenuItems}) => {
    
    const Router = useRouter();
    
    const [notice, setNotice] = useState(true);
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

        const handleRouteChange = () => {

            // hide nav overlay on route change
            setNavOpen(false);
        }

        Router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            setThemeBg('white');
            window.removeEventListener('scroll', checkScroll);
            
            Router.events.off('routeChangeComplete', handleRouteChange);
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
        <>

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGNGG35"
        height="0" width="0" style={{display:'none',visibility: 'hidden'}}></iframe></noscript>

        <div className={`leading-13 text-sm lg:leading-13 lg:text-21px  ${ themeBg == 'blue' ? "bg-blue-1 text-white" : "bg-cream-1"}`}>
            
            <Head>
                <title>Escape to Lost Property Hotel Near St. Pauls Cathedral</title>
                <meta name="description" content="Indulge in the lost arts and activities of eccentric living. this new hotel offers 145 stylish rooms, a restaurant and coffee house. Escape with us now" />
                
            </Head>
            <AdobeAnalytics/>

            <Header 
            notice={notice} 
            toggleNavFunc={toggleNav}
            navOpenState={navOpen}
            setNoticeFunc={setNotice}
            isScrolledState={isScrolled}
            headerThemeBgInitial={headerBgColor}
            headerThemeBgState={headerThemeBg}
            headerMenuItems={headerMenuItems}/>
            

            <main className={`${ notice ? 'pt-[0px]' : 'pt-[40px]'}`}>
                {children}
                <NavBarMob 
                toggleNavFunc={toggleNav}/>
            </main>
            

            <Footer border={border}/>

            
            <Script id="SITE" strategy="beforeInteractive" src="/js/site-settings.js"/>
            <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.min.js"/>
            <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.min.js"/>
            <Script id="DRAGGABLE" strategy="beforeInteractive" src="/js/Draggable.min.js"/>
            <Script id="INERTIA" strategy="beforeInteractive" src="/js/InertiaPlugin.min.js"/>
            <Script id="GSAPSETTINGS" strategy="beforeInteractive" src="/js/gsap-settings.js"/>
            <Script id="Accordion" strategy="beforeInteractive" src="/js/accordion.js"/>
            <Script id="Cursors" strategy="beforeInteractive" src="/js/cursors.js"/>

            <Script id="UA" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-159318290-26"/>
            <Script
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-159318290-26');
            `,
            }}
            />
            <Script id="GTM" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-SVQ32HS26Y"/>
            <Script
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-SVQ32HS26Y');

                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WGNGG35');
            `,
            }}
            />
            

            
            
        </div>
        </>
    )
}

export default Layout
