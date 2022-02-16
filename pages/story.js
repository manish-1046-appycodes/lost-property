import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import PageIntro from '../components/PageIntro/PageIntro'
import Billboard from '../components/Billboard/Billboard'

import Blockquote from '../components/Blockquote/Blockquote'
import Marquee from '../components/Marquee/Marquee'
import Carousel from '../components/Carousel/Carousel'
import PageFade from '../components/PageFade'
import Ctas from '../components/Ctas/Ctas'
import AdobeAnalyticsUpdate from '../components/AdobeAnalytics/AdobeAnalyticsUpdate'


export default function Page({test}) {


  useEffect(() => {
    gsapSettings.init()}, []
  );

  const Billboard_1 = {
    title:  'Our Story',
    copy: '<p>A modern London hotel unlike any other. Lost Property is Curio Collection by Hilton hotel designed to evoke the lost arts and activities of eccentric living with a plethora of curiosities around every corner.<br><br>The walls are lined with visual spectacles, bespoke creations and eclectic sculptures. Our stylish London hotel is designed for losing yourself, just for a moment.</p>',
    cta:    {
      cta_title:  '',
      cta_url:    ''
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

  const Billboard_2 = {
    title:  'Our Story',
    copy: '<p>Offering a sanctuary in the heart of the historic City of London, Lost Property, Curio Collection by Hilton hotel, has unrivalled proximity to some of the city’s most iconic landmarks, such as St. Paul’s Cathedral, the Tate Modern, and the Millennium Bridge.<br><br>Designed to offer both the avid explorer and city native an eclectic escape, offering authentic discoveries through unexpected forms and layered finishes. Through hand crafted glass chandeliers, curated art installations and warm tactile materials, the guest will journey through quirky, unexpected interiors, finding themselves lost in the moment. Providing embellished experiences with ornate accents – for those who appreciate eclectic art, culture and lifestyle.</p>',
    cta:    {
      cta_title:  '',
      cta_url:    ''
    },
    content_bg: 'bg-white',
    content_color: 'text-black',
    content_alignment: 'left',
    content_alignment_mob: 'right',
    content_alignment_vertical_mob: 'top',
    bg_type: 'img_full', // caption_full / img_full
    bg_caption: '',
    img: {
      url: '/image/del/story/billboard-2.jpg'
    },
    margin_top: true,
    margin_bottom: false,
    round_button: {
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const Carouselitems = [
    {
      name: 'Wrapped Up, <br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/carousel-1.jpg',
        alt: 'Wrapped Up, By Wrapped Studios'
      }
    },
    {
      name: 'Portal, <br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/carousel-2.jpg',
        alt: 'Portal, By Wrapped Studios'
      }
    },
    {
      name: 'Manhattan\'s Myth, <br/>By Wrapped Studios',
      img: {
        url: '/image/del/story/carousel-3.jpg',
        alt: 'Manhattan\'s Myth, By Wrapped Studios'
      }
    },
    {
        name: 'Religious Retreats, <br/>By Wrapped Studios',
        img: {
          url: '/image/del/story/carousel-4.jpg',
          alt: 'Religious Retreats, By Wrapped Studios'
        }
      },
      {
          name: 'Eyes Wide Shut, <br/>By Wrapped Studios',
          img: {
            url: '/image/del/story/carousel-5.jpg',
            alt: 'Eyes Wide Shut, By Wrapped Studios'
          }
        },
  ];
  const MarqueeWords = '<em>peek.</em> &nbsp;stare. &nbsp;<em>look.</em> &nbsp;glance. &nbsp;<em>ponder.</em> &nbsp;amuse. &nbsp;<em>contemplate.</em> &nbsp;examine. &nbsp;<em>reflect.</em> &nbsp;speculate. &nbsp;';

  const ctas = [
    {
      bgClass: "bg-cream-1",
      textColor: "text-black",
      copy: "<p>Our superbly placed hotel also provides design led and impressive meeting spaces with all the facilities you would expect from a modern London hotel. An alternative to off the rack and vanilla shared work spaces, our rooms offer the opportunity to impress clients, seal the deal and let staff know they’re important.</p><p>Our excellent location ensures the meeting will be memorable and valued and with our expert staff supporting your event you can concentrate on the event itself.</p>",
      title: "Room to <br/>Impress",
      img: "/image/del/cta/cta1.jpg",
      btnTitle: "Enquire",
      btnUrl: "/contact",
      alt: true
    },
    {
      bgClass: "bg-blue-1",
      textColor: "text-white",
      copy: "<p>Impact and style are key to creating an enjoyable and memorable event, the Lost Property Hotel brings both, from the enviable position just a stones throw from the world famous St. Paul’s Cathedral to the historic area in the vicinity and countless landmarks of the capital, our location will impress.</p><p>We have a range of modern and stylish rooms within the hotel to tailor for your event, with expert staff on hand to allow you to concentrate on the partying!</p>",
      title: "Room for <br/>Occasion",
      img: "/image/del/cta/cta2.jpg",
      btnTitle: "Enquire" ,
      btnUrl: "/contact",
      alt: true
    }
  ];

  return (
    <>
      <PageFade>
        <Head>
            <title>A Modern and Stylish Hotel in London, Unlike Any Other</title>
            <meta name="description" content="The Lost Property is a Curio Collection by Hilton Hotel and is expertly designed for losing yourself, just for a moment. Explore our story here" />
            
        </Head>
        <AdobeAnalyticsUpdate/>

        <PageIntro/>

        <Billboard
        settings={Billboard_1}
        />

        <Blockquote/>

        <div className="lg:my-20">
            <Marquee words={MarqueeWords}/>
            <Carousel imgs={Carouselitems}/>
        </div>


        <Billboard
        settings={Billboard_2}
        />

        <Ctas ctas={ctas}/>

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
