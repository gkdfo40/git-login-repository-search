import { gql } from '@apollo/client';

export const GET_REPOGITORY = gql`
  query (
    $searchText: String!
    $FIRST: Int
    $LAST: Int
    $prevPage: String
    $nextPage: String
  ) {
    search(
      type: REPOSITORY
      query: $searchText
      first: $FIRST
      last: $LAST
      before: $prevPage
      after: $nextPage
    ) {
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
