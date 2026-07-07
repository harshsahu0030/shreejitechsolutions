import graphqlRequest from "../graphql";

export async function getAllProjects() {
  const query = {
    query: `query projects {
  projects {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    nodes {
      uri
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      projectsDeatil {
        mainSubHeading
        mainheading
      }
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const treatmentsList = resJson?.data?.projects?.nodes || [];

  return treatmentsList;
}
