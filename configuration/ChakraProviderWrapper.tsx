import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { theme } from "./theme"

interface Props {
  children: React.ReactNode
}

export default function ChakraProviderWrapper({ children }: Props) {
  return (
    <ChakraProvider theme={theme}>
      <>{children}</>
    </ChakraProvider>
  )
}
