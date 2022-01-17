import ButtonSecondary from '../Links/ButtonSecondary'
import Image from 'next/image'

const Billboard = ( {settings} ) => {
    console.log(settings)


    const captionImgClass = ( settings.bg_type === 'caption_img' && settings.img.img_pos === 'right' ) ? "md:left-1/2" : "md:left-0";
    
    const captionCaptionClass = ( settings.bg_type === 'caption_img' && settings.img.img_pos === 'right' ) ? "absolute w-1/2 left-0 top-1/2" : "absolute w-auto right-0 top-1/2";

    let contentAlignmentHorizMob;
    if ( settings.content_alignment_mob == 'left' ) {
        contentAlignmentHorizMob = 'justify-start ml-[-20px] md:ml-0';
    } else if ( settings.content_alignment_mob == 'right' ) {
        contentAlignmentHorizMob = 'justify-end mr-[-20px] md:mr-0';
    } else {
        contentAlignmentHorizMob = 'justify-around';
    }

    const contentAlignmentVerticalMob = ( settings.content_alignment_vertical_mob === 'bottom' ) ? "pt-[255px]" : "pb-[255px]";
    const contentAlignmentVertical = ( settings.content_alignment_vertical === 'bottom' ) ? "md:justify-end md:pb-0 md:pt-36" : "md:justify-start md:pt-0 md:pb-36";

    const imageMobPad = ( contentAlignmentVerticalMob == 'bottom' ) ? "bottom-[150px] md:bottom-0" : "top-[150px] md:top-0";

    return (
        <section className={`relative ${settings.margin_bottom ? "my-28" : "n" }`}>
            <div className="container">
                <div className={`lg:min-h-screen  relative  flex flex-col ${contentAlignmentVerticalMob} ${contentAlignmentVertical}`}>
                
                    <div className={`flex ${contentAlignmentHorizMob} md:justify-around relative z-10`}>
                        <div 
                        className={`w-9/12 md:w-6/12 max-w-[598px] p-4 lg:px-14 lg:py-9 text-center min-h-[308px] lg:min-h-[700px] flex flex-col justify-between items-center space-y-4 relative ${settings.content_color} ${settings.content_bg} ${settings.content_alignment === 'left' ? 'md:-left-1/4' : ''} ${settings.content_alignment === 'right' ? 'md:left-1/4' : ''}`}>
                            
                            { settings?.logo?.url ?
                            (<h2 className="heading-sub uppercase text-center pt-2 w-6/12 max-w-full mx-auto">
                                <img className="inline-block" src={settings.logo.url} alt={settings.logo.alt} loading="lazy"/>
                            </h2>) :
                            (<h2 className="heading-sub uppercase">{settings.title}</h2>) }
                            
                            { settings?.copy_img?.url && 
                            (<>
                                <div className="grow flex items-center justify-center py-0">
                                <div className="relative w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]">
                                <Image
                                src={settings.copy_img.url}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                priority
                                alt=""/>
                                </div>
                                </div>
                            </>) }


                            <div className="py-0 max-w-[416px]" dangerouslySetInnerHTML={ {__html: settings.copy} }/>
                            
                            { settings.cta.cta_title && 
                            (<div className="ml-auto">
                                <ButtonSecondary title={settings.cta.cta_title}/>
                            </div>) }

                        </div>
                    </div>

                    {
                    settings.bg_type === 'caption_full' && (<p className="heading-brand-large font-display absolute bottom-0 mb-[-40px] lg:mb-[-8vh]" dangerouslySetInnerHTML={ {__html: settings.bg_caption} }></p>)            
                    }

                </div>
            </div>

            { settings.bg_type === 'img_full' &&
            (<div className={`absolute w-full top-0 bottom-0 left-0 ${imageMobPad}`}>
                <div className="relative h-full w-full js-parallax overflow-hidden">
                    <Image
                    src={settings.img.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt=""/>
                </div>
            </div>)}
            
            { settings.bg_type === 'caption_img' &&
            (<>
            
            { settings.bg_caption && 
            (<div className={captionCaptionClass}>
                <div className="container">
                    <p className="heading-brand-medium" dangerouslySetInnerHTML={ {__html: settings.bg_caption }}/>
                </div>
            </div>) }
            
            <div className={`absolute w-full md:w-1/2 top-0 left-0 absolute w-full md:w-1/2 top-0 bottom-0 left-0 ${imageMobPad} ${captionImgClass} `}>
                <div className="relative h-full w-full js-parallax overflow-hidden">
                    <Image
                    src={settings.img.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt=""/>
                </div>
            </div></>) }

        </section>
    )
}

export default Billboard
