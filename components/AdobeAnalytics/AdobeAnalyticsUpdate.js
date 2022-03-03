import Script from "next/script";
import { useRouter,  } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let pageName = '';
let pageCategory = '';

const AdobeAnalyticsUpdate = ({initial}) => {

    const Router = useRouter();


    useEffect( () => {

        const handleRouteChange = (url) => {

            pageName = '';
            pageCategory = '';
            if ( Router.route == '/') {
                pageName = ':homepage'
                pageCategory = 'homepage'
            } else {
                const paths = Router.asPath.split('/');
                
                let count = 0;
                paths.map( (path) => {
                    path.replace(' ', '');
                    if ( path ) {
                        pageName += ':'+path;
                        if ( count == 0 ) {
                            pageCategory = path;
                        }
                        count++;
                    }
                })
            }

            if (typeof s != "undefined") {
                //s.clearVars();
                s.channel = pageCategory;
                //s.pageName = `lost-property${pageName}`;
                s.pageURL = `${BASE_URL+Router.asPath}`;
                s.prop14 = document.title;
                s.t();
                
            }

        }

        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
        Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [Router.events]);
        
    


   

    return (
        <>
        
        <Script strategy="lazyOnload">{`
            /*
            if (typeof s != "undefined") {
                //s.clearVars();
                s.channel = "${pageCategory}";
                s.pageName = "lost-property${pageName}";
                s.pageURL = "${BASE_URL+Router.route}";
                s.prop14 = document.title;
                s.t();
            }
            */
        `}</Script>
        </>
    )
}

export default AdobeAnalyticsUpdate