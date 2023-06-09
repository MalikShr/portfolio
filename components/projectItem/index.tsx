"use client"
import { Box, HStack, Link, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import { SubHeader } from "../headers/subHeader"
import { TypingEffect } from "../TypingEffect"
import { MotionDiv } from "@/configuration/motion"
import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"
import { responisveButtonText } from "@/configuration/Values"
import { Project } from "./Data"
import { BsCodeSlash, BsFillGridFill } from "react-icons/bs"

export const ProjectItem: FC<Project> = (project: Project) => {
  const { title, description, logoSrc, projectLink, codeLink } = project

  return (
    <ChakraProviderWrapper>
      <VStack spacing={10}>
        <SubHeader title={title} />

        <Box as="article">
          <TypingEffect text={description} duration={0.1} />
        </Box>

        <MotionDiv
          w="100%"
          display="grid"
          justifyContent="center"
          alignContent="center"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          //@ts-ignore
          transition={{
            duration: 0.4,
            delay: 1,
            type: "spring",
            stiffness: 30,
          }}
        >
          <Image alt="log" src={logoSrc} height={256} width={256} />

          <HStack
            as="a"
            href={projectLink}
            target="_blank"
            bg="green.400"
            mt={5}
            p={3}
            borderRadius={5}
            textAlign="center"
            color="white"
            fontSize={responisveButtonText}
            fontWeight={600}
            userSelect="none"
            _hover={{
              bg: "green.300",
              cursor: "pointer",
              transform: "scale(1.02)",
            }}
          >
            <BsFillGridFill />
            <Box>Zum Projekt</Box>
          </HStack>

          <HStack
            as="a"
            href={codeLink}
            target="_blank"
            bg="blue.400"
            mt={5}
            p={3}
            borderRadius={5}
            textAlign="center"
            color="white"
            fontSize={responisveButtonText}
            fontWeight={600}
            userSelect="none"
            _hover={{
              bg: "blue.300",
              cursor: "pointer",
              transform: "scale(1.02)",
            }}
          >
            <BsCodeSlash />
            <Box>Source Code</Box>
          </HStack>
        </MotionDiv>
      </VStack>
    </ChakraProviderWrapper>
  )
}
