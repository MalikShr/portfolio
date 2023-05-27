"use client"

import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"
import { MotionDiv } from "@/configuration/motion"
import { Box, HStack, Link, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { AiOutlineMail, AiFillPhone, AiFillGithub } from "react-icons/ai"

export const Contact = () => {
  return (
    <ChakraProviderWrapper>
      <Box
        display={{ base: "none", md: "flex" }}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <MotionDiv
          mr={10}
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          //@ts-ignore
          transition={{ duration: 2, type: "spring", stiffness: 50 }}
        >
          <Image src="/portrait.svg" alt="portrait" width={384} height={369} />
        </MotionDiv>

        <MotionDiv
          mt={{ base: 19, md: 0 }}
          display="grid"
          initial={{ x: -500 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          //@ts-ignore
          transition={{ duration: 2, type: "spring", stiffness: 50 }}
        >
          <HStack>
            <AiOutlineMail />

            <Box>Email: </Box>
            <Link href="mailto:malik.shr7@gmail.com" isExternal color="#3182CE">
              malik.shr7@gmail.com
            </Link>
          </HStack>
          <HStack>
            <AiFillPhone />
            <Box>Telefon: -</Box>
          </HStack>

          <HStack>
            <AiFillGithub />

            <Box>Github: </Box>
            <Link href="https://github.com/MalikShr" isExternal color="#3182CE">
              https://github.com/MalikShr
            </Link>
          </HStack>
        </MotionDiv>
      </Box>

      <VStack
        display={{ base: "grid", md: "none" }}
        w="100%"
        justifyContent="center"
      >
        <Image src="/portrait.svg" alt="portrait" width={384} height={369} />

        <HStack>
          <AiOutlineMail />
          <Box>Email: </Box>
          <Link href="mailto:malik.shr7@gmail.com" isExternal color="#3182CE">
            malik.shr7@gmail.com
          </Link>
        </HStack>
        <HStack>
          <AiFillPhone />
          <Box>Telefon: -</Box>
        </HStack>

        <HStack>
          <AiFillGithub />

          <Box>Github: </Box>
          <Link href="https://github.com/MalikShr" isExternal color="#3182CE">
            https://github.com/MalikShr
          </Link>
        </HStack>
      </VStack>
    </ChakraProviderWrapper>
  )
}
