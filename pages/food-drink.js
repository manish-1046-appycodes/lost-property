import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import AccordionMenu from '../components/Accordion/AccordionMenu'
import Marquee from '../components/Marquee/Marquee'
import FoodDrinkCarousel from '../components/FoodDrinkCarousel/FoodDrinkCarousel'
import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import PageFade from '../components/PageFade'
import ChevDown from '../public/image/icon/chev-down.svg'


const carouselItems1 = [
    {
        img: {
            url: "/image/del/food-drink/car-1-1.jpg",
            alt: "Alt"
        }
    },
    {
        img: {
            url: "/image/del/food-drink/car-1-2.jpg",
            alt: "Alt"
        }
    },
    {
        img: {
            url: "/image/del/food-drink/car-1-1.jpg",
            alt: "Alt"
        }
    },
    {
        img: {
            url: "/image/del/food-drink/car-1-2.jpg",
            alt: "Alt"
        }
    }
];

const carouselItems2 = [
    {
        name: "Keys, <br/>By Wrapped Studios",
        img: {
            url: "/image/del/food-drink/img1.jpg",
            alt: "Alt"
        }
    },
    {
        name: "Keys, <br/>By Wrapped Studios",
        img: {
            url: "/image/del/food-drink/img2.jpg",
            alt: "Alt"
        }
    },
    {
      name: "Keys, <br/>By Wrapped Studios",
      img: {
        url: "/image/del/food-drink/img3.jpg",
          alt: "Alt"
      }
    },
    {
        name: "Keys, <br/>By Wrapped Studios",
        img: {
            url: "/image/del/food-drink/img2.jpg",
            alt: "Alt"
        }
    }
];

const carouselItems3 = [
    {
        name: "Blue Lagoon, <br/>Tequila, blue curacao and grapefruit",
        img: {
            url: "/image/del/food-drink/car-3-1.jpg",
            alt: "Alt"
        }
    },
    {
        name: "Blue Lagoon, <br/>Tequila, blue curacao and grapefruit",
        img: {
            url: "/image/del/food-drink/car-3-2.jpg",
            alt: "Alt"
        }
    },
    {
      name: "Blue Lagoon, <br/>Tequila, blue curacao and grapefruit",
      img: {
        url: "/image/del/food-drink/car-3-3.jpg",
          alt: "Alt"
      }
    }
];

const MarqueeWords1 = '<em>eat.</em>  scoff.  <em>munch.</em>  stuff.  <em>taste.</em>  demolish.  <em>savor.</em>  chomp.  <em>nibble.</em>  nosh. ';
const MarqueeWords2 = '<em>drink.</em>  gargle.  <em>slurp.</em>  sip.  <em>quaff.</em>  gulp.  <em>swig.</em>  swirl. ';

const Billboard_1 = {
    title:  '',
    logo: {
      url: '/image/del/tattle-coffee-house.svg',
      alt: 'Found Bar & Restaurant'
    },
    copy_img: {
      url: '/image/del/tattle-coffee-house-inner.jpg',
      alt: 'Tattle Coffee House'
    },
    copy: '<p>Tattle - Finding the lost art of conversation.</p>',
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
    margin_bottom: false,
    round_button: {
      url: '#',
      bg_class: 'bg-green-1',
      title: 'Visit <br>Us'
    }
  }

export default function Page({test}) {

    useEffect(() => {gsapSettings.init()}, []);

    return (
    <>
    <PageFade>
        <Head>
            <title>Lost Property</title>
            <meta name="description" content="Lost Property" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <FoodDrinkCarousel carouselItems={carouselItems1}/>

        <div className="pb-[170px] xl:pb-[200px]">
            <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[244px] lg:max-w-[976px] w-full mx-auto">
                <div className="
                border border-current min-h-[56px] lg:min-h-[75px] p-5 py-2 lg:px-14 items-center flex relative">
                2 People
                <ChevDown className="absolute right-5"/>
                </div>
                <div className="
                border border-current min-h-[56px] lg:min-h-[75px] p-5 py-2 lg:px-14 items-center flex relative">
                20 Dec 2021
                <ChevDown className="absolute right-5"/>
                </div>
                <div className="
                border border-current min-h-[56px] lg:min-h-[75px] p-5 py-2 lg:px-14 items-center flex relative">
                7:00pm
                <ChevDown className="absolute right-5"/>
                </div>
                <button className="min-h-[56px] lg:min-h-[75px] p-5 py-2 lg:px-14 items-center flex justify-center bg-white text-black uppercase whitespace-nowrap"
                aria-hidden="true">Find a Table</button>
            </div>
        </div>

        <Marquee words={MarqueeWords1}/>
        <Carousel imgs={carouselItems2} colourTheme="blue"/>

        <div className="py-[170px] xl:py-[200px]">

        <AccordionMenu/>

        </div>

        <Marquee words={MarqueeWords2}/>
        <Carousel imgs={carouselItems3} colourTheme="blue"/>

        <SubscribeForm/>

        <div className="bg-cream-1 pt-[80px] lg:pt-[120px]">
            <Billboard
            settings={Billboard_1}
            />
        </div>


    </PageFade>

    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout border="true" colourTheme="blue" headerBgColor="light">{page}</Layout>
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
