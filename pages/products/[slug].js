import { GraphQLClient } from 'graphql-request';


const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckpnf7orlj3qa01w69nohcd4b/master'
  );
  

  export async function getStaticProps({ params }) {
    const { partnerPages } = await graphcms.request(
      `
      query PartnerPageQuery($slug: String!) {
        partnerPages(where: {slug: $slug}) {
            slug
            freeShipping
            header
            partnerLogo {
              url
            }
            partnerHeroImage {
              url
            }
          }
      }
    `,
      {
        slug: params.slug,
      }
    );
  
    return {
      props: {
        partnerPages ,
      },
    };

    
  }


///first query to get context

export async function getStaticPaths() {

    
    const products  = await graphcms.request(`
      {
        partnerPages{
            slug
            id
          }
      }
    `);
  
    return {
        
      paths: products.partnerPages.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: false,
    };

    
  }
  
const PartnerPageTemplate =({ partnerPages }) => {
    console.log( partnerPages )

    return(
   <>
      <h1>Testing</h1>
      
    </>
    );
  };


  export default PartnerPageTemplate


  