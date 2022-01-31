import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import AccordionRooms from '../components/Accordion/AccordionRooms'
import PageIntro from '../components/PageIntro/PageIntro'
import Billboard from '../components/Billboard/Billboard'

import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import Star from '../public/image/icon/star.svg'
import Blockquote from '../components/Blockquote/Blockquote'
import Marquee from '../components/Marquee/Marquee'
import Carousel from '../components/Carousel/Carousel'
import BookingSection from '../components/BookingSection/BookingSection'
import PageFade from '../components/PageFade'



export default function Page({test}) {


  useEffect(() => {gsapSettings.init()}, []);

  const Billboard_1 = {
    title:  'Our Story',
    copy: '<p>Each bedroom offers guests a comfortable escapism influenced by London\'s rich history and charm through artwork, untique design touchpoints and luxurious bed linen.</p>',
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

  const MarqueeWords = '&nbsp;<em>kip.</em> &nbsp;sleep. &nbsp;<em>nap.</em> &nbsp;dream. &nbsp;<em>slumber.</em> &nbsp;doze. &nbsp;<em>snooze.</em> &nbsp;shut-eye. &nbsp;';

  const accordionData = [

    {
      table_row: {
        name:     "Name",
        bed:      "1 x Double",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "Guest Rooms - Blue & Red",
        copy: "<p>Expertly designed, both the blue and red guestrooms offer an intimate yet comfortable experience. The relaxed, modern and sophisticated feel of our guest room enhanced by added extras, including an elegant marble ensuite.</p>",
        ameneties: [
          "50” HD TV",
          "In-room safe",
          "Mini bar",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee maker",
          "Alarm Clock",
          "Nespresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Name",
        bed:      "2 x King Bed",
        sleeps:   "Sleeps x4",
      },
      content: {
        title: "Superior Rooms",
        copy: "<p>Located on the higher floors of Lost Property and offering views overlooking St Pauls, our large floor to ceiling windows. The Superior Rooms, offer guests a bright and balanced guestroom. </p>",
        ameneties: [
          "50” HD TV",
          "In-room safe",
          "Mini bar",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee maker",
          "Alarm Clock",
          "Nespresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Name",
        bed:      "2 x King Bed",
        sleeps:   "Sleeps x4",
      },
      content: {
        title: "GUESTS ROOMS - BLUE & RED",
        copy: "<p>Expertly designed, both the blue and red guestrooms offer an intimate yet comfortable experience. The relaxed, modern and sophisticated feel of our guest room enhanced by added extras, including an elegant marble ensuite.</p>",
        ameneties: [
          "50” HD TV",
          "In-room safe",
          "Mini bar",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee maker",
          "Alarm Clock",
          "Nespresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    }

  ]

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

        <Billboard
        settings={Billboard_1}
        />

        <div className="spacer h-[50px] lg:h-[150px]"></div>

        <Marquee words={MarqueeWords}/>

        <AccordionRooms accordionData={accordionData}/>

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
