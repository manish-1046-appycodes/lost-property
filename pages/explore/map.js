import { useEffect, useRef, useState } from 'react'

import Head from 'next/head'

import Layout from '../../components/Layout/Layout'

import ButtonRound from '../../components/Links/ButtonRound'
import PageFade from '../../components/PageFade'
import ImageFade from '../../components/ImageFade/ImageFade'
import ParallaxItem from '../../components/UI/ParallaxItem'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoidHljYWRtaW4iLCJhIjoiY2t5ZWk3Y3VwMDhwNDJ3czI3OTN0MXR3OCJ9.338NIRkFMLb-YMuSvptahg';

const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.0983506,51.5138453]
        },
        properties: {
          title: 'St. Paul\'s Cathedral',
          description: 'Etiam sed lorem eleifend, consequat felis nec.Etiam sed lorem eleifend, con sequat felis nec.',
          category: 'Arts',
          marker_img: '/image/del/explore/img1.jpg'

        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.0826999,51.5097453]
        },
        properties: {
          title: 'St Dunstan in the East Church Garden',
          description: 'Etiam sed lorem eleifend, consequat felis nec.Etiam sed lorem eleifend, con sequat felis nec.',
          category: 'Arts',
          marker_img: '/image/del/explore/img1.jpg'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.1174699,51.5170382]
        },
        properties: {
          title: 'Sir John Soane\'s Museum',
          description: 'Etiam sed lorem eleifend, consequat felis nec.Etiam sed lorem eleifend, con sequat felis nec.',
          category: 'Culture',
          marker_img: '/image/del/explore/img1.jpg'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.1154775,51.5018693]
        },
        properties: {
          title: 'The Vaults London',
          description: 'Etiam sed lorem eleifend, consequat felis nec.Etiam sed lorem eleifend, con sequat felis nec.',
          category: 'Eating',
          marker_img: '/image/del/explore/img1.jpg'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.113926,51.524751]
        },
        properties: {
          title: 'The Postal Museum',
          description: 'Etiam sed lorem eleifend, consequat felis nec.Etiam sed lorem eleifend, con sequat felis nec.',
          category: 'Drinking',
          marker_img: '/image/del/explore/img1.jpg'
        }
      }
    ]
  };

