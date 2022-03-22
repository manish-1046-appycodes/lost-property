import ImageFade from "./ImageFade/ImageFade"
import ButtonRound from "./Links/ButtonRound"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
const { motion, useAnimation } = require("framer-motion");

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CopyImageCta = ({settings}) => {

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect( () => {
        if (inView) {
        controls.start('visible');
        }
    }, [controls, inView])

    const boxVariants = {
        hidden: { 
            opacity: 0,
            y: 40
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
    }

    return (
    <article className="my-20 lg:my-28">
        <div className="container">
            <div className="max-w-1430px mx-auto">

                <div className={`
                ${settings?.settings?.imagecontentAlignment == 'ilcr' ? 'flex-row-reverse md:space-x-reverse' : ''}
                md:flex space-y-10 md:space-y-0 justify-between relative z-10`}>

                     <div className={`
                     ${settings?.settings?.imagecontentAlignment == 'ilcr' ? 'md:pl-10' : 'md:pr-10'}
                     md:w-1/2 grow-0 max-w-[483px] space-y-10`}>
                         <div className="wysiwyg flex-initial" dangerouslySetInnerHTML={{ __html: settings?.content?.copy}}/>
                        
                        {settings?.content?.ctaButtons &&
                        <div className="flex space-x-5 flex-wrap">

                            {settings?.content?.ctaButtons.map( ({button}, i) =>
                            <ButtonRound
                            key={'button'+i}
                            color="text-black"
                            alt="isAlt"
                            title={button?.title} 
                            url={button?.url.replace(apiUrl, baseUrl)}
                            target={button?.target}
                            />
                            )}
                        </div>
                        }

                     </div>

                    <div className="max-w-[720px] md:w-1/2 flex-1 mx-auto">
                        <ImageFade
                        src={settings?.image?.image?.sourceUrl}
                        layout="intrinsic"
                        width={settings?.image?.image?.mediaDetails?.width}
                        height={settings?.image?.image?.mediaDetails?.height}
                        alt={settings?.image?.image?.altText}/>
                    </div>

                </div>
                { settings?.title &&
                <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={boxVariants}
                className={`
                ${settings?.settings?.imagecontentAlignment == 'ilcr' ? 'justify-start text-left' : 'justify-end text-right'}
                flex`}>
                    <h2 className="italic heading-brand-medium max-w-[1094px]  -translate-y-[25px] lg:-translate-y-[70px]">{settings.title}</h2>
                </motion.div>
                } 
            </div> 
        </div>
    </article>
  )
}

export default CopyImageCta