import { gql } from '@apollo/client';

export const GET_REPOGITORY = gql`
  query ($searchText: String!, $nextPage: String) {
    search(type: REPOSITORY, query: $searchText, first: 100, after: $nextPage) {
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
          owner {
            id
            __typename
          }
          name
          stargazerCount
          updatedAt
        }
      }
    }
  }
`;
