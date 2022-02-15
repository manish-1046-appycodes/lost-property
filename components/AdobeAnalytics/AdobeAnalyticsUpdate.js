import Script from "next/script";
import { useRouter,  } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

let pageName = '';
let pageCategory = '';

const AdobeAnalyticsUpdate = ({initial}) => {

    const router = useRouter();


    

    

    useEffect( () => {

    });
        pageName = '';
        pageCategory = '';
        if ( router.route == '/') {
            pageName = ':homepage'
            pageCategory = 'homepage'
        } else {
            const paths = router.route.split('/');
            
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


   

    return (
        <>
        
        <Script strategy="afterInteractive">{`

            if (typeof s != "undefined") {
                s.clearVars();
                s.primaryCategory = "${pageCategory}";
                s.pageName = "lost-property${pageName}";
                s.destinationURL = "${BASE_URL+router.route}";
                s.pageTitle = document.title;
                s.t();
            }
            
        `}</Script>
        </>
    )
}

export default AdobeAnalyticsUpdate