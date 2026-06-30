import graphqlRequest from "../graphql";

export async function getAllServices() {
  const query = {
    query: `query services {
  services {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
        slug
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const treatmentsList = resJson?.data?.services?.nodes || [];

  return treatmentsList;
}
