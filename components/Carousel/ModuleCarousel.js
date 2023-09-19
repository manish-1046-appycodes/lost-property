import { useEffect, useRef } from "react";
import ImageFade from "../ImageFade/ImageFade";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaBeer } from "react-icons/fa";
function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const ModuleCarousel = ({ settings }) => {
  const ref = useRef();

  useEffect(() => {
    Draggable.create(ref.current.querySelector(".carousel"), {
      type: "x",
      bounds: ref.current,
      //throwProps:true,
      inertia: true,
    });
  }, []);

  const carouselFunc = (e, direction) => {
    e.preventDefault();
    let width = ref.current.offsetWidth;
    console.log("This is element width", width);
    console.log("scrollvalue", ref.current.scrollLeft);
    if (direction === "right") {
      ref.current.scrollLeft += 370;
    } else {
      ref.current.scrollLeft -= 370;
    }
  };

  return (
    <div className="flex relative">
      {" "}
      <button
        onClick={(e) => carouselFunc(e, "left")}
        className="text-black text-xl absolute z-10 top-1/2 transform -translate-y-1/2"
      >
        <FaAngleLeft className="text-[3.2rem] text-black-1 bg-white bg-opacity-50" />
      </button>
      <div
        ref={ref}
        id="carousel"
        style={{ scrollBehavior: "smooth", transition: "1s ease-in-out" }}
        className={`overflow-hidden w-full carousel-wrap ${
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
        <div className="carousel overflow-hidden flex w-fit">
          {settings?.carouselItems &&
            settings?.carouselItems.length &&
            settings?.carouselItems.map((item, key) => (
              <article
                key={key}
                className="relative pt-[103.5vw] lg:pt-[41.7vw] shrink-0 group ml-3 w-[83.333333vw] lg:w-[50vw]"
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
            ))}
        </div>
      </div>
      <button
        onClick={(e) => carouselFunc(e, "right")}
        className="text-black text-xl absolute z-1 top-1/2 transform -translate-y-1/2 right-0"
      >
        {" "}
        <FaAngleRight className="text-[3.2rem] text-black-1 bg-white bg-opacity-60" />
      </button>
    </div>
  );
};

export default ModuleCarousel;
