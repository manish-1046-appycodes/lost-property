import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import ButtonSecondary from '../components/Links/ButtonSecondary'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Carousel/Carousel'
import BookingSection from '../components/BookingSection/BookingSection'


export default function Page({test}) {

  return (
    <>

      <Head>
        <title>Lost Property</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      
      <div className='hero min-h-screen w-full relative flex'>
        
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full js-parallax overflow-hidden">
            <Image
            src="/image/del/home-hero.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt=""/>
          </div>
        </div>
        
        <div className="container text-white m-auto relative text-center">
          <h1 className="heading-brand-small hidden lg:block">Find yourself in our <br/><em>neighbourhood?</em></h1>
        </div>

      </div>

      <section className="container">

        <div className="lg:min-h-screen pb-[255px] mb:pb-36 relative">
          
          <div className="flex relative z-10">
            <div className="w-10/12 md:w-6/12 max-w-[598px] mx-auto p-4 lg:px-14 lg:py-9 bg-blue-1 text-white text-center min-h-[308px] lg:min-h-[700px] flex flex-col">
              <h2 className="heading-sub uppercase">Escapism</h2>
              <div className="m-auto py-5 max-w-[416px]">
                <p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?? {test}</p>
              </div>
              <div className="ml-auto text-white">
                <ButtonSecondary title="Our Story"/>
              </div>
            </div>
          </div>

          <p className="heading-brand-large font-display absolute bottom-0 mb-[-40px] lg:mb-[-6vh]">Lose <br/><em>yourself</em> <br/>in the <br/><em>moment</em></p>
        </div>

      </section>
      
      <Carousel/>

      <BookingSection/>

      <section className="relative my-28">

        <div className="container">
          <div className="lg:min-h-screen pb-[255px] mb:pb-36 relative">
            
            <div className="flex relative z-10">
              
              <div className="w-10/12 md:w-6/12 max-w-[598px] p-4 lg:px-14 lg:py-9 bg-white text-black text-center min-h-[308px] lg:min-h-[700px] flex flex-col md:mx-auto md:left-1/4 relative">
                <h2 className="heading-sub uppercase">Escapism</h2>
                <div className="m-auto py-5 max-w-[416px]">
                  <p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?? {test}</p>
                </div>
                <div className="ml-auto text-black">
                  <ButtonSecondary title="FIND OUT MORE"/>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="absolute h-full w-full top-0 left-0">
          <div className="relative h-full w-full js-parallax overflow-hidden">
            <Image
            src="/image/del/our-rooms.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt=""/>
          </div>
        </div>

      </section>



      <section className="relative">

        <div className="container">
          <div className="lg:min-h-screen pb-[255px] mb:pb-36 relative">
            
            <div className="flex relative z-10">
              
              <div className="w-10/12 md:w-6/12 max-w-[598px] p-4 lg:px-14 lg:py-9 bg-blue-1 text-white text-center min-h-[308px] lg:min-h-[700px] flex flex-col mx-auto">
                <div className="heading-sub uppercase text-center py-2">
                  <img className="inline-block" src="/image/del/found-bar-restaurant.svg" alt="Found Bar & Restaurant" loading="lazy"/>
                </div>
                <div className="m-auto py-5 max-w-[416px]">
                  <p>Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus.</p>
                </div>
                <div className="ml-auto text-white">
                  <ButtonSecondary title="FIND OUT MORE"/>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="absolute w-1/2 left-0 top-1/2 ">
          <div className="container">
            <h2 className="heading-brand-medium">Taste <br/>& tipple</h2>
          </div>
        </div>

        <div className="absolute h-full w-1/2 top-0 left-0 md:left-1/2">
          <div className="relative h-full w-full js-parallax overflow-hidden">
            <Image
            src="/image/del/found-bar-restaurant.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt=""/>
          </div>
        </div>

      </section>

      <Script id="GSAP" strategy="beforeInteractive" src="/js/gsap.min.js"/>
      <Script id="SCROLLTRIGGER" strategy="beforeInteractive" src="/js/ScrollTrigger.min.js"/>
      <Script id="DRAGGABLE" strategy="beforeInteractive" src="/js/Draggable.min.js"/>
      <Script id="INERTIA" strategy="beforeInteractive" src="/js/InertiaPlugin.min.js"/>
      <Script id="GSAPSETTINGS" strategy="afterInteractive" src="/js/gsap-settings.js"
      onLoad=
      {
        () => {
          gsapSettings.init();
        }
      }
      
      />

      <Script id="GSAPINIT" strategy="afterInteractive">
          
      </Script>

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
