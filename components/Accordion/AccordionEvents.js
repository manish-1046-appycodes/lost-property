import Image from "next/image";
import Script from 'next/script'

import ButtonRound from '../Links/ButtonRound'


const AccordionRooms = () => {

  const row = (
  <div className="accordion-row relative min-h-[85px] lg:min-h-[150px] border-t border-black ">

    <div className="container absolute">
      <div className="max-w-1430px mx-auto grid grid-4-mob lg:grid-4-lg gap-4 lg:gap-9  py-3 lg:py-4">
        <div className="lg:pt-4">01.02.21</div>
        <div className="lg:pt-4 col-span-1 lg:col-span-1">Unspoken word.</div>
        <div className="accordion-btn-initial justify-self-end duration-500 ease-in-out">
          <ButtonRound url="#" title="Buy <br/>Tickets" bg="bg-red-1" size="small"/>
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
        
        <div className="max-w-1430px mx-auto lg:grid grid-4-mob lg:grid-4-lg gap-4 lg:gap-9 pt-[85px] lg:pt-0 pb-3 lg:pb-9 relative">
          <div className="col-span-2 lg:py-[130px] lg:pb-[200px] mb-8 lg:mb-0 xl:grid gap-x-4 lg:gap-x-9">

            <h2 className="text-[42px] lg:text-[72px] md:max-w-[500px] mb-6 lg:mb-16 col-span-2">Lost Sounds of the 20’s</h2>

            <div className=" md:max-w-[420px]  col-span-2 mb-6">
                <div className="wysiwyg">
                    <p>7pm-til late</p>
                    <p>Felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?Etiam sed lorem eleifend, consequat felis nec, bibendum ante. Pellentesque dui urna, imperdiet lacinia lacus at?</p>
                </div>

            </div>

            

          </div>
          
          <div className=" w-1/2 lg:w-full lg:pt-9 ml-auto lg:ml-0">
            <div className="pt-[100%] lg:pt-[82%] relative">
              <Image
                src="/image/del/accordionevents/example.jpg"
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
            <ButtonRound url="#" title="Buy <br/>Tickets" bg="bg-red-1" size="small"/>
            <ButtonRound url="#" title="Share <br/>Link" bg="bg-red-1" size="small" alt="isAlt"/>
          </div>

        </div>

      </div>
    </div>

    <div className="accordion-preview fixed pointer-events-none invisible z-20 opacity-0 transition-[opacity] duration-500 ease-in-out">
      <Image
        src="/image/del/accordionevents/example.jpg"
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
