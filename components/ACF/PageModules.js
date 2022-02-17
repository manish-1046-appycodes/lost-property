import ModuleHero from "../Hero/ModuleHero"
import ModuleBillboard from "../Billboard/ModuleBillboard";
import ModuleCarousel from "../Carousel/ModuleCarousel";
import BookingSection from "../BookingSection/BookingSection";
import ModuleCtas from "../Ctas/ModuleCtas"
import ModulePageIntro from "../PageIntro/ModulePageIntro";
import ModuleBlockquote from "../Blockquote/ModuleBlockquote";
import ModuleMarquee from "../Marquee/ModuleMarquee";
import ModuleAccordionRooms from "../Accordion/ModuleAccordionRooms";
import ModuleExplore from "../ExploreMap/ModuleExplore";
import ModuleContact from "../Contact/ModuleContact";

const PageModules = ({pageModules}) => {
  return (
    <>
    
    {pageModules.map( (pageModule, i) => {
        
        
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
        }   
        

    })}

    </>
  )
}

export default PageModules