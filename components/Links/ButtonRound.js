import Link from "next/link";

const ButtonRound = ({url, bg, color, title, size, alt}) => {

  return (
    <Link href={url}>
        <a className={`button-round relative ${ size == 'small'  ? 'w-[62px] h-[62px]' : 'w-[86px] h-[86px]'} lg:w-[113px] lg:h-[113px] flex justify-center items-center group ${ alt == 'isAlt' ? 'text-current' : 'text-white'} cursor-pointer`}>
          <span className={`absolute w-full h-full rounded-full transition-transform transform group-hover:scale-110 ${ alt == 'isAlt' ? 'border border-current' : bg }`}></span>
          <span className={`p-2 relative ${ size == 'small' ? 'text-xs' : 'text-sm'} lg:text-base leading-12 lg:leading-12 text-center uppercase ${color}`} dangerouslySetInnerHTML={ {__html: title}}></span>
        </a>
    </Link>  
  );
};

export default ButtonRound;
