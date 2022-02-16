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
  