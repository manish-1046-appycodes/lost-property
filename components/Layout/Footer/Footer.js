import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer>
        <div className="container mb-10 lg:mb-20">
            <div className="max-w-1430px mx-auto lg:flex mt-10 mb-20 lg:my-20">
                <aside className="lg:flex lg:w-1/2 mb-10 lg:mb-0">
                    <h3 className="font-display text-[50px] leading-none lg:mr-10 mb-14 lg:mb-0">Find <em>us</em></h3>
                    <address className="pl-20 lg:pl-0 not-italic mx-auto">3-5 Ludgate Hill, London<br/>info@thelostproperty.co.uk<br/>020 473 0057</address>
                </aside>
                <aside className="pl-20 lg:pl-0 lg:flex lg:w-1/2 lg:space-x-10 justify-between">
                    <ul>
                        <li><a>Instagram</a></li>
                        <li><a>Facebook</a></li>
                    </ul>

                    <div className="lg:w-[58%] mt-20 lg:mt-0">
                        <h4 className="uppercase lg:mb-2">Stay in the know</h4>
                        <form className="inline-block max-w-[615px] w-full">
                            <div className="border-b border-black flex space-x-5 justify-between">
                            <input className="bg-transparent py-3 flex-1 lg:text-[14px] outline-none" type="email" placeholder="Enter your email"/>
                            <button className="uppercase text-[12px] lg:text-[16px]" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>

            <div className="text-left pl-20 lg:pl-0 lg:text-center mx-auto">
                
                <div className="inline-block text-left lg:text-center">
                    <Link href="/">
                        <a className="block w-[143px] lg:w-[185px] mb-5 lg:mb-6 lg:inline-block" >
                            <Image
                            src="/image/curio.png"
                            alt="Curio"
                            width="185"
                            height="63"
                            />
                        </a>
                    </Link>


                    <div className="opacity-[0.6] text-[10px] leading-[1.8] lg:text-16px inline-block lg:flex lg:space-x-10 lg:space-x-reverse">
                        <p className="lg:order-2">Copyright Lost Property Hotel 2021</p>   
                        <nav className="lg:flex space-x-5 lg:space-x-10"><a href="#">Cookies</a><a href="#">Privacy</a></nav>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    );
};

export default Footer;
