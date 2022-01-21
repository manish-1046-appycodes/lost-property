import Image from "next/image";

import ButtonSecondary from "../Links/ButtonSecondary";

const Cta = ({ bgClass, textColor, copy, title, img, btnTitle, btnUrl}) => {
  return (
    <div className={`w-full xl:w-1/2 ${bgClass} ${textColor}`}>
            
        <div className="ml-auto w-8/12 2xl:w-1/2 my-6 lg:my-14">
            <div className="container pl-0">
                <div className="max-w-[360px] wysiwyg">
                    <p>{copy}</p>
                    <ButtonSecondary title={btnTitle} url={btnUrl}/>
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 my-8 4xl:-mb-12">
            <div className="container">
                <h2 className="font-display leading-none text-[50px] lg:text-[100px] lg:leading-none">{title}</h2>
            </div>
        </div>
        <div className="ml-auto w-8/12 2xl:w-1/2">
        <Image
            src={img}
            alt="ALT"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            width="476"
            height="349"
        />
        </div>
    </div>
   );
};

export default Cta;
