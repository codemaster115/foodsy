import { Heading } from "@chakra-ui/react"
import {
  useCreateOneShopLocationMutation,
  ShopLocationCreateInput,
} from "../apollo/@types/codegen/graphql"
import { withApollo } from "../apollo/client"
import FormAddShopLocation from "../components/forms/FormAddShopLocation"
import Layout from "../components/Layout"

const Create = () => {
  const [createOneShopLocation] = useCreateOneShopLocationMutation()

  const handleSubmit = async (data: ShopLocationCreateInput) => {
    console.log(data)
    await createOneShopLocation({
      variables: { data },
    })
  }

  return (
    <Layout title="Home" description="Homepage of Foodsy's CMS">
      <Heading mt={4} textAlign="center">
        Add Shop Location
      </Heading>
      <FormAddShopLocation onSubmit={handleSubmit} />
    </Layout>
  )
}

export default withApollo(Create)
