"use client"
import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"
import { responsiveHeader } from "@/configuration/Values"
import { Box } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
  title: string
  href: string
}

export const Header: FC<Props> = ({ title, href }) => {
  return (
    <ChakraProviderWrapper>
      <Box
        as="h2"
        id={href}
        mt={{ base: 100, md: 200 }}
        bg="#E53E3E"
        color="white"
        fontSize={responsiveHeader}
        fontWeight={600}
        textAlign="center"
      >
        {title}
      </Box>
    </ChakraProviderWrapper>
  )
}