export default function Page({test}) {

    const [filterOpen, setFilterOpen] = useState(false);

    const mapContainer = useRef(null);
    const map = useRef(null);
    
    const [lng, setLng] = useState(-0.113926);
    const [lat, setLat] = useState(51.524751);
    const [zoom, setZoom] = useState(12);
    const [mapCategories, setMapCategories] = useState([]);

    const filterWrap = useRef(null);

    const toggleFilter = () => {
        setFilterOpen( filterOpen => !filterOpen);

        const filterWrapHeight = filterWrap.current.firstChild.offsetHeight;

        if ( !filterOpen ) {
            
            filterWrap.current.style.height = filterWrapHeight +'px';
            setTimeout( function() {
                filterWrap.current.style.height = 'auto';
            }, 500)
        } else {
            filterWrap.current.style.height = filterWrapHeight +'px';
            setTimeout( function() {
                filterWrap.current.style.height = '0px'
            }, 10);
        }
    }

    useEffect(() => {
        gsapSettings.init()

        if (map.current) return; // initialize map only once
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/tycadmin/ckyeia99g0asj15pcvjdfpaqi',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', function () {
            
            // disable map zoom
            map.current.scrollZoom.disable();

            // Add zoom and rotation controls to the map.
            map.current.addControl(new mapboxgl.NavigationControl());

            map.current.addSource('places', {
                'type': 'geojson',
                'data': geojson
            });

            geojson.features.forEach(function (feature) {
                var title = feature.properties['title'];
                var category = feature.properties['category'];
                var symbol_url = feature.properties['icon_url'];
                var description = feature.properties['description'];
                var marker_img = feature.properties['marker_img'];
                var layerID = 'poi-' + category;
         
                // Add a layer for this symbol type if it hasn't been added already.
        
                    // Create a DOM element for each marker.
                    var el = document.createElement('div');
                    el.className = 'marker bg-blue-1 rounded-full transition-[opacity,visibility] duration-500 opacity-100';
                    el.setAttribute('data-mapLayer', layerID);
                    el.style.backgroundImage =
                    'url('+marker_img+')';
                    el.style.width = '68px';
                    el.style.height = '68px';
                    el.style.backgroundSize = 'contain';
                    
        
        
                    if ( description ) {
                        // create the popup
        
                         const markerHeight = 46;
                         const linearOffset = 10;
                         const markerRadius = 23;
                        
                        const popupOffsets = {
                            'top': [0, linearOffset],
                            'top-left': [0, 0],
                            'top-right': [0, 0],
                            'bottom': [0, -(markerHeight + linearOffset)],
                            'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                            'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                            'left': [markerRadius, (markerHeight - markerRadius) * -1],
                            'right': [-markerRadius, (markerHeight - markerRadius) * -1]
                            };
                        
                        const popup_html = `<div class=" ${layerID}-popup c-map__popup">
                        <h3 class="text-xs leading-12 lg:text-16px mb-5 uppercase">${title}</h3>
                        <p class="text-xs leading-12 lg:text-16px">${description}</p>
                        </div>`;
                        const popup = new mapboxgl.Popup({ offset: popupOffsets, closeButton: true }).setHTML(
                        popup_html
                        );

                        popup.setMaxWidth('270px')                      
                        
        
                        el.classList.add('has-desc');
                         
                        // Add markers to the map.
                        new mapboxgl.Marker(el, {anchor: 'bottom'})
                        .setLngLat(feature.geometry.coordinates)
                        .setPopup(popup)
                        .addTo(map.current);
                    } else {
                        // Add markers to the map.
                        new mapboxgl.Marker(el, {anchor: 'bottom'})
                        .setLngLat(feature.geometry.coordinates)
                        .addTo(map.current);
                    }
                        
                    if (!map.current.getLayer(layerID)) {
                    
                        map.current.addLayer({
                            'id': layerID,
                            'type': 'symbol',
                            'source': 'places',
                            'layout': {
                                // To add a new image to the style at runtime see
                                // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
                                'icon-allow-overlap': true
                            },
                            'filter': ['==', 'icon', category]
                        });
        
                    }
        
                    
            });
            

        })

        
        

    }, []);

    // map categories
    geojson.features.forEach( (feature) => {
        if ( !mapCategories.includes(feature.properties.category) ) {
            mapCategories.push( feature.properties.category)
        }
    })

    mapCategories.sort(function (a, b) {
        return a.localeCompare(b); //using String.prototype.localCompare()
    });

    const mapFilter = (e) => {
        const layerID = e.target.getAttribute('data-layer')
        
        if ( layerID == 'poi-All' ) {
            const layerTargetsRemove = document.querySelectorAll('[data-maplayer]');
            layerTargetsRemove.forEach(function(el) {
                el.classList.remove('invisible', 'opacity-0');
                el.classList.add('visible', 'opacity-100');
                
            });
        } else {
            const layerTargetsRemove = document.querySelectorAll('[data-maplayer]');
            layerTargetsRemove.forEach(function(el) {
                el.classList.remove('visible', 'opacity-100');
                el.classList.add('invisible', 'opacity-0');
            });

            const layerTargets = document.querySelectorAll('[data-maplayer="'+layerID+'"]');
            layerTargets.forEach(function(el) {
                el.classList.remove('invisible', 'opacity-0');
                el.classList.add('visible', 'opacity-100');
            });
        }
        
        toggleFilter();
        
        e.preventDefault();
    }
    
    
  
    return (
        <>
        <PageFade>
            
            <Head>
                <title>Lost Property</title>
                <meta name="description" content="Lost Property" />
                <link rel="icon" href="/favicon.ico" />
                
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />

            </Head>
            
            <div className="spacer h-[120px] lg:h-[150px]"></div>

            <div className="min-h-mob_min_height lg:min-h-lg_min_height flex flex-col">
                
                <div className={`w-full flex-1 order-2 lg:order-1 flex transition-[filter]  ${ (filterOpen ? 'blur-sm' : 'blur-0')} `}>
                    <div ref={mapContainer} id="my-map" className={`grow w-full`} />
                </div>

                <div className={`h-[56px] lg:h-[73px] relative z-10 order-1 lg:order-2 ${ (filterOpen ? 'filterOpen' : '')}`}>
                    
                    <div  onClick={toggleFilter} className={`cursor-pointer w-full bottom-0 left-0  opacity-50 backdrop-blur-xl min-h-mob_min_height lg:min-h-lg_min_height bg-cream-1 absolute ${ (filterOpen ? 'visible' : 'invisible')}`}></div>

                    <div className="absolute top-0 lg:top-auto lg:bottom-0 left-0 border-t border-b border-black bg-cream-1 w-full">

                        <div className="h-[56px] lg:h-[73px] flex justify-center items-center  cursor-pointer" onClick={toggleFilter}>

                            
                            <div className="absolute h-full w-[62px] bg-black flex left-0 bottom-0 h-[56px] lg:h-[73px]">
                                <div className="m-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                                    <g id="Group_540" data-name="Group 540" transform="translate(-17 -1026)">
                                        <g id="Rectangle_236" data-name="Rectangle 236" transform="translate(17 1026)" fill="none" stroke="#faf7f3" strokeWidth="1">
                                        <rect width="11" height="11" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="10" height="10" fill="none"/>
                                        </g>
                                        <g id="Rectangle_239" data-name="Rectangle 239" transform="translate(17 1042)" fill="none" stroke="#faf7f3" strokeWidth="1">
                                        <rect width="11" height="11" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="10" height="10" fill="none"/>
                                        </g>
                                        <g id="Rectangle_237" data-name="Rectangle 237" transform="translate(33 1026)" fill="none" stroke="#faf7f3" strokeWidth="1">
                                        <rect width="11" height="11" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="10" height="10" fill="none"/>
                                        </g>
                                        <g id="Rectangle_238" data-name="Rectangle 238" transform="translate(33 1042)" fill="none" stroke="#faf7f3" strokeWidth="1">
                                        <rect width="11" height="11" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="10" height="10" fill="none"/>
                                        </g>
                                    </g>
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <button data-accordiontoggle className="z-10 transform duration-500 text-grey-1 relative w-[26px] h-[26px]" aria-hidden="true">
                                    <span className="w-full h-[1px] bg-current absolute top-1/2 left-0"></span>
                                    <span className="w-[1px] h-full bg-current absolute top-0 left-1/2"></span>
                                </button>
                                <span className="text-[16px] uppercase">Filter</span>
                            </div>

                        </div>
                    
                        <div ref={filterWrap} className="filter-wrap h-0 overflow-hidden transition-all duration-500 ease-in-out">
                            <ul className="flex  flex-col  text-[30px] lg:text-[50px] uppercase text-center">
                                <li className="group border-t border-grey-1 flex justify-center py-2"><a onClick={mapFilter} data-layer={`poi-All`} href="#" className="group-hover:font-display inline-block">all</a></li>

                                { mapCategories.map( (mapCategory, i) => 
                                    <li key={i} className="group border-t border-grey-1 flex justify-center py-2"><a onClick={mapFilter} data-layer={`poi-${mapCategory}`} href="#" className="group-hover:font-display inline-block">{mapCategory}</a></li>
                                 )}

                                
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            
        </PageFade>
        </>
    )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>{page}</Layout>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      test: ""
    },
    revalidate: 1,
  };
}
