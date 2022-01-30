import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../../components/Layout/Layout'

import AccordionEvents from '../../components/Accordion/AccordionEvents'
import Billboard from '../../components/Billboard/Billboard'

import SubscribeForm from '../../components/SubscribeForm/SubscribeForm'
import Star from '../../public/image/icon/star.svg'
import Blockquote from '../../components/Blockquote/Blockquote'
import Marquee from '../../components/Marquee/Marquee'
import Carousel from '../../components/Carousel/Carousel'
import BookingSection from '../../components/BookingSection/BookingSection'
import PageFade from '../../components/PageFade'



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
    content_alignment: 'left',
    content_alignment_mob: 'center',
    content_alignment_vertical_mob: 'top',
    bg_type: 'img_full', // caption_full / img_full
    bg_caption: '',
    img: {
      url: '/image/del/our-rooms.jpg'
    },
    margin_bottom: true,
    round_button: {
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const MarqueeWords = '<em>play.</em> &nbsp;watch. &nbsp;<em>listen.</em> &nbsp;participate. &nbsp;<em>dance.</em> &nbsp;celebrate. &nbsp;<em>attend.</em> &nbsp;';

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

        <div className="spacer h-[120px] lg:h-[150px]"></div>

        <div className="spacer h-[50px] lg:h-[150px]"></div>

        <Marquee words={MarqueeWords}/>

        <AccordionEvents/>

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