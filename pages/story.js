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
    copy: '<p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at? Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?</p>',
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
  const MarqueeWords = '<em>peek</em>. stare. <em>look</em>.  glance.  <em>ponder</em>';

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
