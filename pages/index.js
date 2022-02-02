import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import BookingSection from '../components/BookingSection/BookingSection'
import Billboard from '../components/Billboard/Billboard'
import Carousel from '../components/Carousel/Carousel'
import AccordionEvents from '../components/Accordion/AccordionEvents'
import Marquee from '../components/Marquee/Marquee'
import ExploreCarousel from '../components/ExploreCarousel/ExploreCarousel'
import SubscribeForm from '../components/SubscribeForm/SubscribeForm'
import Ctas from '../components/Ctas/Ctas'
import ImageFade from '../components/ImageFade/ImageFade'
import PageFade from '../components/PageFade'

/* SVG */
import lpLogo from '../public/image/lost-property-logo-mob.svg';



export default function Page({test}) {

  useEffect(() => {gsapSettings.init()}, []);

  const Billboard_1 = {
    title:  'ESCAPISM',
    copy:   '<p>Situated in the heart of London, the Lost Property Hotel near St. Paul\'s Cathedral invites you to lose yourself in the moment.<br><br>Indulge in the lost arts and activities of eccentric living with a plethora of curiosities around every corner.<br><br>With 145 rooms beautifully furnished with a modern twist, a restaurant,bar and coffee house, the Lost Property Hotel is the ideal escapism inside and out offering travel seekers a one-of-a-kind experience.<br><br>Step away from the hussle of the Capital and escape with us to find a new and enticing place to get lost.</p>',
    cta:    {
      cta_title:  'Our Story',
      cta_url:    '/story'
    },
    content_bg: 'bg-blue-1',
    content_color: 'text-white',
    content_alignment: 'center',
    bg_type: 'caption_full', // caption_full / img_full
    bg_caption: 'Lose <br/><em>yourself</em> <br/>in the <br/><em>moment</em>',
    img: {
      url: '/image/del/our-rooms.jpg'
    },
    margin_top: false,
    margin_bottom: false
  }

  const Billboard_2 = {
    title:  'OUR ROOMS',
    copy: '<p>At our new hotel in St. Pauls each guest room is influenced by eclectic artwork and contemporary design touches inspired by London\'s rich and charming history.<br><br>Guests will be encouraged to enjoy luxurious escapism and to discover something new and exciting beyond the boundaries of daily life.<br><br>Take a moment to pause and allow yourself to be immersed in the stylish, luxurious and curious surroundings, all of which that are accompanied by excellent service and considered design.</p>',
    cta:    {
      cta_title:  'Find out more',
      cta_url:    '/rooms'
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
    margin_top: true,
    margin_bottom: true,
    round_button: {
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const Billboard_3 = {
    title:  '',
    logo: {
      url: '/image/del/found-bar-restaurant.svg',
      alt: 'Found Bar & Restaurant'
    },
    copy: '<p>Freshly foraged food found in local london markets and exotic libations concocted by inquisitive mixologists.<br><br>Where inhibitions may be lost but great stories are found among the fine seat leathers and marble topped bar.<br><br>We offer the finest dining and drinking in the Found Resturant + Bar if you are living, working, or visiting the area near to St. Paul\'s Cathedral.</p>',
    cta:    {
      cta_title:  'Find out more',
      cta_url:    '/food-drink'
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
      url: '',
      bg_class: '',
      title: ''
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
    copy: '<p>Where tattled tales of the town are told and spoken amongst the best freshly ground coffee in Lost Property\'s, Coffee House, Tattle.<br><br>Sink into our seating and take a weight off with an aromatic coffee, or delicious fine tea, take some time to enjoy our art work and absorb the surroundings.</p>',
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
    bg_caption: 'Sip it',
    img: {
      url: '/image/del/tattle-coffee-house.jpg',
      img_pos: 'left'
    },
    margin_bottom: true,
    round_button: {
      url: '',
      bg_class: '',
      title: ''
    }
  }

  const MarqueeWords = '<em>craft.</em> &nbsp;entertainment. &nbsp;<em>art.</em> &nbsp;events. &nbsp;<em>music.</em> &nbsp;craft. &nbsp;<em>entertainment.</em> &nbsp;art. &nbsp;<em>events.</em> &nbsp;music. &nbsp;';

  const carouselItems1 = [
    {
      name: 'Franklin\'s Philosophy,<br/>By Wrapped Studios',
      img: {
        url: '/image/del/carousel/item-1.jpg',
        alt: 'Franklin\'s Philosophy, By Wrapped Studios'
      }
    },
    {
      name: 'St. Paul\'s Cathedral,<br/>London',
      img: {
        url: '/image/del/carousel/item-2.jpg',
        alt: 'St Paul\'s cathedral, London'
      }
    },
    {
      name: 'Guest Room,<br/>Lost Property, St. Paul\'s',
      img: {
        url: '/image/del/carousel/item-3.jpg',
        alt: 'Guest Room,Lost Property, St. Paul\'s'
      }
    },
    {
      name: 'Tattle - Coffee House,<br/>Lost property, St Paul\'s',
      img: {
        url: '/image/del/carousel/item-4.jpg',
        alt: 'Tattle - Coffee House, Lost Property St. Paul\'s'
      }
    },
    {
      name: 'Found - Bar and Restaurant,<br/>Lost Property, St Paul\'s',
      img: {
        url: '/image/del/carousel/item-5.jpg',
        alt: 'Found - Bar and Restaurant, Lost Property, St Paul\'s'
      }
    }
  ];

  const carouselItems2 = [
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example1.jpg",
            alt: "Alt"
        }
    },
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example2.jpg",
            alt: "Alt"
        }
    },
    {
      name: "Whispering Gallery AT St Paul’s Cathedral",
      img: {
          url: "/image/del/explorecarousel/example1.jpg",
          alt: "Alt"
      }
    },
    {
        name: "Whispering Gallery AT St Paul’s Cathedral",
        img: {
            url: "/image/del/explorecarousel/example2.jpg",
            alt: "Alt"
        }
    }
  ];

  const ctas = [
    {
      bgClass: "bg-cream-1",
      textColor: "text-black",
      copy: "Looking to host a team away day in central London or the St. Pauls area? Need somewhere for a workshop, client meeting or gathering? We've got lots of spaces for you across our hotel to suit your requirements and the perfect backdrop for a productive and successful meeting.",
      title: "Need Space",
      img: "/image/del/cta/cta1.jpg",
      btnTitle: "Enquire",
      btnUrl: "/contact"
    },
    {
      bgClass: "bg-blue-1",
      textColor: "text-white",
      copy: "Celebrate occasions big and small, with our private spaces. Whatever the occasion we have the ideal function rooms for your event. You just bring your glam-rags, and we'll sort the rest.",
      title: "Let’s Partaay",
      img: "/image/del/cta/cta2.jpg",
      btnTitle: "Enquire" ,
      btnUrl: "/contact"
    }
  ];



  return (
    <>
      <PageFade>
      <Head>
        <title>Lost Property</title>
        <meta name="description" content="Lost Property" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='hero min-h-screen w-full relative flex'>

        <div className="absolute h-full w-full overflow-hidden js-parallax">

          <div className="relative h-full w-full">


            <div className="relative h-full w-full block md:block">
              <ImageFade
              src="/image/del/home-hero.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              alt="Lost Property - St Paul's, London"/>
            </div>

          </div>

          <div className="bg-black absolute inset-0 opacity-50"></div>

        </div>

        <div className="container text-white m-auto relative lg:text-center">
          <p className="heading-brand-small hidden lg:block">Found yourself in our <br/><em>neighbourhood?</em></p>
          <h1 className="lg:hidden">
            <ImageFade
            src="/image/lost-property-logo-mob.svg"
            width="277"
            height="119"
            alt="Lost Property - St Paul's London"
            />
          </h1>
        </div>

      </div>

      <Billboard
      settings={Billboard_1}
      />

      <Carousel imgs={carouselItems1}/>


      <Billboard
      settings={Billboard_2}
      />

      <Billboard
      settings={Billboard_3}
      />

      <Billboard
      settings={Billboard_4}
      />




      <SubscribeForm/>

      <Ctas ctas={ctas}/>

      </PageFade>

    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout headerBgColor="light" border="true">{page}</Layout>
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
