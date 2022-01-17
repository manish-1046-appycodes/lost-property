import ButtonSecondary from '../Links/ButtonSecondary'
import Image from 'next/image'

const Billboard = ( {settings} ) => {
    console.log(settings)
    return (
        <section className={`relative ${settings.margin_bottom ? "my-28" : "n" }`}>
            <div className="container">
                <div className="lg:min-h-screen pb-[255px] md:pb-36 relative">
                
                    <div className="flex justify-around relative z-10">
                        <div 
                        className={`w-9/12 md:w-6/12 max-w-[598px] p-4 lg:px-14 lg:py-9 text-center min-h-[308px] lg:min-h-[700px] flex flex-col justify-between items-center space-y-10 relative ${settings.content_color} ${settings.content_bg} ${settings.content_alignment === 'left' ? 'md:-left-1/4' : ''} ${settings.content_alignment === 'right' ? 'md:left-1/4' : ''}`}>
                            <h2 className="heading-sub uppercase">{settings.title}</h2>
                            <div className="py-5 max-w-[416px]" dangerouslySetInnerHTML={ {__html: settings.copy} }/>
                            <div className="ml-auto text-white">
                                <ButtonSecondary title={settings.cta.cta_title}/>
                            </div>
                        </div>
                    </div>

                    {
                    settings.bg_type === 'caption_full' && (<p className="heading-brand-large font-display absolute bottom-0 mb-[-40px] lg:mb-[-6vh]" dangerouslySetInnerHTML={ {__html: settings.bg_caption} }></p>)            
                    }

                </div>
            </div>

            { settings.bg_type === 'img_full' &&
            (<div className="absolute h-full w-full top-0 left-0">
                <div className="relative h-full w-full js-parallax overflow-hidden">
                    <Image
                    src={settings.img.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    alt=""/>
                </div>
            </div>)}

        </section>
    )
}

export default Billboard
