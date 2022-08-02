
import { useEffect, useRef } from "react";
import ImageFade from "../ImageFade/ImageFade"

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const ModuleCarousel = ({settings}) => {

    const ref = useRef();
    
    useEffect( () => {
        Draggable.create(ref.current.querySelector('.carousel'), {
            type:"x",
            bounds: ref.current,
            //throwProps:true,
            inertia: true
        });
    }, []);

    return (
        <div ref={ref} id="carousel" className={`overflow-hidden w-full carousel-wrap ${settings?.settings?.colourTheme == 'blue' ? 'text-blue-1' : 'text-cream-1'}`}>
            <div className="carousel overflow-hidden flex w-fit">
                
                {  ( settings?.carouselItems && settings?.carouselItems.length ) && 
                    settings?.carouselItems.map( (item, key) => (
                        
                        <article key={key} className="w-10/12 lg:w-1/2 relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]">
                            <ImageFade
                                src={item?.image?.sourceUrl}
                                alt={item?.image?.altText}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />

                            { item?.imageDescription && 
                            <div className="caption bg-current absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className={`text-12px lg:text-21px pt-[18px] ${settings?.settings?.colourTheme == 'blue' ? 'text-white' : 'text-black'} `}>
                                    <p className="mb-[30px] lg:mb-[60px]">{ pad(key+1, 2) }</p>
                                
                                    <p dangerouslySetInnerHTML={ {__html: item?.imageDescription }}/>
                                </div>
                            </div>}
                        </article>
                    ))
                }

                

            </div>
        </div>
    )
}

export default ModuleCarousel
