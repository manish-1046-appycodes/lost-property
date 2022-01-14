
import Link from "next/link"
import Script from 'next/script'

import ButtonSecondary from "../Links/ButtonSecondary"

import Cross from "../../public/image/icon/cross.svg"
import Logo from "../../public/image/lost-property-logo.svg"

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
                    <Logo className="my-12 mx-auto"/>
                    
                </header>
            </div>

            <main>{children}</main>

            
            

        </div>
    )
}

export default Layout
