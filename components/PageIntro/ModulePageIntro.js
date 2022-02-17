import ImageFade from "../ImageFade/ImageFade";

const ModulePageIntro = ({settings}) => {
    console.log(settings)
  return (
        <header className="page-intro min-h-screen flex items-center py-20 lg:py-28 overflow-hidden">

            <div className="container">

                { settings?.image?.sourceUrl && 
                <div className="w-11/12 mx-auto max-w-[598px] mt-[25px] lg:mt-[70px]">
                    <div className="pt-[100%] relative z-10">
                        <ImageFade
                            src={settings?.image?.sourceUrl}
                            alt={settings?.image?.altText}
                            width="598"
                            height="598"
                            layout="fill"
                            priority
                        />
                    </div>
                </div>
                }
                <div 
                dangerouslySetInnerHTML={ {__html: settings?.heading} }
                className="js-parallaxTextDown heading-brand-medium text-center transform translate-y-[-25px] lg:translate-y-[-70px] mx-auto "/>
            </div>

        </header>
    );
};

export default ModulePageIntro;
