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
import { getPageSeo, getPagePageModules } from '../lib/gql-query'
import Meta from '../components/Meta/Meta'
import Hero from '../components/Hero/Hero'
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

  return (
    <Layout headerBgColor="light" border="true">{page}</Layout>
  )
}

export async function getStaticProps({ params }) {

  const seo = await getPageSeo('/', 'URI');
  const pageModules = await getPagePageModules('/', 'URI');
  

  return {
    props: {
      test: "",
      SEO: seo?.page?.seo || '',
      pageModules: pageModules?.page?.pageModules?.pageModules || ''
    },
    revalidate: 1,
  };
}
