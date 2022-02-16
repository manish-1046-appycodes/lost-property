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

  const MarqueeWords = '<em>craft.</em> &nbsp;entertainment. &nbsp;<em>art.</em> &nbsp;events. &nbsp;<em>music.</em> &nbsp;craft. &nbsp;<em>entertainment.</em> &nbsp;art. &nbsp;<em>events.</em> &nbsp;music. &nbsp;';

  const carouselItems1 = [
    {
      name: 'Franklin\'s Philosophy,<br/>By Wrapped Studios',
      img: {
        url: '/image/del/carousel/item-1.jpg',
        alt: 'Franklin\'s Philosophy, By Wrapped Studios'
      }
    },
    {
      name: 'St. Paul\'s Cathedral,<br/>London',
      img: {
        url: '/image/del/carousel/item-2.jpg',
        alt: 'St Paul\'s cathedral, London'
      }
    },
    {
      name: 'Guest Room,<br/>Lost Property, St. Paul\'s',
      img: {
        url: '/image/del/carousel/item-3.jpg',
        alt: 'Guest Room,Lost Property, St. Paul\'s'
      }
    },
    {
      name: 'Tattle - Coffee House,<br/>Lost property, St Paul\'s',
      img: {
        url: '/image/del/carousel/item-4.jpg',
        alt: 'Tattle - Coffee House, Lost Property St. Paul\'s'
      }
    },
    {
      name: 'Found - Bar and Restaurant,<br/>Lost Property, St Paul\'s',
      img: {
        url: '/image/del/carousel/item-5.jpg',
        alt: 'Found - Bar and Restaurant, Lost Property, St Paul\'s'
      }
    }
  ];

  const carouselItems2 = [
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example1.jpg",
            alt: "Alt"
        }
    },
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example2.jpg",
            alt: "Alt"
        }
    },
    {
      name: "Whispering Gallery AT St Paul’s Cathedral",
      img: {
          url: "/image/del/explorecarousel/example1.jpg",
          alt: "Alt"
      }
    },
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example2.jpg",
            alt: "Alt"
        }
    }
  ];

  const ctas = [
    {
      bgClass: "bg-cream-1",
      textColor: "text-black",
      copy: "Looking to host a team away day in central London or the St. Pauls area? Need somewhere for a workshop, client meeting or gathering? We've got lots of spaces for you across our hotel to suit your requirements and the perfect backdrop for a productive and successful meeting.",
      title: "Need Space",
      img: "/image/del/cta/cta1.jpg",
      btnTitle: "Enquire",
      btnUrl: "/contact"
    },
    {
      bgClass: "bg-blue-1",
      textColor: "text-white",
      copy: "Celebrate occasions big and small, with our private spaces. Whatever the occasion we have the ideal areas for your event. You just bring your glam-rags, and we'll sort the rest.",
      title: "Let’s Partaay",
      img: "/image/del/cta/cta2.jpg",
      btnTitle: "Enquire" ,
      btnUrl: "/contact"
    }
  ];

  

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
