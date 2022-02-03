import {
  gql,
  useQuery,
  useSubscription,
  useLazyQuery,
  useMutation,
  useApolloClient as useGraphQLClient,
  ApolloProvider as GraphQLProvider,
  ApolloClient as GraphQLClient,
  InMemoryCache as GraphQLInMemoryCache,
  createHttpLink,
  HttpOptions,
  InMemoryCacheConfig,
} from "@apollo/client";

const createGraphQLClient = (
  uri: HttpOptions["uri"],
  config?: InMemoryCacheConfig
) =>
  new GraphQLClient({
    link: createHttpLink({ uri }),
    cache: new GraphQLInMemoryCache(config),
  });

export {
  createGraphQLClient,
  gql,
  useQuery,
  useSubscription,
  useLazyQuery,
  useMutation,
  useGraphQLClient,
  GraphQLProvider,
  GraphQLClient,
  GraphQLInMemoryCache,
};
