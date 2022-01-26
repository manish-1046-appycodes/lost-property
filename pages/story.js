import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import PageIntro from '../components/PageIntro/PageIntro'
import Billboard from '../components/Billboard/Billboard'

import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import Star from '../public/image/icon/star.svg'
import Blockquote from '../components/Blockquote/Blockquote'
import Marquee from '../components/Marquee/Marquee'
import Carousel from '../components/Carousel/Carousel'
import PageFade from '../components/PageFade'



export default function Page({test}) {


  useEffect(() => {gsapSettings.init()}, []);

  const Billboard_2 = {
    title:  'Our Story',
    copy: '<p>A hotel unlike any other. Lost Property is Curio Collection by Hilton hotel designed to evoke the lost arts and activities of eccentric living with a plethora of curiosities around every corner. The walls are lined with visual spectacles, bespoke creations and ecclectic sculptures. Designed for losing yourself, just for a moment. Guests are invited to dine in Found, the hotel's bar and restaurant which celebrates unique and timeless classic British dishes and cocktails each with their own unusual and contemporary twist and Tattle, our neighbourly Coffee House, offers the finest brewed coffees and teas, freshly baked goods from local suppliers and takeaway options for those passing swiftly.</p>',
    cta:    {
      cta_title:  'Find out more',
      cta_url:    '#'
    },
    content_bg: 'bg-white',
    content_color: 'text-black',
    content_alignment: 'right',
    content_alignment_mob: 'right',
    content_alignment_vertical_mob: 'top',
    bg_type: 'img_full', // caption_full / img_full
    bg_caption: '',
    img: {
      url: '/image/del/story/billboard.jpg'
    },
    margin_bottom: true,
    round_button: {
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const Carouselitems = [
    {
      name: 'Keys,<br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/car1.jpg',
        alt: 'Keys, By Wrapped Studios'
      }
    },
    {
      name: 'Keys,<br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/car2.jpg',
        alt: 'Keys, By Wrapped Studios'
      }
    },
    {
      name: 'Keys,<br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/car3.jpg',
        alt: 'Keys, By Wrapped Studios'
      }
    }
  ];
  const MarqueeWords = 'peek.  stare.  look.  glance.  ponder.  amuse.  contemplate.  examine.  reflect.  speculate.';

  return (
    <>
      <PageFade>
        <Head>
            <title>Lost Property</title>
            <meta name="description" content="Lost Property" />
            <link rel="icon" href="/favicon.ico" />
            <script>
            </script>
        </Head>

        <PageIntro/>

        <Billboard
        settings={Billboard_2}
        />

        <Blockquote/>

        <div className="lg:my-20">
            <Marquee words={MarqueeWords}/>
            <Carousel imgs={Carouselitems}/>
        </div>


        <SubscribeForm/>
      </PageFade>
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
