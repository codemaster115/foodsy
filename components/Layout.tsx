import { Fragment, ReactNode, ReactNodeArray } from "react"
import {
  chakra,
  Container,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react"
import Head from "next/head"
import { useWindowScroll } from "../hooks/useWindowScroll"
import NextChakraLink from "./NextChakraLink"

interface LayoutProps {
  title: string
  description: string
  children: ReactNode | ReactNodeArray
}

const Layout = ({ title, description, children }: LayoutProps) => {
  const { y } = useWindowScroll()

  const isScrolled = y > 10
  const logoWrapperMaxWidth = isScrolled ? "60px" : "80px"

  const headerPaddingY = isScrolled
    ? { base: "1rem", sm: "1rem", lg: "1rem" }
    : { base: "1rem", sm: "1.5rem", lg: "3rem" }

  return (
    <Fragment>
      <Head>
        <title>{title} - Foodsy CMS</title>
        <meta name="description" content={description} />
      </Head>
      <chakra.header
        pos="fixed"
        bgColor="purple.800"
        w="100%"
        py={headerPaddingY}
        transition="padding .3s ease"
      >
        <Container d="flex" alignItems="center">
          <NextChakraLink
            href="/"
            maxW={logoWrapperMaxWidth}
            transition="max-width .3s ease"
          >
            <Image
              src="/static/images/logo.png"
              alt="foodsy logo"
              maxW="100%"
              h="auto"
            />
          </NextChakraLink>
          <chakra.nav ml="auto">
            <UnorderedList
              d="flex"
              flexWrap="wrap"
              pl={0}
              mb={0}
              listStyleType="none"
              fontWeight="bold"
              color="white"
            >
              <ListItem>
                <NextChakraLink href="/">Home</NextChakraLink>
              </ListItem>
            </UnorderedList>
          </chakra.nav>
        </Container>
      </chakra.header>
      <Container as="main" minH="100vh" maxW="90ch" p="7.5rem 0 2.0625rem">
        {children}
      </Container>
    </Fragment>
  )
}

export default Layout
