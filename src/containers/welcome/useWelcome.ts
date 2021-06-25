import { useStaticQuery, graphql } from 'gatsby';

const useWelcome = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPage {
          edges {
            node {
              id
              ... on ContentfulPage {
                id
                title
                description {
                  description
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default useWelcome;
