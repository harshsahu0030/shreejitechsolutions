import graphqlRequest from "../graphql";

export async function getSingleProject({ slug = "" }) {
  const query = {
    query: `query project {
  project(id: "${slug}", idType: SLUG) {
    uri
    title
    slug
    content
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    projectsDeatil {
      fieldGroupName
      mainSubHeading
      mainheading
      projectDetails
      projectUrl
      desktopImage1 {
        node {
          altText
          sourceUrl
        }
      }
      desktopImage2 {
        node {
          altText
          sourceUrl
        }
      }
      mobileImage1 {
        node {
          altText
          sourceUrl
        }
      }
      mobileImage2 {
        node {
          altText
          sourceUrl
        }
      }
      sectionImage1 {
        node {
          altText
          sourceUrl
        }
      }
      sectionImage2 {
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
  const treatmentsList = resJson?.data?.project || [];

  return treatmentsList;
}
