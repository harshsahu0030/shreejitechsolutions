import graphqlRequest from "../graphql";

export async function getSingleServices({ slug = "" }) {
  const query = {
    query: `query service {
  service(id: "${slug}", idType: SLUG) {
    content
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    title
    uri
    slug
    services {
      topSubHeading
      topParagraph
      topMainHeading
      serbiceDetails
      fieldGroupName
      centerHeading
      bottomImage {
        node {
          altText
          sourceUrl
        }
      }
      centerImage1 {
        node {
          altText
          sourceUrl
        }
      }
      image {
        node {
          altText
          sourceUrl
        }
      }
      topMainImage {
        node {
          altText
          sourceUrl
        }
      }
      topSecondImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const treatmentsList = resJson?.data?.service || [];

  return treatmentsList;
}
