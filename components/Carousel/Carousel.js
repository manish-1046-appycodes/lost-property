import Image from "next/image"

import ImageFade from "../ImageFade/ImageFade"

const Carousel = ({imgs}) => {
    return (
        <div id="carousel" className="overflow-hidden w-screen carousel-wrap">
            <div className="carousel overflow-hidden flex w-fit  overflow-scrolling-touc">
                
                {  ( imgs && imgs.length ) && 
                    imgs.map( (img, key) => (
                        <article key={key} className="w-10/12 lg:w-1/2 relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]">
                            <ImageFade
                                src={img}
                                alt="ALT"
                                layout="fill"
                            />
                            <div className="caption bg-cream-1 absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-12px lg:text-21px pt-[18px]">
                                    <p className="mb-[30px] lg:mb-[60px]">01</p>
                                
                                    <p>Keys,<br/>By Wrapped Studios</p>
                                </div>
                            </div>
                        </article>
                    ))
                }

                <article className="w-10/12 lg:w-1/2 relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]">
                    <ImageFade
                        src="/image/del/carousel/slide-1.jpg"
                        alt="ALT"
                        layout="fill"
                    />
                    <div className="caption bg-cream-1 absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-12px lg:text-21px pt-[18px]">
                            <p className="mb-[30px] lg:mb-[60px]">01</p>
                        
                            <p>Keys,<br/>By Wrapped Studios</p>
                        </div>
                    </div>
                </article>

                <article className="w-10/12 lg:w-1/2 relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]">
                    <Image
                        src="/image/del/carousel/slide-2.jpg"
                        alt="ALT"
                        layout="fill"
                    />
                    <div className="caption bg-cream-1 absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-12px lg:text-21px pt-[18px]">
                            <p className="mb-[30px] lg:mb-[60px]">02</p>
                        
                            <p>Keys,<br/>By Wrapped Studios</p>
                        </div>
                    </div>
                </article>

                <article className="w-10/12 lg:w-1/2 relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]">
                    <Image
                        src="/image/del/carousel/slide-3.jpg"
                        alt="ALT"
                        layout="fill"
                    />
                    <div className="caption bg-cream-1 absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-12px lg:text-21px pt-[18px]">
                            <p className="mb-[30px] lg:mb-[60px]">03</p>
                        
                            <p>Keys,<br/>By Wrapped Studios</p>
                        </div>
                    </div>
                </article>


                

            </div>
        </div>
    )
}

export default Carousel
