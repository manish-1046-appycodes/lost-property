import ModuleHero from "../Hero/ModuleHero"
import ModuleBillboard from "../Billboard/ModuleBillboard";
import ModuleCarousel from "../Carousel/ModuleCarousel";
import BookingSection from "../BookingSection/BookingSection";
import ModuleCtas from "../Ctas/ModuleCtas"

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

                return <ModuleCtas key={i}  settings={pageModule}/>

            
        }
        

    })}

    </>
  )
}

export default PageModules