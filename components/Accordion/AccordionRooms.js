import Image from "next/image";
import Script from 'next/script'

import ButtonRound from '../Links/ButtonRound'


const AccordionRooms = () => {

  const row = (
  <div className="accordion-row relative min-h-[85px] lg:min-h-[150px] border-t border-black ">

    <div className="container absolute">
      <div className="max-w-1430px mx-auto grid grid-5 gap-4 lg:gap-9  py-3 lg:py-4">
        <div className="lg:pt-4">Penthouse</div>
        <div className="lg:pt-4 col-span-2 lg:col-span-1">2 x King Bed</div>
        <div className="lg:pt-4 hidden lg:block">Sleeps x4</div>
        <div className="accordion-btn-initial justify-self-end duration-500 ease-in-out">
          <ButtonRound url="#" title="Buy <br/>Tickets" bg="bg-blue-1" size="small"/>
        </div>
        <div className="lg:pt-2">
          <button data-accordiontoggle className="z-10 transform duration-500 text-grey-1 relative w-[26px] h-[26px] lg:w-[68px] lg:h-[68px]" aria-hidden="true">
            <span className="w-full h-[1px] bg-current absolute top-1/2 left-0"></span>
            <span className="w-[1px] h-full bg-current absolute top-0 left-1/2"></span>
          </button>
        </div>
      </div>
    </div>

    <div className="accordion-child h-0 overflow-hidden opacity-0 duration-500 transition-[all] ease-in-out ">
      <div className="container">
        
        <div className="max-w-1430px mx-auto lg:grid grid-5 gap-4 lg:gap-9 pt-[85px] lg:pt-0 pb-3 lg:pb-9 relative">
          <div className="col-span-3 lg:py-[130px] mb-8 lg:mb-0 xl:grid gap-x-4 lg:gap-x-9 grid-cols-3">

            <h2 className="uppercase text-[32px] lg:text-[60px] mb-6 lg:mb-16 col-span-3">Double</h2>

            <div className="text-12px lg:text-16px md:max-w-[355px]  col-span-2 mb-6">
              <p>Felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, Felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, </p>
            </div>

            <div className=" mb-8 lg:mb-0">
              <div className="text-12px lg:text-16px">
                <p className="uppercase mb-5">Ameneties</p>
                <div className="pl-9">
                  <ul>
                    <li>49” HD TV</li>
                    <li>In-room app</li>
                    <li>Free WiFi</li>
                    <li>Chaise longue</li>
                    <li>Tea and coffee making facilities</li>
                    <li>Toiletries by Grown Alchemist</li>
                    <li>Mini-fridge</li>
                    <li>Laptop safe</li>
                    <li>Table for dining or work</li>
                    <li>Iron and board</li>
                    <li>Floor level 2 - 5</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          
          <div className=" w-1/2 lg:w-full lg:pt-9 ml-auto lg:ml-0">
            <div className="pt-[100%] relative">
              <Image
                src="/image/del/accordionrooms/example.jpg"
                objectFit="cover"
                objectPosition="center"
                alt="ALT"
                layout="fill"
              />
            </div>
          </div>
          <div className="invisible hidden lg:block">
            <button className="text-grey-1 relative w-[26px] h-[26px] lg:w-[68px] lg:h-[68px]" aria-hidden="true">
              <span className="w-full h-[1px] bg-current absolute top-1/2 left-0"></span>
              <span className="w-[1px] h-full bg-current absolute top-0 left-1/2"></span>
            </button>
          </div>

          <div className="actions absolute bottom-0 left-0 flex space-x-3 lg:space-x-5 py-3 lg:py-9">
            <ButtonRound url="#" title="Buy <br/>Tickets" bg="bg-blue-1" size="small"/>
            <ButtonRound url="#" title="Share <br/>Link" bg="bg-blue-1" size="small" alt="isAlt"/>
          </div>

        </div>

      </div>
    </div>

    <div className="accordion-preview fixed pointer-events-none invisible z-20 opacity-0 transition-[opacity] duration-500 ease-in-out">
      <Image
        src="/image/del/accordionrooms/example.jpg"
        objectFit="cover"
        objectPosition="center"
        alt="ALT"
        layout="fixed"
        width={400}
        height={300}
      />
    </div>

  </div>)

  return (
  <section>
    
    <div className="accordion-group ">
      {row}
      {row}
      {row}
      {row}

    </div>
    <Script id="Accordion" strategy="afterInteractive" src="/js/accordion.js"/>
  </section>

  
  );
};

export default AccordionRooms;
