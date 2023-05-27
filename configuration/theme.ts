import { responsiveMargin } from "@/configuration/Values"
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflowX: "hidden",
        color: "#2D3748",
      },
      main: {
        mx: responsiveMargin,
      },
    },
  },
})
