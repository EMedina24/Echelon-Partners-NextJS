import { GraphQLClient } from 'graphql-request';
import ProductCTA from '../../components/ProductCTA';
import useSWR from 'swr'
import { request } from "graphql-request";



const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckpnf7orlj3qa01w69nohcd4b/master'
  );
  

  const shopify = new GraphQLClient(
    'https://echelon-store.myshopify.com/api/2021-07/graphql.json',
    {headers: {
      'X-Shopify-Storefront-Access-Token': 'b785f4ee1f8ba77ab66dce258f1b4b8b'
    }
    });


   

  
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



    const  partnerProducts  = await  shopify.request(
      `
      {
        collectionByHandle(handle: "partnerProducts") {
          products(first: 20) {
            edges {
              node {
                description
                variants(first: 1){
                  edges{
                    node{
                      id
                      
                    }
                  }
                }
                id
                
                priceRange{
                  maxVariantPrice{
                    amount
                  }
                }
                handle
                images(first:1){
                  edges{
                    node{
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    
    );


  
    return {
      props: {
        partnerPages ,
        partnerProducts,
       
      },
    };

    
  }


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

  const countriesQuery = `
  {
    collectionByHandle(handle: "partnerProducts") {
      products(first: 20) {
        edges {
          node {
            description
            variants(first: 1){
              edges{
                node{
                  id
                  
                }
              }
            }
            id
            
            priceRange{
              maxVariantPrice{
                amount
              }
            }
            handle
            images(first:1){
              edges{
                node{
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }
  
  
  `


  
const PartnerPageTemplate =({ partnerPages, partnerProducts }) => {


  const { data: partners, error } = useSWR(countriesQuery, (query) =>
  shopify.request(query)
);

console.log({ partners, error });
console.log(partners);

   let productinfo 
   
   partnerProducts.collectionByHandle.products.edges
  

    if(!partners) return <div>...loading</div>
    if(partners) productinfo = partnerProducts.collectionByHandle.products.edges


    return(
   <>

      <h1>Testing</h1>
      <div className="contentWrapper">
      {productinfo.map((product, index) => (
            <ProductCTA
              product={product}
              key={index}
              index={index}
              //toggleCart={toggleCartModal}
            />
          ))}
</div>


    </>
    );
  };


  export default PartnerPageTemplate


  