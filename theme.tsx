import { extendTheme, theme as defaultTheme } from "@chakra-ui/react"
import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        font-display: optional;
        src: url(/fonts/inter-var-latin.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
      }
    `}
  />
)

export const theme = extendTheme({
  fonts: {
    heading: `Inter,${defaultTheme.fonts.heading}`,
    body: `Inter,${defaultTheme.fonts.body}`,
  },
  colors: {
    red: {
      50: "#ffe6e1",
      100: "#ffbdb3",
      200: "#fc9282",
      300: "#fa6852",
      400: "#f73e21",
      500: "#de2609",
      600: "#ad1c05",
      700: "#7d1303",
      800: "#4c0900",
      900: "#1f0000",
    },
    orange: {
      50: "#fff1dd",
      100: "#ffd6b0",
      200: "#fdbd81",
      300: "#fba251",
      400: "#f98821",
      500: "#df6e08",
      600: "#ae5604",
      700: "#7d3d02",
      800: "#4c2400",
      900: "#1e0a00",
    },
    green: {
      50: "#e2fbf2",
      100: "#c3ebde",
      200: "#a1dbca",
      300: "#7eccb5",
      400: "#5cbda0",
      500: "#42a386",
      600: "#317f68",
      700: "#215b4a",
      800: "#0e372c",
      900: "#00150e",
    },
    blue: {
      50: "#dff3ff",
      100: "#b6dafb",
      200: "#8bbff4",
      300: "#5fa6ec",
      400: "#348ce5",
      500: "#1a73cb",
      600: "#0f599f",
      700: "#054073",
      800: "#002648",
      900: "#000e1e",
    },
    purple: {
      50: "#f9eef9",
      100: "#e3cee4",
      200: "#cfaed0",
      300: "#bc8dbd",
      400: "#a96daa",
      500: "#8f5491",
      600: "#6f4171",
      700: "#502e51",
      800: "#301b31",
      900: "#130713",
    },
  },
})
