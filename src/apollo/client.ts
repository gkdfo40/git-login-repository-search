import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer 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`,
  },
});
