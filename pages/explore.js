import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../components/Layout/Layout'

import ButtonRound from '../components/Links/ButtonRound'
import PageFade from '../components/PageFade'
import ImageFade from '../components/ImageFade/ImageFade'
import ParallaxItem from '../components/UI/ParallaxItem'

// Locations
const locations = [
  {
    img: {
      url: '/image/del/explore/img1.jpg',
      caption: "Ronnie Scotts"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img2.jpg',
      caption: "Twinnings Tea Palace"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img3.jpg',
      caption: "St Paul's Whispering Gallery"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img4.jpg',
      caption: "London Bus Tour"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img5.jpg',
      caption: "Liberty London"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img6.jpg',
      caption: "St Paul’s Whispering Gallery"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img1.jpg',
      caption: "Ronnie Scotts"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img2.jpg',
      caption: "Twinnings Tea Palace"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img3.jpg',
      caption: "St Paul's Whispering Gallery"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img4.jpg',
      caption: "London Bus Tour"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img5.jpg',
      caption: "Liberty London"
    } 
  },
  {
    img: {
      url: '/image/del/explore/img6.jpg',
      caption: "St Paul’s Whispering Gallery"
    } 
  }
]

export default function Page({test}) {


  useEffect(() => {
    gsapSettings.init()
  }, []);
  
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
        
        <section className="container relative">

          <div className="absolute w-full h-full top-0 left-0 container">
            <div className="sticky top-0 min-vh100 flex items-center justify-center flex-col">
              <h1 className="heading-brand-medium text-center">Get <em>lost</em> in <br/>the <em>City</em></h1>
            </div>
          </div>

          
          <div className="lg:grid grid-cols-2 items-start overflow-hidden pb-20">
            
            { locations &&
              locations.map( (location, i) => {

                let count = i;

                if ( count >= 6 ) {
                  count = count - 6;
                }

                let caption;

                ( location?.img?.caption ? caption = location.img.caption : null )

                let classOuter = "";
                let classInner = "";
                

                if ( count == 0 ) {
                  classOuter = "lg:translate-x-1/4";
                } else if ( count == 1 ) {
                  classOuter = "mx-auto lg:mx-0 lg:ml-auto";
                } else if ( count == 2 ) {
                  classOuter = "lg:ml-auto";
                } else if ( count == 3 ) {
                  classOuter = "ml-auto lg:ml-0 lg:translate-x-2/3";
                } else if ( count == 4 ) {
                  classOuter = "";
                } else if ( count == 5 ) {
                  classOuter = "mx-auto lg:mx-0 lg:-translate-x-1/4";
                }
                

                if ( count == 0 ) {
                  classInner = "";
                } else if ( count == 1 ) {
                  classInner = "lg:mt-[50%]";
                } else if ( count == 2 ) {
                  classInner = "";
                } else if ( count == 3 ) {
                  classInner = "lg:mt-[50%]";
                } else if ( count == 4 ) {
                  classInner = "";
                } else if ( count == 5 ) {
                  classInner = "lg:mt-[50%]";
                }

                return (<div key={i} className={`explore-item mt-32 lg:mt-0 w-9/12 lg:w-6/12 transform ${classOuter}`}>
                    <ParallaxItem className="">
                      <div className={`relative  ${classInner}`}>

                          <div className="relative pt-[100%] cursor-wrap">
                            { location?.img?.url &&
                            <ImageFade
                                src={location.img.url}
                                layout="fill"
                                alt={caption}/>
                            }
                            
                            <div className="absolute cursor">
                              <ButtonRound url="#" title="View <br>on map" bg="bg-white" color="text-black"/>
                            </div>

                          </div>

                          { caption &&
                          <div className="absolute uppercase text-xs leading-13 lg:text-16px lg:leading-13 top-full left-0 mt-4">{caption}</div> }
                      </div>
                      </ParallaxItem>
                  </div>)
                }
              )
            }

          
          </div>
            

        </section>

        
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
