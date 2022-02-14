import Cookies from 'cookies'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = 'http://localhost/wp22/wp/salter-rake/wp/wp-json/jwt-auth/v1/token';

async function fetchAPI(query, {variables} = {}) {
    const headers = {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer Dcw:7YndHK{Qd;V_MZ#4c}Yd.>kl Q#l?zf|OYJw~T~=#J-OqB}g^ZG)bZE-wYgj'
    };
    
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify(query),
    });
    

    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json;
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
        const response = await fetchAPI({username: 'darren', password: 'BrownCow!9842014'});
        console.log(response)

        const cookies = new Cookies(req, res);
        cookies.set('jwt', response.data.token);

    //};

    res.status(200).json(response)
  
  }
  