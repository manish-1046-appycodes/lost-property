import ArrowRightSvg from "../../public/image/icon/arrow-right-stretch.svg"

const ButtonSecondary = ({title}) => {
    return (
        <>
            <div className="button-secondary flex items-center">
                <div className="text-[0.75rem] lg:text-base uppercase">{title}</div>
                <ArrowRightSvg className="w-[75px] lg:w-[160px] ml-4 lg:ml-7"/>
            </div>  
        </>
    )
}

export default ButtonSecondary
