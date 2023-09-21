import ImageFade from "../ImageFade/ImageFade";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const ModuleCarousel = ({ settings }) => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} right-arrow !right-0`} onClick={onClick}>
        <LiaAngleRightSolid />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} left-arrow !left-0`} onClick={onClick}>
        <LiaAngleLeftSolid />
      </div>
    );
  }
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className={`overflow-hidden w-full ${
        settings?.settings?.colourTheme == "blue"
          ? "text-blue-1"
          : "text-cream-1"
      }`}
    >
      {settings?.invisibleh1 && (
        <h1
          className="hidden"
          dangerouslySetInnerHTML={{ __html: settings?.invisibleh1 }}
        ></h1>
      )}
      <Slider {...setting}>
        {settings?.carouselItems &&
          settings?.carouselItems.length &&
          settings?.carouselItems.map((item, key) => (
            <div
              key={key}
              className="overflow-hidden flex w-fit justify-center carousel"
            >
              <article
                key={key}
                className="relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group lg:ml-3 lg:w-[83.333333vw] lg:w-[50vw]"
              >
                <ImageFade
                  src={item?.image?.sourceUrl}
                  alt={item?.image?.altText}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />

                {item?.imageDescription && (
                  <div className="caption bg-current absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div
                      className={`text-12px lg:text-21px pt-[18px] ${
                        settings?.settings?.colourTheme == "blue"
                          ? "text-white"
                          : "text-black"
                      } `}
                    >
                      <p className="mb-[30px] lg:mb-[60px]">
                        {pad(key + 1, 2)}
                      </p>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.imageDescription,
                        }}
                      />
                    </div>
                  </div>
                )}
              </article>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ModuleCarousel;
