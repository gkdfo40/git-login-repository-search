import { gql } from '@apollo/client';

export const GET_REPOGITORY = gql`
  query ($searchText: String!, $nextPage: String) {
    search(type: REPOSITORY, query: $searchText, first: 10, after: $nextPage) {
      repositoryCount
      pageInfo {
        startCursor
        hasPreviousPage
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          id
          name
          url
          owner {
            login
            avatarUrl
          }

          stargazerCount
          updatedAt
        }
      }
    }
  }
`;
