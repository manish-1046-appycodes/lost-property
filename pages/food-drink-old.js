import { useEffect } from 'react'

import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout/Layout'

import AccordionMenu from '../components/Accordion/AccordionMenu'
import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import Marquee from '../components/Marquee/Marquee'
import FoodDrinkCarousel from '../components/FoodDrinkCarousel/FoodDrinkCarousel'
import PageFade from '../components/PageFade'
import Meta from '../components/Meta/Meta'
import { getPageSeo } from '../lib/gql-query'

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
        name: "Afternoon Tea at Found, <br/>Lost Property, St. Paul\'s",
        img: {
            url: "/image/del/food-drink/img1.jpg",
            alt: "Afternoon Tea at Found, Lost Property, St. Paul\'s"
        }
    },
    {
        name: "Found - Bar and Restaurant, <br/>Lost Property, St. Paul\'s",
        img: {
            url: "/image/del/food-drink/img2.jpg",
            alt: "Found - Bar and Restuarant, Lost Property, St. Paul\'s"
        }
    },
    {
      name: "Found - Bar and Restaurant, <br/>Lost Property, St. Paul\'s",
      img: {
        url: "/image/del/food-drink/img3.jpg",
          alt: "Found - Bar and Restuarant, Lost Property, St. Paul\'s"
      }
    },
    {
        name: "Found - Bar and Restaurant, <br/>Lost Property, St. Paul\'s",
        img: {
            url: "/image/del/food-drink/img4.jpg",
            alt: "Found - Bar and Restuarant, Lost Property, St. Paul\'s"
        }
    },
    {
        name: "Found - Bar and Restaurant, <br/>Lost Property, St. Paul\'s",
        img: {
            url: "/image/del/food-drink/img5.jpg",
            alt: "Found - Bar and Restuarant, Lost Property, St. Paul\'s"
        }
    },
];

const carouselItems3 = [
    {
        name: "Bitter Rocks, <br/>By Wrapped Media",
        img: {
            url: "/image/del/food-drink/car-3-1.jpg",
            alt: "Bitter Rocks, By Wrapped Media"
        }
    },
    {
        name: "Blue Lagoon, <br/>Tequila, blue curacao and grapefruit",
        img: {
            url: "/image/del/food-drink/car-3-2.jpg",
            alt: "Blue Lagoon, Tequila, blue curacao and grapefruit"
        }
    },
    {
      name: "Tequila Sunrise, <br/>Tequila, Vanilla Vodka, Passionfruit",
      img: {
        url: "/image/del/food-drink/car-3-3.jpg",
          alt: "Tequila Sunrise, Tequila, Vanilla Vodka, Passionfruit"
       }
    },
    {
        name: "Cox's Cuban Canary, <br/>By Wrapped Media",
        img: {
            url: "/image/del/food-drink/car-3-4.jpg",
            alt: "Cox's Cuban Canary, By Wrapped Media"
        }
    },
    {
        name: "Cocktails at Found, <br/>Lost Property, St. Paul\'s",
        img: {
            url: "/image/del/food-drink/car-3-5.jpg",
            alt: "Cocktails at Found, Lost Property, St. Paul\'s"
        }
      },
];

const MarqueeWords1 = '<em>eat.</em> &nbsp;scoff. &nbsp;<em>munch.</em> &nbsp;stuff. &nbsp;<em>taste.</em> &nbsp;demolish. &nbsp;<em>savor.</em> &nbsp;chomp. &nbsp;<em>nibble.</em> &nbsp;nosh. &nbsp;';
const MarqueeWords2 = '<em>drink.</em> &nbsp;gargle. &nbsp;<em>slurp.</em> &nbsp;sip. &nbsp;<em>quaff.</em> &nbsp;gulp. &nbsp;<em>swig.</em> &nbsp;swirl. &nbsp;';

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
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const opentableURL = '//www.opentable.co.uk/widget/reservation/loader?rid=269142&type=standard&theme=standard&color=1&iframe=true&domain=couk&lang=en-GB&newtab=false&ot_source=Restaurant%20website';

  export default function Page({test, SEO}) {

    useEffect(() => {
      

      // load open table script
      const script = document.createElement('script');
      script.src=opentableURL;
      script.async = true;
      document.querySelector('#openTableWidget').appendChild(script);
      

      gsapSettings.init()
    
    }, []);

    return (
    <>
    <PageFade>
        
        <Meta SEO={SEO}/>

        <FoodDrinkCarousel carouselItems={carouselItems1}/>
        
        <div id="openTableWidget" className='pb-28 lg:pb-52 flex justify-center'/>
        
        <Marquee words={MarqueeWords1}/>
        <Carousel imgs={carouselItems2} colourTheme="blue"/>

        <div className='py-28 lg:py-52'>
          <AccordionMenu/>
        </div>

        <div className="py-[170px] xl:py-[200px]"></div>

        <Marquee words={MarqueeWords2}/>
        <Carousel imgs={carouselItems3} colourTheme="blue"/>

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
    <Layout border="" colourTheme="blue" headerBgColor="light">{page}</Layout>
  )
}

export async function getStaticProps({ params }) {

  const seo = await getPageSeo('food-drink', 'URI');
  
  return {
    props: {
      test: "",
      SEO: seo?.page?.seo || ''
    },
    revalidate: 1,
  };
}
