import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import ButtonSecondary from '../components/Links/ButtonSecondary'
import Layout from '../components/Layout/Layout'

import BookingSection from '../components/BookingSection/BookingSection'
import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import AccordionEvents from '../components/Accordion/AccordionEvents'
import Marquee from '../components/Marquee/Marquee'
import ExploreCarousel from '../components/ExploreCarousel/ExploreCarousel'
import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import Ctas from '../components/Ctas/Ctas'

export default function Page({test}) {

  const Billboard_1 = {
    title:  'ESCAPISM',
    copy:   '<p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at??</p>',
    cta:    {
      cta_title:  'Our Story',
      cta_url:    '#'
    },
    content_bg: 'bg-blue-1',
    content_color: 'text-white',
    content_alignment: 'center',
    bg_type: 'caption_full', // caption_full / img_full
    bg_caption: 'Lose <br/><em>yourself</em> <br/>in the <br/><em>moment</em>',
    img: {
      url: '/image/del/our-rooms.jpg'
    },
    margin_bottom: false
  }

  const Billboard_2 = {
    title:  'OUR ROOMS',
    copy: '<p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at? Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?</p>',
    cta:    {
      cta_title:  'Find out more',
      cta_url:    '#'
    },
    content_bg: 'bg-white',
    content_color: 'text-black',
    content_alignment: 'right',
    content_alignment_mob: 'right',
    content_alignment_vertical_mob: 'bottom',
    bg_type: 'img_full', // caption_full / img_full
    bg_caption: '',
    img: {
      url: '/image/del/our-rooms.jpg'
    },
    margin_bottom: true,
    round_button: {
      url: '#',
      bg_class: 'bg-blue-1',
      title: 'Book Room'
    }
  }

  const Billboard_3 = {
    title:  'OUR ROOMS',
    logo: {
      url: '/image/del/found-bar-restaurant.svg',
      alt: 'Found Bar & Restaurant'
    },
    copy: '<p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus.</p>',
    cta:    {
      cta_title:  'Find out more',
      cta_url:    '#'
    },
    content_bg: 'bg-blue-1',
    content_color: 'text-white',
    content_alignment: 'center',
    content_alignment_vertical: 'top',
    content_alignment_mob: 'left',
    content_alignment_vertical_mob: 'top',
    bg_type: 'caption_img', // caption_full / img_full / caption_img
    bg_caption: 'Taste <br/>& tipple',
    img: {
      url: '/image/del/found-bar-restaurant.jpg',
      img_pos: 'right'
    },
    margin_bottom: true,
    round_button: {
      url: '#',
      bg_class: 'bg-red-1',
      title: 'Book Table'
    }
  }

  const Billboard_4 = {
    title:  'OUR ROOMS',
    logo: {
      url: '/image/del/tattle-coffee-house.svg',
      alt: 'Found Bar & Restaurant'
    },
    copy_img: {
      url: '/image/del/tattle-coffee-house-inner.jpg',
      alt: 'Tattle Coffee House'
    },
    copy: '<p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus.</p>',
    cta:    {
      cta_title:  '',
      cta_url:    ''
    },
    content_bg: 'bg-beige-1',
    content_color: 'text-black',
    content_alignment: 'center',
    content_alignment_vertical: 'bottom',
    content_alignment_mob: 'right',
    content_alignment_vertical_mob: 'top',
    bg_type: 'caption_img', // caption_full / img_full / caption_img
    bg_caption: '',
    img: {
      url: '/image/del/tattle-coffee-house.jpg',
      img_pos: 'left'
    },
    margin_bottom: true,
    round_button: {
      url: '#',
      bg_class: 'bg-green-1',
      title: 'Visit <br>Us'
    }
  }

  return (
    <>

      <Head>
        <title>Lost Property</title>
        <meta name="description" content="Lost Property" />
        <link rel="icon" href="/favicon.ico" />       
      </Head>
      
      <div className='hero min-h-screen w-full relative flex'>
        
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full js-parallax overflow-hidden">
            <Image
            src="/image/del/home-hero.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt=""/>
          </div>
        </div>
        
        <div className="container text-white m-auto relative text-center">
          <h1 className="heading-brand-small hidden lg:block">Find yourself in our <br/><em>neighbourhood?</em></h1>
        </div>

      </div>
      
      <Billboard 
      settings={Billboard_1}
      />

      <Carousel/>

      <BookingSection/>

      <Billboard 
      settings={Billboard_2}
      />

      <Billboard 
      settings={Billboard_3}
      />

      <Billboard 
      settings={Billboard_4}
      />

      
      <Marquee/>
      <AccordionEvents/>
      
      <ExploreCarousel/>

      <SubscribeForm/>

      <Ctas/>

      <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.min.js"/>
      <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.min.js"/>
      <Script id="DRAGGABLE" strategy="beforeInteractive" src="/js/Draggable.min.js"/>
      <Script id="INERTIA" strategy="beforeInteractive" src="/js/InertiaPlugin.min.js"/>
      <Script id="GSAPSETTINGS" strategy="afterInteractive" src="/js/gsap-settings.js"
      onLoad=
      {
        () => {
          gsapSettings.init();
        }
      }
      
      />

      <Script id="GSAPINIT" strategy="afterInteractive">
          
      </Script>

    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
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
