let accordionToggles = document.querySelectorAll('[data-accordiontoggle]');
  accordionToggles.forEach(function(el) {
    const group = el.closest('.accordion-group');
    const par = el.closest('.accordion-row');
    const accChild = par.querySelector('.accordion-child');
    
    el.addEventListener('click', function() {
        
        closeAccordions(par);

        
        if ( group.querySelectorAll('.accordion-row.active').length ) {
            setTimeout(function() {
                toggleAccordion();
            }, 0);
        } else {
            setTimeout(function() {
                toggleAccordion();
            }, 0);
        }
           
        
        
    });

    const toggleAccordion = () => {
        par.classList.toggle('active');

        if ( par.classList.contains('active') ) {
            const height = accChild.firstElementChild.offsetHeight;
            
            accChild.style.height = height + 'px';

            par.querySelector('[data-accordiontoggle]').classList.add('rotate-45');

            setTimeout(function() {
                accChild.classList.add('opacity-100');
                accChild.classList.remove('opacity-0');
            }, 500)
        } else {
            accChild.classList.remove('opacity-100');
            accChild.classList.add('opacity-0');
            setTimeout(function() {
                accChild.style.height = '0' + 'px';
                par.querySelector('[data-accordiontoggle]').classList.remove('rotate-45');
            }, 500);
        }
    }
  });

  const closeAccordions = (par) => {
      const group = par.closest('.accordion-group');
      const accordionRows = group.querySelectorAll('.accordion-row');
      accordionRows.forEach(function(el) {
          if ( el !== par ) {
              
              const accChild = el.querySelector('.accordion-child');
              el.classList.remove('active');
              
              accChild.classList.remove('opacity-100');
              accChild.classList.add('opacity-0');
              setTimeout(function() {
                  accChild.style.height = '0' + 'px';
                  el.querySelector('[data-accordiontoggle]').classList.remove('rotate-45');
              }, 500);
          }
      });

  }