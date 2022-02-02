import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import AccordionRooms from '../components/Accordion/AccordionRooms'
import Billboard from '../components/Billboard/Billboard'

import Marquee from '../components/Marquee/Marquee'

import PageFade from '../components/PageFade'



export default function Page({test}) {


  useEffect(() => {gsapSettings.init()}, []);

  const Billboard_1 = {
    title:  'Our Rooms',
    copy: '<p>A new, unique London hotel, a short step from the historic St Paul\'s Cathedral and the surrounding area.</p><p>Each bedroom offers guests a comfortable escapism influenced by London\'s rich history and charm through artwork, unique design touchpoints and luxurious bed linen.</p><p>Each room is designed to offer a distinctive and stylish feel and ensure each stay with us feels fresh and new.</p>',
    cta:    {
      cta_title:  '',
      cta_url:    ''
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
        name:     "Guest Rooms",
        bed:      "Queen/King",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "Guest Rooms",
        copy: "<p>Expertly designed, both the blue and red guestrooms offer an intimate yet comfortable experience in our unique London Hotel. The relaxed, modern and sophisticated feel of our guest room enhanced by added extras, including an elegant marble ensuite.</p>",
        ameneties: [
          "50 inch HD TV",
          "Mini Bar",
          "In Room Safe",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee Maker",
          "Alarm Clock",
          "Espresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Superior Rooms",
        bed:      "Queen/King",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "Superior Rooms",
        copy: "<p>Located on the higher floors of Lost Property and offering views overlooking St Pauls through our large floor to ceiling windows. The Superior Rooms, offer guests a bright and balanced guestroom.</p>",
        ameneties: [
          "50” HD TV",
          "In-room safe",
          "Mini bar",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee maker",
          "Alarm Clock",
          "Espresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Deluxe Rooms",
        bed:      "Queen/King",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "Deluxe Rooms",
        copy: "<p>Within our Deluxe Rooms guests can enjoy the extra comfort of a spacious suite with the added touch including a barista-like experience from our Nespresso machines that you can enjoy within your room throughout the day.</p>",
        ameneties: [
          "50 inch HD TV",
          "Mini Bar",
          "In Room Safe",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee Maker",
          "Alarm Clock",
          "Bathrobe and Sleepers",
          "Espresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Junior Suite",
        bed:      "Super King",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "Junior Suite",
        copy: "<p>Spacious and bright , our Junior Suites include a lounge area with a comfortable sofa bed. The added touch includes a barista-like experience from our Nespresso machines that you can enjoy within your room throughout the day.</p>",
        ameneties: [
          "65 inch HD TV",
          "Mini Bar",
          "In Room Safe",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee Maker",
          "Alarm Clock",
          "Bathrobe and Sleepers",
          "Espresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "St Paul's Junior Suite",
        bed:      "Super King",
        sleeps:   "Sleeps x2",
      },
      content: {
        title: "St Paul's Junior Suite",
        copy: "<p>In our luxurious St Paul's Junior Suite Within guests can enjoy the extra comfort of a large room with a separate living area including a dining table and 2 bathrooms. Take in the incredible views of the City and overlooking St Paul's cathedral. </p>",
        ameneties: [
          "65 inch HD TV",
          "Mini Bar",
          "In Room Safe",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee Maker",
          "Alarm Clock",
          "Bathrobe and Sleepers",
          "Espresso Coffee Machine"
        ],
        img: "/image/del/accordionrooms/example.jpg"
      },
      book_btn: ""
    },
    {
      table_row: {
        name:     "Family Rooms",
        bed:      "Super King/2x Singles",
        sleeps:   "Sleeps x4",
      },
      content: {
        title: "Family Rooms",
        copy: "<p>It's fun for all the family in our connected rooms. Guests and little ones can enjoy the space of a superior twin room connected to a Standard King room. Upon arrival, we'll provide kids with a playkit and local map to encourge creativity and adventure during their stay! </p>",
        ameneties: [
          "50 inch HD TV",
          "Mini Bar",
          "In Room Safe",
          "Iron",
          "Ironing Board",
          "Hairdryer",
          "Tea and Coffee Maker",
          "Alarm Clock",
          "Espresso Coffee Machine"
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
    <Layout border="">{page}</Layout>
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
