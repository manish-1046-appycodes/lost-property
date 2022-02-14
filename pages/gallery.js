import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import BookingSection from '../components/BookingSection/BookingSection'
import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import AccordionEvents from '../components/Accordion/AccordionEvents'
import Marquee from '../components/Marquee/Marquee'
import ExploreCarousel from '../components/ExploreCarousel/ExploreCarousel'
import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import Ctas from '../components/Ctas/Ctas'
import ImageFade from '../components/ImageFade/ImageFade'
import PageFade from '../components/PageFade'

/* SVG */
import lpLogo from '../public/image/lost-property-logo-mob.svg';




export default function Page({test}) {

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




  return (
    <>
        <PageFade>
        <Head>
            <title>Escape to Lost Property Hotel Near St. Pauls Cathedral</title>
            <meta name="description" content="Indulge in the lost arts and activities of eccentric living. this new hotel offers 145 stylish rooms, a restaurant and coffee house. Escape with us now" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div class="min-h-screen flex flex-col justify-center lg:justify-end">
            <div className="spacer h-[120px] lg:h-[150px]"></div>
            
            <Marquee words={MarqueeWords}/>
            <Carousel imgs={carouselItems1}/>

            <div className="spacer h-[120px] lg:h-[35px]"></div>
        </div>

        </PageFade>

    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout border="true">{page}</Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      test: ""
    },
    revalidate: 1,
  };
}
