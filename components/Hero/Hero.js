import React from 'react'

const Hero = () => {
  return (
    <div className='hero min-h-screen w-full relative flex'>

          <div className="absolute h-full w-full overflow-hidden js-parallax">

            <div className="relative h-full w-full">


              <div className="relative h-full w-full block md:block">
                <ImageFade
                src="/image/del/st-pauls-home-hero.jpg"
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
  )
}

export default Hero