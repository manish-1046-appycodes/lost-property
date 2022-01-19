const ButtonRound = ({url, bg, title}) => {
  return (
    <div href={url} className="relative w-[86px] h-[86px] lg:w-[113px] lg:h-[113px] flex justify-center items-center group text-white cursor-pointer">
        <span className={`absolute w-full h-full rounded-full transition-transform transform group-hover:scale-110 ${bg}`}></span>
        <span className="p-2 relative text-sm lg:text-base leading-125 text-center uppercase" dangerouslySetInnerHTML={ {__html: title}}></span>
    </div>  
  );
};

export default ButtonRound;
