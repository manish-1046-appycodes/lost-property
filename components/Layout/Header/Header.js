import Link from "next/link"
import ButtonSecondary from "../../Links/ButtonSecondary"

import Cross from "../../../public/image/icon/cross.svg"
import Logo from "../../../public/image/lost-property-logo.svg"

const Header = ({notice, toggleNavFunc, navOpenState, setNoticeFunc, isScrolledState, headerThemeBgState}) => {
    
  return (
    <div className={`absolute top-0 left-0 w-full z-40 `}>
                
        <div className={`${ notice ? 'h-[0px]' : 'h-[40px]'} overflow-hidden transition-[height,opacity] bg-blue-1 fixed w-full`}>
            <div className="container text-white h-[40px] flex justify-between items-center">
                
                <ButtonSecondary title="Covid-19 Updates"/>
                
                <div className="p-2 cursor-pointer" onClick={() => {setNoticeFunc(true)}}>
                    <Cross/>
                </div>
            </div>
        </div>

        <header className={`h-[120px] lg:h-[150px] flex fixed w-full transition-[top,background-color] pointer-events-none duration-500  ${ notice ? 'top-[0px]' : 'top-[40px]'} text-black ${ (!isScrolledState && headerThemeBgState == 'light')  && 'bg-transparent !text-white'} ${ isScrolledState && 'bg-cream-1/80'} `}>

            <nav className={`main-nav scale-95 pointer-events-auto user-select-none ${ navOpenState ? 'nav-open visible opacity-100 scale-100' : 'nav-closed'}`}>
                <ul  onClick={toggleNavFunc}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/story">
                        <a>Story</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/rooms">
                        <a>Rooms</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/food-drink">
                        <a>Eat &amp; Drink</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore">
                        <a>Explore</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                        <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore/map">
                        <a>Map</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={`container pointer-events-auto flex items-center ${ navOpenState ? 'text-white' : ''}`}>


                <button aria-hidden className="p-5 ml-3 absolute z-10 cursor-pointer absolute left-[20px] lg:left-[45px] top-1/2 transform -translate-y-1/2" onClick={toggleNavFunc}>
                    <div className={`relative h-[2px] bg-current w-[48px] transition-all ease-in-out ${ navOpenState ? 'rotate-45 top-[9px] !bg-white' : 'nav-closed'} `}></div>
                    <div className={`relative h-[2px] bg-current w-[48px] transition-all ease-in-out mt-4 ${ navOpenState ? '-rotate-45 top-[-9px] !bg-white' : 'nav-closed'}`}></div>
                </button>

                <Link href="/">
                    <a className="my-12 mx-auto hidden lg:block">
                        <Logo />
                    </a>
                </Link>

            </div>
        </header>
        
    </div>);
};

export default Header;
