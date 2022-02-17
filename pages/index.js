import { useEffect } from 'react'

import Layout from '../components/Layout/Layout'


import PageFade from '../components/PageFade'
import AdobeAnalyticsUpdate from '../components/AdobeAnalytics/AdobeAnalyticsUpdate'
import { getPageSeo, getPagePageModules, getPageSettings, getHeaderMenuItems } from '../lib/gql-query'
import Meta from '../components/Meta/Meta'
import PageModules from '../components/ACF/PageModules'

export default function Page({test, SEO, pageModules}) {
  

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
      border={page?.props?.pageSettings?.footerBorder}
      headerMenuItems={page?.props?.headerMenuItems}>
          {page}
      </Layout>
  )
}


export async function getStaticProps({ params }) {


  // Get SEO stuff
  const seo = await getPageSeo("/", 'URI');
  // Get Page Modules
  const pageModules = await getPagePageModules("/", 'URI');
  // Get Page Modules
  const pageSettings = await getPageSettings("/", 'URI');
  // Get Header Menu Items
  const headerMenuItems = await getHeaderMenuItems();

  return {
      props: {
          SEO: seo?.page?.seo || '',
          pageSettings: pageSettings?.page?.pageSettings?.pageSettings || '',
          pageModules: pageModules?.page?.pageModules?.pageModules || '',
          headerMenuItems: headerMenuItems?.menuItems?.edges || ''
      },
      revalidate: 1,
  };
}
