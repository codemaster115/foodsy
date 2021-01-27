import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { NextPage } from "next"

// eslint-disable-next-line react/display-name
export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  )
}

export const getApolloClient = (
  ctx?: any,
  initialState?: NormalizedCacheObject
) => {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetch,
  })
  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({
    link: httpLink,
    cache,
  })
}
