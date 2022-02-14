import { useEffect } from 'react'

import Head from 'next/head'

import Layout from '../../components/Layout/Layout'




import PageFade from '../../components/PageFade'
import ImageFade from '../../components/ImageFade/ImageFade'
import ButtonRound from '../../components/Links/ButtonRound'



export default function Page({test}) {


  useEffect(() => {gsapSettings.init()}, []);

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

        <div className="container">
            
            <div className="max-w-1430px mx-auto">
            
                <h2 className="text-[42px] lg:text-[72px] md:max-w-[500px] mb-6 lg:mb-16 col-span-2 leading-12">London’s best Secret spots</h2>
                
                <div className=" mx-auto lg:grid grid-4-mob lg:grid-4-lg gap-4 lg:gap-9 pt-[85px] lg:pt-0 pb-3 lg:pb-9 relative">
                
                    <div className="col-span-2 mb-8 lg:mb-0 xl:grid gap-x-4 lg:gap-x-9">

                        

                        <div className=" md:max-w-[420px]  col-span-2 mb-6">
                            <div className="wysiwyg">
                                <p>1. Whispering Gallery, St. Paul’s Cathedral</p>
                                <p>Not so much a gallery, but a walkway that leads around the inside of the St Paul’s most recognisable bit – its dome. While on this walkway you’ll be able to hear someone speaking from the opposite end, even if they’re whispering, thanks to some impressive early eighteenth-century acoustics.</p>

                            </div>

                        </div>

                        

                    </div>
                    
                    <div className=" w-1/2 lg:w-full  ml-auto lg:ml-0">
                        <div className="pt-[100%] lg:pt-[82%] relative">
                        <ImageFade
                            src="/image/del/accordionevents/example.jpg"
                            objectFit="cover"
                            objectPosition="center"
                            alt="ALT"
                            layout="fill"
                        />
                        </div>
                    </div>
                    <div className="invisible hidden lg:block">
                        <button className="text-grey-1 relative w-[26px] h-[26px] lg:w-[68px] lg:h-[68px]" aria-hidden="true">
                        <span className="w-full h-[1px] bg-current absolute top-1/2 left-0"></span>
                        <span className="w-[1px] h-full bg-current absolute top-0 left-1/2"></span>
                        </button>
                    </div>

                    <div className="actions absolute bottom-0 left-0 flex space-x-3 lg:space-x-5 py-3 lg:py-9">
                        <ButtonRound url="#" title="Buy <br/>Tickets" bg="bg-red-1" size="small"/>
                        <ButtonRound url="#" title="Share <br/>Link" bg="bg-red-1" size="small" alt="isAlt"/>
                    </div>

                </div>

            </div>

        </div>


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
