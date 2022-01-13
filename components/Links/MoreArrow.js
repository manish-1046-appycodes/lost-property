import ArrowRight from "../../public/image/icon/arrow-right-stretch.svg"

const MoreArrow = ({title}) => {
    return (
        <>
            <div className="flex items-center">
                <div className="text-[0.75rem] lg:text-base uppercase">{title}</div>
                <ArrowRight className="ml-4 lg:ml-7"/>
            </div>  
        </>
    )
}

export default MoreArrow
