// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = 'http://localhost/wp22/wp/salter-rake/wp/graphql';

async function fetchAPI(query, {variables} = {}) {
    const headers = {'Content-Type': 'application/json'};
  
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({query, variables}),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
}

export default async function (req, res) {
    //res.status(200).json({ name: 'John Doe' });
    
    const gql = `
    query MyQuery {
        pages {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `;

    //const fetchData = async () => {
        const response = await fetchAPI(gql);
        console.log(response)
       

    //};

    res.status(200).json(response)
  
  }
  