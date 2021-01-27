import { useState } from "react"
import {
  Heading,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Box,
  IconButton,
  Spinner,
} from "@chakra-ui/react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useGetShopLocationsQuery } from "../apollo/@types/codegen/graphql"
import { PageGetShopLocationsComp } from "../apollo/@types/codegen/page"
import { withApollo } from "../apollo/client"
import Layout from "../components/Layout"
import NextChakraLink from "../components/NextChakraLink"

const COUNT_PER_PAGE = 10

const Home: PageGetShopLocationsComp = props => {
  const [page, setPage] = useState(0)
  const { data, loading, error, refetch } = useGetShopLocationsQuery({
    ssr: true,
  })

  const handleNextPage = async () => {
    try {
      await refetch({
        take: COUNT_PER_PAGE,
        skip: (page + 1) * COUNT_PER_PAGE,
      })
      if (!error) setPage(page => page + 1)
    } catch (e) {
      console.log(e)
    }
  }
  const handlePrevPage = async () => {
    await refetch({
      take: COUNT_PER_PAGE,
      skip: (page - 1) * COUNT_PER_PAGE,
    })
    setPage(page => page - 1)
  }

  return (
    <Layout title="Home" description="Homepage of Foodsy's CMS">
      <Box textAlign="right" mt={4}>
        <NextChakraLink href="/create">Add</NextChakraLink>
      </Box>
      <Heading>{props.data?.shopLocations?.length}</Heading>
      <Table colorScheme="teal">
        <TableCaption placement="top">Shop Locations</TableCaption>
        <Thead>
          <Tr>
            <Th>City</Th>
            <Th>Location Type</Th>
            <Th>Latitude</Th>
            <Th>Longitude</Th>
            <Th>Order</Th>
            <Th>Map Order</Th>
            <Th>Created</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td textAlign="center" colSpan={7}>
                <Spinner size="lg" />
              </Td>
            </Tr>
          ) : data && data.shopLocations.length ? (
            data?.shopLocations?.map(shopLocation => (
              <Tr key={shopLocation.id}>
                <Td>{shopLocation.city}</Td>
                <Td>{shopLocation.locationType}</Td>
                <Td>{shopLocation.lat}</Td>
                <Td>{shopLocation.lon}</Td>
                <Td>{shopLocation.order}</Td>
                <Td>{shopLocation.mapOrder}</Td>
                <Td>{shopLocation.createdAt}</Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td textAlign="center" colSpan={7}>
                No data
              </Td>
            </Tr>
          )}
          {}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={3} isNumeric>
              <IconButton
                aria-label="prev_page"
                icon={<FaAngleLeft />}
                onClick={handlePrevPage}
                disabled={page === 0}
              />
            </Th>
            <Th colSpan={1} textAlign="center">
              Page: {page + 1}
            </Th>
            <Th colSpan={3}>
              <IconButton
                aria-label="next_page"
                icon={<FaAngleRight />}
                onClick={handleNextPage}
                disabled={
                  data?.shopLocations &&
                  data?.shopLocations?.length < COUNT_PER_PAGE
                }
              />
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Layout>
  )
}

export default withApollo(Home)
