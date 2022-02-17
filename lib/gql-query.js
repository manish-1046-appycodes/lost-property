// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = process.env.API_URL+'/graphql';


async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
   
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()
    
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function getPage(id, idType = 'URI') {
  const data = await fetchAPI(
    `
    query MyQuery($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        uri
        title
        pageId
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data;
}

export async function getPageSeo(id, idType = 'URI') {
  const data = await fetchAPI(
    `
    query MyQuery($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        seo {
          canonical
          cornerstone
          focuskw
          metaDesc
          metaKeywords
          metaRobotsNofollow
          metaRobotsNoindex
          opengraphAuthor
          opengraphDescription
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          readingTime
          title
          twitterDescription
          twitterTitle
          opengraphImage {
              sourceUrl(size: LARGE)
          }
        }
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data;
}

export async function getPageSettings(id, idType = 'URI') {
  const data = await fetchAPI(
    `
    query MyQuery($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        pageSettings {
          pageSettings {
            bodyBackgroundColour
            footerBorder
            headerTheme
          }
        }
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data;
}

export async function getPagePageModules(id, idType = 'URI') {
  const data = await fetchAPI(
    `
    query MyQuery($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        pageModules {
          pageModules {
            ... on Page_Pagemodules_PageModules_PageModulesHero {
              heroTitle
              fieldGroupName
              heroImage {
                id
                sourceUrl(size: THUMB_1920)
                altText
              }
            }
            ... on Page_Pagemodules_PageModules_PageModulesBillboard {
              fieldGroupName
              title
              billboardType
              ctaLink {
                target
                title
                url
              }
              copy
              image {
                sourceUrl(size: THUMB_1920)
                altText
              }
              imagePosition
              contentBackgroundColour
              contentTextColour
              backgroundCaption
              
              logo {
                altText
                sourceUrl(size: THUMB_1920)
              }
              contentImage {
                altText
                sourceUrl(size: LARGE)
              }
              contentPosition {
                contentAlignment
                contentAlignmentMob
                contentAlignmentVertical
                contentAlignmentVerticalMob
              }
              settings {
                marginBottom
                marginTop
              }
            }

            ... on Page_Pagemodules_PageModules_GalleryCarousel {
              fieldGroupName
              carouselItems {
                image {
                  altText
                  sourceUrl
                }
                imageDescription
              }
              settings {
                colourTheme
              }
            }

            ... on Page_Pagemodules_PageModules_BookingSection {
              fieldGroupName
            }

            ... on Page_Pagemodules_PageModules_Ctas {
              fieldGroupName
              ctas {
                copy
                ctaLink {
                  target
                  title
                  url
                }
                image {
                  altText
                  sourceUrl(size: THUMB_1920)
                }
                title
                settings {
                  backgroundColour
                  textColour
                }
              }
              settings {
                altLayout
              }
            }

            ... on Page_Pagemodules_PageModules_PageIntro {
              fieldGroupName
              heading
              image {
                altText
                sourceUrl(size: THUMB_1920)
              }
            }

            ... on Page_Pagemodules_PageModules_Blockquote {
              blockquoteCopy
              blockquoteNamerole
              fieldGroupName
              stars
            }

            ... on Page_Pagemodules_PageModules_Marquee {
              fieldGroupName
              marqueeWords
            }

            ... on Page_Pagemodules_PageModules_UtilSpacer {
              fieldGroupName
            }

            ... on Page_Pagemodules_PageModules_AccordionRooms {
              fieldGroupName
              accordionRoomsTable {
                fieldGroupName
                contentDropdown {
                  fieldGroupName
                  column1 {
                    amenities
                    copy
                    fieldGroupName
                    title
                  }
                  image {
                    altText
                    sourceUrl
                  }
                }
                rowHeading {
                  bedType
                  fieldGroupName
                  roomType
                  sleeps
                }
              }
            }

            ... on Page_Pagemodules_PageModules_ExploreGallerymap {
              fieldGroupName
              locations {
                category
                description
                fieldGroupName
                title
                image {
                  altText
                  sourceUrl(size: LARGE)
                }
                mapCoordinates {
                  lattitude
                  longitude
                }
              }
            }

            ... on Page_Pagemodules_PageModules_Contact {
              fieldGroupName
            }

          }
        }
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data;
}


export async function getPageSlugs() {
  const data = await fetchAPI(
    `
    query MyQuery {
      pages {
        nodes {
          uri
        }
      }
    }`,
    {
      variables: {  },
    }
  )
  return data;
}

export async function getHeaderMenuItems() {
  const data = await fetchAPI(
    `
    query MyQuery {
      menuItems(where: {location: HEADER, parentId: "0"}) {
        edges {
          node {
            label
            connectedNode {
              node {
                uri
              }
            }
          }
        }
      }
    }`,
    {
      variables: {  },
    }
  )
  return data;
}


  