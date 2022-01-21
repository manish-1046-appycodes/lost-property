
import Link from "next/link"
import Script from 'next/script'

import ButtonSecondary from "../Links/ButtonSecondary"

import Cross from "../../public/image/icon/cross.svg"
import Logo from "../../public/image/lost-property-logo.svg"
import Footer from "./Footer/Footer"

const Layout = ({children}) => {

    return (
        <div className="leading-13 text-sm lg:leading-13 lg:text-21px overflow-hidden bg-cream-1">
            
            <div className="absolute top-0 left-0 w-full z-40">
                
                <div className="bg-blue-1">
                    <div className="container text-white h-[40px] flex justify-between items-center">
                        
                        <ButtonSecondary title="Covid-19 Updates"/>
                        
                        <div>
                            <Cross/>
                        </div>
                    </div>
                </div>

                <header className="flex">
                    <nav className="hidden lg:block p-5 text-red-1 space-x-5 absolute">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/story">
                            <a>Story</a>
                        </Link>
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                        <Link href="/rooms">
                            <a>Rooms</a>
                        </Link>
                    </nav>
                    <Link href="/">
                        <a className="my-12 mx-auto">
                            <Logo />
                        </a>
                    </Link>
                </header>
            </div>

            <main>{children}</main>

            <Footer/>
            
            <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.min.js"/>
            <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.min.js"/>
            <Script id="DRAGGABLE" strategy="beforeInteractive" src="/js/Draggable.min.js"/>
            <Script id="INERTIA" strategy="beforeInteractive" src="/js/InertiaPlugin.min.js"/>
            <Script id="GSAPSETTINGS" strategy="beforeInteractive" src="/js/gsap-settings.js"/>

        </div>
    )
}

export default Layout
