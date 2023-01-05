import FormikForm from '../components/FormikForm';
import ReactHookForm from '../components/ReactHookForm';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


export default function Home({ response }) {

  console.log({ response });

  return (
    <>
      <ul>
        {
          response.data.launchesPast.map((x) => {
            return (
              <>
                <li key={x.id}>
                  <h1>{x.mission_name}</h1>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}


export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });

  const response = await client.query({
    query: gql`
    query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        mission_patch
      }
      rocket {
        rocket_name
      }
    }
  }
    
    `
  });


  return {
    props: {
      response
    }
  }
}