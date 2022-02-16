import ImageFade from "../ImageFade/ImageFade"

const Hero = ({heroTitle, heroImage}) => {
    
    const imageUrl = heroImage?.sourceUrl;
    
    return (
    <div className='hero min-h-screen w-full relative flex'>

        <div className="absolute h-full w-full overflow-hidden js-parallax">

        <div className="relative h-full w-full">

            <div className="relative h-full w-full block md:block">
            { imageUrl && 
            <ImageFade
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            alt={heroImage?.altText || 'Lost Property - St Paul\'s, London'}/>}
            </div>

        </div>

        <div className="bg-black absolute inset-0 opacity-50"></div>

        </div>

        <div className="container text-white m-auto relative lg:text-center">
        <div className="heading-brand-small hidden lg:block" dangerouslySetInnerHTML={ {__html: heroTitle}}/>
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