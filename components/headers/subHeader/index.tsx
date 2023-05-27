"use client"
import React, { FC } from "react"
import { TypingEffect } from "../../TypingEffect"
import { MotionDiv } from "@/configuration/motion"
import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"
import { responsiveSubHeader } from "@/configuration/Values"
import { Box } from "@chakra-ui/react"

interface Props {
  title: string
}

export const SubHeader: FC<Props> = ({ title }) => {
  return (
    <ChakraProviderWrapper>
      <MotionDiv
        w="100%"
        mt={{ base: "50px", md: "100px" }}
        initial={{ x: "50%" }}
        whileInView={{ x: "0%" }}
        exit={{ x: "0%" }}
        fontSize={responsiveSubHeader}
        viewport={{ once: true }}
        fontWeight={600}
        overflow="hidden"
        //@ts-ignore
        transition={{ duration: 1, delay: title.length / 10 - 1 }}
      >
        <Box as="h3">
          <TypingEffect text={title} duration={50} />
        </Box>
      </MotionDiv>
    </ChakraProviderWrapper>
  )
}
