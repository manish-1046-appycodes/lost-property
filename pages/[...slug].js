import { useEffect } from 'react'

import Head from 'next/head'
import Script from 'next/script'

import Layout from '../components/Layout/Layout'

import BookingSection from '../components/BookingSection/BookingSection'
import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import Ctas from '../components/Ctas/Ctas'
import ImageFade from '../components/ImageFade/ImageFade'
import PageFade from '../components/PageFade'
import AdobeAnalyticsUpdate from '../components/AdobeAnalytics/AdobeAnalyticsUpdate'
import { getPageSeo, getPagePageModules, getPageSlugs, getPageSettings } from '../lib/gql-query'
import Meta from '../components/Meta/Meta'
import Hero from '../components/Hero/Hero'
import PageModules from '../components/ACF/PageModules'

export default function Page({SEO, pageModules}) {
  

  useEffect(() => {gsapSettings.init()}, []);


  return (
    <>
      <PageFade>

        <Meta SEO={SEO}/>
        <AdobeAnalyticsUpdate/>
        
        <PageModules pageModules={pageModules}/>

      </PageFade>

    </>
  )
}


Page.getLayout = function getLayout(page) {

    // Layout specific params
    
    return (
        <Layout
        colourTheme={page?.props?.pageSettings?.bodyBackgroundColour}
        headerBgColor={page?.props?.pageSettings?.headerTheme} 
        border={page?.props?.pageSettings?.footerBorder}>{page}</Layout>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    
    // Get all Page Slugs
    const res = await getPageSlugs();
    const slugs = await res;

    // remove "/" which is the home page
    const filteredSlugs = slugs.pages.nodes.filter(r => r.uri !== '/');

    // Get the paths we want to pre-render based on posts
    const paths = filteredSlugs.map((slug) => {
        
        // create an array of slugs
        const slug_split = slug.uri.split('/').filter(r => r !== '');
        
        return {
            params: { slug: slug_split }
        }
        
    });

  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    // add slashes back in to create slug
    const slug = params.slug.join('/');

    // Get SEO stuff
    const seo = await getPageSeo(slug, 'URI');
    // Get Page Modules
    const pageModules = await getPagePageModules(slug, 'URI');
    // Get Page Modules
    const pageSettings = await getPageSettings(slug, 'URI');
    
    return {
        props: {
            SEO: seo?.page?.seo || '',
            pageSettings: pageSettings?.page?.pageSettings?.pageSettings || '',
            pageModules: pageModules?.page?.pageModules?.pageModules || ''
        },
        revalidate: 1,
    };
}
