import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../../components/Layout/Layout'

import AccordionEvents from '../../components/Accordion/AccordionEvents'

import Marquee from '../../components/Marquee/Marquee'
import PageFade from '../../components/PageFade'
import Meta from '../../components/Meta/Meta'
import { getPageSeo } from '../../lib/gql-query'


export default function Page({test, SEO}) {


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
        
        <Meta SEO={SEO}/>

        <div className="spacer h-[120px] lg:h-[150px]"></div>

        <div className="spacer h-[50px] lg:h-[150px]"></div>

        <Marquee words={MarqueeWords}/>

        <AccordionEvents/>

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

  const seo = await getPageSeo('events', 'URI');
  
  return {
    props: {
      test: "",
      SEO: seo?.page?.seo || ''
    },
    revalidate: 1,
  };
}
