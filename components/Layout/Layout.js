
import Link from "next/link"
import Script from 'next/script'

import MoreArrow from "../Links/MoreArrow"

import Cross from "../../public/image/icon/cross.svg"
import Logo from "../../public/image/lost-property-logo.svg"

const Layout = ({children}) => {
    return (
        <div className="leading-1.3 text-sm lg:leading-1.3 lg:text-21px ">
            
            <div className="fixed top-0 left-0 w-full z-40">
                
                <div className="bg-blue-1">
                    <div className="container text-white h-[40px] flex justify-between items-center">
                        
                        <MoreArrow title="Covid-19 Updates"/>
                        
                        <div>
                            <Cross/>
                        </div>
                    </div>
                </div>

                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <header className="flex">
                    <Logo className="my-12 mx-auto"/>
                    
                </header>
            </div>

            <main>{children}</main>

            
            <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.js"/>
            <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.js"/>
            <Script id="GSAPSETTINGS" strategy="beforeInteractive" src="/js/gsap-settings.js"/>

            <Script id="GSAPINIT" strategy="afterInteractive">
                gsapSettings.init();
            </Script>

        </div>
    )
}

export default Layout
