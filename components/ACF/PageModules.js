import dynamic from "next/dynamic";
import Copy from "../Copy";
import CopyImageCta from "../CopyImageCta";

const ModuleHero = dynamic(() => import("../Hero/ModuleHero"));
const ModuleBillboard = dynamic(() => import("../Billboard/ModuleBillboard"));
const ModuleCarousel = dynamic(() => import("../Carousel/ModuleCarousel"));
const BookingSection = dynamic(() => import("../BookingSection/BookingSection"));
const ModuleCtas = dynamic(() => import("../Ctas/ModuleCtas"));
const ModulePageIntro = dynamic(() => import("../PageIntro/ModulePageIntro"));
const ModuleBlockquote = dynamic(() => import("../Blockquote/ModuleBlockquote"));
const ModuleMarquee = dynamic(() => import("../Marquee/ModuleMarquee"));
const ModuleAccordionRooms = dynamic(() => import("../Accordion/ModuleAccordionRooms"));
const ModuleExplore = dynamic(() => import("../ExploreMap/ModuleExplore"));
const ModuleContact = dynamic(() => import("../Contact/ModuleContact"));

const PageModules = ({pageModules}) => {
  return (
    <>
    
    { pageModules &&
    pageModules.map( (pageModule, i) => {
        
        
        switch(pageModule.fieldGroupName) {
            case 'Page_Pagemodules_PageModules_PageModulesHero':
                const heroImage = pageModule.heroImage;
                const heroTitle = pageModule.heroTitle;
                
                return <ModuleHero key={i} heroImage={heroImage} heroTitle={heroTitle}/>
                
            case 'Page_Pagemodules_PageModules_PageModulesBillboard':
                
                return <ModuleBillboard key={i} settings={pageModule}/>
            
            case 'Page_Pagemodules_PageModules_GalleryCarousel':

                return <ModuleCarousel key={i} settings={pageModule}/>

            case 'Page_Pagemodules_PageModules_BookingSection':

                return <BookingSection key={i}/>

            case 'Page_Pagemodules_PageModules_Ctas':

                return <ModuleCtas key={i} settings={pageModule}/>
                
            case 'Page_Pagemodules_PageModules_PageIntro':

                return <ModulePageIntro key={i} settings={pageModule}/>

            case 'Page_Pagemodules_PageModules_Blockquote':

                return <ModuleBlockquote key={i} settings={pageModule}/>

            case 'Page_Pagemodules_PageModules_Marquee':
                
                return <ModuleMarquee key={i} words={pageModule?.marqueeWords}/>
            
            case 'Page_Pagemodules_PageModules_UtilSpacer':

                return <div key={i} className="spacer h-[120px] lg:h-[150px]"></div>

            case 'Page_Pagemodules_PageModules_AccordionRooms':

                return <ModuleAccordionRooms key={i} settings={pageModule}/>

            
            case 'Page_Pagemodules_PageModules_ExploreGallerymap':

                return <ModuleExplore key={i} settings={pageModule} />

            case 'Page_Pagemodules_PageModules_Contact':

                return <ModuleContact key={i} />

            case 'Page_Pagemodules_PageModules_CopyImageCta':

                return <CopyImageCta key={i} settings={pageModule}/>

            case 'Page_Pagemodules_PageModules_Copy':
                return <Copy key={i} settings={pageModule}/>
        }   
        

    })}

    </>
  )
}

export default PageModules