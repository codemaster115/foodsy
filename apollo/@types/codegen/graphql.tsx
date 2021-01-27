import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type ShopLocation = {
  __typename?: "ShopLocation"
  id: Scalars["Int"]
  city: Scalars["String"]
  locationType: LocationType
  lat?: Maybe<Scalars["Float"]>
  lon?: Maybe<Scalars["Float"]>
  order?: Maybe<Scalars["Int"]>
  mapOrder?: Maybe<Scalars["Int"]>
  createdAt: Scalars["DateTime"]
  updatedAt: Scalars["DateTime"]
}

export type Query = {
  __typename?: "Query"
  shopLocation?: Maybe<ShopLocation>
  shopLocations: Array<ShopLocation>
  me?: Maybe<User>
}

export type QueryShopLocationArgs = {
  where: ShopLocationWhereUniqueInput
}

export type QueryShopLocationsArgs = {
  take?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  cursor?: Maybe<ShopLocationWhereUniqueInput>
}

export type User = {
  __typename?: "User"
  id: Scalars["Int"]
  givenName: Scalars["String"]
}

export enum LocationType {
  TrainStation = "TRAIN_STATION",
  City = "CITY",
}

export type ShopLocationWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
}

export type ShopLocationCreateInput = {
  name: Scalars["String"]
  city: Scalars["String"]
  locationType: LocationType
  lat?: Maybe<Scalars["Float"]>
  lon?: Maybe<Scalars["Float"]>
  order?: Maybe<Scalars["Int"]>
  mapOrder?: Maybe<Scalars["Int"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type Mutation = {
  __typename?: "Mutation"
  createOneShopLocation: ShopLocation
  deleteOneShopLocation?: Maybe<ShopLocation>
  logout?: Maybe<Scalars["Boolean"]>
}

export type MutationCreateOneShopLocationArgs = {
  data: ShopLocationCreateInput
}

export type MutationDeleteOneShopLocationArgs = {
  where: ShopLocationWhereUniqueInput
}

export type ShopLocationFragmentFragment = {
  __typename?: "ShopLocation"
} & Pick<
  ShopLocation,
  | "id"
  | "city"
  | "locationType"
  | "lat"
  | "lon"
  | "order"
  | "mapOrder"
  | "createdAt"
  | "updatedAt"
>

export type GetShopLocationsQueryVariables = Exact<{
  take?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
  cursor?: Maybe<ShopLocationWhereUniqueInput>
}>

export type GetShopLocationsQuery = { __typename?: "Query" } & {
  shopLocations: Array<
    { __typename?: "ShopLocation" } & ShopLocationFragmentFragment
  >
}

export type CreateOneShopLocationMutationVariables = Exact<{
  data: ShopLocationCreateInput
}>

export type CreateOneShopLocationMutation = { __typename?: "Mutation" } & {
  createOneShopLocation: {
    __typename?: "ShopLocation"
  } & ShopLocationFragmentFragment
}

export type DeleteOneShopLocationMutationVariables = Exact<{
  where: ShopLocationWhereUniqueInput
}>

export type DeleteOneShopLocationMutation = { __typename?: "Mutation" } & {
  deleteOneShopLocation?: Maybe<
    { __typename?: "ShopLocation" } & ShopLocationFragmentFragment
  >
}

export const ShopLocationFragmentFragmentDoc = gql`
  fragment ShopLocationFragment on ShopLocation {
    id
    city
    locationType
    lat
    lon
    order
    mapOrder
    createdAt
    updatedAt
  }
`
export const GetShopLocationsDocument = gql`
  query GetShopLocations(
    $take: Int
    $skip: Int
    $cursor: ShopLocationWhereUniqueInput
  ) {
    shopLocations(take: $take, skip: $skip, cursor: $cursor) {
      ...ShopLocationFragment
    }
  }
  ${ShopLocationFragmentFragmentDoc}
`

/**
 * __useGetShopLocationsQuery__
 *
 * To run a query within a React component, call `useGetShopLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopLocationsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetShopLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetShopLocationsQuery,
    GetShopLocationsQueryVariables
  >
) {
  return Apollo.useQuery<GetShopLocationsQuery, GetShopLocationsQueryVariables>(
    GetShopLocationsDocument,
    baseOptions
  )
}
export function useGetShopLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShopLocationsQuery,
    GetShopLocationsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    GetShopLocationsQuery,
    GetShopLocationsQueryVariables
  >(GetShopLocationsDocument, baseOptions)
}
export type GetShopLocationsQueryHookResult = ReturnType<
  typeof useGetShopLocationsQuery
>
export type GetShopLocationsLazyQueryHookResult = ReturnType<
  typeof useGetShopLocationsLazyQuery
>
export type GetShopLocationsQueryResult = Apollo.QueryResult<
  GetShopLocationsQuery,
  GetShopLocationsQueryVariables
>
export function refetchGetShopLocationsQuery(
  variables?: GetShopLocationsQueryVariables
) {
  return { query: GetShopLocationsDocument, variables: variables }
}
export const CreateOneShopLocationDocument = gql`
  mutation CreateOneShopLocation($data: ShopLocationCreateInput!) {
    createOneShopLocation(data: $data) {
      ...ShopLocationFragment
    }
  }
  ${ShopLocationFragmentFragmentDoc}
`
export type CreateOneShopLocationMutationFn = Apollo.MutationFunction<
  CreateOneShopLocationMutation,
  CreateOneShopLocationMutationVariables
>

/**
 * __useCreateOneShopLocationMutation__
 *
 * To run a mutation, you first call `useCreateOneShopLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneShopLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneShopLocationMutation, { data, loading, error }] = useCreateOneShopLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneShopLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneShopLocationMutation,
    CreateOneShopLocationMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateOneShopLocationMutation,
    CreateOneShopLocationMutationVariables
  >(CreateOneShopLocationDocument, baseOptions)
}
export type CreateOneShopLocationMutationHookResult = ReturnType<
  typeof useCreateOneShopLocationMutation
>
export type CreateOneShopLocationMutationResult = Apollo.MutationResult<CreateOneShopLocationMutation>
export type CreateOneShopLocationMutationOptions = Apollo.BaseMutationOptions<
  CreateOneShopLocationMutation,
  CreateOneShopLocationMutationVariables
>
export const DeleteOneShopLocationDocument = gql`
  mutation DeleteOneShopLocation($where: ShopLocationWhereUniqueInput!) {
    deleteOneShopLocation(where: $where) {
      ...ShopLocationFragment
    }
  }
  ${ShopLocationFragmentFragmentDoc}
`
export type DeleteOneShopLocationMutationFn = Apollo.MutationFunction<
  DeleteOneShopLocationMutation,
  DeleteOneShopLocationMutationVariables
>

/**
 * __useDeleteOneShopLocationMutation__
 *
 * To run a mutation, you first call `useDeleteOneShopLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneShopLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneShopLocationMutation, { data, loading, error }] = useDeleteOneShopLocationMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneShopLocationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneShopLocationMutation,
    DeleteOneShopLocationMutationVariables
  >
) {
  return Apollo.useMutation<
    DeleteOneShopLocationMutation,
    DeleteOneShopLocationMutationVariables
  >(DeleteOneShopLocationDocument, baseOptions)
}
export type DeleteOneShopLocationMutationHookResult = ReturnType<
  typeof useDeleteOneShopLocationMutation
>
export type DeleteOneShopLocationMutationResult = Apollo.MutationResult<DeleteOneShopLocationMutation>
export type DeleteOneShopLocationMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneShopLocationMutation,
  DeleteOneShopLocationMutationVariables
>
