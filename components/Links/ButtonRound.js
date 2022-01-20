const ButtonRound = ({url, bg, title, size, alt}) => {

  return (
    <div href={url} className={`button-round relative ${ size == 'small'  ? 'w-[62px] h-[62px]' : 'w-[86px] h-[86px]'} lg:w-[113px] lg:h-[113px] flex justify-center items-center group ${ alt == 'isAlt' ? 'text-black' : 'text-white'} cursor-pointer`}>
        <span className={`absolute w-full h-full rounded-full transition-transform transform group-hover:scale-110 ${ alt == 'isAlt' ? 'border border-black' : bg }`}></span>
        <span className={`p-2 relative ${ size == 'small' ? 'text-xs' : 'text-sm'} lg:text-base leading-125 lgleading-125 text-center uppercase`} dangerouslySetInnerHTML={ {__html: title}}></span>
    </div>  
  );
};

export default ButtonRound;
