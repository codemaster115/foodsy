import type React from "react"
import { QueryHookOptions, useQuery } from "@apollo/client"
import * as Apollo from "@apollo/client"
import type { NormalizedCacheObject } from "@apollo/client"
import { NextPage } from "next"
import { NextRouter, useRouter } from "next/router"
import { getApolloClient } from "../../client"
import * as Types from "./graphql"
import * as Operations from "./graphql"
export async function getServerPageGetShopLocations(
  options: Omit<
    Apollo.QueryOptions<Types.GetShopLocationsQueryVariables>,
    "query"
  >,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetShopLocationsQuery>({
    ...options,
    query: Operations.GetShopLocationsDocument,
  })

  const apolloState = apolloClient.cache.extract()

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  }
}
export type PageGetShopLocationsComp = React.FC<{
  data?: Types.GetShopLocationsQuery
  error?: Apollo.ApolloError
}>
export const withPageGetShopLocations = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<
    Types.GetShopLocationsQuery,
    Types.GetShopLocationsQueryVariables
  >
) => (WrappedComponent: PageGetShopLocationsComp): NextPage => props => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(Operations.GetShopLocationsDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrGetShopLocations = {
  getServerPage: getServerPageGetShopLocations,
  withPage: withPageGetShopLocations,
}
