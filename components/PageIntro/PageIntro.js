import Image from "next/image";
import ImageFade from "../ImageFade/ImageFade";

const PageIntro = () => {
  return (
        <header className="page-intro min-h-screen flex items-center py-20 lg:py-28">

            <div className="container">

                <div className="w-11/12 mx-auto max-w-[598px] mt-[25px] lg:mt-[70px]">
                    <div className="pt-[100%] relative z-10">
                        <ImageFade
                            src="/image/del/story/tate-modern-new.jpg"
                            alt="Kindly be lost"
                            width="598"
                            height="598"
                            layout="fill"
                            priority
                        />
                    </div>
                </div>
                <h1 className="js-parallaxTextDown heading-brand-medium text-center transform translate-y-[-25px] lg:translate-y-[-70px] mx-auto "><em>Loose yourself</em> <span className="inline-block">with us</span></h1>
            </div>

        </header>
    );
};

export default PageIntro;
